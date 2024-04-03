import mongoose from 'mongoose'
const Schema = mongoose.Schema
const feedingLog = new Schema(
	{
        start_time: {type: Date, default: null},
        end_time: {type: Date, default: null},
        

		feed_amount: {type: Number, default: null},
        food_name: {type: String, default: null},
        status: {type: String, default: null}, //New, In Progress, Finish
        disk_remain: {type: Number, default: null},
        start_amount: {type: Number, default: null},
        mode: {type: Boolean, default: false},

        station_id: {type: String, default: null},
        pet_id: {type: String, default: null},
	},

	{
		timestamps: true,
	}
)
export default mongoose.model('feedingLogs', feedingLog)