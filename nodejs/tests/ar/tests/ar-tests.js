var Jsonix = require('jsonix').Jsonix;
var AR = require('../AR').AR;

module.exports = {
	"UnmarshalFile": function(test) {

		// Create Jsonix context
		var context = new Jsonix.Context([ AR ]);
		
		// Create unmarshaller
		var unmarshaller = context.createUnmarshaller();
		
		// Unmarshal the XML file
		unmarshaller.unmarshalFile( 'tests/sample01.xml',
			function(element) {
				console.log(element.value);
				test.equal('Status01', element.value.testCase[0].status);
				test.done();
		});
        }
};
