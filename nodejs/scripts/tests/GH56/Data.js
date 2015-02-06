if (typeof Jsonix === 'undefined' && typeof require === 'function') {
  var Jsonix = require('jsonix').Jsonix;
}
var org_hisrc_jsonix_tests_zero_data = {
	// Can't really do DOM comparison
	// 'anyElementLax-1.xml' : {
	// name : new Jsonix.XML.QName('anyElementLax'),
	// value : {
	// any : Jsonix.DOM.parse('<node>test</node>').documentElement
	// }
	// },
	'element-0.xml' : {
		name : new Jsonix.XML.QName('element'),
		value : {
			element : 'one',
			elements : [ 'two', 'three' ],
			item : [ 'four', 'five' ],
			items : [ {
				name : new Jsonix.XML.QName('items'),
				value : [ 'six', 'seven' ]
			}, {
				name : new Jsonix.XML.QName('items'),
				value : [ 'eight', 'nine' ]
			} ],
			TYPE_NAME : 'org_hisrc_jsonix_tests_zero.ElementType'
		}
	},
	'elementRef-0.xml' : {
		name : new Jsonix.XML.QName('elementRef'),
		value : {
			base : [ {
				name : new Jsonix.XML.QName('base'),
				value : {
					alpha : 'one',
					beta : [ 2 ],
					TYPE_NAME : 'org_hisrc_jsonix_tests_zero.BaseType'
				}
			} ],
			TYPE_NAME : 'org_hisrc_jsonix_tests_zero.ElementRefType'
		}
	},
};
if (typeof require === 'function') {
  module.exports.org_hisrc_jsonix_tests_zero_data = org_hisrc_jsonix_tests_zero_data;
}
