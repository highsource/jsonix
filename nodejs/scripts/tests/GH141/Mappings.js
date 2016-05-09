var GH141_Module_Factory = function () {
  var GH141 = {
    name: 'GH141',
    typeInfos: [{
        localName: 'DurationTest',
        typeName: null,
        propertyInfos: [{
            name: 'd',
            required: true,
            elementName: {
              localPart: 'd'
            },
            typeInfo: 'Duration'
          }]
      }],
    elementInfos: [{
        elementName: {
          localPart: 'durationTest',
          namespaceURI: 'gh:141'
        },
        typeInfo: '.DurationTest'
      }]
  };
  return {
    GH141: GH141
  };
};
if (typeof define === 'function' && define.amd) {
  define([], GH141_Module_Factory);
}
else {
  var GH141_Module = GH141_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.GH141 = GH141_Module.GH141;
  }
  else {
    var GH141 = GH141_Module.GH141;
  }
}