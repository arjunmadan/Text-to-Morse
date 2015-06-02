//Required modules.
var spark = require('spark');
var validator = require('validator');

//Authentication
spark.login({accessToken: '9baba2529d3ddd96afa843cf1c2819c30ad41cff'});


//Function that sends the message to the Spark Core
function sendMessage(text) {
	console.log("In sendMessage");
	for(i in text) {
		if(validator.isAlphanumeric(i))
			//Make call to function that sends the message.
	}
}

//Functions exported to be used in other files.
exports.sendMessage = sendMessage;