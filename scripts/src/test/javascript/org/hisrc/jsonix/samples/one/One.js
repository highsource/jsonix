One = {};
// Declare types
One.ValueType = new Jsonix.Model.ClassInfo({
	name : "One.ValueType"
});
One.ValueAsCDATAType = new Jsonix.Model.ClassInfo({
	name : "One.ValueAsCDATAType"
});
One.AnyAttributeType = new Jsonix.Model.ClassInfo({
	name : "One.AnyAttributeType"
});
One.AttributeType = new Jsonix.Model.ClassInfo({
	name : "One.AttributeType"
});
One.ElementType = new Jsonix.Model.ClassInfo({
	name : "One.ElementType"
});
One.ElementsType = new Jsonix.Model.ClassInfo({
	name : "One.ElementsType"
});
One.ElementRefType = new Jsonix.Model.ClassInfo({
	name : "One.ElementRefType"
});
One.ElementRefsType = new Jsonix.Model.ClassInfo({
	name : "One.ElementRefsType"
});
One.AnyElementType = new Jsonix.Model.ClassInfo({
	name : "One.AnyElementType"
});
One.SimpleTypesType = new Jsonix.Model.ClassInfo({
	name : "One.SimpleTypesType"
});
One.ElementMapType = new Jsonix.Model.ClassInfo({
	name : "One.ElementMapType"
});
//
One.ValueType.properties = [ new Jsonix.Model.ValuePropertyInfo({
	name : "value",
	typeInfo : Jsonix.Schema.XSD.String.INSTANCE
}) ];
One.ValueAsCDATAType.properties = [ new Jsonix.Model.ValuePropertyInfo({
	name : "value",
	typeInfo : Jsonix.Schema.XSD.String.INSTANCE,
	asCDATA: true
}) ];
One.AnyAttributeType.properties = [ new Jsonix.Model.AnyAttributePropertyInfo({
	name : "attributes"
}) ];
One.AttributeType.properties = [ new Jsonix.Model.AttributePropertyInfo({
	name : "attribute",
	typeInfo : Jsonix.Schema.XSD.String.INSTANCE
}) ];
One.ElementType.properties = [ new Jsonix.Model.ElementPropertyInfo({
	name : "element",
	typeInfo : Jsonix.Schema.XSD.String.INSTANCE
}), new Jsonix.Model.ElementPropertyInfo({
	name : "elements",
	elementName : new Jsonix.XML.QName("element"),
	wrapperElementName : new Jsonix.XML.QName("elements"),
	typeInfo : Jsonix.Schema.XSD.String.INSTANCE
}), new Jsonix.Model.ElementPropertyInfo({
	name : "item",
	collection : true,
	typeInfo : Jsonix.Schema.XSD.String.INSTANCE
}), new Jsonix.Model.ElementPropertyInfo({
	name : "items",
	elementName : new Jsonix.XML.QName("item"),
	wrapperElementName : new Jsonix.XML.QName("items"),
	collection : true,
	typeInfo : Jsonix.Schema.XSD.String.INSTANCE
}) ];
One.ElementsType.properties = [ new Jsonix.Model.ElementsPropertyInfo({
	name : 'ab',
	elementTypeInfos : [ {
		elementName : new Jsonix.XML.QName('a'),
		typeInfo : One.ValueType
	}, {
		elementName : new Jsonix.XML.QName('b'),
		typeInfo : Jsonix.Schema.XSD.Integer.INSTANCE
	} ]
}), new Jsonix.Model.ElementsPropertyInfo({
	name : 'abs',
	wrapperElementName : new Jsonix.XML.QName("abs"),
	elementTypeInfos : [ {
		elementName : new Jsonix.XML.QName('a'),
		typeInfo : One.ValueType
	}, {
		elementName : new Jsonix.XML.QName('b'),
		typeInfo : Jsonix.Schema.XSD.Integer.INSTANCE
	} ]
}), new Jsonix.Model.ElementsPropertyInfo({
	name : 'cd',
	collection : true,
	elementTypeInfos : [ {
		elementName : new Jsonix.XML.QName('c'),
		typeInfo : Jsonix.Schema.XSD.Integer.INSTANCE
	}, {
		elementName : new Jsonix.XML.QName('d'),
		typeInfo : One.ValueType
	} ]
}), new Jsonix.Model.ElementsPropertyInfo({
	name : 'cds',
	collection : true,
	wrapperElementName : new Jsonix.XML.QName("cds"),
	elementTypeInfos : [ {
		elementName : new Jsonix.XML.QName('c'),
		typeInfo : Jsonix.Schema.XSD.Integer.INSTANCE
	}, {
		elementName : new Jsonix.XML.QName('d'),
		typeInfo : One.ValueType
	} ]
}) ];
One.ElementRefType.properties = [ new Jsonix.Model.ElementRefPropertyInfo({
	name : "element",
	typeInfo : Jsonix.Schema.XSD.String.INSTANCE
}), new Jsonix.Model.ElementRefPropertyInfo({
	name : "element1",
	typeInfo : Jsonix.Schema.XSD.String.INSTANCE
}), new Jsonix.Model.ElementRefPropertyInfo({
	name : "elements",
	elementName : new Jsonix.XML.QName("element"),
	wrapperElementName : new Jsonix.XML.QName("elements"),
	typeInfo : Jsonix.Schema.XSD.String.INSTANCE
}), new Jsonix.Model.ElementRefPropertyInfo({
	name : "elements1",
	elementName : new Jsonix.XML.QName("element1"),
	wrapperElementName : new Jsonix.XML.QName("elements1"),
	typeInfo : Jsonix.Schema.XSD.Double.INSTANCE
}), new Jsonix.Model.ElementRefPropertyInfo({
	name : "item",
	collection : true,
	typeInfo : Jsonix.Schema.XSD.String.INSTANCE
}), new Jsonix.Model.ElementRefPropertyInfo({
	name : "items",
	elementName : new Jsonix.XML.QName("item"),
	wrapperElementName : new Jsonix.XML.QName("items"),
	collection : true,
	typeInfo : Jsonix.Schema.XSD.String.INSTANCE
}), new Jsonix.Model.ElementRefPropertyInfo({
	name : "mixes",
	elementName : new Jsonix.XML.QName("mix"),
	wrapperElementName : new Jsonix.XML.QName("mixes"),
	collection : true,
	mixed : true,
	typeInfo : One.ValueType
}), new Jsonix.Model.ElementRefPropertyInfo({
	name : "mix",
	collection : true,
	mixed : true,
	typeInfo : One.ValueType
}) ];

