Jsonix.Schema.XSD = {};
Jsonix.Schema.XSD.NAMESPACE_URI = 'http://www.w3.org/2001/XMLSchema';
Jsonix.Schema.XSD.PREFIX = 'xsd';
Jsonix.Schema.XSD.qname = function(localPart) {
	Jsonix.Util.Ensure.ensureString(localPart);
	return new Jsonix.XML.QName(Jsonix.Schema.XSD.NAMESPACE_URI, localPart,
			Jsonix.Schema.XSD.PREFIX);
};
