var B = {
  name: 'B',
  dependencies: ['A'],
  typeInfos: [
    {
      localName: 'ExtendedType',
      baseTypeInfo: 'A.BaseType'
    }
  ]
};
module.exports.B = B;