var Jsonix = require('jsonix').Jsonix;
var OWS_V_1_1_0 = require('../mappings/OWS_V_1_1_0').OWS_V_1_1_0;
var WPS_V_1_0_0 = require('../mappings/WPS_V_1_0_0').WPS_V_1_0_0;
var XLink_V_1_0 = require('../mappings/XLink_V_1_0').XLink_V_1_0;

function roundtrip(test, resource) {
	var context = new Jsonix.Context([ OWS_V_1_1_0, WPS_V_1_0_0, XLink_V_1_0 ]);
	var unmarshallerOne = context.createUnmarshaller();
	var unmarshallerTwo = context.createUnmarshaller();
	var marshallerOne = context.createMarshaller();
	var marshallerTwo = context.createMarshaller();
	console.log('Unmarshalling [' + resource + '].');
	unmarshallerOne.unmarshalFile(resource,
		function(one) {
			console.log('Unmarshalled:');
			console.log(one);
			var documentOne = marshallerOne.marshalDocument(one);
			var two = unmarshallerTwo.unmarshalDocument(documentOne);
			var stringTwo = marshallerTwo.marshalString(two);
			console.log(stringTwo);
			test.ok(Jsonix.Util.Type.isEqual(one, two, function(text) {console.log(text)}), 'Roundtrip [' + resource + '] failed in phase two. Objects must be equal.');
			test.done();
		}
	);
}
module.exports = {
	"UnmarshalFile": function(test) {

		// Create Jsonix context
		var context = new Jsonix.Context([ OWS_V_1_1_0, WPS_V_1_0_0, XLink_V_1_0 ]);
		
		// Create unmarshaller
		var unmarshaller = context.createUnmarshaller();

		// Unmarshal the XML file
		unmarshaller.unmarshalFile( 'schemas/ogc/wps/1.0.0/examples/20_wpsGetCapabilities_response.xml',
			function(wpsCapabilitiesElement) {
				console.log(wpsCapabilitiesElement);
				var wpsCapabilities = wpsCapabilitiesElement.value;
				test.equal(1, wpsCapabilities.processOfferings.process.length);
				var wpsProcess = wpsCapabilities.processOfferings.process[0];
				console.log(wpsProcess);
				test.equal('Buffer a polygon feature', wpsProcess.title.value);
				test.done();
		});
        },
	"Roundtrips" : {
		"execute-01.xml" : function(test) {roundtrip(test, "tests/execute-01.xml");}
	}
};
