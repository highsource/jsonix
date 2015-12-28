var Jsonix = require('jsonix').Jsonix;
// Declare the registry 
var PO = {};
module.exports.PO = PO;
// Declare types
PO.PurchaseOrderType = new Jsonix.Model.ClassInfo({
	name : "PO.PurchaseOrderType"
});
PO.USAddress = new Jsonix.Model.ClassInfo({
	name : "PO.USAddress"
});
PO.Item = new Jsonix.Model.ClassInfo({
	name : "PO.Item"
});
//
PO.PurchaseOrderType.properties = [ new Jsonix.Model.ElementPropertyInfo({
	name : "shipTo",
	typeInfo : PO.USAddress
}), new Jsonix.Model.ElementPropertyInfo({
	name : "billTo",
	typeInfo : PO.USAddress
}), new Jsonix.Model.ElementPropertyInfo({
	name : "comment",
	typeInfo : Jsonix.Schema.XSD.String.INSTANCE
}), new Jsonix.Model.ElementPropertyInfo({
	name : "item",
	typeInfo : PO.Item,
	collection : true,
	wrapperElementName : new Jsonix.XML.QName("items")
}), new Jsonix.Model.AttributePropertyInfo({
	name : "orderDate",
	typeInfo : Jsonix.Schema.XSD.DateAsDate.INSTANCE
}) ];
//
PO.USAddress.properties = [ new Jsonix.Model.ElementPropertyInfo({
	name : 'name',
	typeInfo : Jsonix.Schema.XSD.String.INSTANCE
}), new Jsonix.Model.ElementPropertyInfo({
	name : 'street',
	typeInfo : Jsonix.Schema.XSD.String.INSTANCE
}), new Jsonix.Model.ElementPropertyInfo({
	name : 'city',
	typeInfo : Jsonix.Schema.XSD.String.INSTANCE
}), new Jsonix.Model.ElementPropertyInfo({
	name : 'state',
	typeInfo : Jsonix.Schema.XSD.String.INSTANCE
}), new Jsonix.Model.ElementPropertyInfo({
	name : 'zip',
	typeInfo : Jsonix.Schema.XSD.Integer.INSTANCE
})
// TODO country

];
//
PO.Item.properties = [ new Jsonix.Model.ElementPropertyInfo({
	name : 'productName',
	typeInfo : Jsonix.Schema.XSD.String.INSTANCE
}), new Jsonix.Model.ElementPropertyInfo({
	name : 'quantity',
	// TODO PositiveInteger
	typeInfo : Jsonix.Schema.XSD.Integer.INSTANCE
}), new Jsonix.Model.ElementPropertyInfo({
	name : 'usPrice',
	// TODO Decimal
	typeInfo : Jsonix.Schema.XSD.Double.INSTANCE,
	elementName : new Jsonix.XML.QName("USPrice")
}), new Jsonix.Model.ElementPropertyInfo({
	name : 'comment',
	typeInfo : Jsonix.Schema.XSD.String.INSTANCE
}), new Jsonix.Model.ElementPropertyInfo({
	name : 'shipDate',
	typeInfo : Jsonix.Schema.XSD.DateAsDate.INSTANCE
}), new Jsonix.Model.AttributePropertyInfo({
	name : 'partNum',
	typeInfo : Jsonix.Schema.XSD.String.INSTANCE
}) ];

PO.elementInfos = [ {
	elementName : new Jsonix.XML.QName('purchaseOrder'),
	typeInfo : PO.PurchaseOrderType
}, {
	elementName : new Jsonix.XML.QName('comment'),
	typeInfo : Jsonix.Schema.XSD.String.INSTANCE
} ];