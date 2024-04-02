import mqtt from 'mqtt'
import {} from 'dotenv/config'


var mqtt_client

function initializeMQTTClient() {

  mqtt_client = mqtt.connect(process.env.HIVEMQ_CLOUD, {
    username: process.env.HIVEMQ_USERNAME,
    password: process.env.HIVEMQ_PASSWORD
  });
    
  // MQTT client event listeners
  mqtt_client.on('connect', function () {
    console.log('Connected to HiveMQ Cloud');
  });

  mqtt_client.on('error', function (error) {
    console.error('MQTT', error.message);
  });

  mqtt_client.subscribe('station/register/device/send');
  mqtt_client.subscribe('station/info')
  mqtt_client.subscribe('feedRecord/start/response')
}


export { initializeMQTTClient, mqtt_client };
