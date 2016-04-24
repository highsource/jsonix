package org.hisrc.jsonix.Model;

import org.hisrc.jsonix.Schema.XML.QName;

public class AbstractElementsPropertyInfo extends PropertyInfo implements org.hisrc.jsonix.Binding.Mashalls.Element, org.hisrc.jsonix.Binding.Unmashalls.Element{
    QName wrapperElementName = null;
    boolean allowDom = false;
    boolean allowTypedObject = true;
    boolean mixed = false;

}
