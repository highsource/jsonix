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

Jsonix.Model.Module = Jsonix
		.Class({
			name : null,
			typeInfos : null,
			elementInfos : null,
			defaultElementNamespaceURI : '',
			defaultAttributeNamespaceURI : '',
			initialize : function(options) {
				this.typeInfos = [];
				this.elementInfos = [];
				if (typeof options !== 'undefined') {
					Jsonix.Util.Ensure.ensureObject(options);
					if (Jsonix.Util.Type.isString(options.name)) {
						this.name = options.name;
					}
					if (Jsonix.Util.Type
							.isString(options.defaultElementNamespaceURI)) {
						this.defaultElementNamespaceURI = options.defaultElementNamespaceURI;
					}
					if (Jsonix.Util.Type
							.isString(options.defaultAttributeNamespaceURI)) {
						this.defaultAttributeNamespaceURI = options.defaultAttributeNamespaceURI;
					}
					// Initialize type infos
					if (Jsonix.Util.Type.isArray(options.typeInfos)) {
						this.initializeTypeInfos(options.typeInfos);
					}
					// Backwards compatibility: class infos can also be defined
					// as properties of the schema, for instance Schema.MyType
					for ( var typeInfoName in options) {
						if (options.hasOwnProperty(typeInfoName)) {
							if (options[typeInfoName] instanceof Jsonix.Model.ClassInfo) {
								this.typeInfos.push(options[typeInfoName]);
							}
						}
					}
					// Initialize element infos
					if (Jsonix.Util.Type.isArray(options.elementInfos)) {
						this.initializeElementInfos(options.elementInfos);
					}
				}
			},
			initializeTypeInfos : function(typeInfoMappings) {
				Jsonix.Util.Ensure.ensureArray(typeInfoMappings);
				var index, typeInfoMapping, typeInfo;
				for (index = 0; index < typeInfoMappings.length; index++) {
					typeInfoMapping = typeInfoMappings[index];
					typeInfo = this.createTypeInfo(typeInfoMapping);
					this.typeInfos.push(typeInfo);
				}
			},
			initializeElementInfos : function(elementInfoMappings) {
				Jsonix.Util.Ensure.ensureArray(elementInfoMappings);
				var index, elementInfoMapping, elementInfo;
				for (index = 0; index < elementInfoMappings.length; index++) {
					elementInfoMapping = elementInfoMappings[index];
					elementInfo = this.createElementInfo(elementInfoMapping);
					this.elementInfos.push(elementInfo);
				}
			},
			createTypeInfo : function(mapping) {
				Jsonix.Util.Ensure.ensureObject(mapping);
				var typeInfo;
				// If mapping is already a type info, do nothing
				if (mapping instanceof Jsonix.Model.TypeInfo) {
					typeInfo = mapping;
				}
				// Else create it via generic mapping configuration
				else {
					// Ensure property info type is provided
					Jsonix.Util.Ensure.ensureString(mapping.type);
					var type = mapping.type;
					// Locate the creator function
					if (Jsonix.Util.Type
							.isFunction(this.typeInfoCreators[type])) {
						var typeInfoCreator = this.typeInfoCreators[type];
						// Call the creator function
						typeInfo = typeInfoCreator.call(this, mapping);
					} else {
						throw new Error("Unknown type info type [" + type + "].");
					}
				}
				return typeInfo;
			},
			createClassInfo : function(options) {
				Jsonix.Util.Ensure.ensureObject(options);
				if (!Jsonix.Util.Type
						.isString(options.defaultElementNamespaceURI)) {
					options.defaultElementNamespaceURI = this.defaultElementNamespaceURI;
				}
				if (!Jsonix.Util.Type
						.isString(options.defaultAttributeNamespaceURI)) {
					options.defaultAttributeNamespaceURI = this.defaultAttributeNamespaceURI;
				}

				// Calculate both name as well as localName
				// name is provided
				if (Jsonix.Util.Type.isString(options.name)) {
					// localName is not provided
					if (!Jsonix.Util.Type.isString(options.localName)) {
						// But module name is provided
						if (Jsonix.Util.Type.isString(this.name)) {
							// If name starts with module name, use second part
							// as local name
							if (options.name.indexOf(this.name + '.') === 0) {
								options.localName = options.name
										.substring(this.name.length + 1);
							}
							// Else use name as local name
							else {
								options.localName = options.name;
							}
						}
						// Module name is not provided, use name as local name
						else {
							options.localName = options.name;
						}
					}
				}
				// name is not provided but local name is provided
				else if (Jsonix.Util.Type.isString(options.localName)) {
					// Module name is provided
					if (Jsonix.Util.Type.isString(this.name)) {
						options.name = this.name + '.' + options.localName;
					}
					// Module name is not provided
					else {
						options.name = options.localName;
					}
				} else {
					throw new Error("Neither [name] nor [localName] was provided for the class info.");
				}
				// Now both name an local name are initialized
				var classInfo = new Jsonix.Model.ClassInfo(options);
				return classInfo;
			},
			createList : function(mapping) {
				Jsonix.Util.Ensure.ensureObject(mapping);
				Jsonix.Util.Ensure.ensureExists(mapping.typeInfo);
				var typeInfo = mapping.typeInfo;
				var typeName = mapping.typeName || null;
				var separator = mapping.separator || ' ';
				return new Jsonix.Schema.XSD.List(typeInfo, typeName, separator);
			},
			createElementInfo : function(options) {
				Jsonix.Util.Ensure.ensureObject(options);
				Jsonix.Util.Ensure.ensureExists(options.elementName);
				Jsonix.Util.Ensure.ensureExists(options.typeInfo);
				if (Jsonix.Util.Type.isObject(options.elementName)) {
					options.elementName = Jsonix.XML.QName
							.fromObject(options.elementName);
				} else if (Jsonix.Util.Type.isString(options.elementName)) {
					options.elementName = new Jsonix.XML.QName(
							this.defaultElementNamespaceURI,
							options.elementName);
				} else {
					throw new Error('Element info [' + options + '] must provide an element name.');
				}
				if (Jsonix.Util.Type.exists(options.substitutionHead)) {
					if (Jsonix.Util.Type.isObject(options.substitutionHead)) {
						options.substitutionHead = Jsonix.XML.QName
								.fromObject(options.substitutionHead);
					} else {
						Jsonix.Util.Ensure
								.ensureString(options.substitutionHead);
						options.substitutionHead = new Jsonix.XML.QName(
								this.defaultElementNamespaceURI,
								options.substitutionHead);
					}
				}
				var elementInfo = new Jsonix.Model.ElementInfo(options);
				return elementInfo;
			},
			registerTypeInfos : function(context) {
				for ( var index = 0; index < this.typeInfos.length; index++) {
					var typeInfo = this.typeInfos[index];
					context.registerTypeInfo(typeInfo);
				}
			},
			buildTypeInfos : function(context) {
				for ( var index = 0; index < this.typeInfos.length; index++) {
					var typeInfo = this.typeInfos[index];
					typeInfo.build(context, this);
				}
			},
			registerElementInfos : function(context) {
				for ( var index = 0; index < this.elementInfos.length; index++) {
					var elementInfo = this.elementInfos[index];
					context.registerElementInfo(elementInfo);
				}
			},
			buildElementInfos : function(context) {
				for ( var index = 0; index < this.elementInfos.length; index++) {
					var elementInfo = this.elementInfos[index];
					elementInfo.build(context, this);
				}
			},
			// Obsolete, retained for backwards compatibility
			cs : function() {
				return this;
			},
			// Obsolete, retained for backwards compatibility
			es : function() {
				return this;
			},
			CLASS_NAME : 'Jsonix.Model.Module'
		});
Jsonix.Model.Module.prototype.typeInfoCreators = {
	"classInfo" : Jsonix.Model.Module.prototype.createClassInfo,
	"list" : Jsonix.Model.Module.prototype.createList
};