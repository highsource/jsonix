var Jsonix = require("../../jsonix").Jsonix;
var roundtrips = require("../roundtrip").roundtrips;
var comparisons = require("../comparison").comparisons;

var ground = require("./ground.js");

var mappings = [ground.generated, ground.urban, ground.rural];

var context = new Jsonix.Context(mappings, {
	namespacePrefixes : {
		"urban" : "urban",
		"rural" : "rural"
	}
});

module.exports = {
	"Standard" : {
		"Roundtrips" : roundtrips(__dirname, [context]),
		"Comparisons" : comparisons(__dirname, [context, ".json"])
	}
};