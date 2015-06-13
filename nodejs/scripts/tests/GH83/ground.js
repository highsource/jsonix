var ground_Module_Factory = function () {
  var generated = {
    name: 'generated',
    dependencies: ['rural', 'urban'],
    typeInfos: [{
        localName: 'Root.House',
        typeName: null,
        propertyInfos: [{
            name: 'id',
            elementName: {
              localPart: 'id'
            },
            typeInfo: 'Int'
          }, {
            name: 'localisation',
            elementName: {
              localPart: 'localisation'
            },
            typeInfo: 'urban.LocaType'
          }]
      }, {
        localName: 'Root.Garden',
        typeName: null,
        propertyInfos: [{
            name: 'id',
            elementName: {
              localPart: 'id'
            },
            typeInfo: 'Int'
          }, {
            name: 'localisation',
            elementName: {
              localPart: 'localisation'
            },
            typeInfo: 'rural.LocaType'
          }]
      }, {
        localName: 'Root',
        typeName: null,
        propertyInfos: [{
            name: 'house',
            elementName: {
              localPart: 'House'
            },
            typeInfo: '.Root.House'
          }, {
            name: 'garden',
            elementName: {
              localPart: 'Garden'
            },
            typeInfo: '.Root.Garden'
          }]
      }],
    elementInfos: [{
        elementName: {
          localPart: 'Root'
        },
        typeInfo: '.Root'
      }]
  };
  var urban = {
    name: 'urban',
    defaultElementNamespaceURI: 'urban',
    typeInfos: [{
        localName: 'LocaType',
        propertyInfos: [{
            name: 'name'
          }, {
            name: 'oldName'
          }, {
            name: 'streetName'
          }]
      }],
    elementInfos: [{
        elementName: 'localisation',
        typeInfo: '.LocaType'
      }]
  };
  var rural = {
    name: 'rural',
    defaultElementNamespaceURI: 'rural',
    typeInfos: [{
        localName: 'LocaType',
        propertyInfos: [{
            name: 'name'
          }, {
            name: 'swingCount',
            typeInfo: 'Int'
          }, {
            name: 'kennelCount',
            typeInfo: 'Int'
          }]
      }],
    elementInfos: [{
        elementName: 'localisation',
        typeInfo: '.LocaType'
      }]
  };
  return {
    generated: generated,
    urban: urban,
    rural: rural
  };
};
if (typeof define === 'function' && define.amd) {
  define([], ground_Module_Factory);
}
else {
  var ground_Module = ground_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.generated = ground_Module.generated;
    module.exports.urban = ground_Module.urban;
    module.exports.rural = ground_Module.rural;
  }
  else {
    var generated = ground_Module.generated;
    var urban = ground_Module.urban;
    var rural = ground_Module.rural;
  }
}