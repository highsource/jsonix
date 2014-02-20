# Jsonix

* Jsonix (JSON interfaces for XML) is a JavaScript library which allows you to convert between XML and JSON structures.
* With Jsonix you can parse XML into JSON (this process is called _unmarshalling_) or serialize JSON in XML form (this is called _marshalling_).
* These conversions are based on declarative XML/JSON mappings which can be written manually or generated from an XML Schema.

Jsonix advantages:

* Strongly structured.
* Type-safe.
* (Optionally) XML Schema-driven.

## Example

Here's a working example for the [purchase order schema](http://www.w3.org/TR/xmlschema-0/#po.xsd).

### Generate mappings

```
java -jar jsonix-full.jar -d mappings -p PO purchaseorder.xsd
```

Generates mappings for the `purchaseorder.xsd` schema in the `mappings\PO.js`; mappings will be placed in the variable `PO`.

### Unmarshalling:

```javascript
// Include or require PO.js so that PO variable is available
// For instance, in node.js:
var PO = require('./mappings/PO').PO;

// First we construct a Jsonix context - a factory for unmarshaller (parser)
// and marshaller (serializer)
var context = new Jsonix.Context([PO]);

// Then we create a unmarshaller
var unmarshaller = context.createUnmarshaller();

// Unmarshal an object from the XML retrieved from the URL
unmarshaller.unmarshalURL('po.xml',
    // This callback function will be provided with the result of the unmarshalling
    function (unmarshalled) {
        console.log(unmarshalled.value.shipTo.name); // Alice Smith
        console.log(unmarshalled.value.items.item[1].productName); // Baby Monitor
    });
```

You can also ``unmarshalString``, ``unmarshalDocument`` and (under node.js) ``unmarshalFile``.
    
### Marshalling

```javascript
// Create a marshaller
var marshaller = context.createMarshaller();

// Marshal a JavaScript Object as XML (DOM Document)
var doc = marshaller.marshalDocument({
    name: {
        localPart: "purchaseOrder"
    },
    value: {
        orderDate: { year: 1999, month: 10, day: 20 },
        shipTo: {
            country: "US",
            name: "Alice Smith",
            street: "123 Maple Street",
            city: "Mill Valley",
            state: "CA",
            zip: 90952
        },
        billTo: { /* ... */ },
        comment: 'Hurry, my lawn is going wild!',
        items: { /* ... */ }
    }
});
```

You can also ``marshalString``.