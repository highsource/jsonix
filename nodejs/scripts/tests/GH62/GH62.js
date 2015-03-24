var Jsonix = require("../../jsonix").Jsonix;
var GH62 = require("./Mappings.js").GH62;

module.exports = {
	"MarshallsWithPrefix" : function(test) {
		var context = new Jsonix.Context([GH62], {
			namespacePrefixes : {
				"urn:gh62" : "gh62"
			}
		});
		var marshaller = context.createMarshaller();
		var data = {
			name : { localPart : "root", namespaceURI : "urn:gh62" },
			value : {
				toor : "orto"
			}
		};
		var marshalled = marshaller.marshalString(data);
		test.equal("<gh62:root xmlns:gh62=\"urn:gh62\"><gh62:toor>orto</gh62:toor></gh62:root>", marshalled);
		test.done();
	},
	"MarshallsWithoutPrefix" : function(test) {
		var context = new Jsonix.Context([GH62], {
			namespacePrefixes : {
				"urn:gh62" : ""
			}
		});
		var marshaller = context.createMarshaller();
		var data = {
			name : { localPart : "root", namespaceURI : "urn:gh62" },
			value : {
				toor : "orto"
			}
		};
		var marshalled = marshaller.marshalString(data);
		test.equal("<root xmlns=\"urn:gh62\"><toor>orto</toor></root>", marshalled);
		test.done();
	}
};
