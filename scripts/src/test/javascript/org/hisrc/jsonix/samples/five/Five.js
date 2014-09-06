Five = {
	n : 'Five',
	tis : [ {
		t : 'c',
		ln : 'ValueType',
		ps : [ {
			t : 'v',
			n : 'value'
		} ]
	}, {
		ln : 'AnyAttributeType',
		ps : [ {
			t : 'aa',
			n : 'attributes'
		} ]
	}, {
		ln : 'AttributeType',
		ps : [ {
			t : 'a',
			n : 'attribute'
		} ]
	}, {
		ln : 'ElementType',
		ps : [ {
			t : 'e',
			n : 'element'
		}, {
			n : 'elements',
			en : 'element',
			wen : 'elements'
		}, {
			n : 'item',
			col : true
		}, {
			n : 'items',
			en : 'item',
			wen : 'items',
			col : true
		} ]
	}, {
		ln : 'ElementsType',
		ps : [ {
			t : 'es',
			n : 'ab',
			etis : [ {
				en : 'a',
				ti : 'Five.ValueType'
			}, {
				en : 'b',
				ti : 'Integer'
			} ]
		}, {
			t : 'es',
			n : 'abs',
			wen : 'abs',
			etis : [ {
				en : 'a',
				ti : 'Five.ValueType'
			}, {
				en : 'b',
				ti : 'Integer'
			} ]
		}, {
			t : 'es',
			n : 'cd',
			col : true,
			etis : [ {
				en : 'c',
				ti : 'Integer'
			}, {
				en : 'd',
				ti : 'Five.ValueType'
			} ]
		}, {
			t : 'es',
			n : 'cds',
			col : true,
			wen : 'cds',
			etis : [ {
				en : 'c',
				ti : 'Integer'
			}, {
				en : 'd',
				ti : 'Five.ValueType'
			} ]
		} ]
	}, {
		ln : 'ElementRefType',
		ps : [ {
			t : 'er',
			n : 'element'
		}, {
			t : 'er',
			n : 'element1'
		}, {
			t : 'er',
			n : 'elements',
			en : 'element',
			wen : 'elements'
		}, {
			t : 'er',
			n : 'elements1',
			en : 'element1',
			wen : 'elements1',
			ti : 'Double'
		}, {
			t : 'er',
			n : 'item',
			col : true
		}, {
			t : 'er',
			n : 'items',
			en : 'item',
			wen : 'items',
			col : true
		}, {
			t : 'er',
			n : 'mixes',
			en : 'mix',
			wen : 'mixes',
			col : true,
			ti : 'Five.ValueType'
		}, {
			t : 'er',
			n : 'mix',
			col : true,
			ti : 'Five.ValueType'
		} ]
	}, {
		ln : 'ElementRefsType',
		ps : [ {
			t : 'ers',
			n : 'element',
			etis : [ {
				en : 'element'
			} ]
		}, {
			t : 'ers',
			n : 'element1',
			etis : [ {
				en : 'element1'
			} ]
		}, {
			t : 'ers',
			n : 'elements',
			wen : 'elements',
			etis : [ {
				en : 'element'
			} ]
		}, {
			t : 'ers',
			n : 'elements1',
			wen : 'elements1',
			etis : [ {
				en : 'element1',
				ti : 'Double'
			} ]
		}, {
			t : 'ers',
			n : 'item',
			col : true,
			etis : [ {
				en : 'item'
			} ]
		}, {
			t : 'ers',
			n : 'items',
			wen : 'items',
			col : true,
			etis : [ {
				en : 'item'
			} ]
		}, {
			t : 'ers',
			n : 'mixes',
			wen : 'mixes',
			col : true,
			etis : [ {
				en : 'mix',
				ti : 'Five.ValueType'
			} ]
		}, {
			t : 'ers',
			n : 'mix',
			col : true,
			etis : [ {
				en : 'mix',
				ti : 'Five.ValueType'
			} ]
		} ]
	}, {
		ln : 'AnyElementType',
		ps : [ {
			t : 'a',
			n : 'attribute'
		}, {
			t : 'ae',
			n : 'any',
			col : true
		} ]
	}, {
		ln : 'SimpleTypesType',
		ps : [ {
			n : 'date',
			ti : 'Date'
		}, {
			n : 'double',
			ti : 'Double'
		}, {
			n : 'integer',
			ti : 'Integer'
		}, {
			n : 'string'
		}, {
			n : 'dates',
			ti : {
				t : 'l',
				ti : 'Date'

			}
		}, {
			n : 'doubles',
			ti : {
				t : 'l',
				ti : 'Double'
			}
		}, {
			n : 'integers',
			ti : {
				t : 'l',
				ti : 'Integer'
			}
		}, {
			n : 'strings',
			ti : {
				t : 'l'
			}
		}, {
			n : 'doublesList',
			ti : {
				t : 'l',
				ti : {
					t : 'l',
					ti : 'Double'
				},
				sep : ', '
			}
		} ]
	}, {
		ln : 'ElementMapType',
		ps : [ {
			t : 'em',
			n : 'element',
			k : {
				t : 'a',
				n : 'key'
			},
			v : {
				t : 'v',
				n : 'value'
			}
		}, {
			t : 'em',
			n : 'elements',
			wen : 'elements',
			en : 'element',
			k : {
				t : 'a',
				n : 'key'
			},
			v : {
				t : 'v',
				n : 'value'
			}
		}, {
			t : 'em',
			n : 'elementCollection',
			col : true,
			k : {
				t : 'a',
				n : 'key'
			},
			v : {
				t : 'v',
				n : 'value'
			}
		}, {
			t : 'em',
			n : 'elementsCollection',
			wen : 'elementsCollection',
			en : 'element',
			col : true,
			k : {
				t : 'a',
				n : 'key'
			},
			v : {
				t : 'v',
				n : 'value'
			}
		} ]
	}, {
		t : 'enum',
		ln : 'EnumInfoArray',
		vs : [ 'a', 'b', 'c' ]
	}, {
		t : 'enum',
		ln : 'EnumInfoObject',
		vs : {
			'a' : 'AA',
			'b' : 'BB',
			'c' : 'CC'
		}
	}, {
		t : 'enum',
		ln : 'StringEnumInfoArray',
		vs : [ 'a', 'b', 'c' ]
	}, {
		t : 'enum',
		ln : 'StringEnumInfoObject',
		vs : {
			'a' : 'AA',
			'b' : 'BB',
			'c' : 'CC'
		}
	}, {
		t : 'enum',
		ln : 'IntegerEnumInfoArray',
		bti : 'Integer',
		vs : [ 1, '2', 3 ]
	}, {
		t : 'enum',
		ln : 'IntegerEnumInfoObject',
		bti : 'Integer',
		vs : {
			'one' : 1,
			'two' : '2',
			'three' : 3
		}
	} ],
	eis : [ {
		en : 'value',
		ti : 'Five.ValueType'
	}, {
		en : 'anyAttribute',
		ti : 'Five.AnyAttributeType'
	}, {
		en : 'attribute',
		ti : 'Five.AttributeType'
	}, {
		en : 'element',
		ti : 'Five.ElementType'
	}, {
		en : 'elements',
		ti : 'Five.ElementsType'
	}, {
		en : 'elementRef',
		ti : 'Five.ElementRefType'
	}, {
		en : 'elementRefs',
		ti : 'Five.ElementRefsType'
	}, {
		en : 'anyElement',
		ti : 'Five.AnyElementType'
	}, {
		en : 'simpleTypes',
		ti : 'Five.SimpleTypesType'
	}, {
		en : 'element',
		sc : 'Five.ElementRefType'
	}, {
		en : 'item',
		sc : 'Five.ElementRefType'
	}, {
		en : 'mix',
		ti : 'Five.ValueType',
		sc : 'Five.ElementRefType'
	}, {
		en : 'elementMap',
		ti : 'Five.ElementMapType'
	}, {
		en : 'enumInfoArray',
		ti : 'Five.EnumInfoArray'
	}, {
		en : 'enumInfoObject',
		ti : 'Five.EnumInfoObject'
	}, {
		en : 'stringEnumInfoArray',
		ti : 'Five.StringEnumInfoArray'
	}, {
		en : 'stringEnumInfoObject',
		ti : 'Five.StringEnumInfoObject'
	}, {
		en : 'integerEnumInfoArray',
		ti : 'Five.IntegerEnumInfoArray'
	}, {
		en : 'integerEnumInfoObject',
		ti : 'Five.IntegerEnumInfoObject'
	}, {
		en : 'anyType',
		ti : 'AnyType'
	} ]
};
Six = {
	n : 'Six',
	eis : [ {
		en : 'string'
	} ]
};