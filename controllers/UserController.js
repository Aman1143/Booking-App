import SportCenter from '../models/booking/SportCenter.js'
import Field from '../models/booking/Field.js'
import Bull from 'bull';

const bookingQueue = new Bull('bookingQueue');

// Process the booking job
bookingQueue.process(async (job) => {
	const { field_id, index } = job.data;

	// Update the specific index in the time array to true (available)
	await Field.findByIdAndUpdate(
		field_id,
		{ [`time.${index}`]: false },
		{ new: true }
	);
});



// get All center for user that have atleast one center
export const getAllSportCenter = async (req, res) => {
	try {
		let sportCenters = await SportCenter.find({
			sports: { $exists: true, $not: { $size: 0 } }
		});

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



//  get all court (field)  for a particular sport like cricket hockey

export const getSportField = async (req, res) => {
	try {
		const allField = await Field.find({ sport: req.params.sport_id });
		res.status(200).json({
			success: true,
			allField
		})
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Internal server Error",
		});
	}
}


// Book your slot. 
// Admin can handle both booking and avilabilty

export const booKSlot = async (req, res) => {
	try {
		const { field_id, index } = req.params;
		let change = false;
		const field1 = await Field.findById(field_id);
		if (!field1.time[index]) {
			change = true;
		}

		const field = await Field.findByIdAndUpdate(
			field_id,
			{ [`time.${index}`]: change },
			{ new: true }
		);

		if (!field) {
			return res.status(404).json({ success: false, message: 'Field not found' });
		}

		// Add a job to the queue to make the slot available again after 1 hour
		await bookingQueue.add({ field_id, index }, { delay: 3600000 });

		res.status(200).json({
			success: true,
			field
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Internal server Error",
		});
	}
};


// get a particular field od sport
export const getField = async (req, res) => {
	try {
		const field = await Field.findById(req.params.fieldId);

		res.status(200).json({
			success: true,
			field,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Internal server Error",
		});
	}
}