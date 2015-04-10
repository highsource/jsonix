var Jsonix = require("../../jsonix").Jsonix;
var GH70 = require("./Mappings.js").GH70;

var context = new Jsonix.Context([GH70], {
	namespacePrefixes : {
	"urn:GH70" : "gh70"
	}
});

module.exports = {
	"IsAssignableForm" : function(test) {
		var expressionTypeInfo = context.getTypeInfoByName('GH70.Expression');
		var literalTypeInfo = context.getTypeInfoByName('GH70.Literal');
		test.ok(literalTypeInfo.isBasedOn(expressionTypeInfo));
		test.ok(expressionTypeInfo.isBasedOn(expressionTypeInfo));
		test.ok(!expressionTypeInfo.isBasedOn(literalTypeInfo));
		test.done();
	},
	"GetTypeInfoByValue" : function(test) {
		var literal = {
			value : 'test',
			TYPE_NAME : 'GH70.Literal'
		};
		var literalTypeInfo = context.getTypeInfoByValue(literal);
		test.equal("GH70.Literal", literalTypeInfo.name);
		test.done();
	},
	"Context" : {
		"Expression" : function(test) {
			var nonXsiContext = new Jsonix.Context([GH70], {
				namespacePrefixes : {
					"urn:GH70" : "gh70"
				},
				supportXsiType : false
			});
			test.equal(false, nonXsiContext.supportXsiType);
			test.done();
		},
	},
	"Unmarshalls" : {
		"Root" : function(test) {
			var unmarshaller = context.createUnmarshaller();
			var data = unmarshaller.unmarshalString('<Expression xmlns="urn:GH70" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="Literal">test</Expression>');
			test.equal("GH70.Literal", data.value.TYPE_NAME);
			test.equal("test", data.value.value);
			test.done();
		},
		"ElementPropertyInfo" : function(test) {
			var unmarshaller = context.createUnmarshaller();
			var data = unmarshaller.unmarshalString('<And xmlns="urn:GH70"><Expression xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="Literal">a</Expression><Expression  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="Literal">b</Expression></And>');
			test.equal("GH70.And", data.value.TYPE_NAME);
			test.equal(2, data.value.expressions.length);
			test.equal('GH70.Literal', data.value.expressions[0].TYPE_NAME);
			test.equal('a', data.value.expressions[0].value);
			test.equal('GH70.Literal', data.value.expressions[1].TYPE_NAME);
			test.equal('b', data.value.expressions[1].value);
			test.done();
		},
		"ElementsPropertyInfo" : function(test) {
			var unmarshaller = context.createUnmarshaller();
			var data = unmarshaller.unmarshalString('<Expression xmlns="urn:GH70" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="Eq"><Expression xsi:type="Literal">one</Expression><Expression xsi:type="Literal">two</Expression></Expression>');
			test.equal("GH70.Eq", data.value.TYPE_NAME);
			test.equal(2, data.value.expressions.length);
			test.equal("GH70.Literal", data.value.expressions[0].TYPE_NAME);
			test.equal("GH70.Literal", data.value.expressions[1].TYPE_NAME);
			test.done();
		},
		"ElementRefPropertyInfo" : function(test) {
			var unmarshaller = context.createUnmarshaller();
			var data = unmarshaller.unmarshalString('<Expression xmlns="urn:GH70" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="Or"><Expression xsi:type="Literal">one</Expression><Expression xsi:type="Literal">two</Expression></Expression>');
			test.equal("GH70.Or", data.value.TYPE_NAME);
			test.equal(2, data.value.expressions.length);
			test.equal("Expression", data.value.expressions[0].name.localPart);
			test.equal("GH70.Literal", data.value.expressions[0].value.TYPE_NAME);
			test.equal("Expression", data.value.expressions[1].name.localPart);
			test.equal("GH70.Literal", data.value.expressions[1].value.TYPE_NAME);
			test.done();
		},
		"ElementRefsPropertyInfo" : function(test) {
			var unmarshaller = context.createUnmarshaller();
			var data = unmarshaller.unmarshalString('<Expression xmlns="urn:GH70" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="Xor"><Literal>one</Literal><Expression xsi:type="Literal">two</Expression></Expression>');
			test.equal("GH70.Xor", data.value.TYPE_NAME);
			test.equal(2, data.value.expressions.length);
			test.equal("Literal", data.value.expressions[0].name.localPart);
			test.equal("GH70.Literal", data.value.expressions[0].value.TYPE_NAME);
			test.equal("Expression", data.value.expressions[1].name.localPart);
			test.equal("GH70.Literal", data.value.expressions[1].value.TYPE_NAME);
			test.done();
		},
		"AnyElementPropertyInfo" : function(test) {
			var unmarshaller = context.createUnmarshaller();
			var data = unmarshaller.unmarshalString('<Expression xmlns="urn:GH70" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="Any"><Literal>one</Literal><Expression xsi:type="Literal">two</Expression></Expression>');
			test.equal("GH70.Any", data.value.TYPE_NAME);
			test.equal(2, data.value.expressions.length);
			test.equal("Literal", data.value.expressions[0].name.localPart);
			test.equal("GH70.Literal", data.value.expressions[0].value.TYPE_NAME);
			test.equal("Expression", data.value.expressions[1].name.localPart);
			test.equal("GH70.Literal", data.value.expressions[1].value.TYPE_NAME);
			test.done();
		},
	},
	"Marshalls" : {
		"ElementPropertyInfo" : function(test) {
			var marshaller = context.createMarshaller();
			var data = {
				name : 'gh70:Expression',
				value : {
					expressions : [
						{ value : 'one', TYPE_NAME : 'GH70.Literal'},
						{ value : 'two', TYPE_NAME : 'GH70.Literal'}
					],
					TYPE_NAME : "GH70.And"
				}
			}
			var str = marshaller.marshalString(data);
			test.equal('<gh70:Expression xmlns:gh70="urn:GH70" xsi:type="gh70:And" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><gh70:Expression xsi:type="gh70:Literal">one</gh70:Expression><gh70:Expression xsi:type="gh70:Literal">two</gh70:Expression></gh70:Expression>', str);
			test.done();
		},
		"ElementsPropertyInfo" : function(test) {
			var marshaller = context.createMarshaller();
			var data = {
				name : 'gh70:Expression',
				value : {
					expressions : [
						{ value : 'one', TYPE_NAME : 'GH70.Literal'},
						{ value : 'two', TYPE_NAME : 'GH70.Literal'}
					],
					TYPE_NAME : "GH70.Eq"
				}
			}
			var str = marshaller.marshalString(data);
			test.equal('<gh70:Expression xmlns:gh70="urn:GH70" xsi:type="gh70:Eq" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><gh70:Expression xsi:type="gh70:Literal">one</gh70:Expression><gh70:Expression xsi:type="gh70:Literal">two</gh70:Expression></gh70:Expression>', str);
			test.done();
		},
		"ElementRefPropertyInfo" : function(test) {
			var marshaller = context.createMarshaller();
			var data = {
				name : 'gh70:Expression',
				value : {
					expressions : [
						{ name : 'gh70:Expression', value : { value : 'one', TYPE_NAME : 'GH70.Literal'} },
						{ name : 'gh70:Expression', value : { value : 'two', TYPE_NAME : 'GH70.Literal'} }
					],
					TYPE_NAME : "GH70.Or"
				}
			}
			var str = marshaller.marshalString(data);
			test.equal('<gh70:Expression xmlns:gh70="urn:GH70" xsi:type="gh70:Or" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><gh70:Expression xsi:type="gh70:Literal">one</gh70:Expression><gh70:Expression xsi:type="gh70:Literal">two</gh70:Expression></gh70:Expression>', str);
			test.done();
		},
		"ElementRefsPropertyInfo" : function(test) {
			var marshaller = context.createMarshaller();
			var data = {
				name : 'gh70:Expression',
				value : {
					expressions : [
						{ name : 'gh70:Literal', value : { value : 'one', TYPE_NAME : 'GH70.Literal'} },
						{ name : 'gh70:Expression', value : { value : 'two', TYPE_NAME : 'GH70.Literal'} }
					],
					TYPE_NAME : "GH70.Xor"
				}
			}
			var str = marshaller.marshalString(data);
			test.equal('<gh70:Expression xmlns:gh70="urn:GH70" xsi:type="gh70:Xor" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><gh70:Literal>one</gh70:Literal><gh70:Expression xsi:type="gh70:Literal">two</gh70:Expression></gh70:Expression>', str);
			test.done();
		},
		"AnyElementPropertyInfo" : function(test) {
			var marshaller = context.createMarshaller();
			var data = {
				name : 'gh70:Expression',
				value : {
					expressions : [
						{ name : 'gh70:Literal', value : { value : 'one', TYPE_NAME : 'GH70.Literal'} },
						{ name : 'gh70:Expression', value : { value : 'two', TYPE_NAME : 'GH70.Literal'} }
					],
					TYPE_NAME : "GH70.Any"
				}
			}
			var str = marshaller.marshalString(data);
			test.equal('<gh70:Expression xmlns:gh70="urn:GH70" xsi:type="gh70:Any" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><gh70:Literal>one</gh70:Literal><gh70:Expression xsi:type="gh70:Literal">two</gh70:Expression></gh70:Expression>', str);
			test.done();
		}
	}
};