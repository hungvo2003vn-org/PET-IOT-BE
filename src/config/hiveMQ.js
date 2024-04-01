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

  mqtt_client.on('message', function (topic, message) {
    console.log('MQTT Received message:', message.toString());
  });

  mqtt_client.subscribe('HungVo/testTopic');
}

// Example MQTT publish
setInterval(() => {
  mqtt_client.publish('HungVo/testTopic', 'Hello from Quan 9');
}, 2000)

export { initializeMQTTClient, mqtt_client };
