if (typeof net === 'undefined') {
  net = {};
}
if (typeof net.opengis === 'undefined') {
  net.opengis = {};
}
net.opengis.gml = new Jsonix.Model.Module({
    defaultElementNamespaceURI: 'http:\/\/www.opengis.net\/gml',
    defaultAttributeNamespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
  });
net.opengis.gml.cs().c({
    name: 'TrianglePatchArrayPropertyType'
  }).c({
    name: 'SurfacePatchArrayPropertyType'
  }).c({
    name: 'LineStringPropertyType'
  }).c({
    name: 'ArcType'
  }).c({
    name: 'ArcStringType'
  }).c({
    name: 'AbstractCurveSegmentType'
  }).c({
    name: 'AbstractRingPropertyType'
  }).c({
    name: 'ArrayType'
  }).c({
    name: 'AbstractGMLType'
  }).c({
    name: 'CurveArrayPropertyType'
  }).c({
    name: 'MultiPointPropertyType'
  }).c({
    name: 'DirectPositionType'
  }).c({
    name: 'CoordType'
  }).c({
    name: 'TriangleType'
  }).c({
    name: 'AbstractSurfacePatchType'
  }).c({
    name: 'ConeType'
  }).c({
    name: 'AbstractGriddedSurfaceType'
  }).c({
    name: 'AbstractParametricCurveSurfaceType'
  }).c({
    name: 'SurfaceType'
  }).c({
    name: 'AbstractSurfaceType'
  }).c({
    name: 'AbstractGeometricPrimitiveType'
  }).c({
    name: 'AbstractGeometryType'
  }).c({
    name: 'GenericMetaDataType'
  }).c({
    name: 'AbstractMetaDataType'
  }).c({
    name: 'DictionaryEntryType'
  }).c({
    name: 'SurfaceArrayPropertyType'
  }).c({
    name: 'MultiSurfacePropertyType'
  }).c({
    name: 'PointType'
  }).c({
    name: 'ConversionToPreferredUnitType'
  }).c({
    name: 'ClothoidType'
  }).c({
    name: 'MultiCurvePropertyType'
  }).c({
    name: 'AbstractCurveType'
  }).c({
    name: 'GeometryArrayPropertyType'
  }).c({
    name: 'ArcStringByBulgeType'
  }).c({
    name: 'CurveType'
  }).c({
    name: 'IndirectEntryType'
  }).c({
    name: 'BezierType'
  }).c({
    name: 'BSplineType'
  }).c({
    name: 'GeometryPropertyType'
  }).c({
    name: 'PointPropertyType'
  }).c({
    name: 'RingType'
  }).c({
    name: 'AbstractRingType'
  }).c({
    name: 'CurveSegmentArrayPropertyType'
  }).c({
    name: 'CylinderType'
  }).c({
    name: 'CubicSplineType'
  }).c({
    name: 'DerivedUnitType'
  }).c({
    name: 'UnitDefinitionType'
  }).c({
    name: 'DefinitionType'
  }).c({
    name: 'CurvePropertyType'
  }).c({
    name: 'CodeType'
  }).c({
    name: 'DictionaryType'
  }).c({
    name: 'AssociationType'
  }).c({
    name: 'OrientableSurfaceType'
  }).c({
    name: 'EnvelopeType'
  }).c({
    name: 'MultiSurfaceType'
  }).c({
    name: 'AbstractGeometricAggregateType'
  }).c({
    name: 'PolygonPropertyType'
  }).c({
    name: 'LineStringType'
  }).c({
    name: 'StringOrRefType'
  }).c({
    name: 'SolidPropertyType'
  }).c({
    name: 'GeodesicType'
  }).c({
    name: 'GeodesicStringType'
  }).c({
    name: 'MeasureType'
  }).c({
    name: 'BaseUnitType'
  }).c({
    name: 'SurfacePropertyType'
  }).c({
    name: 'PolygonType'
  }).c({
    name: 'DefinitionProxyType'
  }).c({
    name: 'TinType'
  }).c({
    name: 'TriangulatedSurfaceType'
  }).c({
    name: 'RectangleType'
  }).c({
    name: 'DerivationUnitTermType'
  }).c({
    name: 'ReferenceType'
  }).c({
    name: 'MultiSolidPropertyType'
  }).c({
    name: 'LinearRingType'
  }).c({
    name: 'LineStringSegmentType'
  }).c({
    name: 'SolidArrayPropertyType'
  }).c({
    name: 'ConventionalUnitType'
  }).c({
    name: 'UnitOfMeasureType'
  }).c({
    name: 'CircleByCenterPointType'
  }).c({
    name: 'ArcByCenterPointType'
  }).c({
    name: 'SphereType'
  }).c({
    name: 'CircleType'
  }).c({
    name: 'MultiGeometryPropertyType'
  }).c({
    name: 'MultiLineStringType'
  }).c({
    name: 'SolidType'
  }).c({
    name: 'AbstractSolidType'
  }).c({
    name: 'BagType'
  }).c({
    name: 'MultiPolygonType'
  }).c({
    name: 'DMSAngleType'
  }).c({
    name: 'OffsetCurveType'
  }).c({
    name: 'PointArrayPropertyType'
  }).c({
    name: 'OrientableCurveType'
  }).c({
    name: 'PolygonPatchArrayPropertyType'
  }).c({
    name: 'PolyhedralSurfaceType'
  }).c({
    name: 'VectorType'
  }).c({
    name: 'MultiGeometryType'
  }).c({
    name: 'MultiCurveType'
  }).c({
    name: 'MultiPointType'
  }).c({
    name: 'ArrayAssociationType'
  }).c({
    name: 'CoordinatesType'
  }).c({
    name: 'DirectPositionListType'
  }).c({
    name: 'MetaDataPropertyType'
  }).c({
    name: 'PolygonPatchType'
  }).c({
    name: 'DegreesType'
  }).c({
    name: 'AffinePlacementType'
  }).c({
    name: 'MultiSolidType'
  }).c({
    name: 'ArcByBulgeType'
  }).c({
    name: 'FormulaType'
  }).c({
    name: 'AngleChoiceType'
  }).c({
    name: 'SpeedType'
  }).c({
    name: 'ScaleType'
  }).c({
    name: 'GeometricPrimitivePropertyType'
  }).c({
    name: 'AngleType'
  }).c({
    name: 'LineStringSegmentArrayPropertyType'
  }).c({
    name: 'MultiPolygonPropertyType'
  }).c({
    name: 'CodeOrNullListType'
  }).c({
    name: 'MeasureListType'
  }).c({
    name: 'RingPropertyType'
  }).c({
    name: 'VolumeType'
  }).c({
    name: 'GridLengthType'
  }).c({
    name: 'MeasureOrNullListType'
  }).c({
    name: 'KnotType'
  }).c({
    name: 'MultiLineStringPropertyType'
  }).c({
    name: 'LinearRingPropertyType'
  }).c({
    name: 'CodeListType'
  }).c({
    name: 'LengthType'
  }).c({
    name: 'AreaType'
  }).c({
    name: 'KnotPropertyType'
  }).c({
    name: 'TimeType'
  }).c({
    name: 'Row'
  }).c({
    name: 'ControlPoint'
  }).c({
    name: 'RefLocation'
  });
{
  {
    net.opengis.gml.TrianglePatchArrayPropertyType.b(net.opengis.gml.SurfacePatchArrayPropertyType);
    net.opengis.gml.TrianglePatchArrayPropertyType.ps();
  }
  {
    net.opengis.gml.SurfacePatchArrayPropertyType.ps().er({
        name: 'surfacePatch',
        collection: true,
        elementName: '_SurfacePatch',
        typeInfo: net.opengis.gml.AbstractSurfacePatchType
      });
  }
  {
    net.opengis.gml.LineStringPropertyType.ps().e({
        name: 'lineString',
        elementName: 'LineString',
        typeInfo: net.opengis.gml.LineStringType
      }).a({
        name: 'remoteSchema',
        attributeName: new Jsonix.XML.QName('http:\/\/www.opengis.net\/gml', 'remoteSchema')
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
    net.opengis.gml.ArcType.b(net.opengis.gml.ArcStringType);
    net.opengis.gml.ArcType.ps();
  }
  {
    net.opengis.gml.ArcStringType.b(net.opengis.gml.AbstractCurveSegmentType);
    net.opengis.gml.ArcStringType.ps().ers({
        name: 'posOrPointPropertyOrPointRep',
        collection: true,
        elementTypeInfos: [{
            elementName: 'pointRep',
            typeInfo: net.opengis.gml.PointPropertyType
          }, {
            elementName: 'pointProperty',
            typeInfo: net.opengis.gml.PointPropertyType
          }, {
            elementName: 'pos',
            typeInfo: net.opengis.gml.DirectPositionType
          }]
      }).e({
        name: 'posList',
        elementName: 'posList',
        typeInfo: net.opengis.gml.DirectPositionListType
      }).e({
        name: 'coordinates',
        elementName: 'coordinates',
        typeInfo: net.opengis.gml.CoordinatesType
      }).a({
        name: 'interpolation',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
        attributeName: new Jsonix.XML.QName('interpolation')
      }).a({
        name: 'numArc',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE,
        attributeName: new Jsonix.XML.QName('numArc')
      });
  }
  {
    net.opengis.gml.AbstractCurveSegmentType.ps().a({
        name: 'numDerivativesAtStart',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE,
        attributeName: new Jsonix.XML.QName('numDerivativesAtStart')
      }).a({
        name: 'numDerivativesAtEnd',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE,
        attributeName: new Jsonix.XML.QName('numDerivativesAtEnd')
      }).a({
        name: 'numDerivativeInterior',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE,
        attributeName: new Jsonix.XML.QName('numDerivativeInterior')
      });
  }
  {
    net.opengis.gml.AbstractRingPropertyType.ps().er({
        name: 'ring',
        elementName: '_Ring',
        typeInfo: net.opengis.gml.AbstractRingType
      });
  }
  {
    net.opengis.gml.ArrayType.b(net.opengis.gml.AbstractGMLType);
    net.opengis.gml.ArrayType.ps().e({
        name: 'members',
        elementName: 'members',
        typeInfo: net.opengis.gml.ArrayAssociationType
      });
  }
  {
    net.opengis.gml.AbstractGMLType.ps().e({
        name: 'metaDataProperty',
        collection: true,
        elementName: 'metaDataProperty',
        typeInfo: net.opengis.gml.MetaDataPropertyType
      }).e({
        name: 'description',
        elementName: 'description',
        typeInfo: net.opengis.gml.StringOrRefType
      }).e({
        name: 'name',
        collection: true,
        elementName: 'name',
        typeInfo: net.opengis.gml.CodeType
      }).a({
        name: 'id',
        attributeName: new Jsonix.XML.QName('http:\/\/www.opengis.net\/gml', 'id')
      });
  }
  {
    net.opengis.gml.CurveArrayPropertyType.ps().er({
        name: 'curve',
        collection: true,
        elementName: '_Curve',
        typeInfo: net.opengis.gml.AbstractCurveType
      });
  }
  {
    net.opengis.gml.MultiPointPropertyType.ps().e({
        name: 'multiPoint',
        elementName: 'MultiPoint',
        typeInfo: net.opengis.gml.MultiPointType
      }).a({
        name: 'remoteSchema',
        attributeName: new Jsonix.XML.QName('http:\/\/www.opengis.net\/gml', 'remoteSchema')
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
    net.opengis.gml.DirectPositionType.ps().v({
        name: 'value',
        typeInfo: new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Double.INSTANCE)
      }).a({
        name: 'srsName',
        attributeName: new Jsonix.XML.QName('srsName')
      }).a({
        name: 'srsDimension',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE,
        attributeName: new Jsonix.XML.QName('srsDimension')
      }).a({
        name: 'axisLabels',
        typeInfo: new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.String.INSTANCE),
        attributeName: new Jsonix.XML.QName('axisLabels')
      }).a({
        name: 'uomLabels',
        typeInfo: new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.String.INSTANCE),
        attributeName: new Jsonix.XML.QName('uomLabels')
      });
  }
  {
    net.opengis.gml.CoordType.ps().e({
        name: 'x',
        elementName: 'X',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'y',
        elementName: 'Y',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'z',
        elementName: 'Z',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      });
  }
  {
    net.opengis.gml.TriangleType.b(net.opengis.gml.AbstractSurfacePatchType);
    net.opengis.gml.TriangleType.ps().er({
        name: 'exterior',
        elementName: 'exterior',
        typeInfo: net.opengis.gml.AbstractRingPropertyType
      }).a({
        name: 'interpolation',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
        attributeName: new Jsonix.XML.QName('interpolation')
      });
  }
  {
    net.opengis.gml.AbstractSurfacePatchType.ps();
  }
  {
    net.opengis.gml.ConeType.b(net.opengis.gml.AbstractGriddedSurfaceType);
    net.opengis.gml.ConeType.ps().a({
        name: 'horizontalCurveType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
        attributeName: new Jsonix.XML.QName('horizontalCurveType')
      }).a({
        name: 'verticalCurveType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
        attributeName: new Jsonix.XML.QName('verticalCurveType')
      });
  }
  {
    net.opengis.gml.AbstractGriddedSurfaceType.b(net.opengis.gml.AbstractParametricCurveSurfaceType);
    net.opengis.gml.AbstractGriddedSurfaceType.ps().e({
        name: 'row',
        collection: true,
        elementName: 'row',
        typeInfo: net.opengis.gml.Row
      }).e({
        name: 'rows',
        elementName: 'rows',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE
      }).e({
        name: 'columns',
        elementName: 'columns',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE
      });
  }
  {
    net.opengis.gml.AbstractParametricCurveSurfaceType.b(net.opengis.gml.AbstractSurfacePatchType);
    net.opengis.gml.AbstractParametricCurveSurfaceType.ps();
  }
  {
    net.opengis.gml.SurfaceType.b(net.opengis.gml.AbstractSurfaceType);
    net.opengis.gml.SurfaceType.ps().er({
        name: 'patches',
        elementName: 'patches',
        typeInfo: net.opengis.gml.SurfacePatchArrayPropertyType
      });
  }
  {
    net.opengis.gml.AbstractSurfaceType.b(net.opengis.gml.AbstractGeometricPrimitiveType);
    net.opengis.gml.AbstractSurfaceType.ps();
  }
  {
    net.opengis.gml.AbstractGeometricPrimitiveType.b(net.opengis.gml.AbstractGeometryType);
    net.opengis.gml.AbstractGeometricPrimitiveType.ps();
  }
  {
    net.opengis.gml.AbstractGeometryType.b(net.opengis.gml.AbstractGMLType);
    net.opengis.gml.AbstractGeometryType.ps().a({
        name: 'gid',
        attributeName: new Jsonix.XML.QName('gid')
      }).a({
        name: 'srsName',
        attributeName: new Jsonix.XML.QName('srsName')
      }).a({
        name: 'srsDimension',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE,
        attributeName: new Jsonix.XML.QName('srsDimension')
      }).a({
        name: 'axisLabels',
        typeInfo: new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.String.INSTANCE),
        attributeName: new Jsonix.XML.QName('axisLabels')
      }).a({
        name: 'uomLabels',
        typeInfo: new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.String.INSTANCE),
        attributeName: new Jsonix.XML.QName('uomLabels')
      });
  }
  {
    net.opengis.gml.GenericMetaDataType.b(net.opengis.gml.AbstractMetaDataType);
    net.opengis.gml.GenericMetaDataType.ps();
  }
  {
    net.opengis.gml.AbstractMetaDataType.ps().v({
        name: 'content'
      }).a({
        name: 'id',
        attributeName: new Jsonix.XML.QName('http:\/\/www.opengis.net\/gml', 'id')
      });
  }
  {
    net.opengis.gml.DictionaryEntryType.ps().er({
        name: 'definition',
        elementName: 'Definition',
        typeInfo: net.opengis.gml.DefinitionType
      }).a({
        name: 'remoteSchema',
        attributeName: new Jsonix.XML.QName('http:\/\/www.opengis.net\/gml', 'remoteSchema')
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
    net.opengis.gml.SurfaceArrayPropertyType.ps().er({
        name: 'surface',
        collection: true,
        elementName: '_Surface',
        typeInfo: net.opengis.gml.AbstractSurfaceType
      });
  }
  {
    net.opengis.gml.MultiSurfacePropertyType.ps().e({
        name: 'multiSurface',
        elementName: 'MultiSurface',
        typeInfo: net.opengis.gml.MultiSurfaceType
      }).a({
        name: 'remoteSchema',
        attributeName: new Jsonix.XML.QName('http:\/\/www.opengis.net\/gml', 'remoteSchema')
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
    net.opengis.gml.PointType.b(net.opengis.gml.AbstractGeometricPrimitiveType);
    net.opengis.gml.PointType.ps().e({
        name: 'pos',
        elementName: 'pos',
        typeInfo: net.opengis.gml.DirectPositionType
      }).e({
        name: 'coordinates',
        elementName: 'coordinates',
        typeInfo: net.opengis.gml.CoordinatesType
      }).e({
        name: 'coord',
        elementName: 'coord',
        typeInfo: net.opengis.gml.CoordType
      });
  }
  {
    net.opengis.gml.ConversionToPreferredUnitType.b(net.opengis.gml.UnitOfMeasureType);
    net.opengis.gml.ConversionToPreferredUnitType.ps().e({
        name: 'factor',
        elementName: 'factor',
        typeInfo: Jsonix.Schema.XSD.Double.INSTANCE
      }).e({
        name: 'formula',
        elementName: 'formula',
        typeInfo: net.opengis.gml.FormulaType
      });
  }
  {
    net.opengis.gml.ClothoidType.b(net.opengis.gml.AbstractCurveSegmentType);
    net.opengis.gml.ClothoidType.ps().e({
        name: 'refLocation',
        elementName: 'refLocation',
        typeInfo: net.opengis.gml.RefLocation
      }).e({
        name: 'scaleFactor',
        elementName: 'scaleFactor',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'startParameter',
        elementName: 'startParameter',
        typeInfo: Jsonix.Schema.XSD.Double.INSTANCE
      }).e({
        name: 'endParameter',
        elementName: 'endParameter',
        typeInfo: Jsonix.Schema.XSD.Double.INSTANCE
      });
  }
  {
    net.opengis.gml.MultiCurvePropertyType.ps().e({
        name: 'multiCurve',
        elementName: 'MultiCurve',
        typeInfo: net.opengis.gml.MultiCurveType
      }).a({
        name: 'remoteSchema',
        attributeName: new Jsonix.XML.QName('http:\/\/www.opengis.net\/gml', 'remoteSchema')
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
    net.opengis.gml.AbstractCurveType.b(net.opengis.gml.AbstractGeometricPrimitiveType);
    net.opengis.gml.AbstractCurveType.ps();
  }
  {
    net.opengis.gml.GeometryArrayPropertyType.ps().er({
        name: 'geometry',
        collection: true,
        elementName: '_Geometry',
        typeInfo: net.opengis.gml.AbstractGeometryType
      });
  }
  {
    net.opengis.gml.ArcStringByBulgeType.b(net.opengis.gml.AbstractCurveSegmentType);
    net.opengis.gml.ArcStringByBulgeType.ps().ers({
        name: 'posOrPointPropertyOrPointRep',
        collection: true,
        elementTypeInfos: [{
            elementName: 'pointRep',
            typeInfo: net.opengis.gml.PointPropertyType
          }, {
            elementName: 'pointProperty',
            typeInfo: net.opengis.gml.PointPropertyType
          }, {
            elementName: 'pos',
            typeInfo: net.opengis.gml.DirectPositionType
          }]
      }).e({
        name: 'posList',
        elementName: 'posList',
        typeInfo: net.opengis.gml.DirectPositionListType
      }).e({
        name: 'coordinates',
        elementName: 'coordinates',
        typeInfo: net.opengis.gml.CoordinatesType
      }).e({
        name: 'bulge',
        collection: true,
        elementName: 'bulge',
        typeInfo: Jsonix.Schema.XSD.Double.INSTANCE
      }).e({
        name: 'normal',
        collection: true,
        elementName: 'normal',
        typeInfo: net.opengis.gml.VectorType
      }).a({
        name: 'interpolation',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
        attributeName: new Jsonix.XML.QName('interpolation')
      }).a({
        name: 'numArc',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE,
        attributeName: new Jsonix.XML.QName('numArc')
      });
  }
  {
    net.opengis.gml.CurveType.b(net.opengis.gml.AbstractCurveType);
    net.opengis.gml.CurveType.ps().e({
        name: 'segments',
        elementName: 'segments',
        typeInfo: net.opengis.gml.CurveSegmentArrayPropertyType
      });
  }
  {
    net.opengis.gml.IndirectEntryType.ps().e({
        name: 'definitionProxy',
        elementName: 'DefinitionProxy',
        typeInfo: net.opengis.gml.DefinitionProxyType
      });
  }
  {
    net.opengis.gml.BezierType.b(net.opengis.gml.BSplineType);
    net.opengis.gml.BezierType.ps();
  }
  {
    net.opengis.gml.BSplineType.b(net.opengis.gml.AbstractCurveSegmentType);
    net.opengis.gml.BSplineType.ps().ers({
        name: 'posOrPointPropertyOrPointRep',
        collection: true,
        elementTypeInfos: [{
            elementName: 'pointRep',
            typeInfo: net.opengis.gml.PointPropertyType
          }, {
            elementName: 'pointProperty',
            typeInfo: net.opengis.gml.PointPropertyType
          }, {
            elementName: 'pos',
            typeInfo: net.opengis.gml.DirectPositionType
          }]
      }).e({
        name: 'posList',
        elementName: 'posList',
        typeInfo: net.opengis.gml.DirectPositionListType
      }).e({
        name: 'coordinates',
        elementName: 'coordinates',
        typeInfo: net.opengis.gml.CoordinatesType
      }).e({
        name: 'degree',
        elementName: 'degree',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE
      }).e({
        name: 'knot',
        collection: true,
        elementName: 'knot',
        typeInfo: net.opengis.gml.KnotPropertyType
      }).a({
        name: 'interpolation',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
        attributeName: new Jsonix.XML.QName('interpolation')
      }).a({
        name: 'isPolynomial',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE,
        attributeName: new Jsonix.XML.QName('isPolynomial')
      }).a({
        name: 'knotType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
        attributeName: new Jsonix.XML.QName('knotType')
      });
  }
  {
    net.opengis.gml.GeometryPropertyType.ps().er({
        name: 'geometry',
        elementName: '_Geometry',
        typeInfo: net.opengis.gml.AbstractGeometryType
      }).a({
        name: 'remoteSchema',
        attributeName: new Jsonix.XML.QName('http:\/\/www.opengis.net\/gml', 'remoteSchema')
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
    net.opengis.gml.PointPropertyType.ps().e({
        name: 'point',
        elementName: 'Point',
        typeInfo: net.opengis.gml.PointType
      }).a({
        name: 'remoteSchema',
        attributeName: new Jsonix.XML.QName('http:\/\/www.opengis.net\/gml', 'remoteSchema')
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
    net.opengis.gml.RingType.b(net.opengis.gml.AbstractRingType);
    net.opengis.gml.RingType.ps().e({
        name: 'curveMember',
        collection: true,
        elementName: 'curveMember',
        typeInfo: net.opengis.gml.CurvePropertyType
      });
  }
  {
    net.opengis.gml.AbstractRingType.b(net.opengis.gml.AbstractGeometryType);
    net.opengis.gml.AbstractRingType.ps();
  }
  {
    net.opengis.gml.CurveSegmentArrayPropertyType.ps().er({
        name: 'curveSegment',
        collection: true,
        elementName: '_CurveSegment',
        typeInfo: net.opengis.gml.AbstractCurveSegmentType
      });
  }
  {
    net.opengis.gml.CylinderType.b(net.opengis.gml.AbstractGriddedSurfaceType);
    net.opengis.gml.CylinderType.ps().a({
        name: 'horizontalCurveType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
        attributeName: new Jsonix.XML.QName('horizontalCurveType')
      }).a({
        name: 'verticalCurveType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
        attributeName: new Jsonix.XML.QName('verticalCurveType')
      });
  }
  {
    net.opengis.gml.CubicSplineType.b(net.opengis.gml.AbstractCurveSegmentType);
    net.opengis.gml.CubicSplineType.ps().ers({
        name: 'posOrPointPropertyOrPointRep',
        collection: true,
        elementTypeInfos: [{
            elementName: 'pointRep',
            typeInfo: net.opengis.gml.PointPropertyType
          }, {
            elementName: 'pointProperty',
            typeInfo: net.opengis.gml.PointPropertyType
          }, {
            elementName: 'pos',
            typeInfo: net.opengis.gml.DirectPositionType
          }]
      }).e({
        name: 'posList',
        elementName: 'posList',
        typeInfo: net.opengis.gml.DirectPositionListType
      }).e({
        name: 'coordinates',
        elementName: 'coordinates',
        typeInfo: net.opengis.gml.CoordinatesType
      }).e({
        name: 'vectorAtStart',
        elementName: 'vectorAtStart',
        typeInfo: net.opengis.gml.VectorType
      }).e({
        name: 'vectorAtEnd',
        elementName: 'vectorAtEnd',
        typeInfo: net.opengis.gml.VectorType
      }).a({
        name: 'interpolation',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
        attributeName: new Jsonix.XML.QName('interpolation')
      }).a({
        name: 'degree',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE,
        attributeName: new Jsonix.XML.QName('degree')
      });
  }
  {
    net.opengis.gml.DerivedUnitType.b(net.opengis.gml.UnitDefinitionType);
    net.opengis.gml.DerivedUnitType.ps().e({
        name: 'derivationUnitTerm',
        collection: true,
        elementName: 'derivationUnitTerm',
        typeInfo: net.opengis.gml.DerivationUnitTermType
      });
  }
  {
    net.opengis.gml.UnitDefinitionType.b(net.opengis.gml.DefinitionType);
    net.opengis.gml.UnitDefinitionType.ps().e({
        name: 'quantityType',
        elementName: 'quantityType',
        typeInfo: net.opengis.gml.StringOrRefType
      }).e({
        name: 'catalogSymbol',
        elementName: 'catalogSymbol',
        typeInfo: net.opengis.gml.CodeType
      });
  }
  {
    net.opengis.gml.DefinitionType.b(net.opengis.gml.AbstractGMLType);
    net.opengis.gml.DefinitionType.ps();
  }
  {
    net.opengis.gml.CurvePropertyType.ps().er({
        name: 'curve',
        elementName: '_Curve',
        typeInfo: net.opengis.gml.AbstractCurveType
      }).a({
        name: 'remoteSchema',
        attributeName: new Jsonix.XML.QName('http:\/\/www.opengis.net\/gml', 'remoteSchema')
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
    net.opengis.gml.CodeType.ps().v({
        name: 'value'
      }).a({
        name: 'codeSpace',
        attributeName: new Jsonix.XML.QName('codeSpace')
      });
  }
  {
    net.opengis.gml.DictionaryType.b(net.opengis.gml.DefinitionType);
    net.opengis.gml.DictionaryType.ps().ers({
        name: 'dictionaryEntryOrIndirectEntry',
        collection: true,
        elementTypeInfos: [{
            elementName: 'indirectEntry',
            typeInfo: net.opengis.gml.IndirectEntryType
          }, {
            elementName: 'dictionaryEntry',
            typeInfo: net.opengis.gml.DictionaryEntryType
          }]
      });
  }
  {
    net.opengis.gml.AssociationType.ps().er({
        name: 'object',
        elementName: '_Object',
        typeInfo: Jsonix.Schema.XSD.AnyType.INSTANCE
      }).a({
        name: 'remoteSchema',
        attributeName: new Jsonix.XML.QName('http:\/\/www.opengis.net\/gml', 'remoteSchema')
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
    net.opengis.gml.OrientableSurfaceType.b(net.opengis.gml.AbstractSurfaceType);
    net.opengis.gml.OrientableSurfaceType.ps().e({
        name: 'baseSurface',
        elementName: 'baseSurface',
        typeInfo: net.opengis.gml.SurfacePropertyType
      }).a({
        name: 'orientation',
        attributeName: new Jsonix.XML.QName('orientation')
      });
  }
  {
    net.opengis.gml.EnvelopeType.ps().e({
        name: 'lowerCorner',
        elementName: 'lowerCorner',
        typeInfo: net.opengis.gml.DirectPositionType
      }).e({
        name: 'upperCorner',
        elementName: 'upperCorner',
        typeInfo: net.opengis.gml.DirectPositionType
      }).e({
        name: 'coord',
        collection: true,
        elementName: 'coord',
        typeInfo: net.opengis.gml.CoordType
      }).e({
        name: 'pos',
        collection: true,
        elementName: 'pos',
        typeInfo: net.opengis.gml.DirectPositionType
      }).e({
        name: 'coordinates',
        elementName: 'coordinates',
        typeInfo: net.opengis.gml.CoordinatesType
      }).a({
        name: 'srsName',
        attributeName: new Jsonix.XML.QName('srsName')
      }).a({
        name: 'srsDimension',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE,
        attributeName: new Jsonix.XML.QName('srsDimension')
      }).a({
        name: 'axisLabels',
        typeInfo: new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.String.INSTANCE),
        attributeName: new Jsonix.XML.QName('axisLabels')
      }).a({
        name: 'uomLabels',
        typeInfo: new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.String.INSTANCE),
        attributeName: new Jsonix.XML.QName('uomLabels')
      });
  }
  {
    net.opengis.gml.MultiSurfaceType.b(net.opengis.gml.AbstractGeometricAggregateType);
    net.opengis.gml.MultiSurfaceType.ps().e({
        name: 'surfaceMember',
        collection: true,
        elementName: 'surfaceMember',
        typeInfo: net.opengis.gml.SurfacePropertyType
      }).e({
        name: 'surfaceMembers',
        elementName: 'surfaceMembers',
        typeInfo: net.opengis.gml.SurfaceArrayPropertyType
      });
  }
  {
    net.opengis.gml.AbstractGeometricAggregateType.b(net.opengis.gml.AbstractGeometryType);
    net.opengis.gml.AbstractGeometricAggregateType.ps();
  }
  {
    net.opengis.gml.PolygonPropertyType.ps().e({
        name: 'polygon',
        elementName: 'Polygon',
        typeInfo: net.opengis.gml.PolygonType
      }).a({
        name: 'remoteSchema',
        attributeName: new Jsonix.XML.QName('http:\/\/www.opengis.net\/gml', 'remoteSchema')
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
    net.opengis.gml.LineStringType.b(net.opengis.gml.AbstractCurveType);
    net.opengis.gml.LineStringType.ps().ers({
        name: 'posOrPointPropertyOrPointRep',
        collection: true,
        elementTypeInfos: [{
            elementName: 'pointRep',
            typeInfo: net.opengis.gml.PointPropertyType
          }, {
            elementName: 'pointProperty',
            typeInfo: net.opengis.gml.PointPropertyType
          }, {
            elementName: 'coord',
            typeInfo: net.opengis.gml.CoordType
          }, {
            elementName: 'pos',
            typeInfo: net.opengis.gml.DirectPositionType
          }]
      }).e({
        name: 'posList',
        elementName: 'posList',
        typeInfo: net.opengis.gml.DirectPositionListType
      }).e({
        name: 'coordinates',
        elementName: 'coordinates',
        typeInfo: net.opengis.gml.CoordinatesType
      });
  }
  {
    net.opengis.gml.StringOrRefType.ps().v({
        name: 'value'
      }).a({
        name: 'remoteSchema',
        attributeName: new Jsonix.XML.QName('http:\/\/www.opengis.net\/gml', 'remoteSchema')
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
    net.opengis.gml.SolidPropertyType.ps().er({
        name: 'solid',
        elementName: '_Solid',
        typeInfo: net.opengis.gml.AbstractSolidType
      }).a({
        name: 'remoteSchema',
        attributeName: new Jsonix.XML.QName('http:\/\/www.opengis.net\/gml', 'remoteSchema')
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
    net.opengis.gml.GeodesicType.b(net.opengis.gml.GeodesicStringType);
    net.opengis.gml.GeodesicType.ps();
  }
  {
    net.opengis.gml.GeodesicStringType.b(net.opengis.gml.AbstractCurveSegmentType);
    net.opengis.gml.GeodesicStringType.ps().e({
        name: 'posList',
        elementName: 'posList',
        typeInfo: net.opengis.gml.DirectPositionListType
      }).es({
        name: 'geometricPositionGroup',
        collection: true,
        elementTypeInfos: [{
            elementName: 'pointProperty',
            typeInfo: net.opengis.gml.PointPropertyType
          }, {
            elementName: 'pos',
            typeInfo: net.opengis.gml.DirectPositionType
          }]
      }).a({
        name: 'interpolation',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
        attributeName: new Jsonix.XML.QName('interpolation')
      });
  }
  {
    net.opengis.gml.MeasureType.ps().v({
        name: 'value',
        typeInfo: Jsonix.Schema.XSD.Double.INSTANCE
      }).a({
        name: 'uom',
        attributeName: new Jsonix.XML.QName('uom')
      });
  }
  {
    net.opengis.gml.BaseUnitType.b(net.opengis.gml.UnitDefinitionType);
    net.opengis.gml.BaseUnitType.ps().e({
        name: 'unitsSystem',
        elementName: 'unitsSystem',
        typeInfo: net.opengis.gml.ReferenceType
      });
  }
  {
    net.opengis.gml.SurfacePropertyType.ps().er({
        name: 'surface',
        elementName: '_Surface',
        typeInfo: net.opengis.gml.AbstractSurfaceType
      }).a({
        name: 'remoteSchema',
        attributeName: new Jsonix.XML.QName('http:\/\/www.opengis.net\/gml', 'remoteSchema')
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
    net.opengis.gml.PolygonType.b(net.opengis.gml.AbstractSurfaceType);
    net.opengis.gml.PolygonType.ps().er({
        name: 'exterior',
        elementName: 'exterior',
        typeInfo: net.opengis.gml.AbstractRingPropertyType
      }).er({
        name: 'interior',
        collection: true,
        elementName: 'interior',
        typeInfo: net.opengis.gml.AbstractRingPropertyType
      });
  }
  {
    net.opengis.gml.DefinitionProxyType.b(net.opengis.gml.DefinitionType);
    net.opengis.gml.DefinitionProxyType.ps().e({
        name: 'definitionRef',
        elementName: 'definitionRef',
        typeInfo: net.opengis.gml.ReferenceType
      });
  }
  {
    net.opengis.gml.TinType.b(net.opengis.gml.TriangulatedSurfaceType);
    net.opengis.gml.TinType.ps().e({
        name: 'stopLines',
        collection: true,
        elementName: 'stopLines',
        typeInfo: net.opengis.gml.LineStringSegmentArrayPropertyType
      }).e({
        name: 'breakLines',
        collection: true,
        elementName: 'breakLines',
        typeInfo: net.opengis.gml.LineStringSegmentArrayPropertyType
      }).e({
        name: 'maxLength',
        elementName: 'maxLength',
        typeInfo: net.opengis.gml.LengthType
      }).e({
        name: 'controlPoint',
        elementName: 'controlPoint',
        typeInfo: net.opengis.gml.ControlPoint
      });
  }
  {
    net.opengis.gml.TriangulatedSurfaceType.b(net.opengis.gml.SurfaceType);
    net.opengis.gml.TriangulatedSurfaceType.ps();
  }
  {
    net.opengis.gml.RectangleType.b(net.opengis.gml.AbstractSurfacePatchType);
    net.opengis.gml.RectangleType.ps().er({
        name: 'exterior',
        elementName: 'exterior',
        typeInfo: net.opengis.gml.AbstractRingPropertyType
      }).a({
        name: 'interpolation',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
        attributeName: new Jsonix.XML.QName('interpolation')
      });
  }
  {
    net.opengis.gml.DerivationUnitTermType.b(net.opengis.gml.UnitOfMeasureType);
    net.opengis.gml.DerivationUnitTermType.ps().a({
        name: 'exponent',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE,
        attributeName: new Jsonix.XML.QName('exponent')
      });
  }
  {
    net.opengis.gml.ReferenceType.ps().a({
        name: 'remoteSchema',
        attributeName: new Jsonix.XML.QName('http:\/\/www.opengis.net\/gml', 'remoteSchema')
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
    net.opengis.gml.MultiSolidPropertyType.ps().e({
        name: 'multiSolid',
        elementName: 'MultiSolid',
        typeInfo: net.opengis.gml.MultiSolidType
      }).a({
        name: 'remoteSchema',
        attributeName: new Jsonix.XML.QName('http:\/\/www.opengis.net\/gml', 'remoteSchema')
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
    net.opengis.gml.LinearRingType.b(net.opengis.gml.AbstractRingType);
    net.opengis.gml.LinearRingType.ps().ers({
        name: 'posOrPointPropertyOrPointRep',
        collection: true,
        elementTypeInfos: [{
            elementName: 'pointRep',
            typeInfo: net.opengis.gml.PointPropertyType
          }, {
            elementName: 'pointProperty',
            typeInfo: net.opengis.gml.PointPropertyType
          }, {
            elementName: 'pos',
            typeInfo: net.opengis.gml.DirectPositionType
          }]
      }).e({
        name: 'posList',
        elementName: 'posList',
        typeInfo: net.opengis.gml.DirectPositionListType
      }).e({
        name: 'coordinates',
        elementName: 'coordinates',
        typeInfo: net.opengis.gml.CoordinatesType
      }).e({
        name: 'coord',
        collection: true,
        elementName: 'coord',
        typeInfo: net.opengis.gml.CoordType
      });
  }
  {
    net.opengis.gml.LineStringSegmentType.b(net.opengis.gml.AbstractCurveSegmentType);
    net.opengis.gml.LineStringSegmentType.ps().ers({
        name: 'posOrPointPropertyOrPointRep',
        collection: true,
        elementTypeInfos: [{
            elementName: 'pointRep',
            typeInfo: net.opengis.gml.PointPropertyType
          }, {
            elementName: 'pointProperty',
            typeInfo: net.opengis.gml.PointPropertyType
          }, {
            elementName: 'pos',
            typeInfo: net.opengis.gml.DirectPositionType
          }]
      }).e({
        name: 'posList',
        elementName: 'posList',
        typeInfo: net.opengis.gml.DirectPositionListType
      }).e({
        name: 'coordinates',
        elementName: 'coordinates',
        typeInfo: net.opengis.gml.CoordinatesType
      }).a({
        name: 'interpolation',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
        attributeName: new Jsonix.XML.QName('interpolation')
      });
  }
  {
    net.opengis.gml.SolidArrayPropertyType.ps().er({
        name: 'solid',
        collection: true,
        elementName: '_Solid',
        typeInfo: net.opengis.gml.AbstractSolidType
      });
  }
  {
    net.opengis.gml.ConventionalUnitType.b(net.opengis.gml.UnitDefinitionType);
    net.opengis.gml.ConventionalUnitType.ps().e({
        name: 'conversionToPreferredUnit',
        elementName: 'conversionToPreferredUnit',
        typeInfo: net.opengis.gml.ConversionToPreferredUnitType
      }).e({
        name: 'roughConversionToPreferredUnit',
        elementName: 'roughConversionToPreferredUnit',
        typeInfo: net.opengis.gml.ConversionToPreferredUnitType
      }).e({
        name: 'derivationUnitTerm',
        collection: true,
        elementName: 'derivationUnitTerm',
        typeInfo: net.opengis.gml.DerivationUnitTermType
      });
  }
  {
    net.opengis.gml.UnitOfMeasureType.ps().a({
        name: 'uom',
        attributeName: new Jsonix.XML.QName('uom')
      });
  }
  {
    net.opengis.gml.CircleByCenterPointType.b(net.opengis.gml.ArcByCenterPointType);
    net.opengis.gml.CircleByCenterPointType.ps();
  }
  {
    net.opengis.gml.ArcByCenterPointType.b(net.opengis.gml.AbstractCurveSegmentType);
    net.opengis.gml.ArcByCenterPointType.ps().e({
        name: 'pos',
        elementName: 'pos',
        typeInfo: net.opengis.gml.DirectPositionType
      }).e({
        name: 'pointProperty',
        elementName: 'pointProperty',
        typeInfo: net.opengis.gml.PointPropertyType
      }).e({
        name: 'pointRep',
        elementName: 'pointRep',
        typeInfo: net.opengis.gml.PointPropertyType
      }).e({
        name: 'posList',
        elementName: 'posList',
        typeInfo: net.opengis.gml.DirectPositionListType
      }).e({
        name: 'coordinates',
        elementName: 'coordinates',
        typeInfo: net.opengis.gml.CoordinatesType
      }).e({
        name: 'radius',
        elementName: 'radius',
        typeInfo: net.opengis.gml.LengthType
      }).e({
        name: 'startAngle',
        elementName: 'startAngle',
        typeInfo: net.opengis.gml.AngleType
      }).e({
        name: 'endAngle',
        elementName: 'endAngle',
        typeInfo: net.opengis.gml.AngleType
      }).a({
        name: 'interpolation',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
        attributeName: new Jsonix.XML.QName('interpolation')
      }).a({
        name: 'numArc',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE,
        attributeName: new Jsonix.XML.QName('numArc')
      });
  }
  {
    net.opengis.gml.SphereType.b(net.opengis.gml.AbstractGriddedSurfaceType);
    net.opengis.gml.SphereType.ps().a({
        name: 'horizontalCurveType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
        attributeName: new Jsonix.XML.QName('horizontalCurveType')
      }).a({
        name: 'verticalCurveType',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
        attributeName: new Jsonix.XML.QName('verticalCurveType')
      });
  }
  {
    net.opengis.gml.CircleType.b(net.opengis.gml.ArcType);
    net.opengis.gml.CircleType.ps();
  }
  {
    net.opengis.gml.MultiGeometryPropertyType.ps().er({
        name: 'geometricAggregate',
        elementName: '_GeometricAggregate',
        typeInfo: net.opengis.gml.AbstractGeometricAggregateType
      }).a({
        name: 'remoteSchema',
        attributeName: new Jsonix.XML.QName('http:\/\/www.opengis.net\/gml', 'remoteSchema')
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
    net.opengis.gml.MultiLineStringType.b(net.opengis.gml.AbstractGeometricAggregateType);
    net.opengis.gml.MultiLineStringType.ps().e({
        name: 'lineStringMember',
        collection: true,
        elementName: 'lineStringMember',
        typeInfo: net.opengis.gml.LineStringPropertyType
      });
  }
  {
    net.opengis.gml.SolidType.b(net.opengis.gml.AbstractSolidType);
    net.opengis.gml.SolidType.ps().e({
        name: 'exterior',
        elementName: 'exterior',
        typeInfo: net.opengis.gml.SurfacePropertyType
      }).e({
        name: 'interior',
        collection: true,
        elementName: 'interior',
        typeInfo: net.opengis.gml.SurfacePropertyType
      });
  }
  {
    net.opengis.gml.AbstractSolidType.b(net.opengis.gml.AbstractGeometricPrimitiveType);
    net.opengis.gml.AbstractSolidType.ps();
  }
  {
    net.opengis.gml.BagType.b(net.opengis.gml.AbstractGMLType);
    net.opengis.gml.BagType.ps().e({
        name: 'member',
        collection: true,
        elementName: 'member',
        typeInfo: net.opengis.gml.AssociationType
      }).e({
        name: 'members',
        elementName: 'members',
        typeInfo: net.opengis.gml.ArrayAssociationType
      });
  }
  {
    net.opengis.gml.MultiPolygonType.b(net.opengis.gml.AbstractGeometricAggregateType);
    net.opengis.gml.MultiPolygonType.ps().e({
        name: 'polygonMember',
        collection: true,
        elementName: 'polygonMember',
        typeInfo: net.opengis.gml.PolygonPropertyType
      });
  }
  {
    net.opengis.gml.DMSAngleType.ps().e({
        name: 'degrees',
        elementName: 'degrees',
        typeInfo: net.opengis.gml.DegreesType
      }).e({
        name: 'decimalMinutes',
        elementName: 'decimalMinutes',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      }).e({
        name: 'minutes',
        elementName: 'minutes',
        typeInfo: Jsonix.Schema.XSD.Int.INSTANCE
      }).e({
        name: 'seconds',
        elementName: 'seconds',
        typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
      });
  }
  {
    net.opengis.gml.OffsetCurveType.b(net.opengis.gml.AbstractCurveSegmentType);
    net.opengis.gml.OffsetCurveType.ps().e({
        name: 'offsetBase',
        elementName: 'offsetBase',
        typeInfo: net.opengis.gml.CurvePropertyType
      }).e({
        name: 'distance',
        elementName: 'distance',
        typeInfo: net.opengis.gml.LengthType
      }).e({
        name: 'refDirection',
        elementName: 'refDirection',
        typeInfo: net.opengis.gml.VectorType
      });
  }
  {
    net.opengis.gml.PointArrayPropertyType.ps().e({
        name: 'point',
        collection: true,
        elementName: 'Point',
        typeInfo: net.opengis.gml.PointType
      });
  }
  {
    net.opengis.gml.OrientableCurveType.b(net.opengis.gml.AbstractCurveType);
    net.opengis.gml.OrientableCurveType.ps().e({
        name: 'baseCurve',
        elementName: 'baseCurve',
        typeInfo: net.opengis.gml.CurvePropertyType
      }).a({
        name: 'orientation',
        attributeName: new Jsonix.XML.QName('orientation')
      });
  }
  {
    net.opengis.gml.PolygonPatchArrayPropertyType.b(net.opengis.gml.SurfacePatchArrayPropertyType);
    net.opengis.gml.PolygonPatchArrayPropertyType.ps();
  }
  {
    net.opengis.gml.PolyhedralSurfaceType.b(net.opengis.gml.SurfaceType);
    net.opengis.gml.PolyhedralSurfaceType.ps();
  }
  {
    net.opengis.gml.VectorType.ps().v({
        name: 'value',
        typeInfo: new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Double.INSTANCE)
      }).a({
        name: 'srsName',
        attributeName: new Jsonix.XML.QName('srsName')
      }).a({
        name: 'srsDimension',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE,
        attributeName: new Jsonix.XML.QName('srsDimension')
      }).a({
        name: 'axisLabels',
        typeInfo: new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.String.INSTANCE),
        attributeName: new Jsonix.XML.QName('axisLabels')
      }).a({
        name: 'uomLabels',
        typeInfo: new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.String.INSTANCE),
        attributeName: new Jsonix.XML.QName('uomLabels')
      });
  }
  {
    net.opengis.gml.MultiGeometryType.b(net.opengis.gml.AbstractGeometricAggregateType);
    net.opengis.gml.MultiGeometryType.ps().e({
        name: 'geometryMember',
        collection: true,
        elementName: 'geometryMember',
        typeInfo: net.opengis.gml.GeometryPropertyType
      }).e({
        name: 'geometryMembers',
        elementName: 'geometryMembers',
        typeInfo: net.opengis.gml.GeometryArrayPropertyType
      });
  }
  {
    net.opengis.gml.MultiCurveType.b(net.opengis.gml.AbstractGeometricAggregateType);
    net.opengis.gml.MultiCurveType.ps().e({
        name: 'curveMember',
        collection: true,
        elementName: 'curveMember',
        typeInfo: net.opengis.gml.CurvePropertyType
      }).e({
        name: 'curveMembers',
        elementName: 'curveMembers',
        typeInfo: net.opengis.gml.CurveArrayPropertyType
      });
  }
  {
    net.opengis.gml.MultiPointType.b(net.opengis.gml.AbstractGeometricAggregateType);
    net.opengis.gml.MultiPointType.ps().e({
        name: 'pointMember',
        collection: true,
        elementName: 'pointMember',
        typeInfo: net.opengis.gml.PointPropertyType
      }).e({
        name: 'pointMembers',
        elementName: 'pointMembers',
        typeInfo: net.opengis.gml.PointArrayPropertyType
      });
  }
  {
    net.opengis.gml.ArrayAssociationType.ps().er({
        name: 'object',
        collection: true,
        elementName: '_Object',
        typeInfo: Jsonix.Schema.XSD.AnyType.INSTANCE
      });
  }
  {
    net.opengis.gml.CoordinatesType.ps().v({
        name: 'value'
      }).a({
        name: 'decimal',
        attributeName: new Jsonix.XML.QName('decimal')
      }).a({
        name: 'cs',
        attributeName: new Jsonix.XML.QName('cs')
      }).a({
        name: 'ts',
        attributeName: new Jsonix.XML.QName('ts')
      });
  }
  {
    net.opengis.gml.DirectPositionListType.ps().v({
        name: 'value',
        typeInfo: new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Double.INSTANCE)
      }).a({
        name: 'count',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE,
        attributeName: new Jsonix.XML.QName('count')
      }).a({
        name: 'srsName',
        attributeName: new Jsonix.XML.QName('srsName')
      }).a({
        name: 'srsDimension',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE,
        attributeName: new Jsonix.XML.QName('srsDimension')
      }).a({
        name: 'axisLabels',
        typeInfo: new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.String.INSTANCE),
        attributeName: new Jsonix.XML.QName('axisLabels')
      }).a({
        name: 'uomLabels',
        typeInfo: new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.String.INSTANCE),
        attributeName: new Jsonix.XML.QName('uomLabels')
      });
  }
  {
    net.opengis.gml.MetaDataPropertyType.ps().ae({
        name: 'any',
        domAllowed: true,
        typedObjectAllowed: true
      }).a({
        name: 'about',
        attributeName: new Jsonix.XML.QName('about')
      }).a({
        name: 'remoteSchema',
        attributeName: new Jsonix.XML.QName('http:\/\/www.opengis.net\/gml', 'remoteSchema')
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
    net.opengis.gml.PolygonPatchType.b(net.opengis.gml.AbstractSurfacePatchType);
    net.opengis.gml.PolygonPatchType.ps().er({
        name: 'exterior',
        elementName: 'exterior',
        typeInfo: net.opengis.gml.AbstractRingPropertyType
      }).er({
        name: 'interior',
        collection: true,
        elementName: 'interior',
        typeInfo: net.opengis.gml.AbstractRingPropertyType
      }).a({
        name: 'interpolation',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
        attributeName: new Jsonix.XML.QName('interpolation')
      });
  }
  {
    net.opengis.gml.DegreesType.ps().v({
        name: 'value',
        typeInfo: Jsonix.Schema.XSD.Int.INSTANCE
      }).a({
        name: 'direction',
        attributeName: new Jsonix.XML.QName('direction')
      });
  }
  {
    net.opengis.gml.AffinePlacementType.ps().e({
        name: 'location',
        elementName: 'location',
        typeInfo: net.opengis.gml.DirectPositionType
      }).e({
        name: 'refDirection',
        collection: true,
        elementName: 'refDirection',
        typeInfo: net.opengis.gml.VectorType
      }).e({
        name: 'inDimension',
        elementName: 'inDimension',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE
      }).e({
        name: 'outDimension',
        elementName: 'outDimension',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE
      });
  }
  {
    net.opengis.gml.MultiSolidType.b(net.opengis.gml.AbstractGeometricAggregateType);
    net.opengis.gml.MultiSolidType.ps().e({
        name: 'solidMember',
        collection: true,
        elementName: 'solidMember',
        typeInfo: net.opengis.gml.SolidPropertyType
      }).e({
        name: 'solidMembers',
        elementName: 'solidMembers',
        typeInfo: net.opengis.gml.SolidArrayPropertyType
      });
  }
  {
    net.opengis.gml.ArcByBulgeType.b(net.opengis.gml.ArcStringByBulgeType);
    net.opengis.gml.ArcByBulgeType.ps();
  }
  {
    net.opengis.gml.FormulaType.ps().e({
        name: 'a',
        elementName: 'a',
        typeInfo: Jsonix.Schema.XSD.Double.INSTANCE
      }).e({
        name: 'b',
        elementName: 'b',
        typeInfo: Jsonix.Schema.XSD.Double.INSTANCE
      }).e({
        name: 'c',
        elementName: 'c',
        typeInfo: Jsonix.Schema.XSD.Double.INSTANCE
      }).e({
        name: 'd',
        elementName: 'd',
        typeInfo: Jsonix.Schema.XSD.Double.INSTANCE
      });
  }
  {
    net.opengis.gml.AngleChoiceType.ps().e({
        name: 'angle',
        elementName: 'angle',
        typeInfo: net.opengis.gml.MeasureType
      }).e({
        name: 'dmsAngle',
        elementName: 'dmsAngle',
        typeInfo: net.opengis.gml.DMSAngleType
      });
  }
  {
    net.opengis.gml.SpeedType.b(net.opengis.gml.MeasureType);
    net.opengis.gml.SpeedType.ps();
  }
  {
    net.opengis.gml.ScaleType.b(net.opengis.gml.MeasureType);
    net.opengis.gml.ScaleType.ps();
  }
  {
    net.opengis.gml.GeometricPrimitivePropertyType.ps().er({
        name: 'geometricPrimitive',
        elementName: '_GeometricPrimitive',
        typeInfo: net.opengis.gml.AbstractGeometricPrimitiveType
      }).a({
        name: 'remoteSchema',
        attributeName: new Jsonix.XML.QName('http:\/\/www.opengis.net\/gml', 'remoteSchema')
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
    net.opengis.gml.AngleType.b(net.opengis.gml.MeasureType);
    net.opengis.gml.AngleType.ps();
  }
  {
    net.opengis.gml.LineStringSegmentArrayPropertyType.ps().e({
        name: 'lineStringSegment',
        collection: true,
        elementName: 'LineStringSegment',
        typeInfo: net.opengis.gml.LineStringSegmentType
      });
  }
  {
    net.opengis.gml.MultiPolygonPropertyType.ps().e({
        name: 'multiPolygon',
        elementName: 'MultiPolygon',
        typeInfo: net.opengis.gml.MultiPolygonType
      }).a({
        name: 'remoteSchema',
        attributeName: new Jsonix.XML.QName('http:\/\/www.opengis.net\/gml', 'remoteSchema')
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
    net.opengis.gml.CodeOrNullListType.ps().v({
        name: 'value',
        typeInfo: new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.String.INSTANCE)
      }).a({
        name: 'codeSpace',
        attributeName: new Jsonix.XML.QName('codeSpace')
      });
  }
  {
    net.opengis.gml.MeasureListType.ps().v({
        name: 'value',
        typeInfo: new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Double.INSTANCE)
      }).a({
        name: 'uom',
        attributeName: new Jsonix.XML.QName('uom')
      });
  }
  {
    net.opengis.gml.RingPropertyType.ps().e({
        name: 'ring',
        elementName: 'Ring',
        typeInfo: net.opengis.gml.RingType
      });
  }
  {
    net.opengis.gml.VolumeType.b(net.opengis.gml.MeasureType);
    net.opengis.gml.VolumeType.ps();
  }
  {
    net.opengis.gml.GridLengthType.b(net.opengis.gml.MeasureType);
    net.opengis.gml.GridLengthType.ps();
  }
  {
    net.opengis.gml.MeasureOrNullListType.ps().v({
        name: 'value',
        typeInfo: new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.String.INSTANCE)
      }).a({
        name: 'uom',
        attributeName: new Jsonix.XML.QName('uom')
      });
  }
  {
    net.opengis.gml.KnotType.ps().e({
        name: 'value',
        elementName: 'value',
        typeInfo: Jsonix.Schema.XSD.Double.INSTANCE
      }).e({
        name: 'multiplicity',
        elementName: 'multiplicity',
        typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE
      }).e({
        name: 'weight',
        elementName: 'weight',
        typeInfo: Jsonix.Schema.XSD.Double.INSTANCE
      });
  }
  {
    net.opengis.gml.MultiLineStringPropertyType.ps().e({
        name: 'multiLineString',
        elementName: 'MultiLineString',
        typeInfo: net.opengis.gml.MultiLineStringType
      }).a({
        name: 'remoteSchema',
        attributeName: new Jsonix.XML.QName('http:\/\/www.opengis.net\/gml', 'remoteSchema')
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
    net.opengis.gml.LinearRingPropertyType.ps().e({
        name: 'linearRing',
        elementName: 'LinearRing',
        typeInfo: net.opengis.gml.LinearRingType
      });
  }
  {
    net.opengis.gml.CodeListType.ps().v({
        name: 'value',
        typeInfo: new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.String.INSTANCE)
      }).a({
        name: 'codeSpace',
        attributeName: new Jsonix.XML.QName('codeSpace')
      });
  }
  {
    net.opengis.gml.LengthType.b(net.opengis.gml.MeasureType);
    net.opengis.gml.LengthType.ps();
  }
  {
    net.opengis.gml.AreaType.b(net.opengis.gml.MeasureType);
    net.opengis.gml.AreaType.ps();
  }
  {
    net.opengis.gml.KnotPropertyType.ps().e({
        name: 'knot',
        elementName: 'Knot',
        typeInfo: net.opengis.gml.KnotType
      });
  }
  {
    net.opengis.gml.TimeType.b(net.opengis.gml.MeasureType);
    net.opengis.gml.TimeType.ps();
  }
  {
    net.opengis.gml.Row.ps().e({
        name: 'posList',
        elementName: 'posList',
        typeInfo: net.opengis.gml.DirectPositionListType
      }).es({
        name: 'geometricPositionGroup',
        collection: true,
        elementTypeInfos: [{
            elementName: 'pos',
            typeInfo: net.opengis.gml.DirectPositionType
          }, {
            elementName: 'pointProperty',
            typeInfo: net.opengis.gml.PointPropertyType
          }]
      });
  }
  {
    net.opengis.gml.ControlPoint.ps().e({
        name: 'posList',
        elementName: 'posList',
        typeInfo: net.opengis.gml.DirectPositionListType
      }).es({
        name: 'geometricPositionGroup',
        collection: true,
        elementTypeInfos: [{
            elementName: 'pointProperty',
            typeInfo: net.opengis.gml.PointPropertyType
          }, {
            elementName: 'pos',
            typeInfo: net.opengis.gml.DirectPositionType
          }]
      });
  }
  {
    net.opengis.gml.RefLocation.ps().e({
        name: 'affinePlacement',
        elementName: 'AffinePlacement',
        typeInfo: net.opengis.gml.AffinePlacementType
      });
  }
}
net.opengis.gml.es().e({
    elementName: 'UnitDefinition',
    typeInfo: net.opengis.gml.UnitDefinitionType,
    substitutionHead: 'Definition'
  }).e({
    elementName: 'outerBoundaryIs',
    typeInfo: net.opengis.gml.AbstractRingPropertyType,
    substitutionHead: 'exterior'
  }).e({
    elementName: 'MultiLineString',
    typeInfo: net.opengis.gml.MultiLineStringType,
    substitutionHead: '_GeometricAggregate'
  }).e({
    elementName: '_GeometricAggregate',
    typeInfo: net.opengis.gml.AbstractGeometricAggregateType,
    substitutionHead: '_Geometry'
  }).e({
    elementName: 'BSpline',
    typeInfo: net.opengis.gml.BSplineType,
    substitutionHead: '_CurveSegment'
  }).e({
    elementName: 'solidProperty',
    typeInfo: net.opengis.gml.SolidPropertyType
  }).e({
    elementName: 'TriangulatedSurface',
    typeInfo: net.opengis.gml.TriangulatedSurfaceType,
    substitutionHead: 'Surface'
  }).e({
    elementName: 'LinearRing',
    typeInfo: net.opengis.gml.LinearRingType,
    substitutionHead: '_Ring'
  }).e({
    elementName: 'DefinitionCollection',
    typeInfo: net.opengis.gml.DictionaryType,
    substitutionHead: 'Definition'
  }).e({
    elementName: 'LineStringSegment',
    typeInfo: net.opengis.gml.LineStringSegmentType,
    substitutionHead: '_CurveSegment'
  }).e({
    elementName: 'innerBoundaryIs',
    typeInfo: net.opengis.gml.AbstractRingPropertyType,
    substitutionHead: 'interior'
  }).e({
    elementName: '_reference',
    typeInfo: net.opengis.gml.ReferenceType
  }).e({
    elementName: 'multiSolidProperty',
    typeInfo: net.opengis.gml.MultiSolidPropertyType
  }).e({
    elementName: '_GriddedSurface',
    typeInfo: net.opengis.gml.AbstractGriddedSurfaceType,
    substitutionHead: '_ParametricCurveSurface'
  }).e({
    elementName: 'solidMembers',
    typeInfo: net.opengis.gml.SolidArrayPropertyType
  }).e({
    elementName: 'unitOfMeasure',
    typeInfo: net.opengis.gml.UnitOfMeasureType
  }).e({
    elementName: 'curveProperty',
    typeInfo: net.opengis.gml.CurvePropertyType
  }).e({
    elementName: 'Circle',
    typeInfo: net.opengis.gml.CircleType,
    substitutionHead: 'Arc'
  }).e({
    elementName: 'ConventionalUnit',
    typeInfo: net.opengis.gml.ConventionalUnitType,
    substitutionHead: 'UnitDefinition'
  }).e({
    elementName: 'description',
    typeInfo: net.opengis.gml.StringOrRefType
  }).e({
    elementName: 'surfaceMembers',
    typeInfo: net.opengis.gml.SurfaceArrayPropertyType
  }).e({
    elementName: 'PolygonPatch',
    typeInfo: net.opengis.gml.PolygonPatchType,
    substitutionHead: '_SurfacePatch'
  }).e({
    elementName: 'AffinePlacement',
    typeInfo: net.opengis.gml.AffinePlacementType
  }).e({
    elementName: 'ArcByCenterPoint',
    typeInfo: net.opengis.gml.ArcByCenterPointType,
    substitutionHead: '_CurveSegment'
  }).e({
    elementName: 'posList',
    typeInfo: net.opengis.gml.DirectPositionListType
  }).e({
    elementName: 'metaDataProperty',
    typeInfo: net.opengis.gml.MetaDataPropertyType
  }).e({
    elementName: 'surfaceProperty',
    typeInfo: net.opengis.gml.SurfacePropertyType
  }).e({
    elementName: '_Solid',
    typeInfo: net.opengis.gml.AbstractSolidType,
    substitutionHead: '_GeometricPrimitive'
  }).e({
    elementName: '_Ring',
    typeInfo: net.opengis.gml.AbstractRingType,
    substitutionHead: '_Geometry'
  }).e({
    elementName: 'MultiSolid',
    typeInfo: net.opengis.gml.MultiSolidType,
    substitutionHead: '_GeometricAggregate'
  }).e({
    elementName: 'OrientableCurve',
    typeInfo: net.opengis.gml.OrientableCurveType,
    substitutionHead: '_Curve'
  }).e({
    elementName: 'multiPosition',
    typeInfo: net.opengis.gml.MultiPointPropertyType
  }).e({
    elementName: 'surfaceMember',
    typeInfo: net.opengis.gml.SurfacePropertyType
  }).e({
    elementName: 'definitionRef',
    typeInfo: net.opengis.gml.ReferenceType
  }).e({
    elementName: 'MultiPolygon',
    typeInfo: net.opengis.gml.MultiPolygonType,
    substitutionHead: '_GeometricAggregate'
  }).e({
    elementName: 'Solid',
    typeInfo: net.opengis.gml.SolidType,
    substitutionHead: '_Solid'
  }).e({
    elementName: 'measure',
    typeInfo: net.opengis.gml.MeasureType
  }).e({
    elementName: 'polygonMember',
    typeInfo: net.opengis.gml.PolygonPropertyType
  }).e({
    elementName: 'MultiGeometry',
    typeInfo: net.opengis.gml.MultiGeometryType,
    substitutionHead: '_GeometricAggregate'
  }).e({
    elementName: 'members',
    typeInfo: net.opengis.gml.ArrayAssociationType
  }).e({
    elementName: '_association',
    typeInfo: net.opengis.gml.AssociationType
  }).e({
    elementName: 'multiCurveProperty',
    typeInfo: net.opengis.gml.MultiCurvePropertyType
  }).e({
    elementName: 'polygonPatches',
    typeInfo: net.opengis.gml.PolygonPatchArrayPropertyType,
    substitutionHead: 'patches'
  }).e({
    elementName: 'PolyhedralSurface',
    typeInfo: net.opengis.gml.PolyhedralSurfaceType,
    substitutionHead: 'Surface'
  }).e({
    elementName: 'name',
    typeInfo: net.opengis.gml.CodeType
  }).e({
    elementName: '_Curve',
    typeInfo: net.opengis.gml.AbstractCurveType,
    substitutionHead: '_GeometricPrimitive'
  }).e({
    elementName: 'roughConversionToPreferredUnit',
    typeInfo: net.opengis.gml.ConversionToPreferredUnitType
  }).e({
    elementName: 'Clothoid',
    typeInfo: net.opengis.gml.ClothoidType,
    substitutionHead: '_CurveSegment'
  }).e({
    elementName: 'Null',
    typeInfo: new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.String.INSTANCE)
  }).e({
    elementName: 'pointProperty',
    typeInfo: net.opengis.gml.PointPropertyType
  }).e({
    elementName: 'geometryMember',
    typeInfo: net.opengis.gml.GeometryPropertyType
  }).e({
    elementName: '_GeometricPrimitive',
    typeInfo: net.opengis.gml.AbstractGeometricPrimitiveType,
    substitutionHead: '_Geometry'
  }).e({
    elementName: 'multiEdgeOf',
    typeInfo: net.opengis.gml.MultiCurvePropertyType
  }).e({
    elementName: 'Curve',
    typeInfo: net.opengis.gml.CurveType,
    substitutionHead: '_Curve'
  }).e({
    elementName: 'curveMembers',
    typeInfo: net.opengis.gml.CurveArrayPropertyType
  }).e({
    elementName: 'lineStringMember',
    typeInfo: net.opengis.gml.LineStringPropertyType
  }).e({
    elementName: 'Array',
    typeInfo: net.opengis.gml.ArrayType,
    substitutionHead: '_GML'
  }).e({
    elementName: 'pos',
    typeInfo: net.opengis.gml.DirectPositionType
  }).e({
    elementName: 'Arc',
    typeInfo: net.opengis.gml.ArcType,
    substitutionHead: 'ArcString'
  }).e({
    elementName: 'exterior',
    typeInfo: net.opengis.gml.AbstractRingPropertyType
  }).e({
    elementName: 'GenericMetaData',
    typeInfo: net.opengis.gml.GenericMetaDataType,
    substitutionHead: '_MetaData'
  }).e({
    elementName: 'Surface',
    typeInfo: net.opengis.gml.SurfaceType,
    substitutionHead: '_Surface'
  }).e({
    elementName: 'Point',
    typeInfo: net.opengis.gml.PointType,
    substitutionHead: '_GeometricPrimitive'
  }).e({
    elementName: 'coord',
    typeInfo: net.opengis.gml.CoordType
  }).e({
    elementName: 'multiCoverage',
    typeInfo: net.opengis.gml.MultiSurfacePropertyType
  }).e({
    elementName: 'MultiSurface',
    typeInfo: net.opengis.gml.MultiSurfaceType,
    substitutionHead: '_GeometricAggregate'
  }).e({
    elementName: 'polygonProperty',
    typeInfo: net.opengis.gml.PolygonPropertyType
  }).e({
    elementName: 'angle',
    typeInfo: net.opengis.gml.MeasureType
  }).e({
    elementName: 'solidMember',
    typeInfo: net.opengis.gml.SolidPropertyType
  }).e({
    elementName: 'Geodesic',
    typeInfo: net.opengis.gml.GeodesicType,
    substitutionHead: 'GeodesicString'
  }).e({
    elementName: 'OrientableSurface',
    typeInfo: net.opengis.gml.OrientableSurfaceType,
    substitutionHead: '_Surface'
  }).e({
    elementName: '_Object',
    typeInfo: Jsonix.Schema.XSD.AnyType.INSTANCE
  }).e({
    elementName: 'member',
    typeInfo: net.opengis.gml.AssociationType
  }).e({
    elementName: 'curveMember',
    typeInfo: net.opengis.gml.CurvePropertyType
  }).e({
    elementName: 'decimalMinutes',
    typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
  }).e({
    elementName: 'Tin',
    typeInfo: net.opengis.gml.TinType,
    substitutionHead: 'TriangulatedSurface'
  }).e({
    elementName: 'Rectangle',
    typeInfo: net.opengis.gml.RectangleType,
    substitutionHead: '_SurfacePatch'
  }).e({
    elementName: 'derivationUnitTerm',
    typeInfo: net.opengis.gml.DerivationUnitTermType
  }).e({
    elementName: 'Polygon',
    typeInfo: net.opengis.gml.PolygonType,
    substitutionHead: '_Surface'
  }).e({
    elementName: 'DefinitionProxy',
    typeInfo: net.opengis.gml.DefinitionProxyType,
    substitutionHead: 'Definition'
  }).e({
    elementName: 'seconds',
    typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE
  }).e({
    elementName: 'CubicSpline',
    typeInfo: net.opengis.gml.CubicSplineType,
    substitutionHead: '_CurveSegment'
  }).e({
    elementName: 'Ring',
    typeInfo: net.opengis.gml.RingType,
    substitutionHead: '_Ring'
  }).e({
    elementName: 'catalogSymbol',
    typeInfo: net.opengis.gml.CodeType
  }).e({
    elementName: 'DerivedUnit',
    typeInfo: net.opengis.gml.DerivedUnitType,
    substitutionHead: 'UnitDefinition'
  }).e({
    elementName: 'ArcString',
    typeInfo: net.opengis.gml.ArcStringType,
    substitutionHead: '_CurveSegment'
  }).e({
    elementName: '_SurfacePatch',
    typeInfo: net.opengis.gml.AbstractSurfacePatchType
  }).e({
    elementName: 'multiExtentOf',
    typeInfo: net.opengis.gml.MultiSurfacePropertyType
  }).e({
    elementName: 'multiGeometryProperty',
    typeInfo: net.opengis.gml.MultiGeometryPropertyType
  }).e({
    elementName: 'multiCenterOf',
    typeInfo: net.opengis.gml.MultiPointPropertyType
  }).e({
    elementName: '_CurveSegment',
    typeInfo: net.opengis.gml.AbstractCurveSegmentType
  }).e({
    elementName: 'interior',
    typeInfo: net.opengis.gml.AbstractRingPropertyType
  }).e({
    elementName: 'CircleByCenterPoint',
    typeInfo: net.opengis.gml.CircleByCenterPointType,
    substitutionHead: 'ArcByCenterPoint'
  }).e({
    elementName: 'Sphere',
    typeInfo: net.opengis.gml.SphereType,
    substitutionHead: '_GriddedSurface'
  }).e({
    elementName: 'solidArrayProperty',
    typeInfo: net.opengis.gml.SolidArrayPropertyType
  }).e({
    elementName: 'pointMembers',
    typeInfo: net.opengis.gml.PointArrayPropertyType
  }).e({
    elementName: 'degrees',
    typeInfo: net.opengis.gml.DegreesType
  }).e({
    elementName: 'minutes',
    typeInfo: Jsonix.Schema.XSD.Int.INSTANCE
  }).e({
    elementName: '_MetaData',
    typeInfo: net.opengis.gml.AbstractMetaDataType,
    substitutionHead: '_Object'
  }).e({
    elementName: '_strictAssociation',
    typeInfo: net.opengis.gml.AssociationType
  }).e({
    elementName: 'ArcByBulge',
    typeInfo: net.opengis.gml.ArcByBulgeType,
    substitutionHead: 'ArcStringByBulge'
  }).e({
    elementName: 'curveArrayProperty',
    typeInfo: net.opengis.gml.CurveArrayPropertyType
  }).e({
    elementName: 'pointRep',
    typeInfo: net.opengis.gml.PointPropertyType
  }).e({
    elementName: 'pointArrayProperty',
    typeInfo: net.opengis.gml.PointArrayPropertyType
  }).e({
    elementName: '_Geometry',
    typeInfo: net.opengis.gml.AbstractGeometryType,
    substitutionHead: '_GML'
  }).e({
    elementName: 'dmsAngle',
    typeInfo: net.opengis.gml.DMSAngleType
  }).e({
    elementName: 'Bag',
    typeInfo: net.opengis.gml.BagType,
    substitutionHead: '_GML'
  }).e({
    elementName: 'conversionToPreferredUnit',
    typeInfo: net.opengis.gml.ConversionToPreferredUnitType
  }).e({
    elementName: 'OffsetCurve',
    typeInfo: net.opengis.gml.OffsetCurveType,
    substitutionHead: '_CurveSegment'
  }).e({
    elementName: 'coordinates',
    typeInfo: net.opengis.gml.CoordinatesType
  }).e({
    elementName: 'MultiCurve',
    typeInfo: net.opengis.gml.MultiCurveType,
    substitutionHead: '_GeometricAggregate'
  }).e({
    elementName: 'MultiPoint',
    typeInfo: net.opengis.gml.MultiPointType,
    substitutionHead: '_GeometricAggregate'
  }).e({
    elementName: 'vector',
    typeInfo: net.opengis.gml.VectorType
  }).e({
    elementName: 'multiCenterLineOf',
    typeInfo: net.opengis.gml.MultiCurvePropertyType
  }).e({
    elementName: 'geometryMembers',
    typeInfo: net.opengis.gml.GeometryArrayPropertyType
  }).e({
    elementName: 'dictionaryEntry',
    typeInfo: net.opengis.gml.DictionaryEntryType
  }).e({
    elementName: '_GML',
    typeInfo: net.opengis.gml.AbstractGMLType,
    substitutionHead: '_Object'
  }).e({
    elementName: 'indirectEntry',
    typeInfo: net.opengis.gml.IndirectEntryType
  }).e({
    elementName: 'Bezier',
    typeInfo: net.opengis.gml.BezierType,
    substitutionHead: 'BSpline'
  }).e({
    elementName: 'multiPointProperty',
    typeInfo: net.opengis.gml.MultiPointPropertyType
  }).e({
    elementName: 'patches',
    typeInfo: net.opengis.gml.SurfacePatchArrayPropertyType
  }).e({
    elementName: 'ArcStringByBulge',
    typeInfo: net.opengis.gml.ArcStringByBulgeType,
    substitutionHead: '_CurveSegment'
  }).e({
    elementName: 'multiLocation',
    typeInfo: net.opengis.gml.MultiPointPropertyType
  }).e({
    elementName: 'lineStringProperty',
    typeInfo: net.opengis.gml.LineStringPropertyType
  }).e({
    elementName: 'trianglePatches',
    typeInfo: net.opengis.gml.TrianglePatchArrayPropertyType,
    substitutionHead: 'patches'
  }).e({
    elementName: 'multiSurfaceProperty',
    typeInfo: net.opengis.gml.MultiSurfacePropertyType
  }).e({
    elementName: 'definitionMember',
    typeInfo: net.opengis.gml.DictionaryEntryType,
    substitutionHead: 'dictionaryEntry'
  }).e({
    elementName: 'surfaceArrayProperty',
    typeInfo: net.opengis.gml.SurfaceArrayPropertyType
  }).e({
    elementName: 'Triangle',
    typeInfo: net.opengis.gml.TriangleType,
    substitutionHead: '_SurfacePatch'
  }).e({
    elementName: 'Cone',
    typeInfo: net.opengis.gml.ConeType,
    substitutionHead: '_GriddedSurface'
  }).e({
    elementName: 'quantityType',
    typeInfo: net.opengis.gml.StringOrRefType
  }).e({
    elementName: 'LineString',
    typeInfo: net.opengis.gml.LineStringType,
    substitutionHead: '_Curve'
  }).e({
    elementName: 'BaseUnit',
    typeInfo: net.opengis.gml.BaseUnitType,
    substitutionHead: 'UnitDefinition'
  }).e({
    elementName: 'Envelope',
    typeInfo: net.opengis.gml.EnvelopeType
  }).e({
    elementName: 'Definition',
    typeInfo: net.opengis.gml.DefinitionType,
    substitutionHead: '_GML'
  }).e({
    elementName: 'GeodesicString',
    typeInfo: net.opengis.gml.GeodesicStringType,
    substitutionHead: '_CurveSegment'
  }).e({
    elementName: '_Surface',
    typeInfo: net.opengis.gml.AbstractSurfaceType,
    substitutionHead: '_GeometricPrimitive'
  }).e({
    elementName: 'baseSurface',
    typeInfo: net.opengis.gml.SurfacePropertyType
  }).e({
    elementName: 'pointMember',
    typeInfo: net.opengis.gml.PointPropertyType
  }).e({
    elementName: 'Cylinder',
    typeInfo: net.opengis.gml.CylinderType,
    substitutionHead: '_GriddedSurface'
  }).e({
    elementName: 'segments',
    typeInfo: net.opengis.gml.CurveSegmentArrayPropertyType
  }).e({
    elementName: '_ParametricCurveSurface',
    typeInfo: net.opengis.gml.AbstractParametricCurveSurfaceType,
    substitutionHead: '_SurfacePatch'
  }).e({
    elementName: 'Dictionary',
    typeInfo: net.opengis.gml.DictionaryType,
    substitutionHead: 'Definition'
  }).e({
    elementName: 'baseCurve',
    typeInfo: net.opengis.gml.CurvePropertyType
  });