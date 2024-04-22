import feedingLog from "#~/model/feedRecord.js";
import {} from 'dotenv/config'

async function getSchedules({
    station_id
}) {
    const allSchedules = await feedingLog.find({ station_id }).select(`
        -__v
        -createdAt
        -updatedAt
    `);

    // Convert UTC times to Vietnamese time zone (+7)
    const timeZoneOffset = process.env.TIMEZONE_OFFSET * 60 * 60 * 1000; // Offset in milliseconds
    allSchedules.forEach(schedule => {
        schedule.start_time = new Date(new Date(schedule.start_time).getTime() + timeZoneOffset);
        schedule.end_time = new Date(new Date(schedule.end_time).getTime() + timeZoneOffset);
    });

    return allSchedules;
}

export default getSchedules;
