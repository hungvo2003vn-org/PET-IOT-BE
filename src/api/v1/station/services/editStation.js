import station from "#~/model/station.js";

async function editStation({
    station_id,
    station_name,
    box_volumn,
    box_remain,
    food_name,
    disk_remain,
    mode,
    soundType,
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
    if (station_name !== undefined && station_name !== null) { updateFields.station_name = station_name;}
    if (box_volumn !== undefined && box_volumn !== null) { updateFields.box_volumn = box_volumn;}
    if (box_remain !== undefined && box_remain !== null) {updateFields.box_remain = box_remain;}
    if (food_name !== undefined && food_name !== null) {updateFields.food_name = food_name;}
    if (disk_remain !== undefined && disk_remain !== null) {updateFields.disk_remain = disk_remain;}
    if (mode !== undefined && mode !== null) {updateFields.mode = mode;}
    if (soundType !== undefined && soundType !== null) {updateFields.soundType = soundType;}

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
            -user_id
        `
        )

    return updatedStation;
}

export default editStation;
