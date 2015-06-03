//Required modules
var spark = require('spark');

//Authentication
/*
spark.login({accessToken: '9baba2529d3ddd96afa843cf1c2819c30ad41cff'}, function(err, body)
	console.log('API call login completed on callback:', body)
});
*/

function dot() {
	console.log(".");//Blink LED for 200ms
}

function dash() {
	console.log("-");//Blink LED for 600ms
}

function space() {
	console.log("_");//Turn off LED for 600ms
}

exports.dot = dot;
exports.dash = dash;
exports.space = space;