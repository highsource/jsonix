var Jsonix = require("../../jsonix").Jsonix;
var A = require("./A.js").A;
var B = require("./B.js").B;

module.exports = {
	"A_B" : function(test) {
		var context = new Jsonix.Context([A, B]);
		context.createMarshaller();
		context.createUnmarshaller();
		test.done();
	},
	"B_A" : function(test) {
		var context = new Jsonix.Context([B, A]);
		context.createMarshaller();
		context.createUnmarshaller();
		test.done();
	}
};
