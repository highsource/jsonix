Jsonix.Model.AttributePropertyInfo = Jsonix.Class(Jsonix.Model.SingleTypePropertyInfo, {
	attributeName : null,
	initialize : function(options) {
		Jsonix.Util.Ensure.ensureObject(options);
		Jsonix.Model.SingleTypePropertyInfo.prototype.initialize.apply(this, [ options ]);
		// TODO Ensure correct argument
		if (Jsonix.Util.Type.isObject(options.attributeName)) {
			Jsonix.Util.Ensure.ensureString(options.attributeName.localPart, 'Attribute name must contain a string property [localPart].');
			this.attributeName = Jsonix.XML.QName.fromObject(options.attributeName);
		} else if (Jsonix.Util.Type.isString(options.attributeName)) {
			this.attributeName = new Jsonix.XML.QName(this.defaultAttributeNamespaceURI, options.attributeName);
		} else {
			this.attributeName = new Jsonix.XML.QName(this.defaultAttributeNamespaceURI, this.name);
		}
	},
	unmarshal : function(context, scope, input) {
		var attributeCount = input.getAttributeCount();
		var result = null;
		for ( var index = 0; index < attributeCount; index++) {
			var attributeNameKey = input.getAttributeNameKey(index);
			if (this.attributeName.key === attributeNameKey) {
				var attributeValue = input.getAttributeValue(index);
				if (Jsonix.Util.Type.isString(attributeValue)) {
					result = this.unmarshalValue(context, scope, input, attributeValue);
				}
			}
		}
		return result;
	},
	marshal : function(context, scope, value, output) {
		if (Jsonix.Util.Type.exists(value)) {
			output.writeAttribute(this.attributeName, this.print(context, scope, value));
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
