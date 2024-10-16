import mongoose from 'mongoose';

const sportCenterSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	image: {
		public_id: String,
		url: String,
	},
	admin: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	games: [],
	sports: [
		{
			sport: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Sport',
			},
		},
	],

},
	{ timestamps: true }
)

const SportCenter = new mongoose.model("SportCenter", sportCenterSchema);

export default SportCenter;