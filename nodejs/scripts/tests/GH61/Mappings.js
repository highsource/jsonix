var Zero = {
	name: "Zero",
	tns: "urn:orez",
	dens: "urn:zero",
	typeInfos: [{
			type: "classInfo",
			localName: "AType"
		}, {
			type: "classInfo",
			localName: "BType",
			typeName: { lp : "B" }
		}, {
			type: "classInfo",
			localName: "CType",
			typeName: { ns: "urn:c", lp : "C" }
		}, {
			type: "classInfo",
			localName: "DType",
			typeName: "D"
		}]
};
module.exports.Zero = Zero;
