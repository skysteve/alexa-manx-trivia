const Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback){
    const alexa = Alexa.handler(event, context);

    const handlers = {
        'LaunchRequest': function () {
            this.emit('HelloWorldIntent');
        },
        'HelloWorldIntent': function () {
            this.emit(':ask', 'What would you like to do?', 'Please say that again?');
        }
    };

    alexa.registerHandlers(handlers);
    alexa.execute();
};