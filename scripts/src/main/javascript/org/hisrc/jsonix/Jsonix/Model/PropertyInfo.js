Jsonix.Model.PropertyInfo = Jsonix.Class({
	name : null,
	collection : false,
	targetNamespace : '',
	defaultElementNamespaceURI : '',
	defaultAttributeNamespaceURI : '',
	built : false,
	initialize : function(mapping) {
		Jsonix.Util.Ensure.ensureObject(mapping);
		var n = mapping.name || mapping.n || undefined;
		Jsonix.Util.Ensure.ensureString(n);
		this.name = n;
		var dens = mapping.defaultElementNamespaceURI || mapping.dens || mapping.targetNamespace || mapping.tns || '';
		this.defaultElementNamespaceURI = dens;
		var tns = mapping.targetNamespace || mapping.tns || mapping.defaultElementNamespaceURI || mapping.dens || this.defaultElementNamespaceURI;
		this.targetNamespace = tns;
		var dans = mapping.defaultAttributeNamespaceURI || mapping.dans || '';
		this.defaultAttributeNamespaceURI = dans;
		var col = mapping.collection || mapping.col || false;
		this.collection = col;
	},
	build : function(context, module) {
		if (!this.built) {
			this.doBuild(context, module);
			this.built = true;
		}
	},
	doBuild : function(context, module) {
		throw new Error("Abstract method [doBuild].");
	},
	buildStructure : function(context, structure) {
		throw new Error("Abstract method [buildStructure].");
	},
	setProperty : function(object, value) {
		if (Jsonix.Util.Type.exists(value)) {
			if (this.collection) {
				Jsonix.Util.Ensure.ensureArray(value, 'Collection property requires an array value.');
				if (!Jsonix.Util.Type.exists(object[this.name])) {
					object[this.name] = [];
				}
				for (var index = 0; index < value.length; index++) {
					object[this.name].push(value[index]);
				}

			} else {
				object[this.name] = value;
			}
		}
	},
	CLASS_NAME : 'Jsonix.Model.PropertyInfo'
});