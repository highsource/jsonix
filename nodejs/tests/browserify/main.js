var Jsonix = require('Jsonix').Jsonix;
var PO = require('./PO').PO;

// Utility function
var setValue = function(id, value) {
	var element = document.getElementById(id);
	element.innerHTML = value;
};

var setValues = function() {

	// // Jsonix usage

	// Create Jsonix context
	var context = new Jsonix.Context([ PO ]);

	// Create unmarshaller
	var unmarshaller = context.createUnmarshaller();

	// Unmarshal the XML file from URL
	unmarshaller.unmarshalURL('po.xml', function(poElement) {

		// That's it, unmarshalling is complete

		// Now we can worked with the unmarshalled object
		var po = poElement.value;

		// Output shipping and billing address

		setValue('shipTo.name', po.shipTo.name);
		setValue('shipTo.street', po.shipTo.street);
		setValue('shipTo.city', po.shipTo.city);
		setValue('shipTo.state', po.shipTo.state);
		setValue('shipTo.country', po.shipTo.country);

		setValue('billTo.name', po.billTo.name);
		setValue('billTo.street', po.billTo.street);
		setValue('billTo.city', po.billTo.city);
		setValue('billTo.state', po.billTo.state);
		setValue('billTo.country', po.billTo.country);

		// Calculate and output the total quantity and price
		var quantity = 0;
		var usPrice = 0;

		for (var index = 0; index < po.items.item.length; index++) {
			var item = po.items.item[index];
			quantity += item.quantity;
			usPrice += item.usPrice;
		}

		setValue('items.quantity', quantity.toFixed(0));
		setValue('items.usPrice', usPrice.toFixed(2));

		// Format and output the order date
		setValue('orderDate',
		// We can use the method of the calendar type here
		Jsonix.Schema.XSD.Calendar.INSTANCE.printDate(po.orderDate));

	});
};
setValues();