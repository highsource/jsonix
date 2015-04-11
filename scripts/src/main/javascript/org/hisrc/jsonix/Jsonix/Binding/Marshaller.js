Jsonix.Binding.Marshaller = Jsonix.Class(Jsonix.Binding.Marshalls.Element, Jsonix.Binding.Marshalls.Element.AsElementRef, {
	context : null,
	initialize : function(context) {
		Jsonix.Util.Ensure.ensureObject(context);
		this.context = context;
	},
	marshalString : function(value) {
		var doc = this.marshalDocument(value);
		var text = Jsonix.DOM.serialize(doc);
		return text;
	},
	marshalDocument : function(value) {
		var output = new Jsonix.XML.Output({
			namespacePrefixes : this.context.namespacePrefixes
		});

		var doc = output.writeStartDocument();
		this.marshalElement(value, this.context, output, undefined);
		output.writeEndDocument();
		return doc;
	},
	CLASS_NAME : 'Jsonix.Binding.Marshaller'
});
Jsonix.Binding.Marshaller.Simplified = Jsonix.Class(Jsonix.Binding.Marshaller, {
	CLASS_NAME : 'Jsonix.Binding.Marshaller.Simplified'
});