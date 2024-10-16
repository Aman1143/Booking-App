import User from "../models/auth/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export const register = async (req, res) => {
	try {
		const { name, email, password, isAdmin } = req.body; 
		const oldUser = await User.findOne({ email });
		if (oldUser) return res.status(400).json({
			message: "User already exists",
			success: false
		})
 
		const salt = await bcrypt.genSalt(10);
		const hashPassword = await bcrypt.hash(password, salt);
		let user = await User.create({
			name,
			password: hashPassword,
			email,
			isAdmin
		}) 
		user.save();

		console.log("hell3");
		const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_KEY, {
			expiresIn: 30 * 24 * 60 * 60 * 1000
		});

		const { _id, isAdmin:userAdmin } = user;
		user = { _id, userAdmin };
       

		console.log(user);
		res.status(200).json({
			token,
			user,
			message: "User Saved",
			success: true
		})
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Internal server Error",
		});
	}


}

export const login = async (req, res) => {
	try {
		const { email, password, isAdmin } = req.body; 
		let user = await User.findOne({ email }).select("+password");
		if (!user) {
			return res.status(404).json({
				success: false,
				message: "user not found",
			});
		}
		if (user.isAdmin != isAdmin) { 
			return res.status(400).json({
				success: false,
				message: "Sorry You have mismatch the role !!",
			});
		}
		const validity = await bcrypt.compare(password, user.password);
		if (!validity) { 
			return res.status(403).json({
				message: "Invalid credensitial",
				success: false
			})
		}
		const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_KEY, {
			expiresIn: 30 * 24 * 60 * 60 * 1000
		});

		const { _id, isAdmin:userAdmin, name } = user;
		user = { _id, userAdmin, name }; 
		res.status(200).json({
			token,
			user,
			message: "User logged In",
			success: true,
		})
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Internal server Error",
		});
	}
}