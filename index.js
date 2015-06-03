//Required modules.
var express = require('express');
var message = require('./message.js');
var app = express();

//Twilio authentication
var accountSid = 'AC9f1419406334942728bd3d698ffc97d6'
var authToken = '946f54caf4c6112b138d5ecf2ca1ba0f'
var client = require('twilio')(accountSid, authToken);

//Server setup
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

//Twilio processing
app.get('/', function(request, response) {
	//Gets the content of the text message.
	var text = request.query.Body;
	console.log(text);

	//Sends the message to the for processing.
	message.sendMessage(text);

	client.messages.create({
		to:request.query.From,
		from:request.query.To,
		body:"Message received."
		}, function(err, text) {
			console.log( JSON.stringify(err, null, 4));
		});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});