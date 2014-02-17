WMS_V_1_3_0 = {
  defaultElementNamespaceURI: 'http:\/\/www.opengis.net\/wms'
};
WMS_V_1_3_0.cs().c({
    name: 'Service'
  }).c({
    name: 'KeywordList'
  }).c({
    name: 'Keyword'
  }).c({
    name: 'OnlineResource'
  }).c({
    name: 'ContactInformation'
  }).c({
    name: 'ContactPersonPrimary'
  }).c({
    name: 'ContactAddress'
  }).c({
    name: 'Attribution'
  }).c({
    name: 'LogoURL'
  }).c({
    name: 'HTTP'
  }).c({
    name: 'Get'
  }).c({
    name: 'Post'
  }).c({
    name: 'AuthorityURL'
  }).c({
    name: 'Style'
  }).c({
    name: 'LegendURL'
  }).c({
    name: 'StyleSheetURL'
  }).c({
    name: 'StyleURL'
  }).c({
    name: 'WMSCapabilities'
  }).c({
    name: 'Capability'
  }).c({
    name: 'Request'
  }).c({
    name: 'OperationType'
  }).c({
    name: 'Exception'
  }).c({
    name: 'Layer'
  }).c({
    name: 'EXGeographicBoundingBox'
  }).c({
    name: 'BoundingBox'
  }).c({
    name: 'Dimension'
  }).c({
    name: 'Identifier'
  }).c({
    name: 'MetadataURL'
  }).c({
    name: 'DataURL'
  }).c({
    name: 'FeatureListURL'
  }).c({
    name: 'DCPType'
  }).c({
    name: 'ServiceExceptionReport'
  }).c({
    name: 'ServiceExceptionType'
  });
{
  {
    WMS_V_1_3_0.Service.ps().e({
        name: 'name',
        elementName: 'Name'
      }).e({
        name: 'title',
        elementName: 'Title'
      }).e({
        name: '_abstract',
        elementName: 'Abstract'
      }).e({
        name: 'keywordList',
        elementName: 'KeywordList',
        typeInfo: WMS_V_1_3_0.KeywordList
      }).e({
        name: 'onlineResource',
        elementName: 'OnlineResource',
        typeInfo: WMS_V_1_3_0.OnlineResource
      }).e({
        name: 'contactInformation',
        elementName: 'ContactInformation',
        typeInfo: WMS_V_1_3_0.ContactInformation
      }).e({
        name: 'fees',
        elementName: 'Fees'
      }).e({
        name: 'accessConstraints',
        elementName: 'AccessConstraints'
      }).e({
        name: 'layerLimit',
        elementName: 'LayerLimit',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE
      }).e({
        name: 'maxWidth',
        elementName: 'MaxWidth',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE
      }).e({
        name: 'maxHeight',
        elementName: 'MaxHeight',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE
      });
  }
  {
    WMS_V_1_3_0.KeywordList.ps().e({
        name: 'keyword',
        collection: true,
        elementName: 'Keyword',
        typeInfo: WMS_V_1_3_0.Keyword
      });
  }
  {
    WMS_V_1_3_0.Keyword.ps().v({
        name: 'value'
      }).a({
        name: 'vocabulary',
        attributeName: 'vocabulary'
      });
  }
  {
    WMS_V_1_3_0.OnlineResource.ps().a({
        name: 'type',
        attributeName: new Jsonix.XML.QName('http:\/\/www.w3.org\/1999\/xlink', 'type')
      }).a({
        name: 'href',
        attributeName: new Jsonix.XML.QName('http:\/\/www.w3.org\/1999\/xlink', 'href')
      }).a({
        name: 'role',
        attributeName: new Jsonix.XML.QName('http:\/\/www.w3.org\/1999\/xlink', 'role')
      }).a({
        name: 'arcrole',
        attributeName: new Jsonix.XML.QName('http:\/\/www.w3.org\/1999\/xlink', 'arcrole')
      }).a({
        name: 'title',
        attributeName: new Jsonix.XML.QName('http:\/\/www.w3.org\/1999\/xlink', 'title')
      }).a({
        name: 'show',
        attributeName: new Jsonix.XML.QName('http:\/\/www.w3.org\/1999\/xlink', 'show')
      }).a({
        name: 'actuate',
        attributeName: new Jsonix.XML.QName('http:\/\/www.w3.org\/1999\/xlink', 'actuate')
      });
  }
  {
    WMS_V_1_3_0.ContactInformation.ps().e({
        name: 'contactPersonPrimary',
        elementName: 'ContactPersonPrimary',
        typeInfo: WMS_V_1_3_0.ContactPersonPrimary
      }).e({
        name: 'contactPosition',
        elementName: 'ContactPosition'
      }).e({
        name: 'contactAddress',
        elementName: 'ContactAddress',
        typeInfo: WMS_V_1_3_0.ContactAddress
      }).e({
        name: 'contactVoiceTelephone',
        elementName: 'ContactVoiceTelephone'
      }).e({
        name: 'contactFacsimileTelephone',
        elementName: 'ContactFacsimileTelephone'
      }).e({
        name: 'contactElectronicMailAddress',
        elementName: 'ContactElectronicMailAddress'
      });
  }
  {
    WMS_V_1_3_0.ContactPersonPrimary.ps().e({
        name: 'contactPerson',
        elementName: 'ContactPerson'
      }).e({
        name: 'contactOrganization',
        elementName: 'ContactOrganization'
      });
  }
  {
    WMS_V_1_3_0.ContactAddress.ps().e({
        name: 'addressType',
        elementName: 'AddressType'
      }).e({
        name: 'address',
        elementName: 'Address'
      }).e({
        name: 'city',
        elementName: 'City'
      }).e({
        name: 'stateOrProvince',
        elementName: 'StateOrProvince'
      }).e({
        name: 'postCode',
        elementName: 'PostCode'
      }).e({
        name: 'country',
        elementName: 'Country'
      });
  }
  {
    WMS_V_1_3_0.Attribution.ps().e({
        name: 'title',
        elementName: 'Title'
      }).e({
        name: 'onlineResource',
        elementName: 'OnlineResource',
        typeInfo: WMS_V_1_3_0.OnlineResource
      }).e({
        name: 'logoURL',
        elementName: 'LogoURL',
        typeInfo: WMS_V_1_3_0.LogoURL
      });
  }
  {
    WMS_V_1_3_0.LogoURL.ps().e({
        name: 'format',
        elementName: 'Format'
      }).e({
        name: 'onlineResource',
        elementName: 'OnlineResource',
        typeInfo: WMS_V_1_3_0.OnlineResource
      }).a({
        name: 'width',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE,
        attributeName: 'width'
      }).a({
        name: 'height',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE,
        attributeName: 'height'
      });
  }
  {
    WMS_V_1_3_0.HTTP.ps().e({
        name: 'get',
        elementName: 'Get',
        typeInfo: WMS_V_1_3_0.Get
      }).e({
        name: 'post',
        elementName: 'Post',
        typeInfo: WMS_V_1_3_0.Post
      });
  }
  {
    WMS_V_1_3_0.Get.ps().e({
        name: 'onlineResource',
        elementName: 'OnlineResource',
        typeInfo: WMS_V_1_3_0.OnlineResource
      });
  }
  {
    WMS_V_1_3_0.Post.ps().e({
        name: 'onlineResource',
        elementName: 'OnlineResource',
        typeInfo: WMS_V_1_3_0.OnlineResource
      });
  }
  {
    WMS_V_1_3_0.AuthorityURL.ps().e({
        name: 'onlineResource',
        elementName: 'OnlineResource',
        typeInfo: WMS_V_1_3_0.OnlineResource
      }).a({
        name: 'name',
        attributeName: 'name'
      });
  }
  {
    WMS_V_1_3_0.Style.ps().e({
        name: 'name',
        elementName: 'Name'
      }).e({
        name: 'title',
        elementName: 'Title'
      }).e({
        name: '_abstract',
        elementName: 'Abstract'
      }).e({
        name: 'legendURL',
        collection: true,
        elementName: 'LegendURL',
        typeInfo: WMS_V_1_3_0.LegendURL
      }).e({
        name: 'styleSheetURL',
        elementName: 'StyleSheetURL',
        typeInfo: WMS_V_1_3_0.StyleSheetURL
      }).e({
        name: 'styleURL',
        elementName: 'StyleURL',
        typeInfo: WMS_V_1_3_0.StyleURL
      });
  }
  {
    WMS_V_1_3_0.LegendURL.ps().e({
        name: 'format',
        elementName: 'Format'
      }).e({
        name: 'onlineResource',
        elementName: 'OnlineResource',
        typeInfo: WMS_V_1_3_0.OnlineResource
      }).a({
        name: 'width',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE,
        attributeName: 'width'
      }).a({
        name: 'height',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE,
        attributeName: 'height'
      });
  }
  {
    WMS_V_1_3_0.StyleSheetURL.ps().e({
        name: 'format',
        elementName: 'Format'
      }).e({
        name: 'onlineResource',
        elementName: 'OnlineResource',
        typeInfo: WMS_V_1_3_0.OnlineResource
      });
  }
  {
    WMS_V_1_3_0.StyleURL.ps().e({
        name: 'format',
        elementName: 'Format'
      }).e({
        name: 'onlineResource',
        elementName: 'OnlineResource',
        typeInfo: WMS_V_1_3_0.OnlineResource
      });
  }
  {
    WMS_V_1_3_0.WMSCapabilities.ps().e({
        name: 'service',
        elementName: 'Service',
        typeInfo: WMS_V_1_3_0.Service
      }).e({
        name: 'capability',
        elementName: 'Capability',
        typeInfo: WMS_V_1_3_0.Capability
      }).a({
        name: 'version',
        attributeName: 'version'
      }).a({
        name: 'updateSequence',
        attributeName: 'updateSequence'
      });
  }
  {
    WMS_V_1_3_0.Capability.ps().e({
        name: 'request',
        elementName: 'Request',
        typeInfo: WMS_V_1_3_0.Request
      }).e({
        name: 'exception',
        elementName: 'Exception',
        typeInfo: WMS_V_1_3_0.Exception
      }).ae({
        name: 'extendedCapabilities',
        collection: true,
        domAllowed: true
      }).e({
        name: 'layer',
        elementName: 'Layer',
        typeInfo: WMS_V_1_3_0.Layer
      });
  }
  {
    WMS_V_1_3_0.Request.ps().e({
        name: 'getCapabilities',
        elementName: 'GetCapabilities',
        typeInfo: WMS_V_1_3_0.OperationType
      }).e({
        name: 'getMap',
        elementName: 'GetMap',
        typeInfo: WMS_V_1_3_0.OperationType
      }).e({
        name: 'getFeatureInfo',
        elementName: 'GetFeatureInfo',
        typeInfo: WMS_V_1_3_0.OperationType
      }).e({
        name: 'extendedOperation',
        collection: true,
        elementName: '_ExtendedOperation',
        typeInfo: WMS_V_1_3_0.OperationType
      });
  }
  {
    WMS_V_1_3_0.OperationType.ps().e({
        name: 'format',
        collection: true,
        elementName: 'Format'
      }).e({
        name: 'dcpType',
        collection: true,
        elementName: 'DCPType',
        typeInfo: WMS_V_1_3_0.DCPType
      });
  }
  {
    WMS_V_1_3_0.Exception.ps().e({
        name: 'format',
        collection: true,
        elementName: 'Format'
      });
  }
  {
    WMS_V_1_3_0.Layer.ps().e({
        name: 'name',
        elementName: 'Name'
      }).e({
        name: 'title',
        elementName: 'Title'
      }).e({
        name: '_abstract',
        elementName: 'Abstract'
      }).e({
        name: 'keywordList',
        elementName: 'KeywordList',
        typeInfo: WMS_V_1_3_0.KeywordList
      }).e({
        name: 'crs',
        collection: true,
        elementName: 'CRS'
      }).e({
        name: 'exGeographicBoundingBox',
        elementName: 'EX_GeographicBoundingBox',
        typeInfo: WMS_V_1_3_0.EXGeographicBoundingBox
      }).e({
        name: 'boundingBox',
        collection: true,
        elementName: 'BoundingBox',
        typeInfo: WMS_V_1_3_0.BoundingBox
      }).e({
        name: 'dimension',
        collection: true,
        elementName: 'Dimension',
        typeInfo: WMS_V_1_3_0.Dimension
      }).e({
        name: 'attribution',
        elementName: 'Attribution',
        typeInfo: WMS_V_1_3_0.Attribution
      }).e({
        name: 'authorityURL',
        collection: true,
        elementName: 'AuthorityURL',
        typeInfo: WMS_V_1_3_0.AuthorityURL
      }).e({
        name: 'identifier',
        collection: true,
        elementName: 'Identifier',
        typeInfo: WMS_V_1_3_0.Identifier
      }).e({
        name: 'metadataURL',
        collection: true,
        elementName: 'MetadataURL',
        typeInfo: WMS_V_1_3_0.MetadataURL
      }).e({
        name: 'dataURL',
        collection: true,
        elementName: 'DataURL',
        typeInfo: WMS_V_1_3_0.DataURL
      }).e({
        name: 'featureListURL',
        collection: true,
        elementName: 'FeatureListURL',
        typeInfo: WMS_V_1_3_0.FeatureListURL
      }).e({
        name: 'style',
        collection: true,
        elementName: 'Style',
        typeInfo: WMS_V_1_3_0.Style
      }).e({
        name: 'minScaleDenominator',
        elementName: 'MinScaleDenominator',
        typeInfo: Jsonix.Schema.XSD.Double.INSTANCE
      }).e({
        name: 'maxScaleDenominator',
        elementName: 'MaxScaleDenominator',
        typeInfo: Jsonix.Schema.XSD.Double.INSTANCE
      }).e({
        name: 'layer',
        collection: true,
        elementName: 'Layer',
        typeInfo: WMS_V_1_3_0.Layer
      }).a({
        name: 'queryable',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE,
        attributeName: 'queryable'
      }).a({
        name: 'cascaded',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE,
        attributeName: 'cascaded'
      }).a({
        name: 'opaque',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE,
        attributeName: 'opaque'
      }).a({
        name: 'noSubsets',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE,
        attributeName: 'noSubsets'
      }).a({
        name: 'fixedWidth',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE,
        attributeName: 'fixedWidth'
      }).a({
        name: 'fixedHeight',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE,
        attributeName: 'fixedHeight'
      });
  }
  {
    WMS_V_1_3_0.EXGeographicBoundingBox.ps().e({
        name: 'westBoundLongitude',
        elementName: 'westBoundLongitude',
        typeInfo: Jsonix.Schema.XSD.Double.INSTANCE
      }).e({
        name: 'eastBoundLongitude',
        elementName: 'eastBoundLongitude',
        typeInfo: Jsonix.Schema.XSD.Double.INSTANCE
      }).e({
        name: 'southBoundLatitude',
        elementName: 'southBoundLatitude',
        typeInfo: Jsonix.Schema.XSD.Double.INSTANCE
      }).e({
        name: 'northBoundLatitude',
        elementName: 'northBoundLatitude',
        typeInfo: Jsonix.Schema.XSD.Double.INSTANCE
      });
  }
  {
    WMS_V_1_3_0.BoundingBox.ps().a({
        name: 'crs',
        attributeName: 'CRS'
      }).a({
        name: 'minx',
        typeInfo: Jsonix.Schema.XSD.Double.INSTANCE,
        attributeName: 'minx'
      }).a({
        name: 'miny',
        typeInfo: Jsonix.Schema.XSD.Double.INSTANCE,
        attributeName: 'miny'
      }).a({
        name: 'maxx',
        typeInfo: Jsonix.Schema.XSD.Double.INSTANCE,
        attributeName: 'maxx'
      }).a({
        name: 'maxy',
        typeInfo: Jsonix.Schema.XSD.Double.INSTANCE,
        attributeName: 'maxy'
      }).a({
        name: 'resx',
        typeInfo: Jsonix.Schema.XSD.Double.INSTANCE,
        attributeName: 'resx'
      }).a({
        name: 'resy',
        typeInfo: Jsonix.Schema.XSD.Double.INSTANCE,
        attributeName: 'resy'
      });
  }
  {
    WMS_V_1_3_0.Dimension.ps().v({
        name: 'value'
      }).a({
        name: 'name',
        attributeName: 'name'
      }).a({
        name: 'units',
        attributeName: 'units'
      }).a({
        name: 'unitSymbol',
        attributeName: 'unitSymbol'
      }).a({
        name: '_default',
        attributeName: 'default'
      }).a({
        name: 'multipleValues',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE,
        attributeName: 'multipleValues'
      }).a({
        name: 'nearestValue',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE,
        attributeName: 'nearestValue'
      }).a({
        name: 'current',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE,
        attributeName: 'current'
      });
  }
  {
    WMS_V_1_3_0.Identifier.ps().v({
        name: 'value'
      }).a({
        name: 'authority',
        attributeName: 'authority'
      });
  }
  {
    WMS_V_1_3_0.MetadataURL.ps().e({
        name: 'format',
        elementName: 'Format'
      }).e({
        name: 'onlineResource',
        elementName: 'OnlineResource',
        typeInfo: WMS_V_1_3_0.OnlineResource
      }).a({
        name: 'type',
        attributeName: 'type'
      });
  }
  {
    WMS_V_1_3_0.DataURL.ps().e({
        name: 'format',
        elementName: 'Format'
      }).e({
        name: 'onlineResource',
        elementName: 'OnlineResource',
        typeInfo: WMS_V_1_3_0.OnlineResource
      });
  }
  {
    WMS_V_1_3_0.FeatureListURL.ps().e({
        name: 'format',
        elementName: 'Format'
      }).e({
        name: 'onlineResource',
        elementName: 'OnlineResource',
        typeInfo: WMS_V_1_3_0.OnlineResource
      });
  }
  {
    WMS_V_1_3_0.DCPType.ps().e({
        name: 'http',
        elementName: 'HTTP',
        typeInfo: WMS_V_1_3_0.HTTP
      });
  }
  {
    WMS_V_1_3_0.ServiceExceptionReport.ps().e({
        name: 'serviceException',
        collection: true,
        elementName: new Jsonix.XML.QName('http:\/\/www.opengis.net\/ogc', 'ServiceException'),
        typeInfo: WMS_V_1_3_0.ServiceExceptionType
      }).a({
        name: 'version',
        attributeName: 'version'
      });
  }
  {
    WMS_V_1_3_0.ServiceExceptionType.ps().v({
        name: 'value'
      }).a({
        name: 'code',
        attributeName: 'code'
      }).a({
        name: 'locator',
        attributeName: 'locator'
      });
  }
}
WMS_V_1_3_0.es().e({
    elementName: 'Service',
    typeInfo: WMS_V_1_3_0.Service
  }).e({
    elementName: 'KeywordList',
    typeInfo: WMS_V_1_3_0.KeywordList
  }).e({
    elementName: 'Keyword',
    typeInfo: WMS_V_1_3_0.Keyword
  }).e({
    elementName: 'OnlineResource',
    typeInfo: WMS_V_1_3_0.OnlineResource
  }).e({
    elementName: 'ContactInformation',
    typeInfo: WMS_V_1_3_0.ContactInformation
  }).e({
    elementName: 'ContactPersonPrimary',
    typeInfo: WMS_V_1_3_0.ContactPersonPrimary
  }).e({
    elementName: 'ContactAddress',
    typeInfo: WMS_V_1_3_0.ContactAddress
  }).e({
    elementName: 'Attribution',
    typeInfo: WMS_V_1_3_0.Attribution
  }).e({
    elementName: 'LogoURL',
    typeInfo: WMS_V_1_3_0.LogoURL
  }).e({
    elementName: 'HTTP',
    typeInfo: WMS_V_1_3_0.HTTP
  }).e({
    elementName: 'Get',
    typeInfo: WMS_V_1_3_0.Get
  }).e({
    elementName: 'Post',
    typeInfo: WMS_V_1_3_0.Post
  }).e({
    elementName: 'AuthorityURL',
    typeInfo: WMS_V_1_3_0.AuthorityURL
  }).e({
    elementName: 'Style',
    typeInfo: WMS_V_1_3_0.Style
  }).e({
    elementName: 'LegendURL',
    typeInfo: WMS_V_1_3_0.LegendURL
  }).e({
    elementName: 'StyleSheetURL',
    typeInfo: WMS_V_1_3_0.StyleSheetURL
  }).e({
    elementName: 'StyleURL',
    typeInfo: WMS_V_1_3_0.StyleURL
  }).e({
    elementName: 'WMS_Capabilities',
    typeInfo: WMS_V_1_3_0.WMSCapabilities
  }).e({
    elementName: 'Capability',
    typeInfo: WMS_V_1_3_0.Capability
  }).e({
    elementName: 'Request',
    typeInfo: WMS_V_1_3_0.Request
  }).e({
    elementName: 'Exception',
    typeInfo: WMS_V_1_3_0.Exception
  }).e({
    elementName: 'Layer',
    typeInfo: WMS_V_1_3_0.Layer
  }).e({
    elementName: 'EX_GeographicBoundingBox',
    typeInfo: WMS_V_1_3_0.EXGeographicBoundingBox
  }).e({
    elementName: 'BoundingBox',
    typeInfo: WMS_V_1_3_0.BoundingBox
  }).e({
    elementName: 'Dimension',
    typeInfo: WMS_V_1_3_0.Dimension
  }).e({
    elementName: 'Identifier',
    typeInfo: WMS_V_1_3_0.Identifier
  }).e({
    elementName: 'MetadataURL',
    typeInfo: WMS_V_1_3_0.MetadataURL
  }).e({
    elementName: 'DataURL',
    typeInfo: WMS_V_1_3_0.DataURL
  }).e({
    elementName: 'FeatureListURL',
    typeInfo: WMS_V_1_3_0.FeatureListURL
  }).e({
    elementName: 'DCPType',
    typeInfo: WMS_V_1_3_0.DCPType
  }).e({
    elementName: new Jsonix.XML.QName('http:\/\/www.opengis.net\/ogc', 'ServiceExceptionReport'),
    typeInfo: WMS_V_1_3_0.ServiceExceptionReport
  }).e({
    elementName: 'Name',
    typeInfo: Jsonix.Schema.XSD.String.INSTANCE
  }).e({
    elementName: 'MinScaleDenominator',
    typeInfo: Jsonix.Schema.XSD.Double.INSTANCE
  }).e({
    elementName: 'PostCode',
    typeInfo: Jsonix.Schema.XSD.String.INSTANCE
  }).e({
    elementName: 'MaxHeight',
    typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE
  }).e({
    elementName: 'Address',
    typeInfo: Jsonix.Schema.XSD.String.INSTANCE
  }).e({
    elementName: 'ContactFacsimileTelephone',
    typeInfo: Jsonix.Schema.XSD.String.INSTANCE
  }).e({
    elementName: 'AddressType',
    typeInfo: Jsonix.Schema.XSD.String.INSTANCE
  }).e({
    elementName: 'ContactVoiceTelephone',
    typeInfo: Jsonix.Schema.XSD.String.INSTANCE
  }).e({
    elementName: 'Abstract',
    typeInfo: Jsonix.Schema.XSD.String.INSTANCE
  }).e({
    elementName: 'MaxWidth',
    typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE
  }).e({
    elementName: 'AccessConstraints',
    typeInfo: Jsonix.Schema.XSD.String.INSTANCE
  }).e({
    elementName: '_ExtendedCapabilities',
    typeInfo: Jsonix.Schema.XSD.AnyType.INSTANCE
  }).e({
    elementName: 'ContactPerson',
    typeInfo: Jsonix.Schema.XSD.String.INSTANCE
  }).e({
    elementName: 'GetCapabilities',
    typeInfo: WMS_V_1_3_0.OperationType
  }).e({
    elementName: 'LayerLimit',
    typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE
  }).e({
    elementName: 'ContactOrganization',
    typeInfo: Jsonix.Schema.XSD.String.INSTANCE
  }).e({
    elementName: '_ExtendedOperation',
    typeInfo: WMS_V_1_3_0.OperationType
  }).e({
    elementName: 'Country',
    typeInfo: Jsonix.Schema.XSD.String.INSTANCE
  }).e({
    elementName: 'City',
    typeInfo: Jsonix.Schema.XSD.String.INSTANCE
  }).e({
    elementName: 'Title',
    typeInfo: Jsonix.Schema.XSD.String.INSTANCE
  }).e({
    elementName: 'Fees',
    typeInfo: Jsonix.Schema.XSD.String.INSTANCE
  }).e({
    elementName: 'GetMap',
    typeInfo: WMS_V_1_3_0.OperationType
  }).e({
    elementName: 'GetFeatureInfo',
    typeInfo: WMS_V_1_3_0.OperationType
  }).e({
    elementName: 'StateOrProvince',
    typeInfo: Jsonix.Schema.XSD.String.INSTANCE
  }).e({
    elementName: 'Format',
    typeInfo: Jsonix.Schema.XSD.String.INSTANCE
  }).e({
    elementName: 'CRS',
    typeInfo: Jsonix.Schema.XSD.String.INSTANCE
  }).e({
    elementName: 'MaxScaleDenominator',
    typeInfo: Jsonix.Schema.XSD.Double.INSTANCE
  }).e({
    elementName: 'ContactElectronicMailAddress',
    typeInfo: Jsonix.Schema.XSD.String.INSTANCE
  }).e({
    elementName: 'ContactPosition',
    typeInfo: Jsonix.Schema.XSD.String.INSTANCE
  });