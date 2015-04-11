Jsonix.Model.ElementsPropertyInfo = Jsonix.Class(Jsonix.Model.AbstractElementsPropertyInfo, Jsonix.Binding.Marshalls.Element, {
	elementTypeInfos : null,
	elementTypeInfosMap : null,
	initialize : function(mapping) {
		Jsonix.Util.Ensure.ensureObject(mapping);
		Jsonix.Model.AbstractElementsPropertyInfo.prototype.initialize.apply(this, [ mapping ]);
		var etis = mapping.elementTypeInfos || mapping.etis || [];
		Jsonix.Util.Ensure.ensureArray(etis);
		this.elementTypeInfos = [];
		for (var index = 0; index < etis.length; index++) {
			this.elementTypeInfos[index] = Jsonix.Util.Type.cloneObject(etis[index]);
		}
	},
	getTypeInfoByElementName : function(elementName, context, scope) {
		return this.elementTypeInfosMap[elementName.key];
	},
	convertToTypedNamedValue : function(value, context, output, scope) {
		for (var index = 0; index < this.elementTypeInfos.length; index++) {
			var elementTypeInfo = this.elementTypeInfos[index];
			var typeInfo = elementTypeInfo.typeInfo;
			if (typeInfo.isInstance(value, context, scope)) {
				var elementName = elementTypeInfo.elementName;
				return {
					name : elementName,
					value : value,
					typeInfo : typeInfo
				};
			}
		}
		// If xsi:type is supported
		if (context.supportXsiType) {
			// Find the actual type
			var actualTypeInfo = context.getTypeInfoByValue(value);
			if (actualTypeInfo && actualTypeInfo.typeName) {
				for (var jndex = 0; jndex < this.elementTypeInfos.length; jndex++) {
					var eti = this.elementTypeInfos[jndex];
					var ti = eti.typeInfo;
					// TODO Can be optimized
					// Find an element type info which has a type info that is a
					// supertype of the actual type info
					if (actualTypeInfo.isBasedOn(ti)) {
						var en = eti.elementName;
						return {
							name : en,
							value : value,
							typeInfo : ti
						};
					}
				}
			}
		}
		// TODO harmonize error handling. See also marshallElement. Error must
		// only be on one place.
		throw new Error("Could not find an element with type info supporting the value [" + value + "].");
	},
	doBuild : function(context, module) {
		this.elementTypeInfosMap = {};
		var etiti, etien;
		for (var index = 0; index < this.elementTypeInfos.length; index++) {
			var elementTypeInfo = this.elementTypeInfos[index];
			Jsonix.Util.Ensure.ensureObject(elementTypeInfo);
			etiti = elementTypeInfo.typeInfo || elementTypeInfo.ti || 'String';
			elementTypeInfo.typeInfo = context.resolveTypeInfo(etiti, module);
			etien = elementTypeInfo.elementName || elementTypeInfo.en || undefined;
			elementTypeInfo.elementName = Jsonix.XML.QName.fromObjectOrString(etien, context, this.defaultElementNamespaceURI);
			this.elementTypeInfosMap[elementTypeInfo.elementName.key] = elementTypeInfo.typeInfo;
		}
	},
	buildStructureElements : function(context, structure) {
		for (var index = 0; index < this.elementTypeInfos.length; index++) {
			var elementTypeInfo = this.elementTypeInfos[index];
			structure.elements[elementTypeInfo.elementName.key] = this;
		}
	},
	CLASS_NAME : 'Jsonix.Model.ElementsPropertyInfo'
});
