import mongoose from 'mongoose'
const Schema = mongoose.Schema
const station = new Schema(
	{
        station_id: {
            type: String, 
            maxLength: 16, 
            default: () => {
                const timestamp = Date.now().toString(36); 
                const randomChars = Math.random().toString(36).slice(2, 8);
                const uniqueId = timestamp + randomChars;
                return uniqueId.slice(0, 16);
            },
            unique: true},

        station_name: {type: String, default: null},
        station_status: {type: Boolean, default: true},
		box_volumn: {type: Number, default: null},
        box_remain: {type: Number, default: null},
        food_name: {type: String, default: null},
        disk_remain: {type: Number, default: null},
        mode: {type: Boolean, default: false},
        soundType: {type: String, default: null},

        pet_id: {type: String, default: null},
        user_id: {type: String, default: null},
        feedingLogs_finish: {type: [String]},
        feedingLogs_inProgress: {type: [String]},
        feedingLogs_new: {type: [String]}
	},

	{
		timestamps: true,
	}
)
export default mongoose.model('stations', station)