// Declare the registry 
WPS_V_1_0_0 = {

};
// Declare types
WPS_V_1_0_0.GetCapabilities = new Jsonix.Model.ClassInfo({
	name : "WPS_V_1_0_0.GetCapabilities"
});
WPS_V_1_0_0.AcceptVersionsType = new Jsonix.Model.ClassInfo({
	name : "WPS_V_1_0_0.AcceptVersionsType"
});

// Initialize types
WPS_V_1_0_0.GetCapabilities.properties = [

		new Jsonix.Model.ElementPropertyInfo({
			name : "acceptVersions",
			typeInfo : WPS_V_1_0_0.AcceptVersionsType,
			elementName : new Jsonix.XML.QName(
					"http://www.opengis.net/wps/1.0.0", "AcceptVersions")
		}), new Jsonix.Model.AttributePropertyInfo({
			name : 'service',
			typeInfo : Jsonix.Schema.XSD.String.INSTANCE
		}), new Jsonix.Model.AttributePropertyInfo({
			name : 'language',
			typeInfo : Jsonix.Schema.XSD.String.INSTANCE
		}) ];

// Initialize types
WPS_V_1_0_0.AcceptVersionsType.properties = [ new Jsonix.Model.ElementPropertyInfo(
		{
			name : 'version',
			typeInfo : Jsonix.Schema.XSD.String.INSTANCE,
			collection : true,
			elementName : new Jsonix.XML.QName(
					"http://www.opengis.net/wps/1.0.0", "Version")
		}) ];

// Initialize registry
// Types
// Elements
WPS_V_1_0_0.elementInfos = [ {
	elementName : new Jsonix.XML.QName('http://www.opengis.net/wps/1.0.0',
			'GetCapabilities'),
	typeInfo : WPS_V_1_0_0.GetCapabilities
} ];
