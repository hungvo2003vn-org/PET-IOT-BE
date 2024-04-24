import feedingLog from "#~/model/feedRecord.js"
import station from "#~/model/station.js"
import { mqtt_client } from "#~/config/hiveMQ.js"

async function startFeed({
    station_id,
    feed_amount,
    schedule_id, //Not need for Front-end when fetching
    start_time //Not need for Front-end when fetching
}) {

    //Check if the feed_amount is in valid type
    if (typeof feed_amount !== 'number' || isNaN(feed_amount)) {
        return Promise.reject({
            status: 503,
            message: `Invalid feed_amount = ${feed_amount}`
        })
    }

    //Check if the station is exist or not
    const checkStation = await station.findOne({station_id: station_id})
    if(!checkStation) {
        return Promise.reject({
            status: 404,
            message: `The station with id=${station_id} was not found!`
        })
    }

    //Send Feeding Message to device
    const message = {
        station_id,
        feed_amount
    }
    mqtt_client.publish('feedRecord/start/server/send', JSON.stringify(message))

    //Receive Feeding Signal from the device
    let start_amount = null

    const responsePromise = new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            reject({
                status: 504,
                message: 'Timeout: Device did not respond within 10 seconds'
            })
        }, 10000)

        mqtt_client.on('message', function (topic, message) {
            message = JSON.parse(message)

            if (topic === 'feedRecord/start/device/response') {
                clearTimeout(timeout)
                start_amount = message.start_amount
                resolve(start_amount)
            }
        })
    })

    // If the device does not response in 10 seconds, return the Timeout Error!
    try {
        await responsePromise
    } catch (error) {
        return Promise.reject(error)
    }


    //Manual mode
    if(!start_time) {

        const newSchedule = await feedingLog.create({
            start_time: new Date(),
            feed_amount,
            food_name: checkStation.food_name,
            status: "In Progress",
            start_amount,
            mode: false,
            station_id,
            pet_id: checkStation.pet_id
        })

        return newSchedule
    } 

    //Automatic mode
    const getSchedule = await feedingLog.findByIdAndUpdate(
        schedule_id,
        {
            status : "In Progress",
            start_amount
        },
        {new: true}
    ).select(
        `
            -__v
            -createdAt
            -updatedAt
        `
    )
    return getSchedule
}

export default startFeed
