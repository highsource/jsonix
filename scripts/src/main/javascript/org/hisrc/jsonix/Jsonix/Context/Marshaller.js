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
	marshalElementNode : function(value, output, scope) {

		Jsonix.Util.Ensure.ensureObject(value);
//		Jsonix.Util.Ensure.ensureObject(value.name);
		Jsonix.Util.Ensure.ensureExists(value.value);

		var name = Jsonix.XML.QName.fromObjectOrString(value.name, this.context);

		var elementDeclaration = this.context.getElementInfo(name, scope);
		if (!Jsonix.Util.Type.exists(elementDeclaration)) {
			throw new Error("Could not find element declaration for the element [" + name.key + "].");
		}
		Jsonix.Util.Ensure.ensureObject(elementDeclaration.typeInfo);
		var typeInfo = elementDeclaration.typeInfo;
		var element = output.writeStartElement(name);
		var adapter = Jsonix.Model.Adapter.getAdapter(elementDeclaration);
		adapter.marshal(typeInfo, value.value, this.context, output, scope);
		output.writeEndElement();
		return element;

	},
	CLASS_NAME : 'Jsonix.Context.Marshaller'
});