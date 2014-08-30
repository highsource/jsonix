Jsonix.Schema.XSD.AnyType = Jsonix.Class(Jsonix.Model.TypeInfo, {
	name : 'AnyType',
	typeName : Jsonix.Schema.XSD.qname('anyType'),
	initialize : function() {
		Jsonix.Model.TypeInfo.prototype.initialize.apply(this, []);
	},
	unmarshal : function(context, input, scope) {
		var result = [];
		// Process the attributes
		var attributeCount = input.getAttributeCount();
		if (attributeCount > 0) {
			for ( var index = 0; index < attributeCount; index++) {
				var attributeNameKey = input.getAttributeNameKey(index);
				var attributeValue = input.getAttributeValue(index);
				if (Jsonix.Util.Type.isString(attributeValue)) {
					var attributeItem = {};
					attributeItem['@' + attributeNameKey] = attributeValue;
					result.push(attributeItem);
				}
			}
		}
		var et = input.next();
		while (et !== Jsonix.XML.Input.END_ELEMENT)
		{
			if (et === Jsonix.XML.Input.START_ELEMENT)
			{
				// Unmarshal element
				result.push(this.unmarshalElement(context, input, scope));
			}
			else if (et === Jsonix.XML.Input.CHARACTERS || et === Jsonix.XML.Input.CDATA || et === Jsonix.XML.Input.ENTITY_REFERENCE)
			{
				result.push(input.getText());
				
			}
			else if (et === Jsonix.XML.Input.SPACE)
			{
				// Skip space
			}
			else if (et === Jsonix.XML.Input.COMMENT || et === Jsonix.XML.Input.PROCESSING_INSTRUCTION)
			{
				// Skip comments and processing instructions
			} else {
				// TODO better exception
				throw new Error("Illegal state: unexpected event type [" + et + "].");
			}
			et = input.next();
		}
		return result;
	},
	unmarshalElement : function(context, input, scope) {
		var name = input.getName();
		var value;
		if (Jsonix.Util.Type.exists(context.getElementInfo(name, scope))) {
			// TODO optimize
			var elementDeclaration = context.getElementInfo(name, scope);
			var typeInfo = elementDeclaration.typeInfo;
			var adapter = Jsonix.Model.Adapter.getAdapter(elementDeclaration);
			value = {
				name : name,
				value : adapter.unmarshal(typeInfo, context, input, scope)
			};
		} else {
			value = input.getElement();
		}
		return value;
	},
	marshal : function(value, context, output, scope) {
		console.log("context");
		console.log(context);
		console.log("value");
		console.log(value);
		console.log("output");
		console.log(output);
		throw new Error("Abstract method [marshal].");
	},
	isInstance : function(value) {
		throw new Error('Abstract method [isInstance].');
	},
	CLASS_NAME : 'Jsonix.Schema.XSD.AnyType'
});
Jsonix.Schema.XSD.AnyType.INSTANCE = new Jsonix.Schema.XSD.AnyType();