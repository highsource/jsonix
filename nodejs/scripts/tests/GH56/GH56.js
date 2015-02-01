var Jsonix = require('../../jsonix').Jsonix;
var roundtrips = require('../roundtrip').roundtrips;
var comparisons = require('../comparison').comparisons;

var Zero = require('./Mappings.js').org_hisrc_jsonix_tests_zero;

var mappings = [Zero];

var context = new Jsonix.Context(mappings, { mappingStyle : 'simplified' });

module.exports = {
	"Roundtrips" : roundtrips(context, __dirname),
	"Comparisons" : comparisons(context, __dirname)
};