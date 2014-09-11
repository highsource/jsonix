var Jsonix = require('jsonix').Jsonix;
var Zero = require('./Zero/Mappings').org_hisrc_jsonix_tests_zero;
var ZeroData = require('./Zero/Data').org_hisrc_jsonix_tests_zero_data;
function roundtrip(test, resource, zero) {
	var context = new Jsonix.Context([ Zero ]);
	var unmarshallerOne = context.createUnmarshaller();
	var unmarshallerTwo = context.createUnmarshaller();
	var marshallerOne = context.createMarshaller();
	var marshallerTwo = context.createMarshaller();
	console.log('Unmarshalling [' + resource + '].');
	unmarshallerOne.unmarshalURL('http://localhost:8080/Zero/' + resource, function(one) {
		test.ok(Jsonix.Util.Type.isEqual(zero, one, function(text) {console.log(text)}), 'Roundtrip [' + resource + '] failed in phase one. Objects must be equal.');
		var documentOne = marshallerOne.marshalDocument(one);
		var two = unmarshallerTwo.unmarshalDocument(documentOne);
		var stringTwo = marshallerTwo.marshalString(two);
		console.log(stringTwo);
		test.ok(Jsonix.Util.Type.isEqual(one, two, function(text) {console.log(text)}), 'Roundtrip [' + resource + '] failed in phase two. Objects must be equal.');
		test.done();
	});
}
function forward(test, resource, zero) {
	var context = new Jsonix.Context([ Zero ]);
	console.log('Unmarshalling [' + resource + '].');
	var unmarshallerOne = context.createUnmarshaller();
	var marshallerOne = context.createMarshaller();
	var marshalledZero = marshallerOne.marshalDocument(zero);
		console.log("Unmarshalled 1");
		console.log(marshalledZero);
	unmarshallerOne.unmarshalURL('http://localhost:8080/Zero/' + resource, function(one) {
		console.log("Unmarshalled 0");
		var marshalledZero = marshallerOne.marshalDocument(zero);
		console.log("Unmarshalled 1");
		console.log(marshalledZero);
		var unmarshalledZero = context.createUnmarshaller().unmarshalDocument(marshalledZero);
		console.log("Unmarshalled 2");
		console.log(unmarshalledZero);
		console.log(context.createMarshaller().marshalString(zero));
		test.ok(Jsonix.Util.Type.isEqual(unmarshalledZero, one, function(text) {console.log(text)}), 'Roundtrip [' + resource + '] failed in phase two. Objects must be equal.');
		test.done();
	});
}

module.exports =
{
	"Context" : function (test)
	{
		var context = new Jsonix.Context([ Zero ]);
		test.equal(22, context.elementInfos.length);
		var substitutionMembers = context.getSubstitutionMembers(new Jsonix.XML.QName('base'));
		test.equal(2, substitutionMembers.length);
		test.done();
	},
	"Roundtrips" : {
		"anyAttribute-0.xml" : function(test) {roundtrip(test, "anyAttribute-0.xml", ZeroData["anyAttribute-0.xml"])},
		"anyElementLax-0.xml" : function(test) {roundtrip(test, "anyElementLax-0.xml", ZeroData["anyElementLax-0.xml"])},
		// "anyElementLax-1.xml" : function(test) {roundtrip(test, "anyElementLax-1.xml", ZeroData["anyElementLax-1.xml"])},
		"attribute-0.xml" : function(test) {roundtrip(test, "attribute-0.xml", ZeroData["attribute-0.xml"])},
		"base-0.xml" : function(test) {roundtrip(test, "base-0.xml", ZeroData["base-0.xml"])},
		"element-0.xml" : function(test) {roundtrip(test, "element-0.xml", ZeroData["element-0.xml"])},
		"elementRef-0.xml" : function(test) {roundtrip(test, "elementRef-0.xml", ZeroData["elementRef-0.xml"])},
		"elementRef-1.xml" : function(test) {roundtrip(test, "elementRef-1.xml", ZeroData["elementRef-1.xml"])},
		"elementRefMixed-0.xml" : function(test) {roundtrip(test, "elementRefMixed-0.xml", ZeroData["elementRefMixed-0.xml"])},
		"elementRefs-0.xml" : function(test) {roundtrip(test, "elementRefs-0.xml", ZeroData["elementRefs-0.xml"])},
		"elements-0.xml" : function(test) {roundtrip(test, "elements-0.xml", ZeroData["elements-0.xml"])},
		"extended-0.xml" : function(test) {roundtrip(test, "extended-0.xml", ZeroData["extended-0.xml"])},
		"extendedExtended-0.xml" : function(test) {roundtrip(test, "extendedExtended-0.xml", ZeroData["extendedExtended-0.xml"])},
		"string-0.xml" : function(test) {roundtrip(test, "string-0.xml", ZeroData["string-0.xml"])},
		"value-0.xml" : function(test) {roundtrip(test, "value-0.xml", ZeroData["value-0.xml"])},
		"simpleTypes-0.xml" : function(test) {roundtrip(test, "simpleTypes-0.xml", ZeroData["simpleTypes-0.xml"])}
	},
	"Forwards" : {
		"attribute-1.xml" : function(test) {forward(test, "attribute-1.xml", ZeroData["attribute-1.xml"])}
	}
};