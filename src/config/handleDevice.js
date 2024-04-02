import { mqtt_client } from "./hiveMQ.js";
import newStation from '#~/api/v1/station/services/newStation.js';
import editStation from "#~/api/v1/station/services/editStation.js";


function handleMQTTClient() {
    mqtt_client.on('message', function (topic, message) {

        message = JSON.parse(message)
    
        if(topic === 'station/register/send') {
            const data = newStation()
            const response = {
                "id": data.station_id
            }
          mqtt_client.publish('station/register/response', JSON.stringify(response))
        } 
        
        else if (topic === 'station/info') {
            const { station_id, disk_remain, box_remain } = message
            console.log(message)
            try {
                const data = editStation({ station_id, disk_remain, box_remain })
            } catch (error) {
                console.log('Cannot edit station')
            }
        }
    
    });
}

setInterval(()=>{
    const message = {
        station_id: "luhbf0p8l8t0lm",
        disk_remain: (Math.random() * 100).toFixed(2),
        box_remain: Math.random().toFixed(2)
    }
    mqtt_client.publish('station/info', JSON.stringify(message))
}, 2000)

export default handleMQTTClient