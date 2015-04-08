var Jsonix = require("../../jsonix").Jsonix;
var Zero = require("./Mappings.js").Zero;

module.exports = {
	"GetTypeInfoByTypeNameKey" : function(test) {
		var context = new Jsonix.Context([Zero], {
			namespacePrefixes : {
				'urn:zero' : 'zero',
				'urn:orez' : 'orez',
				'urn:c' : 'c',
			}
		});
		test.equal("String", context.getTypeInfoByTypeNameKey("{http://www.w3.org/2001/XMLSchema}string").name);
		test.equal("Zero.AType", context.getTypeInfoByTypeNameKey("{urn:orez}AType").name);
		test.equal("Zero.BType", context.getTypeInfoByTypeNameKey("B").name);
		test.equal("Zero.CType", context.getTypeInfoByTypeNameKey("{urn:c}C").name);
		test.equal("Zero.DType", context.getTypeInfoByTypeNameKey("{urn:orez}D").name);
		test.equal("String", context.getTypeInfoByTypeName({ns:'http://www.w3.org/2001/XMLSchema', lp: 'string'}).name);
		test.equal("Zero.AType", context.getTypeInfoByTypeName({ns:'urn:orez', lp: 'AType'}).name);
		test.equal("Zero.AType", context.getTypeInfoByTypeName('orez:AType').name);
		test.equal("Zero.BType", context.getTypeInfoByTypeName("B").name);
		test.equal("Zero.CType", context.getTypeInfoByTypeName('{urn:c}C').name);
		test.equal("Zero.CType", context.getTypeInfoByTypeName('c:C').name);
		test.equal("Zero.DType", context.getTypeInfoByTypeName('orez:D').name);
		test.done();
	}
};
