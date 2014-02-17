if (typeof net === 'undefined') {
  net = {};
}
if (typeof net.opengis === 'undefined') {
  net.opengis = {};
}
net.opengis.ogc = new Jsonix.Model.Module({
    defaultElementNamespaceURI: 'http:\/\/www.opengis.net\/ogc'
  });
net.opengis.ogc.cs().c({
    name: 'ExpressionType'
  }).c({
    name: 'FeatureIdType'
  }).c({
    name: 'AbstractIdType'
  }).c({
    name: 'BinarySpatialOpType'
  }).c({
    name: 'SpatialOpsType'
  }).c({
    name: 'BinaryComparisonOpType'
  }).c({
    name: 'ComparisonOpsType'
  }).c({
    name: 'LogicOpsType'
  }).c({
    name: 'PropertyIsLikeType'
  }).c({
    name: 'FID'
  }).c({
    name: 'SimpleArithmetic'
  }).c({
    name: 'BinaryOperatorType'
  }).c({
    name: 'FilterCapabilities'
  }).c({
    name: 'SpatialCapabilitiesType'
  }).c({
    name: 'ScalarCapabilitiesType'
  }).c({
    name: 'IdCapabilitiesType'
  }).c({
    name: 'DistanceBufferType'
  }).c({
    name: 'GmlObjectIdType'
  }).c({
    name: 'LogicalOperators'
  }).c({
    name: 'BBOXType'
  }).c({
    name: 'LiteralType'
  }).c({
    name: 'SortByType'
  }).c({
    name: 'FunctionType'
  }).c({
    name: 'EID'
  }).c({
    name: 'PropertyNameType'
  }).c({
    name: 'UnaryLogicOpType'
  }).c({
    name: 'FilterType'
  }).c({
    name: 'BinaryLogicOpType'
  }).c({
    name: 'PropertyIsBetweenType'
  }).c({
    name: 'PropertyIsNullType'
  }).c({
    name: 'LowerBoundaryType'
  }).c({
    name: 'ComparisonOperatorsType'
  }).c({
    name: 'DistanceType'
  }).c({
    name: 'UpperBoundaryType'
  }).c({
    name: 'SortPropertyType'
  }).c({
    name: 'ArithmeticOperatorsType'
  }).c({
    name: 'SpatialOperatorsType'
  }).c({
    name: 'SpatialOperatorType'
  }).c({
    name: 'FunctionNamesType'
  }).c({
    name: 'FunctionNameType'
  }).c({
    name: 'GeometryOperandsType'
  }).c({
    name: 'FunctionsType'
  });
{
  {
    net.opengis.ogc.ExpressionType.ps();
  }
  {
    net.opengis.ogc.FeatureIdType.b(net.opengis.ogc.AbstractIdType);
    net.opengis.ogc.FeatureIdType.ps().a({
        name: 'fid',
        attributeName: 'fid'
      });
  }
  {
    net.opengis.ogc.AbstractIdType.ps();
  }
  {
    net.opengis.ogc.BinarySpatialOpType.b(net.opengis.ogc.SpatialOpsType);
    net.opengis.ogc.BinarySpatialOpType.ps().ers({
        name: 'rest',
        collection: true,
        elementTypeInfos: [{
            elementName: new Jsonix.XML.QName('http:\/\/www.opengis.net\/gml', 'Envelope'),
            typeInfo: net.opengis.gml.EnvelopeType
          }, {
            elementName: new Jsonix.XML.QName('http:\/\/www.opengis.net\/gml', '_Geometry'),
            typeInfo: net.opengis.gml.AbstractGeometryType
          }, {
            elementName: 'PropertyName',
            typeInfo: net.opengis.ogc.PropertyNameType
          }]
      });
  }
  {
    net.opengis.ogc.SpatialOpsType.ps();
  }
  {
    net.opengis.ogc.BinaryComparisonOpType.b(net.opengis.ogc.ComparisonOpsType);
    net.opengis.ogc.BinaryComparisonOpType.ps().er({
        name: 'expression',
        collection: true,
        elementName: 'expression',
        typeInfo: net.opengis.ogc.ExpressionType
      }).a({
        name: 'matchCase',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE,
        attributeName: 'matchCase'
      });
  }
  {
    net.opengis.ogc.ComparisonOpsType.ps();
  }
  {
    net.opengis.ogc.LogicOpsType.ps();
  }
  {
    net.opengis.ogc.PropertyIsLikeType.b(net.opengis.ogc.ComparisonOpsType);
    net.opengis.ogc.PropertyIsLikeType.ps().e({
        name: 'propertyName',
        elementName: 'PropertyName',
        typeInfo: net.opengis.ogc.PropertyNameType
      }).e({
        name: 'literal',
        elementName: 'Literal',
        typeInfo: net.opengis.ogc.LiteralType
      }).a({
        name: 'wildCard',
        attributeName: 'wildCard'
      }).a({
        name: 'singleChar',
        attributeName: 'singleChar'
      }).a({
        name: 'escapeChar',
        attributeName: 'escapeChar'
      }).a({
        name: 'matchCase',
        typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE,
        attributeName: 'matchCase'
      });
  }
  {
    net.opengis.ogc.FID.ps();
  }
  {
    net.opengis.ogc.SimpleArithmetic.ps();
  }
  {
    net.opengis.ogc.BinaryOperatorType.b(net.opengis.ogc.ExpressionType);
    net.opengis.ogc.BinaryOperatorType.ps().er({
        name: 'expression',
        collection: true,
        elementName: 'expression',
        typeInfo: net.opengis.ogc.ExpressionType
      });
  }
  {
    net.opengis.ogc.FilterCapabilities.ps().e({
        name: 'spatialCapabilities',
        elementName: 'Spatial_Capabilities',
        typeInfo: net.opengis.ogc.SpatialCapabilitiesType
      }).e({
        name: 'scalarCapabilities',
        elementName: 'Scalar_Capabilities',
        typeInfo: net.opengis.ogc.ScalarCapabilitiesType
      }).e({
        name: 'idCapabilities',
        elementName: 'Id_Capabilities',
        typeInfo: net.opengis.ogc.IdCapabilitiesType
      });
  }
  {
    net.opengis.ogc.SpatialCapabilitiesType.ps().e({
        name: 'geometryOperands',
        elementName: 'GeometryOperands',
        typeInfo: net.opengis.ogc.GeometryOperandsType
      }).e({
        name: 'spatialOperators',
        elementName: 'SpatialOperators',
        typeInfo: net.opengis.ogc.SpatialOperatorsType
      });
  }
  {
    net.opengis.ogc.ScalarCapabilitiesType.ps().e({
        name: 'logicalOperators',
        elementName: 'LogicalOperators',
        typeInfo: net.opengis.ogc.LogicalOperators
      }).e({
        name: 'comparisonOperators',
        elementName: 'ComparisonOperators',
        typeInfo: net.opengis.ogc.ComparisonOperatorsType
      }).e({
        name: 'arithmeticOperators',
        elementName: 'ArithmeticOperators',
        typeInfo: net.opengis.ogc.ArithmeticOperatorsType
      });
  }
  {
    net.opengis.ogc.IdCapabilitiesType.ps().es({
        name: 'eidOrFID',
        collection: true,
        elementTypeInfos: [{
            elementName: 'FID',
            typeInfo: net.opengis.ogc.FID
          }, {
            elementName: 'EID',
            typeInfo: net.opengis.ogc.EID
          }]
      });
  }
  {
    net.opengis.ogc.DistanceBufferType.b(net.opengis.ogc.SpatialOpsType);
    net.opengis.ogc.DistanceBufferType.ps().e({
        name: 'propertyName',
        elementName: 'PropertyName',
        typeInfo: net.opengis.ogc.PropertyNameType
      }).er({
        name: 'geometry',
        elementName: new Jsonix.XML.QName('http:\/\/www.opengis.net\/gml', '_Geometry'),
        typeInfo: net.opengis.gml.AbstractGeometryType
      }).e({
        name: 'distance',
        elementName: 'Distance',
        typeInfo: net.opengis.ogc.DistanceType
      });
  }
  {
    net.opengis.ogc.GmlObjectIdType.b(net.opengis.ogc.AbstractIdType);
    net.opengis.ogc.GmlObjectIdType.ps().a({
        name: 'id',
        attributeName: new Jsonix.XML.QName('http:\/\/www.opengis.net\/gml', 'id')
      });
  }
  {
    net.opengis.ogc.LogicalOperators.ps();
  }
  {
    net.opengis.ogc.BBOXType.b(net.opengis.ogc.SpatialOpsType);
    net.opengis.ogc.BBOXType.ps().e({
        name: 'propertyName',
        elementName: 'PropertyName',
        typeInfo: net.opengis.ogc.PropertyNameType
      }).e({
        name: 'envelope',
        elementName: new Jsonix.XML.QName('http:\/\/www.opengis.net\/gml', 'Envelope'),
        typeInfo: net.opengis.gml.EnvelopeType
      });
  }
  {
    net.opengis.ogc.LiteralType.ps().ae({
        name: 'content',
        collection: true,
        typedObjectAllowed: true,
        mixed: true
      });
  }
  {
    net.opengis.ogc.SortByType.ps().e({
        name: 'sortProperty',
        collection: true,
        elementName: 'SortProperty',
        typeInfo: net.opengis.ogc.SortPropertyType
      });
  }
  {
    net.opengis.ogc.FunctionType.b(net.opengis.ogc.ExpressionType);
    net.opengis.ogc.FunctionType.ps().er({
        name: 'expression',
        collection: true,
        elementName: 'expression',
        typeInfo: net.opengis.ogc.ExpressionType
      }).a({
        name: 'name',
        attributeName: 'name'
      });
  }
  {
    net.opengis.ogc.EID.ps();
  }
  {
    net.opengis.ogc.PropertyNameType.b(net.opengis.ogc.ExpressionType);
    net.opengis.ogc.PropertyNameType.ps().ae({
		name: 'content',
		mixed: true
	});
  }
  {
    net.opengis.ogc.UnaryLogicOpType.b(net.opengis.ogc.LogicOpsType);
    net.opengis.ogc.UnaryLogicOpType.ps().er({
        name: 'comparisonOps',
        elementName: 'comparisonOps',
        typeInfo: net.opengis.ogc.ComparisonOpsType
      }).er({
        name: 'spatialOps',
        elementName: 'spatialOps',
        typeInfo: net.opengis.ogc.SpatialOpsType
      }).er({
        name: 'logicOps',
        elementName: 'logicOps',
        typeInfo: net.opengis.ogc.LogicOpsType
      }).e({
        name: 'function',
        elementName: 'Function',
        typeInfo: net.opengis.ogc.FunctionType
      });
  }
  {
    net.opengis.ogc.FilterType.ps().er({
        name: 'spatialOps',
        elementName: 'spatialOps',
        typeInfo: net.opengis.ogc.SpatialOpsType
      }).er({
        name: 'comparisonOps',
        elementName: 'comparisonOps',
        typeInfo: net.opengis.ogc.ComparisonOpsType
      }).er({
        name: 'logicOps',
        elementName: 'logicOps',
        typeInfo: net.opengis.ogc.LogicOpsType
      }).er({
        name: 'id',
        collection: true,
        elementName: '_Id',
        typeInfo: net.opengis.ogc.AbstractIdType
      });
  }
  {
    net.opengis.ogc.BinaryLogicOpType.b(net.opengis.ogc.LogicOpsType);
    net.opengis.ogc.BinaryLogicOpType.ps().ers({
        name: 'comparisonOpsOrSpatialOpsOrLogicOps',
        collection: true,
        elementTypeInfos: [{
            elementName: 'spatialOps',
            typeInfo: net.opengis.ogc.SpatialOpsType
          }, {
            elementName: 'comparisonOps',
            typeInfo: net.opengis.ogc.ComparisonOpsType
          }, {
            elementName: 'Function',
            typeInfo: net.opengis.ogc.FunctionType
          }, {
            elementName: 'logicOps',
            typeInfo: net.opengis.ogc.LogicOpsType
          }]
      });
  }
  {
    net.opengis.ogc.PropertyIsBetweenType.b(net.opengis.ogc.ComparisonOpsType);
    net.opengis.ogc.PropertyIsBetweenType.ps().er({
        name: 'expression',
        elementName: 'expression',
        typeInfo: net.opengis.ogc.ExpressionType
      }).e({
        name: 'lowerBoundary',
        elementName: 'LowerBoundary',
        typeInfo: net.opengis.ogc.LowerBoundaryType
      }).e({
        name: 'upperBoundary',
        elementName: 'UpperBoundary',
        typeInfo: net.opengis.ogc.UpperBoundaryType
      });
  }
  {
    net.opengis.ogc.PropertyIsNullType.b(net.opengis.ogc.ComparisonOpsType);
    net.opengis.ogc.PropertyIsNullType.ps().e({
        name: 'propertyName',
        elementName: 'PropertyName',
        typeInfo: net.opengis.ogc.PropertyNameType
      });
  }
  {
    net.opengis.ogc.LowerBoundaryType.ps().er({
        name: 'expression',
        elementName: 'expression',
        typeInfo: net.opengis.ogc.ExpressionType
      });
  }
  {
    net.opengis.ogc.ComparisonOperatorsType.ps().e({
        name: 'comparisonOperator',
        collection: true,
        elementName: 'ComparisonOperator',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      });
  }
  {
    net.opengis.ogc.DistanceType.ps().v({
        name: 'value',
        typeInfo: Jsonix.Schema.XSD.Double.INSTANCE
      }).a({
        name: 'units',
        attributeName: 'units'
      });
  }
  {
    net.opengis.ogc.UpperBoundaryType.ps().er({
        name: 'expression',
        elementName: 'expression',
        typeInfo: net.opengis.ogc.ExpressionType
      });
  }
  {
    net.opengis.ogc.SortPropertyType.ps().e({
        name: 'propertyName',
        elementName: 'PropertyName',
        typeInfo: net.opengis.ogc.PropertyNameType
      }).e({
        name: 'sortOrder',
        elementName: 'SortOrder',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      });
  }
  {
    net.opengis.ogc.ArithmeticOperatorsType.ps().es({
        name: 'simpleArithmeticOrFunctions',
        collection: true,
        elementTypeInfos: [{
            elementName: 'SimpleArithmetic',
            typeInfo: net.opengis.ogc.SimpleArithmetic
          }, {
            elementName: 'Functions',
            typeInfo: net.opengis.ogc.FunctionsType
          }]
      });
  }
  {
    net.opengis.ogc.SpatialOperatorsType.ps().e({
        name: 'spatialOperator',
        collection: true,
        elementName: 'SpatialOperator',
        typeInfo: net.opengis.ogc.SpatialOperatorType
      });
  }
  {
    net.opengis.ogc.SpatialOperatorType.ps().e({
        name: 'geometryOperands',
        elementName: 'GeometryOperands',
        typeInfo: net.opengis.ogc.GeometryOperandsType
      }).a({
        name: 'name',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
        attributeName: 'name'
      });
  }
  {
    net.opengis.ogc.FunctionNamesType.ps().e({
        name: 'functionName',
        collection: true,
        elementName: 'FunctionName',
        typeInfo: net.opengis.ogc.FunctionNameType
      });
  }
  {
    net.opengis.ogc.FunctionNameType.ps().v({
        name: 'value'
      }).a({
        name: 'nArgs',
        attributeName: 'nArgs'
      });
  }
  {
    net.opengis.ogc.GeometryOperandsType.ps().e({
        name: 'geometryOperand',
        collection: true,
        elementName: 'GeometryOperand',
        typeInfo: Jsonix.Schema.XSD.String.INSTANCE
      });
  }
  {
    net.opengis.ogc.FunctionsType.ps().e({
        name: 'functionNames',
        elementName: 'FunctionNames',
        typeInfo: net.opengis.ogc.FunctionNamesType
      });
  }
}
net.opengis.ogc.es().e({
    elementName: 'FID',
    typeInfo: net.opengis.ogc.FID
  }).e({
    elementName: 'SimpleArithmetic',
    typeInfo: net.opengis.ogc.SimpleArithmetic
  }).e({
    elementName: 'Filter_Capabilities',
    typeInfo: net.opengis.ogc.FilterCapabilities
  }).e({
    elementName: 'LogicalOperators',
    typeInfo: net.opengis.ogc.LogicalOperators
  }).e({
    elementName: 'EID',
    typeInfo: net.opengis.ogc.EID
  }).e({
    elementName: 'Function',
    typeInfo: net.opengis.ogc.FunctionType,
    substitutionHead: 'expression'
  }).e({
    elementName: 'Disjoint',
    typeInfo: net.opengis.ogc.BinarySpatialOpType,
    substitutionHead: 'spatialOps'
  }).e({
    elementName: 'PropertyIsLessThan',
    typeInfo: net.opengis.ogc.BinaryComparisonOpType,
    substitutionHead: 'comparisonOps'
  }).e({
    elementName: 'Crosses',
    typeInfo: net.opengis.ogc.BinarySpatialOpType,
    substitutionHead: 'spatialOps'
  }).e({
    elementName: 'FeatureId',
    typeInfo: net.opengis.ogc.FeatureIdType,
    substitutionHead: '_Id'
  }).e({
    elementName: 'PropertyIsGreaterThanOrEqualTo',
    typeInfo: net.opengis.ogc.BinaryComparisonOpType,
    substitutionHead: 'comparisonOps'
  }).e({
    elementName: 'Intersects',
    typeInfo: net.opengis.ogc.BinarySpatialOpType,
    substitutionHead: 'spatialOps'
  }).e({
    elementName: 'Filter',
    typeInfo: net.opengis.ogc.FilterType
  }).e({
    elementName: 'Sub',
    typeInfo: net.opengis.ogc.BinaryOperatorType,
    substitutionHead: 'expression'
  }).e({
    elementName: 'spatialOps',
    typeInfo: net.opengis.ogc.SpatialOpsType
  }).e({
    elementName: 'Contains',
    typeInfo: net.opengis.ogc.BinarySpatialOpType,
    substitutionHead: 'spatialOps'
  }).e({
    elementName: 'PropertyIsEqualTo',
    typeInfo: net.opengis.ogc.BinaryComparisonOpType,
    substitutionHead: 'comparisonOps'
  }).e({
    elementName: 'Add',
    typeInfo: net.opengis.ogc.BinaryOperatorType,
    substitutionHead: 'expression'
  }).e({
    elementName: 'Beyond',
    typeInfo: net.opengis.ogc.DistanceBufferType,
    substitutionHead: 'spatialOps'
  }).e({
    elementName: 'expression',
    typeInfo: net.opengis.ogc.ExpressionType
  }).e({
    elementName: 'Or',
    typeInfo: net.opengis.ogc.BinaryLogicOpType,
    substitutionHead: 'logicOps'
  }).e({
    elementName: 'Div',
    typeInfo: net.opengis.ogc.BinaryOperatorType,
    substitutionHead: 'expression'
  }).e({
    elementName: 'Touches',
    typeInfo: net.opengis.ogc.BinarySpatialOpType,
    substitutionHead: 'spatialOps'
  }).e({
    elementName: 'Literal',
    typeInfo: net.opengis.ogc.LiteralType,
    substitutionHead: 'expression'
  }).e({
    elementName: 'comparisonOps',
    typeInfo: net.opengis.ogc.ComparisonOpsType
  }).e({
    elementName: 'Equals',
    typeInfo: net.opengis.ogc.BinarySpatialOpType,
    substitutionHead: 'spatialOps'
  }).e({
    elementName: 'Mul',
    typeInfo: net.opengis.ogc.BinaryOperatorType,
    substitutionHead: 'expression'
  }).e({
    elementName: 'Overlaps',
    typeInfo: net.opengis.ogc.BinarySpatialOpType,
    substitutionHead: 'spatialOps'
  }).e({
    elementName: 'PropertyIsGreaterThan',
    typeInfo: net.opengis.ogc.BinaryComparisonOpType,
    substitutionHead: 'comparisonOps'
  }).e({
    elementName: 'PropertyIsNotEqualTo',
    typeInfo: net.opengis.ogc.BinaryComparisonOpType,
    substitutionHead: 'comparisonOps'
  }).e({
    elementName: 'PropertyIsLessThanOrEqualTo',
    typeInfo: net.opengis.ogc.BinaryComparisonOpType,
    substitutionHead: 'comparisonOps'
  }).e({
    elementName: '_Id',
    typeInfo: net.opengis.ogc.AbstractIdType
  }).e({
    elementName: 'logicOps',
    typeInfo: net.opengis.ogc.LogicOpsType
  }).e({
    elementName: 'PropertyIsLike',
    typeInfo: net.opengis.ogc.PropertyIsLikeType,
    substitutionHead: 'comparisonOps'
  }).e({
    elementName: 'BBOX',
    typeInfo: net.opengis.ogc.BBOXType,
    substitutionHead: 'spatialOps'
  }).e({
    elementName: 'SortBy',
    typeInfo: net.opengis.ogc.SortByType
  }).e({
    elementName: 'Not',
    typeInfo: net.opengis.ogc.UnaryLogicOpType,
    substitutionHead: 'logicOps'
  }).e({
    elementName: 'DWithin',
    typeInfo: net.opengis.ogc.DistanceBufferType,
    substitutionHead: 'spatialOps'
  }).e({
    elementName: 'GmlObjectId',
    typeInfo: net.opengis.ogc.GmlObjectIdType,
    substitutionHead: '_Id'
  }).e({
    elementName: 'Within',
    typeInfo: net.opengis.ogc.BinarySpatialOpType,
    substitutionHead: 'spatialOps'
  }).e({
    elementName: 'PropertyIsBetween',
    typeInfo: net.opengis.ogc.PropertyIsBetweenType,
    substitutionHead: 'comparisonOps'
  }).e({
    elementName: 'And',
    typeInfo: net.opengis.ogc.BinaryLogicOpType,
    substitutionHead: 'logicOps'
  }).e({
    elementName: 'PropertyIsNull',
    typeInfo: net.opengis.ogc.PropertyIsNullType,
    substitutionHead: 'comparisonOps'
  }).e({
    elementName: 'PropertyName',
    typeInfo: net.opengis.ogc.PropertyNameType,
    substitutionHead: 'expression'
  });