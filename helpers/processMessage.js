const API_AI_TOKEN = 'a6a7253cae854a53a14a2827005e02fe';
const apiAiClient = require('apiai')(API_AI_TOKEN);
const FACEBOOK_ACCESS_TOKEN = 'EAAHU1q9Im70BAMoMVpZAHppx808JVj4IdkzbAbG6pyPogrJwFGLXZB2AWHFVqxZBZCzS9hGc6TUcsIgmRcYhy2ZBmz3n5w7TuOosskHL5Mm2MG8HEs3LLdiimHGClZBU1pG2BCjtT1ij6QcAfyGuZA8UKYyYZBWoe6qPQddqn3WPw3g3Ki9vPd0X';
const request = require('request');

const sendTextMessage = (senderId, text) => {
 request({
 url: 'https://graph.facebook.com/v2.6/me/messages',
 qs: { access_token: FACEBOOK_ACCESS_TOKEN },
 method: 'POST',
 json: {
 recipient: { id: senderId },
 message: { text },
 }
 });
};
module.exports = (event) => {
 const senderId = event.sender.id;
 const message = event.message.text;
const apiaiSession = apiAiClient.textRequest(message, {sessionId: 'crowdbotics_bot'});
apiaiSession.on('response', (response) => {
 const result = response.result.fulfillment.speech;
sendTextMessage(senderId, result);
 });
apiaiSession.on('error', error => console.log(error));
 apiaiSession.end();
};