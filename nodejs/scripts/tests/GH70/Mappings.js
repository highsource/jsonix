var GH70_Module_Factory = function () {
  var GH70 = {
    n: 'GH70',
    tns: 'urn:GH70',
    tis: [
      { ln: 'Expression'},
      { ln: 'Literal', bti: '.Expression', ps: [{ n: 'value', t: 'v' }]},
      { ln: 'And', bti: '.Expression', ps: [{ n: 'expressions', en: 'Expression', t: 'e', ti: '.Expression', col: true}]},
      { ln: 'Or', bti: '.Expression', ps: [{ n: 'expressions', en: 'Expression', t: 'er', ti: '.Expression', col: true}]},
    ],
    eis: [{
        en: 'Literal',
        ti: '.Literal'
      },{
        en: 'Expression',
        ti: '.Expression'
      },{
        en: 'And',
        ti: '.And'
      },{
        en: 'Or',
        ti: '.Or'
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