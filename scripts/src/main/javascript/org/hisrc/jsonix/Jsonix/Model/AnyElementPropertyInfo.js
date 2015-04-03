Jsonix.Model.AnyElementPropertyInfo = Jsonix.Class(Jsonix.Binding.ElementMarshaller, Jsonix.Binding.ElementUnmarshaller, Jsonix.Model.PropertyInfo, {
	allowDom : true,
	allowTypedObject : true,
	mixed : true,
	initialize : function(mapping) {
		Jsonix.Util.Ensure.ensureObject(mapping);
		Jsonix.Model.PropertyInfo.prototype.initialize.apply(this, [ mapping ]);
		var dom = Jsonix.Util.Type.defaultValue(mapping.allowDom, mapping.dom, true);
		var typed = Jsonix.Util.Type.defaultValue(mapping.allowTypedObject, mapping.typed, true);
		var mx = Jsonix.Util.Type.defaultValue(mapping.mixed, mapping.mx, true);
		this.allowDom = dom;
		this.allowTypedObject = typed;
		this.mixed = mx;
	},
	unmarshal : function(context, input, scope) {
		var et = input.eventType;

		if (et === Jsonix.XML.Input.START_ELEMENT) {
			return this.unmarshalElement(context, input, scope);
		} else if (this.mixed && (et === Jsonix.XML.Input.CHARACTERS || et === Jsonix.XML.Input.CDATA || et === Jsonix.XML.Input.ENTITY_REFERENCE)) {
			var value = input.getText();
			if (this.collection) {
				return [ value ];

			} else {
				return value;
			}
		} else if (this.mixed && (et === Jsonix.XML.Input.SPACE)) {
			// Whitespace
			return null;
		} else if (et === Jsonix.XML.Input.COMMENT || et === Jsonix.XML.Input.PROCESSING_INSTRUCTION) {
			return null;

		} else {
			// TODO better exception
			throw new Error("Illegal state: unexpected event type [" + et + "].");

		}
	},
	unmarshalElement : function(context, input, scope) {
		var name = input.getName();
		var elementValue;
		var typeInfo = this.getElementTypeInfo(name, context, scope);
		if (this.allowTypedObject && Jsonix.Util.Type.exists(typeInfo)) {
			var value = typeInfo.unmarshal(context, input, scope);
			elementValue = this.convertToElementValue({
				name : name,
				value : value
			}, context, input, scope);
		} else if (this.allowDom) {
			elementValue = input.getElement();
		} else {
			// TODO better exception
			throw new Error("Element [" + name.toString() + "] is not known in this context and property does not allow DOM.");
		}
		if (this.collection) {
			return [ elementValue ];
		} else {
			return elementValue;
		}
	},
	marshal : function(value, context, output, scope) {
		if (!Jsonix.Util.Type.exists(value)) {
			return;
		}
		if (!this.collection) {
			this.marshalItem(value, context, output, scope);
		} else {
			Jsonix.Util.Ensure.ensureArray(value);
			for ( var index = 0; index < value.length; index++) {
				this.marshalItem(value[index], context, output, scope);
			}
		}
	},
	marshalItem : function(value, context, output, scope) {
		if (this.mixed && Jsonix.Util.Type.isString(value)) {
			// Mixed
			output.writeCharacters(value);
		} else if (this.allowDom && Jsonix.Util.Type.exists(value.nodeType)) {
			// DOM node
			output.writeNode(value);

		} else {
			if (this.allowTypedObject)
			{
				this.marshalElementNode(value, context, output, scope);
			}
		}
	},
	doBuild : function(context, module)	{
		// Nothing to do
	},
	buildStructure : function(context, structure) {
		Jsonix.Util.Ensure.ensureObject(structure);
		if (Jsonix.Util.Type.exists(structure.value)) {
			// TODO better exception
			throw new Error("The structure already defines a value property.");
		} else if (!Jsonix.Util.Type.exists(structure.elements)) {
			structure.elements = {};
		}

		if ((this.allowDom || this.allowTypedObject)) {
			// if (Jsonix.Util.Type.exists(structure.any)) {
			// // TODO better exception
			// throw new Error("The structure already defines the any
			// property.");
			// } else
			// {
			structure.any = this;
			// }
		}
		if (this.mixed) {
			// if (Jsonix.Util.Type.exists(structure.mixed)) {
			// // TODO better exception
			// throw new Error("The structure already defines the mixed
			// property.");
			// } else
			// {
			structure.mixed = this;
			// }
		}
	},
	CLASS_NAME : 'Jsonix.Model.AnyElementPropertyInfo'
});
Jsonix.Model.AnyElementPropertyInfo.Simplified = Jsonix.Class(Jsonix.Model.AnyElementPropertyInfo, Jsonix.Binding.ElementUnmarshaller.Simplified, {
	CLASS_NAME : 'Jsonix.Model.AnyElementPropertyInfo.Simplified'
});