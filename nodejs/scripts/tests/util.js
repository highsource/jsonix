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

		test.equal("undefined", typeof Jsonix.Util.Type.defaultValue());
		test.equal(1, Jsonix.Util.Type.defaultValue(1));
		test.equal(1, Jsonix.Util.Type.defaultValue(1, undefined, 2));
		test.equal(2, Jsonix.Util.Type.defaultValue(undefined, 2, 3));
		test.equal(3, Jsonix.Util.Type.defaultValue("1", {t:2}, 3));
		test.equal(false, Jsonix.Util.Type.defaultValue(false, undefined, true));
		test.equal(false, Jsonix.Util.Type.defaultValue("true", false, true));
		test.equal(false, Jsonix.Util.Type.defaultValue("true", null, false));
		test.done();
        },
	"StringUtils" : function(test) {
		test.equal('a b c', Jsonix.Util.StringUtils.trim('  a b c  '));
		test.equal(true, Jsonix.Util.StringUtils.isEmpty('    '));
		test.done();
	},
	"IsEqual" : {
		"Node" : function(test) {
			var a0 = Jsonix.DOM.parse("<a b='c'/>");
			var a1 = Jsonix.DOM.parse("<a b='c'/>");
			test.ok(Jsonix.Util.Type.isNode(a0));
			test.ok(Jsonix.Util.Type.isNode(a1));
			test.ok(Jsonix.Util.Type.isEqual(a0, a1, function(text) { console.log(text); } ));
			test.done();
		}
	}
};