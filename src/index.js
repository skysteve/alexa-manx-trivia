const Alexa = require('alexa-sdk');

exports.handler = function main(event, context) { // optional callback
  const alexa = Alexa.handler(event, context);

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
