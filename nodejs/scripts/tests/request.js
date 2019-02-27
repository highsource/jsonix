var Jsonix = require('../jsonix').Jsonix;
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
	"Issue": {
		issue: function(test) {
			var request = Jsonix.Request.INSTANCE;
			request.issue('http://localhost:8080/test0.xml', function(transport) {
				var responseText = transport.responseText;
				console.log('CLIENT: Response text:');
				console.log(responseText);
				test.equal(28, responseText.length);
				test.done();
			});
		},
		load: function(test) {

			Jsonix.DOM.load('http://localhost:8080/test0.xml', function(doc) {
				console.log('CLIENT: Loaded document:');
				console.log(Jsonix.DOM.serialize(doc));
				test.done();
			});
		}
	}
};
