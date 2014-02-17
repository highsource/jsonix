if (typeof net === 'undefined') {
  net = {};
}
if (typeof net.opengis === 'undefined') {
  net.opengis = {};
}
net.opengis.ows = new Jsonix.Model.Module({
    defaultElementNamespaceURI: 'http:\/\/www.opengis.net\/ows',
    defaultAttributeNamespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
  });
net.opengis.ows.cs().c({
    name: 'ExceptionType'
  }).c({
    name: 'Operation'
  }).c({
    name: 'DCP'
  }).c({
    name: 'HTTP'
  }).c({
    name: 'RequestMethodType'
  }).c({
    name: 'DomainType'
  }).c({
    name: 'MetadataType'
  }).c({
    name: 'ServiceProvider'
  }).c({
    name: 'OnlineResourceType'
  }).c({
    name: 'ResponsiblePartySubsetType'
  }).c({
    name: 'OperationsMetadata'
  }).c({
    name: 'CodeType'
  }).c({
    name: 'KeywordsType'
  }).c({
    name: 'ResponsiblePartyType'
  }).c({
    name: 'GetCapabilitiesType'
  }).c({
    name: 'ServiceIdentification'
  }).c({
    name: 'DescriptionType'
  }).c({
    name: 'ExceptionReport'
  }).c({
    name: 'BoundingBoxType'
  }).c({
    name: 'ContactType'
  }).c({
    name: 'WGS84BoundingBoxType'
  }).c({
    name: 'AcceptFormatsType'
  }).c({
    name: 'SectionsType'
  }).c({
    name: 'TelephoneType'
  }).c({
    name: 'IdentificationType'
  }).c({
    name: 'AddressType'
  }).c({
    name: 'AcceptVersionsType'
  }).c({
    name: 'CapabilitiesBaseType'
  });
{
  {
    net.opengis.ows.ExceptionType.ps().e({
        name: 'exceptionText',
        collection: true,
        elementName: 'ExceptionText'
      }).a({
        name: 'exceptionCode',
        attributeName: new Jsonix.XML.QName('exceptionCode')
      }).a({
        name: 'locator',
        attributeName: new Jsonix.XML.QName('locator')
      });
  }
  {
    net.opengis.ows.Operation.ps().e({
        name: 'dcp',
        collection: true,
        elementName: 'DCP',
        typeInfo: net.opengis.ows.DCP
      }).e({
        name: 'parameter',
        collection: true,
        elementName: 'Parameter',
        typeInfo: net.opengis.ows.DomainType
      }).e({
        name: 'constraint',
        collection: true,
        elementName: 'Constraint',
        typeInfo: net.opengis.ows.DomainType
      }).e({
        name: 'metadata',
        collection: true,
        elementName: 'Metadata',
        typeInfo: net.opengis.ows.MetadataType
      }).a({
        name: 'name',
        attributeName: new Jsonix.XML.QName('name')
      });
  }
  {
    net.opengis.ows.DCP.ps().e({
        name: 'http',
        elementName: 'HTTP',
        typeInfo: net.opengis.ows.HTTP
      });
  }
  {
    net.opengis.ows.HTTP.ps().ers({
        name: 'getOrPost',
        collection: true,
        elementTypeInfos: [{
            elementName: 'Post',
            typeInfo: net.opengis.ows.RequestMethodType
          }, {
            elementName: 'Get',
            typeInfo: net.opengis.ows.RequestMethodType
          }]
      });
  }
  {
    net.opengis.ows.RequestMethodType.b(net.opengis.ows.OnlineResourceType);
    net.opengis.ows.RequestMethodType.ps().e({
        name: 'constraint',
        collection: true,
        elementName: 'Constraint',
        typeInfo: net.opengis.ows.DomainType
      });
  }
  {
    net.opengis.ows.DomainType.ps().e({
        name: 'value',
        collection: true,
        elementName: 'Value'
      }).e({
        name: 'metadata',
        collection: true,
        elementName: 'Metadata',
        typeInfo: net.opengis.ows.MetadataType
      }).a({
        name: 'name',
        attributeName: new Jsonix.XML.QName('name')
      });
  }
  {
    net.opengis.ows.MetadataType.ps().e({
        name: 'abstractMetaData',
        elementName: 'AbstractMetaData',
        typeInfo: Jsonix.Schema.XSD.AnyType.INSTANCE
      }).a({
        name: 'about',
        attributeName: new Jsonix.XML.QName('about')
      }).a({
        name: 'type',
        attributeName: 'type'
      }).a({
        name: 'href',
        attributeName: 'href'
      }).a({
        name: 'role',
        attributeName: 'role'
      }).a({
        name: 'arcrole',
        attributeName: 'arcrole'
      }).a({
        name: 'title',
        attributeName: 'title'
      }).a({
        name: 'show',
        attributeName: 'show'
      }).a({
        name: 'actuate',
        attributeName: 'actuate'
      });
  }
  {
    net.opengis.ows.ServiceProvider.ps().e({
        name: 'providerName',
        elementName: 'ProviderName'
      }).e({
        name: 'providerSite',
        elementName: 'ProviderSite',
        typeInfo: net.opengis.ows.OnlineResourceType
      }).e({
        name: 'serviceContact',
        elementName: 'ServiceContact',
        typeInfo: net.opengis.ows.ResponsiblePartySubsetType
      });
  }
  {
    net.opengis.ows.OnlineResourceType.ps().a({
        name: 'type',
        attributeName: 'type'
      }).a({
        name: 'href',
        attributeName: 'href'
      }).a({
        name: 'role',
        attributeName: 'role'
      }).a({
        name: 'arcrole',
        attributeName: 'arcrole'
      }).a({
        name: 'title',
        attributeName: 'title'
      }).a({
        name: 'show',
        attributeName: 'show'
      }).a({
        name: 'actuate',
        attributeName: 'actuate'
      });
  }
  {
    net.opengis.ows.ResponsiblePartySubsetType.ps().e({
        name: 'individualName',
        elementName: 'IndividualName'
      }).e({
        name: 'positionName',
        elementName: 'PositionName'
      }).e({
        name: 'contactInfo',
        elementName: 'ContactInfo',
        typeInfo: net.opengis.ows.ContactType
      }).e({
        name: 'role',
        elementName: 'Role',
        typeInfo: net.opengis.ows.CodeType
      });
  }
  {
    net.opengis.ows.OperationsMetadata.ps().e({
        name: 'operation',
        collection: true,
        elementName: 'Operation',
        typeInfo: net.opengis.ows.Operation
      }).e({
        name: 'parameter',
        collection: true,
        elementName: 'Parameter',
        typeInfo: net.opengis.ows.DomainType
      }).e({
        name: 'constraint',
        collection: true,
        elementName: 'Constraint',
        typeInfo: net.opengis.ows.DomainType
      }).e({
        name: 'extendedCapabilities',
        elementName: 'ExtendedCapabilities',
        typeInfo: Jsonix.Schema.XSD.AnyType.INSTANCE
      });
  }
  {
    net.opengis.ows.CodeType.ps().v({
        name: 'value'
      }).a({
        name: 'codeSpace',
        attributeName: new Jsonix.XML.QName('codeSpace')
      });
  }
  {
    net.opengis.ows.KeywordsType.ps().e({
        name: 'keyword',
        collection: true,
        elementName: 'Keyword'
      }).e({
        name: 'type',
        elementName: 'Type',
        typeInfo: net.opengis.ows.CodeType
      });
  }
  {
    net.opengis.ows.ResponsiblePartyType.ps().e({
        name: 'individualName',
        elementName: 'IndividualName'
      }).e({
        name: 'organisationName',
        elementName: 'OrganisationName'
      }).e({
        name: 'positionName',
        elementName: 'PositionName'
      }).e({
        name: 'contactInfo',
        elementName: 'ContactInfo',
        typeInfo: net.opengis.ows.ContactType
      }).e({
        name: 'role',
        elementName: 'Role',
        typeInfo: net.opengis.ows.CodeType
      });
  }
  {
    net.opengis.ows.GetCapabilitiesType.ps().e({
        name: 'acceptVersions',
        elementName: 'AcceptVersions',
        typeInfo: net.opengis.ows.AcceptVersionsType
      }).e({
        name: 'sections',
        elementName: 'Sections',
        typeInfo: net.opengis.ows.SectionsType
      }).e({
        name: 'acceptFormats',
        elementName: 'AcceptFormats',
        typeInfo: net.opengis.ows.AcceptFormatsType
      }).a({
        name: 'updateSequence',
        attributeName: new Jsonix.XML.QName('updateSequence')
      });
  }
  {
    net.opengis.ows.ServiceIdentification.b(net.opengis.ows.DescriptionType);
    net.opengis.ows.ServiceIdentification.ps().e({
        name: 'serviceType',
        elementName: 'ServiceType',
        typeInfo: net.opengis.ows.CodeType
      }).e({
        name: 'serviceTypeVersion',
        collection: true,
        elementName: 'ServiceTypeVersion'
      }).e({
        name: 'fees',
        elementName: 'Fees'
      }).e({
        name: 'accessConstraints',
        collection: true,
        elementName: 'AccessConstraints'
      });
  }
  {
    net.opengis.ows.DescriptionType.ps().e({
        name: 'title',
        elementName: 'Title'
      }).e({
        name: '_abstract',
        elementName: 'Abstract'
      }).e({
        name: 'keywords',
        collection: true,
        elementName: 'Keywords',
        typeInfo: net.opengis.ows.KeywordsType
      });
  }
  {
    net.opengis.ows.ExceptionReport.ps().e({
        name: 'exception',
        collection: true,
        elementName: 'Exception',
        typeInfo: net.opengis.ows.ExceptionType
      }).a({
        name: 'version',
        attributeName: new Jsonix.XML.QName('version')
      }).a({
        name: 'language',
        attributeName: new Jsonix.XML.QName('language')
      });
  }
  {
    net.opengis.ows.BoundingBoxType.ps().e({
        name: 'lowerCorner',
        elementName: 'LowerCorner',
        typeInfo: new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Double.INSTANCE)
      }).e({
        name: 'upperCorner',
        elementName: 'UpperCorner',
        typeInfo: new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Double.INSTANCE)
      }).a({
        name: 'crs',
        attributeName: new Jsonix.XML.QName('crs')
      }).a({
        name: 'dimensions',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE,
        attributeName: new Jsonix.XML.QName('dimensions')
      });
  }
  {
    net.opengis.ows.ContactType.ps().e({
        name: 'phone',
        elementName: 'Phone',
        typeInfo: net.opengis.ows.TelephoneType
      }).e({
        name: 'address',
        elementName: 'Address',
        typeInfo: net.opengis.ows.AddressType
      }).e({
        name: 'onlineResource',
        elementName: 'OnlineResource',
        typeInfo: net.opengis.ows.OnlineResourceType
      }).e({
        name: 'hoursOfService',
        elementName: 'HoursOfService'
      }).e({
        name: 'contactInstructions',
        elementName: 'ContactInstructions'
      });
  }
  {
    net.opengis.ows.WGS84BoundingBoxType.b(net.opengis.ows.BoundingBoxType);
    net.opengis.ows.WGS84BoundingBoxType.ps();
  }
  {
    net.opengis.ows.AcceptFormatsType.ps().e({
        name: 'outputFormat',
        collection: true,
        elementName: 'OutputFormat'
      });
  }
  {
    net.opengis.ows.SectionsType.ps().e({
        name: 'section',
        collection: true,
        elementName: 'Section'
      });
  }
  {
    net.opengis.ows.TelephoneType.ps().e({
        name: 'voice',
        collection: true,
        elementName: 'Voice'
      }).e({
        name: 'facsimile',
        collection: true,
        elementName: 'Facsimile'
      });
  }
  {
    net.opengis.ows.IdentificationType.b(net.opengis.ows.DescriptionType);
    net.opengis.ows.IdentificationType.ps().e({
        name: 'identifier',
        elementName: 'Identifier',
        typeInfo: net.opengis.ows.CodeType
      }).er({
        name: 'boundingBox',
        collection: true,
        elementName: 'BoundingBox',
        typeInfo: net.opengis.ows.BoundingBoxType
      }).e({
        name: 'outputFormat',
        collection: true,
        elementName: 'OutputFormat'
      }).er({
        name: 'availableCRS',
        collection: true,
        elementName: 'AvailableCRS'
      }).e({
        name: 'metadata',
        collection: true,
        elementName: 'Metadata',
        typeInfo: net.opengis.ows.MetadataType
      });
  }
  {
    net.opengis.ows.AddressType.ps().e({
        name: 'deliveryPoint',
        collection: true,
        elementName: 'DeliveryPoint'
      }).e({
        name: 'city',
        elementName: 'City'
      }).e({
        name: 'administrativeArea',
        elementName: 'AdministrativeArea'
      }).e({
        name: 'postalCode',
        elementName: 'PostalCode'
      }).e({
        name: 'country',
        elementName: 'Country'
      }).e({
        name: 'electronicMailAddress',
        collection: true,
        elementName: 'ElectronicMailAddress'
      });
  }
  {
    net.opengis.ows.AcceptVersionsType.ps().e({
        name: 'version',
        collection: true,
        elementName: 'Version'
      });
  }
  {
    net.opengis.ows.CapabilitiesBaseType.ps().e({
        name: 'serviceIdentification',
        elementName: 'ServiceIdentification',
        typeInfo: net.opengis.ows.ServiceIdentification
      }).e({
        name: 'serviceProvider',
        elementName: 'ServiceProvider',
        typeInfo: net.opengis.ows.ServiceProvider
      }).e({
        name: 'operationsMetadata',
        elementName: 'OperationsMetadata',
        typeInfo: net.opengis.ows.OperationsMetadata
      }).a({
        name: 'version',
        attributeName: new Jsonix.XML.QName('version')
      }).a({
        name: 'updateSequence',
        attributeName: new Jsonix.XML.QName('updateSequence')
      });
  }
}
net.opengis.ows.es().e({
    elementName: 'Operation',
    typeInfo: net.opengis.ows.Operation
  }).e({
    elementName: 'DCP',
    typeInfo: net.opengis.ows.DCP
  }).e({
    elementName: 'HTTP',
    typeInfo: net.opengis.ows.HTTP
  }).e({
    elementName: 'ServiceProvider',
    typeInfo: net.opengis.ows.ServiceProvider
  }).e({
    elementName: 'OperationsMetadata',
    typeInfo: net.opengis.ows.OperationsMetadata
  }).e({
    elementName: 'ServiceIdentification',
    typeInfo: net.opengis.ows.ServiceIdentification
  }).e({
    elementName: 'ExceptionReport',
    typeInfo: net.opengis.ows.ExceptionReport
  }).e({
    elementName: 'Keywords',
    typeInfo: net.opengis.ows.KeywordsType
  }).e({
    elementName: 'Language',
    typeInfo: Jsonix.Schema.XSD.String.INSTANCE
  }).e({
    elementName: 'Role',
    typeInfo: net.opengis.ows.CodeType
  }).e({
    elementName: 'IndividualName',
    typeInfo: Jsonix.Schema.XSD.String.INSTANCE
  }).e({
    elementName: 'Title',
    typeInfo: Jsonix.Schema.XSD.String.INSTANCE
  }).e({
    elementName: 'ContactInfo',
    typeInfo: net.opengis.ows.ContactType
  }).e({
    elementName: 'SupportedCRS',
    typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
    substitutionHead: 'AvailableCRS'
  }).e({
    elementName: 'OutputFormat',
    typeInfo: Jsonix.Schema.XSD.String.INSTANCE
  }).e({
    elementName: 'AvailableCRS',
    typeInfo: Jsonix.Schema.XSD.String.INSTANCE
  }).e({
    elementName: 'Fees',
    typeInfo: Jsonix.Schema.XSD.String.INSTANCE
  }).e({
    elementName: 'Exception',
    typeInfo: net.opengis.ows.ExceptionType
  }).e({
    elementName: 'Metadata',
    typeInfo: net.opengis.ows.MetadataType
  }).e({
    elementName: 'PointOfContact',
    typeInfo: net.opengis.ows.ResponsiblePartyType
  }).e({
    elementName: 'Identifier',
    typeInfo: net.opengis.ows.CodeType
  }).e({
    elementName: 'OrganisationName',
    typeInfo: Jsonix.Schema.XSD.String.INSTANCE
  }).e({
    elementName: 'AbstractMetaData',
    typeInfo: Jsonix.Schema.XSD.AnyType.INSTANCE
  }).e({
    elementName: 'Abstract',
    typeInfo: Jsonix.Schema.XSD.String.INSTANCE
  }).e({
    elementName: 'ExtendedCapabilities',
    typeInfo: Jsonix.Schema.XSD.AnyType.INSTANCE
  }).e({
    elementName: 'BoundingBox',
    typeInfo: net.opengis.ows.BoundingBoxType
  }).e({
    elementName: 'AccessConstraints',
    typeInfo: Jsonix.Schema.XSD.String.INSTANCE
  }).e({
    elementName: 'PositionName',
    typeInfo: Jsonix.Schema.XSD.String.INSTANCE
  }).e({
    elementName: 'WGS84BoundingBox',
    typeInfo: net.opengis.ows.WGS84BoundingBoxType,
    substitutionHead: 'BoundingBox'
  }).e({
    elementName: 'GetCapabilities',
    typeInfo: net.opengis.ows.GetCapabilitiesType
  }).e({
    elementName: 'Get',
    typeInfo: net.opengis.ows.RequestMethodType,
    scope: net.opengis.ows.HTTP
  }).e({
    elementName: 'Post',
    typeInfo: net.opengis.ows.RequestMethodType,
    scope: net.opengis.ows.HTTP
  });