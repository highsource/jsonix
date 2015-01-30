var Jsonix = require('jsonix').Jsonix;
var Mapping = {
    name: 'Mapping',
    typeInfos: [{
        type: 'classInfo',
        localName: 'ElementRefType',
        propertyInfos: [{
            type: 'elementRef',
            name: 'data',
            elementName : 'number',
            typeInfo: 'Number'
        }]
    }, {
        type: 'classInfo',
        localName: 'ElementRefsType',
        propertyInfos: [{
            type: 'elementRefs',
            name: 'data',
            wrapperElementName: 'numbers',
            collection: true,
            elementTypeInfos: [{
                elementName: 'long',
                typeInfo: 'Long'
            }, {
                elementName: 'integer',
                typeInfo: 'Integer'
            }]
        }]
    }],
    elementInfos: [{
        elementName: 'ref',
        typeInfo: 'Mapping.ElementRefType'
    }, {
        elementName: 'refs',
        typeInfo: 'Mapping.ElementRefsType'
    }, {
        elementName: { localPart: 'long', namespaceURI : 'urn:test'},
	substitutionHead: 'number',
        typeInfo: 'Long'
    }, {
        elementName: { localPart: 'integer', namespaceURI : 'urn:test'},
	substitutionHead: 'number',
        typeInfo: 'Integer'
    }]
};
module.exports = {
	"MarshallsRef" : function(test) {
		var context = new Jsonix.Context([ Mapping ], { namespacePrefixes : { 'urn:test' : 'test' } });
		var marshaller = context.createMarshaller();
		test.equal('<ref xmlns:test="urn:test"><test:integer>123</test:integer></ref>', marshaller.marshalString({
			name : 'ref',
			value : { data : { name : 'test:integer', value : 123 } }
		}));
		test.equal('<ref xmlns:test="urn:test"><test:integer>321</test:integer></ref>', marshaller.marshalString({
			name : 'ref',
			value : { data : { 'test:integer' : 321 } }
		}));
		test.done();
	}
}
