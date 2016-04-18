interface TypeInfo {
    name: string,
    //TODO: Confirm this
    baseTypeInfo: TypeInfo,
}

interface Styled {
    //{ CLASS_NAME: string },
    mappingStyle: Object;
}

interface ClassInfo extends TypeInfo, Styled {
    localName:string;

}