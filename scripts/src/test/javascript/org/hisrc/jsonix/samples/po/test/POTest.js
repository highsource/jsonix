function testPO() {
	assertNotNull(PO);
}

function testPOContext() {
	var context = new Jsonix.Context([ PO ]);
	assertNotNull(context);

	assertNotNull(context.elementInfos['purchaseOrder']);
	assertNotNull(context.elementInfos['comment']);
}

function testPOMarhshal1() {
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
				zip : 95819,
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
	logger.debug(serializedNode);
	assertTrue(serializedNode.length > 5);
}
function testPOUnmarshal0() {
	var context = new Jsonix.Context([ PO ]);
	var unmarshaller = context.createUnmarshaller();
	var result = unmarshaller.unmarshalString('<comment>test</comment>');
	assertEquals('comment', result.name.localPart);
	assertEquals('test', result.value);
}

function testPOUnmarshal1() {
	// First we construct a Jsonix context - a factory for unmarshaller (parser)
	// and marshaller (serializer)
	var context = new Jsonix.Context([ PO ]);
	// Then we create an unmarshaller
	var unmarshaller = context.createUnmarshaller();
	// Unmarshal an object from the XML retrieved from the URL
	unmarshaller.unmarshalURL('/org/hisrc/jsonix/samples/po/test/po-0.xml',
	// This callback function will be provided with the result
	// of the unmarshalling
	function(result) {
		// We just check that we get the values we expect
		assertEquals('Alice Smith', result.value.shipTo.name);
		assertEquals('Lawnmower', result.value.item[0].productName);
		assertEquals('Baby Monitor', result.value.item[1].productName);
	}, {
		async : false
	});
}
