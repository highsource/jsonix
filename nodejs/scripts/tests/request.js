var Jsonix = require('../jsonix').Jsonix;
var http = require('http');
module.exports = 
{
	"Issue": {
		issue: function(test) {
			var request = Jsonix.Request.INSTANCE;
			request.issue('http://localhost:8080/test0.xml', function(transport) {
				var responseText = transport.responseText;
				console.log('CLIENT: Response text:');
				console.log(responseText);
				test.equal(30, responseText.length);
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
