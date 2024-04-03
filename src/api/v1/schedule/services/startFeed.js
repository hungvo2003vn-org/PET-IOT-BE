import { mqtt_client } from "#~/config/hiveMQ.js"

async function startFeed({
    station_id,
    feed_amount
}) {
    if (typeof feed_amount !== 'number' || isNaN(feed_amount)) {
        return Promise.reject({
            status: 503,
            message: `Invalid feed_amount = ${feed_amount}`
        })
    }

    const message = {
        feed_amount
    }

    mqtt_client.publish('feedRecord/start/server/send', JSON.stringify(message))

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

    try {
        await responsePromise
    } catch (error) {
        return Promise.reject(error)
    }

    //TODO: Store feed_amount, food_name, status, disk_remain, start_amount, station_id, pet_id, mode

    return {
        feed_amount,
        start_amount
    }
}

export default startFeed
