const Alexa = require('alexa-sdk');
const handlers = require('./handlers');


const GAME_STATES = {
  TRIVIA: "_TRIVIAMODE", // Asking trivia questions.
  START: "_STARTMODE", // Entry point, start the game.
  HELP: "_HELPMODE" // The user is asking for help.
};

exports.handler = function main(event, context) {
  const alexa = Alexa.handler(event, context);
  alexa.appId = process.env.ALEXA_SKILL_ID;

  alexa.registerHandlers(handlers);
  alexa.execute();
};
