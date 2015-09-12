var fs = require('fs');
var Ajv = require('ajv');
var Jsonix = require('jsonix').Jsonix;
var PO = require('../mappings/PO').PO;

module.exports = {
	"MinMaxOccurs": function(test) {

		// Create Jsonix context
		var context = new Jsonix.Context([ PO ]);

		var itemsClassInfo = context.getTypeInfoByName("PO.Items");
		var itemPropertyInfo = itemsClassInfo.getPropertyInfoByName("item");
		test.equal(false, itemPropertyInfo.required);
		test.equal(0, itemPropertyInfo.minOccurs);
		test.equal(100, itemPropertyInfo.maxOccurs);
		test.done();
        },
	"UnmarshalFile": function(test) {

		// Create Jsonix context
		var context = new Jsonix.Context([ PO ]);
		
		// Create unmarshaller
		var unmarshaller = context.createUnmarshaller();
		
		// Unmarshal the XML file
		unmarshaller.unmarshalFile( 'tests/po.xml',
			function(poElement) {
				console.log(JSON.stringify(poElement, null, 4));

				var po = poElement.value;

				
				test.equal('Alice Smith', po.shipTo.name);
				test.equal('123 Maple Street', po.shipTo.street);
				test.equal('Mill Valley', po.shipTo.city);
				test.equal('CA', po.shipTo.state);
				test.equal('US', po.shipTo.country);

				test.equal('Robert Smith', po.billTo.name);
				test.equal('8 Oak Avenue', po.billTo.street);
				test.equal('Old Town', po.billTo.city);
				test.equal('PA', po.billTo.state);
				test.equal('US', po.billTo.country);
				test.done();
		});
        },
	"ValidateJson": function (test) {
		// Load JSON Schemas
		var XMLSchemaJsonSchema = JSON.parse(fs.readFileSync('./node_modules/jsonix/jsonschemas/w3c/2001/XMLSchema.jsonschema').toString());
		var JsonixJsonSchema = JSON.parse(fs.readFileSync('./node_modules/jsonix/jsonschemas/Jsonix/Jsonix.jsonschema').toString());
		var POJsonSchema = JSON.parse(fs.readFileSync('./mappings/PO.jsonschema').toString());

		var ajv = new Ajv();
		ajv.addSchema(XMLSchemaJsonSchema, 'http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema');
		ajv.addSchema(JsonixJsonSchema, 'http://www.jsonix.org/jsonschemas/jsonix/Jsonix.jsonschema');
		var validate = ajv.compile(POJsonSchema);

		var po = JSON.parse(fs.readFileSync("tests/po.json").toString());

		console.log('Validating.');
		var valid = validate(po);
		if (!valid) {
			console.log('Validation failed.');
			console.log('Validation errors:');
			console.log(validate.errors);
		}
		test.ok(valid, 'Validation failed.');
		var context = new Jsonix.Context([ PO ]);
		var marshaller = context.createMarshaller();
		var marshalled = marshaller.marshalString(po);
		console.log('Marshalled XML:');
		console.log(marshalled);		
		test.done();
	}
};
