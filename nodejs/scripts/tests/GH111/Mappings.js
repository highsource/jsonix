var GH111 = {
	name: "GH111",
	dens: "urn:gh111",
	typeInfos: [{
			localName: "Root",
			propertyInfos: [{
					name: "value",
					type: "elements",
					collection: true,
					elementTypeInfos: [{
						elementName: "a",
						typeInfo: "String"
					}, {
						elementName: "b",
						typeInfo: "Integer"
					}]
				}]
		}],
	elementInfos: [{
			elementName: "root",
			typeInfo: ".Root"
		}]
	
};
module.exports.GH111 = GH111;