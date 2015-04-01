var Jsonix = require("../../jsonix").Jsonix;
var GH70 = require("./Mappings.js").GH70;

module.exports = {
	"Unmarshalls" : {
		"Expression" : function(test) {
			var context = new Jsonix.Context([GH70], {
				namespacePrefixes : {
					"urn:GH70" : "gh70"
				},
				supportXsiType : false
			});
			var unmarshaller = context.createUnmarshaller();
			var data = unmarshaller.unmarshalString('<Expression xmlns="urn:GH70"/>');
			test.equal(false, context.supportXsiType);
			test.equal("GH70.Expression", data.value.TYPE_NAME);
			test.done();
		},
		"Literal" : function(test) {
			var context = new Jsonix.Context([GH70], {
				namespacePrefixes : {
				"urn:GH70" : "gh70"
				}
			});
			var unmarshaller = context.createUnmarshaller();
			var data = unmarshaller.unmarshalString('<Literal xmlns="urn:GH70">test</Literal>');
			test.equal(true, context.supportXsiType);
			test.equal("GH70.Literal", data.value.TYPE_NAME);
			test.equal("test", data.value.value);
			test.done();
		},
		"ExpressionAsLiteral" : function(test) {
			var context = new Jsonix.Context([GH70], {
				namespacePrefixes : {
				"urn:GH70" : "gh70"
				}
			});
			var unmarshaller = context.createUnmarshaller();
			var data = unmarshaller.unmarshalString('<Expression xmlns="urn:GH70" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="Literal">test</Expression>');
			test.equal("GH70.Literal", data.value.TYPE_NAME);
			test.equal("test", data.value.value);
			test.done();
		},
	},
};
// TODO marshalling
// local vs. root