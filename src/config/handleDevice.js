import { mqtt_client } from "./hiveMQ.js";
import newStation from '#~/api/v1/station/services/newStation.js';
import editStation from "#~/api/v1/station/services/editStation.js";


function handleMQTTClient() {
    mqtt_client.on('message', function (topic, message) {
        handleMessage(topic, message);
    });
}

async function handleMessage(topic, message) {
    message = JSON.parse(message);
    try {
        if (topic === 'station/register/device/send') {
            const data = await newStation();
            const response = {
                id: data.station_id
            };
            mqtt_client.publish('station/register/server/response', JSON.stringify(response));
        } 
        else if (topic === 'station/info') {
            const { station_id, disk_remain, box_remain } = message 

            try {
                const data = await editStation({ station_id, disk_remain, box_remain })
            } catch (error) {
                console.log(error)
                console.log('Cannot edit station')
            }
        }
    } catch (error) {
        console.error('Error handling message:', error);
    }
}

export default handleMQTTClient