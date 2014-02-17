var http = require('http');
module.exports = 
{
	"Serve": {
		test: function(test) {
			console.log('Requesting [test0.xml].');
			http.get("http://localhost:8080/test0.xml", function(response) {
				response.on('data', function (data) {
					var dataString = data.toString();
					console.log('CLIENT: Got reponse:');
					console.log(dataString.toString());
					test.equal(30, dataString.length);
				});
				test.done();
			}).on('error', function(err) {
				test.ifError(err);
			});
		}
	}
};