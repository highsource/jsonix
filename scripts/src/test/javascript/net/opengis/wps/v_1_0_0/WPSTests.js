function testWPSMarhshal1() {
	var context = new Jsonix.Context([ WPS_V_1_0_0 ], {
		namespacePrefixes : {
			'http://www.opengis.net/wps/1.0.0' : 'wps',
			'urn:test' : 'test'
		}
	});
	var marshaller = context.createMarshaller();
	var value = {
		name : {
			namespaceURI : 'http://www.opengis.net/wps/1.0.0',
			localPart : 'GetCapabilities'
		},
		value : {
			language : 'en-CA',
			service : 'WPS',
			acceptVersions : {
				version : [ '1.0.0', '1.0.1' ]
			}
		}
	};
	var node = marshaller.marshalDocument(value);
	var serializedNode = Jsonix.DOM.serialize(node);
	logger.debug(serializedNode);
	assertTrue(serializedNode.length > 5);
	assertTrue(serializedNode.indexOf('xmlns:test="urn:test"') >= 0);
}