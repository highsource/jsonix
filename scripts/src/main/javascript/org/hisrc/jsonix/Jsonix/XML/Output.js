Jsonix.XML.Output = Jsonix.Class({
	document : null,
	node : null,
	nodes : null,
	xmldom : null,
	namespacePrefixes : null,
	namespacePrefixIndex : 0,
	initialize : function(options) {
		// REWORK
		if (typeof ActiveXObject !== 'undefined') {
			this.xmldom = new ActiveXObject("Microsoft.XMLDOM");
		} else {
			this.xmldom = null;
		}
		this.nodes = [];
		this.namespacePrefixes = {
			'' : ''
		};
		if (Jsonix.Util.Type.isObject(options)) {
			if (Jsonix.Util.Type.isObject(options.namespacePrefixes)) {
				for ( var name in options.namespacePrefixes) {
					if (options.namespacePrefixes.hasOwnProperty(name)) {
						this.namespacePrefixes[name] = options.namespacePrefixes[name];
					}
				}
			}
		}
	},
	destroy : function() {
		this.xmldom = null;
	},
	writeStartDocument : function() {
		// TODO Check
		var doc = Jsonix.DOM.createDocument();
		this.document = doc;
		return this.push(doc);
	},
	writeEndDocument : function() {
		return this.pop();

	},
	writeStartElement : function(name) {
		Jsonix.Util.Ensure.ensureObject(name);
		var localPart = name.localPart || name.lp || null;
		Jsonix.Util.Ensure.ensureString(localPart);
		var ns = name.namespaceURI || name.ns || null;
		var namespaceURI = Jsonix.Util.Type.isString(ns) ? ns : '';

		var p = name.prefix || name.p;
		var prefix = Jsonix.Util.Type.isString(p) ? p : this.getPrefix(namespaceURI);

		var qualifiedName = (!prefix ? localPart : prefix + ':' + localPart);

		var element;
		if (Jsonix.Util.Type.isFunction(this.document.createElementNS))	{
			element = this.document.createElementNS(namespaceURI, qualifiedName);
		}
		else if (this.xmldom) {
			element = this.xmldom.createNode(1, qualifiedName, namespaceURI);

		} else {
			throw new Error("Could not create an element node.");
		}
		this.peek().appendChild(element);
		return this.push(element);
	},
	writeEndElement : function() {
		return this.pop();
	},
	writeCharacters : function(text) {
		var node;
		if (Jsonix.Util.Type.isFunction(this.document.createTextNode))	{
			node = this.document.createTextNode(text);
		}
		else if (this.xmldom) {
			node = this.xmldom.createTextNode(text);
		} else {
			throw new Error("Could not create a text node.");
		}
		this.peek().appendChild(node);
		return node;

	},
	writeAttribute : function(name, value) {
		Jsonix.Util.Ensure.ensureString(value);
		Jsonix.Util.Ensure.ensureObject(name);
		var localPart = name.localPart || name.lp || null;
		Jsonix.Util.Ensure.ensureString(localPart);
		var ns = name.namespaceURI || name.ns || null;
		var namespaceURI = Jsonix.Util.Type.isString(ns) ? ns : '';
		var p = name.prefix || name.p || null;
		var prefix = Jsonix.Util.Type.isString(p) ? p : this.getPrefix(namespaceURI);

		var qualifiedName = (!prefix ? localPart : prefix + ':' + localPart);

		var node = this.peek();

		if (namespaceURI === '') {
			node.setAttribute(qualifiedName, value);
		} else {
			if (node.setAttributeNS) {
				node.setAttributeNS(namespaceURI, qualifiedName, value);
			} else {
				if (this.xmldom) {
					var attribute = this.document.createNode(2, qualifiedName, namespaceURI);
					attribute.nodeValue = value;
					node.setAttributeNode(attribute);
				} else {
					throw new Error("The [setAttributeNS] method is not implemented");
				}
			}
			if (namespaceURI === 'http://www.w3.org/1999/xlink' && Jsonix.DOM.isXlinkFixRequired())
			{
				node.setAttribute('xmlns:' + prefix, namespaceURI);
			}
		}
	},
	writeNode : function(node) {
		var importedNode;
		if (Jsonix.Util.Type.exists(this.document.importNode)) {
			importedNode = this.document.importNode(node, true);
		} else {
			importedNode = node;
		}
		this.peek().appendChild(importedNode);
		return importedNode;
	},
	push : function(node) {
		this.nodes.push(node);
		return node;
	},
	peek : function() {
		return this.nodes[this.nodes.length - 1];
	},
	pop : function() {
		var result = this.nodes.pop();
		return result;
	},
	getPrefix : function(namespaceURI) {
		var p = this.namespacePrefixes[namespaceURI];
		if (Jsonix.Util.Type.exists(p)) {
			return p;
		} else {
			p = 'p' + (this.namespacePrefixIndex++);
			this.namespacePrefixes[namespaceURI] = p;
			return p;
		}

	},
	CLASS_NAME : "Jsonix.XML.Output"
});