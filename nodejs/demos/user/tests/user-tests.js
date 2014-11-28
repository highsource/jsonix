var Jsonix = require('jsonix').Jsonix;
var Mapping = require('../jsonix-demo-user').Mapping;

module.exports = {
	"Marshal" : function(test) {

		// Create Jsonix context
		var context = new Jsonix.Context([ Mapping ]);

		var data = {
			name : new Jsonix.XML.QName('data'),
			value : {
				"user" : "505723c5750c1fa2177682ed",
				"uri" : "http://localhost:3000/users/505723c5750c1fa2177682ed/items",
				"items" : [ {
					"uri" : "http://localhost:3000/items/1"
				}, {
					"uri" : "http://localhost:3000/items/2"
				} ],
				"info" : "blah."
			}
		};

		var marshaller = context.createMarshaller();

		console.log(marshaller.marshalString(data));
	}
};
