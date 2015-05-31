var express = require('express');
var app = express();


var accountSid = 'AC9f1419406334942728bd3d698ffc97d6'
var authToken = '946f54caf4c6112b138d5ecf2ca1ba0f'
var client = require('twilio')(accountSid, authToken);


app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('Hello World!');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});