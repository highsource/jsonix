var Jsonix = require("../../jsonix").Jsonix;
var roundtrips = require("../roundtrip").roundtrips;
var comparisons = require("../comparison").comparisons;

var Zero = require("./Mappings.js").Zero;

var mappings = [Zero];

var simplifiedContext = new Jsonix.Context(mappings, { mappingStyle : "simplified" });
var standardContext = new Jsonix.Context(mappings, { mappingStyle : "standard" });

var simplifiedNsContext = new Jsonix.Context(mappings, { mappingStyle : "simplified", namespacePrefixes : { "urn:a" : "a", "urn:b" : "b" } });
var standardNsContext = new Jsonix.Context(mappings, { mappingStyle : "standard", namespacePrefixes : { "urn:a" : "a", "urn:b" : "b" } });

module.exports = {
	"Standard" : {
		"Roundtrips" : roundtrips(__dirname, [standardContext]),
		"Comparisons" : comparisons(__dirname, [standardContext, ".standard.json"])
	},
	"Simplified" : {
		"Roundtrips" : roundtrips(__dirname, [simplifiedContext]),
		"Comparisons" : comparisons(__dirname, [simplifiedContext, ".simplified.json"])
	},
	"StandardNs" : {
		"Roundtrips" : roundtrips(__dirname + "/ns", [standardNsContext]),
		"Comparisons" : comparisons(__dirname + "/ns", [standardNsContext, ".standard.json"])
	},
	/* TODO #211
	"SimplifiedNs" : {
		"Roundtrips" : roundtrips(__dirname + "/ns", [simplifiedNsContext]),
		"Comparisons" : comparisons(__dirname + "/ns", [simplifiedNsContext, ".simplified.json"])
	}*/
};