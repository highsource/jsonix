var GH70_Module_Factory = function () {
  var GH70 = {
    n: 'GH70',
    tns: 'urn:GH70',
    tis: [
      { ln: 'Expression'},
      { ln: 'Literal', bti: '.Expression', ps: [{ n: 'value', t: 'v' }]},
    ],
    eis: [{
        en: 'Literal',
        ti: '.Literal'
      },{
        en: 'Expression',
        ti: '.Expression'
      }]
  };
  return {
    GH70: GH70
  };
};
if (typeof define === 'function' && define.amd) {
  define([], GH70_Module_Factory);
}
else {
  var GH70_Module = GH70_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.GH70 = GH70_Module.GH70;
  }
  else {
    var GH70 = GH70_Module.GH70;
  }
}