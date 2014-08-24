Jsonix.Model.ElementRefsPropertyInfo = Jsonix
		.Class(
				Jsonix.Model.AbstractElementRefsPropertyInfo,
				{
					elementTypeInfos : null,
					elementTypeInfosMap : null,
					initialize : function(options) {
						Jsonix.Util.Ensure.ensureObject(options);
						Jsonix.Model.AbstractElementRefsPropertyInfo.prototype.initialize
								.apply(this, [ options ]);
						// TODO Ensure correct arguments
						Jsonix.Util.Ensure
								.ensureArray(options.elementTypeInfos);
						this.elementTypeInfos = options.elementTypeInfos;
					},
					getPropertyElementTypeInfo : function(elementName) {
						Jsonix.Util.Ensure.ensureObject(elementName);
						Jsonix.Util.Ensure.ensureString(elementName.localPart);
						var name = Jsonix.XML.QName.fromObject(elementName);

						var typeInfo = this.elementTypeInfosMap[name.key];
						if (Jsonix.Util.Type.exists(typeInfo)) {
							return {
								elementName : name,
								typeInfo : typeInfo
							};
						} else {
							return null;
						}
					},
					doBuild : function(context, module) {
						this.elementTypeInfosMap = {};
						for ( var index = 0; index < this.elementTypeInfos.length; index++) {
							var elementTypeInfo = this.elementTypeInfos[index];
							elementTypeInfo.typeInfo = context.resolveTypeInfo(
									elementTypeInfo.typeInfo, module);
							Jsonix.Util.Ensure.ensureObject(elementTypeInfo);
							if (Jsonix.Util.Type
									.isObject(elementTypeInfo.elementName)) {
								Jsonix.Util.Ensure
										.ensureString(
												elementTypeInfo.elementName.localPart,
												'Element name must contain a string property [localPart].');
								elementTypeInfo.elementName = Jsonix.XML.QName
										.fromObject(elementTypeInfo.elementName);
							} else {
								Jsonix.Util.Ensure
										.ensureString(elementTypeInfo.elementName);
								elementTypeInfo.elementName = new Jsonix.XML.QName(
										this.defaultElementNamespaceURI,
										elementTypeInfo.elementName);
							}
							this.elementTypeInfosMap[elementTypeInfo.elementName.key] = elementTypeInfo.typeInfo;
						}
					},
					buildStructureElements : function(context, structure) {
						for ( var index = 0; index < this.elementTypeInfos.length; index++) {
							var elementTypeInfo = this.elementTypeInfos[index];
							this.buildStructureElementTypeInfos(context,
									structure, elementTypeInfo);
						}
					},
					CLASS_NAME : 'Jsonix.Model.ElementRefsPropertyInfo'
				});
