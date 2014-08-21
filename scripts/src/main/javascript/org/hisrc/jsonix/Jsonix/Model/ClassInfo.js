/*
 * Jsonix is a JavaScript library which allows you to convert between XML
 * and JavaScript object structures.
 *
 * Copyright (c) 2010 - 2014, Alexey Valikov, Highsource.org
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Alexey Valikov nor the
 *       names of contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ALEXEY VALIKOV BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

Jsonix.Model.ClassInfo = Jsonix
		.Class(Jsonix.Model.TypeInfo, {
			name : null,
			baseTypeInfo : null,
			typeInfo : null,
			properties : null,
			structure : null,
			defaultElementNamespaceURI : '',
			defaultAttributeNamespaceURI : '',
			built : false,
			initialize : function(options) {
				Jsonix.Model.TypeInfo.prototype.initialize.apply(this, []);
				Jsonix.Util.Ensure.ensureObject(options);
				Jsonix.Util.Ensure.ensureString(options.name);
				this.name = options.name;
				if (Jsonix.Util.Type
						.isString(options.defaultElementNamespaceURI)) {
					this.defaultElementNamespaceURI = options.defaultElementNamespaceURI;
				}
				if (Jsonix.Util.Type
						.isString(options.defaultAttributeNamespaceURI)) {
					this.defaultAttributeNamespaceURI = options.defaultAttributeNamespaceURI;
				}
				if (Jsonix.Util.Type.exists(options.baseTypeInfo)) {
					this.baseTypeInfo = options.baseTypeInfo;
				}
				if (Jsonix.Util.Type.isFunction(options.typeInfo)) {
					this.typeInfo = options.typeInfo;
				}
				this.properties = [];
				if (Jsonix.Util.Type.exists(options.propertyInfos)) {
					Jsonix.Util.Ensure.ensureArray(options.propertyInfos);
					for ( var index = 0; index < options.propertyInfos.length; index++) {
						this.p(options.propertyInfos[index]);
					}
				}
			},
			// Obsolete
			destroy : function() {
			},
			build : function(context, module) {
				if (!this.built) {
					this.baseTypeInfo = context
						.resolveTypeInfo(this.baseTypeInfo, module);
					if (Jsonix.Util.Type.exists(this.baseTypeInfo)) {
						this.baseTypeInfo.build(context, module);
					}

					// Build properties in this context
					for ( var index = 0; index < this.properties.length; index++) {
						var propertyInfo = this.properties[index];
						propertyInfo.build(context, module);
					}

					// Build the structure
					var structure = {
						elements : null,
						attributes : {},
						anyAttribute : null,
						value : null,
						any : null
					};
					this.buildStructure(context, structure);
					this.structure = structure;
				}
			},
			buildStructure : function(context, structure) {
				if (Jsonix.Util.Type.exists(this.baseTypeInfo)) {
					this.baseTypeInfo.buildStructure(context, structure);
				}
				for ( var index = 0; index < this.properties.length; index++) {
					var propertyInfo = this.properties[index];
					propertyInfo.buildStructure(context, structure);
				}
			},
			unmarshal : function(context, input) {
				this.build(context);
				var result;
				if (this.typeInfo) {
					result = new this.typeInfo();
				} else {
					result = {
						TYPE_NAME: this.name
					};
				}

				if (input.eventType !== 1) {
					throw new Error("Parser must be on START_ELEMENT to read a class info.");
				}

				// Read attributes
				if (Jsonix.Util.Type.exists(this.structure.attributes)) {
					var attributeCount = input.getAttributeCount();
					if (attributeCount !== 0) {
						for ( var index = 0; index < attributeCount; index++) {
							var attributeNameKey = input
									.getAttributeNameKey(index);
							if (Jsonix.Util.Type
									.exists(this.structure.attributes[attributeNameKey])) {
								var attributeValue = input
										.getAttributeValue(index);
								if (Jsonix.Util.Type.isString(attributeValue)) {
									var attributePropertyInfo = this.structure.attributes[attributeNameKey];
									this.unmarshalPropertyValue(context, input,
											attributePropertyInfo, result,
											attributeValue);
								}
							}
						}
					}
				}
				// Read any attribute
				if (Jsonix.Util.Type.exists(this.structure.anyAttribute)) {
					var propertyInfo = this.structure.anyAttribute;
					this
							.unmarshalProperty(context, input, propertyInfo,
									result);
				}
				// Read elements
				if (Jsonix.Util.Type.exists(this.structure.elements)) {

					var et = input.next();
					while (et !== Jsonix.XML.Input.END_ELEMENT) {
						if (et === Jsonix.XML.Input.START_ELEMENT) {
							// New sub-element starts
							var elementNameKey = input.getNameKey();
							if (Jsonix.Util.Type
									.exists(this.structure.elements[elementNameKey])) {
								var elementPropertyInfo = this.structure.elements[elementNameKey];
								this.unmarshalProperty(context, input,
										elementPropertyInfo, result);
							} else if (Jsonix.Util.Type
									.exists(this.structure.any)) {
								// TODO Refactor

								var anyPropertyInfo = this.structure.any;
								this.unmarshalProperty(context, input,
										anyPropertyInfo, result);
							} else {
								// TODO report a validation error that element
								// is not expected
								throw new Error('Unexpected element [' + elementNameKey + '].');
							}
						} else if ((et === Jsonix.XML.Input.CHARACTERS || et === Jsonix.XML.Input.CDATA || et === Jsonix.XML.Input.ENTITY_REFERENCE) && Jsonix.Util.Type.exists(this.structure.mixed)) {
							// Characters and structure has a mixed property
							var mixedPropertyInfo = this.structure.mixed;
							this.unmarshalProperty(context, input,
									mixedPropertyInfo, result);
						} else if (et === Jsonix.XML.Input.SPACE || et === Jsonix.XML.Input.COMMENT	|| et === Jsonix.XML.Input.PROCESSING_INSTRUCTION) {
							// Ignore
						} else {
							throw new Error("Illegal state: unexpected event type [" + et	+ "].");
						}
						et = input.next();
					}
				} else if (Jsonix.Util.Type.exists(this.structure.value)) {
					var valuePropertyInfo = this.structure.value;
					this.unmarshalProperty(context, input, valuePropertyInfo,
							result);
				} else {
					// Just skip everything
					input.nextTag();
				}
				if (input.eventType !== 2) {
					throw new Error("Illegal state: must be END_ELEMENT.");
				}
				return result;
			},
			unmarshalProperty : function(context, input, propertyInfo, result) {
				var propertyValue = propertyInfo
						.unmarshal(context, this, input);
				propertyInfo.setProperty(result, propertyValue);
			},
			unmarshalPropertyValue : function(context, input, propertyInfo,
					result, value) {
				var propertyValue = propertyInfo.unmarshalValue(context, this,
						input, value);
				propertyInfo.setProperty(result, propertyValue);
			},
			marshal : function(context, value, output) {
				// TODO This must be reworked
				if (Jsonix.Util.Type.exists(this.baseTypeInfo)) {
					this.baseTypeInfo.marshal(context, value, output);
				}
				for ( var index = 0; index < this.properties.length; index++) {
					var propertyInfo = this.properties[index];
					var propertyValue = value[propertyInfo.name];
					if (Jsonix.Util.Type.exists(propertyValue)) {
						propertyInfo.marshal(context, this, propertyValue,
								output);
					}
				}
			},
			isInstance : function(value) {
				return Jsonix.Util.Type.isObject(value)	&& Jsonix.Util.Type.isString(value.TYPE_NAME) && value.TYPE_NAME === this.name;
			},

			// Obsolete, left for backwards compatibility
			b : function(baseTypeInfo) {
				Jsonix.Util.Ensure.ensureObject(baseTypeInfo);
				this.baseTypeInfo = baseTypeInfo;
				return this;
			},
			// Obsolete, left for backwards compatibility
			ps : function() {
				return this;
			},
			p : function(property) {
				Jsonix.Util.Ensure.ensureObject(property);
				// If property is an instance of the property class
				if (property instanceof Jsonix.Model.PropertyInfo) {
					this.addProperty(property);
				}
				// Else create it via generic mapping configuration
				else {
					// Ensure property info type is provided
					Jsonix.Util.Ensure.ensureString(property.type);
					var type = property.type;
					// Locate the creator function
					if (Jsonix.Util.Type
							.isFunction(this.propertyInfoCreators[type])) {
						var propertyInfoCreator = this.propertyInfoCreators[type];
						// Call the creator function
						propertyInfoCreator.call(this, property);
					} else {
						throw new Error("Unknown property info type [" + type + "].");
					}
				}
			},
			aa : function(options) {
				this.addDefaultNamespaces(options);
				return this
						.addProperty(new Jsonix.Model.AnyAttributePropertyInfo(
								options));
			},
			ae : function(options) {
				this.addDefaultNamespaces(options);
				return this
						.addProperty(new Jsonix.Model.AnyElementPropertyInfo(
								options));
			},
			a : function(options) {
				this.addDefaultNamespaces(options);
				return this.addProperty(new Jsonix.Model.AttributePropertyInfo(
						options));
			},
			em : function(options) {
				this.addDefaultNamespaces(options);
				return this
						.addProperty(new Jsonix.Model.ElementMapPropertyInfo(
								options));
			},
			e : function(options) {
				this.addDefaultNamespaces(options);
				return this.addProperty(new Jsonix.Model.ElementPropertyInfo(
						options));
			},
			es : function(options) {
				this.addDefaultNamespaces(options);
				return this.addProperty(new Jsonix.Model.ElementsPropertyInfo(
						options));
			},
			er : function(options) {
				this.addDefaultNamespaces(options);
				return this
						.addProperty(new Jsonix.Model.ElementRefPropertyInfo(
								options));
			},
			ers : function(options) {
				this.addDefaultNamespaces(options);
				return this
						.addProperty(new Jsonix.Model.ElementRefsPropertyInfo(
								options));
			},
			v : function(options) {
				this.addDefaultNamespaces(options);
				return this.addProperty(new Jsonix.Model.ValuePropertyInfo(
						options));
			},
			addDefaultNamespaces : function(options) {
				if (Jsonix.Util.Type.isObject(options)) {
					if (!Jsonix.Util.Type
							.isString(options.defaultElementNamespaceURI)) {
						options.defaultElementNamespaceURI = this.defaultElementNamespaceURI;
					}
					if (!Jsonix.Util.Type
							.isString(options.defaultAttributeNamespaceURI)) {
						options.defaultAttributeNamespaceURI = this.defaultAttributeNamespaceURI;
					}
				}
			},
			addProperty : function(property) {
				this.properties.push(property);
				return this;
			},
			CLASS_NAME : 'Jsonix.Model.ClassInfo'
		});
Jsonix.Model.ClassInfo.prototype.propertyInfoCreators = {
	"anyAttribute" : Jsonix.Model.ClassInfo.prototype.aa,
	"anyElement" : Jsonix.Model.ClassInfo.prototype.ae,
	"attribute" : Jsonix.Model.ClassInfo.prototype.a,
	"elementMap" : Jsonix.Model.ClassInfo.prototype.em,
	"element" : Jsonix.Model.ClassInfo.prototype.e,
	"elements" : Jsonix.Model.ClassInfo.prototype.es,
	"elementRef" : Jsonix.Model.ClassInfo.prototype.er,
	"elementRefs" : Jsonix.Model.ClassInfo.prototype.ers,
	"value" : Jsonix.Model.ClassInfo.prototype.v
};