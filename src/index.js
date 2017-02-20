import Alexa from 'alexa-sdk';

exports.handler = function main(event, context) { // optional callback
  const alexa = Alexa.handler(event, context);
  alexa.appId = 'ALEXA_SKILL_ID';

  const handlers = {
    LaunchRequest: function LaunchRequest() {
      this.emit('HelloWorldIntent');
    },
    HelloWorldIntent: function HelloWorldIntent() {
      this.emit(':ask', 'What would you like to do?', 'Please say that again?');
    }
  };

  alexa.registerHandlers(handlers);
  alexa.execute();
};
