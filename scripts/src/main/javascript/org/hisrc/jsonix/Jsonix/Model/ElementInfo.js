Jsonix.Model.ElementInfo = Jsonix.Class({
	elementName : null,
	typeInfo : null,
	substitutionHead : null,
	scope : null,
	built : false,
	initialize : function(mapping) {
		Jsonix.Util.Ensure.ensureObject(mapping);
		// TODO elementName may be string
		Jsonix.Util.Ensure.ensureObject(mapping.elementName);
		this.elementName = mapping.elementName;
		Jsonix.Util.Ensure.ensureExists(mapping.typeInfo);
		this.typeInfo = mapping.typeInfo;
		if (Jsonix.Util.Type.exists(mapping.substitutionHead)) {
			this.substitutionHead = mapping.substitutionHead;
		}
		if (Jsonix.Util.Type.exists(mapping.scope)) {
			this.scope = mapping.scope;
		}
	},
	build : function(context, module) {
		// If element info is not yet built
		if (!this.built) {
			this.typeInfo = context.resolveTypeInfo(this.typeInfo, module);
			this.scope = context.resolveTypeInfo(this.scope, module);
			this.built = true;
		}
	},
	CLASS_NAME : 'Jsonix.Model.ElementInfo'
});