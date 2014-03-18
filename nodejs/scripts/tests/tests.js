var http = require('http');
var static = require('node-static');
var server;
module.exports = 
{
	setUp: function(callback)
	{
		var file = new static.Server('./tests');
		server = http.createServer(function (request, response) {
			console.log('SERVER: Serving the request [' + request.url + '].');
			file.serve(request, response);

		});
		console.log('SERVER: Launching the server.');
		server.listen(8080);
		console.log('SERVER: Launched the server.');
		callback();
	},
	tearDown: function(callback)
	{
		console.log('SERVER: Closing the server.');
		server.close();
		console.log('SERVER: Closed the server.');
		callback();
	},
	"Jsonix": {
		"Util" : require('./util'),
		"XML" : require('./xml'),
		"Schema" : require('./schema'),
		"NodeJS" : require('./nodejs'),
		"Request" : require('./request'),
		"SAX" : require('./sax'),
	}
};
