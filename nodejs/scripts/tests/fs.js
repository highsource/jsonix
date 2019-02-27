var fs = require('fs');
module.exports = 
{
	"ReadFile": function(test) {
//		console.log('Reading [test0.xml].');
		fs.readFile('tests/test0.xml', {encoding: 'utf8'}, function(err, data) {
			if (err)
			{
				throw err;
			}
			else
			{
				test.notEqual(null, data);
				var dataString = data.toString();
				test.notEqual(null, dataString);
//				console.log('Read content:');
//				console.log(dataString);
				test.equal(28, dataString.length);
			}
			test.ifError(err);
			test.done();
		});
	}
};