Jsonix.Model.ElementPropertyInfo = Jsonix.Class(
		Jsonix.Model.AbstractElementsPropertyInfo, {
			typeInfo : 'String',
			elementName : null,
			initialize : function(options) {
				Jsonix.Util.Ensure.ensureObject(options);
				Jsonix.Model.AbstractElementsPropertyInfo.prototype.initialize
						.apply(this, [ options ]);
				// TODO Ensure correct argument
				if (Jsonix.Util.Type.exists(options.typeInfo)) {
					if (Jsonix.Util.Type.isObject(options.typeInfo)) {
						Jsonix.Util.Ensure.ensureObject(options.typeInfo);
						this.typeInfo = options.typeInfo;
					} else {
						Jsonix.Util.Ensure.ensureString(options.typeInfo);
						this.typeInfo = options.typeInfo;
					}
				}
				// TODO Ensure correct argument
				if (Jsonix.Util.Type.isObject(options.elementName)) {
					this.elementName = Jsonix.XML.QName
							.fromObject(options.elementName);
				} else if (Jsonix.Util.Type.isString(options.elementName)) {
					this.elementName = new Jsonix.XML.QName(
							this.defaultElementNamespaceURI,
							options.elementName);
				} else {
					this.elementName = new Jsonix.XML.QName(
							this.defaultElementNamespaceURI, this.name);
				}
			},
			unmarshalElement : function(context, input, callback) {
				return callback(this.typeInfo.unmarshal(context, input));
			},
			marshalElement : function(context, value, output) {
				this.marshalElementTypeInfo(context, value, this.elementName,
						this.typeInfo, output);
			},
			doBuild : function(context, module) {
				this.typeInfo = context.resolveTypeInfo(this.typeInfo, module);
			},
			buildStructureElements : function(context, structure) {
				structure.elements[this.elementName.key] = this;
			},
			CLASS_NAME : 'Jsonix.Model.ElementPropertyInfo'
		});
