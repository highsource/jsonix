var AR_Module_Factory = function () {
  var AR = {
    name: 'AR',
    defaultElementNamespaceURI: 'urn:test',
    typeInfos: [{
        localName: 'AccumulateResponse.TestCase',
        typeName: null,
        propertyInfos: [{
            name: 'transactionId',
            required: true,
            elementName: 'TransactionId'
          }, {
            name: 'transactionType',
            required: true,
            elementName: 'TransactionType'
          }, {
            name: 'status',
            required: true,
            elementName: 'Status'
          }]
      }, {
        localName: 'AccumulateResponse',
        propertyInfos: [{
            name: 'testCase',
            minOccurs: 0,
            collection: true,
            elementName: 'TestCase',
            typeInfo: '.AccumulateResponse.TestCase'
          }]
      }],
    elementInfos: [{
        typeInfo: '.AccumulateResponse',
        elementName: 'AccumulateResponse'
      }]
  };
  return {
    AR: AR
  };
};
if (typeof define === 'function' && define.amd) {
  define([], AR_Module_Factory);
}
else {
  var AR_Module = AR_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.AR = AR_Module.AR;
  }
  else {
    var AR = AR_Module.AR;
  }
}