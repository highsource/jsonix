Jsonix.Schema.XSI = {};
Jsonix.Schema.XSI.NAMESPACE_URI = 'http://www.w3.org/2001/XMLSchema-instance';
Jsonix.Schema.XSI.PREFIX = 'xsi';
Jsonix.Schema.XSI.TYPE = 'type';
Jsonix.Schema.XSI.NIL = 'nil';
Jsonix.Schema.XSI.qname = function(localPart) {
	Jsonix.Util.Ensure.ensureString(localPart);
	return new Jsonix.XML.QName(Jsonix.Schema.XSI.NAMESPACE_URI, localPart,
			Jsonix.Schema.XSI.PREFIX);
};
Jsonix.Schema.XSI.TYPE_QNAME = Jsonix.Schema.XSI.qname(Jsonix.Schema.XSI.TYPE);
