import{r as P,A as Gt,D as Yt,u as jt,E as qt,F as Xt,g as Et,s as Vt,b as s,j as p,n as $t,m as _t,G as Kt,q as Zt,H as Qt,U as At,c as Jt,i as en,J as tn}from"./index.14a639b9.js";import{a as nn,P as on,p as yt}from"./Product.b15989b4.js";import{Q as an}from"./QuantityController.fa9ca3b7.js";import{N as rn}from"./NotFound.74ddee6a.js";import"./InputNumber.988847cc.js";/*! @license DOMPurify 3.0.9 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.9/LICENSE */const{entries:Ct,setPrototypeOf:Nt,isFrozen:sn,getPrototypeOf:ln,getOwnPropertyDescriptor:cn}=Object;let{freeze:N,seal:O,create:Dt}=Object,{apply:qe,construct:Xe}=typeof Reflect<"u"&&Reflect;N||(N=function(o){return o});O||(O=function(o){return o});qe||(qe=function(o,u,r){return o.apply(u,r)});Xe||(Xe=function(o,u){return new o(...u)});const xe=R(Array.prototype.forEach),xt=R(Array.prototype.pop),ce=R(Array.prototype.push),Re=R(String.prototype.toLowerCase),Be=R(String.prototype.toString),un=R(String.prototype.match),ue=R(String.prototype.replace),mn=R(String.prototype.indexOf),fn=R(String.prototype.trim),v=R(Object.prototype.hasOwnProperty),S=R(RegExp.prototype.test),me=dn(TypeError);function R(l){return function(o){for(var u=arguments.length,r=new Array(u>1?u-1:0),h=1;h<u;h++)r[h-1]=arguments[h];return qe(l,o,r)}}function dn(l){return function(){for(var o=arguments.length,u=new Array(o),r=0;r<o;r++)u[r]=arguments[r];return Xe(l,u)}}function c(l,o){let u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Re;Nt&&Nt(l,null);let r=o.length;for(;r--;){let h=o[r];if(typeof h=="string"){const C=u(h);C!==h&&(sn(o)||(o[r]=C),h=C)}l[h]=!0}return l}function pn(l){for(let o=0;o<l.length;o++)v(l,o)||(l[o]=null);return l}function W(l){const o=Dt(null);for(const[u,r]of Ct(l))v(l,u)&&(Array.isArray(r)?o[u]=pn(r):r&&typeof r=="object"&&r.constructor===Object?o[u]=W(r):o[u]=r);return o}function be(l,o){for(;l!==null;){const r=cn(l,o);if(r){if(r.get)return R(r.get);if(typeof r.value=="function")return R(r.value)}l=ln(l)}function u(){return null}return u}const bt=N(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),We=N(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Ge=N(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),gn=N(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Ye=N(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),hn=N(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),St=N(["#text"]),Rt=N(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),je=N(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),wt=N(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Se=N(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Tn=O(/\{\{[\w\W]*|[\w\W]*\}\}/gm),En=O(/<%[\w\W]*|[\w\W]*%>/gm),_n=O(/\${[\w\W]*}/gm),An=O(/^data-[\-\w.\u00B7-\uFFFF]/),yn=O(/^aria-[\-\w]+$/),vt=O(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Nn=O(/^(?:\w+script|data):/i),xn=O(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Ot=O(/^html$/i);var Lt=Object.freeze({__proto__:null,MUSTACHE_EXPR:Tn,ERB_EXPR:En,TMPLIT_EXPR:_n,DATA_ATTR:An,ARIA_ATTR:yn,IS_ALLOWED_URI:vt,IS_SCRIPT_OR_DATA:Nn,ATTR_WHITESPACE:xn,DOCTYPE_NAME:Ot});const bn=function(){return typeof window>"u"?null:window},Sn=function(o,u){if(typeof o!="object"||typeof o.createPolicy!="function")return null;let r=null;const h="data-tt-policy-suffix";u&&u.hasAttribute(h)&&(r=u.getAttribute(h));const C="dompurify"+(r?"#"+r:"");try{return o.createPolicy(C,{createHTML(D){return D},createScriptURL(D){return D}})}catch{return console.warn("TrustedTypes policy "+C+" could not be created."),null}};function It(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:bn();const o=a=>It(a);if(o.version="3.0.9",o.removed=[],!l||!l.document||l.document.nodeType!==9)return o.isSupported=!1,o;let{document:u}=l;const r=u,h=r.currentScript,{DocumentFragment:C,HTMLTemplateElement:D,Node:U,Element:ee,NodeFilter:G,NamedNodeMap:Y=l.NamedNodeMap||l.MozNamedAttrMap,HTMLFormElement:fe,DOMParser:te,trustedTypes:i}=l,j=ee.prototype,de=be(j,"cloneNode"),ne=be(j,"nextSibling"),pe=be(j,"childNodes"),q=be(j,"parentNode");if(typeof D=="function"){const a=u.createElement("template");a.content&&a.content.ownerDocument&&(u=a.content.ownerDocument)}let _,F="";const{implementation:oe,createNodeIterator:we,createDocumentFragment:Le,getElementsByTagName:ae}=u,{importNode:Ce}=r;let w={};o.isSupported=typeof Ct=="function"&&typeof q=="function"&&oe&&oe.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:X,ERB_EXPR:m,TMPLIT_EXPR:L,DATA_ATTR:I,ARIA_ATTR:ge,IS_SCRIPT_OR_DATA:he,ATTR_WHITESPACE:Te}=Lt;let{IS_ALLOWED_URI:De}=Lt,g=null;const Ee=c({},[...bt,...We,...Ge,...Ye,...St]);let T=null;const Ve=c({},[...Rt,...je,...wt,...Se]);let d=Object.seal(Dt(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ie=null,ve=null,$e=!0,Oe=!0,Ke=!1,Ze=!0,V=!1,H=!1,Ie=!1,Me=!1,$=!1,_e=!1,Ae=!1,Qe=!0,Je=!1;const Mt="user-content-";let ke=!0,re=!1,K={},Z=null;const et=c({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let tt=null;const nt=c({},["audio","video","img","source","image","track"]);let Pe=null;const ot=c({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ye="http://www.w3.org/1998/Math/MathML",Ne="http://www.w3.org/2000/svg",M="http://www.w3.org/1999/xhtml";let Q=M,Ue=!1,Fe=null;const kt=c({},[ye,Ne,M],Be);let se=null;const Pt=["application/xhtml+xml","text/html"],Ut="text/html";let E=null,J=null;const Ft=u.createElement("form"),at=function(e){return e instanceof RegExp||e instanceof Function},He=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(J&&J===e)){if((!e||typeof e!="object")&&(e={}),e=W(e),se=Pt.indexOf(e.PARSER_MEDIA_TYPE)===-1?Ut:e.PARSER_MEDIA_TYPE,E=se==="application/xhtml+xml"?Be:Re,g=v(e,"ALLOWED_TAGS")?c({},e.ALLOWED_TAGS,E):Ee,T=v(e,"ALLOWED_ATTR")?c({},e.ALLOWED_ATTR,E):Ve,Fe=v(e,"ALLOWED_NAMESPACES")?c({},e.ALLOWED_NAMESPACES,Be):kt,Pe=v(e,"ADD_URI_SAFE_ATTR")?c(W(ot),e.ADD_URI_SAFE_ATTR,E):ot,tt=v(e,"ADD_DATA_URI_TAGS")?c(W(nt),e.ADD_DATA_URI_TAGS,E):nt,Z=v(e,"FORBID_CONTENTS")?c({},e.FORBID_CONTENTS,E):et,ie=v(e,"FORBID_TAGS")?c({},e.FORBID_TAGS,E):{},ve=v(e,"FORBID_ATTR")?c({},e.FORBID_ATTR,E):{},K=v(e,"USE_PROFILES")?e.USE_PROFILES:!1,$e=e.ALLOW_ARIA_ATTR!==!1,Oe=e.ALLOW_DATA_ATTR!==!1,Ke=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Ze=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,V=e.SAFE_FOR_TEMPLATES||!1,H=e.WHOLE_DOCUMENT||!1,$=e.RETURN_DOM||!1,_e=e.RETURN_DOM_FRAGMENT||!1,Ae=e.RETURN_TRUSTED_TYPE||!1,Me=e.FORCE_BODY||!1,Qe=e.SANITIZE_DOM!==!1,Je=e.SANITIZE_NAMED_PROPS||!1,ke=e.KEEP_CONTENT!==!1,re=e.IN_PLACE||!1,De=e.ALLOWED_URI_REGEXP||vt,Q=e.NAMESPACE||M,d=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&at(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(d.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&at(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(d.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(d.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),V&&(Oe=!1),_e&&($=!0),K&&(g=c({},St),T=[],K.html===!0&&(c(g,bt),c(T,Rt)),K.svg===!0&&(c(g,We),c(T,je),c(T,Se)),K.svgFilters===!0&&(c(g,Ge),c(T,je),c(T,Se)),K.mathMl===!0&&(c(g,Ye),c(T,wt),c(T,Se))),e.ADD_TAGS&&(g===Ee&&(g=W(g)),c(g,e.ADD_TAGS,E)),e.ADD_ATTR&&(T===Ve&&(T=W(T)),c(T,e.ADD_ATTR,E)),e.ADD_URI_SAFE_ATTR&&c(Pe,e.ADD_URI_SAFE_ATTR,E),e.FORBID_CONTENTS&&(Z===et&&(Z=W(Z)),c(Z,e.FORBID_CONTENTS,E)),ke&&(g["#text"]=!0),H&&c(g,["html","head","body"]),g.table&&(c(g,["tbody"]),delete ie.tbody),e.TRUSTED_TYPES_POLICY){if(typeof e.TRUSTED_TYPES_POLICY.createHTML!="function")throw me('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof e.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw me('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');_=e.TRUSTED_TYPES_POLICY,F=_.createHTML("")}else _===void 0&&(_=Sn(i,h)),_!==null&&typeof F=="string"&&(F=_.createHTML(""));N&&N(e),J=e}},it=c({},["mi","mo","mn","ms","mtext"]),rt=c({},["foreignobject","desc","title","annotation-xml"]),Ht=c({},["title","style","font","a","script"]),st=c({},[...We,...Ge,...gn]),lt=c({},[...Ye,...hn]),zt=function(e){let t=q(e);(!t||!t.tagName)&&(t={namespaceURI:Q,tagName:"template"});const n=Re(e.tagName),f=Re(t.tagName);return Fe[e.namespaceURI]?e.namespaceURI===Ne?t.namespaceURI===M?n==="svg":t.namespaceURI===ye?n==="svg"&&(f==="annotation-xml"||it[f]):Boolean(st[n]):e.namespaceURI===ye?t.namespaceURI===M?n==="math":t.namespaceURI===Ne?n==="math"&&rt[f]:Boolean(lt[n]):e.namespaceURI===M?t.namespaceURI===Ne&&!rt[f]||t.namespaceURI===ye&&!it[f]?!1:!lt[n]&&(Ht[n]||!st[n]):!!(se==="application/xhtml+xml"&&Fe[e.namespaceURI]):!1},z=function(e){ce(o.removed,{element:e});try{e.parentNode.removeChild(e)}catch{e.remove()}},ze=function(e,t){try{ce(o.removed,{attribute:t.getAttributeNode(e),from:t})}catch{ce(o.removed,{attribute:null,from:t})}if(t.removeAttribute(e),e==="is"&&!T[e])if($||_e)try{z(t)}catch{}else try{t.setAttribute(e,"")}catch{}},ct=function(e){let t=null,n=null;if(Me)e="<remove></remove>"+e;else{const y=un(e,/^[\r\n\t ]+/);n=y&&y[0]}se==="application/xhtml+xml"&&Q===M&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const f=_?_.createHTML(e):e;if(Q===M)try{t=new te().parseFromString(f,se)}catch{}if(!t||!t.documentElement){t=oe.createDocument(Q,"template",null);try{t.documentElement.innerHTML=Ue?F:f}catch{}}const A=t.body||t.documentElement;return e&&n&&A.insertBefore(u.createTextNode(n),A.childNodes[0]||null),Q===M?ae.call(t,H?"html":"body")[0]:H?t.documentElement:A},ut=function(e){return we.call(e.ownerDocument||e,e,G.SHOW_ELEMENT|G.SHOW_COMMENT|G.SHOW_TEXT,null)},Bt=function(e){return e instanceof fe&&(typeof e.nodeName!="string"||typeof e.textContent!="string"||typeof e.removeChild!="function"||!(e.attributes instanceof Y)||typeof e.removeAttribute!="function"||typeof e.setAttribute!="function"||typeof e.namespaceURI!="string"||typeof e.insertBefore!="function"||typeof e.hasChildNodes!="function")},mt=function(e){return typeof U=="function"&&e instanceof U},k=function(e,t,n){!w[e]||xe(w[e],f=>{f.call(o,t,n,J)})},ft=function(e){let t=null;if(k("beforeSanitizeElements",e,null),Bt(e))return z(e),!0;const n=E(e.nodeName);if(k("uponSanitizeElement",e,{tagName:n,allowedTags:g}),e.hasChildNodes()&&!mt(e.firstElementChild)&&S(/<[/\w]/g,e.innerHTML)&&S(/<[/\w]/g,e.textContent))return z(e),!0;if(!g[n]||ie[n]){if(!ie[n]&&pt(n)&&(d.tagNameCheck instanceof RegExp&&S(d.tagNameCheck,n)||d.tagNameCheck instanceof Function&&d.tagNameCheck(n)))return!1;if(ke&&!Z[n]){const f=q(e)||e.parentNode,A=pe(e)||e.childNodes;if(A&&f){const y=A.length;for(let x=y-1;x>=0;--x)f.insertBefore(de(A[x],!0),ne(e))}}return z(e),!0}return e instanceof ee&&!zt(e)||(n==="noscript"||n==="noembed"||n==="noframes")&&S(/<\/no(script|embed|frames)/i,e.innerHTML)?(z(e),!0):(V&&e.nodeType===3&&(t=e.textContent,xe([X,m,L],f=>{t=ue(t,f," ")}),e.textContent!==t&&(ce(o.removed,{element:e.cloneNode()}),e.textContent=t)),k("afterSanitizeElements",e,null),!1)},dt=function(e,t,n){if(Qe&&(t==="id"||t==="name")&&(n in u||n in Ft))return!1;if(!(Oe&&!ve[t]&&S(I,t))){if(!($e&&S(ge,t))){if(!T[t]||ve[t]){if(!(pt(e)&&(d.tagNameCheck instanceof RegExp&&S(d.tagNameCheck,e)||d.tagNameCheck instanceof Function&&d.tagNameCheck(e))&&(d.attributeNameCheck instanceof RegExp&&S(d.attributeNameCheck,t)||d.attributeNameCheck instanceof Function&&d.attributeNameCheck(t))||t==="is"&&d.allowCustomizedBuiltInElements&&(d.tagNameCheck instanceof RegExp&&S(d.tagNameCheck,n)||d.tagNameCheck instanceof Function&&d.tagNameCheck(n))))return!1}else if(!Pe[t]){if(!S(De,ue(n,Te,""))){if(!((t==="src"||t==="xlink:href"||t==="href")&&e!=="script"&&mn(n,"data:")===0&&tt[e])){if(!(Ke&&!S(he,ue(n,Te,"")))){if(n)return!1}}}}}}return!0},pt=function(e){return e!=="annotation-xml"&&e.indexOf("-")>0},gt=function(e){k("beforeSanitizeAttributes",e,null);const{attributes:t}=e;if(!t)return;const n={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:T};let f=t.length;for(;f--;){const A=t[f],{name:y,namespaceURI:x,value:B}=A,le=E(y);let b=y==="value"?B:fn(B);if(n.attrName=le,n.attrValue=b,n.keepAttr=!0,n.forceKeepAttr=void 0,k("uponSanitizeAttribute",e,n),b=n.attrValue,n.forceKeepAttr||(ze(y,e),!n.keepAttr))continue;if(!Ze&&S(/\/>/i,b)){ze(y,e);continue}V&&xe([X,m,L],Tt=>{b=ue(b,Tt," ")});const ht=E(e.nodeName);if(!!dt(ht,le,b)){if(Je&&(le==="id"||le==="name")&&(ze(y,e),b=Mt+b),_&&typeof i=="object"&&typeof i.getAttributeType=="function"&&!x)switch(i.getAttributeType(ht,le)){case"TrustedHTML":{b=_.createHTML(b);break}case"TrustedScriptURL":{b=_.createScriptURL(b);break}}try{x?e.setAttributeNS(x,y,b):e.setAttribute(y,b),xt(o.removed)}catch{}}}k("afterSanitizeAttributes",e,null)},Wt=function a(e){let t=null;const n=ut(e);for(k("beforeSanitizeShadowDOM",e,null);t=n.nextNode();)k("uponSanitizeShadowNode",t,null),!ft(t)&&(t.content instanceof C&&a(t.content),gt(t));k("afterSanitizeShadowDOM",e,null)};return o.sanitize=function(a){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=null,n=null,f=null,A=null;if(Ue=!a,Ue&&(a="<!-->"),typeof a!="string"&&!mt(a))if(typeof a.toString=="function"){if(a=a.toString(),typeof a!="string")throw me("dirty is not a string, aborting")}else throw me("toString is not a function");if(!o.isSupported)return a;if(Ie||He(e),o.removed=[],typeof a=="string"&&(re=!1),re){if(a.nodeName){const B=E(a.nodeName);if(!g[B]||ie[B])throw me("root node is forbidden and cannot be sanitized in-place")}}else if(a instanceof U)t=ct("<!---->"),n=t.ownerDocument.importNode(a,!0),n.nodeType===1&&n.nodeName==="BODY"||n.nodeName==="HTML"?t=n:t.appendChild(n);else{if(!$&&!V&&!H&&a.indexOf("<")===-1)return _&&Ae?_.createHTML(a):a;if(t=ct(a),!t)return $?null:Ae?F:""}t&&Me&&z(t.firstChild);const y=ut(re?a:t);for(;f=y.nextNode();)ft(f)||(f.content instanceof C&&Wt(f.content),gt(f));if(re)return a;if($){if(_e)for(A=Le.call(t.ownerDocument);t.firstChild;)A.appendChild(t.firstChild);else A=t;return(T.shadowroot||T.shadowrootmode)&&(A=Ce.call(r,A,!0)),A}let x=H?t.outerHTML:t.innerHTML;return H&&g["!doctype"]&&t.ownerDocument&&t.ownerDocument.doctype&&t.ownerDocument.doctype.name&&S(Ot,t.ownerDocument.doctype.name)&&(x="<!DOCTYPE "+t.ownerDocument.doctype.name+`>
`+x),V&&xe([X,m,L],B=>{x=ue(x,B," ")}),_&&Ae?_.createHTML(x):x},o.setConfig=function(){let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};He(a),Ie=!0},o.clearConfig=function(){J=null,Ie=!1},o.isValidAttribute=function(a,e,t){J||He({});const n=E(a),f=E(e);return dt(n,f,t)},o.addHook=function(a,e){typeof e=="function"&&(w[a]=w[a]||[],ce(w[a],e))},o.removeHook=function(a){if(w[a])return xt(w[a])},o.removeHooks=function(a){w[a]&&(w[a]=[])},o.removeAllHooks=function(){w={}},o}var Rn=It();function On(){const{isAuthenticated:l}=P.exports.useContext(Gt),o=Yt(),u=jt(),[r,h]=P.exports.useState(1),{nameId:C}=qt(),D=Xt(C),U=P.exports.useRef(null),[ee,G]=P.exports.useState(""),[Y,fe]=P.exports.useState([0,5]),{data:te}=Et({queryKey:["product",D],queryFn:()=>yt.getProductDetail(D)}),i=te==null?void 0:te.data.data,j=P.exports.useMemo(()=>i?i.images.slice(...Y):[],[i,Y]),de={page:1,limit:20,category:i==null?void 0:i.category._id,exclude:D},{data:ne}=Et({queryKey:["products",de],queryFn:()=>yt.getProducts(de),enabled:Boolean(i),staleTime:3*60*1e3}),pe=ne==null?void 0:ne.data.data,q=Vt({mutationFn:tn.addToCart});P.exports.useEffect(()=>{i&&i.images.length>0&&G(i.images[0])},[i]),P.exports.useEffect(()=>()=>{history.replaceState(null,"")},[]),P.exports.useEffect(()=>{h(1)},[D]);const _=m=>{G(m)},F=()=>{i&&Y[1]<(i==null?void 0:i.images.length)&&fe(m=>[m[0]+1,m[1]+1])},oe=()=>{Y[0]>0&&fe(m=>[m[0]-1,m[1]-1])},we=m=>{const L=m.currentTarget.getBoundingClientRect(),I=U.current,{naturalHeight:ge,naturalWidth:he}=I,Te=m.pageX-(L.x+window.scrollX),g=(m.pageY-(L.y+window.scrollY))*(1-ge/L.height),Ee=Te*(1-he/L.width);I.style.width=he+"px",I.style.height=ge+"px",I.style.maxWidth="unset",I.style.top=g+"px",I.style.left=Ee+"px"},Le=()=>{var m;(m=U.current)==null||m.removeAttribute("style")},ae=m=>{h(m)},Ce=()=>{if(!l)return X(i);q.mutate({buy_count:Number(r),product_id:i==null?void 0:i._id},{onSuccess:m=>{Zt.success(m.data.message,{position:"top-center",autoClose:1e3}),o.invalidateQueries({queryKey:["purchases",{status:Qt.inCart}]})}})},w=async()=>{if(!l)return X(i);const L=(await q.mutateAsync({buy_count:Number(r),product_id:i==null?void 0:i._id})).data.data;u(At.cart,{state:{purchaseId:L._id}})},X=m=>(u({pathname:At.login,search:Jt({next:en({name:m.name,id:m._id})}).toString()}),u);return i?p("div",{className:"bg-gray-200 py-6",children:[s("div",{className:"container",children:s("div",{className:"bg-white p-4 shadow",children:p("div",{className:"grid grid-cols-12 gap-9",children:[p("div",{className:"col-span-5",children:[s("div",{className:"relative w-full cursor-zoom-in overflow-hidden pt-[100%] shadow",onMouseMove:we,onMouseLeave:Le,children:s("img",{src:ee,alt:i.name,className:"absolute top-0 left-0 h-full w-full bg-white object-cover",ref:U})}),p("div",{className:"relative mt-4 grid grid-cols-5 gap-1",children:[s("button",{className:"absolute left-0 top-1/2 z-10 h-9 w-5 -translate-y-1/2 bg-black/20 text-white",onClick:oe,children:s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"h-5 w-5",children:s("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5L8.25 12l7.5-7.5"})})}),j.map((m,L)=>{const I=m===ee;return p("div",{className:"relative w-full pt-[100%]",onMouseEnter:()=>_(m),children:[s("img",{src:m,alt:i.name,className:"absolute top-0 left-0 h-full w-full cursor-pointer bg-white object-cover"}),I&&s("div",{className:"absolute inset-0 border-2 border-orange"})]},`${m}${L}`)}),s("button",{className:"absolute right-0 top-1/2 z-10 h-9 w-5 -translate-y-1/2 bg-black/20 text-white",onClick:F,children:s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"h-5 w-5",children:s("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})})})]})]}),p("div",{className:"col-span-7",children:[s("h1",{className:"text-xl font-medium uppercase",children:i.name}),p("div",{className:"mt-8 flex items-center",children:[p("div",{className:"flex items-center",children:[s("span",{className:"mr-1 border-b border-b-orange text-orange",children:i.rating}),s(nn,{rating:i.rating,activeClassname:"fill-orange text-orange h-4 w-4",nonActiveClassname:"fill-gray-300 text-gray-300 h-4 w-4"})]}),s("div",{className:"mx-4 h-4 w-[1px] bg-gray-300"}),p("div",{children:[s("span",{children:$t(i.sold)}),s("span",{className:"ml-1 text-gray-500",children:"\u0110\xE3 b\xE1n"})]})]}),p("div",{className:"mt-8 flex items-center bg-gray-50 px-5 py-4",children:[p("div",{className:"text-gray-500 line-through",children:["\u20AB",_t(i.price_before_discount)]}),p("div",{className:"ml-3 text-3xl font-medium text-orange",children:["\u20AB",_t(i.price)]}),p("div",{className:"ml-4 rounded-sm bg-orange px-1 py-[2px] text-xs font-semibold uppercase text-white",children:[Kt(i.price_before_discount,i.price)," gi\u1EA3m"]})]}),p("div",{className:"mt-8 flex items-center",children:[s("div",{className:"capitalize text-gray-500",children:"S\u1ED1 l\u01B0\u1EE3ng"}),s(an,{value:r,max:i.quantity,onType:ae,onIncrease:ae,onDecrease:ae}),p("div",{className:"ml-6 text-sm text-gray-500",children:[i.quantity," s\u1EA3n ph\u1EA9m c\xF3 s\u1EB5n"]})]}),p("div",{className:"mt-8 flex items-center",children:[p("button",{className:"flex h-12 items-center justify-center rounded-sm border border-orange bg-orange/10 px-5 capitalize text-orange shadow-sm hover:bg-orange/5",onClick:Ce,children:[s("svg",{enableBackground:"new 0 0 15 15",viewBox:"0 0 15 15",x:0,y:0,className:"mr-[10px] h-5 w-5 fill-current stroke-orange text-orange",children:p("g",{children:[p("g",{children:[s("polyline",{fill:"none",points:".5 .5 2.7 .5 5.2 11 12.4 11 14.5 3.5 3.7 3.5",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10}),s("circle",{cx:6,cy:"13.5",r:1,stroke:"none"}),s("circle",{cx:"11.5",cy:"13.5",r:1,stroke:"none"})]}),s("line",{fill:"none",strokeLinecap:"round",strokeMiterlimit:10,x1:"7.5",x2:"10.5",y1:7,y2:7}),s("line",{fill:"none",strokeLinecap:"round",strokeMiterlimit:10,x1:9,x2:9,y1:"8.5",y2:"5.5"})]})}),"Th\xEAm v\xE0o gi\u1ECF h\xE0ng"]}),s("button",{className:"fkex ml-4 h-12 min-w-[5rem] items-center justify-center rounded-sm bg-orange px-5 capitalize text-white shadow-sm outline-none hover:bg-orange/90",onClick:w,children:"Mua ngay"})]})]})]})})}),s("div",{className:"mt-8",children:s("div",{className:"container",children:p("div",{className:" bg-white p-4 shadow",children:[s("div",{className:"rounded bg-gray-50 p-4 text-lg capitalize text-slate-700",children:"M\xF4 t\u1EA3 s\u1EA3n ph\u1EA9m"}),s("div",{className:"mx-4 mt-12 mb-4 text-sm leading-loose",children:s("div",{dangerouslySetInnerHTML:{__html:Rn.sanitize(i.description)}})})]})})}),s("div",{className:"mt-8",children:p("div",{className:"container",children:[s("div",{className:"uppercase text-gray-400",children:"C\xD3 TH\u1EC2 B\u1EA0N C\u0168NG TH\xCDCH"}),pe&&s("div",{className:"mt-6 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6",children:pe.products.map(m=>s("div",{className:"col-span-1",children:s(on,{product:m})},m._id))})]})})]}):s(rn,{})}export{On as default};
