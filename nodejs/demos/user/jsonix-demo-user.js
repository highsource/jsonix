var Mapping = {
	name : 'Mapping',
	typeInfos : [ {
		localName : 'Data',
		propertyInfos : [ {
			name : 'user'
		}, {
			name : 'uri'
		}, {
			name : 'items',
			collection : true,
			wrapperElementName : 'items',
			elementName : 'uri',
			typeInfo : '.UriItem'
		}, {
			name : 'info'
		} ]
	}, {
		localName : 'UriItem',
		propertyInfos : [ {
			name : 'uri',
			type : 'value'
		} ]
	} ],
	elementInfos : [ {
		elementName : {
			localPart : 'data'
		},
		typeInfo : '.Data'
	} ]
};
module.exports.Mapping = Mapping;
