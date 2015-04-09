Jsonix.Model.ElementsPropertyInfo = Jsonix
		.Class(
				Jsonix.Model.AbstractElementsPropertyInfo, Jsonix.Binding.ElementMarshaller,
				{
					elementTypeInfos : null,
					elementTypeInfosMap : null,
					initialize : function(mapping) {
						Jsonix.Util.Ensure.ensureObject(mapping);
						Jsonix.Model.AbstractElementsPropertyInfo.prototype.initialize
								.apply(this, [ mapping ]);
						var etis = mapping.elementTypeInfos||mapping.etis||[];
						Jsonix.Util.Ensure.ensureArray(etis);
						this.elementTypeInfos = etis;
					},
					getTypeInfoByElementName : function(elementName, context, scope) {
						var elementNameKey = elementName.key;
						return this.elementTypeInfosMap[elementNameKey];
					},
					getOutputElementValue : function (value, context, output, scope) {
						for ( var index = 0; index < this.elementTypeInfos.length; index++) {
							var elementTypeInfo = this.elementTypeInfos[index];
							var typeInfo = elementTypeInfo.typeInfo;
							if (typeInfo.isInstance(value, context, scope)) {
								var elementName = elementTypeInfo.elementName;
								return {name : elementName, value : value, typeInfo : typeInfo};
							}
						}
						// TODO harmonize error handling. See also marshallElement. Error must only be on one place.
						throw new Error("Could not find an element with type info supporting the value ["	+ value + "].");
					},
					doBuild : function(context, module) {
						this.elementTypeInfosMap = {};
						var etiti, etien;
						for ( var index = 0; index < this.elementTypeInfos.length; index++) {
							var elementTypeInfo = this.elementTypeInfos[index];
							Jsonix.Util.Ensure.ensureObject(elementTypeInfo);
							etiti = elementTypeInfo.typeInfo||elementTypeInfo.ti||'String';
							elementTypeInfo.typeInfo = context.resolveTypeInfo(etiti, module);
							etien = elementTypeInfo.elementName||elementTypeInfo.en||undefined;
							elementTypeInfo.elementName = Jsonix.XML.QName.fromObjectOrString(etien, context, this.defaultElementNamespaceURI);
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
