var Jsonix = require("../../jsonix").Jsonix;
var roundtrips = require("../roundtrip").roundtrips;
var comparisons = require("../comparison").comparisons;

var ground = require("./Mappings.js").ground;

var mappings = [ground];

var context = new Jsonix.Context(mappings);

module.exports = {
	"Standard" : {
		"Roundtrips" : roundtrips(__dirname, [context]),
		"Comparisons" : comparisons(__dirname, [context, ".json"])
	}
};