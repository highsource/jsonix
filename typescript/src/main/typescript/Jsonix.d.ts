interface Unmarshaller {
    unmarshalString(arg: string): Object;
    unmarshalFile(arg: File): Object;
}
interface Marshaller {

}

declare module Jsonix {
    export class Context {
        constructor(s: any[]);
        getTypeInfoByName(name: string): TypeInfo;
        getTypeInfoByTypeName(typeName: string): TypeInfo;
        getTypeInfoByTypeNameKey(typeNameKey: string): TypeInfo;
        getElementInfo(name: string, scope: string): any;
        getSubstitutionMembers(name: string): any;

        createMarshaller(): Marshaller;
        createUnmarshaller(): Unmarshaller;

        getNamespaceURI(prefix: string): any;
        getPrefix(namespaceURI: string, defaultPrefix: string): any;

        builtinTypeInfos: {
            Jsonix: {
                Schema: {
                    XSD: {
                        AnyType: { INSTANCE: {} },
                        AnySimpleType: { INSTANCE: {} },
                        AnyURI: { INSTANCE: {} },
                        Base64Binary: { INSTANCE: {} },
                        Boolean: { INSTANCE: {} },
                        Byte: { INSTANCE: {} },
                        Calendar: { INSTANCE: {} },
                        DateAsDate: { INSTANCE: {} },
                        Date: { INSTANCE: {} },
                        DateTimeAsDate: { INSTANCE: {} },
                        DateTime: { INSTANCE: {} },
                        Decimal: { INSTANCE: {} },
                        Double: { INSTANCE: {} },
                        Duration: { INSTANCE: {} },
                        Float: { INSTANCE: {} },
                        GDay: { INSTANCE: {} },
                        GMonth: { INSTANCE: {} },
                        GMonthDay: { INSTANCE: {} },
                        GYear: { INSTANCE: {} },
                        GYearMonth: { INSTANCE: {} },
                        HexBinary: { INSTANCE: {} },
                        ID: { INSTANCE: {} },
                        IDREF: { INSTANCE: {} },
                        IDREFS: { INSTANCE: {} },
                        Int: { INSTANCE: {} },
                        Integer: { INSTANCE: {} },
                        Language: { INSTANCE: {} },
                        Long: { INSTANCE: {} },
                        Name: { INSTANCE: {} },
                        NCName: { INSTANCE: {} },
                        NegativeInteger: { INSTANCE: {} },
                        NMToken: { INSTANCE: {} },
                        NMTokens: { INSTANCE: {} },
                        NonNegativeInteger: { INSTANCE: {} },
                        NonPositiveInteger: { INSTANCE: {} },
                        NormalizedString: { INSTANCE: {} },
                        Number: { INSTANCE: {} },
                        PositiveInteger: { INSTANCE: {} },
                        QName: { INSTANCE: {} },
                        Short: { INSTANCE: {} },
                        String: { INSTANCE: {} },
                        Strings: { INSTANCE: {} },
                        TimeAsDate: { INSTANCE: {} },
                        Time: { INSTANCE: {} },
                        Token: { INSTANCE: {} },
                        UnsignedByte: { INSTANCE: {} },
                        UnsignedInt: { INSTANCE: {} },
                        UnsignedLong: { INSTANCE: {} },
                        UnsignedShort: { INSTANCE: {} },
                    }
                }
            }
        }[];


        // private
        typeInfos: ClassInfo[];

    }
}


interface Styled {
    //{ CLASS_NAME: string },
    mappingStyle: Object;
}

//TODO: package Schema.XSD
interface QName {
    key : string;
    namespaceURI : string;
    localPart : string;
    prefix : string;
    string : string;
}

//TODO: package mapping
interface TypeInfo {
    name: string,
    baseTypeInfo: TypeInfo,
}

interface PropertyInfo{
    name: string;
    collection: boolean;
    targetNamespace: string;
    defaultElementNamespaceURI: string;
    defaultAttributeNamespaceURI: string;
    built: boolean;
}

interface AbstractElementPropertyInfo extends PropertyInfo{
    wrapperElement: QName;
    allowDom: boolean;
    allowTypedObject; boolean;
    mixed: boolean;
}


interface ElementPropertyInfo extends AbstractElementPropertyInfo {
    typeInfo: ClassInfo;
    elementName: QName;
}


interface ClassInfo extends TypeInfo, Styled {
    localName:string;
    typeName: QName;
    instanceFactory: {};
    properties: { [index: number]: PropertyInfo };
    propertiesMap: { [name: string]: PropertyInfo };
    //is inner class
    structure: {
        elements: { [fqn: string]: PropertyInfo },
        attributes: {},
        anyAttribute: {},
        value: {},
        any: {}
    };
    targetNamespace: string,
    defaultElementNamespaceURI: string,
    defaultAttributeNamespaceURI: string
    built: boolean,
    //TODO confirm this syntax
    propertyInfoCreators: {
        aa : {aa};
        anyAttribute : {aa},
        ae :{ae};
        anyElement :{ae};
        a :{a};
        attribute :{a};
        em :{em};
        elementMap :{em};
        e :{e};
        element :{e};
        es :{es};
        elements :{es};
        er :{er};
        elementRef :{er};
        ers :{ers};
        elementRefs :{ers};
        v :{v};
        value :{v}
    }


}