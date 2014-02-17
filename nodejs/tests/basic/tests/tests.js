var http = require('http');
var server;
module.exports = 
{
	setUp: function(callback)
	{
		var nodeStaticServer = new(require('node-static').Server)('./tests');
		server = http.createServer(function (request, response) {
			request.addListener('end', function () {
				console.log('SERVER: Serving the request [' + request.url + '].');
				nodeStaticServer.serve(request, response);
		    	});
		});
		console.log('SERVER: Launching the server.');
		server.listen(8080);
		callback();
	},
	tearDown: function(callback)
	{
		console.log('SERVER: Closing the server.');
		server.close();
		callback();
	},
	"Jsonix-Tests": {
		"Zero" : require('./zero'),
		"One" : require('./one'),
		"Two" : require('./two'),
		"PO" : require('./po'),
	}
};
