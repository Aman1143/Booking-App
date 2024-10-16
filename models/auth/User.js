import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	name: {
		type: String, 
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
		select:false,
	},
	isAdmin: {
		type: Boolean,
		required: true,
	}

},
	{ timestamps: true }
)

const User = new mongoose.model("User", userSchema);

export default User;