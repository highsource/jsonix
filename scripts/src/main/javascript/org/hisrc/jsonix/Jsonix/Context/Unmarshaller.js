Jsonix.Context.Unmarshaller = Jsonix.Class({
	context : null,
	initialize : function(context) {
		Jsonix.Util.Ensure.ensureObject(context);
		this.context = context;
	},
	unmarshalString : function(text) {
		Jsonix.Util.Ensure.ensureString(text);
		var doc = Jsonix.DOM.parse(text);
		return this.unmarshalDocument(doc);
	},
	unmarshalURL : function(url, callback, options) {
		Jsonix.Util.Ensure.ensureString(url);
		Jsonix.Util.Ensure.ensureFunction(callback);
		if (Jsonix.Util.Type.exists(options)) {
			Jsonix.Util.Ensure.ensureObject(options);
		}
		that = this;
		Jsonix.DOM.load(url, function(doc) {
			callback(that.unmarshalDocument(doc));
		}, options);
	},
	unmarshalFile : function(fileName, callback, options) {
		if (typeof _jsonix_fs === 'undefined')
		{
			throw new Error("File unmarshalling is only available in environments which support file systems.");
		}
		Jsonix.Util.Ensure.ensureString(fileName);
		Jsonix.Util.Ensure.ensureFunction(callback);
		if (Jsonix.Util.Type.exists(options)) {
			Jsonix.Util.Ensure.ensureObject(options);
		}
		that = this;
		var fs =_jsonix_fs;
		fs.readFile(fileName, options, function(err, data) {
			if (err)
			{
				throw err;
			}
			else
			{
				var text = data.toString();
				var doc = Jsonix.DOM.parse(text);
				callback(that.unmarshalDocument(doc));
			}
		});
	},
	unmarshalDocument : function(doc) {
		var input = new Jsonix.XML.Input(doc);

		var result = null;
		input.nextTag();
		return this.unmarshalElement(this.context, input);

	},
	unmarshalElement : function(context, input, scope) {
		if (input.eventType != 1) {
			throw new Error("Parser must be on START_ELEMENT to read next text.");
		}

		var result = null;
		var name = input.getName();
		var typeInfo = this.getElementTypeInfo(name, context, scope);
		var value = typeInfo.unmarshal(context, input, scope);
		var elementValue = this.convertToElementValue({
			name : name,
			value : value
		}, context, input, scope);
		return elementValue;
	},
	getElementTypeInfo : function(name, context, scope) {
		var elementInfo = context.getElementInfo(name, scope);
		if (Jsonix.Util.Type.exists(elementInfo)) {
			return elementInfo.typeInfo;
		} else {
			throw new Error("Element [" + name.key + "] is not known in this context.");
		}
	},
	convertToElementValue : function(elementValue, context, input, scope) {
		return elementValue;
	},
	CLASS_NAME : 'Jsonix.Context.Unmarshaller'
});
Jsonix.Context.Unmarshaller.Simplified = Jsonix.Class(Jsonix.Context.Unmarshaller, {
	convertToElementValue : function(elementValue, context, input, scope) {
		var propertyName = elementValue.name.toCanonicalString(context);
		var value = {};
		value[propertyName] = elementValue.value;
		return value;
	},
	CLASS_NAME : 'Jsonix.Context.Unmarshaller.Simplified'
});