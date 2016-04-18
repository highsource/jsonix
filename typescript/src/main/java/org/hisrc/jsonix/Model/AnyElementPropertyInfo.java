package org.hisrc.jsonix.Model;

/**
 * Created by tgrabietz on 15.04.16.
 */
public class AnyElementPropertyInfo extends PropertyInfo implements org.hisrc.jsonix.Binding.Mashalls.Element, org.hisrc.jsonix.Binding.Unmashalls.Element{
    boolean allowDom = true;
    boolean allowTypedObject = true;
    boolean mixed = true;

}
