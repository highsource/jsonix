(function() {
    var singleFile = (typeof Jsonix == "object" && Jsonix.singleFile);
    /**
     * Relative path of this script.
     */
    var scriptName = (!singleFile) ? "lib/Jsonix.js" : 'Jsonix.js';
    var jsFiles = window.Jsonix;

    window.Jsonix = {
        _getScriptLocation: (function() {
            var r = new RegExp("(^|(.*?\\/))(" + scriptName + ")(\\?|$)"),
                s = document.getElementsByTagName('script'),
                src, m, l = "";
            for(var i=0, len=s.length; i<len; i++) {
                src = s[i].getAttribute('src');
                if(src) {
                    m = src.match(r);
                    if(m) {
                        l = m[1];
                        break;
                    }
                }
            }
            return (function() { return l; });
        })()
    };

    if(!singleFile) {
      if (!jsFiles) {
      jsFiles = [
'Jsonix/Util.js',
'Jsonix/Class.js',
'Jsonix/XML.js',
'Jsonix/DOM.js',
'Jsonix/Request.js',
'Jsonix/Schema.js',
'Jsonix/Model.js',
'Jsonix/Util/Type.js',
'Jsonix/Util/NumberUtils.js',
'Jsonix/Util/StringUtils.js',
'Jsonix/Util/Ensure.js',
'Jsonix/XML/QName.js',
'Jsonix/XML/Calendar.js',
'Jsonix/XML/Input.js',
'Jsonix/XML/Output.js',
'Jsonix/Mapping.js',
'Jsonix/Mapping/Style.js',
'Jsonix/Mapping/Styled.js',
'Jsonix/Binding.js',
'Jsonix/Binding/Marshalls.js',
'Jsonix/Binding/Unmarshalls.js',
'Jsonix/Context/Marshaller.js',
'Jsonix/Context/Unmarshaller.js',
'Jsonix/Model/TypeInfo.js',
'Jsonix/Model/ClassInfo.js',
'Jsonix/Model/EnumLeafInfo.js',
'Jsonix/Model/ElementInfo.js',
'Jsonix/Model/PropertyInfo.js',
'Jsonix/Model/AnyAttributePropertyInfo.js',
'Jsonix/Model/SingleTypePropertyInfo.js',
'Jsonix/Model/AttributePropertyInfo.js',
'Jsonix/Model/ValuePropertyInfo.js',
'Jsonix/Model/AbstractElementsPropertyInfo.js',
'Jsonix/Model/ElementPropertyInfo.js',
'Jsonix/Model/ElementsPropertyInfo.js',
'Jsonix/Model/ElementMapPropertyInfo.js',
'Jsonix/Model/AbstractElementRefsPropertyInfo.js',
'Jsonix/Model/ElementRefPropertyInfo.js',
'Jsonix/Model/ElementRefsPropertyInfo.js',
'Jsonix/Model/AnyElementPropertyInfo.js',
'Jsonix/Mapping/Style/Standard.js',
'Jsonix/Mapping/Style/Simplified.js',
'Jsonix/Schema/XSD.js',
'Jsonix/Schema/XSD/AnyType.js',
'Jsonix/Schema/XSD/AnySimpleType.js',
'Jsonix/Schema/XSD/List.js',
'Jsonix/Schema/XSD/String.js',
'Jsonix/Schema/XSD/Strings.js',
'Jsonix/Schema/XSD/NormalizedString.js',
'Jsonix/Schema/XSD/Token.js',
'Jsonix/Schema/XSD/Language.js',
'Jsonix/Schema/XSD/Name.js',
'Jsonix/Schema/XSD/NCName.js',
'Jsonix/Schema/XSD/NMToken.js',
'Jsonix/Schema/XSD/NMTokens.js',
'Jsonix/Schema/XSD/Boolean.js',
'Jsonix/Schema/XSD/Base64Binary.js',
'Jsonix/Schema/XSD/HexBinary.js',
'Jsonix/Schema/XSD/Number.js',
'Jsonix/Schema/XSD/Float.js',
'Jsonix/Schema/XSD/Decimal.js',
'Jsonix/Schema/XSD/Integer.js',
'Jsonix/Schema/XSD/NonPositiveInteger.js',
'Jsonix/Schema/XSD/NegativeInteger.js',
'Jsonix/Schema/XSD/Long.js',
'Jsonix/Schema/XSD/Int.js',
'Jsonix/Schema/XSD/Short.js',
'Jsonix/Schema/XSD/Byte.js',
'Jsonix/Schema/XSD/NonNegativeInteger.js',
'Jsonix/Schema/XSD/UnsignedLong.js',
'Jsonix/Schema/XSD/UnsignedInt.js',
'Jsonix/Schema/XSD/UnsignedShort.js',
'Jsonix/Schema/XSD/UnsignedByte.js',
'Jsonix/Schema/XSD/PositiveInteger.js',
'Jsonix/Schema/XSD/Double.js',
'Jsonix/Schema/XSD/AnyURI.js',
'Jsonix/Schema/XSD/QName.js',
'Jsonix/Schema/XSD/Calendar.js',
'Jsonix/Schema/XSD/Duration.js',
'Jsonix/Schema/XSD/DateTime.js',
'Jsonix/Schema/XSD/DateTimeAsDate.js',
'Jsonix/Schema/XSD/Time.js',
'Jsonix/Schema/XSD/TimeAsDate.js',
'Jsonix/Schema/XSD/Date.js',
'Jsonix/Schema/XSD/DateAsDate.js',
'Jsonix/Schema/XSD/GYearMonth.js',
'Jsonix/Schema/XSD/GYear.js',
'Jsonix/Schema/XSD/GMonthDay.js',
'Jsonix/Schema/XSD/GDay.js',
'Jsonix/Schema/XSD/GMonth.js',
'Jsonix/Schema/XSD/ID.js',
'Jsonix/Schema/XSD/IDREF.js',
'Jsonix/Schema/XSD/IDREFS.js',
'Jsonix/Schema/XSI.js',
'Jsonix/Context.js'
      ]; // etc.
      }

      // use "parser-inserted scripts" for guaranteed execution order
      // http://hsivonen.iki.fi/script-execution/
      var scriptTags = new Array(jsFiles.length);
      var host = Jsonix._getScriptLocation() + "lib/";
      for (var i=0, len=jsFiles.length; i<len; i++) {
          scriptTags[i] = "<script src='" + host + jsFiles[i] +
                                 "'></script>";
      }
      if (scriptTags.length > 0) {
          /*jslint evil: true */
          document.write(scriptTags.join(""));
      }
    }
})();