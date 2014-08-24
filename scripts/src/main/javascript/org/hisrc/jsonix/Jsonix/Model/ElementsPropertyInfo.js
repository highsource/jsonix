Jsonix.Model.ElementsPropertyInfo = Jsonix
		.Class(
				Jsonix.Model.AbstractElementsPropertyInfo,
				{
					elementTypeInfos : null,
					elementTypeInfosMap : null,
					initialize : function(options) {
						Jsonix.Util.Ensure.ensureObject(options);
						Jsonix.Model.AbstractElementsPropertyInfo.prototype.initialize
								.apply(this, [ options ]);
						// TODO Ensure correct arguments
						Jsonix.Util.Ensure
								.ensureArray(options.elementTypeInfos);
						this.elementTypeInfos = options.elementTypeInfos;
					},
					unmarshalElement : function(context, input, callback) {
						// TODO make sure it's the right event type
						var elementNameKey = input.getNameKey();
						var typeInfo = this.elementTypeInfosMap[elementNameKey];
						if (Jsonix.Util.Type.exists(typeInfo)) {
							return callback(typeInfo.unmarshal(context, input));
						}
						// TODO better exception
						throw new Error("Element [" + elementNameKey + "] is not known in this context");
					},
					marshalElement : function(context, value, output) {
						for ( var index = 0; index < this.elementTypeInfos.length; index++) {
							var elementTypeInfo = this.elementTypeInfos[index];
							var typeInfo = elementTypeInfo.typeInfo;
							if (typeInfo.isInstance(value)) {
								var elementName = elementTypeInfo.elementName;
								this.marshalElementTypeInfo(context, value,
										elementName, typeInfo, output);
								return;
							}
						}
						throw new Error("Could not find an element with type info supporting the value ["	+ value + "].");
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
							structure.elements[elementTypeInfo.elementName.key] = this;
						}
					},
					CLASS_NAME : 'Jsonix.Model.ElementsPropertyInfo'
				});
