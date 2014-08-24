var Jsonix = require('jsonix').Jsonix;
var Two = require('./Two/Mappings').org_hisrc_jsonix_tests_two;
var TwoData = require('./Two/Data').org_hisrc_jsonix_tests_two_data;
function roundtrip(test, resource, zero) {
	var context = new Jsonix.Context([ Two ]);
	var unmarshallerOne = context.createUnmarshaller();
	var unmarshallerTwo = context.createUnmarshaller();
	var marshallerOne = context.createMarshaller();
	var marshallerTwo = context.createMarshaller();
	console.log('Unmarshalling [' + resource + '].');
	unmarshallerOne.unmarshalURL('http://localhost:8080/Two/' + resource, function(one) {
		console.log(zero);
		console.log(one);
		test.ok(Jsonix.Util.Type.isEqual(zero, one, function(text) {console.log(text)}), 'Roundtrip [' + resource + '] failed in phase one. Objects must be equal.');
		var documentOne = marshallerOne.marshalDocument(one);
		var two = unmarshallerTwo.unmarshalDocument(documentOne);
		var stringTwo = marshallerTwo.marshalString(two);
		console.log(stringTwo);
		test.ok(Jsonix.Util.Type.isEqual(one, two, function(text) {console.log(text)}), 'Roundtrip [' + resource + '] failed in phase two. Objects must be equal.');
		test.done();
	});
}

module.exports =
{
	"Context" : function (test)
	{
		var context = new Jsonix.Context([ Two ]);
		test.equal(5, context.elementInfos.length);
		test.done();
	},
	"Roundtrips" : {
		"attribute-0.xml" : function(test) {roundtrip(test, "attribute-0.xml", TwoData["attribute-0.xml"])},
		"element-0.xml" : function(test) {roundtrip(test, "element-0.xml", TwoData["element-0.xml"])},
		"string-0.xml" : function(test) {roundtrip(test, "string-0.xml", TwoData["string-0.xml"])},
		"value-0.xml" : function(test) {roundtrip(test, "value-0.xml", TwoData["value-0.xml"])},
		"customClassValue-0.xml" : function(test) {roundtrip(test, "customClassValue-0.xml", TwoData["customClassValue-0.xml"])}
	}
};