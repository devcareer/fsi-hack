const AfricasTalking = require('africastalking');

const africasTalking = new AfricasTalking();

const { SMS } = africasTalking;

async function sendSMS(to, message) {
  const result = await SMS.send({ to, message, enque: true });
  return result;
}

module.exports = sendSMS;
