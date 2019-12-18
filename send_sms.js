// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'AC42a741ebb8df39e27b25fd7f5622ba5f';
const authToken = '2d114ed99b71f46f0d9e661d5d944487';
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
        from: '+12512209929',
        to: '+94711765356'
    })
    .then(message => console.log(message.sid));
