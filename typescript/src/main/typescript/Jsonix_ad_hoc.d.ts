interface Unmarshaller {
    unmarshalString(arg: string): Object;
    unmarshalFile(arg: File): Object;
}
interface Marshaller {

}

interface TypeInfo {
    mappingStyle: { CLASS_NAME: string },
    name: string,
    localName: string,
    defaultElementNamespaceURI: string,
    targetNamespace: string,
    defaultAttributeNamespaceURI: string,
    baseTypeInfo: {},
    typeName: TypeName,
    properties: { [index: number]: Property },
    propertiesMap: { [name: string]: Property },
    structure: Structure,
    CLASS_NAME: string,
    instanceFactory: {},
    built: boolean,
    propertyInfoCreators: {}

}

interface Structure {
    elements: { [fqn: string]: Property },
    attributes: {},
    anyAttribute: {},
    value: {},
    any: {}
}

interface Property {
    name: string,
    defaultElementNamespaceURI: string,
    targetNamespace: string,
    defaultAttributeNamespaceURI: string,
    collection: boolean,
    required: boolean,
    wrapperElementName: {},
    typeInfo: TypeInfo,
    elementName: TypeName,
    built: boolean,
    allowTypedObject: boolean,
    allowDom: boolean,
    mixed: boolean,
    CLASS_NAME: string
}

interface TypeName {
    namespaceURI: string,
    //wo kommt das her?
    localPart: string,
    prefix: string,
    key: string,
    string: string,
    CLASS_NAME: string
}

declare module Jsonix {
    export class Context {
        constructor(s: any[]);
        getTypeInfoByName(name: string): TypeInfo;
        getTypeInfoByTypeName(typeName: string): TypeInfo;
        getTypeInfoByTypeNameKey(typeNameKey: string): any;
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
        typeInfos: string;
        elementInfos: {
            defaultElementNamespaceURI: string
        }[];

    }
}