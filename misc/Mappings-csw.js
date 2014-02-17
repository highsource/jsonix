if (typeof net === 'undefined') {
  net = {};
}
if (typeof net.opengis === 'undefined') {
  net.opengis = {};
}
if (typeof net.opengis.cat === 'undefined') {
  net.opengis.cat = {};
}
if (typeof net.opengis.cat.csw === 'undefined') {
  net.opengis.cat.csw = {};
}
net.opengis.cat.csw._2_0 = new Jsonix.Model.Module({
    defaultElementNamespaceURI: 'http:\/\/www.opengis.net\/cat\/csw\/2.0.2'
  });
net.opengis.cat.csw._2_0.cs().c({
    name: 'AbstractRecordType'
  }).c({
    name: 'GetRecordByIdResponseType'
  }).c({
    name: 'GetDomainType'
  }).c({
    name: 'GetCapabilitiesType'
  }).c({
    name: 'QueryType'
  }).c({
    name: 'AbstractQueryType'
  }).c({
    name: 'DescribeRecordResponseType'
  }).c({
    name: 'DescribeRecordType'
  }).c({
    name: 'QueryConstraintType'
  }).c({
    name: 'ElementSetNameType'
  }).c({
    name: 'BriefRecordType'
  }).c({
    name: 'GetDomainResponseType'
  }).c({
    name: 'GetRecordsResponseType'
  }).c({
    name: 'RecordType'
  }).c({
    name: 'AcknowledgementType'
  }).c({
    name: 'GetRecordByIdType'
  }).c({
    name: 'GetRecordsType'
  }).c({
    name: 'CapabilitiesType'
  }).c({
    name: 'SummaryRecordType'
  }).c({
    name: 'DCMIRecordType'
  }).c({
    name: 'RangeOfValuesType'
  }).c({
    name: 'RequestStatusType'
  }).c({
    name: 'SchemaComponentType'
  }).c({
    name: 'DomainValuesType'
  }).c({
    name: 'SearchResultsType'
  }).c({
    name: 'RequestBaseType'
  }).c({
    name: 'DistributedSearchType'
  }).c({
    name: 'ListOfValuesType'
  }).c({
    name: 'ConceptualSchemeType'
  }).c({
    name: 'EmptyType'
  }).c({
    name: 'EchoedRequestType'
  });
{
  {
    net.opengis.cat.csw._2_0.AbstractRecordType.ps();
  }
  {
    net.opengis.cat.csw._2_0.GetRecordByIdResponseType.ps().er({
        name: 'abstractRecord',
        collection: true,
        elementName: 'AbstractRecord',
        typeInfo: net.opengis.cat.csw._2_0.AbstractRecordType
      }).ae({
        name: 'any',
        collection: true,
        typedObjectAllowed: true
      });
  }
  {
    net.opengis.cat.csw._2_0.GetDomainType.b(net.opengis.cat.csw._2_0.RequestBaseType);
    net.opengis.cat.csw._2_0.GetDomainType.ps().e({
        name: 'propertyName',
        elementName: 'PropertyName'
      }).e({
        name: 'parameterName',
        elementName: 'ParameterName'
      });
  }
  {
    net.opengis.cat.csw._2_0.GetCapabilitiesType.b(net.opengis.ows.GetCapabilitiesType);
    net.opengis.cat.csw._2_0.GetCapabilitiesType.ps().a({
        name: 'service',
        attributeName: 'service'
      });
  }
  {
    net.opengis.cat.csw._2_0.QueryType.b(net.opengis.cat.csw._2_0.AbstractQueryType);
    net.opengis.cat.csw._2_0.QueryType.ps().e({
        name: 'elementSetName',
        elementName: 'ElementSetName',
        typeInfo: net.opengis.cat.csw._2_0.ElementSetNameType
      }).e({
        name: 'elementName',
        collection: true,
        elementName: 'ElementName',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).e({
        name: 'constraint',
        elementName: 'Constraint',
        typeInfo: net.opengis.cat.csw._2_0.QueryConstraintType
      }).e({
        name: 'sortBy',
        elementName: new Jsonix.XML.QName('http:\/\/www.opengis.net\/ogc', 'SortBy'),
        typeInfo: net.opengis.ogc.SortByType
      }).a({
        name: 'typeNames',
        typeInfo: new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.String.INSTANCE),
        attributeName: 'typeNames'
      });
  }
  {
    net.opengis.cat.csw._2_0.AbstractQueryType.ps();
  }
  {
    net.opengis.cat.csw._2_0.DescribeRecordResponseType.ps().e({
        name: 'schemaComponent',
        collection: true,
        elementName: 'SchemaComponent',
        typeInfo: net.opengis.cat.csw._2_0.SchemaComponentType
      });
  }
  {
    net.opengis.cat.csw._2_0.DescribeRecordType.b(net.opengis.cat.csw._2_0.RequestBaseType);
    net.opengis.cat.csw._2_0.DescribeRecordType.ps().e({
        name: 'typeName',
        collection: true,
        elementName: 'TypeName',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).a({
        name: 'outputFormat',
        attributeName: 'outputFormat'
      }).a({
        name: 'schemaLanguage',
        attributeName: 'schemaLanguage'
      });
  }
  {
    net.opengis.cat.csw._2_0.QueryConstraintType.ps().e({
        name: 'filter',
        elementName: new Jsonix.XML.QName('http:\/\/www.opengis.net\/ogc', 'Filter'),
        typeInfo: net.opengis.ogc.FilterType
      }).e({
        name: 'cqlText',
        elementName: 'CqlText'
      }).a({
        name: 'version',
        attributeName: 'version'
      });
  }
  {
    net.opengis.cat.csw._2_0.ElementSetNameType.ps().v({
        name: 'value',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      }).a({
        name: 'typeNames',
        typeInfo: new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.String.INSTANCE),
        attributeName: 'typeNames'
      });
  }
  {
    net.opengis.cat.csw._2_0.BriefRecordType.b(net.opengis.cat.csw._2_0.AbstractRecordType);
    net.opengis.cat.csw._2_0.BriefRecordType.ps().er({
        name: 'identifier',
        collection: true,
        elementName: new Jsonix.XML.QName('http:\/\/purl.org\/dc\/elements\/1.1\/', 'identifier'),
        typeInfo: org.purl.dc.elements._1.SimpleLiteral
      }).er({
        name: 'title',
        collection: true,
        elementName: new Jsonix.XML.QName('http:\/\/purl.org\/dc\/elements\/1.1\/', 'title'),
        typeInfo: org.purl.dc.elements._1.SimpleLiteral
      }).e({
        name: 'type',
        elementName: new Jsonix.XML.QName('http:\/\/purl.org\/dc\/elements\/1.1\/', 'type'),
        typeInfo: org.purl.dc.elements._1.SimpleLiteral
      }).er({
        name: 'boundingBox',
        collection: true,
        elementName: new Jsonix.XML.QName('http:\/\/www.opengis.net\/ows', 'BoundingBox'),
        typeInfo: net.opengis.ows.BoundingBoxType
      });
  }
  {
    net.opengis.cat.csw._2_0.GetDomainResponseType.ps().e({
        name: 'domainValues',
        collection: true,
        elementName: 'DomainValues',
        typeInfo: net.opengis.cat.csw._2_0.DomainValuesType
      });
  }
  {
    net.opengis.cat.csw._2_0.GetRecordsResponseType.ps().e({
        name: 'requestId',
        elementName: 'RequestId'
      }).e({
        name: 'searchStatus',
        elementName: 'SearchStatus',
        typeInfo: net.opengis.cat.csw._2_0.RequestStatusType
      }).e({
        name: 'searchResults',
        elementName: 'SearchResults',
        typeInfo: net.opengis.cat.csw._2_0.SearchResultsType
      }).a({
        name: 'version',
        attributeName: 'version'
      });
  }
  {
    net.opengis.cat.csw._2_0.RecordType.b(net.opengis.cat.csw._2_0.DCMIRecordType);
    net.opengis.cat.csw._2_0.RecordType.ps().e({
        name: 'anyText',
        collection: true,
        elementName: 'AnyText',
        typeInfo: net.opengis.cat.csw._2_0.EmptyType
      }).er({
        name: 'boundingBox',
        collection: true,
        elementName: new Jsonix.XML.QName('http:\/\/www.opengis.net\/ows', 'BoundingBox'),
        typeInfo: net.opengis.ows.BoundingBoxType
      });
  }
  {
    net.opengis.cat.csw._2_0.AcknowledgementType.ps().e({
        name: 'echoedRequest',
        elementName: 'EchoedRequest',
        typeInfo: net.opengis.cat.csw._2_0.EchoedRequestType
      }).e({
        name: 'requestId',
        elementName: 'RequestId'
      }).a({
        name: 'timeStamp',
        typeInfo: Jsonix.Schema.XSD.Calendar.INSTANCE,
        attributeName: 'timeStamp'
      });
  }
  {
    net.opengis.cat.csw._2_0.GetRecordByIdType.b(net.opengis.cat.csw._2_0.RequestBaseType);
    net.opengis.cat.csw._2_0.GetRecordByIdType.ps().e({
        name: 'id',
        collection: true,
        elementName: 'Id'
      }).e({
        name: 'elementSetName',
        elementName: 'ElementSetName',
        typeInfo: net.opengis.cat.csw._2_0.ElementSetNameType
      }).a({
        name: 'outputFormat',
        attributeName: 'outputFormat'
      }).a({
        name: 'outputSchema',
        attributeName: 'outputSchema'
      });
  }
  {
    net.opengis.cat.csw._2_0.GetRecordsType.b(net.opengis.cat.csw._2_0.RequestBaseType);
    net.opengis.cat.csw._2_0.GetRecordsType.ps().e({
        name: 'distributedSearch',
        elementName: 'DistributedSearch',
        typeInfo: net.opengis.cat.csw._2_0.DistributedSearchType
      }).e({
        name: 'responseHandler',
        collection: true,
        elementName: 'ResponseHandler'
      }).er({
        name: 'abstractQuery',
        elementName: 'AbstractQuery',
        typeInfo: net.opengis.cat.csw._2_0.AbstractQueryType
      }).ae({
        name: 'any',
        typedObjectAllowed: true
      }).a({
        name: 'requestId',
        attributeName: 'requestId'
      }).a({
        name: 'resultType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
        attributeName: 'resultType'
      }).a({
        name: 'outputFormat',
        attributeName: 'outputFormat'
      }).a({
        name: 'outputSchema',
        attributeName: 'outputSchema'
      }).a({
        name: 'startPosition',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE,
        attributeName: 'startPosition'
      }).a({
        name: 'maxRecords',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE,
        attributeName: 'maxRecords'
      });
  }
  {
    net.opengis.cat.csw._2_0.CapabilitiesType.b(net.opengis.ows.CapabilitiesBaseType);
    net.opengis.cat.csw._2_0.CapabilitiesType.ps().e({
        name: 'filterCapabilities',
        elementName: new Jsonix.XML.QName('http:\/\/www.opengis.net\/ogc', 'Filter_Capabilities'),
        typeInfo: net.opengis.ogc.FilterCapabilities
      });
  }
  {
    net.opengis.cat.csw._2_0.SummaryRecordType.b(net.opengis.cat.csw._2_0.AbstractRecordType);
    net.opengis.cat.csw._2_0.SummaryRecordType.ps().er({
        name: 'identifier',
        collection: true,
        elementName: new Jsonix.XML.QName('http:\/\/purl.org\/dc\/elements\/1.1\/', 'identifier'),
        typeInfo: org.purl.dc.elements._1.SimpleLiteral
      }).er({
        name: 'title',
        collection: true,
        elementName: new Jsonix.XML.QName('http:\/\/purl.org\/dc\/elements\/1.1\/', 'title'),
        typeInfo: org.purl.dc.elements._1.SimpleLiteral
      }).e({
        name: 'type',
        elementName: new Jsonix.XML.QName('http:\/\/purl.org\/dc\/elements\/1.1\/', 'type'),
        typeInfo: org.purl.dc.elements._1.SimpleLiteral
      }).e({
        name: 'subject',
        collection: true,
        elementName: new Jsonix.XML.QName('http:\/\/purl.org\/dc\/elements\/1.1\/', 'subject'),
        typeInfo: org.purl.dc.elements._1.SimpleLiteral
      }).er({
        name: 'format',
        collection: true,
        elementName: new Jsonix.XML.QName('http:\/\/purl.org\/dc\/elements\/1.1\/', 'format'),
        typeInfo: org.purl.dc.elements._1.SimpleLiteral
      }).er({
        name: 'relation',
        collection: true,
        elementName: new Jsonix.XML.QName('http:\/\/purl.org\/dc\/elements\/1.1\/', 'relation'),
        typeInfo: org.purl.dc.elements._1.SimpleLiteral
      }).e({
        name: 'modified',
        collection: true,
        elementName: new Jsonix.XML.QName('http:\/\/purl.org\/dc\/terms\/', 'modified'),
        typeInfo: org.purl.dc.elements._1.SimpleLiteral
      }).e({
        name: '_abstract',
        collection: true,
        elementName: new Jsonix.XML.QName('http:\/\/purl.org\/dc\/terms\/', 'abstract'),
        typeInfo: org.purl.dc.elements._1.SimpleLiteral
      }).e({
        name: 'spatial',
        collection: true,
        elementName: new Jsonix.XML.QName('http:\/\/purl.org\/dc\/terms\/', 'spatial'),
        typeInfo: org.purl.dc.elements._1.SimpleLiteral
      }).er({
        name: 'boundingBox',
        collection: true,
        elementName: new Jsonix.XML.QName('http:\/\/www.opengis.net\/ows', 'BoundingBox'),
        typeInfo: net.opengis.ows.BoundingBoxType
      });
  }
  {
    net.opengis.cat.csw._2_0.DCMIRecordType.b(net.opengis.cat.csw._2_0.AbstractRecordType);
    net.opengis.cat.csw._2_0.DCMIRecordType.ps().er({
        name: 'dcElement',
        collection: true,
        elementName: new Jsonix.XML.QName('http:\/\/purl.org\/dc\/elements\/1.1\/', 'DC-element'),
        typeInfo: org.purl.dc.elements._1.SimpleLiteral
      });
  }
  {
    net.opengis.cat.csw._2_0.RangeOfValuesType.ps().e({
        name: 'minValue',
        elementName: 'MinValue',
        typeInfo: Jsonix.Schema.XSD.AnyType.INSTANCE
      }).e({
        name: 'maxValue',
        elementName: 'MaxValue',
        typeInfo: Jsonix.Schema.XSD.AnyType.INSTANCE
      });
  }
  {
    net.opengis.cat.csw._2_0.RequestStatusType.ps().a({
        name: 'timestamp',
        typeInfo: Jsonix.Schema.XSD.Calendar.INSTANCE,
        attributeName: 'timestamp'
      });
  }
  {
    net.opengis.cat.csw._2_0.SchemaComponentType.ps().ae({
        name: 'content',
        collection: true,
        domAllowed: true,
        typedObjectAllowed: true,
        mixed: true
      }).a({
        name: 'targetNamespace',
        attributeName: 'targetNamespace'
      }).a({
        name: 'parentSchema',
        attributeName: 'parentSchema'
      }).a({
        name: 'schemaLanguage',
        attributeName: 'schemaLanguage'
      });
  }
  {
    net.opengis.cat.csw._2_0.DomainValuesType.ps().e({
        name: 'propertyName',
        elementName: 'PropertyName'
      }).e({
        name: 'parameterName',
        elementName: 'ParameterName'
      }).e({
        name: 'listOfValues',
        elementName: 'ListOfValues',
        typeInfo: net.opengis.cat.csw._2_0.ListOfValuesType
      }).e({
        name: 'conceptualScheme',
        elementName: 'ConceptualScheme',
        typeInfo: net.opengis.cat.csw._2_0.ConceptualSchemeType
      }).e({
        name: 'rangeOfValues',
        elementName: 'RangeOfValues',
        typeInfo: net.opengis.cat.csw._2_0.RangeOfValuesType
      }).a({
        name: 'type',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
        attributeName: 'type'
      }).a({
        name: 'uom',
        attributeName: 'uom'
      });
  }
  {
    net.opengis.cat.csw._2_0.SearchResultsType.ps().er({
        name: 'abstractRecord',
        collection: true,
        elementName: 'AbstractRecord',
        typeInfo: net.opengis.cat.csw._2_0.AbstractRecordType
      }).ae({
        name: 'any',
        collection: true,
        typedObjectAllowed: true
      }).a({
        name: 'resultSetId',
        attributeName: 'resultSetId'
      }).a({
        name: 'elementSet',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
        attributeName: 'elementSet'
      }).a({
        name: 'recordSchema',
        attributeName: 'recordSchema'
      }).a({
        name: 'numberOfRecordsMatched',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE,
        attributeName: 'numberOfRecordsMatched'
      }).a({
        name: 'numberOfRecordsReturned',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE,
        attributeName: 'numberOfRecordsReturned'
      }).a({
        name: 'nextRecord',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE,
        attributeName: 'nextRecord'
      }).a({
        name: 'expires',
        typeInfo: Jsonix.Schema.XSD.Calendar.INSTANCE,
        attributeName: 'expires'
      });
  }
  {
    net.opengis.cat.csw._2_0.RequestBaseType.ps().a({
        name: 'service',
        attributeName: 'service'
      }).a({
        name: 'version',
        attributeName: 'version'
      });
  }
  {
    net.opengis.cat.csw._2_0.DistributedSearchType.ps().a({
        name: 'hopCount',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE,
        attributeName: 'hopCount'
      });
  }
  {
    net.opengis.cat.csw._2_0.ListOfValuesType.ps().e({
        name: 'value',
        collection: true,
        elementName: 'Value',
        typeInfo: Jsonix.Schema.XSD.AnyType.INSTANCE
      });
  }
  {
    net.opengis.cat.csw._2_0.ConceptualSchemeType.ps().e({
        name: 'name',
        elementName: 'Name'
      }).e({
        name: 'document',
        elementName: 'Document'
      }).e({
        name: 'authority',
        elementName: 'Authority'
      });
  }
  {
    net.opengis.cat.csw._2_0.EmptyType.ps();
  }
  {
    net.opengis.cat.csw._2_0.EchoedRequestType.ps().ae({
        name: 'any',
        domAllowed: true,
        typedObjectAllowed: true
      });
  }
}
net.opengis.cat.csw._2_0.es().e({
    elementName: 'AbstractQuery',
    typeInfo: net.opengis.cat.csw._2_0.AbstractQueryType
  }).e({
    elementName: 'Acknowledgement',
    typeInfo: net.opengis.cat.csw._2_0.AcknowledgementType
  }).e({
    elementName: 'Constraint',
    typeInfo: net.opengis.cat.csw._2_0.QueryConstraintType
  }).e({
    elementName: 'ElementSetName',
    typeInfo: net.opengis.cat.csw._2_0.ElementSetNameType
  }).e({
    elementName: 'SummaryRecord',
    typeInfo: net.opengis.cat.csw._2_0.SummaryRecordType,
    substitutionHead: 'AbstractRecord'
  }).e({
    elementName: 'Query',
    typeInfo: net.opengis.cat.csw._2_0.QueryType,
    substitutionHead: 'AbstractQuery'
  }).e({
    elementName: 'AbstractRecord',
    typeInfo: net.opengis.cat.csw._2_0.AbstractRecordType
  }).e({
    elementName: 'GetDomainResponse',
    typeInfo: net.opengis.cat.csw._2_0.GetDomainResponseType
  }).e({
    elementName: 'GetRecordByIdResponse',
    typeInfo: net.opengis.cat.csw._2_0.GetRecordByIdResponseType
  }).e({
    elementName: 'DescribeRecordResponse',
    typeInfo: net.opengis.cat.csw._2_0.DescribeRecordResponseType
  }).e({
    elementName: 'GetRecords',
    typeInfo: net.opengis.cat.csw._2_0.GetRecordsType
  }).e({
    elementName: 'GetRecordsResponse',
    typeInfo: net.opengis.cat.csw._2_0.GetRecordsResponseType
  }).e({
    elementName: 'DCMIRecord',
    typeInfo: net.opengis.cat.csw._2_0.DCMIRecordType,
    substitutionHead: 'AbstractRecord'
  }).e({
    elementName: 'DescribeRecord',
    typeInfo: net.opengis.cat.csw._2_0.DescribeRecordType
  }).e({
    elementName: 'Record',
    typeInfo: net.opengis.cat.csw._2_0.RecordType,
    substitutionHead: 'AbstractRecord'
  }).e({
    elementName: 'BriefRecord',
    typeInfo: net.opengis.cat.csw._2_0.BriefRecordType,
    substitutionHead: 'AbstractRecord'
  }).e({
    elementName: 'GetCapabilities',
    typeInfo: net.opengis.cat.csw._2_0.GetCapabilitiesType
  }).e({
    elementName: 'Capabilities',
    typeInfo: net.opengis.cat.csw._2_0.CapabilitiesType
  }).e({
    elementName: 'GetRecordById',
    typeInfo: net.opengis.cat.csw._2_0.GetRecordByIdType
  }).e({
    elementName: 'GetDomain',
    typeInfo: net.opengis.cat.csw._2_0.GetDomainType
  });