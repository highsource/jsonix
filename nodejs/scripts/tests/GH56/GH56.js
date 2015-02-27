var Jsonix = require('../../jsonix').Jsonix;
var roundtrips = require('../roundtrip').roundtrips;
var comparisons = require('../comparison').comparisons;

var Zero = require('./Mappings.js').Zero;

var mappings = [Zero];

var simplifiedContext = new Jsonix.Context(mappings, { mappingStyle : 'simplified' });
var standardContext = new Jsonix.Context(mappings, { mappingStyle : 'standard' });

module.exports = {
	"Standard" : {
		"Roundtrips" : roundtrips(__dirname, [standardContext]),
		"Comparisons" : comparisons(__dirname, [standardContext, '.standard.json'])
	},
	"Simplified" : {
		"Roundtrips" : roundtrips(__dirname, [simplifiedContext]),
		"Comparisons" : comparisons(__dirname, [simplifiedContext, '.simplified.json'])
	}
};