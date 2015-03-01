var Zero = {
	name: "Zero",
	dens: "urn:zero",
	typeInfos: [{
			type: "classInfo",
			localName: "AType"
		}, {
			type: "classInfo",
			localName: "BType",
			typeName: { ns: "urn:b", lp : "B" }
		}, {
			type: "classInfo",
			localName: "CType",
			typeName: { ns: "urn:c", lp : "C" }
		}]
};
module.exports.Zero = Zero;
