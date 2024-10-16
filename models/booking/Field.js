import mongoose from 'mongoose';

const fieldSchema = new mongoose.Schema({
	time: [Boolean],
	sport: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Sport',
	}

},
	{ timestamps: true }
)

const Field = new mongoose.model("Field", fieldSchema);

export default Field;