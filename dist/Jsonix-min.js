var _jsonix_factory = function(_jsonix_xmldom, _jsonix_xmlhttprequest, _jsonix_fs)
{
	// Complete Jsonix script is included below 
var Jsonix={singleFile:true};
Jsonix.Util={};
Jsonix.Util.extend=function(g,h){g=g||{};
if(h){for(var i in h){var j=h[i];
if(j!==undefined){g[i]=j
}}var f=typeof window!=="undefined"&&window!==null&&typeof window.Event=="function"&&h instanceof window.Event;
if(!f&&h.hasOwnProperty&&h.hasOwnProperty("toString")){g.toString=h.toString
}}return g
};
Jsonix.Class=function(){var n=function(){this.initialize.apply(this,arguments)
};
var p={};
var k=function(){};
var l,i,o;
for(var m=0,j=arguments.length;
m<j;
++m){o=arguments[m];
if(typeof o=="function"){if(m===0&&j>1){i=o.prototype.initialize;
o.prototype.initialize=k;
p=new o();
if(i===undefined){delete o.prototype.initialize
}else{o.prototype.initialize=i
}}l=o.prototype
}else{l=o
}Jsonix.Util.extend(p,l)
}n.prototype=p;
return n
};
Jsonix.XML={};
Jsonix.DOM={createDocument:function(){if(typeof _jsonix_xmldom!=="undefined"){return new (_jsonix_xmldom.DOMImplementation)().createDocument()
}else{if(typeof document!=="undefined"&&Jsonix.Util.Type.exists(document.implementation)&&Jsonix.Util.Type.isFunction(document.implementation.createDocument)){return document.implementation.createDocument("","",null)
}else{if(typeof ActiveXObject!=="undefined"){return new ActiveXObject("MSXML2.DOMDocument")
}else{throw new Error("Error created the DOM document.")
}}}},serialize:function(b){Jsonix.Util.Ensure.ensureExists(b);
if(typeof _jsonix_xmldom!=="undefined"){return(new (_jsonix_xmldom).XMLSerializer()).serializeToString(b)
}else{if(Jsonix.Util.Type.exists(XMLSerializer)){return(new XMLSerializer()).serializeToString(b)
}else{if(Jsonix.Util.Type.exists(b.xml)){return b.xml
}else{throw new Error("Could not serialize the node, neither XMLSerializer nor the [xml] property were found.")
}}}},parse:function(g){Jsonix.Util.Ensure.ensureExists(g);
if(typeof _jsonix_xmldom!=="undefined"){return(new (_jsonix_xmldom).DOMParser()).parseFromString(g,"application/xml")
}else{if(typeof DOMParser!="undefined"){return(new DOMParser()).parseFromString(g,"application/xml")
}else{if(typeof ActiveXObject!="undefined"){var h=Jsonix.DOM.createDocument("","");
h.loadXML(g);
return h
}else{var f="data:text/xml;charset=utf-8,"+encodeURIComponent(g);
var e=new XMLHttpRequest();
e.open("GET",f,false);
if(e.overrideMimeType){e.overrideMimeType("text/xml")
}e.send(null);
return e.responseXML
}}}},load:function(e,g,f){var h=Jsonix.Request.INSTANCE;
h.issue(e,function(a){var b;
if(Jsonix.Util.Type.exists(a.responseXML)&&Jsonix.Util.Type.exists(a.responseXML.documentElement)){b=a.responseXML
}else{if(Jsonix.Util.Type.isString(a.responseText)){b=Jsonix.DOM.parse(a.responseText)
}else{throw new Error("Response does not have valid [responseXML] or [responseText].")
}}g(b)
},function(a){throw new Error("Could not retrieve XML from URL ["+e+"].")
},f)
}};
Jsonix.Request=Jsonix.Class({factories:[function(){return new XMLHttpRequest()
},function(){return new ActiveXObject("Msxml2.XMLHTTP")
},function(){return new ActiveXObject("Msxml2.XMLHTTP.6.0")
},function(){return new ActiveXObject("Msxml2.XMLHTTP.3.0")
},function(){return new ActiveXObject("Microsoft.XMLHTTP")
},function(){if(typeof _jsonix_xmlhttprequest!=="undefined"){var b=_jsonix_xmlhttprequest.XMLHttpRequest;
return new b()
}else{return null
}}],initialize:function(){},issue:function(y,q,x,n){Jsonix.Util.Ensure.ensureString(y);
if(Jsonix.Util.Type.exists(q)){Jsonix.Util.Ensure.ensureFunction(q)
}else{q=function(){}
}if(Jsonix.Util.Type.exists(x)){Jsonix.Util.Ensure.ensureFunction(x)
}else{x=function(){}
}if(Jsonix.Util.Type.exists(n)){Jsonix.Util.Ensure.ensureObject(n)
}else{n={}
}var w=this.createTransport();
var z=Jsonix.Util.Type.isString(n.method)?n.method:"GET";
var v=Jsonix.Util.Type.isBoolean(n.async)?n.async:true;
var p=Jsonix.Util.Type.isString(n.proxy)?n.proxy:Jsonix.Request.PROXY;
var u=Jsonix.Util.Type.isString(n.user)?n.user:null;
var o=Jsonix.Util.Type.isString(n.password)?n.password:null;
if(Jsonix.Util.Type.isString(p)&&(y.indexOf("http")===0)){y=p+encodeURIComponent(y)
}if(Jsonix.Util.Type.isString(u)){w.open(z,y,v,u,o)
}else{w.open(z,y,v)
}if(Jsonix.Util.Type.isObject(n.headers)){for(var s in n.headers){if(n.headers.hasOwnProperty(s)){w.setRequestHeader(s,n.headers[s])
}}}var t=Jsonix.Util.Type.exists(n.data)?n.data:null;
if(!v){w.send(t);
this.handleTransport(w,q,x)
}else{var r=this;
if(typeof window!=="undefined"){w.onreadystatechange=function(){r.handleTransport(w,q,x)
};
window.setTimeout(function(){w.send(t)
},0)
}else{w.onreadystatechange=function(){r.handleTransport(w,q,x)
};
console.log("Sending.");
w.send(t)
}}return w
},handleTransport:function(f,d,e){if(f.readyState==4){if(!f.status||(f.status>=200&&f.status<300)){d(f)
}if(f.status&&(f.status<200||f.status>=300)){e(f)
}}},createTransport:function(){for(var f=0,e=this.factories.length;
f<e;
f++){try{var g=this.factories[f]();
if(g!==null){return g
}}catch(h){}}throw new Error("Could not create XML HTTP transport.")
},CLASS_NAME:"Jsonix.Request"});
Jsonix.Request.INSTANCE=new Jsonix.Request();
Jsonix.Request.PROXY=null;
Jsonix.Schema={};
Jsonix.Model={};
Jsonix.Util.Type={exists:function(b){return(typeof b!=="undefined"&&b!==null)
},isString:function(b){return typeof b==="string"
},isBoolean:function(b){return typeof b==="boolean"
},isObject:function(b){return typeof b==="object"
},isFunction:function(b){return typeof b==="function"
},isNumber:function(b){return(typeof b==="number")&&!isNaN(b)
},isNumberOrNaN:function(b){return(b===+b)||(Object.prototype.toString.call(b)==="[object Number]")
},isNaN:function(b){return Jsonix.Util.Type.isNumberOrNaN(b)&&isNaN(b)
},isArray:function(b){return !!(b&&b.concat&&b.unshift&&!b.callee)
},isDate:function(b){return !!(b&&b.getTimezoneOffset&&b.setUTCFullYear)
},isRegExp:function(b){return !!(b&&b.test&&b.exec&&(b.ignoreCase||b.ignoreCase===false))
},isEqual:function(r,t,w){var a=Jsonix.Util.Type.isFunction(w);
var v=function(g,i,d){var k=slice.call(arguments);
var j=k.length<=1;
var f=j?0:k[0];
var h=j?k[0]:k[1];
var l=k[2]||1;
var m=Math.max(Math.ceil((h-f)/l),0);
var e=0;
var c=new Array(m);
while(e<m){c[e++]=f;
f+=l
}return c
};
var u=Object.keys||function(e){if(Jsonix.Util.Type.isArray(e)){return v(0,e.length)
}var c=[];
for(var d in e){if(e.hasOwnProperty(d)){c[c.length]=d
}}return c
};
if(r===t){return true
}if(Jsonix.Util.Type.isNaN(r)&&Jsonix.Util.Type.isNaN(t)){return true
}var y=typeof r;
var A=typeof t;
if(y!=A){if(a){w("Types differ ["+y+"], ["+A+"].")
}return false
}if(r==t){return true
}if((!r&&t)||(r&&!t)){if(a){w("One is falsy, the other is truthy.")
}return false
}if(Jsonix.Util.Type.isDate(r)&&Jsonix.Util.Type.isDate(t)){return r.getTime()===t.getTime()
}if(Jsonix.Util.Type.isNaN(r)&&Jsonix.Util.Type.isNaN(t)){return false
}if(Jsonix.Util.Type.isRegExp(r)&&Jsonix.Util.Type.isRegExp(t)){return r.source===t.source&&r.global===t.global&&r.ignoreCase===t.ignoreCase&&r.multiline===t.multiline
}if(y!=="object"){return false
}if(r.length&&(r.length!==t.length)){if(a){w("Lengths differ.");
w("A.length="+r.length);
w("B.length="+t.length)
}return false
}var b=u(r);
var s=u(t);
if(b.length!=s.length){if(a){w("Different number of properties ["+b.length+"], ["+s.length+"].")
}for(var z=0;
z<b.length;
z++){if(a){w("A ["+b[z]+"]="+r[b[z]])
}}for(var B=0;
B<s.length;
B++){if(a){w("B ["+s[B]+"]="+t[s[B]])
}}return false
}for(var x=0;
x<b.length;
x++){var q=b[x];
if(!(q in t)||!Jsonix.Util.Type.isEqual(r[q],t[q],w)){if(a){w("One of the properties differ.");
w("Key: ["+q+"].");
w("Left: ["+r[q]+"].");
w("Right: ["+t[q]+"].")
}return false
}}return true
}};
Jsonix.Util.NumberUtils={isInteger:function(b){return Jsonix.Util.Type.isNumber(b)&&((b%1)===0)
}};
Jsonix.Util.StringUtils={trim:(!!String.prototype.trim)?function(b){Jsonix.Util.Ensure.ensureString(b);
return b.trim()
}:function(b){Jsonix.Util.Ensure.ensureString(b);
return b.replace(/^\s\s*/,"").replace(/\s\s*$/,"")
},isEmpty:function(h){var c=h.length;
if(!c){return true
}for(var f=0;
f<c;
f++){var g=h[f];
if(g===" "){}else{if(g>"\u000D"&&g<"\u0085"){return false
}else{if(g<"\u00A0"){if(g<"\u0009"){return false
}else{if(g>"\u0085"){return false
}}}else{if(g>"\u00A0"){if(g<"\u2028"){if(g<"\u180E"){if(g<"\u1680"){return false
}else{if(g>"\u1680"){return false
}}}else{if(g>"\u180E"){if(g<"\u2000"){return false
}else{if(g>"\u200A"){return false
}}}}}else{if(g>"\u2029"){if(g<"\u205F"){if(g<"\u202F"){return false
}else{if(g>"\u202F"){return false
}}}else{if(g>"\u205F"){if(g<"\u3000"){return false
}else{if(g>"\u3000"){return false
}}}}}}}}}}}return true
},isNotBlank:function(b){return Jsonix.Util.Type.isString(b)&&!Jsonix.Util.StringUtils.isEmpty(b)
},whitespaceCharacters:"\u0009\u000A\u000B\u000C\u000D \u0085\u00A0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000",whitespaceCharactersMap:{"\u0009":true,"\u000A":true,"\u000B":true,"\u000C":true,"\u000D":true," ":true,"\u0085":true,"\u00A0":true,"\u1680":true,"\u180E":true,"\u2000":true,"\u2001":true,"\u2002":true,"\u2003":true,"\u2004":true,"\u2005":true,"\u2006":true,"\u2007":true,"\u2008":true,"\u2009":true,"\u200A":true,"\u2028":true,"\u2029":true,"\u202F":true,"\u205F":true,"\u3000":true},splitBySeparatorChars:function(n,u){Jsonix.Util.Ensure.ensureString(n);
Jsonix.Util.Ensure.ensureString(u);
var p=n.length;
if(p===0){return[]
}if(u.length===1){return n.split(u)
}else{var o=[];
var t=1;
var r=0;
var v=0;
var q=false;
var s=false;
var m=-1;
var i=false;
while(r<p){if(u.indexOf(n.charAt(r))>=0){if(q||i){s=true;
if(t++==m){r=p;
s=false
}o.push(n.substring(v,r));
q=false
}v=++r;
continue
}s=false;
q=true;
r++
}if(q||(i&&s)){o.push(n.substring(v,r))
}return o
}}};
Jsonix.Util.Ensure={ensureBoolean:function(b){if(!Jsonix.Util.Type.isBoolean(b)){throw new Error("Argument ["+b+"] must be a boolean.")
}},ensureString:function(b){if(!Jsonix.Util.Type.isString(b)){throw new Error("Argument ["+b+"] must be a string.")
}},ensureNumber:function(b){if(!Jsonix.Util.Type.isNumber(b)){throw new Error("Argument ["+b+"] must be a number.")
}},ensureNumberOrNaN:function(b){if(!Jsonix.Util.Type.isNumberOrNaN(b)){throw new Error("Argument ["+b+"] must be a number or NaN.")
}},ensureInteger:function(b){if(!Jsonix.Util.Type.isNumber(b)){throw new Error("Argument must be an integer, but it is not a number.")
}else{if(!Jsonix.Util.NumberUtils.isInteger(b)){throw new Error("Argument ["+b+"] must be an integer.")
}}},ensureDate:function(b){if(!(b instanceof Date)){throw new Error("Argument ["+b+"] must be a date.")
}},ensureObject:function(b){if(!Jsonix.Util.Type.isObject(b)){throw new Error("Argument ["+b+"] must be an object.")
}},ensureArray:function(b){if(!Jsonix.Util.Type.isArray(b)){throw new Error("Argument ["+b+"] must be an array.")
}},ensureFunction:function(b){if(!Jsonix.Util.Type.isFunction(b)){throw new Error("Argument ["+b+"] must be a function.")
}},ensureExists:function(b){if(!Jsonix.Util.Type.exists(b)){throw new Error("Argument ["+b+"] does not exist.")
}}};
Jsonix.XML.QName=Jsonix.Class({key:null,namespaceURI:null,localPart:null,prefix:null,string:null,initialize:function(n,j,r){var q;
var o;
var m;
var k;
var l;
if(!Jsonix.Util.Type.exists(j)){q="";
o=n;
m=""
}else{if(!Jsonix.Util.Type.exists(r)){q=Jsonix.Util.Type.exists(n)?n:"";
o=j;
var p=j.indexOf(":");
if(p>0&&p<j.length){m=j.substring(0,p);
o=j.substring(p+1)
}else{m="";
o=j
}}else{q=Jsonix.Util.Type.exists(n)?n:"";
o=j;
m=Jsonix.Util.Type.exists(r)?r:""
}}this.namespaceURI=q;
this.localPart=o;
this.prefix=m;
this.key=(q!==""?("{"+q+"}"):"")+o;
this.string=(q!==""?("{"+q+"}"):"")+(m!==""?(m+":"):"")+o
},toString:function(){return this.string
},clone:function(){return new Jsonix.XML.QName(this.namespaceURI,this.localPart,this.prefix)
},equals:function(b){if(!b){return false
}else{return(this.namespaceURI==b.namespaceURI)&&(this.localPart==b.localPart)
}},CLASS_NAME:"Jsonix.XML.QName"});
Jsonix.XML.QName.fromString=function(k){var m=k.indexOf("{");
var o=k.lastIndexOf("}");
var p;
var n;
if((m===0)&&(o>0)&&(o<k.length)){p=k.substring(1,o);
n=k.substring(o+1)
}else{p="";
n=k
}var i=n.indexOf(":");
var l;
var j;
if(i>0&&i<n.length){l=n.substring(0,i);
j=n.substring(i+1)
}else{l="";
j=n
}return new Jsonix.XML.QName(p,j,l)
};
Jsonix.XML.QName.fromObject=function(h){Jsonix.Util.Ensure.ensureObject(h);
if(Jsonix.Util.Type.isString(h.CLASS_NAME)&&h.CLASS_NAME==="Jsonix.XML.QName"){return h
}Jsonix.Util.Ensure.ensureString(h.localPart);
var e=Jsonix.Util.Type.isString(h.namespaceURI)?h.namespaceURI:"";
var f=h.localPart;
var g=Jsonix.Util.Type.isString(h.prefix)?h.prefix:"";
return new Jsonix.XML.QName(e,f,g)
};
Jsonix.XML.QName.key=function(f,e){Jsonix.Util.Ensure.ensureString(e);
if(f){var d=e.indexOf(":");
if(d>0&&d<e.length){localName=e.substring(d+1)
}else{localName=e
}return"{"+f+"}"+localName
}else{return e
}};
Jsonix.XML.Calendar=Jsonix.Class({year:NaN,month:NaN,day:NaN,hour:NaN,minute:NaN,second:NaN,fractionalSecond:NaN,timezone:NaN,initialize:function(b){Jsonix.Util.Ensure.ensureObject(b);
if(Jsonix.Util.Type.exists(b.year)){Jsonix.Util.Ensure.ensureInteger(b.year);
if(b.year>=-9999&&b.year<=9999){this.year=b.year
}else{throw new Error("Invalid year ["+b.year+"].")
}}else{this.year=NaN
}if(Jsonix.Util.Type.exists(b.month)){Jsonix.Util.Ensure.ensureInteger(b.month);
if(b.month>=1&&b.month<=12){this.month=b.month
}else{throw new Error("Invalid month ["+b.month+"].")
}}else{this.month=NaN
}if(Jsonix.Util.Type.exists(b.day)){Jsonix.Util.Ensure.ensureInteger(b.day);
if(b.day>=1&&b.day<=31){this.day=b.day
}else{throw new Error("Invalid day ["+b.day+"].")
}}else{this.day=NaN
}if(Jsonix.Util.Type.exists(b.hour)){Jsonix.Util.Ensure.ensureInteger(b.hour);
if(b.hour>=0&&b.hour<=23){this.hour=b.hour
}else{throw new Error("Invalid hour ["+b.hour+"].")
}}else{this.hour=NaN
}if(Jsonix.Util.Type.exists(b.minute)){Jsonix.Util.Ensure.ensureInteger(b.minute);
if(b.minute>=0&&b.minute<=59){this.minute=b.minute
}else{throw new Error("Invalid minute ["+b.minute+"].")
}}else{this.minute=NaN
}if(Jsonix.Util.Type.exists(b.second)){Jsonix.Util.Ensure.ensureInteger(b.second);
if(b.second>=0&&b.second<=59){this.second=b.second
}else{throw new Error("Invalid second ["+b.second+"].")
}}else{this.second=NaN
}if(Jsonix.Util.Type.exists(b.fractionalSecond)){Jsonix.Util.Ensure.ensureNumber(b.fractionalSecond);
if(b.fractionalSecond>=0&&b.fractionalSecond<1){this.fractionalSecond=b.fractionalSecond
}else{throw new Error("Invalid fractional second ["+b.fractionalSecond+"].")
}}else{this.fractionalSecond=NaN
}if(Jsonix.Util.Type.exists(b.timezone)){if(Jsonix.Util.Type.isNaN(b.timezone)){this.timezone=NaN
}else{Jsonix.Util.Ensure.ensureInteger(b.timezone);
if(b.timezone>=-1440&&b.timezone<1440){this.timezone=b.timezone
}else{throw new Error("Invalid timezone ["+b.timezone+"].")
}}}else{this.timezone=NaN
}},CLASS_NAME:"Jsonix.XML.Calendar"});
Jsonix.XML.Calendar.fromObject=function(b){Jsonix.Util.Ensure.ensureObject(b);
if(Jsonix.Util.Type.isString(b.CLASS_NAME)&&b.CLASS_NAME==="Jsonix.XML.Calendar"){return b
}return new Jsonix.XML.Calendar(b)
};
Jsonix.XML.Input=Jsonix.Class({root:null,node:null,attributes:null,eventType:null,initialize:function(b){Jsonix.Util.Ensure.ensureExists(b);
this.root=b
},hasNext:function(){if(this.node===null){return true
}else{if(this.node===this.root){var b=this.node.nodeType;
if(b===9&&this.eventType===8){return false
}else{if(b===1&&this.eventType===2){return false
}else{return true
}}}else{return true
}}},next:function(){if(this.eventType===null){return this.enter(this.root)
}if(this.eventType===7){var d=this.node.documentElement;
if(d){return this.enter(d)
}else{return this.leave(this.node)
}}else{if(this.eventType===1){var f=this.node.firstChild;
if(f){return this.enter(f)
}else{return this.leave(this.node)
}}else{if(this.eventType===2){var e=this.node.nextSibling;
if(e){return this.enter(e)
}else{return this.leave(this.node)
}}else{return this.leave(this.node)
}}}},enter:function(f){var e=f.nodeType;
this.node=f;
this.attributes=null;
if(e===1){this.eventType=1;
return this.eventType
}else{if(e===2){this.eventType=10;
return this.eventType
}else{if(e===3){var d=f.nodeValue;
if(Jsonix.Util.StringUtils.isEmpty(d)){this.eventType=6
}else{this.eventType=4
}return this.eventType
}else{if(e===4){this.eventType=12;
return this.eventType
}else{if(e===5){this.eventType=9;
return this.eventType
}else{if(e===6){this.eventType=15;
return this.eventType
}else{if(e===7){this.eventType=3;
return this.eventType
}else{if(e===8){this.eventType=5;
return this.eventType
}else{if(e===9){this.eventType=7;
return this.eventType
}else{if(e===10){this.eventType=12;
return this.eventType
}else{if(e===12){this.eventType=14;
return this.eventType
}else{throw new Error("Node type ["+e+"] is not supported.")
}}}}}}}}}}}},leave:function(h){if(h.nodeType===9){if(this.eventType==8){throw new Error("Invalid state.")
}else{this.node=h;
this.attributes=null;
this.eventType=8;
return this.eventType
}}else{if(h.nodeType===1){if(this.eventType==2){var g=h.nextSibling;
if(g){return this.enter(g)
}}else{this.node=h;
this.attributes=null;
this.eventType=2;
return this.eventType
}}}var e=h.nextSibling;
if(e){return this.enter(e)
}else{var f=h.parentNode;
this.node=f;
this.attributes=null;
if(f.nodeType===9){this.eventType=8
}else{this.eventType=2
}return this.eventType
}},getName:function(){var b=this.node;
if(Jsonix.Util.Type.isString(b.nodeName)){if(Jsonix.Util.Type.isString(b.namespaceURI)){return new Jsonix.XML.QName(b.namespaceURI,b.nodeName)
}else{return new Jsonix.XML.QName(b.nodeName)
}}else{return null
}},getNameKey:function(){var b=this.node;
if(Jsonix.Util.Type.isString(b.nodeName)){return Jsonix.XML.QName.key(b.namespaceURI,b.nodeName)
}else{return null
}},getText:function(){return this.node.nodeValue
},nextTag:function(){var b=this.next();
while(b===7||b===4||b===12||b===6||b===3||b===5){b=this.next()
}if(b!==1&&b!==2){throw new Error("Expected start or end tag.")
}return b
},getElementText:function(){if(this.eventType!=1){throw new Error("Parser must be on START_ELEMENT to read next text.")
}var c=this.next();
var d="";
while(c!==2){if(c===4||c===12||c===6||c===9){d=d+this.getText()
}else{if(c===3||c===5){}else{if(c===8){throw new Error("Unexpected end of document when reading element text content.")
}else{if(c===1){throw new Error("Element text content may not contain START_ELEMENT.")
}else{throw new Error("Unexpected event type ["+c+"].")
}}}}c=this.next()
}return d
},getAttributeCount:function(){var b;
if(this.attributes){b=this.attributes
}else{if(this.eventType===1){b=this.node.attributes;
this.attributes=b
}else{if(this.eventType===10){b=this.node.parentNode.attributes;
this.attributes=b
}else{throw new Error("Number of attributes can only be retrieved for START_ELEMENT or ATTRIBUTE.")
}}}return b.length
},getAttributeName:function(d){var e;
if(this.attributes){e=this.attributes
}else{if(this.eventType===1){e=this.node.attributes;
this.attributes=e
}else{if(this.eventType===10){e=this.node.parentNode.attributes;
this.attributes=e
}else{throw new Error("Attribute name can only be retrieved for START_ELEMENT or ATTRIBUTE.")
}}}if(d<0||d>=e.length){throw new Error("Invalid attribute index ["+d+"].")
}var f=e[d];
if(Jsonix.Util.Type.isString(f.namespaceURI)){return new Jsonix.XML.QName(f.namespaceURI,f.nodeName)
}else{return new Jsonix.XML.QName(f.nodeName)
}},getAttributeNameKey:function(d){var e;
if(this.attributes){e=this.attributes
}else{if(this.eventType===1){e=this.node.attributes;
this.attributes=e
}else{if(this.eventType===10){e=this.node.parentNode.attributes;
this.attributes=e
}else{throw new Error("Attribute name key can only be retrieved for START_ELEMENT or ATTRIBUTE.")
}}}if(d<0||d>=e.length){throw new Error("Invalid attribute index ["+d+"].")
}var f=e[d];
return Jsonix.XML.QName.key(f.namespaceURI,f.nodeName)
},getAttributeValue:function(d){var e;
if(this.attributes){e=this.attributes
}else{if(this.eventType===1){e=this.node.attributes;
this.attributes=e
}else{if(this.eventType===10){e=this.node.parentNode.attributes;
this.attributes=e
}else{throw new Error("Attribute value can only be retrieved for START_ELEMENT or ATTRIBUTE.")
}}}if(d<0||d>=e.length){throw new Error("Invalid attribute index ["+d+"].")
}var f=e[d];
return f.value
},getElement:function(){if(this.eventType===1||this.eventType===2){this.eventType=2;
return this.node
}else{throw new Error("Parser must be on START_ELEMENT or END_ELEMENT to return current element.")
}},CLASS_NAME:"Jsonix.XML.Input"});
Jsonix.XML.Input.START_ELEMENT=1;
Jsonix.XML.Input.END_ELEMENT=2;
Jsonix.XML.Input.PROCESSING_INSTRUCTION=3;
Jsonix.XML.Input.CHARACTERS=4;
Jsonix.XML.Input.COMMENT=5;
Jsonix.XML.Input.SPACE=6;
Jsonix.XML.Input.START_DOCUMENT=7;
Jsonix.XML.Input.END_DOCUMENT=8;
Jsonix.XML.Input.ENTITY_REFERENCE=9;
Jsonix.XML.Input.ATTRIBUTE=10;
Jsonix.XML.Input.DTD=11;
Jsonix.XML.Input.CDATA=12;
Jsonix.XML.Input.NAMESPACE=13;
Jsonix.XML.Input.NOTATION_DECLARATION=14;
Jsonix.XML.Input.ENTITY_DECLARATION=15;
Jsonix.XML.Output=Jsonix.Class({document:null,node:null,nodes:null,xmldom:null,namespacePrefixes:null,namespacePrefixIndex:0,initialize:function(c){if(typeof ActiveXObject!=="undefined"){this.xmldom=new ActiveXObject("Microsoft.XMLDOM")
}else{this.xmldom=null
}this.nodes=[];
this.namespacePrefixes={"":""};
if(Jsonix.Util.Type.isObject(c)){if(Jsonix.Util.Type.isObject(c.namespacePrefixes)){for(var d in c.namespacePrefixes){if(c.namespacePrefixes.hasOwnProperty(d)){this.namespacePrefixes[d]=c.namespacePrefixes[d]
}}}}},destroy:function(){this.xmldom=null
},writeStartDocument:function(){var b=Jsonix.DOM.createDocument();
this.document=b;
return this.push(b)
},writeEndDocument:function(){return this.pop()
},writeStartElement:function(l){Jsonix.Util.Ensure.ensureObject(l);
Jsonix.Util.Ensure.ensureString(l.localPart);
var g=Jsonix.Util.Type.isString(l.namespaceURI)?l.namespaceURI:"";
var h=l.localPart;
var j=l.prefix||this.getPrefix(g);
var i=(!j?h:j+":"+h);
var k;
if(Jsonix.Util.Type.isFunction(this.document.createElementNS)){k=this.document.createElementNS(g,i)
}else{if(this.xmldom){k=this.xmldom.createNode(1,i,g)
}else{throw new Error("Could not create an element node.")
}}this.peek().appendChild(k);
return this.push(k)
},writeEndElement:function(){return this.pop()
},writeCharacters:function(c){var d;
if(Jsonix.Util.Type.isFunction(this.document.createTextNode)){d=this.document.createTextNode(c)
}else{if(this.xmldom){d=this.xmldom.createTextNode(c)
}else{throw new Error("Could not create a text node.")
}}this.peek().appendChild(d);
return d
},writeAttribute:function(p,l){Jsonix.Util.Ensure.ensureObject(p);
Jsonix.Util.Ensure.ensureString(p.localPart);
Jsonix.Util.Ensure.ensureString(l);
var i=Jsonix.Util.Type.isString(p.namespaceURI)?p.namespaceURI:"";
var j=p.localPart;
var m=p.prefix||this.getPrefix(i);
var k=(!m?j:m+":"+j);
var n=this.peek();
if(i===""){n.setAttribute(k,l)
}else{if(n.setAttributeNS){n.setAttributeNS(i,k,l)
}else{if(this.xmldom){var o=this.document.createNode(2,k,i);
o.nodeValue=l;
n.setAttributeNode(o)
}else{throw new Error("The [setAttributeNS] method is not implemented")
}}}},writeNode:function(c){var d;
if(Jsonix.Util.Type.exists(this.document.importNode)){d=this.document.importNode(c,true)
}else{d=c
}this.peek().appendChild(d);
return d
},push:function(b){this.nodes.push(b);
return b
},peek:function(){return this.nodes[this.nodes.length-1]
},pop:function(){var b=this.nodes.pop();
return b
},getPrefix:function(d){var c=this.namespacePrefixes[d];
if(Jsonix.Util.Type.exists(c)){return c
}else{c="p"+(this.namespacePrefixIndex++);
this.namespacePrefixes[d]=c;
return c
}},CLASS_NAME:"Jsonix.XML.Output"});
Jsonix.Model.TypeInfo=Jsonix.Class({name:null,initialize:function(){},CLASS_NAME:"Jsonix.Model.TypeInfo"});
Jsonix.Schema.XSD={};
Jsonix.Schema.XSD.NAMESPACE_URI="http://www.w3.org/2001/XMLSchema";
Jsonix.Schema.XSD.PREFIX="xsd";
Jsonix.Schema.XSD.qname=function(b){Jsonix.Util.Ensure.ensureString(b);
return new Jsonix.XML.QName(Jsonix.Schema.XSD.NAMESPACE_URI,b,Jsonix.Schema.XSD.PREFIX)
};
Jsonix.Schema.XSD.AnyType=Jsonix.Class(Jsonix.Model.TypeInfo,{name:"AnyType",typeName:Jsonix.Schema.XSD.qname("anyType"),initialize:function(){Jsonix.Model.TypeInfo.prototype.initialize.apply(this,[])
},isInstance:function(b){throw new Error("Abstract method [isInstance].")
},CLASS_NAME:"Jsonix.Schema.XSD.AnyType"});
Jsonix.Schema.XSD.AnyType.INSTANCE=new Jsonix.Schema.XSD.AnyType();
Jsonix.Schema.XSD.AnySimpleType=Jsonix.Class(Jsonix.Schema.XSD.AnyType,{name:"AnySimpleType",typeName:Jsonix.Schema.XSD.qname("anySimpleType"),simpleType:true,print:function(b){throw new Error("Abstract method [print].")
},parse:function(b){throw new Error("Abstract method [parse].")
},reprint:function(f,e,d){if(Jsonix.Util.Type.isString(f)){return this.print(this.parse(f,e,d),e,d)
}else{return this.print(f,e,d)
}},unmarshal:function(d,e){var f=e.getElementText();
if(Jsonix.Util.StringUtils.isNotBlank(f)){return this.parse(f,d)
}else{return null
}},marshal:function(d,f,e){if(Jsonix.Util.Type.exists(f)){e.writeCharacters(this.reprint(f,d))
}},build:function(c,d){},CLASS_NAME:"Jsonix.Schema.XSD.AnySimpleType"});
Jsonix.Schema.XSD.List=Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType,{name:null,typeName:null,typeInfo:null,separator:" ",trimmedSeparator:Jsonix.Util.StringUtils.whitespaceCharacters,simpleType:true,built:false,initialize:function(e,f,h){Jsonix.Util.Ensure.ensureExists(e);
this.typeInfo=e;
if(!Jsonix.Util.Type.exists(this.name)){this.name=e.name+"*"
}if(Jsonix.Util.Type.exists(f)){this.typeName=f
}if(Jsonix.Util.Type.isString(h)){this.separator=h
}else{this.separator=" "
}var g=Jsonix.Util.StringUtils.trim(this.separator);
if(g.length===0){this.trimmedSeparator=Jsonix.Util.StringUtils.whitespaceCharacters
}else{this.trimmedSeparator=g
}},build:function(c,d){if(!this.built){this.typeInfo=c.resolveTypeInfo(this.typeInfo,d);
this.built=true
}},print:function(g,h){if(!Jsonix.Util.Type.exists(g)){return null
}Jsonix.Util.Ensure.ensureArray(g);
var f="";
for(var e=0;
e<g.length;
e++){if(e>0){f=f+this.separator
}f=f+this.typeInfo.reprint(g[e],h)
}return f
},parse:function(h,i){Jsonix.Util.Ensure.ensureString(h);
var f=Jsonix.Util.StringUtils.splitBySeparatorChars(h,this.trimmedSeparator);
var g=[];
for(var j=0;
j<f.length;
j++){g.push(this.typeInfo.parse(Jsonix.Util.StringUtils.trim(f[j]),i))
}return g
},CLASS_NAME:"Jsonix.Schema.XSD.List"});
Jsonix.Schema.XSD.String=Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType,{name:"String",typeName:Jsonix.Schema.XSD.qname("string"),print:function(b){Jsonix.Util.Ensure.ensureString(b);
return b
},parse:function(b){Jsonix.Util.Ensure.ensureString(b);
return b
},isInstance:function(b){return Jsonix.Util.Type.isString(b)
},CLASS_NAME:"Jsonix.Schema.XSD.String"});
Jsonix.Schema.XSD.String.INSTANCE=new Jsonix.Schema.XSD.String();
Jsonix.Schema.XSD.String.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.String.INSTANCE);
Jsonix.Schema.XSD.Strings=Jsonix.Class(Jsonix.Schema.XSD.List,{name:"Strings",initialize:function(){Jsonix.Schema.XSD.List.prototype.initialize.apply(this,[Jsonix.Schema.XSD.String.INSTANCE,Jsonix.Schema.XSD.qname("strings")," "])
},CLASS_NAME:"Jsonix.Schema.XSD.Strings"});
Jsonix.Schema.XSD.Strings.INSTANCE=new Jsonix.Schema.XSD.Strings();
Jsonix.Schema.XSD.NormalizedString=Jsonix.Class(Jsonix.Schema.XSD.String,{name:"NormalizedString",typeName:Jsonix.Schema.XSD.qname("normalizedString"),CLASS_NAME:"Jsonix.Schema.XSD.NormalizedString"});
Jsonix.Schema.XSD.NormalizedString.INSTANCE=new Jsonix.Schema.XSD.NormalizedString();
Jsonix.Schema.XSD.NormalizedString.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.NormalizedString.INSTANCE);
Jsonix.Schema.XSD.Token=Jsonix.Class(Jsonix.Schema.XSD.NormalizedString,{name:"Token",typeName:Jsonix.Schema.XSD.qname("token"),CLASS_NAME:"Jsonix.Schema.XSD.Token"});
Jsonix.Schema.XSD.Token.INSTANCE=new Jsonix.Schema.XSD.Token();
Jsonix.Schema.XSD.Token.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Token.INSTANCE);
Jsonix.Schema.XSD.Language=Jsonix.Class(Jsonix.Schema.XSD.Token,{name:"Language",typeName:Jsonix.Schema.XSD.qname("language"),CLASS_NAME:"Jsonix.Schema.XSD.Language"});
Jsonix.Schema.XSD.Language.INSTANCE=new Jsonix.Schema.XSD.Language();
Jsonix.Schema.XSD.Language.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Language.INSTANCE);
Jsonix.Schema.XSD.Name=Jsonix.Class(Jsonix.Schema.XSD.Token,{name:"Name",typeName:Jsonix.Schema.XSD.qname("Name"),CLASS_NAME:"Jsonix.Schema.XSD.Name"});
Jsonix.Schema.XSD.Name.INSTANCE=new Jsonix.Schema.XSD.Name();
Jsonix.Schema.XSD.Name.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Name.INSTANCE);
Jsonix.Schema.XSD.NCName=Jsonix.Class(Jsonix.Schema.XSD.Name,{name:"NCName",typeName:Jsonix.Schema.XSD.qname("NCName"),CLASS_NAME:"Jsonix.Schema.XSD.NCName"});
Jsonix.Schema.XSD.NCName.INSTANCE=new Jsonix.Schema.XSD.NCName();
Jsonix.Schema.XSD.NCName.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.NCName.INSTANCE);
Jsonix.Schema.XSD.NMToken=Jsonix.Class(Jsonix.Schema.XSD.Token,{name:"NMToken",typeName:Jsonix.Schema.XSD.qname("NMTOKEN"),CLASS_NAME:"Jsonix.Schema.XSD.NMToken"});
Jsonix.Schema.XSD.NMToken.INSTANCE=new Jsonix.Schema.XSD.NMToken();
Jsonix.Schema.XSD.NMTokens=Jsonix.Class(Jsonix.Schema.XSD.List,{name:"NMTokens",initialize:function(){Jsonix.Schema.XSD.List.prototype.initialize.apply(this,[Jsonix.Schema.XSD.NMToken.INSTANCE,Jsonix.Schema.XSD.qname("NMTOKEN")," "])
},CLASS_NAME:"Jsonix.Schema.XSD.NMTokens"});
Jsonix.Schema.XSD.NMTokens.INSTANCE=new Jsonix.Schema.XSD.NMTokens();
Jsonix.Schema.XSD.Boolean=Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType,{name:"Boolean",typeName:Jsonix.Schema.XSD.qname("boolean"),print:function(b){Jsonix.Util.Ensure.ensureBoolean(b);
return b?"true":"false"
},parse:function(b){Jsonix.Util.Ensure.ensureString(b);
if(b==="true"||b==="1"){return true
}else{if(b==="false"||b==="0"){return false
}else{throw new Error("Either [true], [1], [0] or [false] expected as boolean value.")
}}},isInstance:function(b){return Jsonix.Util.Type.isBoolean(b)
},CLASS_NAME:"Jsonix.Schema.XSD.Boolean"});
Jsonix.Schema.XSD.Boolean.INSTANCE=new Jsonix.Schema.XSD.Boolean();
Jsonix.Schema.XSD.Boolean.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Boolean.INSTANCE);
Jsonix.Schema.XSD.Base64Binary=Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType,{name:"Base64Binary",typeName:Jsonix.Schema.XSD.qname("base64Binary"),charToByte:{},byteToChar:[],initialize:function(){Jsonix.Schema.XSD.AnySimpleType.prototype.initialize.apply(this);
var f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
for(var h=0;
h<f.length;
h++){var e=f.charAt(h);
var g=f.charCodeAt(h);
this.byteToChar[h]=e;
this.charToByte[e]=h
}},print:function(b){Jsonix.Util.Ensure.ensureArray(b);
return this.encode(b)
},parse:function(b){Jsonix.Util.Ensure.ensureString(b);
return this.decode(b)
},encode:function(s){var w="";
var i;
var j;
var o;
var p;
var q;
var r;
var t;
var u=0;
var v=0;
var x=s.length;
for(u=0;
u<x;
u+=3){i=s[u]&255;
p=this.byteToChar[i>>2];
if(u+1<x){j=s[u+1]&255;
q=this.byteToChar[((i&3)<<4)|(j>>4)];
if(u+2<x){o=s[u+2]&255;
r=this.byteToChar[((j&15)<<2)|(o>>6)];
t=this.byteToChar[o&63]
}else{r=this.byteToChar[(j&15)<<2];
t="="
}}else{q=this.byteToChar[(i&3)<<4];
r="=";
t="="
}w=w+p+q+r+t
}return w
},decode:function(j){input=j.replace(/[^A-Za-z0-9\+\/\=]/g,"");
var x=(input.length/4)*3;
if(input.charAt(input.length-1)==="="){x--
}if(input.charAt(input.length-2)==="="){x--
}var t=new Array(x);
var i;
var o;
var p;
var q;
var r;
var s;
var u;
var v=0;
var w=0;
for(v=0;
v<x;
v+=3){q=this.charToByte[input.charAt(w++)];
r=this.charToByte[input.charAt(w++)];
s=this.charToByte[input.charAt(w++)];
u=this.charToByte[input.charAt(w++)];
i=(q<<2)|(r>>4);
o=((r&15)<<4)|(s>>2);
p=((s&3)<<6)|u;
t[v]=i;
if(s!=64){t[v+1]=o
}if(u!=64){t[v+2]=p
}}return t
},isInstance:function(b){return Jsonix.Util.Type.isArray(b)
},CLASS_NAME:"Jsonix.Schema.XSD.Base64Binary"});
Jsonix.Schema.XSD.Base64Binary.INSTANCE=new Jsonix.Schema.XSD.Base64Binary();
Jsonix.Schema.XSD.Base64Binary.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Base64Binary.INSTANCE);
Jsonix.Schema.XSD.HexBinary=Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType,{name:"HexBinary",typeName:Jsonix.Schema.XSD.qname("hexBinary"),charToQuartet:{},byteToDuplet:[],initialize:function(){Jsonix.Schema.XSD.AnySimpleType.prototype.initialize.apply(this);
var d="0123456789ABCDEF";
var f=d.toLowerCase();
var e;
for(e=0;
e<16;
e++){this.charToQuartet[d.charAt(e)]=e;
if(e>=10){this.charToQuartet[f.charAt(e)]=e
}}for(e=0;
e<256;
e++){this.byteToDuplet[e]=d[e>>4]+d[e&15]
}},print:function(b){Jsonix.Util.Ensure.ensureArray(b);
return this.encode(b)
},parse:function(b){Jsonix.Util.Ensure.ensureString(b);
return this.decode(b)
},encode:function(f){var e="";
for(var d=0;
d<f.length;
d++){e=e+this.byteToDuplet[f[d]&255]
}return e
},decode:function(j){var i=j.replace(/[^A-Fa-f0-9]/g,"");
var l=i.length>>1;
var n=new Array(l);
for(var h=0;
h<l;
h++){var k=i.charAt(2*h);
var m=i.charAt(2*h+1);
n[h]=this.charToQuartet[k]<<4|this.charToQuartet[m]
}return n
},isInstance:function(b){return Jsonix.Util.Type.isArray(b)
},CLASS_NAME:"Jsonix.Schema.XSD.HexBinary"});
Jsonix.Schema.XSD.HexBinary.INSTANCE=new Jsonix.Schema.XSD.HexBinary();
Jsonix.Schema.XSD.HexBinary.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.HexBinary.INSTANCE);
Jsonix.Schema.XSD.Number=Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType,{name:"Number",typeName:Jsonix.Schema.XSD.qname("number"),print:function(d){Jsonix.Util.Ensure.ensureNumberOrNaN(d);
if(Jsonix.Util.Type.isNaN(d)){return"NaN"
}else{if(d===Infinity){return"INF"
}else{if(d===-Infinity){return"-INF"
}else{var c=String(d);
return c
}}}},parse:function(c){Jsonix.Util.Ensure.ensureString(c);
if(c==="-INF"){return -Infinity
}else{if(c==="INF"){return Infinity
}else{if(c==="NaN"){return NaN
}else{var d=Number(c);
Jsonix.Util.Ensure.ensureNumber(d);
return d
}}}},isInstance:function(b){return Jsonix.Util.Type.isNumberOrNaN(b)
},CLASS_NAME:"Jsonix.Schema.XSD.Number"});
Jsonix.Schema.XSD.Number.INSTANCE=new Jsonix.Schema.XSD.Number();
Jsonix.Schema.XSD.Number.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Number.INSTANCE);
Jsonix.Schema.XSD.Float=Jsonix.Class(Jsonix.Schema.XSD.Number,{name:"Float",typeName:Jsonix.Schema.XSD.qname("float"),isInstance:function(b){return Jsonix.Util.Type.isNaN(b)||b===-Infinity||b===Infinity||(Jsonix.Util.Type.isNumber(b)&&b>=this.MIN_VALUE&&b<=this.MAX_VALUE)
},MIN_VALUE:-3.4028235e+38,MAX_VALUE:3.4028235e+38,CLASS_NAME:"Jsonix.Schema.XSD.Float"});
Jsonix.Schema.XSD.Float.INSTANCE=new Jsonix.Schema.XSD.Float();
Jsonix.Schema.XSD.Float.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Float.INSTANCE);
Jsonix.Schema.XSD.Decimal=Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType,{name:"Decimal",typeName:Jsonix.Schema.XSD.qname("decimal"),print:function(d){Jsonix.Util.Ensure.ensureNumber(d);
var c=String(d);
return c
},parse:function(c){Jsonix.Util.Ensure.ensureString(c);
var d=Number(c);
Jsonix.Util.Ensure.ensureNumber(d);
return d
},isInstance:function(b){return Jsonix.Util.Type.isNumber(b)
},CLASS_NAME:"Jsonix.Schema.XSD.Decimal"});
Jsonix.Schema.XSD.Decimal.INSTANCE=new Jsonix.Schema.XSD.Decimal();
Jsonix.Schema.XSD.Decimal.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Decimal.INSTANCE);
Jsonix.Schema.XSD.Integer=Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType,{name:"Integer",typeName:Jsonix.Schema.XSD.qname("integer"),print:function(d){Jsonix.Util.Ensure.ensureInteger(d);
var c=String(d);
return c
},parse:function(c){Jsonix.Util.Ensure.ensureString(c);
var d=Number(c);
Jsonix.Util.Ensure.ensureInteger(d);
return d
},isInstance:function(b){return Jsonix.Util.NumberUtils.isInteger(b)&&b>=this.MIN_VALUE&&b<=this.MAX_VALUE
},MIN_VALUE:-9223372036854776000,MAX_VALUE:9223372036854776000,CLASS_NAME:"Jsonix.Schema.XSD.Integer"});
Jsonix.Schema.XSD.Integer.INSTANCE=new Jsonix.Schema.XSD.Integer();
Jsonix.Schema.XSD.Integer.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Integer.INSTANCE);
Jsonix.Schema.XSD.NonPositiveInteger=Jsonix.Class(Jsonix.Schema.XSD.Integer,{name:"NonPositiveInteger",typeName:Jsonix.Schema.XSD.qname("nonPositiveInteger"),MIN_VALUE:-9223372036854776000,MAX_VALUE:0,CLASS_NAME:"Jsonix.Schema.XSD.NonPositiveInteger"});
Jsonix.Schema.XSD.NonPositiveInteger.INSTANCE=new Jsonix.Schema.XSD.NonPositiveInteger();
Jsonix.Schema.XSD.NonPositiveInteger.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.NonPositiveInteger.INSTANCE);
Jsonix.Schema.XSD.NegativeInteger=Jsonix.Class(Jsonix.Schema.XSD.NonPositiveInteger,{name:"NegativeInteger",typeName:Jsonix.Schema.XSD.qname("negativeInteger"),MIN_VALUE:-9223372036854776000,MAX_VALUE:-1,CLASS_NAME:"Jsonix.Schema.XSD.NegativeInteger"});
Jsonix.Schema.XSD.NegativeInteger.INSTANCE=new Jsonix.Schema.XSD.NegativeInteger();
Jsonix.Schema.XSD.NegativeInteger.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.NegativeInteger.INSTANCE);
Jsonix.Schema.XSD.Long=Jsonix.Class(Jsonix.Schema.XSD.Integer,{name:"Long",typeName:Jsonix.Schema.XSD.qname("long"),MIN_VALUE:-9223372036854776000,MAX_VALUE:9223372036854776000,CLASS_NAME:"Jsonix.Schema.XSD.Long"});
Jsonix.Schema.XSD.Long.INSTANCE=new Jsonix.Schema.XSD.Long();
Jsonix.Schema.XSD.Long.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Long.INSTANCE);
Jsonix.Schema.XSD.Int=Jsonix.Class(Jsonix.Schema.XSD.Long,{name:"Int",typeName:Jsonix.Schema.XSD.qname("int"),MIN_VALUE:-2147483648,MAX_VALUE:2147483647,CLASS_NAME:"Jsonix.Schema.XSD.Int"});
Jsonix.Schema.XSD.Int.INSTANCE=new Jsonix.Schema.XSD.Int();
Jsonix.Schema.XSD.Int.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Int.INSTANCE);
Jsonix.Schema.XSD.Short=Jsonix.Class(Jsonix.Schema.XSD.Int,{name:"Short",typeName:Jsonix.Schema.XSD.qname("short"),MIN_VALUE:-32768,MAX_VALUE:32767,CLASS_NAME:"Jsonix.Schema.XSD.Short"});
Jsonix.Schema.XSD.Short.INSTANCE=new Jsonix.Schema.XSD.Short();
Jsonix.Schema.XSD.Short.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Short.INSTANCE);
Jsonix.Schema.XSD.Byte=Jsonix.Class(Jsonix.Schema.XSD.Short,{name:"Byte",typeName:Jsonix.Schema.XSD.qname("byte"),MIN_VALUE:-128,MAX_VALUE:127,CLASS_NAME:"Jsonix.Schema.XSD.Byte"});
Jsonix.Schema.XSD.Byte.INSTANCE=new Jsonix.Schema.XSD.Byte();
Jsonix.Schema.XSD.Byte.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Byte.INSTANCE);
Jsonix.Schema.XSD.NonNegativeInteger=Jsonix.Class(Jsonix.Schema.XSD.Integer,{name:"NonNegativeInteger",typeName:Jsonix.Schema.XSD.qname("nonNegativeInteger"),MIN_VALUE:0,MAX_VALUE:9223372036854776000,CLASS_NAME:"Jsonix.Schema.XSD.NonNegativeInteger"});
Jsonix.Schema.XSD.NonNegativeInteger.INSTANCE=new Jsonix.Schema.XSD.NonNegativeInteger();
Jsonix.Schema.XSD.NonNegativeInteger.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.NonNegativeInteger.INSTANCE);
Jsonix.Schema.XSD.UnsignedLong=Jsonix.Class(Jsonix.Schema.XSD.NonNegativeInteger,{name:"UnsignedLong",typeName:Jsonix.Schema.XSD.qname("unsignedLong"),MIN_VALUE:0,MAX_VALUE:18446744073709552000,CLASS_NAME:"Jsonix.Schema.XSD.UnsignedLong"});
Jsonix.Schema.XSD.UnsignedLong.INSTANCE=new Jsonix.Schema.XSD.UnsignedLong();
Jsonix.Schema.XSD.UnsignedLong.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.UnsignedLong.INSTANCE);
Jsonix.Schema.XSD.UnsignedInt=Jsonix.Class(Jsonix.Schema.XSD.UnsignedLong,{name:"UnsignedInt",typeName:Jsonix.Schema.XSD.qname("unsignedInt"),MIN_VALUE:0,MAX_VALUE:4294967295,CLASS_NAME:"Jsonix.Schema.XSD.UnsignedInt"});
Jsonix.Schema.XSD.UnsignedInt.INSTANCE=new Jsonix.Schema.XSD.UnsignedInt();
Jsonix.Schema.XSD.UnsignedInt.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.UnsignedInt.INSTANCE);
Jsonix.Schema.XSD.UnsignedShort=Jsonix.Class(Jsonix.Schema.XSD.UnsignedInt,{name:"UnsignedShort",typeName:Jsonix.Schema.XSD.qname("unsignedShort"),MIN_VALUE:0,MAX_VALUE:65535,CLASS_NAME:"Jsonix.Schema.XSD.UnsignedShort"});
Jsonix.Schema.XSD.UnsignedShort.INSTANCE=new Jsonix.Schema.XSD.UnsignedShort();
Jsonix.Schema.XSD.UnsignedShort.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.UnsignedShort.INSTANCE);
Jsonix.Schema.XSD.UnsignedByte=Jsonix.Class(Jsonix.Schema.XSD.UnsignedShort,{name:"UnsignedByte",typeName:Jsonix.Schema.XSD.qname("unsignedByte"),MIN_VALUE:0,MAX_VALUE:255,CLASS_NAME:"Jsonix.Schema.XSD.UnsignedByte"});
Jsonix.Schema.XSD.UnsignedByte.INSTANCE=new Jsonix.Schema.XSD.UnsignedByte();
Jsonix.Schema.XSD.UnsignedByte.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.UnsignedByte.INSTANCE);
Jsonix.Schema.XSD.PositiveInteger=Jsonix.Class(Jsonix.Schema.XSD.NonNegativeInteger,{name:"PositiveInteger",typeName:Jsonix.Schema.XSD.qname("positiveInteger"),MIN_VALUE:1,MAX_VALUE:9223372036854776000,CLASS_NAME:"Jsonix.Schema.XSD.PositiveInteger"});
Jsonix.Schema.XSD.PositiveInteger.INSTANCE=new Jsonix.Schema.XSD.PositiveInteger();
Jsonix.Schema.XSD.PositiveInteger.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.PositiveInteger.INSTANCE);
Jsonix.Schema.XSD.Double=Jsonix.Class(Jsonix.Schema.XSD.Number,{name:"Double",typeName:Jsonix.Schema.XSD.qname("double"),isInstance:function(b){return Jsonix.Util.Type.isNaN(b)||b===-Infinity||b===Infinity||(Jsonix.Util.Type.isNumber(b)&&b>=this.MIN_VALUE&&b<=this.MAX_VALUE)
},MIN_VALUE:-1.7976931348623157e+308,MAX_VALUE:1.7976931348623157e+308,CLASS_NAME:"Jsonix.Schema.XSD.Double"});
Jsonix.Schema.XSD.Double.INSTANCE=new Jsonix.Schema.XSD.Double();
Jsonix.Schema.XSD.Double.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Double.INSTANCE);
Jsonix.Schema.XSD.AnyURI=Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType,{name:"AnyURI",typeName:Jsonix.Schema.XSD.qname("anyURI"),print:function(b){Jsonix.Util.Ensure.ensureString(b);
return b
},parse:function(b){Jsonix.Util.Ensure.ensureString(b);
return b
},isInstance:function(b){return Jsonix.Util.Type.isString(b)
},CLASS_NAME:"Jsonix.Schema.XSD.AnyURI"});
Jsonix.Schema.XSD.AnyURI.INSTANCE=new Jsonix.Schema.XSD.AnyURI();
Jsonix.Schema.XSD.AnyURI.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.AnyURI.INSTANCE);
Jsonix.Schema.XSD.QName=Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType,{name:"QName",typeName:Jsonix.Schema.XSD.qname("QName"),CLASS_NAME:"Jsonix.Schema.XSD.QName"});
Jsonix.Schema.XSD.QName.INSTANCE=new Jsonix.Schema.XSD.QName();
Jsonix.Schema.XSD.QName.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.QName.INSTANCE);
Jsonix.Schema.XSD.Calendar=Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType,{name:"Calendar",typeName:Jsonix.Schema.XSD.qname("calendar"),parse:function(h){Jsonix.Util.Ensure.ensureString(h);
var j=(h.charAt(0)==="-");
var f=j?-1:1;
var i=j?h.substring(1):h;
var g;
if(i.length>=19&&i.charAt(4)==="-"&&i.charAt(7)==="-"&&i.charAt(10)==="T"&&i.charAt(13)===":"&&i.charAt(16)===":"){return this.parseDateTime(h)
}else{if(i.length>=10&&i.charAt(4)==="-"&&i.charAt(7)==="-"){return this.parseDate(h)
}else{if(i.length>=8&&i.charAt(2)===":"&&i.charAt(5)===":"){return this.parseTime(h)
}else{throw new Error("Value ["+h+"] does not match dateTime, date or time patterns.")
}}}},parseDateTime:function(p){Jsonix.Util.Ensure.ensureString(p);
var w=(p.charAt(0)==="-");
var B=w?-1:1;
var v=w?p.substring(1):p;
if(v.length<19||v.charAt(4)!=="-"||v.charAt(7)!=="-"||v.charAt(10)!=="T"||v.charAt(13)!==":"||v.charAt(16)!==":"){throw new Error("Date time string ["+v+"] must be a string in format ['-'? yyyy '-' mm '-' dd 'T' hh ':' mm ':' ss ('.' s+)? (zzzzzz)?].")
}var x;
var A=v.indexOf("+",19);
if(A>=0){x=A
}else{var u=v.indexOf("-",19);
if(u>=0){x=u
}else{var s=v.indexOf("Z",19);
if(s>=0){x=s
}else{x=v.length
}}}var C=x>0&&x<v.length;
var r=v.substring(0,10);
var D=C?v.substring(11,x):v.substring(11);
var q=C?v.substring(x):"";
var y=this.parseDateString(r);
var z=this.parseTimeString(D);
var t=this.parseTimeZoneString(q);
return Jsonix.XML.Calendar.fromObject({year:B*y.year,month:y.month,day:y.day,hour:z.hour,minute:z.minute,second:z.second,fractionalSecond:z.fractionalSecond,timezone:t})
},parseDate:function(n){Jsonix.Util.Ensure.ensureString(n);
var u=(n.charAt(0)==="-");
var y=u?-1:1;
var r=u?n.substring(1):n;
var v;
var x=r.indexOf("+",10);
if(x>=0){v=x
}else{var t=r.indexOf("-",10);
if(t>=0){v=t
}else{var q=r.indexOf("Z",10);
if(q>=0){v=q
}else{v=r.length
}}}var z=v>0&&v<r.length;
var p=z?r.substring(0,v):r;
var w=this.parseDateString(p);
var o=z?n.substring(v):"";
var s=this.parseTimeZoneString(o);
return Jsonix.XML.Calendar.fromObject({year:y*w.year,month:w.month,day:w.day,timezone:s})
},parseTime:function(k){Jsonix.Util.Ensure.ensureString(k);
var p;
var r=k.indexOf("+",7);
if(r>=0){p=r
}else{var o=k.indexOf("-",7);
if(o>=0){p=o
}else{var m=k.indexOf("Z",7);
if(m>=0){p=m
}else{p=k.length
}}}var s=p>0&&p<k.length;
var t=s?k.substring(0,p):k;
var q=this.parseTimeString(t);
var l=s?k.substring(p):"";
var n=this.parseTimeZoneString(l);
return Jsonix.XML.Calendar.fromObject({hour:q.hour,minute:q.minute,second:q.second,fractionalSecond:q.fractionalSecond,timezone:n})
},parseDateString:function(g){Jsonix.Util.Ensure.ensureString(g);
if(g.length!==10){throw new Error("Date string ["+g+"] must be 10 characters long.")
}if(g.charAt(4)!=="-"||g.charAt(7)!=="-"){throw new Error("Date string ["+g+"] must be a string in format [yyyy '-' mm '-' ss ].")
}var e=this.parseYear(g.substring(0,4));
var h=this.parseMonth(g.substring(5,7));
var f=this.parseDay(g.substring(8,10));
return{year:e,month:h,day:f}
},parseTimeString:function(r){Jsonix.Util.Ensure.ensureString(r);
if(r.length<8||r.charAt(2)!==":"||r.charAt(5)!==":"){throw new Error("Time string ["+r+"] must be a string in format [hh ':' mm ':' ss ('.' s+)?].")
}var n=r.substring(0,2);
var k=r.substring(3,5);
var p=r.substring(6,8);
var j=r.length>=9?r.substring(8):"";
var m=this.parseHour(n);
var o=this.parseHour(k);
var q=this.parseSecond(p);
var l=this.parseFractionalSecond(j);
return{hour:m,minute:o,second:q,fractionalSecond:l}
},parseTimeZoneString:function(i){Jsonix.Util.Ensure.ensureString(i);
if(i===""){return NaN
}else{if(i==="Z"){return 0
}else{if(i.length!==6){throw new Error("Time zone must be an empty string, 'Z' or a string in format [('+' | '-') hh ':' mm].")
}var h=i.charAt(0);
var f;
if(h==="+"){f=1
}else{if(h==="-"){f=-1
}else{throw new Error("First character of the time zone ["+i+"] must be '+' or '-'.")
}}var g=this.parseHour(i.substring(1,3));
var j=this.parseMinute(i.substring(4,6));
return -1*f*(g*60+j)
}}},parseYear:function(c){Jsonix.Util.Ensure.ensureString(c);
if(c.length!==4){throw new Error("Year ["+c+"] must be a four-digit number.")
}var d=Number(c);
Jsonix.Util.Ensure.ensureInteger(d);
return d
},parseMonth:function(c){Jsonix.Util.Ensure.ensureString(c);
if(c.length!==2){throw new Error("Month ["+c+"] must be a two-digit number.")
}var d=Number(c);
Jsonix.Util.Ensure.ensureInteger(d);
return d
},parseDay:function(c){Jsonix.Util.Ensure.ensureString(c);
if(c.length!==2){throw new Error("Day ["+c+"] must be a two-digit number.")
}var d=Number(c);
Jsonix.Util.Ensure.ensureInteger(d);
return d
},parseHour:function(c){Jsonix.Util.Ensure.ensureString(c);
if(c.length!==2){throw new Error("Hour ["+c+"] must be a two-digit number.")
}var d=Number(c);
Jsonix.Util.Ensure.ensureInteger(d);
return d
},parseMinute:function(c){Jsonix.Util.Ensure.ensureString(c);
if(c.length!==2){throw new Error("Minute ["+c+"] must be a two-digit number.")
}var d=Number(c);
Jsonix.Util.Ensure.ensureInteger(d);
return d
},parseSecond:function(c){Jsonix.Util.Ensure.ensureString(c);
if(c.length!==2){throw new Error("Second ["+c+"] must be a two-digit number.")
}var d=Number(c);
Jsonix.Util.Ensure.ensureNumber(d);
return d
},parseFractionalSecond:function(c){Jsonix.Util.Ensure.ensureString(c);
if(c===""){return 0
}else{var d=Number(c);
Jsonix.Util.Ensure.ensureNumber(d);
return d
}},print:function(b){Jsonix.Util.Ensure.ensureObject(b);
if(Jsonix.Util.NumberUtils.isInteger(b.year)&&Jsonix.Util.NumberUtils.isInteger(b.month)&&Jsonix.Util.NumberUtils.isInteger(b.day)&&Jsonix.Util.NumberUtils.isInteger(b.hour)&&Jsonix.Util.NumberUtils.isInteger(b.minute)&&Jsonix.Util.NumberUtils.isInteger(b.second)){return this.printDateTime(b)
}else{if(Jsonix.Util.NumberUtils.isInteger(b.year)&&Jsonix.Util.NumberUtils.isInteger(b.month)&&Jsonix.Util.NumberUtils.isInteger(b.day)){return this.printDate(b)
}else{if(Jsonix.Util.NumberUtils.isInteger(b.hour)&&Jsonix.Util.NumberUtils.isInteger(b.minute)&&Jsonix.Util.NumberUtils.isInteger(b.second)){return this.printTime(b)
}else{throw new Error("Value ["+b+"] is not recognized as dateTime, date or time.")
}}}},printDateTime:function(c){Jsonix.Util.Ensure.ensureObject(c);
Jsonix.Util.Ensure.ensureInteger(c.year);
Jsonix.Util.Ensure.ensureInteger(c.month);
Jsonix.Util.Ensure.ensureInteger(c.day);
Jsonix.Util.Ensure.ensureInteger(c.hour);
Jsonix.Util.Ensure.ensureInteger(c.minute);
Jsonix.Util.Ensure.ensureNumber(c.second);
if(Jsonix.Util.Type.exists(c.fractionalString)){Jsonix.Util.Ensure.ensureNumber(c.fractionalString)
}if(Jsonix.Util.Type.exists(c.timezone)&&!Jsonix.Util.Type.isNaN(c.timezone)){Jsonix.Util.Ensure.ensureInteger(c.timezone)
}var d=this.printDateString(c);
d=d+"T";
d=d+this.printTimeString(c);
if(Jsonix.Util.Type.exists(c.timezone)){d=d+this.printTimeZoneString(c.timezone)
}return d
},printDate:function(c){Jsonix.Util.Ensure.ensureObject(c);
Jsonix.Util.Ensure.ensureNumber(c.year);
Jsonix.Util.Ensure.ensureNumber(c.month);
Jsonix.Util.Ensure.ensureNumber(c.day);
if(Jsonix.Util.Type.exists(c.timezone)&&!Jsonix.Util.Type.isNaN(c.timezone)){Jsonix.Util.Ensure.ensureInteger(c.timezone)
}var d=this.printDateString(c);
if(Jsonix.Util.Type.exists(c.timezone)){d=d+this.printTimeZoneString(c.timezone)
}return d
},printTime:function(c){Jsonix.Util.Ensure.ensureObject(c);
Jsonix.Util.Ensure.ensureNumber(c.hour);
Jsonix.Util.Ensure.ensureNumber(c.minute);
Jsonix.Util.Ensure.ensureNumber(c.second);
if(Jsonix.Util.Type.exists(c.fractionalString)){Jsonix.Util.Ensure.ensureNumber(c.fractionalString)
}if(Jsonix.Util.Type.exists(c.timezone)&&!Jsonix.Util.Type.isNaN(c.timezone)){Jsonix.Util.Ensure.ensureInteger(c.timezone)
}var d=this.printTimeString(c);
if(Jsonix.Util.Type.exists(c.timezone)){d=d+this.printTimeZoneString(c.timezone)
}return d
},printDateString:function(b){Jsonix.Util.Ensure.ensureObject(b);
Jsonix.Util.Ensure.ensureInteger(b.year);
Jsonix.Util.Ensure.ensureInteger(b.month);
Jsonix.Util.Ensure.ensureInteger(b.day);
return(b.year<0?("-"+this.printYear(-b.year)):this.printYear(b.year))+"-"+this.printMonth(b.month)+"-"+this.printDay(b.day)
},printTimeString:function(c){Jsonix.Util.Ensure.ensureObject(c);
Jsonix.Util.Ensure.ensureInteger(c.hour);
Jsonix.Util.Ensure.ensureInteger(c.minute);
Jsonix.Util.Ensure.ensureInteger(c.second);
if(Jsonix.Util.Type.exists(c.fractionalSecond)){Jsonix.Util.Ensure.ensureNumber(c.fractionalSecond)
}var d=this.printHour(c.hour);
d=d+":";
d=d+this.printMinute(c.minute);
d=d+":";
d=d+this.printSecond(c.second);
if(Jsonix.Util.Type.exists(c.fractionalSecond)){d=d+this.printFractionalSecond(c.fractionalSecond)
}return d
},printTimeZoneString:function(j){if(!Jsonix.Util.Type.exists(j)||Jsonix.Util.Type.isNaN(j)){return""
}else{Jsonix.Util.Ensure.ensureInteger(j);
var l=j<0?-1:(j>0?1:0);
var k=j*l;
var i=k%60;
var g=Math.floor(k/60);
var h;
if(l===0){return"Z"
}else{if(l>0){h="-"
}else{if(l<0){h="+"
}}h=h+this.printHour(g);
h=h+":";
h=h+this.printMinute(i);
return h
}}},printYear:function(b){return this.printInteger(b,4)
},printMonth:function(b){return this.printInteger(b,2)
},printDay:function(b){return this.printInteger(b,2)
},printHour:function(b){return this.printInteger(b,2)
},printMinute:function(b){return this.printInteger(b,2)
},printSecond:function(b){return this.printInteger(b,2)
},printFractionalSecond:function(f){Jsonix.Util.Ensure.ensureNumber(f);
if(f<0||f>=1){throw new Error("Fractional second ["+f+"] must be between 0 and 1.")
}else{if(f===0){return""
}else{var e=String(f);
var d=e.indexOf(".");
if(d<0){return""
}else{return e.substring(d)
}}}},printInteger:function(g,h){Jsonix.Util.Ensure.ensureInteger(g);
Jsonix.Util.Ensure.ensureInteger(h);
if(h<=0){throw new Error("Length ["+g+"] must be positive.")
}if(g<0){throw new Error("Value ["+g+"] must not be negative.")
}if(g>=Math.pow(10,h)){throw new Error("Value ["+g+"] must be less than ["+Math.pow(10,h)+"].")
}var f=String(g);
for(var e=f.length;
e<h;
e++){f="0"+f
}return f
},isInstance:function(b){return Jsonix.Util.Type.isObject(b)&&((Jsonix.Util.NumberUtils.isInteger(b.year)&&Jsonix.Util.NumberUtils.isInteger(b.month)&&Jsonix.Util.NumberUtils.isInteger(b.day))||(Jsonix.Util.NumberUtils.isInteger(b.hour)&&Jsonix.Util.NumberUtils.isInteger(b.minute)&&Jsonix.Util.NumberUtils.isInteger(b.second)))
},CLASS_NAME:"Jsonix.Schema.XSD.Calendar"});
Jsonix.Schema.XSD.Calendar.INSTANCE=new Jsonix.Schema.XSD.Calendar();
Jsonix.Schema.XSD.Calendar.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Calendar.INSTANCE);
Jsonix.Schema.XSD.Duration=Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType,{name:"Duration",typeName:Jsonix.Schema.XSD.qname("duration"),CLASS_NAME:"Jsonix.Schema.XSD.Duration"});
Jsonix.Schema.XSD.Duration.INSTANCE=new Jsonix.Schema.XSD.Duration();
Jsonix.Schema.XSD.Duration.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Duration.INSTANCE);
Jsonix.Schema.XSD.DateTime=Jsonix.Class(Jsonix.Schema.XSD.Calendar,{name:"DateTime",typeName:Jsonix.Schema.XSD.qname("dateTime"),parse:function(m){var k=this.parseDateTime(m);
var h=new Date();
h.setFullYear(k.year);
h.setMonth(k.month-1);
h.setDate(k.day);
h.setHours(k.hour);
h.setMinutes(k.minute);
h.setSeconds(k.second);
if(Jsonix.Util.Type.isNumber(k.fractionalSecond)){h.setMilliseconds(Math.floor(1000*k.fractionalSecond))
}var n;
var l;
var j=h.getTimezoneOffset();
if(Jsonix.Util.NumberUtils.isInteger(k.timezone)){n=k.timezone;
l=false
}else{n=j;
l=true
}var i=new Date(h.getTime()+(60000*(n-j)));
if(l){i.originalTimezoneOffset=null
}else{i.originalTimezoneOffset=n
}return i
},print:function(h){Jsonix.Util.Ensure.ensureDate(h);
var e;
var g=h.getTimezoneOffset();
var f;
if(h.originalTimezoneOffset===null){return this.printDateTime(new Jsonix.XML.Calendar({year:h.getFullYear(),month:h.getMonth()+1,day:h.getDate(),hour:h.getHours(),minute:h.getMinutes(),second:h.getSeconds(),fractionalSecond:(h.getMilliseconds()/1000)}))
}else{if(Jsonix.Util.NumberUtils.isInteger(h.originalTimezoneOffset)){e=h.originalTimezoneOffset;
f=new Date(h.getTime()-(60000*(e-g)))
}else{e=g;
f=h
}return this.printDateTime(new Jsonix.XML.Calendar({year:f.getFullYear(),month:f.getMonth()+1,day:f.getDate(),hour:f.getHours(),minute:f.getMinutes(),second:f.getSeconds(),fractionalSecond:(f.getMilliseconds()/1000),timezone:e}))
}},isInstance:function(b){return Jsonix.Util.Type.isDate(b)
},CLASS_NAME:"Jsonix.Schema.XSD.DateTime"});
Jsonix.Schema.XSD.DateTime.INSTANCE=new Jsonix.Schema.XSD.DateTime();
Jsonix.Schema.XSD.DateTime.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.DateTime.INSTANCE);
Jsonix.Schema.XSD.Time=Jsonix.Class(Jsonix.Schema.XSD.Calendar,{name:"Time",typeName:Jsonix.Schema.XSD.qname("time"),parse:function(m){var k=this.parseTime(m);
var h=new Date();
h.setFullYear(1970);
h.setMonth(0);
h.setDate(1);
h.setHours(k.hour);
h.setMinutes(k.minute);
h.setSeconds(k.second);
if(Jsonix.Util.Type.isNumber(k.fractionalSecond)){h.setMilliseconds(Math.floor(1000*k.fractionalSecond))
}var n;
var l;
var j=h.getTimezoneOffset();
if(Jsonix.Util.NumberUtils.isInteger(k.timezone)){n=k.timezone;
l=false
}else{n=j;
l=true
}var i=new Date(h.getTime()+(60000*(n-j)));
if(l){i.originalTimezoneOffset=null
}else{i.originalTimezoneOffset=n
}return i
},print:function(l){Jsonix.Util.Ensure.ensureDate(l);
var k=l.getTime();
if(k<=-86400000&&k>=86400000){throw new Error("Invalid time ["+l+"].")
}if(l.originalTimezoneOffset===null){return this.printTime(new Jsonix.XML.Calendar({hour:l.getHours(),minute:l.getMinutes(),second:l.getSeconds(),fractionalSecond:(l.getMilliseconds()/1000)}))
}else{var h;
var n;
var j=l.getTimezoneOffset();
if(Jsonix.Util.NumberUtils.isInteger(l.originalTimezoneOffset)){n=l.originalTimezoneOffset;
h=new Date(l.getTime()-(60000*(n-j)))
}else{n=j;
h=l
}var i=h.getTime();
if(i>=0){return this.printTime(new Jsonix.XML.Calendar({hour:h.getHours(),minute:h.getMinutes(),second:h.getSeconds(),fractionalSecond:(h.getMilliseconds()/1000),timezone:n}))
}else{var m=Math.ceil(-i/3600000);
return this.printTime(new Jsonix.XML.Calendar({hour:(h.getHours()+m+n/60)%24,minute:h.getMinutes(),second:h.getSeconds(),fractionalSecond:(h.getMilliseconds()/1000),timezone:-m*60}))
}}},isInstance:function(b){return Jsonix.Util.Type.isDate(b)&&b.getTime()>-86400000&&b.getTime()<86400000
},CLASS_NAME:"Jsonix.Schema.XSD.Time"});
Jsonix.Schema.XSD.Time.INSTANCE=new Jsonix.Schema.XSD.Time();
Jsonix.Schema.XSD.Time.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Time.INSTANCE);
Jsonix.Schema.XSD.Date=Jsonix.Class(Jsonix.Schema.XSD.Calendar,{name:"Date",typeName:Jsonix.Schema.XSD.qname("date"),parse:function(m){var k=this.parseDate(m);
var h=new Date();
h.setFullYear(k.year);
h.setMonth(k.month-1);
h.setDate(k.day);
h.setHours(0);
h.setMinutes(0);
h.setSeconds(0);
h.setMilliseconds(0);
if(Jsonix.Util.Type.isNumber(k.fractionalSecond)){h.setMilliseconds(Math.floor(1000*k.fractionalSecond))
}var n;
var l;
var j=h.getTimezoneOffset();
if(Jsonix.Util.NumberUtils.isInteger(k.timezone)){n=k.timezone;
l=false
}else{n=j;
l=true
}var i=new Date(h.getTime()+(60000*(n-j)));
if(l){i.originalTimezoneOffset=null
}else{i.originalTimezoneOffset=n
}return i
},print:function(k){Jsonix.Util.Ensure.ensureDate(k);
var h=new Date(k.getTime());
h.setHours(0);
h.setMinutes(0);
h.setSeconds(0);
h.setMilliseconds(0);
if(k.originalTimezoneOffset===null){return this.printDate(new Jsonix.XML.Calendar({year:k.getFullYear(),month:k.getMonth()+1,day:k.getDate()}))
}else{if(Jsonix.Util.NumberUtils.isInteger(k.originalTimezoneOffset)){var g=new Date(k.getTime()-(60000*(k.originalTimezoneOffset-k.getTimezoneOffset())));
return this.printDate(new Jsonix.XML.Calendar({year:g.getFullYear(),month:g.getMonth()+1,day:g.getDate(),timezone:k.originalTimezoneOffset}))
}else{var i=k.getTime()-h.getTime();
if(i===0){return this.printDate(new Jsonix.XML.Calendar({year:k.getFullYear(),month:k.getMonth()+1,day:k.getDate()}))
}else{var l=i+(60000*k.getTimezoneOffset());
if(l<=43200000){return this.printDate(new Jsonix.XML.Calendar({year:k.getFullYear(),month:k.getMonth()+1,day:k.getDate(),timezone:Math.floor(l/60000)}))
}else{var j=new Date(k.getTime()+86400000);
return this.printDate(new Jsonix.XML.Calendar({year:j.getFullYear(),month:j.getMonth()+1,day:j.getDate(),timezone:(Math.floor(l/60000)-1440)}))
}}}}},isInstance:function(b){return Jsonix.Util.Type.isDate(b)
},CLASS_NAME:"Jsonix.Schema.XSD.Date"});
Jsonix.Schema.XSD.Date.INSTANCE=new Jsonix.Schema.XSD.Date();
Jsonix.Schema.XSD.Date.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Date.INSTANCE);
Jsonix.Schema.XSD.GYearMonth=Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType,{name:"GYearMonth",typeName:Jsonix.Schema.XSD.qname("gYearMonth"),CLASS_NAME:"Jsonix.Schema.XSD.GYearMonth"});
Jsonix.Schema.XSD.GYearMonth.INSTANCE=new Jsonix.Schema.XSD.GYearMonth();
Jsonix.Schema.XSD.GYearMonth.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.GYearMonth.INSTANCE);
Jsonix.Schema.XSD.GYear=Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType,{name:"GYear",typeName:Jsonix.Schema.XSD.qname("gYear"),CLASS_NAME:"Jsonix.Schema.XSD.GYear"});
Jsonix.Schema.XSD.GYear.INSTANCE=new Jsonix.Schema.XSD.GYear();
Jsonix.Schema.XSD.GYear.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.GYear.INSTANCE);
Jsonix.Schema.XSD.GMonthDay=Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType,{name:"GMonthDay",typeName:Jsonix.Schema.XSD.qname("gMonthDay"),CLASS_NAME:"Jsonix.Schema.XSD.GMonthDay"});
Jsonix.Schema.XSD.GMonthDay.INSTANCE=new Jsonix.Schema.XSD.GMonthDay();
Jsonix.Schema.XSD.GMonthDay.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.GMonthDay.INSTANCE);
Jsonix.Schema.XSD.GDay=Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType,{name:"GDay",typeName:Jsonix.Schema.XSD.qname("gDay"),CLASS_NAME:"Jsonix.Schema.XSD.GDay"});
Jsonix.Schema.XSD.GDay.INSTANCE=new Jsonix.Schema.XSD.GDay();
Jsonix.Schema.XSD.GDay.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.GDay.INSTANCE);
Jsonix.Schema.XSD.GMonth=Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType,{name:"GMonth",typeName:Jsonix.Schema.XSD.qname("gMonth"),CLASS_NAME:"Jsonix.Schema.XSD.GMonth"});
Jsonix.Schema.XSD.GMonth.INSTANCE=new Jsonix.Schema.XSD.GMonth();
Jsonix.Schema.XSD.GMonth.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.GMonth.INSTANCE);
Jsonix.Schema.XSD.ID=Jsonix.Class(Jsonix.Schema.XSD.String,{name:"ID",typeName:Jsonix.Schema.XSD.qname("ID"),CLASS_NAME:"Jsonix.Schema.XSD.ID"});
Jsonix.Schema.XSD.ID.INSTANCE=new Jsonix.Schema.XSD.ID();
Jsonix.Schema.XSD.ID.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.ID.INSTANCE);
Jsonix.Schema.XSD.IDREF=Jsonix.Class(Jsonix.Schema.XSD.String,{name:"IDREF",typeName:Jsonix.Schema.XSD.qname("IDREF"),CLASS_NAME:"Jsonix.Schema.XSD.IDREF"});
Jsonix.Schema.XSD.IDREF.INSTANCE=new Jsonix.Schema.XSD.IDREF();
Jsonix.Schema.XSD.IDREF.INSTANCE.LIST=new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.IDREF.INSTANCE);
Jsonix.Schema.XSD.IDREFS=Jsonix.Class(Jsonix.Schema.XSD.List,{name:"IDREFS",initialize:function(){Jsonix.Schema.XSD.List.prototype.initialize.apply(this,[Jsonix.Schema.XSD.IDREF.INSTANCE,Jsonix.Schema.XSD.qname("IDREFS")," "])
},CLASS_NAME:"Jsonix.Schema.XSD.IDREFS"});
Jsonix.Schema.XSD.IDREFS.INSTANCE=new Jsonix.Schema.XSD.IDREFS();
Jsonix.Model.Adapter=Jsonix.Class({initialize:function(){},unmarshal:function(d,e,f){return f.unmarshal(d,e)
},marshal:function(e,g,f,h){h.marshal(e,g,f)
},CLASS_NAME:"Jsonix.Model.Adapter"});
Jsonix.Model.Adapter.INSTANCE=new Jsonix.Model.Adapter();
Jsonix.Model.Adapter.getAdapter=function(b){Jsonix.Util.Ensure.ensureObject(b);
Jsonix.Util.Ensure.ensureObject(b.typeInfo);
return Jsonix.Util.Type.exists(b.adapter)?b.adapter:Jsonix.Model.Adapter.INSTANCE
};
Jsonix.Model.ClassInfo=Jsonix.Class(Jsonix.Model.TypeInfo,{name:null,baseTypeInfo:null,instanceFactory:null,properties:null,structure:null,defaultElementNamespaceURI:"",defaultAttributeNamespaceURI:"",built:false,initialize:function(c){Jsonix.Model.TypeInfo.prototype.initialize.apply(this,[]);
Jsonix.Util.Ensure.ensureObject(c);
Jsonix.Util.Ensure.ensureString(c.name);
this.name=c.name;
if(Jsonix.Util.Type.isString(c.defaultElementNamespaceURI)){this.defaultElementNamespaceURI=c.defaultElementNamespaceURI
}if(Jsonix.Util.Type.isString(c.defaultAttributeNamespaceURI)){this.defaultAttributeNamespaceURI=c.defaultAttributeNamespaceURI
}if(Jsonix.Util.Type.exists(c.baseTypeInfo)){this.baseTypeInfo=c.baseTypeInfo
}if(Jsonix.Util.Type.exists(c.instanceFactory)){Jsonix.Util.Ensure.ensureFunction(c.instanceFactory);
this.instanceFactory=c.instanceFactory
}this.properties=[];
if(Jsonix.Util.Type.exists(c.propertyInfos)){Jsonix.Util.Ensure.ensureArray(c.propertyInfos);
for(var d=0;
d<c.propertyInfos.length;
d++){this.p(c.propertyInfos[d])
}}},destroy:function(){},build:function(i,j){if(!this.built){this.baseTypeInfo=i.resolveTypeInfo(this.baseTypeInfo,j);
if(Jsonix.Util.Type.exists(this.baseTypeInfo)){this.baseTypeInfo.build(i,j)
}for(var f=0;
f<this.properties.length;
f++){var h=this.properties[f];
h.build(i,j)
}var g={elements:null,attributes:{},anyAttribute:null,value:null,any:null};
this.buildStructure(i,g);
this.structure=g
}},buildStructure:function(h,f){if(Jsonix.Util.Type.exists(this.baseTypeInfo)){this.baseTypeInfo.buildStructure(h,f)
}for(var e=0;
e<this.properties.length;
e++){var g=this.properties[e];
g.buildStructure(h,f)
}},unmarshal:function(B,w){this.build(B);
var p;
if(this.instanceFactory){p=new this.instanceFactory()
}else{p={TYPE_NAME:this.name}
}if(w.eventType!==1){throw new Error("Parser must be on START_ELEMENT to read a class info.")
}if(Jsonix.Util.Type.exists(this.structure.attributes)){var D=w.getAttributeCount();
if(D!==0){for(var z=0;
z<D;
z++){var u=w.getAttributeNameKey(z);
if(Jsonix.Util.Type.exists(this.structure.attributes[u])){var A=w.getAttributeValue(z);
if(Jsonix.Util.Type.isString(A)){var C=this.structure.attributes[u];
this.unmarshalPropertyValue(B,w,C,p,A)
}}}}}if(Jsonix.Util.Type.exists(this.structure.anyAttribute)){var y=this.structure.anyAttribute;
this.unmarshalProperty(B,w,y,p)
}if(Jsonix.Util.Type.exists(this.structure.elements)){var v=w.next();
while(v!==Jsonix.XML.Input.END_ELEMENT){if(v===Jsonix.XML.Input.START_ELEMENT){var q=w.getNameKey();
if(Jsonix.Util.Type.exists(this.structure.elements[q])){var r=this.structure.elements[q];
this.unmarshalProperty(B,w,r,p)
}else{if(Jsonix.Util.Type.exists(this.structure.any)){var s=this.structure.any;
this.unmarshalProperty(B,w,s,p)
}else{throw new Error("Unexpected element ["+q+"].")
}}}else{if((v===Jsonix.XML.Input.CHARACTERS||v===Jsonix.XML.Input.CDATA||v===Jsonix.XML.Input.ENTITY_REFERENCE)&&Jsonix.Util.Type.exists(this.structure.mixed)){var x=this.structure.mixed;
this.unmarshalProperty(B,w,x,p)
}else{if(v===Jsonix.XML.Input.SPACE||v===Jsonix.XML.Input.COMMENT||v===Jsonix.XML.Input.PROCESSING_INSTRUCTION){}else{throw new Error("Illegal state: unexpected event type ["+v+"].")
}}}v=w.next()
}}else{if(Jsonix.Util.Type.exists(this.structure.value)){var t=this.structure.value;
this.unmarshalProperty(B,w,t,p)
}else{w.nextTag()
}}if(w.eventType!==2){throw new Error("Illegal state: must be END_ELEMENT.")
}return p
},unmarshalProperty:function(i,j,h,g){var f=h.unmarshal(i,this,j);
h.setProperty(g,f)
},unmarshalPropertyValue:function(k,l,i,h,j){var g=i.unmarshalValue(k,this,l,j);
i.setProperty(h,g)
},marshal:function(k,i,g){if(Jsonix.Util.Type.exists(this.baseTypeInfo)){this.baseTypeInfo.marshal(k,i,g)
}for(var l=0;
l<this.properties.length;
l++){var j=this.properties[l];
var h=i[j.name];
if(Jsonix.Util.Type.exists(h)){j.marshal(k,this,h,g)
}}},isInstance:function(b){if(this.instanceFactory){return b instanceof this.instanceFactory
}else{return Jsonix.Util.Type.isObject(b)&&Jsonix.Util.Type.isString(b.TYPE_NAME)&&b.TYPE_NAME===this.name
}},b:function(b){Jsonix.Util.Ensure.ensureObject(b);
this.baseTypeInfo=b;
return this
},ps:function(){return this
},p:function(f){Jsonix.Util.Ensure.ensureObject(f);
if(f instanceof Jsonix.Model.PropertyInfo){this.addProperty(f)
}else{Jsonix.Util.Ensure.ensureString(f.type);
var d=f.type;
if(Jsonix.Util.Type.isFunction(this.propertyInfoCreators[d])){var e=this.propertyInfoCreators[d];
e.call(this,f)
}else{throw new Error("Unknown property info type ["+d+"].")
}}},aa:function(b){this.addDefaultNamespaces(b);
return this.addProperty(new Jsonix.Model.AnyAttributePropertyInfo(b))
},ae:function(b){this.addDefaultNamespaces(b);
return this.addProperty(new Jsonix.Model.AnyElementPropertyInfo(b))
},a:function(b){this.addDefaultNamespaces(b);
return this.addProperty(new Jsonix.Model.AttributePropertyInfo(b))
},em:function(b){this.addDefaultNamespaces(b);
return this.addProperty(new Jsonix.Model.ElementMapPropertyInfo(b))
},e:function(b){this.addDefaultNamespaces(b);
return this.addProperty(new Jsonix.Model.ElementPropertyInfo(b))
},es:function(b){this.addDefaultNamespaces(b);
return this.addProperty(new Jsonix.Model.ElementsPropertyInfo(b))
},er:function(b){this.addDefaultNamespaces(b);
return this.addProperty(new Jsonix.Model.ElementRefPropertyInfo(b))
},ers:function(b){this.addDefaultNamespaces(b);
return this.addProperty(new Jsonix.Model.ElementRefsPropertyInfo(b))
},v:function(b){this.addDefaultNamespaces(b);
return this.addProperty(new Jsonix.Model.ValuePropertyInfo(b))
},addDefaultNamespaces:function(b){if(Jsonix.Util.Type.isObject(b)){if(!Jsonix.Util.Type.isString(b.defaultElementNamespaceURI)){b.defaultElementNamespaceURI=this.defaultElementNamespaceURI
}if(!Jsonix.Util.Type.isString(b.defaultAttributeNamespaceURI)){b.defaultAttributeNamespaceURI=this.defaultAttributeNamespaceURI
}}},addProperty:function(b){this.properties.push(b);
return this
},CLASS_NAME:"Jsonix.Model.ClassInfo"});
Jsonix.Model.ClassInfo.prototype.propertyInfoCreators={anyAttribute:Jsonix.Model.ClassInfo.prototype.aa,anyElement:Jsonix.Model.ClassInfo.prototype.ae,attribute:Jsonix.Model.ClassInfo.prototype.a,elementMap:Jsonix.Model.ClassInfo.prototype.em,element:Jsonix.Model.ClassInfo.prototype.e,elements:Jsonix.Model.ClassInfo.prototype.es,elementRef:Jsonix.Model.ClassInfo.prototype.er,elementRefs:Jsonix.Model.ClassInfo.prototype.ers,value:Jsonix.Model.ClassInfo.prototype.v};
Jsonix.Model.ElementInfo=Jsonix.Class({elementName:null,typeInfo:null,substitutionHead:null,scope:null,built:false,initialize:function(b){Jsonix.Util.Ensure.ensureObject(b);
Jsonix.Util.Ensure.ensureObject(b.elementName);
this.elementName=b.elementName;
Jsonix.Util.Ensure.ensureExists(b.typeInfo);
this.typeInfo=b.typeInfo;
if(Jsonix.Util.Type.exists(b.substitutionHead)){this.substitutionHead=b.substitutionHead
}if(Jsonix.Util.Type.exists(b.scope)){this.scope=b.scope
}},build:function(c,d){if(!this.built){this.typeInfo=c.resolveTypeInfo(this.typeInfo,d);
this.scope=c.resolveTypeInfo(this.scope,d);
this.built=true
}},CLASS_NAME:"Jsonix.Model.ElementInfo"});
Jsonix.Model.PropertyInfo=Jsonix.Class({name:null,collection:false,defaultElementNamespaceURI:"",defaultAttributeNamespaceURI:"",built:false,initialize:function(b){Jsonix.Util.Ensure.ensureObject(b);
Jsonix.Util.Ensure.ensureString(b.name);
this.name=b.name;
if(Jsonix.Util.Type.isString(b.defaultElementNamespaceURI)){this.defaultElementNamespaceURI=b.defaultElementNamespaceURI
}if(Jsonix.Util.Type.isString(b.defaultAttributeNamespaceURI)){this.defaultAttributeNamespaceURI=b.defaultAttributeNamespaceURI
}if(Jsonix.Util.Type.isBoolean(b.collection)){this.collection=b.collection
}else{this.collection=false
}},build:function(c,d){if(!this.built){this.doBuild(c,d);
this.built=true
}},doBuild:function(c,d){throw new Error("Abstract method [doBuild].")
},buildStructure:function(c,d){throw new Error("Abstract method [buildStructure].")
},setProperty:function(d,f){if(Jsonix.Util.Type.exists(f)){if(this.collection){Jsonix.Util.Ensure.ensureArray(f,"Collection property requires an array value.");
if(!Jsonix.Util.Type.exists(d[this.name])){d[this.name]=[]
}for(var e=0;
e<f.length;
e++){d[this.name].push(f[e])
}}else{d[this.name]=f
}}},CLASS_NAME:"Jsonix.Model.PropertyInfo"});
Jsonix.Model.AnyAttributePropertyInfo=Jsonix.Class(Jsonix.Model.PropertyInfo,{initialize:function(b){Jsonix.Util.Ensure.ensureObject(b);
Jsonix.Model.PropertyInfo.prototype.initialize.apply(this,[b])
},unmarshal:function(m,k,p){var n=p.getAttributeCount();
if(n===0){return null
}else{var j={};
for(var o=0;
o<n;
o++){var i=p.getAttributeNameKey(o);
var l=p.getAttributeValue(o);
if(Jsonix.Util.Type.isString(l)){j[i]=l
}}return j
}},marshal:function(l,j,i,h){if(!Jsonix.Util.Type.isObject(i)){return
}for(var g in i){if(i.hasOwnProperty(g)){var k=i[g];
if(Jsonix.Util.Type.isString(k)){h.writeAttribute(Jsonix.XML.QName.fromString(g),k)
}}}},doBuild:function(c,d){},buildStructure:function(c,d){Jsonix.Util.Ensure.ensureObject(d);
d.anyAttribute=this
},CLASS_NAME:"Jsonix.Model.AnyAttributePropertyInfo"});
Jsonix.Model.SingleTypePropertyInfo=Jsonix.Class(Jsonix.Model.PropertyInfo,{typeInfo:"String",initialize:function(b){Jsonix.Util.Ensure.ensureObject(b);
Jsonix.Model.PropertyInfo.prototype.initialize.apply(this,[b]);
if(Jsonix.Util.Type.exists(b.typeInfo)){this.typeInfo=b.typeInfo
}},doBuild:function(c,d){this.typeInfo=c.resolveTypeInfo(this.typeInfo,d)
},unmarshalValue:function(e,h,f,g){return this.parse(e,h,g)
},parse:function(e,d,f){return this.typeInfo.parse(f,e,d)
},print:function(e,d,f){return this.typeInfo.reprint(f,e,d)
},CLASS_NAME:"Jsonix.Model.SingleTypePropertyInfo"});
Jsonix.Model.AttributePropertyInfo=Jsonix.Class(Jsonix.Model.SingleTypePropertyInfo,{attributeName:null,initialize:function(b){Jsonix.Util.Ensure.ensureObject(b);
Jsonix.Model.SingleTypePropertyInfo.prototype.initialize.apply(this,[b]);
if(Jsonix.Util.Type.isObject(b.attributeName)){Jsonix.Util.Ensure.ensureString(b.attributeName.localPart,"Attribute name must contain a string property [localPart].");
this.attributeName=Jsonix.XML.QName.fromObject(b.attributeName)
}else{if(Jsonix.Util.Type.isString(b.attributeName)){this.attributeName=new Jsonix.XML.QName(this.defaultAttributeNamespaceURI,b.attributeName)
}else{this.attributeName=new Jsonix.XML.QName(this.defaultAttributeNamespaceURI,this.name)
}}},unmarshal:function(m,k,p){var n=p.getAttributeCount();
var j=null;
for(var o=0;
o<n;
o++){var i=p.getAttributeNameKey(o);
if(this.attributeName.key===i){var l=p.getAttributeValue(o);
if(Jsonix.Util.Type.isString(l)){j=this.unmarshalValue(m,k,p,l)
}}}return j
},marshal:function(e,h,g,f){if(Jsonix.Util.Type.exists(g)){f.writeAttribute(this.attributeName,this.print(e,h,g))
}},buildStructure:function(f,e){Jsonix.Util.Ensure.ensureObject(e);
Jsonix.Util.Ensure.ensureObject(e.attributes);
var d=this.attributeName.key;
e.attributes[d]=this
},CLASS_NAME:"Jsonix.Model.AttributePropertyInfo"});
Jsonix.Model.ValuePropertyInfo=Jsonix.Class(Jsonix.Model.SingleTypePropertyInfo,{initialize:function(b){Jsonix.Util.Ensure.ensureObject(b);
Jsonix.Model.SingleTypePropertyInfo.prototype.initialize.apply(this,[b])
},unmarshal:function(e,h,f){var g=f.getElementText();
if(Jsonix.Util.StringUtils.isNotBlank(g)){return this.unmarshalValue(e,h,f,g)
}else{return null
}},marshal:function(e,h,g,f){if(!Jsonix.Util.Type.exists(g)){return
}f.writeCharacters(this.print(e,h,g))
},buildStructure:function(c,d){Jsonix.Util.Ensure.ensureObject(d);
if(Jsonix.Util.Type.exists(d.elements)){throw new Error("The structure already defines element mappings, it cannot define a value property.")
}else{d.value=this
}},CLASS_NAME:"Jsonix.Model.ValuePropertyInfo"});
Jsonix.Model.AbstractElementsPropertyInfo=Jsonix.Class(Jsonix.Model.PropertyInfo,{wrapperElementName:null,initialize:function(b){Jsonix.Util.Ensure.ensureObject(b);
Jsonix.Model.PropertyInfo.prototype.initialize.apply(this,[b]);
if(Jsonix.Util.Type.isObject(b.wrapperElementName)){Jsonix.Util.Ensure.ensureString(b.wrapperElementName.localPart,"Wrapper element name must contain a string property [localPart].");
this.wrapperElementName=Jsonix.XML.QName.fromObject(b.wrapperElementName)
}else{if(Jsonix.Util.Type.isString(b.wrapperElementName)){this.wrapperElementName=new Jsonix.XML.QName(this.defaultElementNamespaceURI,b.wrapperElementName)
}else{this.wrapperElementName=null
}}},unmarshal:function(l,k,g){var h=null;
var j=this;
var i=function(a){if(j.collection){if(h===null){h=[]
}h.push(a)
}else{if(h===null){h=a
}else{throw new Error("Value already set.")
}}};
if(Jsonix.Util.Type.exists(this.wrapperElementName)){this.unmarshalWrapperElement(l,g,i)
}else{this.unmarshalElement(l,g,i)
}return h
},unmarshalWrapperElement:function(e,f,g){var h=f.next();
while(h!==Jsonix.XML.Input.END_ELEMENT){if(h===Jsonix.XML.Input.START_ELEMENT){this.unmarshalElement(e,f,g)
}else{if(h===Jsonix.XML.Input.SPACE||h===Jsonix.XML.Input.COMMENT||h===Jsonix.XML.Input.PROCESSING_INSTRUCTION){}else{throw new Error("Illegal state: unexpected event type ["+h+"].")
}}h=f.next()
}},unmarshalElement:function(d,e,f){throw new Error("Abstract method [unmarshalElement].")
},marshal:function(l,k,i,h){if(!Jsonix.Util.Type.exists(i)){return
}if(Jsonix.Util.Type.exists(this.wrapperElementName)){h.writeStartElement(this.wrapperElementName)
}if(!this.collection){this.marshalElement(l,i,h)
}else{Jsonix.Util.Ensure.ensureArray(i);
for(var g=0;
g<i.length;
g++){var j=i[g];
this.marshalElement(l,j,h)
}}if(Jsonix.Util.Type.exists(this.wrapperElementName)){h.writeEndElement()
}},marshalElement:function(d,f,e){throw new Error("Abstract method [marshalElement].")
},marshalElementTypeInfo:function(j,h,g,i,f){f.writeStartElement(g);
i.marshal(j,h,f);
f.writeEndElement()
},buildStructure:function(c,d){Jsonix.Util.Ensure.ensureObject(d);
if(Jsonix.Util.Type.exists(d.value)){throw new Error("The structure already defines a value property.")
}else{if(!Jsonix.Util.Type.exists(d.elements)){d.elements={}
}}if(Jsonix.Util.Type.exists(this.wrapperElementName)){d.elements[this.wrapperElementName.key]=this
}else{this.buildStructureElements(c,d)
}},buildStructureElements:function(c,d){throw new Error("Abstract method [buildStructureElements].")
},CLASS_NAME:"Jsonix.Model.AbstractElementsPropertyInfo"});
Jsonix.Model.ElementPropertyInfo=Jsonix.Class(Jsonix.Model.AbstractElementsPropertyInfo,{typeInfo:"String",elementName:null,initialize:function(b){Jsonix.Util.Ensure.ensureObject(b);
Jsonix.Model.AbstractElementsPropertyInfo.prototype.initialize.apply(this,[b]);
if(Jsonix.Util.Type.exists(b.typeInfo)){if(Jsonix.Util.Type.isObject(b.typeInfo)){Jsonix.Util.Ensure.ensureObject(b.typeInfo);
this.typeInfo=b.typeInfo
}else{Jsonix.Util.Ensure.ensureString(b.typeInfo);
this.typeInfo=b.typeInfo
}}if(Jsonix.Util.Type.isObject(b.elementName)){this.elementName=Jsonix.XML.QName.fromObject(b.elementName)
}else{if(Jsonix.Util.Type.isString(b.elementName)){this.elementName=new Jsonix.XML.QName(this.defaultElementNamespaceURI,b.elementName)
}else{this.elementName=new Jsonix.XML.QName(this.defaultElementNamespaceURI,this.name)
}}},unmarshalElement:function(d,e,f){return f(this.typeInfo.unmarshal(d,e))
},marshalElement:function(d,f,e){this.marshalElementTypeInfo(d,f,this.elementName,this.typeInfo,e)
},doBuild:function(c,d){this.typeInfo=c.resolveTypeInfo(this.typeInfo,d)
},buildStructureElements:function(c,d){d.elements[this.elementName.key]=this
},CLASS_NAME:"Jsonix.Model.ElementPropertyInfo"});
Jsonix.Model.ElementsPropertyInfo=Jsonix.Class(Jsonix.Model.AbstractElementsPropertyInfo,{elementTypeInfos:null,elementTypeInfosMap:null,initialize:function(b){Jsonix.Util.Ensure.ensureObject(b);
Jsonix.Model.AbstractElementsPropertyInfo.prototype.initialize.apply(this,[b]);
Jsonix.Util.Ensure.ensureArray(b.elementTypeInfos);
this.elementTypeInfos=b.elementTypeInfos
},unmarshalElement:function(f,g,h){var j=g.getNameKey();
var i=this.elementTypeInfosMap[j];
if(Jsonix.Util.Type.exists(i)){return h(i.unmarshal(f,g))
}throw new Error("Element ["+j+"] is not known in this context")
},marshalElement:function(l,j,n){for(var m=0;
m<this.elementTypeInfos.length;
m++){var h=this.elementTypeInfos[m];
var k=h.typeInfo;
if(k.isInstance(j)){var i=h.elementName;
this.marshalElementTypeInfo(l,j,i,k,n);
return
}}throw new Error("Could not find an element with type info supporting the value ["+j+"].")
},doBuild:function(g,h){this.elementTypeInfosMap={};
for(var e=0;
e<this.elementTypeInfos.length;
e++){var f=this.elementTypeInfos[e];
f.typeInfo=g.resolveTypeInfo(f.typeInfo,h);
Jsonix.Util.Ensure.ensureObject(f);
if(Jsonix.Util.Type.isObject(f.elementName)){Jsonix.Util.Ensure.ensureString(f.elementName.localPart,"Element name must contain a string property [localPart].");
f.elementName=Jsonix.XML.QName.fromObject(f.elementName)
}else{Jsonix.Util.Ensure.ensureString(f.elementName);
f.elementName=new Jsonix.XML.QName(this.defaultElementNamespaceURI,f.elementName)
}this.elementTypeInfosMap[f.elementName.key]=f.typeInfo
}},buildStructureElements:function(g,f){for(var h=0;
h<this.elementTypeInfos.length;
h++){var e=this.elementTypeInfos[h];
f.elements[e.elementName.key]=this
}},CLASS_NAME:"Jsonix.Model.ElementsPropertyInfo"});
Jsonix.Model.ElementMapPropertyInfo=Jsonix.Class(Jsonix.Model.AbstractElementsPropertyInfo,{elementName:null,key:null,value:null,entryTypeInfo:null,initialize:function(b){Jsonix.Util.Ensure.ensureObject(b);
Jsonix.Model.AbstractElementsPropertyInfo.prototype.initialize.apply(this,[b]);
Jsonix.Util.Ensure.ensureObject(b.key);
Jsonix.Util.Ensure.ensureObject(b.value);
if(Jsonix.Util.Type.isObject(b.elementName)){Jsonix.Util.Ensure.ensureString(b.elementName.localPart,"Element name must contain a string property [localPart].");
this.elementName=Jsonix.XML.QName.fromObject(b.elementName)
}else{if(Jsonix.Util.Type.isString(b.elementName)){this.elementName=new Jsonix.XML.QName(this.defaultElementNamespaceURI,b.elementName)
}else{this.elementName=new Jsonix.XML.QName(this.defaultElementNamespaceURI,this.name)
}}this.entryTypeInfo=new Jsonix.Model.ClassInfo({name:"",localName:"",propertyInfos:[b.key,b.value]})
},unmarshalWrapperElement:function(f,d){var e=Jsonix.Model.AbstractElementsPropertyInfo.prototype.unmarshalWrapperElement.apply(this,arguments)
},unmarshal:function(l,k,g){var h=null;
var j=this;
var i=function(a){if(Jsonix.Util.Type.exists(a)){Jsonix.Util.Ensure.ensureObject(a,"Map property requires an object.");
if(!Jsonix.Util.Type.exists(h)){h={}
}for(var c in a){if(a.hasOwnProperty(c)){var b=a[c];
if(j.collection){if(!Jsonix.Util.Type.exists(h[c])){h[c]=[]
}h[c].push(b)
}else{if(!Jsonix.Util.Type.exists(h[c])){h[c]=b
}else{throw new Error("Value was already set.")
}}}}}};
if(Jsonix.Util.Type.exists(this.wrapperElementName)){this.unmarshalWrapperElement(l,g,i)
}else{this.unmarshalElement(l,g,i)
}return h
},unmarshalElement:function(j,f,h){var i=this.entryTypeInfo.unmarshal(j,f);
var g={};
if(!!i[this.key.name]){g[i[this.key.name]]=i[this.value.name]
}return h(g)
},marshal:function(e,h,g,f){if(!Jsonix.Util.Type.exists(g)){return
}if(Jsonix.Util.Type.exists(this.wrapperElementName)){f.writeStartElement(this.wrapperElementName)
}this.marshalElement(e,g,f);
if(Jsonix.Util.Type.exists(this.wrapperElementName)){f.writeEndElement()
}},marshalElement:function(m,k,i){if(!!k){for(var n in k){if(k.hasOwnProperty(n)){var l=k[n];
if(!this.collection){var j={};
j[this.key.name]=n;
j[this.value.name]=l;
i.writeStartElement(this.elementName);
this.entryTypeInfo.marshal(m,j,i);
i.writeEndElement()
}else{for(var o=0;
o<l.length;
o++){var p={};
p[this.key.name]=n;
p[this.value.name]=l[o];
i.writeStartElement(this.elementName);
this.entryTypeInfo.marshal(m,p,i);
i.writeEndElement()
}}}}}},doBuild:function(c,d){this.entryTypeInfo.build(c,d);
this.key=this.entryTypeInfo.properties[0];
this.value=this.entryTypeInfo.properties[1]
},buildStructureElements:function(c,d){d.elements[this.elementName.key]=this
},setProperty:function(l,j){if(Jsonix.Util.Type.exists(j)){Jsonix.Util.Ensure.ensureObject(j,"Map property requires an object.");
if(!Jsonix.Util.Type.exists(l[this.name])){l[this.name]={}
}var i=l[this.name];
for(var g in j){if(j.hasOwnProperty(g)){var k=j[g];
if(this.collection){if(!Jsonix.Util.Type.exists(i[g])){i[g]=[]
}for(var h=0;
h<k.length;
h++){i[g].push(k[h])
}}else{i[g]=k
}}}}},CLASS_NAME:"Jsonix.Model.ElementMapPropertyInfo"});
Jsonix.Model.AbstractElementRefsPropertyInfo=Jsonix.Class(Jsonix.Model.PropertyInfo,{wrapperElementName:null,mixed:false,initialize:function(b){Jsonix.Util.Ensure.ensureObject(b,"Options argument must be an object.");
Jsonix.Model.PropertyInfo.prototype.initialize.apply(this,[b]);
if(Jsonix.Util.Type.isObject(b.wrapperElementName)){Jsonix.Util.Ensure.ensureString(b.wrapperElementName.localPart,"Wrapper element name must contain a string property [localPart].");
this.wrapperElementName=Jsonix.XML.QName.fromObject(b.wrapperElementName)
}else{if(Jsonix.Util.Type.isString(b.wrapperElementName)){this.wrapperElementName=new Jsonix.XML.QName(this.defaultElementNamespaceURI,b.wrapperElementName)
}else{this.wrapperElementName=null
}}if(Jsonix.Util.Type.isBoolean(b.mixed)){this.mixed=b.mixed
}else{this.mixed=false
}},unmarshal:function(f,j,g){var h=g.eventType;
if(h===Jsonix.XML.Input.START_ELEMENT){if(Jsonix.Util.Type.exists(this.wrapperElementName)){return this.unmarshalWrapperElement(f,j,g)
}else{return this.unmarshalElement(f,j,g)
}}else{if(this.mixed&&(h===Jsonix.XML.Input.CHARACTERS||h===Jsonix.XML.Input.CDATA||h===Jsonix.XML.Input.ENTITY_REFERENCE)){var i=g.getText();
if(this.collection){return[i]
}else{return i
}}else{if(h===Jsonix.XML.Input.SPACE||h===Jsonix.XML.Input.COMMENT||h===Jsonix.XML.Input.PROCESSING_INSTRUCTION){}else{throw new Error("Illegal state: unexpected event type ["+h+"].")
}}}},unmarshalWrapperElement:function(o,n,i){var j=null;
var l=i.next();
while(l!==Jsonix.XML.Input.END_ELEMENT){if(l===Jsonix.XML.Input.START_ELEMENT){var m=this.unmarshalElement(o,n,i);
if(this.collection){if(j===null){j=[]
}for(var p=0;
p<m.length;
p++){j.push(m[p])
}}else{if(j===null){j=m
}else{throw new Error("Value already set.")
}}}else{if(this.mixed&&(l===Jsonix.XML.Input.CHARACTERS||l===Jsonix.XML.Input.CDATA||l===Jsonix.XML.Input.ENTITY_REFERENCE)){var k=i.getText();
if(this.collection){if(j===null){j=[]
}j.push(k)
}else{if(j===null){j=k
}else{throw new Error("Value already set.")
}}}else{if(l===Jsonix.XML.Input.SPACE||l===Jsonix.XML.Input.COMMENT||l===Jsonix.XML.Input.PROCESSING_INSTRUCTION){}else{throw new Error("Illegal state: unexpected event type ["+l+"].")
}}}l=i.next()
}return j
},unmarshalElement:function(l,k,h){var g=h.getName();
var i=this.getElementTypeInfo(l,k,g);
var j={name:g,value:i.unmarshal(l,h)};
if(this.collection){return[j]
}else{return j
}},marshal:function(l,k,i,h){if(Jsonix.Util.Type.exists(i)){if(Jsonix.Util.Type.exists(this.wrapperElementName)){h.writeStartElement(this.wrapperElementName)
}if(!this.collection){this.marshalItem(l,k,i,h)
}else{Jsonix.Util.Ensure.ensureArray(i,"Collection property requires an array value.");
for(var g=0;
g<i.length;
g++){var j=i[g];
this.marshalItem(l,k,j,h)
}}if(Jsonix.Util.Type.exists(this.wrapperElementName)){h.writeEndElement()
}}},marshalItem:function(e,h,g,f){if(Jsonix.Util.Type.isString(g)){if(!this.mixed){throw new Error("Property is not mixed, can't handle string values.")
}else{f.writeCharacters(g)
}}else{if(Jsonix.Util.Type.isObject(g)){this.marshalElement(e,h,g,f)
}else{if(this.mixed){throw new Error("Unsupported content type, either objects or strings are supported.")
}else{throw new Error("Unsupported content type, only objects are supported.")
}}}},marshalElement:function(l,k,i,g){var h=Jsonix.XML.QName.fromObject(i.name);
var j=this.getElementTypeInfo(l,k,h);
return this.marshalElementTypeInfo(l,i,h,j,g)
},marshalElementTypeInfo:function(j,h,g,i,f){f.writeStartElement(g);
if(Jsonix.Util.Type.exists(h.value)){i.marshal(j,h.value,f)
}f.writeEndElement()
},getElementTypeInfo:function(f,i,g){var j=this.getPropertyElementTypeInfo(g);
if(Jsonix.Util.Type.exists(j)){return j.typeInfo
}else{var h=f.getElementInfo(g,i);
if(Jsonix.Util.Type.exists(h)){return h.typeInfo
}else{throw new Error("Element ["+g.key+"] is not known in this context.")
}}},getPropertyElementTypeInfo:function(b){throw new Error("Abstract method [getPropertyElementTypeInfo].")
},buildStructure:function(c,d){Jsonix.Util.Ensure.ensureObject(d);
if(Jsonix.Util.Type.exists(d.value)){throw new Error("The structure already defines a value property.")
}else{if(!Jsonix.Util.Type.exists(d.elements)){d.elements={}
}}if(Jsonix.Util.Type.exists(this.wrapperElementName)){d.elements[this.wrapperElementName.key]=this
}else{this.buildStructureElements(c,d)
}if(this.mixed&&!Jsonix.Util.Type.exists(this.wrapperElementName)){d.mixed=this
}},buildStructureElements:function(c,d){throw new Error("Abstract method [buildStructureElements].")
},buildStructureElementTypeInfos:function(k,h,g){h.elements[g.elementName.key]=this;
var l=k.getSubstitutionMembers(g.elementName);
if(Jsonix.Util.Type.isArray(l)){for(var i=0;
i<l.length;
i++){var j=l[i];
this.buildStructureElementTypeInfos(k,h,j)
}}},CLASS_NAME:"Jsonix.Model.ElementRefPropertyInfo"});
Jsonix.Model.ElementRefPropertyInfo=Jsonix.Class(Jsonix.Model.AbstractElementRefsPropertyInfo,{typeInfo:"String",elementName:null,initialize:function(b){Jsonix.Util.Ensure.ensureObject(b);
Jsonix.Model.AbstractElementRefsPropertyInfo.prototype.initialize.apply(this,[b]);
if(Jsonix.Util.Type.exists(b.typeInfo)){if(Jsonix.Util.Type.isObject(b.typeInfo)){Jsonix.Util.Ensure.ensureObject(b.typeInfo);
this.typeInfo=b.typeInfo
}else{Jsonix.Util.Ensure.ensureString(b.typeInfo);
this.typeInfo=b.typeInfo
}}if(Jsonix.Util.Type.isObject(b.elementName)){this.elementName=Jsonix.XML.QName.fromObject(b.elementName)
}else{if(Jsonix.Util.Type.isString(b.elementName)){this.elementName=new Jsonix.XML.QName(this.defaultElementNamespaceURI,b.elementName)
}else{this.elementName=new Jsonix.XML.QName(this.defaultElementNamespaceURI,this.name)
}}},getPropertyElementTypeInfo:function(d){Jsonix.Util.Ensure.ensureObject(d);
Jsonix.Util.Ensure.ensureString(d.localPart);
var c=Jsonix.XML.QName.fromObject(d);
if(c.key===this.elementName.key){return this
}else{return null
}},doBuild:function(c,d){this.typeInfo=c.resolveTypeInfo(this.typeInfo,d)
},buildStructureElements:function(c,d){this.buildStructureElementTypeInfos(c,d,this)
},CLASS_NAME:"Jsonix.Model.ElementRefPropertyInfo"});
Jsonix.Model.ElementRefsPropertyInfo=Jsonix.Class(Jsonix.Model.AbstractElementRefsPropertyInfo,{elementTypeInfos:null,elementTypeInfosMap:null,initialize:function(b){Jsonix.Util.Ensure.ensureObject(b);
Jsonix.Model.AbstractElementRefsPropertyInfo.prototype.initialize.apply(this,[b]);
Jsonix.Util.Ensure.ensureArray(b.elementTypeInfos);
this.elementTypeInfos=b.elementTypeInfos
},getPropertyElementTypeInfo:function(e){Jsonix.Util.Ensure.ensureObject(e);
Jsonix.Util.Ensure.ensureString(e.localPart);
var d=Jsonix.XML.QName.fromObject(e);
var f=this.elementTypeInfosMap[d.key];
if(Jsonix.Util.Type.exists(f)){return{elementName:d,typeInfo:f}
}else{return null
}},doBuild:function(g,h){this.elementTypeInfosMap={};
for(var e=0;
e<this.elementTypeInfos.length;
e++){var f=this.elementTypeInfos[e];
f.typeInfo=g.resolveTypeInfo(f.typeInfo,h);
Jsonix.Util.Ensure.ensureObject(f);
if(Jsonix.Util.Type.isObject(f.elementName)){Jsonix.Util.Ensure.ensureString(f.elementName.localPart,"Element name must contain a string property [localPart].");
f.elementName=Jsonix.XML.QName.fromObject(f.elementName)
}else{Jsonix.Util.Ensure.ensureString(f.elementName);
f.elementName=new Jsonix.XML.QName(this.defaultElementNamespaceURI,f.elementName)
}this.elementTypeInfosMap[f.elementName.key]=f.typeInfo
}},buildStructureElements:function(g,f){for(var h=0;
h<this.elementTypeInfos.length;
h++){var e=this.elementTypeInfos[h];
this.buildStructureElementTypeInfos(g,f,e)
}},CLASS_NAME:"Jsonix.Model.ElementRefsPropertyInfo"});
Jsonix.Model.AnyElementPropertyInfo=Jsonix.Class(Jsonix.Model.PropertyInfo,{allowDom:true,allowTypedObject:true,mixed:true,initialize:function(b){Jsonix.Util.Ensure.ensureObject(b);
Jsonix.Model.PropertyInfo.prototype.initialize.apply(this,[b]);
if(Jsonix.Util.Type.isBoolean(b.allowDom)){this.allowDom=b.allowDom
}else{this.allowDom=true
}if(Jsonix.Util.Type.isBoolean(b.allowTypedObject)){this.allowTypedObject=b.allowTypedObject
}else{this.allowTypedObject=true
}if(Jsonix.Util.Type.isBoolean(b.mixed)){this.mixed=b.mixed
}else{this.mixed=true
}},unmarshal:function(f,j,g){var h=g.eventType;
if(h===Jsonix.XML.Input.START_ELEMENT){return this.unmarshalElement(f,j,g)
}else{if(this.mixed&&(h===4||h===12||h===9)){var i=g.getText();
if(this.collection){return[i]
}else{return i
}}else{if(this.mixed&&(h===Jsonix.XML.Input.SPACE)){return null
}else{if(h===Jsonix.XML.Input.COMMENT||h===Jsonix.XML.Input.PROCESSING_INSTRUCTION){return null
}else{throw new Error("Illegal state: unexpected event type ["+h+"].")
}}}}},unmarshalElement:function(n,m,p){var o=p.getName();
var k;
if(this.allowTypedObject&&Jsonix.Util.Type.exists(n.getElementInfo(o,m))){var i=n.getElementInfo(o,m);
var l=i.typeInfo;
var j=Jsonix.Model.Adapter.getAdapter(i);
k={name:o,value:j.unmarshal(n,p,l)}
}else{if(this.allowDom){k=p.getElement()
}else{throw new Error("Element ["+o.toString()+"] is not known in this context and property does not allow DOM.")
}}if(this.collection){return[k]
}else{return k
}},marshal:function(j,i,h,g){if(!Jsonix.Util.Type.exists(h)){return
}if(!this.collection){this.marshalItem(j,h,g)
}else{Jsonix.Util.Ensure.ensureArray(h);
for(var f=0;
f<h.length;
f++){this.marshalItem(j,h[f],g)
}}},marshalItem:function(l,j,n){if(this.mixed&&Jsonix.Util.Type.isString(j)){n.writeCharacters(j)
}else{if(this.allowDom&&Jsonix.Util.Type.exists(j.nodeType)){n.writeNode(j)
}else{var m=Jsonix.XML.QName.fromObject(j.name);
if(this.allowTypedObject&&Jsonix.Util.Type.exists(l.getElementInfo(m))){var h=l.getElementInfo(m);
var k=h.typeInfo;
var i=Jsonix.Model.Adapter.getAdapter(h);
n.writeStartElement(m);
i.marshal(l,j.value,n,k);
n.writeEndElement()
}else{throw new Error("Element ["+m.toString()+"] is not known in this context")
}}}},doBuild:function(c,d){},buildStructure:function(c,d){Jsonix.Util.Ensure.ensureObject(d);
if(Jsonix.Util.Type.exists(d.value)){throw new Error("The structure already defines a value property.")
}else{if(!Jsonix.Util.Type.exists(d.elements)){d.elements={}
}}if((this.allowDom||this.allowTypedObject)){d.any=this
}if(this.mixed){d.mixed=this
}},CLASS_NAME:"Jsonix.Model.AnyElementPropertyInfo"});
Jsonix.Model.Module=Jsonix.Class({name:null,typeInfos:null,elementInfos:null,defaultElementNamespaceURI:"",defaultAttributeNamespaceURI:"",initialize:function(c){this.typeInfos=[];
this.elementInfos=[];
if(typeof c!=="undefined"){Jsonix.Util.Ensure.ensureObject(c);
if(Jsonix.Util.Type.isString(c.name)){this.name=c.name
}if(Jsonix.Util.Type.isString(c.defaultElementNamespaceURI)){this.defaultElementNamespaceURI=c.defaultElementNamespaceURI
}if(Jsonix.Util.Type.isString(c.defaultAttributeNamespaceURI)){this.defaultAttributeNamespaceURI=c.defaultAttributeNamespaceURI
}if(Jsonix.Util.Type.isArray(c.typeInfos)){this.initializeTypeInfos(c.typeInfos)
}for(var d in c){if(c.hasOwnProperty(d)){if(c[d] instanceof Jsonix.Model.ClassInfo){this.typeInfos.push(c[d])
}}}if(Jsonix.Util.Type.isArray(c.elementInfos)){this.initializeElementInfos(c.elementInfos)
}}},initializeTypeInfos:function(f){Jsonix.Util.Ensure.ensureArray(f);
var h,e,g;
for(h=0;
h<f.length;
h++){e=f[h];
g=this.createTypeInfo(e);
this.typeInfos.push(g)
}},initializeElementInfos:function(h){Jsonix.Util.Ensure.ensureArray(h);
var e,f,g;
for(e=0;
e<h.length;
e++){f=h[e];
g=this.createElementInfo(f);
this.elementInfos.push(g)
}},createTypeInfo:function(f){Jsonix.Util.Ensure.ensureObject(f);
var g;
if(f instanceof Jsonix.Model.TypeInfo){g=f
}else{Jsonix.Util.Ensure.ensureString(f.type);
var e=f.type;
if(Jsonix.Util.Type.isFunction(this.typeInfoCreators[e])){var h=this.typeInfoCreators[e];
g=h.call(this,f)
}else{throw new Error("Unknown type info type ["+e+"].")
}}return g
},createClassInfo:function(d){Jsonix.Util.Ensure.ensureObject(d);
if(!Jsonix.Util.Type.isString(d.defaultElementNamespaceURI)){d.defaultElementNamespaceURI=this.defaultElementNamespaceURI
}if(!Jsonix.Util.Type.isString(d.defaultAttributeNamespaceURI)){d.defaultAttributeNamespaceURI=this.defaultAttributeNamespaceURI
}if(Jsonix.Util.Type.isString(d.name)){if(!Jsonix.Util.Type.isString(d.localName)){if(Jsonix.Util.Type.isString(this.name)){if(d.name.indexOf(this.name+".")===0){d.localName=d.name.substring(this.name.length+1)
}else{d.localName=d.name
}}else{d.localName=d.name
}}}else{if(Jsonix.Util.Type.isString(d.localName)){if(Jsonix.Util.Type.isString(this.name)){d.name=this.name+"."+d.localName
}else{d.name=d.localName
}}else{throw new Error("Neither [name] nor [localName] was provided for the class info.")
}}var c=new Jsonix.Model.ClassInfo(d);
return c
},createList:function(e){Jsonix.Util.Ensure.ensureObject(e);
Jsonix.Util.Ensure.ensureExists(e.typeInfo);
var h=e.typeInfo;
var f=e.typeName||null;
var g=e.separator||" ";
return new Jsonix.Schema.XSD.List(h,f,g)
},createElementInfo:function(d){Jsonix.Util.Ensure.ensureObject(d);
Jsonix.Util.Ensure.ensureExists(d.elementName);
Jsonix.Util.Ensure.ensureExists(d.typeInfo);
if(Jsonix.Util.Type.isObject(d.elementName)){d.elementName=Jsonix.XML.QName.fromObject(d.elementName)
}else{if(Jsonix.Util.Type.isString(d.elementName)){d.elementName=new Jsonix.XML.QName(this.defaultElementNamespaceURI,d.elementName)
}else{throw new Error("Element info ["+d+"] must provide an element name.")
}}if(Jsonix.Util.Type.exists(d.substitutionHead)){if(Jsonix.Util.Type.isObject(d.substitutionHead)){d.substitutionHead=Jsonix.XML.QName.fromObject(d.substitutionHead)
}else{Jsonix.Util.Ensure.ensureString(d.substitutionHead);
d.substitutionHead=new Jsonix.XML.QName(this.defaultElementNamespaceURI,d.substitutionHead)
}}var c=new Jsonix.Model.ElementInfo(d);
return c
},registerTypeInfos:function(d){for(var e=0;
e<this.typeInfos.length;
e++){var f=this.typeInfos[e];
d.registerTypeInfo(f)
}},buildTypeInfos:function(d){for(var e=0;
e<this.typeInfos.length;
e++){var f=this.typeInfos[e];
f.build(d,this)
}},registerElementInfos:function(d){for(var e=0;
e<this.elementInfos.length;
e++){var f=this.elementInfos[e];
d.registerElementInfo(f)
}},buildElementInfos:function(d){for(var e=0;
e<this.elementInfos.length;
e++){var f=this.elementInfos[e];
f.build(d,this)
}},cs:function(){return this
},es:function(){return this
},CLASS_NAME:"Jsonix.Model.Module"});
Jsonix.Model.Module.prototype.typeInfoCreators={classInfo:Jsonix.Model.Module.prototype.createClassInfo,list:Jsonix.Model.Module.prototype.createList};
Jsonix.Context=Jsonix.Class({modules:[],typeInfos:null,elementInfos:null,properties:null,substitutionMembersMap:null,scopedElementInfosMap:null,initialize:function(h,i){this.modules=[];
this.elementInfos=[];
this.typeInfos={};
this.registerBuiltinTypeInfos();
this.properties={namespacePrefixes:{}};
this.substitutionMembersMap={};
this.scopedElementInfosMap={};
if(Jsonix.Util.Type.exists(i)){if(Jsonix.Util.Ensure.ensureObject(i)){if(Jsonix.Util.Type.isObject(i.namespacePrefixes)){this.properties.namespacePrefixes=i.namespacePrefixes
}}}if(Jsonix.Util.Type.exists(h)){Jsonix.Util.Ensure.ensureArray(h);
var f,g,j;
for(f=0;
f<h.length;
f++){g=h[f];
j=this.createModule(g);
this.modules[f]=j
}}this.processModules()
},createModule:function(d){var c;
if(d instanceof Jsonix.Model.Module){c=d
}else{c=new Jsonix.Model.Module(d)
}return c
},registerBuiltinTypeInfos:function(){for(var b=0;
b<this.builtinTypeInfos.length;
b++){this.registerTypeInfo(this.builtinTypeInfos[b])
}},processModules:function(){var d,c;
for(d=0;
d<this.modules.length;
d++){c=this.modules[d];
c.registerTypeInfos(this)
}for(d=0;
d<this.modules.length;
d++){c=this.modules[d];
c.buildTypeInfos(this)
}for(d=0;
d<this.modules.length;
d++){c=this.modules[d];
c.registerElementInfos(this)
}for(d=0;
d<this.modules.length;
d++){c=this.modules[d];
c.buildElementInfos(this)
}},registerTypeInfo:function(b){Jsonix.Util.Ensure.ensureObject(b);
Jsonix.Util.Ensure.ensureString(b.name);
this.typeInfos[b.name]=b
},resolveTypeInfo:function(e,d){if(!Jsonix.Util.Type.exists(e)){return null
}else{if(e instanceof Jsonix.Model.TypeInfo){return e
}else{if(Jsonix.Util.Type.isString(e)){if(!this.typeInfos[e]){throw new Error("Type info ["+e+"] is not known in this context.")
}else{return this.typeInfos[e]
}}else{Jsonix.Util.Ensure.ensureObject(d,"Type info mapping can only be resolved if module is provided.");
var f=d.createTypeInfo(e);
f.build(this,d);
return f
}}}},registerElementInfo:function(j){Jsonix.Util.Ensure.ensureObject(j);
this.elementInfos.push(j);
if(Jsonix.Util.Type.exists(j.substitutionHead)){var l=j.substitutionHead;
var k=l.key;
var g=this.substitutionMembersMap[k];
if(!Jsonix.Util.Type.isArray(g)){g=[];
this.substitutionMembersMap[k]=g
}g.push(j)
}var h;
if(Jsonix.Util.Type.exists(j.scope)){h=this.resolveTypeInfo(j.scope).name
}else{h="##global"
}var i=this.scopedElementInfosMap[h];
if(!Jsonix.Util.Type.isObject(i)){i={};
this.scopedElementInfosMap[h]=i
}i[j.elementName.key]=j
},getElementInfo:function(o,m){if(Jsonix.Util.Type.exists(m)){var j=m.name;
var k=this.scopedElementInfosMap[j];
if(Jsonix.Util.Type.exists(k)){var n=k[o.key];
if(Jsonix.Util.Type.exists(n)){return n
}}}var l="##global";
var p=this.scopedElementInfosMap[l];
if(Jsonix.Util.Type.exists(p)){var i=p[o.key];
if(Jsonix.Util.Type.exists(i)){return i
}}return null
},getSubstitutionMembers:function(b){return this.substitutionMembersMap[Jsonix.XML.QName.fromObject(b).key]
},createMarshaller:function(){return new Jsonix.Context.Marshaller(this)
},createUnmarshaller:function(){return new Jsonix.Context.Unmarshaller(this)
},builtinTypeInfos:[Jsonix.Schema.XSD.AnyType.INSTANCE,Jsonix.Schema.XSD.AnyURI.INSTANCE,Jsonix.Schema.XSD.Base64Binary.INSTANCE,Jsonix.Schema.XSD.Boolean.INSTANCE,Jsonix.Schema.XSD.Byte.INSTANCE,Jsonix.Schema.XSD.Calendar.INSTANCE,Jsonix.Schema.XSD.Date.INSTANCE,Jsonix.Schema.XSD.DateTime.INSTANCE,Jsonix.Schema.XSD.Decimal.INSTANCE,Jsonix.Schema.XSD.Double.INSTANCE,Jsonix.Schema.XSD.Duration.INSTANCE,Jsonix.Schema.XSD.Float.INSTANCE,Jsonix.Schema.XSD.GDay.INSTANCE,Jsonix.Schema.XSD.GMonth.INSTANCE,Jsonix.Schema.XSD.GMonthDay.INSTANCE,Jsonix.Schema.XSD.GYear.INSTANCE,Jsonix.Schema.XSD.GYearMonth.INSTANCE,Jsonix.Schema.XSD.HexBinary.INSTANCE,Jsonix.Schema.XSD.ID.INSTANCE,Jsonix.Schema.XSD.IDREF.INSTANCE,Jsonix.Schema.XSD.IDREFS.INSTANCE,Jsonix.Schema.XSD.Int.INSTANCE,Jsonix.Schema.XSD.Integer.INSTANCE,Jsonix.Schema.XSD.Language.INSTANCE,Jsonix.Schema.XSD.Long.INSTANCE,Jsonix.Schema.XSD.Name.INSTANCE,Jsonix.Schema.XSD.NCName.INSTANCE,Jsonix.Schema.XSD.NegativeInteger.INSTANCE,Jsonix.Schema.XSD.NMToken.INSTANCE,Jsonix.Schema.XSD.NMTokens.INSTANCE,Jsonix.Schema.XSD.NonNegativeInteger.INSTANCE,Jsonix.Schema.XSD.NonPositiveInteger.INSTANCE,Jsonix.Schema.XSD.NormalizedString.INSTANCE,Jsonix.Schema.XSD.Number.INSTANCE,Jsonix.Schema.XSD.PositiveInteger.INSTANCE,Jsonix.Schema.XSD.QName.INSTANCE,Jsonix.Schema.XSD.Short.INSTANCE,Jsonix.Schema.XSD.String.INSTANCE,Jsonix.Schema.XSD.Strings.INSTANCE,Jsonix.Schema.XSD.Time.INSTANCE,Jsonix.Schema.XSD.Token.INSTANCE,Jsonix.Schema.XSD.UnsignedByte.INSTANCE,Jsonix.Schema.XSD.UnsignedInt.INSTANCE,Jsonix.Schema.XSD.UnsignedLong.INSTANCE,Jsonix.Schema.XSD.UnsignedShort.INSTANCE],CLASS_NAME:"Jsonix.Context"});
Jsonix.Context.Marshaller=Jsonix.Class({context:null,initialize:function(b){Jsonix.Util.Ensure.ensureObject(b);
this.context=b
},marshalString:function(e){var d=this.marshalDocument(e);
var f=Jsonix.DOM.serialize(d);
return f
},marshalDocument:function(d){var e=new Jsonix.XML.Output({namespacePrefixes:this.context.properties.namespacePrefixes});
var f=e.writeStartDocument();
this.marshalElementNode(d,e);
e.writeEndDocument();
return f
},marshalElementNode:function(j,n){Jsonix.Util.Ensure.ensureObject(j);
Jsonix.Util.Ensure.ensureObject(j.name);
Jsonix.Util.Ensure.ensureString(j.name.localPart);
Jsonix.Util.Ensure.ensureExists(j.value);
var m=Jsonix.XML.QName.fromObject(j.name);
var h=this.context.getElementInfo(m);
if(!Jsonix.Util.Type.exists(h)){throw new Error("Could not find element declaration for the element ["+m.key+"].")
}Jsonix.Util.Ensure.ensureObject(h.typeInfo);
var k=h.typeInfo;
var l=n.writeStartElement(j.name);
var i=Jsonix.Model.Adapter.getAdapter(h);
i.marshal(this.context,j.value,n,k);
n.writeEndElement();
return l
},CLASS_NAME:"Jsonix.Context.Marshaller"});
Jsonix.Context.Unmarshaller=Jsonix.Class({context:null,initialize:function(b){Jsonix.Util.Ensure.ensureObject(b);
this.context=b
},unmarshalString:function(c){Jsonix.Util.Ensure.ensureString(c);
var d=Jsonix.DOM.parse(c);
return this.unmarshalDocument(d)
},unmarshalURL:function(d,f,e){Jsonix.Util.Ensure.ensureString(d);
Jsonix.Util.Ensure.ensureFunction(f);
if(Jsonix.Util.Type.exists(e)){Jsonix.Util.Ensure.ensureObject(e)
}that=this;
Jsonix.DOM.load(d,function(a){f(that.unmarshalDocument(a))
},e)
},unmarshalFile:function(g,h,e){if(typeof _jsonix_fs==="undefined"){throw new Error("File unmarshalling is only available in environments which support file systems.")
}Jsonix.Util.Ensure.ensureString(g);
Jsonix.Util.Ensure.ensureFunction(h);
if(Jsonix.Util.Type.exists(e)){Jsonix.Util.Ensure.ensureObject(e)
}that=this;
var f=_jsonix_fs;
f.readFile(g,e,function(d,c){if(d){throw d
}else{var a=c.toString();
var b=Jsonix.DOM.parse(a);
h(that.unmarshalDocument(b))
}})
},unmarshalDocument:function(f){var d=new Jsonix.XML.Input(f);
var e=null;
d.nextTag();
return this.unmarshalElementNode(d)
},unmarshalElementNode:function(m){if(m.eventType!=1){throw new Error("Parser must be on START_ELEMENT to read next text.")
}var i=null;
var l=Jsonix.XML.QName.fromObject(m.getName());
var n=this.context.getElementInfo(l);
if(!Jsonix.Util.Type.exists(n)){throw new Error("Could not find element declaration for the element ["+l.key+"].")
}Jsonix.Util.Ensure.ensureObject(n.typeInfo);
var j=n.typeInfo;
var h=Jsonix.Model.Adapter.getAdapter(n);
var k=h.unmarshal(this.context,m,j);
i={name:l,value:k};
return i
},CLASS_NAME:"Jsonix.Context.Unmarshaller"});
	// Complete Jsonix script is included above
	return { Jsonix: Jsonix };
};

// If the require function exists ...
if (typeof require === 'function') {
	// ... but the define function does not exists
	if (typeof define !== 'function') {
		// Assume we're in the Node.js environment
		// In this case, load the define function via amdefine
		var define = require('amdefine')(module);
		// Use xmldom and xmlhttprequests as dependencies
		define(["xmldom", "xmlhttprequest", "fs"], _jsonix_factory);
	}
	else {
		// Otherwise assume we're in the browser/RequireJS environment
		// Load the module without xmldom and xmlhttprequests dependencies
		define([], _jsonix_factory);
	}
}
// If the require function does not exists, we're not in Node.js and therefore in browser environment
else
{
	// Just call the factory and set Jsonix as global.
	var Jsonix = _jsonix_factory().Jsonix;
}
