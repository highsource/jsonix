var ground_Module_Factory = function () {
  var ground = {
    name: 'ground',
    typeInfos: [{
        localName: 'Root.House',
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
            typeInfo: '.LocaType'
          }]
      }, {
        localName: 'LocaType',
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'name',
              namespaceURI: 'urban'
            }
          }, {
            name: 'oldName',
            elementName: {
              localPart: 'oldName',
              namespaceURI: 'urban'
            }
          }, {
            name: 'streetName',
            elementName: {
              localPart: 'streetName',
              namespaceURI: 'urban'
            }
          }]
      }, {
        localName: 'Root',
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
      }, {
        localName: 'LocaType',
        propertyInfos: [{
            name: 'name',
            elementName: {
              localPart: 'name',
              namespaceURI: 'rural'
            }
          }, {
            name: 'swingCount',
            elementName: {
              localPart: 'swingCount',
              namespaceURI: 'rural'
            },
            typeInfo: 'Int'
          }, {
            name: 'kennelCount',
            elementName: {
              localPart: 'kennelCount',
              namespaceURI: 'rural'
            },
            typeInfo: 'Int'
          }]
      }, {
        localName: 'Root.Garden',
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
            typeInfo: '.LocaType'
          }]
      }],
    elementInfos: [{
        elementName: {
          localPart: 'localisation',
          namespaceURI: 'urban'
        },
        typeInfo: '.LocaType'
      }, {
        elementName: {
          localPart: 'Root'
        },
        typeInfo: '.Root'
      }, {
        elementName: {
          localPart: 'localisation',
          namespaceURI: 'rural'
        },
        typeInfo: '.LocaType'
      }]
  };
  return {
    ground: ground
  };
};
if (typeof define === 'function' && define.amd) {
  define([], ground_Module_Factory);
}
else {
  var ground_Module = ground_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.ground = ground_Module.ground;
  }
  else {
    var ground = ground_Module.ground;
  }
}