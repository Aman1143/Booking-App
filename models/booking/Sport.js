import mongoose from 'mongoose';

const sportSchema = new mongoose.Schema({
	sportName: {
		type: String,
		required: true,
	},
	totalField:{
       type:Number,
	},
	sportCenter: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'SportCenter'
	},
	fields: [{
		fields: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Field"
		}
	}]

},
	{ timestamps: true }
)

const Sport = new mongoose.model("Sport", sportSchema);

export default Sport;