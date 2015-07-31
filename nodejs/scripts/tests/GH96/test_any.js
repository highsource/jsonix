var test_any_Module_Factory = function () {
  var test_any = {
    name: 'test_any',
    typeInfos: [{
        localName: 'MixedAnyType',
        typeName: {
          namespaceURI: 'test:any',
          localPart: 'MixedAnyType'
        },
        propertyInfos: [{
            name: 'content',
            collection: true,
            type: 'anyElement'
          }]
      }, {
        localName: 'INCLUDED',
        typeName: {
          namespaceURI: 'test:any',
          localPart: 'INCLUDED'
        },
        propertyInfos: [{
            name: 'majorVersion',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'majorVersion'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TESTANY',
        typeName: null,
        propertyInfos: [{
            name: 'en',
            elementName: {
              localPart: 'en'
            },
            typeInfo: '.MixedAnyType'
          }]
      }],
    elementInfos: [{
        elementName: {
          localPart: 'TESTANY',
          namespaceURI: 'test:any'
        },
        typeInfo: '.TESTANY'
      }]
  };
  return {
    test_any: test_any
  };
};
if (typeof define === 'function' && define.amd) {
  define([], test_any_Module_Factory);
}
else {
  var test_any_Module = test_any_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.test_any = test_any_Module.test_any;
  }
  else {
    var test_any = test_any_Module.test_any;
  }
}
