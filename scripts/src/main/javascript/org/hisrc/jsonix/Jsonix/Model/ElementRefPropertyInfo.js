Jsonix.Model.ElementRefPropertyInfo = Jsonix
		.Class(
				Jsonix.Model.AbstractElementRefsPropertyInfo,
				{
					typeInfo : 'String',
					elementName : null,
					initialize : function(mapping) {
						Jsonix.Util.Ensure.ensureObject(mapping);
						Jsonix.Model.AbstractElementRefsPropertyInfo.prototype.initialize
								.apply(this, [ mapping ]);
						// TODO Ensure correct argument
						var ti = mapping.typeInfo||mapping.ti||'String';
						if (Jsonix.Util.Type.isObject(ti)) {
							this.typeInfo = ti;
						} else {
							Jsonix.Util.Ensure.ensureString(ti);
							this.typeInfo = ti;
						}
						var en = mapping.elementName||mapping.en||undefined;
						if (Jsonix.Util.Type.isObject(en)) {
							this.elementName = Jsonix.XML.QName.fromObject(en);
						} else if (Jsonix.Util.Type.isString(en)) {
							this.elementName = new Jsonix.XML.QName(this.defaultElementNamespaceURI, en);
						} else {
							this.elementName = new Jsonix.XML.QName(this.defaultElementNamespaceURI, this.name);
						}
					},
					getPropertyElementTypeInfo : function(elementName) {
						Jsonix.Util.Ensure.ensureObject(elementName);
						var name = Jsonix.XML.QName.fromObject(elementName);
						logger.info('>1>' + name.key);
						logger.info('>2>' + this.elementName.key);
						logger.info('>3>' + this.wrapperElementName);

						if (name.key === this.elementName.key) {
							return this;
						} else {
							return null;
						}
					},
					doBuild : function(context, module) {
						this.typeInfo = context.resolveTypeInfo(this.typeInfo, module);
					},
					buildStructureElements : function(context, structure) {
						this.buildStructureElementTypeInfos(context, structure,	this);
					},
					CLASS_NAME : 'Jsonix.Model.ElementRefPropertyInfo'
				});
