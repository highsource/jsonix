package org.hisrc.jsonix.Model;

import org.hisrc.jsonix.Mapping.Styled;

public class Module implements Styled {
    Object name = null;
    Object typeInfos = null;
    Object elementInfos = null;
    String targetNamespace = "";
    String defaultElementNamespaceURI = "";
    String defaultAttributeNamespaceURI = "";
}
