var GH71 = {
   name: 'ConfigModel',
   typeInfos: [{
       localName: 'Configuration.Install',
       propertyInfos: [{
           name: 'configFile',
           elementName: {
             localPart: 'ConfigFile'
           }
         }, {
           name: 'installDir',
           elementName: {
             localPart: 'InstallDir',
           }
         }, {
           name: 'dataDir',
           elementName: {
             localPart: 'DataDir'
           }
         }, {
           name: 'date',
           elementName: {
             localPart: 'Date',
             typeInfo: 'Date'
           }
         }]
     }, {
       localName: 'Configuration',
       propertyInfos: [{
           name: 'install',
           elementName: {
             localPart: 'Install'
           },
           typeInfo: '.Configuration.Install'
         }]
     }],
   elementInfos: [{
       elementName: {
         localPart: 'Configuration'
       },
       typeInfo: '.Configuration'
     }]
 };
module.exports.GH71 = GH71;