One.ElementRefsType.properties = [ new Jsonix.Model.ElementRefsPropertyInfo({
	name : "element",
	elementTypeInfos : [ {
		elementName : new Jsonix.XML.QName("element"),
		typeInfo : Jsonix.Schema.XSD.String.INSTANCE
	} ]
}), new Jsonix.Model.ElementRefsPropertyInfo({
	name : "element1",
	elementTypeInfos : [ {
		elementName : new Jsonix.XML.QName("element1"),
		typeInfo : Jsonix.Schema.XSD.String.INSTANCE
	} ]
}), new Jsonix.Model.ElementRefsPropertyInfo({
	name : "elements",
	wrapperElementName : new Jsonix.XML.QName("elements"),
	elementTypeInfos : [ {
		elementName : new Jsonix.XML.QName("element"),
		typeInfo : Jsonix.Schema.XSD.String.INSTANCE
	} ]
}), new Jsonix.Model.ElementRefsPropertyInfo({
	name : "elements1",
	wrapperElementName : new Jsonix.XML.QName("elements1"),
	elementTypeInfos : [ {
		elementName : new Jsonix.XML.QName("element1"),
		typeInfo : Jsonix.Schema.XSD.Double.INSTANCE
	} ]
}), new Jsonix.Model.ElementRefsPropertyInfo({
	name : "item",
	collection : true,
	elementTypeInfos : [ {
		elementName : new Jsonix.XML.QName("item"),
		typeInfo : Jsonix.Schema.XSD.String.INSTANCE
	} ]
}), new Jsonix.Model.ElementRefsPropertyInfo({
	name : "items",
	wrapperElementName : new Jsonix.XML.QName("items"),
	collection : true,
	elementTypeInfos : [ {
		elementName : new Jsonix.XML.QName("item"),
		typeInfo : Jsonix.Schema.XSD.String.INSTANCE
	} ]
}), new Jsonix.Model.ElementRefsPropertyInfo({
	name : "mixes",
	wrapperElementName : new Jsonix.XML.QName("mixes"),
	collection : true,
	mixed : true,
	elementTypeInfos : [ {
		elementName : new Jsonix.XML.QName("mix"),
		typeInfo : One.ValueType
	} ]
}), new Jsonix.Model.ElementRefsPropertyInfo({
	name : "mix",
	collection : true,
	mixed : true,
	elementTypeInfos : [ {
		elementName : new Jsonix.XML.QName("mix"),
		typeInfo : One.ValueType
	} ]
}) ];
//
One.AnyElementType.properties = [ new Jsonix.Model.AttributePropertyInfo({
	name : "attribute",
	typeInfo : Jsonix.Schema.XSD.String.INSTANCE
}), new Jsonix.Model.AnyElementPropertyInfo({
	name : "any",
	collection : true
}) ];

