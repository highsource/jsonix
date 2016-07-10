var A = {
  name: 'A',
  typeInfos: [
    {
      localName: 'BaseType',
      propertyInfos: [{name: 'value', typeInfo: '.ValueType', type: 'er' }]
    }, {
      localName: 'ValueType',
      propertyInfos: [{name: 'data'}]
    }
  ],
  elementInfos: [{elementName: 'value', typeInfo: '.ValueType'}]
};
module.exports.A = A;