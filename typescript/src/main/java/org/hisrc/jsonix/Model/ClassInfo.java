package org.hisrc.jsonix.Model;

import com.sun.org.apache.xml.internal.utils.Hashtree2Node;
import org.hisrc.jsonix.Mapping.Styled;
import org.hisrc.jsonix.Schema.XSD.QName;

import java.util.HashMap;
import java.util.Properties;

public class ClassInfo extends TypeInfo implements Styled {
    class Structure {
        HashMap<String, ElementPropertyInfo> elements = null;
        Object attributes = null;
        Object anyAttribute = null;
        Object value = null;
        Object any = null;
    }

    String name = null;
    String localName = null;
    QName typeName = null;
    Object instanceFactory = null;
    ElementPropertyInfo[] properties = null;
    HashMap<String, ElementMapPropertyInfo> propertiesMap = null;
    Structure structure = null;
    String targetNamespace = "";
    String defaultElementNamespaceURI = "";
    String defaultAttributeNamespaceURI = "";
    boolean built = false;

}
