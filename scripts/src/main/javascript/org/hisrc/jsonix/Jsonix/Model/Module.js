Jsonix.Model.Module = Jsonix.Class(Jsonix.Mapping.Styled, {
	name : null,
	typeInfos : null,
	elementInfos : null,
	targetNamespace : '',
	defaultElementNamespaceURI : '',
	defaultAttributeNamespaceURI : '',
	initialize : function(mapping, options) {
		Jsonix.Mapping.Styled.prototype.initialize.apply(this, [ options ]);
		this.typeInfos = [];
		this.elementInfos = [];
		if (typeof mapping !== 'undefined') {
			Jsonix.Util.Ensure.ensureObject(mapping);
			var n = mapping.name || mapping.n || null;
			this.name = n;
			var dens = mapping.defaultElementNamespaceURI || mapping.dens || mapping.targetNamespace || mapping.tns || '';
			this.defaultElementNamespaceURI = dens;
			var tns = mapping.targetNamespace || mapping.tns || mapping.defaultElementNamespaceURI || mapping.dens || this.defaultElementNamespaceURI;
			this.targetNamespace = tns;
			var dans = mapping.defaultAttributeNamespaceURI || mapping.dans || '';
			this.defaultAttributeNamespaceURI = dans;
			// Initialize type infos
			var tis = mapping.typeInfos || mapping.tis || [];
			this.initializeTypeInfos(tis);

			// Backwards compatibility: class infos can also be defined
			// as properties of the schema, for instance Schema.MyType
			for ( var typeInfoName in mapping) {
				if (mapping.hasOwnProperty(typeInfoName)) {
					if (mapping[typeInfoName] instanceof this.mappingStyle.classInfo) {
						this.typeInfos.push(mapping[typeInfoName]);
					}
				}
			}
			var eis = mapping.elementInfos || mapping.eis || [];
			// Initialize element infos
			this.initializeElementInfos(eis);
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
			mapping = Jsonix.Util.Type.cloneObject(mapping);
			var type = mapping.type || mapping.t || 'classInfo';
			// Locate the creator function
			if (Jsonix.Util.Type.isFunction(this.typeInfoCreators[type])) {
				var typeInfoCreator = this.typeInfoCreators[type];
				// Call the creator function
				typeInfo = typeInfoCreator.call(this, mapping);
			} else {
				throw new Error("Unknown type info type [" + type + "].");
			}
		}
		return typeInfo;
	},
	initializeNames : function(mapping) {
		var ln = mapping.localName || mapping.ln || null;
		mapping.localName = ln;
		var n = mapping.name || mapping.n || null;
		mapping.name = n;
		// Calculate both name as well as localName
		// name is provided
		if (Jsonix.Util.Type.isString(mapping.name)) {
			// Obsolete code below
			// // localName is not provided
			// if (!Jsonix.Util.Type.isString(mapping.localName)) {
			// // But module name is provided
			// if (Jsonix.Util.Type.isString(this.name)) {
			// // If name starts with module name, use second part
			// // as local name
			// if (mapping.name.indexOf(this.name + '.') === 0) {
			// mapping.localName = mapping.name
			// .substring(this.name.length + 1);
			// }
			// // Else use name as local name
			// else {
			// mapping.localName = mapping.name;
			// }
			// }
			// // Module name is not provided, use name as local name
			// else {
			// mapping.localName = mapping.name;
			// }
			// }
			if (mapping.name.length > 0 && mapping.name.charAt(0) === '.' && Jsonix.Util.Type.isString(this.name)) {
				mapping.name = this.name + mapping.name;
			}
		}
		// name is not provided but local name is provided
		else if (Jsonix.Util.Type.isString(ln)) {
			// Module name is provided
			if (Jsonix.Util.Type.isString(this.name)) {
				mapping.name = this.name + '.' + ln;
			}
			// Module name is not provided
			else {
				mapping.name = ln;
			}
		} else {
			throw new Error("Neither [name/n] nor [localName/ln] was provided for the class info.");
		}
	},
	createClassInfo : function(mapping) {
		Jsonix.Util.Ensure.ensureObject(mapping);
		var dens = mapping.defaultElementNamespaceURI || mapping.dens || this.defaultElementNamespaceURI;
		mapping.defaultElementNamespaceURI = dens;
		var tns = mapping.targetNamespace || mapping.tns || this.targetNamespace;
		mapping.targetNamespace = tns;
		var dans = mapping.defaultAttributeNamespaceURI || mapping.dans || this.defaultAttributeNamespaceURI;
		mapping.defaultAttributeNamespaceURI = dans;
		this.initializeNames(mapping);
		// Now both name an local name are initialized
		var classInfo = new this.mappingStyle.classInfo(mapping, {
			mappingStyle : this.mappingStyle
		});
		classInfo.module = this;
		return classInfo;
	},
	createEnumLeafInfo : function(mapping) {
		Jsonix.Util.Ensure.ensureObject(mapping);
		this.initializeNames(mapping);
		// Now both name an local name are initialized
		var enumLeafInfo = new this.mappingStyle.enumLeafInfo(mapping, {
			mappingStyle : this.mappingStyle
		});
		enumLeafInfo.module = this;
		return enumLeafInfo;
	},
	createList : function(mapping) {
		Jsonix.Util.Ensure.ensureObject(mapping);
		var ti = mapping.baseTypeInfo || mapping.typeInfo || mapping.bti || mapping.ti || 'String';
		var tn = mapping.typeName || mapping.tn || null;

		if (Jsonix.Util.Type.exists(tn)) {
			if (Jsonix.Util.Type.isString(tn)) {
				tn = new Jsonix.XML.QName(this.targetNamespace, tn);
			} else {
				tn = Jsonix.XML.QName.fromObject(tn);
			}
		}
		var s = mapping.separator || mapping.sep || ' ';
		Jsonix.Util.Ensure.ensureExists(ti);
		var listTypeInfo = new Jsonix.Schema.XSD.List(ti, tn, s);
		listTypeInfo.module = this;
		return listTypeInfo;
	},
	createElementInfo : function(mapping) {
		Jsonix.Util.Ensure.ensureObject(mapping);
		mapping = Jsonix.Util.Type.cloneObject(mapping);

		var dens = mapping.defaultElementNamespaceURI || mapping.dens || this.defaultElementNamespaceURI;
		mapping.defaultElementNamespaceURI = dens;
		var en = mapping.elementName || mapping.en || undefined;
		Jsonix.Util.Ensure.ensureExists(en);

		var ti = mapping.typeInfo || mapping.ti || 'String';
		Jsonix.Util.Ensure.ensureExists(ti);

		mapping.typeInfo = ti;
		if (Jsonix.Util.Type.isObject(en)) {
			mapping.elementName = Jsonix.XML.QName.fromObject(en);
		} else if (Jsonix.Util.Type.isString(en)) {
			mapping.elementName = new Jsonix.XML.QName(this.defaultElementNamespaceURI, en);
		} else {
			throw new Error('Element info [' + mapping + '] must provide an element name.');
		}

		var sh = mapping.substitutionHead || mapping.sh || null;
		if (Jsonix.Util.Type.exists(sh)) {
			if (Jsonix.Util.Type.isObject(sh)) {
				mapping.substitutionHead = Jsonix.XML.QName.fromObject(sh);
			} else {
				Jsonix.Util.Ensure.ensureString(sh);
				mapping.substitutionHead = new Jsonix.XML.QName(this.defaultElementNamespaceURI, sh);
			}
		}

		var elementInfo = new this.mappingStyle.elementInfo(mapping, {
			mappingStyle : this.mappingStyle
		});
		elementInfo.module = this;
		return elementInfo;
	},
	registerTypeInfos : function(context) {
		for (var index = 0; index < this.typeInfos.length; index++) {
			var typeInfo = this.typeInfos[index];
			context.registerTypeInfo(typeInfo, this);
		}
	},
	buildTypeInfos : function(context) {
		for (var index = 0; index < this.typeInfos.length; index++) {
			var typeInfo = this.typeInfos[index];
			typeInfo.build(context, this);
		}
	},
	registerElementInfos : function(context) {
		for (var index = 0; index < this.elementInfos.length; index++) {
			var elementInfo = this.elementInfos[index];
			context.registerElementInfo(elementInfo, this);
		}
	},
	buildElementInfos : function(context) {
		for (var index = 0; index < this.elementInfos.length; index++) {
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
	"c" : Jsonix.Model.Module.prototype.createClassInfo,
	"enumInfo" : Jsonix.Model.Module.prototype.createEnumLeafInfo,
	"enum" : Jsonix.Model.Module.prototype.createEnumLeafInfo,
	"list" : Jsonix.Model.Module.prototype.createList,
	"l" : Jsonix.Model.Module.prototype.createList
};