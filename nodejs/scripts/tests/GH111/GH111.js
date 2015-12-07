var Jsonix = require("../../jsonix").Jsonix;
var GH111 = require("./Mappings.js").GH111;

module.exports = {
	"MarshallsWithPrefix" : function(test) {
		var context = new Jsonix.Context([GH111], {
			namespacePrefixes : {
				"urn:test" : ""
			}
		});
		var rootType = context.getTypeInfoByName("GH111.Root");
		test.equal('urn:gh111', rootType.getPropertyInfoByName("value").elementTypeInfos[0].elementName.namespaceURI);
		test.done();
	}
};
