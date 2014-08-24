Jsonix.Context.Marshaller = Jsonix.Class({
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
			namespacePrefixes : this.context.properties.namespacePrefixes
		});

		var doc = output.writeStartDocument();

		this.marshalElementNode(value, output);

		output.writeEndDocument();

		return doc;

	},
	marshalElementNode : function(value, output) {

		Jsonix.Util.Ensure.ensureObject(value);
		Jsonix.Util.Ensure.ensureObject(value.name);
		Jsonix.Util.Ensure.ensureString(value.name.localPart);
		Jsonix.Util.Ensure.ensureExists(value.value);

		var name = Jsonix.XML.QName.fromObject(value.name);

		var elementDeclaration = this.context.getElementInfo(name);
		if (!Jsonix.Util.Type.exists(elementDeclaration)) {
			throw new Error("Could not find element declaration for the element [" + name.key + "].");
		}
		Jsonix.Util.Ensure.ensureObject(elementDeclaration.typeInfo);
		var typeInfo = elementDeclaration.typeInfo;
		var element = output.writeStartElement(value.name);
		var adapter = Jsonix.Model.Adapter.getAdapter(elementDeclaration);
		adapter.marshal(this.context, value.value, output, typeInfo);
		output.writeEndElement();
		return element;

	},
	CLASS_NAME : 'Jsonix.Context.Marshaller'
});