const keys = require('./keys');
var mqtt = require('mqtt');
var con = require('./db');

var options = keys.options;
const client = mqtt.connect('mqtt://tailor.cloudmqtt.com', options);

con.connect((err) => {
    if(err) throw err;
    console.log("Database connected");
});

client.on('connect', () => {
    console.log("Connected...");
    client.subscribe('Hello');
});

client.on('message', (topic, message) => {
    if(topic === 'Data'){
        console.log(message.toString());
        
    }
})

