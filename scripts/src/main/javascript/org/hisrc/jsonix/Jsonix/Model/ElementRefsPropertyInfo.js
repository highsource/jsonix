Jsonix.Model.ElementRefsPropertyInfo = Jsonix
		.Class(
				Jsonix.Model.AbstractElementRefsPropertyInfo,
				{
					elementTypeInfos : null,
					elementTypeInfosMap : null,
					initialize : function(mapping) {
						Jsonix.Util.Ensure.ensureObject(mapping);
						Jsonix.Model.AbstractElementRefsPropertyInfo.prototype.initialize
								.apply(this, [ mapping ]);
						// TODO Ensure correct arguments
						var etis = mapping.elementTypeInfos||mapping.etis;
						Jsonix.Util.Ensure.ensureArray(etis);
						this.elementTypeInfos = etis;
					},
					getPropertyElementTypeInfo : function(elementName) {
						Jsonix.Util.Ensure.ensureObject(elementName);
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
						var etiti, etien;
						for ( var index = 0; index < this.elementTypeInfos.length; index++) {
							var elementTypeInfo = this.elementTypeInfos[index];
							Jsonix.Util.Ensure.ensureObject(elementTypeInfo);
							etiti = elementTypeInfo.typeInfo || elementTypeInfo.ti || 'String';
							elementTypeInfo.typeInfo = context.resolveTypeInfo(etiti, module);
							etien = elementTypeInfo.elementName || elementTypeInfo.en;
							if (Jsonix.Util.Type.isObject(etien)) {
								elementTypeInfo.elementName = Jsonix.XML.QName.fromObject(etien);
							} else {
								Jsonix.Util.Ensure
										.ensureString(etien);
								elementTypeInfo.elementName = new Jsonix.XML.QName(
										this.defaultElementNamespaceURI,
										etien);
							}
							this.elementTypeInfosMap[elementTypeInfo.elementName.key] = elementTypeInfo.typeInfo;
						}
					},
					buildStructureElements : function(context, structure) {
						for ( var index = 0; index < this.elementTypeInfos.length; index++) {
							var elementTypeInfo = this.elementTypeInfos[index];
							this.buildStructureElementTypeInfos(context, structure, elementTypeInfo);
						}
					},
					CLASS_NAME : 'Jsonix.Model.ElementRefsPropertyInfo'
				});
