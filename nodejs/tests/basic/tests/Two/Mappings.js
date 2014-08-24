var Jsonix = require('jsonix').Jsonix;
var org_hisrc_jsonix_tests_two_CustomValueClass = Jsonix.Class({
	value : null,
	attribute: null,
	initialize : function(value, attribute) {
		if (value) { this.value = value; }
		if (attribute) { this.attribute = attribute; }
	}
});
var org_hisrc_jsonix_tests_two = {
  name: 'org_hisrc_jsonix_tests_two',
  typeInfos: [{
      type: 'classInfo',
      localName: 'ElementType',
      propertyInfos: [{
          type: 'element',
          name: 'element',
          elementName: {namespaceURI:'urn:test', localPart: 'element'},
          typeInfo: 'String'
        }, {
          type: 'element',
          name: 'elements',
          collection: true,
          elementName: {namespaceURI:'urn:test', localPart: 'elements'},
          typeInfo: 'String'
        }, {
          type: 'element',
          name: 'item',
          elementName: {namespaceURI:'urn:test', localPart: 'item'},
          typeInfo: {
            type: 'list',
            typeInfo: 'String'
          }
        }, {
          name: 'items',
          collection: true,
          elementName: {namespaceURI:'urn:test', localPart: 'items'},
          typeInfo: {
            type: 'list',
            typeInfo: 'String'
          },
          type: 'elementRef'
        }]
    }, {
      type: 'classInfo',
      localName: 'AttributeType',
      propertyInfos: [{
          name: 'value',
          typeInfo: 'String',
          type: 'value'
        }, {
          name: 'string',
          typeInfo: 'String',
          attributeName: {namespaceURI:'urn:test', localPart: 'string'},
          type: 'attribute'
        }, {
          name: 'integers',
          typeInfo: {
            type: 'list',
            typeInfo: 'Integer'
          },
          attributeName: {namespaceURI:'urn:test', localPart: 'integers'},
          type: 'attribute'
        }]
    }, {
      type: 'classInfo',
      localName: 'ValueType',
      propertyInfos: [{
          name: 'value',
          typeInfo: 'String',
          type: 'value'
        }, {
          name: 'attribute',
          typeInfo: 'String',
          attributeName: {namespaceURI:'urn:test', localPart: 'attribute'},
          type: 'attribute'
        }]
    }, {
      type: 'classInfo',
      localName: 'CustomClassValueType',
      instanceFactory: org_hisrc_jsonix_tests_two_CustomValueClass,
      propertyInfos: [{
          name: 'value',
          typeInfo: 'String',
          type: 'value'
        }, {
          name: 'attribute',
          typeInfo: 'String',
          attributeName: {namespaceURI:'urn:test', localPart: 'attribute'},
          type: 'attribute'
        }]
    }],
  elementInfos: [{
      elementName: {namespaceURI:'urn:test', localPart: 'element'},
      typeInfo: 'org_hisrc_jsonix_tests_two.ElementType'
    }, {
      elementName: {namespaceURI:'urn:test', localPart: 'attribute'},
      typeInfo: 'org_hisrc_jsonix_tests_two.AttributeType'
    }, {
      elementName: {namespaceURI:'urn:test', localPart: 'string'},
      typeInfo: 'String'
    }, {
      elementName: {namespaceURI:'urn:test', localPart: 'value'},
      typeInfo: 'org_hisrc_jsonix_tests_two.ValueType'
    }, {
      elementName: {namespaceURI:'urn:test', localPart: 'customClassValue'},
      typeInfo: 'org_hisrc_jsonix_tests_two.CustomClassValueType'
    }]
};
if (typeof require === 'function') {
  module.exports.org_hisrc_jsonix_tests_two = org_hisrc_jsonix_tests_two;
  module.exports.org_hisrc_jsonix_tests_two_CustomValueClass = org_hisrc_jsonix_tests_two_CustomValueClass;
}