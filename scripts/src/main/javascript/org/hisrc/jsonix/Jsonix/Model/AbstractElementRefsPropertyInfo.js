Jsonix.Model.AbstractElementRefsPropertyInfo = Jsonix.Class(Jsonix.Model.PropertyInfo, {
	wrapperElementName : null,
	mixed : true,
	initialize : function(mapping) {
		Jsonix.Util.Ensure.ensureObject(mapping, 'Mapping must be an object.');
		Jsonix.Model.PropertyInfo.prototype.initialize.apply(this, [ mapping ]);
		var wen = mapping.wrapperElementName||mapping.wen||null;
		var mx = mapping.mixed||mapping.mx;
		if (Jsonix.Util.Type.isObject(wen)) {
			this.wrapperElementName = Jsonix.XML.QName.fromObject(wen);
		} else if (Jsonix.Util.Type.isString(wen)) {
			this.wrapperElementName = new Jsonix.XML.QName(this.defaultElementNamespaceURI, wen);
		} else {
			this.wrapperElementName = null;
		}
		if (Jsonix.Util.Type.isBoolean(mx)) {
			this.mixed = mx;
		} else {
			this.mixed = true;
		}
	},
	unmarshal : function(context, input, scope) {
		var et = input.eventType;

		if (et === Jsonix.XML.Input.START_ELEMENT) {
			if (Jsonix.Util.Type.exists(this.wrapperElementName)) {
				return this.unmarshalWrapperElement(context, input, scope);
			} else {
				return this.unmarshalElement(context, input, scope);
			}
		} else if (this.mixed && (et === Jsonix.XML.Input.CHARACTERS || et === Jsonix.XML.Input.CDATA || et === Jsonix.XML.Input.ENTITY_REFERENCE)) {
			var value = input.getText();
			if (this.collection) {
				return [ value ];

			} else {
				return value;
			}
		} else if (et === Jsonix.XML.Input.SPACE || et === Jsonix.XML.Input.COMMENT || et === Jsonix.XML.Input.PROCESSING_INSTRUCTION) {
			// Skip whitespace
		} else {
			// TODO better exception
			throw new Error("Illegal state: unexpected event type [" + et + "].");
		}
	},
	unmarshalWrapperElement : function(context, input, scope) {
		var result = null;
		var et = input.next();
		while (et !== Jsonix.XML.Input.END_ELEMENT) {
			if (et === Jsonix.XML.Input.START_ELEMENT) {
				var value = this.unmarshalElement(context, input, scope);
				if (this.collection) {
					if (result === null) {
						result = [];
					}
					for ( var index = 0; index < value.length; index++) {
						result.push(value[index]);
					}

				} else {
					if (result === null) {
						result = value;
					} else {
						// TODO Report validation error
						throw new Error("Value already set.");
					}
				}
			} else
			// Characters
			if (this.mixed && (et === Jsonix.XML.Input.CHARACTERS || et === Jsonix.XML.Input.CDATA || et === Jsonix.XML.Input.ENTITY_REFERENCE)) {
				var text = input.getText();
				if (this.collection) {
					if (result === null) {
						result = [];
					}
					result.push(text);
				} else {
					if (result === null) {
						result = text;
					} else {
						// TODO Report validation error
						throw new Error("Value already set.");
					}
				}
			} else if (et === Jsonix.XML.Input.SPACE || et === Jsonix.XML.Input.COMMENT || et === Jsonix.XML.Input.PROCESSING_INSTRUCTION) {
				// Skip whitespace
			} else {
				throw new Error("Illegal state: unexpected event type [" + et + "].");
			}
			et = input.next();
		}
		return result;
	},
	unmarshalElement : function(context, input, scope) {
		var name = input.getName();
		var typeInfo = this.getElementTypeInfo(context, name, scope);
		var value = {
			name : name,
			value : typeInfo.unmarshal(context, input, scope)
		};
		if (this.collection) {
			return [ value ];
		} else {
			return value;
		}
	},
	marshal : function(value, context, output, scope) {

		if (Jsonix.Util.Type.exists(value)) {
			if (Jsonix.Util.Type.exists(this.wrapperElementName)) {
				output.writeStartElement(this.wrapperElementName);
			}

			if (!this.collection) {
				this.marshalItem(value, context, output, scope);
			} else {
				Jsonix.Util.Ensure.ensureArray(value, 'Collection property requires an array value.');
				for ( var index = 0; index < value.length; index++) {
					var item = value[index];
					this.marshalItem(item, context, output, scope);
				}
			}

			if (Jsonix.Util.Type.exists(this.wrapperElementName)) {
				output.writeEndElement();
			}
		}

	},
	marshalItem : function(value, context, output, scope) {

		if (Jsonix.Util.Type.isString(value)) {
			if (!this.mixed) {
				// TODO
				throw new Error("Property is not mixed, can't handle string values.");
			} else {
				output.writeCharacters(value);
			}
		} else if (Jsonix.Util.Type.isObject(value)) {
			this.marshalElement(value, context, output, scope);

		} else {
			if (this.mixed) {
				throw new Error("Unsupported content type, either objects or strings are supported.");
			} else {
				throw new Error("Unsupported content type, only objects are supported.");
			}
		}

	},
	marshalElement : function(value, context, output, scope) {
		var elementName = Jsonix.XML.QName.fromObject(value.name);
		var typeInfo = this.getElementTypeInfo(context, elementName, scope);
		return this.marshalElementTypeInfo(elementName, typeInfo, value, context, output, scope);
	},
	marshalElementTypeInfo : function(elementName, typeInfo, value, context, output, scope) {
		output.writeStartElement(elementName);
		if (Jsonix.Util.Type.exists(value.value)) {
			typeInfo.marshal(value.value, context, output, scope);
		}
		output.writeEndElement();

	},
	getElementTypeInfo : function(context, elementName, scope) {
		var propertyElementTypeInfo = this.getPropertyElementTypeInfo(elementName);
		if (Jsonix.Util.Type.exists(propertyElementTypeInfo)) {
			return propertyElementTypeInfo.typeInfo;
		} else {
			var contextElementTypeInfo = context.getElementInfo(elementName, scope);
			if (Jsonix.Util.Type.exists(contextElementTypeInfo)) {
				return contextElementTypeInfo.typeInfo;
			} else {
				throw new Error("Element [" + elementName.key + "] is not known in this context.");
			}
		}

	},
	getPropertyElementTypeInfo : function(elementName) {
		throw new Error("Abstract method [getPropertyElementTypeInfo].");
	},
	buildStructure : function(context, structure) {
		Jsonix.Util.Ensure.ensureObject(structure);
		if (Jsonix.Util.Type.exists(structure.value)) {
			// TODO better exception
			throw new Error("The structure already defines a value property.");
		} else if (!Jsonix.Util.Type.exists(structure.elements)) {
			structure.elements = {};
		}

		if (Jsonix.Util.Type.exists(this.wrapperElementName)) {
			structure.elements[this.wrapperElementName.key] = this;
		} else {
			this.buildStructureElements(context, structure);
		}

		// if (Jsonix.Util.Type.exists(structure.elements[key]))
		// {
		// // TODO better exception
		// throw new Error("The structure already defines an element for
		// the key ["
		// + key + "].");
		// } else
		// {
		// structure.elements[key] = this;
		// }

		if (this.mixed && !Jsonix.Util.Type.exists(this.wrapperElementName)) {
			// if (Jsonix.Util.Type.exists(structure.mixed)) {
			// // TODO better exception
			// throw new Error("The structure already defines the mixed
			// property.");
			// } else
			// {
			structure.mixed = this;
			// }
		}
	},
	buildStructureElements : function(context, structure) {
		throw new Error("Abstract method [buildStructureElements].");
	},
	buildStructureElementTypeInfos : function(context, structure, elementTypeInfo) {
		structure.elements[elementTypeInfo.elementName.key] = this;
		var substitutionMembers = context.getSubstitutionMembers(elementTypeInfo.elementName);
		if (Jsonix.Util.Type.isArray(substitutionMembers)) {
			for ( var jndex = 0; jndex < substitutionMembers.length; jndex++) {
				var substitutionElementInfo = substitutionMembers[jndex];
				this.buildStructureElementTypeInfos(context, structure, substitutionElementInfo);
			}

		}
	},
	CLASS_NAME : 'Jsonix.Model.ElementRefPropertyInfo'
});
