package org.hisrc.jsonix.Model;

import org.hisrc.jsonix.Mapping.Styled;

public class ClassInfo extends TypeInfo implements Styled{
    Object name = null;
    Object localName = null;
    Object typeName = null;
    Object instanceFactory = null;
    Object properties = null;
    Object propertiesMap = null;
    Object structure = null;
    String targetNamespace = "";
    String defaultElementNamespaceURI = "";
    String defaultAttributeNamespaceURI = "";
    boolean built = false;
    
}
