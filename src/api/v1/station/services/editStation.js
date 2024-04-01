import station from "#~/model/station.js";

async function editStation({
    station_id,
    box_volumn,
    box_remain,
    food_name,
    disk_remain,
    mode,
    soundType,
    pet_id,
}) {

    // Find the station with the provided ID
    const existingStation = await station.findOne({station_id: station_id});

    // Check if the station exists
    if (!existingStation) {
        return Promise.reject ({
            status: 404,
            message: `The feeding station with id: ${station_id} does not exist!`
        });
    }

    // Update station properties
    const updateFields = {};
    if (box_volumn !== undefined) { updateFields.box_volumn = box_volumn;}
    if (box_remain !== undefined) {updateFields.box_remain = box_remain;}
    if (food_name !== undefined) {updateFields.food_name = food_name;}
    if (disk_remain !== undefined) {updateFields.disk_remain = disk_remain;}
    if (mode !== undefined) {updateFields.mode = mode;}
    if (soundType !== undefined) {updateFields.soundType = soundType;}
    if (pet_id !== undefined) {updateFields.pet_id = pet_id;}

    // Find and update the station
    const updatedStation = await station
        .findOneAndUpdate(
            { station_id: station_id },
            updateFields,
            { new: true } // Return the updated document
        )
        .select(`
            -_id
            -feedingLogs_finish 
            -feedingLogs_inProgress 
            -feedingLogs_new
            -__v
            -createdAt
            -updatedAt
        `
        )

    return updatedStation;
}

export default editStation;
