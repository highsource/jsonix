org_hisrc_jsonix_tests_zero.Data = {
	'string-0.xml' : {
		name : new Jsonix.XML.QName('string'),
		value : 'test'
	},
	'value-0.xml' : {
		name : new Jsonix.XML.QName('value'),
		value : {
			value : 'test',
			attribute : 'check'
		}
	},
	'anyAttribute-0.xml' : {
		name : new Jsonix.XML.QName('anyAttribute'),
		value : {
			value : 'test',
			otherAttributes : {
				a : 'a',
				'b' : 'b'
			}
		}
	},
	'attribute-0.xml' : {
		name : new Jsonix.XML.QName('attribute'),
		value : {
			value : 'test',
			string : 'zero',
			integers : [ 1, 2 ]
		}
	},
	'anyElementLax-0.xml' : {
		name : new Jsonix.XML.QName('anyElementLax'),
		value : {
			any : {
				name : new Jsonix.XML.QName('string'),
				value : 'test'
			}
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
			} ]
		}
	},
	'elements-0.xml' : {
		name : new Jsonix.XML.QName('elements'),
		value : {
			stringOrInteger : [ 'one', 2, 3, 'four' ]
		}
	},
	'elementRef-0.xml' : {
		name : new Jsonix.XML.QName('elementRef'),
		value : {
			base : [ {
				name : new Jsonix.XML.QName('base'),
				value : {
					alpha : 'one',
					beta : [ 2 ]
				}
			} ]
		}
	},
	'elementRef-1.xml' : {
		name : new Jsonix.XML.QName('elementRef'),
		value : {
			base : [ {
				name : new Jsonix.XML.QName('base'),
				value : {
					alpha : 'one',
					beta : [ 2 ]
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
					}) ]
				}
			} ]
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
			} ]
		}
	},
	'elementRefs-0.xml' : {
		name : new Jsonix.XML.QName('elementRefs'),
		value : {
			alphaOrBeta : [ {
				name : new Jsonix.XML.QName('alpha'),
				value : {
					value : 'one'
				}
			}, {
				name : new Jsonix.XML.QName('beta'),
				value : {
					value : '2'
				}
			} ]
		}
	},
	'base-0.xml' : {
		name : new Jsonix.XML.QName('base'),
		value : {
			alpha : 'one',
			beta : [ 2 ]
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
			}) ]
		}
	}
};