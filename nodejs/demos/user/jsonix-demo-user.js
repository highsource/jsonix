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
			typeInfo : '.Item'
		}, {
			name : 'info'
		} ]
	}, {
		localName : 'Item',
		propertyInfos : [ {
			name : 'uri'
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
