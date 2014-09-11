Jsonix.Model.AttributePropertyInfo = Jsonix.Class(Jsonix.Model.SingleTypePropertyInfo, {
	attributeName : null,
	initialize : function(mapping) {
		Jsonix.Util.Ensure.ensureObject(mapping);
		Jsonix.Model.SingleTypePropertyInfo.prototype.initialize.apply(this, [ mapping ]);
		var an = mapping.attributeName||mapping.an||undefined;
		if (Jsonix.Util.Type.isObject(an)) {
			this.attributeName = Jsonix.XML.QName.fromObject(an);
		} else if (Jsonix.Util.Type.isString(an)) {
			this.attributeName = new Jsonix.XML.QName(this.defaultAttributeNamespaceURI, an);
		} else {
			this.attributeName = new Jsonix.XML.QName(this.defaultAttributeNamespaceURI, this.name);
		}
	},
	unmarshal : function(context, input, scope) {
		var attributeCount = input.getAttributeCount();
		var result = null;
		for ( var index = 0; index < attributeCount; index++) {
			var attributeNameKey = input.getAttributeNameKey(index);
			if (this.attributeName.key === attributeNameKey) {
				var attributeValue = input.getAttributeValue(index);
				if (Jsonix.Util.Type.isString(attributeValue)) {
					result = this.unmarshalValue(attributeValue, context, input, scope);
				}
			}
		}
		return result;
	},
	marshal : function(value, context, output, scope) {
		if (Jsonix.Util.Type.exists(value)) {
			output.writeAttribute(this.attributeName, this.print(value, context, output, scope));
		}

	},
	buildStructure : function(context, structure) {
		Jsonix.Util.Ensure.ensureObject(structure);
		Jsonix.Util.Ensure.ensureObject(structure.attributes);
		var key = this.attributeName.key;
		// if (Jsonix.Util.Type.exists(structure.attributes[key])) {
		// // TODO better exception
		// throw new Error("The structure already defines an attribute for the key
		// ["
		// + key + "].");
		// } else
		// {
		structure.attributes[key] = this;
		// }
	},
	CLASS_NAME : 'Jsonix.Model.AttributePropertyInfo'
});
