const keys = require('./keys');
var mqtt = require('mqtt');
var options = keys.options;
const client = mqtt.connect('mqtt://tailor.cloudmqtt.com', options);

client.on('connect', () => {
    console.log("Connected...");
    client.subscribe('Hello');
});

client.on('message', (topic, message) => {
    if(topic === 'Hello'){
        console.log(message.toString());
    }
})

