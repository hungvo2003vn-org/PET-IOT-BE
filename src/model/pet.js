import mongoose from 'mongoose'
const Schema = mongoose.Schema
const pet = new Schema(
	{
		type: {type: String, default: null},
        breed: {type: String, default: null},
        birth_date: {type: Date, default: null},
        color: {type: String, default: null},
        name: {type: String, default: null},
        user_note: {type: String, default: null},
        image: {type: String, default: null},
        medical_records: [
            {
                date: {type: Date, default: null},
                description: {type: String, default: null}
            }
        ],
        medicines: [{
            type: {type: String, default: null},
            name: {type: String, default: null}
        }],
        health_records: [{
            status: {type: String, default: null},
            weight: {type: Number, default: null},
            record_date: {type: Date, default: null}
        }],
        feedingStation: {type: String, default: null},
        feedingLogs: {type: [String]},
        user: {type: String, default: null}
	},

	{
		timestamps: true,
	}
)
export default mongoose.model('pets', pet)