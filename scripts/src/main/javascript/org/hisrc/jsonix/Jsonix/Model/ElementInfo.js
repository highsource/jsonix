Jsonix.Model.ElementInfo = Jsonix.Class({
	elementName : null,
	typeInfo : null,
	substitutionHead : null,
	scope : null,
	built : false,
	initialize : function(mapping) {
		Jsonix.Util.Ensure.ensureObject(mapping);
		
		var dens = mapping.defaultElementNamespaceURI||mapping.dens||'';
		this.defaultElementNamespaceURI = dens;
		
		var en = mapping.elementName || mapping.en||undefined;
		if (Jsonix.Util.Type.isObject(en)) {
			this.elementName = Jsonix.XML.QName.fromObject(en);
		} else {
			Jsonix.Util.Ensure.ensureString(en);
			this.elementName = new Jsonix.XML.QName(this.defaultElementNamespaceURI, en);
		}
		
		var ti = mapping.typeInfo||mapping.ti||'String';
		this.typeInfo = ti;
		
		var sh = mapping.substitutionHead||mapping.sh||null;
		this.substitutionHead = sh;
		
		var sc = mapping.scope||mapping.sc||null;
		this.scope = sc;
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