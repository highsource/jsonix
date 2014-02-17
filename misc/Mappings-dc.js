if (typeof org === 'undefined') {
  org = {};
}
if (typeof org.purl === 'undefined') {
  org.purl = {};
}
if (typeof org.purl.dc === 'undefined') {
  org.purl.dc = {};
}
if (typeof org.purl.dc.elements === 'undefined') {
  org.purl.dc.elements = {};
}
org.purl.dc.elements._1 = new Jsonix.Model.Module({
    defaultElementNamespaceURI: 'http:\/\/purl.org\/dc\/elements\/1.1\/'
  });
org.purl.dc.elements._1.cs().c({
    name: 'SimpleLiteral'
  }).c({
    name: 'ElementContainer'
  });
{
  {
    org.purl.dc.elements._1.SimpleLiteral.ps().ae({
        name: 'content',
        collection: true,
        domAllowed: true,
        typedObjectAllowed: true,
        mixed: true
      }).a({
        name: 'scheme',
        attributeName: 'scheme'
      });
  }
  {
    org.purl.dc.elements._1.ElementContainer.ps().er({
        name: 'dcElement',
        collection: true,
        elementName: 'DC-element',
        typeInfo: org.purl.dc.elements._1.SimpleLiteral
      });
  }
}
org.purl.dc.elements._1.es().e({
    elementName: 'source',
    typeInfo: org.purl.dc.elements._1.SimpleLiteral,
    substitutionHead: 'DC-element'
  }).e({
    elementName: 'coverage',
    typeInfo: org.purl.dc.elements._1.SimpleLiteral,
    substitutionHead: 'DC-element'
  }).e({
    elementName: 'creator',
    typeInfo: org.purl.dc.elements._1.SimpleLiteral,
    substitutionHead: 'DC-element'
  }).e({
    elementName: 'relation',
    typeInfo: org.purl.dc.elements._1.SimpleLiteral,
    substitutionHead: 'DC-element'
  }).e({
    elementName: 'identifier',
    typeInfo: org.purl.dc.elements._1.SimpleLiteral,
    substitutionHead: 'DC-element'
  }).e({
    elementName: 'description',
    typeInfo: org.purl.dc.elements._1.SimpleLiteral,
    substitutionHead: 'DC-element'
  }).e({
    elementName: 'date',
    typeInfo: org.purl.dc.elements._1.SimpleLiteral,
    substitutionHead: 'DC-element'
  }).e({
    elementName: 'contributor',
    typeInfo: org.purl.dc.elements._1.SimpleLiteral,
    substitutionHead: 'DC-element'
  }).e({
    elementName: 'format',
    typeInfo: org.purl.dc.elements._1.SimpleLiteral,
    substitutionHead: 'DC-element'
  }).e({
    elementName: 'type',
    typeInfo: org.purl.dc.elements._1.SimpleLiteral,
    substitutionHead: 'DC-element'
  }).e({
    elementName: 'DC-element',
    typeInfo: org.purl.dc.elements._1.SimpleLiteral
  }).e({
    elementName: 'publisher',
    typeInfo: org.purl.dc.elements._1.SimpleLiteral,
    substitutionHead: 'DC-element'
  }).e({
    elementName: 'subject',
    typeInfo: org.purl.dc.elements._1.SimpleLiteral,
    substitutionHead: 'DC-element'
  }).e({
    elementName: 'title',
    typeInfo: org.purl.dc.elements._1.SimpleLiteral,
    substitutionHead: 'DC-element'
  }).e({
    elementName: 'language',
    typeInfo: org.purl.dc.elements._1.SimpleLiteral,
    substitutionHead: 'DC-element'
  }).e({
    elementName: 'rights',
    typeInfo: org.purl.dc.elements._1.SimpleLiteral,
    substitutionHead: 'DC-element'
  });