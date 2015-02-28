Jsonix.Model.AnyAttributePropertyInfo = Jsonix.Class(Jsonix.Model.PropertyInfo, {
	initialize : function(mapping) {
		Jsonix.Util.Ensure.ensureObject(mapping);
		Jsonix.Model.PropertyInfo.prototype.initialize.apply(this, [ mapping ]);
	},
	unmarshal : function(context, input, scope) {
		var attributeCount = input.getAttributeCount();
		if (attributeCount === 0) {
			return null;
		} else {
			var result = {};
			for ( var index = 0; index < attributeCount; index++) {
				var value = input.getAttributeValue(index);
				if (Jsonix.Util.Type.isString(value)) {
					var propertyName = this.convertFromAttributeName(input.getAttributeName(index), context, input, scope);
					result[propertyName] = value;
				}
			}
			return result;
		}
	},
	marshal : function(value, context, output, scope) {
		if (!Jsonix.Util.Type.isObject(value)) {
			// Nothing to do
			return;
		}
		for ( var propertyName in value) {
			if (value.hasOwnProperty(propertyName)) {
				var propertyValue = value[propertyName];
				if (Jsonix.Util.Type.isString(propertyValue)) {
					var attributeName = this.convertToAttributeName(propertyName, context, output, scope);
					output.writeAttribute(attributeName, propertyValue);
				}
			}
		}
	},
	convertFromAttributeName : function(attributeName, context, input, scope) {
		return attributeName.key;
	},
	convertToAttributeName : function(propertyName, context, output, scope) {
		return Jsonix.XML.QName.fromObjectOrString(propertyName, context);
	},
	doBuild : function(context, module)	{
		// Nothing to do
	},
	buildStructure : function(context, structure) {
		Jsonix.Util.Ensure.ensureObject(structure);
		// if (Jsonix.Util.Type.exists(structure.anyAttribute))
		// {
		// // TODO better exception
		// throw new Error("The structure already defines an any attribute
		// property.");
		// } else
		// {
		structure.anyAttribute = this;
		// }
	},
	CLASS_NAME : 'Jsonix.Model.AnyAttributePropertyInfo'
});
Jsonix.Model.AnyAttributePropertyInfo.Simplified = Jsonix.Class(Jsonix.Model.AnyAttributePropertyInfo, {
	convertFromAttributeName : function(attributeName, context, input, scope)
	{
		return attributeName.toCanonicalString(context);
	}
});
