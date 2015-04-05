var Jsonix = require("../../jsonix").Jsonix;
var GH70 = require("./Mappings.js").GH70;

var context = new Jsonix.Context([GH70], {
	namespacePrefixes : {
	"urn:GH70" : "gh70"
	}
});

module.exports = {
	"Unmarshalls" : {
		"Expression" : function(test) {
			var nonXsiContext = new Jsonix.Context([GH70], {
				namespacePrefixes : {
					"urn:GH70" : "gh70"
				},
				supportXsiType : false
			});
			var unmarshaller = nonXsiContext.createUnmarshaller();
			var data = unmarshaller.unmarshalString('<Expression xmlns="urn:GH70"/>');
			test.equal(false, nonXsiContext.supportXsiType);
			test.equal("GH70.Expression", data.value.TYPE_NAME);
			test.done();
		},
		"Literal" : function(test) {
			var unmarshaller = context.createUnmarshaller();
			var data = unmarshaller.unmarshalString('<Literal xmlns="urn:GH70">test</Literal>');
			test.equal(true, context.supportXsiType);
			test.equal("GH70.Literal", data.value.TYPE_NAME);
			test.equal("test", data.value.value);
			test.done();
		},/*
		"ExpressionAsLiteral" : function(test) {
			var unmarshaller = context.createUnmarshaller();
			var data = unmarshaller.unmarshalString('<Expression xmlns="urn:GH70" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="Literal">test</Expression>');
			test.equal("GH70.Literal", data.value.TYPE_NAME);
			test.equal("test", data.value.value);
			test.done();
		},
		"And" : function(test) {
			var unmarshaller = context.createUnmarshaller();
			var data = unmarshaller.unmarshalString('<And xmlns="urn:GH70"><Expression/><Expression/></And>');
			test.equal("GH70.And", data.value.TYPE_NAME);
			test.equal(2, data.value.expressions.length);
			test.done();
		},*/
	},
};
// TODO marshalling
// local vs. root