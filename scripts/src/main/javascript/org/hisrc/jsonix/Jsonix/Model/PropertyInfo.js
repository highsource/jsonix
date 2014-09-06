Jsonix.Model.PropertyInfo = Jsonix
		.Class({
			name : null,
			collection : false,
			defaultElementNamespaceURI : '',
			defaultAttributeNamespaceURI : '',
			built : false,
			initialize : function(mapping) {
				Jsonix.Util.Ensure.ensureObject(mapping);
				var n = mapping.name||mapping.n;
				Jsonix.Util.Ensure.ensureString(n);
				this.name = n;
				var dens = mapping.defaultElementNamespaceURI||mapping.dens;
				if (Jsonix.Util.Type.isString(dens)) {
					this.defaultElementNamespaceURI = dens;
				}
				var dans = mapping.defaultAttributeNamespaceURI||mapping.dans;
				if (Jsonix.Util.Type.isString(dans)) {
					this.defaultAttributeNamespaceURI = dans;
				}
				var col = mapping.collection||mapping.col;
				if (Jsonix.Util.Type.isBoolean(col)) {
					this.collection = col;
				}
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
						Jsonix.Util.Ensure.ensureArray(value,
								'Collection property requires an array value.');
						if (!Jsonix.Util.Type.exists(object[this.name])) {
							object[this.name] = [];
						}
						for ( var index = 0; index < value.length; index++) {
							object[this.name].push(value[index]);
						}

					} else {
						object[this.name] = value;
					}
				}
			},
			CLASS_NAME : 'Jsonix.Model.PropertyInfo'
		});