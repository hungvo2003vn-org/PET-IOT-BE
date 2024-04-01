import mongoose from 'mongoose'
const Schema = mongoose.Schema
const station = new Schema(
	{
		box_volumn: {type: Number, default: null},
        box_remain: {type: Number, default: null},
        food_name: {type: String, default: null},
        disk_remain: {type: Number, default: null},
        mode: {type: Boolean, default: false},
        soundType: {type: String, default: null},

        pet: {type: String, default: null},
        user: {type: String, default: null},
        feedingLogs_finish: {type: [String]},
        feedingLogs_inProgress: {type: [String]},
        feedingLogs_new: {type: [String]}
	},

	{
		timestamps: true,
	}
)
export default mongoose.model('stations', station)