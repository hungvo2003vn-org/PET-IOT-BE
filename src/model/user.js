import mongoose from 'mongoose'
const Schema = mongoose.Schema
const user = new Schema(
	{
		email: {type: String, default: null, maxLength: 100},
		password: {type: String, default: null},
		firstName: {type: String, default: null, maxLength: 50},
		lastName: {type: String, default: null, maxLength: 50},
		pets: {type: [String]},
		feedingStations:{type: [String]},
	},
	{
		timestamps: true,
	}
)
export default mongoose.model('users', user)