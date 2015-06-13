process.on('uncaughtException', function(err) {
  console.error(err.stack);
});
module.exports = 
{

	"Jsonix": {
		"Util" : require('./util'),
		"XML" : require('./xml'),
		"Schema" : require('./schema'),
		"NodeJS" : require('./nodejs'),
		"Request" : require('./request'),
		"SAX" : require('./sax'),
		"Issues" : require('./issues')
	}
};
