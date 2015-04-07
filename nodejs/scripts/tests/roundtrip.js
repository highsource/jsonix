var forEachResourceInDirectory = require('./forEachResourceInDirectory');
var Jsonix = require('../jsonix').Jsonix;
var roundtrip = function(test, resource, context) {
	var xmlFile = resource + '.xml';
	var unmarshallerOne = context.createUnmarshaller();
	var unmarshallerTwo = context.createUnmarshaller();
	var marshallerOne = context.createMarshaller();
	var marshallerTwo = context.createMarshaller();
	console.log('Unmarshalling [' + resource + '].');
	unmarshallerOne.unmarshalFile(xmlFile, function(one) {
		console.log('Unmarshalled one:');
		console.log(JSON.stringify(one, null, 4));
		var documentOne = marshallerOne.marshalDocument(one);
		var two = unmarshallerTwo.unmarshalDocument(documentOne);
		console.log('Unmarshalled two:');
		console.log(JSON.stringify(one, null, 4));
		var stringTwo = marshallerTwo.marshalString(two);
		console.log('Marshalled two:');
		console.log(JSON.stringify(stringTwo, null, 4));
		test.ok(Jsonix.Util.Type.isEqual(one, two, function(text) {
			console.log(text);
		}), 'Roundtrip [' + resource + '] failed in phase two. Objects must be equal.');
		test.done();
	});
};
var roundtrips = function(directory, args) {
	return forEachResourceInDirectory(directory, ".xml", roundtrip, args);
};
module.exports = {
	roundtrip : roundtrip,
	roundtrips : roundtrips
}
