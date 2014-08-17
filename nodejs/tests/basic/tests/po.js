var Jsonix = require('jsonix').Jsonix;
var PO = require('./PO/Mappings').PO;
module.exports =
{
	"Context" : function (test)
	{
		var context = new Jsonix.Context([ PO ]);
		test.equal(2, context.elementInfos.length);
		test.done();
	},
	"Marshal" : {
		"0" : function (test)
		{
			var context = new Jsonix.Context([ PO ]);
			var unmarshaller = context.createUnmarshaller();
			var result = unmarshaller.unmarshalString('<comment>test</comment>');
			test.equal('comment', result.name.localPart);
			test.equal('test', result.value);
			test.done();
		},
		"1" : function (test)
		{
			var context = new Jsonix.Context([ PO ]);
			var marshaller = context.createMarshaller();
			var value = {
				name : {
					localPart : "purchaseOrder"
				},
				value : {
					orderDate : new Date(1999, 10, 20),
					shipTo : {
						name : "Alice Smith",
						street : "123 Maple Street",
						city : "Mill Valley",
						state : "CA",
						zip : 90952,
						country : "US"
					},
					billTo : {
						name : "Robert Smith",
						street : "8 Oak Avenue",
						city : "Old Town",
						state : "PA",
						zip : "95819",
						country : "US"
					},
					comment : 'Hurry, my lawn is going wild!',
					item : [ {
						partNum : '872-AA',
						productName : 'Lawnmower',
						quantity : 1,
						usPrice : 148.95,
						comment : 'Confirm this is electric'
					}, {
						partNum : '926-AA',
						productName : 'Baby Monitor',
						quantity : 1,
						usPrice : 39.98,
						shipDate : new Date(1999, 4, 21)
					} ]
				}
			};
			var node = marshaller.marshalDocument(value);
			var serializedNode = Jsonix.DOM.serialize(node);
			console.log(serializedNode);
			test.ok(serializedNode.length > 500);
			test.done();
		}
	},
	"Unmarshal" : {
		"1" : function(test) {
			// First we construct a Jsonix context - a factory for unmarshaller (parser)
			// and marshaller (serializer)
			var context = new Jsonix.Context([ PO ]);
			// Then we create an unmarshaller
			var unmarshaller = context.createUnmarshaller();
			// Unmarshal an object from the XML retrieved from the URL
			unmarshaller.unmarshalURL('http://localhost:8080/PO/po-0.xml',
			// This callback function will be provided with the result
			// of the unmarshalling
			function(result) {
				console.log('Unmarshalled result:');
				console.log(result);
				// We just check that we get the values we expect
				test.equal('Alice Smith', result.value.shipTo.name);
				test.equal('Lawnmower', result.value.item[0].productName);
				test.equal('Baby Monitor', result.value.item[1].productName);
				test.done();
			});
		}
	},
	"UnmarshalFile" : {
		"1" : function(test) {
			// First we construct a Jsonix context - a factory for unmarshaller (parser)
			// and marshaller (serializer)
			var context = new Jsonix.Context([ PO ]);
			// Then we create an unmarshaller
			var unmarshaller = context.createUnmarshaller();
			// Unmarshal an object from the XML retrieved from the URL
			unmarshaller.unmarshalFile('tests/PO/po-0.xml',
			// This callback function will be provided with the result
			// of the unmarshalling
			function(result) {
				console.log('Unmarshalled result:');
				console.log(result);
				// We just check that we get the values we expect
				test.equal('Alice Smith', result.value.shipTo.name);
				test.equal('Lawnmower', result.value.item[0].productName);
				test.equal('Baby Monitor', result.value.item[1].productName);
				test.done();
			});
		}
	}
};