Jsonix.Model.ElementRefPropertyInfo = Jsonix
		.Class(
				Jsonix.Model.AbstractElementRefsPropertyInfo,
				{
					typeInfo : 'String',
					elementName : null,
					initialize : function(options) {
						Jsonix.Util.Ensure.ensureObject(options);
						Jsonix.Model.AbstractElementRefsPropertyInfo.prototype.initialize
								.apply(this, [ options ]);
						// TODO Ensure correct argument
						if (Jsonix.Util.Type.exists(options.typeInfo)) {
							if (Jsonix.Util.Type.isObject(options.typeInfo)) {
								Jsonix.Util.Ensure
										.ensureObject(options.typeInfo);
								this.typeInfo = options.typeInfo;
							} else {
								Jsonix.Util.Ensure
										.ensureString(options.typeInfo);
								this.typeInfo = options.typeInfo;
							}
						}
						// TODO Ensure correct argument
						if (Jsonix.Util.Type.isObject(options.elementName)) {
							this.elementName = Jsonix.XML.QName
									.fromObject(options.elementName);
						} else if (Jsonix.Util.Type
								.isString(options.elementName)) {
							this.elementName = new Jsonix.XML.QName(
									this.defaultElementNamespaceURI,
									options.elementName);
						} else {
							this.elementName = new Jsonix.XML.QName(
									this.defaultElementNamespaceURI, this.name);
						}
					},
					getPropertyElementTypeInfo : function(elementName) {
						Jsonix.Util.Ensure.ensureObject(elementName);
						Jsonix.Util.Ensure.ensureString(elementName.localPart);
						var name = Jsonix.XML.QName.fromObject(elementName);

						if (name.key === this.elementName.key) {
							return this;
						} else {
							return null;
						}
					},
					doBuild : function(context, module) {
						this.typeInfo = context.resolveTypeInfo(this.typeInfo,
								module);
					},
					buildStructureElements : function(context, structure) {
						this.buildStructureElementTypeInfos(context, structure,
								this);
					},
					CLASS_NAME : 'Jsonix.Model.ElementRefPropertyInfo'
				});
