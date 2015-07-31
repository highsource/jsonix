var Jsonix = require("../../jsonix").Jsonix;
var roundtrips = require("../roundtrip").roundtrips;
var comparisons = require("../comparison").comparisons;

var test_any = require("./test_any.js");

var mappings = [test_any.test_any];

var context = new Jsonix.Context(mappings, {
	namespacePrefixes : {
		"test:any" : "testany",
	}
});

module.exports = {
	"Standard" : {
		"Roundtrips" : roundtrips(__dirname, [context]),
		"Comparisons" : comparisons(__dirname, [context, ".json"])
	}
};
