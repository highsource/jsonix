/*
 * Jsonix is a JavaScript library which allows you to convert between XML
 * and JavaScript object structures.
 *
 * Copyright (c) 2010, Aleksei Valikov, Highsource.org
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Aleksei Valikov nor the
 *       names of contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ALEKSEI VALIKOV BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

Jsonix.Model.AbstractElementsPropertyInfo = Jsonix.Class(Jsonix.Model.PropertyInfo, {
	wrapperElementName : null,
	initialize : function(options) {
		Jsonix.Util.Ensure.ensureObject(options);
		Jsonix.Model.PropertyInfo.prototype.initialize.apply(this, [ options ]);
		// TODO Ensure correct argument
		if (Jsonix.Util.Type.isObject(options.wrapperElementName)) {
			Jsonix.Util.Ensure.ensureString(options.wrapperElementName.localPart, 'Wrapper element name must contain a string property [localPart].');
			this.wrapperElementName = Jsonix.XML.QName.fromObject(options.wrapperElementName);
		} else if (Jsonix.Util.Type.isString(options.wrapperElementName)) {
			this.wrapperElementName = new Jsonix.XML.QName(this.defaultElementNamespaceURI, options.wrapperElementName);
		} else {
			this.wrapperElementName = null;
		}
	},
	unmarshal : function(context, scope, input) {
		var result = null;
		var that = this;
		var callback = function(value) {
			if (that.collection) {
				if (result === null) {
					result = [];
				}
				result.push(value);

			} else {
				if (result === null) {
					result = value;
				} else {
					// TODO Report validation error
					throw "Value already set.";
				}
			}
		};

		if (Jsonix.Util.Type.exists(this.wrapperElementName)) {
			this.unmarshalWrapperElement(context, input, callback);
		} else {
			this.unmarshalElement(context, input, callback);
		}
		return result;
	},
	unmarshalWrapperElement : function(context, input, callback) {
		var et = input.next();
		while (et !== Jsonix.XML.Input.END_ELEMENT) {
			// New sub-element starts
			if (et === Jsonix.XML.Input.START_ELEMENT) {
				this.unmarshalElement(context, input, callback);
			} else if (et === Jsonix.XML.Input.SPACE || et === Jsonix.XML.Input.COMMENT || et === Jsonix.XML.Input.PROCESSING_INSTRUCTION) {
				// Skip whitespace
			} else {
				// TODO ignore comments, processing
				// instructions
				throw "Illegal state: unexpected event type [" + et + "].";
			}
			et = input.next();
		}
	},
	unmarshalElement : function(context, input, callback) {
		throw "Abstract method [unmarshalElement].";
	},
	marshal : function(context, scope, value, output) {

		if (!Jsonix.Util.Type.exists(value)) {
			// Do nothing
			return;
		}

		if (Jsonix.Util.Type.exists(this.wrapperElementName)) {
			output.writeStartElement(this.wrapperElementName);
		}

		if (!this.collection) {
			this.marshalElement(context, value, output);
		} else {
			Jsonix.Util.Ensure.ensureArray(value);
			// TODO Exception if not array
			for ( var index = 0; index < value.length; index++) {
				var item = value[index];
				// TODO Exception if item does not exist
				this.marshalElement(context, item, output);
			}
		}

		if (Jsonix.Util.Type.exists(this.wrapperElementName)) {
			output.writeEndElement();
		}
	},
	marshalElement : function(context, value, output) {
		throw "Abstract method [marshalElement].";
	},
	marshalElementTypeInfo : function(context, value, elementName, typeInfo, output) {
		output.writeStartElement(elementName);
		typeInfo.marshal(context, value, output);
		output.writeEndElement();
	},
	buildStructure : function(context, structure) {
		Jsonix.Util.Ensure.ensureObject(structure);
		if (Jsonix.Util.Type.exists(structure.value)) {
			// TODO better exception
			throw "The structure already defines a value property.";
		} else if (!Jsonix.Util.Type.exists(structure.elements)) {
			structure.elements = {};
		}

		if (Jsonix.Util.Type.exists(this.wrapperElementName)) {
			structure.elements[this.wrapperElementName.key] = this;
		} else {
			this.buildStructureElements(context, structure);
		}
	},
	buildStructureElements : function(context, structure) {
		throw "Abstract method [buildStructureElements].";
	},
	CLASS_NAME : 'Jsonix.Model.AbstractElementsPropertyInfo'
});
