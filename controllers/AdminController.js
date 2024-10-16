import SportCenter from '../models/booking/SportCenter.js'
import Sport from '../models/booking/Sport.js'
import Field from '../models/booking/Field.js'


// Adding sport center

export const addSportCenter = async (req, res) => {
	try {
		const { centerName, games } = req.body;
		const sportCenter = await SportCenter.create({
			name: centerName,
			admin: req.body._id,
			games,
		});

		sportCenter.save();
		res.status(200).json({
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


//GetAll admin's center that is created by only that user

export const getAllSportCenter = async (req, res) => {
	try {
		console.log(req.body._id);

		const sportCenters = await SportCenter.find({admin:req.body._id});
		res.status(200).json({
			success: true,
			sportCenters,
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({
			success: false,
			message: "Internal server Error",
		});
	}
}



// get sport by it's uniqe id

export const getSportS = async (req, res) => {
	try {
		const sportCenter = await SportCenter.findById(req.params.center_id);
		if (sportCenter.sports.length == 0) {
			return res.status(200).json({
				success: true,
				sports: [],
			})
		}

		const sportArray = sportCenter.sports;
		let sports = await Promise.all(
			sportArray.map(async (item) => { 
				return await Sport.find({_id:item._id});
			})
		);
		sports=sports.flat(); 
	  return	res.status(200).json({
			success: true,
			sports,
		})

	} catch (error) {
		console.log(error)
		res.status(500).json({
			success: false,
			message: "Internal server Error",
		});
	}
}




// Adding a particular sport in the center by admin


export const addSport = async (req, res) => {
	try {
		const { sportName, totalField } = req.body;
		let sport = await Sport.create({
			sportName,
			totalField,
			sportCenter: req.params.center_id
		})

		let sportCenter = await SportCenter.findById(req.params.center_id);
		await sportCenter.sports.push(sport._id);
		sportCenter.save();

		const allFields = [];
		let time = [];
		for (let i = 0; i < 24; i++) {
			time.push(false);
		}

		for (let i = 0; i < totalField; i++) {
			const field = await Field.create({
				time,
				sport: sport._id,
			});
			allFields.push(field._id);
		}

		sport.fields = allFields;
		await sport.save();

		res.status(200).json({
			success: true,
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({
			success: false,
			message: "Internal server Error",
		});
	}
}