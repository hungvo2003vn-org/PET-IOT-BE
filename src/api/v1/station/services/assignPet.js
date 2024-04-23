import station from "#~/model/station.js";
import pet from "#~/model/pet.js";
import isValidObjectId from "#~/middleware/checkValidId.js";

async function assignPet({
    station_id,
    pet_id
}) {

    const stationRecord = await station
        .findOne({ station_id: station_id})
        .select(`
            -feedingLogs_finish 
            -feedingLogs_inProgress 
            -feedingLogs_new
            -user_id
            -createdAt
            -updatedAt
            -__v
        `)
    
    // Station not found
    if(!stationRecord) {
        return Promise.reject({
            status: 404,
            message: `The station with id: ${station_id} was not found!`
        })
    }

    //Pet not found
    if(!pet_id || !isValidObjectId(pet_id)) {
        return Promise.reject({
            status: 404,
            message: `The pet with id: ${pet_id} was not found!`
        })
    }

    const petRecord = await pet.findById(pet_id)
    if(!petRecord) {
        return Promise.reject({
            status: 404,
            message: `The pet with id: ${pet_id} was not found!`
        })
    }

    //Already assign
    if(petRecord.station_id === station_id) {
        let returnStation = stationRecord.toObject()
        delete returnStation._id

        return {
            ...returnStation,
            message: "Already assigned to current pet"
        }
    }

    // Remove from current station
    if(petRecord.station_id !== null) {
        const removeStation = await station.findOneAndUpdate(
            { station_id: petRecord.station_id},
            {
                pet_id: null
            },
            { new: true }
        ).select(`-updatedAt`)
    }

    // Assign both
    petRecord.station_id = station_id
    stationRecord.pet_id = pet_id

    // Start saving
    await petRecord.save()
    await stationRecord.save()

    // Adjust result
    let returnStation = stationRecord.toObject()
    delete returnStation._id
    delete returnStation.updatedAt

    return returnStation
}

export default assignPet