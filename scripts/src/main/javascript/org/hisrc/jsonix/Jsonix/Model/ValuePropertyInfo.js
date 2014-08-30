Jsonix.Model.ValuePropertyInfo = Jsonix.Class(Jsonix.Model.SingleTypePropertyInfo, {
	initialize : function(options) {
		Jsonix.Util.Ensure.ensureObject(options);
		Jsonix.Model.SingleTypePropertyInfo.prototype.initialize.apply(this, [ options ]);
	},
	unmarshal : function(context, input, scope) {
		var text = input.getElementText();
		if (Jsonix.Util.StringUtils.isNotBlank(text)) {
			return this.unmarshalValue(text, context, input, scope);
		} else {
			return null;
		}
	},
	marshal : function(value, context, output, scope) {
		if (!Jsonix.Util.Type.exists(value)) {
			return;
		}
		output.writeCharacters(this.print(context, scope, value));
	},
	buildStructure : function(context, structure) {
		Jsonix.Util.Ensure.ensureObject(structure);
		// if (Jsonix.Util.Type.exists(structure.value)) {
		// // TODO better exception
		// throw new Error("The structure already defines a value
		// property.");
		// } else
		if (Jsonix.Util.Type.exists(structure.elements)) {
			// TODO better exception
			throw new Error("The structure already defines element mappings, it cannot define a value property.");
		} else {
			structure.value = this;
		}
	},
	CLASS_NAME : 'Jsonix.Model.ValuePropertyInfo'
});
