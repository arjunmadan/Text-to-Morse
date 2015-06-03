//Required modules
var spark = require('spark');
var validator = require('validator');
var morse = require('./morse.js')

//Function that sends the message to the Spark Core
function sendMessage(text) {
	console.log("In sendMessage");
	
	//Make call to function that sends the message.
	if(validator.isAlphanumeric(text)) {
		morse.convertToMorse(text);
	}

	else {
		//Return no message.
	}
}

exports.sendMessage = sendMessage;