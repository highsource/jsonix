/*
 * Jsonix is a JavaScript library which allows you to convert between XML
 * and JavaScript object structures.
 *
 * Copyright (c) 2010, Aleksei Valikov, Highsource.org
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Aleksei Valikov nor the
 *       names of contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ALEKSEI VALIKOV BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

// Declare the registry 
PO = {};
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
	typeInfo : Jsonix.Schema.XSD.Date.INSTANCE
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
	typeInfo : Jsonix.Schema.XSD.Date.INSTANCE
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