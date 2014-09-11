if (typeof Jsonix === 'undefined' && typeof require === 'function') {
  var Jsonix = require('jsonix').Jsonix;
}
var org_hisrc_jsonix_tests_zero_data = {
	'string-0.xml' : {
		name : new Jsonix.XML.QName('string'),
		value : 'test'
	},
	'value-0.xml' : {
		name : new Jsonix.XML.QName('value'),
		value : {
			value : 'test',
			attribute : 'check',
			TYPE_NAME : 'org_hisrc_jsonix_tests_zero.ValueType'
		}
	},
	'anyAttribute-0.xml' : {
		name : new Jsonix.XML.QName('anyAttribute'),
		value : {
			value : 'test',
			otherAttributes : {
				a : 'a',
				'b' : 'b'
			},
			TYPE_NAME : 'org_hisrc_jsonix_tests_zero.AnyAttributeType'
		}
	},
	'attribute-0.xml' : {
		name : new Jsonix.XML.QName('attribute'),
		value : {
			value : 'test',
			string : 'zero',
			integers : [ 1, 2 ],
			TYPE_NAME : 'org_hisrc_jsonix_tests_zero.AttributeType'
		}
	},
	'anyElementLax-0.xml' : {
		name : new Jsonix.XML.QName('anyElementLax'),
		value : {
			any : {
				name : new Jsonix.XML.QName('string'),
				value : 'test'
			},
			TYPE_NAME : 'org_hisrc_jsonix_tests_zero.AnyElementLaxType'
		}
	},
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
	'elements-0.xml' : {
		name : new Jsonix.XML.QName('elements'),
		value : {
			stringOrInteger : [ 'one', 2, 3, 'four' ],
			TYPE_NAME : 'org_hisrc_jsonix_tests_zero.ElementsType'
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
	'elementRef-1.xml' : {
		name : new Jsonix.XML.QName('elementRef'),
		value : {
			base : [ {
				name : new Jsonix.XML.QName('base'),
				value : {
					alpha : 'one',
					beta : [ 2 ],
					TYPE_NAME : 'org_hisrc_jsonix_tests_zero.BaseType'
				}
			}, {
				name : new Jsonix.XML.QName('extended'),
				value : {
					alpha : 'one',
					beta : [ 2 ],
					gamma : 'urn:three',
					delta : [ new Jsonix.XML.Calendar({
						year : 2004,
						month : 5,
						day : 6
					}) ],
					TYPE_NAME : 'org_hisrc_jsonix_tests_zero.ExtendedType'
				}
			} ],
			TYPE_NAME : 'org_hisrc_jsonix_tests_zero.ElementRefType'
		}
	},
	'elementRefMixed-0.xml' : {
		name : new Jsonix.XML.QName('elementRefMixed'),
		value : {
			content : [ {
				name : new Jsonix.XML.QName('value'),
				value : 'a'
			}, 'b', {
				name : new Jsonix.XML.QName('value'),
				value : 'c'
			} ],
			TYPE_NAME : 'org_hisrc_jsonix_tests_zero.ElementRefMixedType'
		}
	},
	'elementRefs-0.xml' : {
		name : new Jsonix.XML.QName('elementRefs'),
		value : {
			alphaOrBeta : [ {
				name : new Jsonix.XML.QName('alpha'),
				value : {
					value : 'one',
					TYPE_NAME : 'org_hisrc_jsonix_tests_zero.ValueType'
				}
			}, {
				name : new Jsonix.XML.QName('beta'),
				value : {
					value : '2',
					TYPE_NAME : 'org_hisrc_jsonix_tests_zero.ValueType'
				}
			} ],
			TYPE_NAME : 'org_hisrc_jsonix_tests_zero.ElementRefsType'
		}
	},
	'base-0.xml' : {
		name : new Jsonix.XML.QName('base'),
		value : {
			alpha : 'one',
			beta : [ 2 ],
			TYPE_NAME : 'org_hisrc_jsonix_tests_zero.BaseType'
		}
	},
	'extended-0.xml' : {
		name : new Jsonix.XML.QName('extended'),
		value : {
			alpha : 'one',
			beta : [ 2 ],
			gamma : 'urn:three',
			delta : [ new Jsonix.XML.Calendar({
				year : 2004,
				month : 5,
				day : 6
			}) ],
			TYPE_NAME : 'org_hisrc_jsonix_tests_zero.ExtendedType'
		}
	},
	'extendedExtended-0.xml' : {
		name : new Jsonix.XML.QName('extendedExtended'),
		value : {
			alpha : 'one',
			beta : [ 2 ],
			gamma : 'urn:three',
			delta : [ new Jsonix.XML.Calendar({
				year : 2004,
				month : 5,
				day : 6
			}) ],
			epsilon : 0.7,
			zeta : [8],
			TYPE_NAME : 'org_hisrc_jsonix_tests_zero.ExtendedExtendedType'
		}
	},
	'attribute-1.xml' : {
		name : new Jsonix.XML.QName('attribute'),
		value : {
			value : 'test',
			string : 'zero',
			integers : [ '1', '2' ],
			TYPE_NAME : 'org_hisrc_jsonix_tests_zero.AttributeType'
		}
	},
	'simpleTypes-0.xml' : {
		name : new Jsonix.XML.QName('simpleTypes'),
		value : {
			qName : new Jsonix.XML.QName('urn:a', 'aq', 'a'),
			TYPE_NAME : 'org_hisrc_jsonix_tests_zero.SimpleTypesType'
		}
	}
};
if (typeof require === 'function') {
  module.exports.org_hisrc_jsonix_tests_zero_data = org_hisrc_jsonix_tests_zero_data;
}
