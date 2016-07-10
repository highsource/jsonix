var Jsonix = require("../../jsonix").Jsonix;
var A = require("./A.js").A;
var B = require("./B.js").B;

module.exports = {
	"A_B" : function(test) {
		var context = new Jsonix.Context([A, B]);
                var baseType = context.getTypeInfoByName('A.BaseType');
                test.ok(baseType.structure.elements.value);
                test.ok(baseType.structure.elements.eulav);
		test.done();
	},
	"B_A" : function(test) {
		var context = new Jsonix.Context([B, A]);
                var baseType = context.getTypeInfoByName('A.BaseType');
                test.ok(baseType.structure.elements.value);
                test.ok(baseType.structure.elements.eulav);
		test.done();
	}
};