One.SimpleTypesType.properties = [
		//
		new Jsonix.Model.ElementPropertyInfo({
			name : "date",
			typeInfo : Jsonix.Schema.XSD.DateAsDate.INSTANCE
		}),
		new Jsonix.Model.ElementPropertyInfo({
			name : "double",
			typeInfo : Jsonix.Schema.XSD.Double.INSTANCE
		}),
		new Jsonix.Model.ElementPropertyInfo({
			name : "integer",
			typeInfo : Jsonix.Schema.XSD.Integer.INSTANCE
		}),
		new Jsonix.Model.ElementPropertyInfo({
			name : "string",
			typeInfo : Jsonix.Schema.XSD.String.INSTANCE
		}),
		//
		new Jsonix.Model.ElementPropertyInfo({
			name : "dates",
			typeInfo : Jsonix.Schema.XSD.DateAsDate.INSTANCE.LIST
		}),
		new Jsonix.Model.ElementPropertyInfo({
			name : "doubles",
			typeInfo : Jsonix.Schema.XSD.Double.INSTANCE.LIST
		}),
		new Jsonix.Model.ElementPropertyInfo({
			name : "integers",
			typeInfo : Jsonix.Schema.XSD.Integer.INSTANCE.LIST
		}),
		new Jsonix.Model.ElementPropertyInfo({
			name : "strings",
			typeInfo : Jsonix.Schema.XSD.String.INSTANCE.LIST
		}),

		new Jsonix.Model.ElementPropertyInfo({
			name : "doublesList",
			typeInfo : new Jsonix.Schema.XSD.List(
					Jsonix.Schema.XSD.Double.INSTANCE.LIST, null, ', ')
		}) ];

One.ElementMapType.properties = [ new Jsonix.Model.ElementMapPropertyInfo({
	name : "element",
	key : new Jsonix.Model.AttributePropertyInfo({
		name : "key",
		typeInfo : Jsonix.Schema.XSD.String.INSTANCE
	}),
	value : new Jsonix.Model.ValuePropertyInfo({
		name : "value",
		typeInfo : Jsonix.Schema.XSD.String.INSTANCE
	})
}), new Jsonix.Model.ElementMapPropertyInfo({
	name : "elements",
	wrapperElementName : new Jsonix.XML.QName("elements"),
	elementName : new Jsonix.XML.QName("element"),
	key : new Jsonix.Model.AttributePropertyInfo({
		name : "key",
		typeInfo : Jsonix.Schema.XSD.String.INSTANCE
	}),
	value : new Jsonix.Model.ValuePropertyInfo({
		name : "value",
		typeInfo : Jsonix.Schema.XSD.String.INSTANCE
	})
}), new Jsonix.Model.ElementMapPropertyInfo({
	name : "elementCollection",
	collection : true,
	key : new Jsonix.Model.AttributePropertyInfo({
		name : "key",
		typeInfo : Jsonix.Schema.XSD.String.INSTANCE
	}),
	value : new Jsonix.Model.ValuePropertyInfo({
		name : "value",
		typeInfo : Jsonix.Schema.XSD.String.INSTANCE
	})
}), new Jsonix.Model.ElementMapPropertyInfo({
	name : "elementsCollection",
	wrapperElementName : new Jsonix.XML.QName("elementsCollection"),
	elementName : new Jsonix.XML.QName("element"),
	collection : true,
	key : new Jsonix.Model.AttributePropertyInfo({
		name : "key",
		typeInfo : Jsonix.Schema.XSD.String.INSTANCE
	}),
	value : new Jsonix.Model.ValuePropertyInfo({
		name : "value",
		typeInfo : Jsonix.Schema.XSD.String.INSTANCE
	})
}) ];

One.elementInfos = [ {
	elementName : new Jsonix.XML.QName('value'),
	typeInfo : One.ValueType
}, {
	elementName : new Jsonix.XML.QName('valueAsCDATA'),
	typeInfo : One.ValueAsCDATAType
}, {
	elementName : new Jsonix.XML.QName('anyAttribute'),
	typeInfo : One.AnyAttributeType
}, {
	elementName : new Jsonix.XML.QName('attribute'),
	typeInfo : One.AttributeType
}, {
	elementName : new Jsonix.XML.QName('element'),
	typeInfo : One.ElementType
}, {
	elementName : new Jsonix.XML.QName('elements'),
	typeInfo : One.ElementsType
}, {
	elementName : new Jsonix.XML.QName('elementRef'),
	typeInfo : One.ElementRefType
}, {
	elementName : new Jsonix.XML.QName('elementRefs'),
	typeInfo : One.ElementRefsType
}, {
	elementName : new Jsonix.XML.QName('anyElement'),
	typeInfo : One.AnyElementType
}, {
	elementName : new Jsonix.XML.QName('simpleTypes'),
	typeInfo : One.SimpleTypesType
}, {
	elementName : new Jsonix.XML.QName('element'),
	typeInfo : Jsonix.Schema.XSD.String.INSTANCE,
	scope : One.ElementRefType
}, {
	elementName : new Jsonix.XML.QName('item'),
	typeInfo : Jsonix.Schema.XSD.String.INSTANCE,
	scope : One.ElementRefType
}, {
	elementName : new Jsonix.XML.QName('mix'),
	typeInfo : One.ValueType,
	scope : One.ElementRefType
}, {
	elementName : new Jsonix.XML.QName('elementMap'),
	typeInfo : One.ElementMapType
} ];
Two = {
	name : "Two",
	elementInfos : [ {
		elementName : new Jsonix.XML.QName('string'),
		typeInfo : Jsonix.Schema.XSD.String.INSTANCE
	} ]
};
