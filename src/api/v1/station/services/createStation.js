import station from '#~/model/station.js';
import pet from '#~/model/pet.js';
import user from '#~/model/user.js';

async function createStation({
    station_id,
    box_volumn,
    box_remain,
    food_name,
    disk_remain,
    mode,
    soundType,
    pet_id,
    user_id
}) {

    // Check station_id
    if (!station_id.match(/^[0-9a-fA-F]{24}$/)) {
        return Promise.reject ({
            status: 404,
            message: `The feeding station with id: ${station_id} does not exist!`
        });
    }

    // Check station
    let found_station = await station.findOne({station_id})
    if (!found_station){
        return Promise.reject({
            status: 404,
            message: `The feeding station with id: ${station_id} does not exist!`
        })
    }

    // Check user
    let found_user = await user.findOne({user_id});
    
    // Check pet
    let found_pet = await pet.findOne({pet_id});

    //Check mode
    if (!mode){
        mode = false
    }

    // Create new station
    const newStation = await station.create({
        box_volumn,
        box_remain,
        food_name,
        disk_remain,
        mode,
        soundType,
        pet_id,
        user_id
    });

    // Update userInfo
    if (found_user) {
        await user.updateOne(
            { _id: user_id },
            { $push: { feedingStations: newStation._id } }
        );
    }

    // Update petInfo
    if (found_pet) {
        await pet.updateOne(
            { _id: pet_id },
            { $set: { feedingStation: newStation._id } }
        );
    }
    
    return newStation;

}

export default createStation;
