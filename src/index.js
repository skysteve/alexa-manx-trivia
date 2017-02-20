const Alexa = require('alexa-sdk');
const handlers = require('./handlers');

exports.handler = function main(event, context) {
  const alexa = Alexa.handler(event, context);
  alexa.appId = process.env.ALEXA_SKILL_ID;

  alexa.registerHandlers(handlers);
  alexa.execute();
};
