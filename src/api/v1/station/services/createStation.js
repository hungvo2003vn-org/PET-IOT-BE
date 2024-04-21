import station from '#~/model/station.js';
import pet from '#~/model/pet.js';
import user from '#~/model/user.js';

async function createStation({
    station_id,
    station_name,
    box_volumn,
    box_remain,
    food_name,
    disk_remain,
    mode,
    soundType,
    pet_id,
    user_id
}) {

    // Check station
    let found_station = await station.findOne({station_id: station_id})
    
    if (!found_station){
        return Promise.reject({
            status: 404,
            message: `The feeding station with id: ${station_id} does not exist!`
        })
    } else if(found_station.user_id) {
        return Promise.reject({
            status: 503,
            message: `The feeding station with id: ${station_id} already setup by user!`
        })
    }

    // Check user
    let found_user = await user.findOne({_id: user_id});
    
    // Check pet
    let found_pet = await pet.findOne({_id: pet_id});

    //Check mode
    if (!mode){
        mode = false
    }

    const newStation = await station
        .findOneAndUpdate(
            {station_id: station_id},
            {
                station_name,
                station_status: true,
                box_volumn,
                box_remain,
                food_name,
                disk_remain,
                mode,
                soundType,
                pet_id,
                user_id
            },
            { new: true }
        )
        .select(
            `
                -_id
                -feedingLogs_finish 
                -feedingLogs_inProgress 
                -feedingLogs_new
                -__v
                -createdAt
                -updatedAt
            `
        )

    // Update userInfo
    if (found_user) {
        await user.updateOne(
            { _id: user_id },
            { $push: { feedingStations: newStation.station_id } }
        );
    }

    // Update petInfo
    if (found_pet) {
        await pet.updateOne(
            { _id: pet_id },
            { $set: { feedingStation: newStation.station_id } }
        );
    }
    
    return newStation;

}

export default createStation;
