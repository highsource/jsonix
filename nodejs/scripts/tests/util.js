var Jsonix = require('../jsonix').Jsonix;
module.exports = {
	"Type": function(test) {
		test.equal(true, Jsonix.Util.Type.isString('abc'));
		test.equal(false, Jsonix.Util.Type.isString(1));
		test.equal(false, Jsonix.Util.Type.isString(null));
		test.equal(false, Jsonix.Util.Type.isString(undefined));
		//
		test.equal(true, Jsonix.Util.Type.isBoolean(true));
		test.equal(true, Jsonix.Util.Type.isBoolean(true));
		test.equal(false, Jsonix.Util.Type.isBoolean('true'));
		//
		test.equal(true, Jsonix.Util.Type.isNumber(0));
		test.equal(true, Jsonix.Util.Type.isNumber(1.2));
		test.equal(false, Jsonix.Util.Type.isNumber(Number('1..2')));
		test.equal(false, Jsonix.Util.Type.isNumber('1.2'));
        
		test.equal(true, Jsonix.Util.Type.isArray([]));
		test.equal(true, Jsonix.Util.Type.isArray([0]));
		test.equal(false, Jsonix.Util.Type.isArray(0));
		
		test.equal(true, Jsonix.Util.Type.isNumberOrNaN(Number.NaN));
		test.equal(true, Jsonix.Util.Type.isNaN(Number.NaN));
		test.equal(false, Jsonix.Util.Type.isNumber(Number.NaN));
		test.done();
        },
	"StringUtils" : function(test) {
		test.equal('a b c', Jsonix.Util.StringUtils.trim('  a b c  '));
		test.equal(true, Jsonix.Util.StringUtils.isEmpty('    '));
		test.done();
	}
};