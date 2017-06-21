Jsonix.Model.ValuePropertyInfo = Jsonix.Class(Jsonix.Model.SingleTypePropertyInfo, {
	initialize : function(mapping) {
		Jsonix.Util.Ensure.ensureObject(mapping);
		Jsonix.Model.SingleTypePropertyInfo.prototype.initialize.apply(this, [ mapping ]);

		var cdata = mapping.asCDATA || mapping.cdata || false;
		this.asCDATA = cdata;
	},
	unmarshal : function(context, input, scope) {
		var text = input.getElementText();
		return this.unmarshalValue(text, context, input, scope);
	},
	marshal : function(value, context, output, scope) {
		if (!Jsonix.Util.Type.exists(value)) {
			return;
		}

		if (this.asCDATA) {
			output.writeCdata(this.print(value, context, output, scope));
		} else {
			output.writeCharacters(this.print(value, context, output, scope));
		}
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
