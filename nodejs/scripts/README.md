# Jsonix

* Jsonix (JSON interfaces for XML) is a JavaScript library which allows you to convert between XML and JSON structures.
* With Jsonix you can parse XML into JSON (this process is called _unmarshalling_) or serialize JSON in XML form (this is called _marshalling_).
* These conversions are based on declarative XML/JSON mappings which can be written manually or generated from an XML Schema.

Jsonix advantages:

* Strongly structured
* Type-safe
* Bidirectional
* (Optionally) XML Schema-driven

See also the other [Jsonix features](#jsonix-features).

## Example

Here's a working example for the [purchase order schema](http://www.w3.org/TR/xmlschema-0/#po.xsd) (try it [online in JSFiddle](http://jsfiddle.net/lexi/LP3DC/)).

### Generate mappings

```
java -jar node_modules/jsonix/lib/jsonix-schema-compiler-full.jar
  -d mappings -p PO purchaseorder.xsd
```

Generates mappings for the `purchaseorder.xsd` schema in the `mappings\PO.js`; mappings will be placed in the variable `PO`.

### Parse XML into JS

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
    // This callback function will be provided
    // with the result of the unmarshalling
    function (unmarshalled) {
        // Alice Smith
        console.log(unmarshalled.value.shipTo.name);
        // Baby Monitor
        console.log(unmarshalled.value.items.item[1].productName);
    });
```

You can also `unmarshalString`, `unmarshalDocument` and (under node.js) `unmarshalFile`.
    
### Serialize JS as XML

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

You can also `marshalString`.

## Jsonix Features

* Runs in almost any modern browser
* Runs in [Node.js](http://nodejs.org/)
* Runs with CommonJS modules, AMD modules as well as vanilla (globals, without any module loader)
* Bidirectional (XML -> JS as well as JS -> XML)
* Implements *marshalling* (serializing the JavaScript object into XML)
  * Supports string data and DOM nodes as result
* Implements *unmarshalling* (parsing a JavaScript object from XML)	
  * Supports string data, DOM nodes, URLs or files (with Node.js) as source
* Driven by declarative XML/JS mappings which control how JavaScript object is converted into XML or vice versa
* Mappings can be automatically generated based on the XML Schema
* Strongly-structured - XML/object mappings describe structures of JavaScript objects
* Strongly-typed - Conversion between string content on XML side and values on the JavaScript side is controlled by declared property types
* Provides extensible type system
  * Supports most XML Schema simple types (inlcuding QNames)
  * Supports enumerations, list and union simple types
  * Allows adding own simple types
  * Supports complex types consisting of several properties
  * Supports deriving complex types by extension
* Provides advanced property system
  * Value, attribute, element, element reference properties for string processing of XML content
  * Any attribute, any element properties for "lax" processing for XML content

## Documentation

* [Jsonix GitHub Project](https://github.com/highsource/jsonix)
* [Jsonix Wiki](https://github.com/highsource/jsonix/wiki)