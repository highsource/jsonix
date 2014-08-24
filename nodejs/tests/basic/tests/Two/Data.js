var Jsonix = require('jsonix').Jsonix;
var org_hisrc_jsonix_tests_two_CustomValueClass = require('./Mappings').org_hisrc_jsonix_tests_two_CustomValueClass;
var org_hisrc_jsonix_tests_two_data = {
	'string-0.xml' : {
		name : new Jsonix.XML.QName('urn:test', 'string', 'test'),
		value : 'test'
	},
	'value-0.xml' : {
		name : new Jsonix.XML.QName('urn:test', 'value', 'test'),
		value : {
			value : 'test',
			attribute : 'check',
			TYPE_NAME : 'org_hisrc_jsonix_tests_two.ValueType'
		}
	},
	'customClassValue-0.xml' : {
		name : new Jsonix.XML.QName('urn:test', 'customClassValue', 'test'),
		value : new org_hisrc_jsonix_tests_two_CustomValueClass('test', 'check')
	},
	'element-0.xml' : {
		name : new Jsonix.XML.QName('urn:test', 'element', 'test'),
		value : {
			element : 'one',
			elements : [ 'two', 'three' ],
			item : [ 'four', 'five' ],
			items : [ {
				name : new Jsonix.XML.QName('urn:test', 'items', 'test'),
				value : [ 'six', 'seven' ]
			}, {
				name : new Jsonix.XML.QName('urn:test', 'items', 'test'),
				value : [ 'eight', 'nine' ]
			} ],
			TYPE_NAME : 'org_hisrc_jsonix_tests_two.ElementType'
		}
	},
	'attribute-0.xml' : {
		name : new Jsonix.XML.QName('urn:test', 'attribute', 'test'),
		value : {
			value : 'test',
			string : 'zero',
			integers : [ 1, 2 ],
			TYPE_NAME : 'org_hisrc_jsonix_tests_two.AttributeType'
		}
	}
};
if (typeof require === 'function') {
  module.exports.org_hisrc_jsonix_tests_two_data = org_hisrc_jsonix_tests_two_data;
}
