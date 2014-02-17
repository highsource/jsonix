var Jsonix = require('jsonix').Jsonix;
var PO = require('../mappings/PO').PO;

module.exports = {
	"UnmarshalFile": function(test) {

		// Create Jsonix context
		var context = new Jsonix.Context([ PO ]);
		
		// Create unmarshaller
		var unmarshaller = context.createUnmarshaller();
		
		// Unmarshal the XML file
		unmarshaller.unmarshalFile( 'tests/po.xml',
			function(poElement) {

				var po = poElement.value;

				
				test.equal('Alice Smith', po.shipTo.name);
				test.equal('123 Maple Street', po.shipTo.street);
				test.equal('Mill Valley', po.shipTo.city);
				test.equal('CA', po.shipTo.state);
				test.equal('US', po.shipTo.country);

				test.equal('Robert Smith', po.billTo.name);
				test.equal('8 Oak Avenue', po.billTo.street);
				test.equal('Old Town', po.billTo.city);
				test.equal('PA', po.billTo.state);
				test.equal('US', po.billTo.country);
				test.done();
		});
        }
};
