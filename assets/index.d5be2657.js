import{r as P,A as Gt,D as Yt,u as jt,E as qt,F as Xt,n as Et,c as Vt,j as s,G as Kt,d as p,v as $t,t as _t,H as Zt,B as Qt,I as Jt,U as At,f as en,J as tn,K as nn}from"./index.2787eb53.js";import{a as on,P as an,p as yt}from"./Product.74377022.js";import{Q as rn}from"./QuantityController.0b0947b9.js";import{N as sn}from"./NotFound.85f71c1d.js";import"./InputNumber.57181495.js";/*! @license DOMPurify 3.0.9 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.9/LICENSE */const{entries:Ct,setPrototypeOf:Nt,isFrozen:ln,getPrototypeOf:cn,getOwnPropertyDescriptor:un}=Object;let{freeze:N,seal:v,create:Dt}=Object,{apply:qe,construct:Xe}=typeof Reflect<"u"&&Reflect;N||(N=function(o){return o});v||(v=function(o){return o});qe||(qe=function(o,u,r){return o.apply(u,r)});Xe||(Xe=function(o,u){return new o(...u)});const xe=R(Array.prototype.forEach),xt=R(Array.prototype.pop),me=R(Array.prototype.push),Re=R(String.prototype.toLowerCase),Be=R(String.prototype.toString),mn=R(String.prototype.match),fe=R(String.prototype.replace),fn=R(String.prototype.indexOf),dn=R(String.prototype.trim),D=R(Object.prototype.hasOwnProperty),S=R(RegExp.prototype.test),de=pn(TypeError);function R(l){return function(o){for(var u=arguments.length,r=new Array(u>1?u-1:0),h=1;h<u;h++)r[h-1]=arguments[h];return qe(l,o,r)}}function pn(l){return function(){for(var o=arguments.length,u=new Array(o),r=0;r<o;r++)u[r]=arguments[r];return Xe(l,u)}}function c(l,o){let u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Re;Nt&&Nt(l,null);let r=o.length;for(;r--;){let h=o[r];if(typeof h=="string"){const L=u(h);L!==h&&(ln(o)||(o[r]=L),h=L)}l[h]=!0}return l}function gn(l){for(let o=0;o<l.length;o++)D(l,o)||(l[o]=null);return l}function W(l){const o=Dt(null);for(const[u,r]of Ct(l))D(l,u)&&(Array.isArray(r)?o[u]=gn(r):r&&typeof r=="object"&&r.constructor===Object?o[u]=W(r):o[u]=r);return o}function be(l,o){for(;l!==null;){const r=un(l,o);if(r){if(r.get)return R(r.get);if(typeof r.value=="function")return R(r.value)}l=cn(l)}function u(){return null}return u}const bt=N(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),We=N(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Ge=N(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),hn=N(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Ye=N(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Tn=N(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),St=N(["#text"]),Rt=N(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),je=N(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),wt=N(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Se=N(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),En=v(/\{\{[\w\W]*|[\w\W]*\}\}/gm),_n=v(/<%[\w\W]*|[\w\W]*%>/gm),An=v(/\${[\w\W]*}/gm),yn=v(/^data-[\-\w.\u00B7-\uFFFF]/),Nn=v(/^aria-[\-\w]+$/),vt=v(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),xn=v(/^(?:\w+script|data):/i),bn=v(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Ot=v(/^html$/i);var Lt=Object.freeze({__proto__:null,MUSTACHE_EXPR:En,ERB_EXPR:_n,TMPLIT_EXPR:An,DATA_ATTR:yn,ARIA_ATTR:Nn,IS_ALLOWED_URI:vt,IS_SCRIPT_OR_DATA:xn,ATTR_WHITESPACE:bn,DOCTYPE_NAME:Ot});const Sn=function(){return typeof window>"u"?null:window},Rn=function(o,u){if(typeof o!="object"||typeof o.createPolicy!="function")return null;let r=null;const h="data-tt-policy-suffix";u&&u.hasAttribute(h)&&(r=u.getAttribute(h));const L="dompurify"+(r?"#"+r:"");try{return o.createPolicy(L,{createHTML(C){return C},createScriptURL(C){return C}})}catch{return console.warn("TrustedTypes policy "+L+" could not be created."),null}};function It(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Sn();const o=a=>It(a);if(o.version="3.0.9",o.removed=[],!l||!l.document||l.document.nodeType!==9)return o.isSupported=!1,o;let{document:u}=l;const r=u,h=r.currentScript,{DocumentFragment:L,HTMLTemplateElement:C,Node:U,Element:ee,NodeFilter:G,NamedNodeMap:Y=l.NamedNodeMap||l.MozNamedAttrMap,HTMLFormElement:pe,DOMParser:te,trustedTypes:j}=l,i=ee.prototype,we=be(i,"cloneNode"),ge=be(i,"nextSibling"),ne=be(i,"childNodes"),q=be(i,"parentNode");if(typeof C=="function"){const a=u.createElement("template");a.content&&a.content.ownerDocument&&(u=a.content.ownerDocument)}let E,F="";const{implementation:oe,createNodeIterator:Le,createDocumentFragment:Ce,getElementsByTagName:De}=u,{importNode:ae}=r;let w={};o.isSupported=typeof Ct=="function"&&typeof q=="function"&&oe&&oe.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:ie,ERB_EXPR:X,TMPLIT_EXPR:m,DATA_ATTR:O,ARIA_ATTR:I,IS_SCRIPT_OR_DATA:he,ATTR_WHITESPACE:re}=Lt;let{IS_ALLOWED_URI:Te}=Lt,T=null;const Ee=c({},[...bt,...We,...Ge,...Ye,...St]);let g=null;const Ve=c({},[...Rt,...je,...wt,...Se]);let d=Object.seal(Dt(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),se=null,ve=null,Ke=!0,Oe=!0,$e=!1,Ze=!0,V=!1,H=!1,Ie=!1,Me=!1,K=!1,_e=!1,Ae=!1,Qe=!0,Je=!1;const Mt="user-content-";let ke=!0,le=!1,$={},Z=null;const et=c({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let tt=null;const nt=c({},["audio","video","img","source","image","track"]);let Pe=null;const ot=c({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ye="http://www.w3.org/1998/Math/MathML",Ne="http://www.w3.org/2000/svg",M="http://www.w3.org/1999/xhtml";let Q=M,Ue=!1,Fe=null;const kt=c({},[ye,Ne,M],Be);let ce=null;const Pt=["application/xhtml+xml","text/html"],Ut="text/html";let _=null,J=null;const Ft=u.createElement("form"),at=function(e){return e instanceof RegExp||e instanceof Function},He=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(J&&J===e)){if((!e||typeof e!="object")&&(e={}),e=W(e),ce=Pt.indexOf(e.PARSER_MEDIA_TYPE)===-1?Ut:e.PARSER_MEDIA_TYPE,_=ce==="application/xhtml+xml"?Be:Re,T=D(e,"ALLOWED_TAGS")?c({},e.ALLOWED_TAGS,_):Ee,g=D(e,"ALLOWED_ATTR")?c({},e.ALLOWED_ATTR,_):Ve,Fe=D(e,"ALLOWED_NAMESPACES")?c({},e.ALLOWED_NAMESPACES,Be):kt,Pe=D(e,"ADD_URI_SAFE_ATTR")?c(W(ot),e.ADD_URI_SAFE_ATTR,_):ot,tt=D(e,"ADD_DATA_URI_TAGS")?c(W(nt),e.ADD_DATA_URI_TAGS,_):nt,Z=D(e,"FORBID_CONTENTS")?c({},e.FORBID_CONTENTS,_):et,se=D(e,"FORBID_TAGS")?c({},e.FORBID_TAGS,_):{},ve=D(e,"FORBID_ATTR")?c({},e.FORBID_ATTR,_):{},$=D(e,"USE_PROFILES")?e.USE_PROFILES:!1,Ke=e.ALLOW_ARIA_ATTR!==!1,Oe=e.ALLOW_DATA_ATTR!==!1,$e=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Ze=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,V=e.SAFE_FOR_TEMPLATES||!1,H=e.WHOLE_DOCUMENT||!1,K=e.RETURN_DOM||!1,_e=e.RETURN_DOM_FRAGMENT||!1,Ae=e.RETURN_TRUSTED_TYPE||!1,Me=e.FORCE_BODY||!1,Qe=e.SANITIZE_DOM!==!1,Je=e.SANITIZE_NAMED_PROPS||!1,ke=e.KEEP_CONTENT!==!1,le=e.IN_PLACE||!1,Te=e.ALLOWED_URI_REGEXP||vt,Q=e.NAMESPACE||M,d=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&at(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(d.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&at(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(d.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(d.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),V&&(Oe=!1),_e&&(K=!0),$&&(T=c({},St),g=[],$.html===!0&&(c(T,bt),c(g,Rt)),$.svg===!0&&(c(T,We),c(g,je),c(g,Se)),$.svgFilters===!0&&(c(T,Ge),c(g,je),c(g,Se)),$.mathMl===!0&&(c(T,Ye),c(g,wt),c(g,Se))),e.ADD_TAGS&&(T===Ee&&(T=W(T)),c(T,e.ADD_TAGS,_)),e.ADD_ATTR&&(g===Ve&&(g=W(g)),c(g,e.ADD_ATTR,_)),e.ADD_URI_SAFE_ATTR&&c(Pe,e.ADD_URI_SAFE_ATTR,_),e.FORBID_CONTENTS&&(Z===et&&(Z=W(Z)),c(Z,e.FORBID_CONTENTS,_)),ke&&(T["#text"]=!0),H&&c(T,["html","head","body"]),T.table&&(c(T,["tbody"]),delete se.tbody),e.TRUSTED_TYPES_POLICY){if(typeof e.TRUSTED_TYPES_POLICY.createHTML!="function")throw de('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof e.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw de('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');E=e.TRUSTED_TYPES_POLICY,F=E.createHTML("")}else E===void 0&&(E=Rn(j,h)),E!==null&&typeof F=="string"&&(F=E.createHTML(""));N&&N(e),J=e}},it=c({},["mi","mo","mn","ms","mtext"]),rt=c({},["foreignobject","desc","title","annotation-xml"]),Ht=c({},["title","style","font","a","script"]),st=c({},[...We,...Ge,...hn]),lt=c({},[...Ye,...Tn]),zt=function(e){let t=q(e);(!t||!t.tagName)&&(t={namespaceURI:Q,tagName:"template"});const n=Re(e.tagName),f=Re(t.tagName);return Fe[e.namespaceURI]?e.namespaceURI===Ne?t.namespaceURI===M?n==="svg":t.namespaceURI===ye?n==="svg"&&(f==="annotation-xml"||it[f]):Boolean(st[n]):e.namespaceURI===ye?t.namespaceURI===M?n==="math":t.namespaceURI===Ne?n==="math"&&rt[f]:Boolean(lt[n]):e.namespaceURI===M?t.namespaceURI===Ne&&!rt[f]||t.namespaceURI===ye&&!it[f]?!1:!lt[n]&&(Ht[n]||!st[n]):!!(ce==="application/xhtml+xml"&&Fe[e.namespaceURI]):!1},z=function(e){me(o.removed,{element:e});try{e.parentNode.removeChild(e)}catch{e.remove()}},ze=function(e,t){try{me(o.removed,{attribute:t.getAttributeNode(e),from:t})}catch{me(o.removed,{attribute:null,from:t})}if(t.removeAttribute(e),e==="is"&&!g[e])if(K||_e)try{z(t)}catch{}else try{t.setAttribute(e,"")}catch{}},ct=function(e){let t=null,n=null;if(Me)e="<remove></remove>"+e;else{const y=mn(e,/^[\r\n\t ]+/);n=y&&y[0]}ce==="application/xhtml+xml"&&Q===M&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const f=E?E.createHTML(e):e;if(Q===M)try{t=new te().parseFromString(f,ce)}catch{}if(!t||!t.documentElement){t=oe.createDocument(Q,"template",null);try{t.documentElement.innerHTML=Ue?F:f}catch{}}const A=t.body||t.documentElement;return e&&n&&A.insertBefore(u.createTextNode(n),A.childNodes[0]||null),Q===M?De.call(t,H?"html":"body")[0]:H?t.documentElement:A},ut=function(e){return Le.call(e.ownerDocument||e,e,G.SHOW_ELEMENT|G.SHOW_COMMENT|G.SHOW_TEXT,null)},Bt=function(e){return e instanceof pe&&(typeof e.nodeName!="string"||typeof e.textContent!="string"||typeof e.removeChild!="function"||!(e.attributes instanceof Y)||typeof e.removeAttribute!="function"||typeof e.setAttribute!="function"||typeof e.namespaceURI!="string"||typeof e.insertBefore!="function"||typeof e.hasChildNodes!="function")},mt=function(e){return typeof U=="function"&&e instanceof U},k=function(e,t,n){!w[e]||xe(w[e],f=>{f.call(o,t,n,J)})},ft=function(e){let t=null;if(k("beforeSanitizeElements",e,null),Bt(e))return z(e),!0;const n=_(e.nodeName);if(k("uponSanitizeElement",e,{tagName:n,allowedTags:T}),e.hasChildNodes()&&!mt(e.firstElementChild)&&S(/<[/\w]/g,e.innerHTML)&&S(/<[/\w]/g,e.textContent))return z(e),!0;if(!T[n]||se[n]){if(!se[n]&&pt(n)&&(d.tagNameCheck instanceof RegExp&&S(d.tagNameCheck,n)||d.tagNameCheck instanceof Function&&d.tagNameCheck(n)))return!1;if(ke&&!Z[n]){const f=q(e)||e.parentNode,A=ne(e)||e.childNodes;if(A&&f){const y=A.length;for(let x=y-1;x>=0;--x)f.insertBefore(we(A[x],!0),ge(e))}}return z(e),!0}return e instanceof ee&&!zt(e)||(n==="noscript"||n==="noembed"||n==="noframes")&&S(/<\/no(script|embed|frames)/i,e.innerHTML)?(z(e),!0):(V&&e.nodeType===3&&(t=e.textContent,xe([ie,X,m],f=>{t=fe(t,f," ")}),e.textContent!==t&&(me(o.removed,{element:e.cloneNode()}),e.textContent=t)),k("afterSanitizeElements",e,null),!1)},dt=function(e,t,n){if(Qe&&(t==="id"||t==="name")&&(n in u||n in Ft))return!1;if(!(Oe&&!ve[t]&&S(O,t))){if(!(Ke&&S(I,t))){if(!g[t]||ve[t]){if(!(pt(e)&&(d.tagNameCheck instanceof RegExp&&S(d.tagNameCheck,e)||d.tagNameCheck instanceof Function&&d.tagNameCheck(e))&&(d.attributeNameCheck instanceof RegExp&&S(d.attributeNameCheck,t)||d.attributeNameCheck instanceof Function&&d.attributeNameCheck(t))||t==="is"&&d.allowCustomizedBuiltInElements&&(d.tagNameCheck instanceof RegExp&&S(d.tagNameCheck,n)||d.tagNameCheck instanceof Function&&d.tagNameCheck(n))))return!1}else if(!Pe[t]){if(!S(Te,fe(n,re,""))){if(!((t==="src"||t==="xlink:href"||t==="href")&&e!=="script"&&fn(n,"data:")===0&&tt[e])){if(!($e&&!S(he,fe(n,re,"")))){if(n)return!1}}}}}}return!0},pt=function(e){return e!=="annotation-xml"&&e.indexOf("-")>0},gt=function(e){k("beforeSanitizeAttributes",e,null);const{attributes:t}=e;if(!t)return;const n={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:g};let f=t.length;for(;f--;){const A=t[f],{name:y,namespaceURI:x,value:B}=A,ue=_(y);let b=y==="value"?B:dn(B);if(n.attrName=ue,n.attrValue=b,n.keepAttr=!0,n.forceKeepAttr=void 0,k("uponSanitizeAttribute",e,n),b=n.attrValue,n.forceKeepAttr||(ze(y,e),!n.keepAttr))continue;if(!Ze&&S(/\/>/i,b)){ze(y,e);continue}V&&xe([ie,X,m],Tt=>{b=fe(b,Tt," ")});const ht=_(e.nodeName);if(!!dt(ht,ue,b)){if(Je&&(ue==="id"||ue==="name")&&(ze(y,e),b=Mt+b),E&&typeof j=="object"&&typeof j.getAttributeType=="function"&&!x)switch(j.getAttributeType(ht,ue)){case"TrustedHTML":{b=E.createHTML(b);break}case"TrustedScriptURL":{b=E.createScriptURL(b);break}}try{x?e.setAttributeNS(x,y,b):e.setAttribute(y,b),xt(o.removed)}catch{}}}k("afterSanitizeAttributes",e,null)},Wt=function a(e){let t=null;const n=ut(e);for(k("beforeSanitizeShadowDOM",e,null);t=n.nextNode();)k("uponSanitizeShadowNode",t,null),!ft(t)&&(t.content instanceof L&&a(t.content),gt(t));k("afterSanitizeShadowDOM",e,null)};return o.sanitize=function(a){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=null,n=null,f=null,A=null;if(Ue=!a,Ue&&(a="<!-->"),typeof a!="string"&&!mt(a))if(typeof a.toString=="function"){if(a=a.toString(),typeof a!="string")throw de("dirty is not a string, aborting")}else throw de("toString is not a function");if(!o.isSupported)return a;if(Ie||He(e),o.removed=[],typeof a=="string"&&(le=!1),le){if(a.nodeName){const B=_(a.nodeName);if(!T[B]||se[B])throw de("root node is forbidden and cannot be sanitized in-place")}}else if(a instanceof U)t=ct("<!---->"),n=t.ownerDocument.importNode(a,!0),n.nodeType===1&&n.nodeName==="BODY"||n.nodeName==="HTML"?t=n:t.appendChild(n);else{if(!K&&!V&&!H&&a.indexOf("<")===-1)return E&&Ae?E.createHTML(a):a;if(t=ct(a),!t)return K?null:Ae?F:""}t&&Me&&z(t.firstChild);const y=ut(le?a:t);for(;f=y.nextNode();)ft(f)||(f.content instanceof L&&Wt(f.content),gt(f));if(le)return a;if(K){if(_e)for(A=Ce.call(t.ownerDocument);t.firstChild;)A.appendChild(t.firstChild);else A=t;return(g.shadowroot||g.shadowrootmode)&&(A=ae.call(r,A,!0)),A}let x=H?t.outerHTML:t.innerHTML;return H&&T["!doctype"]&&t.ownerDocument&&t.ownerDocument.doctype&&t.ownerDocument.doctype.name&&S(Ot,t.ownerDocument.doctype.name)&&(x="<!DOCTYPE "+t.ownerDocument.doctype.name+`>
`+x),V&&xe([ie,X,m],B=>{x=fe(x,B," ")}),E&&Ae?E.createHTML(x):x},o.setConfig=function(){let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};He(a),Ie=!0},o.clearConfig=function(){J=null,Ie=!1},o.isValidAttribute=function(a,e,t){J||He({});const n=_(a),f=_(e);return dt(n,f,t)},o.addHook=function(a,e){typeof e=="function"&&(w[a]=w[a]||[],me(w[a],e))},o.removeHook=function(a){if(w[a])return xt(w[a])},o.removeHooks=function(a){w[a]&&(w[a]=[])},o.removeAllHooks=function(){w={}},o}var wn=It();function In(){const{isAuthenticated:l}=P.exports.useContext(Gt),o=Yt(),u=jt(),[r,h]=P.exports.useState(1),{nameId:L}=qt(),C=Xt(L),U=P.exports.useRef(null),[ee,G]=P.exports.useState(""),[Y,pe]=P.exports.useState([0,5]),{data:te,isPending:j}=Et({queryKey:["product",C],queryFn:()=>yt.getProductDetail(C)}),i=te==null?void 0:te.data.data,we=P.exports.useMemo(()=>i?i.images.slice(...Y):[],[i,Y]),ge={page:1,limit:20,category:i==null?void 0:i.category._id,exclude:C},{data:ne}=Et({queryKey:["products",ge],queryFn:()=>yt.getProducts(ge),enabled:Boolean(i),staleTime:3*60*1e3}),q=ne==null?void 0:ne.data.data,E=Vt({mutationFn:nn.addToCart});P.exports.useEffect(()=>{i&&i.images.length>0&&G(i.images[0])},[i]),P.exports.useEffect(()=>()=>{history.replaceState(null,"")},[]),P.exports.useEffect(()=>{h(1)},[C]);const F=m=>{G(m)},oe=()=>{i&&Y[1]<(i==null?void 0:i.images.length)&&pe(m=>[m[0]+1,m[1]+1])},Le=()=>{Y[0]>0&&pe(m=>[m[0]-1,m[1]-1])},Ce=m=>{const O=m.currentTarget.getBoundingClientRect(),I=U.current,{naturalHeight:he,naturalWidth:re}=I,Te=m.pageX-(O.x+window.scrollX),Ee=(m.pageY-(O.y+window.scrollY))*(1-he/O.height),g=Te*(1-re/O.width);I.style.width=re+"px",I.style.height=he+"px",I.style.maxWidth="unset",I.style.top=Ee+"px",I.style.left=g+"px"},De=()=>{var m;(m=U.current)==null||m.removeAttribute("style")},ae=m=>{h(m)},w=()=>{if(!l)return X(i);E.mutate({buy_count:Number(r),product_id:i==null?void 0:i._id},{onSuccess:m=>{Qt.success(m.data.message,{position:"top-center",autoClose:1e3}),o.invalidateQueries({queryKey:["purchases",{status:Jt.inCart}]})}})},ie=async()=>{if(!l)return X(i);const O=(await E.mutateAsync({buy_count:Number(r),product_id:i==null?void 0:i._id})).data.data;u(At.cart,{state:{purchaseId:O._id}})},X=m=>(u({pathname:At.login,search:en({next:tn({name:m.name,id:m._id})}).toString()}),u);return i?p("div",{className:"bg-gray-200 py-6",children:[s("div",{className:"container",children:s("div",{className:"bg-white p-4 shadow",children:p("div",{className:"grid grid-cols-12 gap-9",children:[p("div",{className:"col-span-5",children:[s("div",{className:"relative w-full cursor-zoom-in overflow-hidden pt-[100%] shadow",onMouseMove:Ce,onMouseLeave:De,children:s("img",{src:ee,alt:i.name,className:"absolute top-0 left-0 h-full w-full bg-white object-cover",ref:U})}),p("div",{className:"relative mt-4 grid grid-cols-5 gap-1",children:[s("button",{className:"absolute left-0 top-1/2 z-10 h-9 w-5 -translate-y-1/2 bg-black/20 text-white",onClick:Le,children:s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"h-5 w-5",children:s("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5L8.25 12l7.5-7.5"})})}),we.map((m,O)=>{const I=m===ee;return p("div",{className:"relative w-full pt-[100%]",onMouseEnter:()=>F(m),children:[s("img",{src:m,alt:i.name,className:"absolute top-0 left-0 h-full w-full cursor-pointer bg-white object-cover"}),I&&s("div",{className:"absolute inset-0 border-2 border-orange"})]},`${m}${O}`)}),s("button",{className:"absolute right-0 top-1/2 z-10 h-9 w-5 -translate-y-1/2 bg-black/20 text-white",onClick:oe,children:s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"h-5 w-5",children:s("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})})})]})]}),p("div",{className:"col-span-7",children:[s("h1",{className:"text-xl font-medium uppercase",children:i.name}),p("div",{className:"mt-8 flex items-center",children:[p("div",{className:"flex items-center",children:[s("span",{className:"mr-1 border-b border-b-orange text-orange",children:i.rating}),s(on,{rating:i.rating,activeClassname:"fill-orange text-orange h-4 w-4",nonActiveClassname:"fill-gray-300 text-gray-300 h-4 w-4"})]}),s("div",{className:"mx-4 h-4 w-[1px] bg-gray-300"}),p("div",{children:[s("span",{children:$t(i.sold)}),s("span",{className:"ml-1 text-gray-500",children:"\u0110\xE3 b\xE1n"})]})]}),p("div",{className:"mt-8 flex items-center bg-gray-50 px-5 py-4",children:[p("div",{className:"text-gray-500 line-through",children:["\u20AB",_t(i.price_before_discount)]}),p("div",{className:"ml-3 text-3xl font-medium text-orange",children:["\u20AB",_t(i.price)]}),p("div",{className:"ml-4 rounded-sm bg-orange px-1 py-[2px] text-xs font-semibold uppercase text-white",children:[Zt(i.price_before_discount,i.price)," gi\u1EA3m"]})]}),p("div",{className:"mt-8 flex items-center",children:[s("div",{className:"capitalize text-gray-500",children:"S\u1ED1 l\u01B0\u1EE3ng"}),s(rn,{value:r,max:i.quantity,onType:ae,onIncrease:ae,onDecrease:ae}),p("div",{className:"ml-6 text-sm text-gray-500",children:[i.quantity," s\u1EA3n ph\u1EA9m c\xF3 s\u1EB5n"]})]}),p("div",{className:"mt-8 flex items-center",children:[p("button",{className:"flex h-12 items-center justify-center rounded-sm border border-orange bg-orange/10 px-5 capitalize text-orange shadow-sm hover:bg-orange/5",onClick:w,children:[s("svg",{enableBackground:"new 0 0 15 15",viewBox:"0 0 15 15",x:0,y:0,className:"mr-[10px] h-5 w-5 fill-current stroke-orange text-orange",children:p("g",{children:[p("g",{children:[s("polyline",{fill:"none",points:".5 .5 2.7 .5 5.2 11 12.4 11 14.5 3.5 3.7 3.5",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10}),s("circle",{cx:6,cy:"13.5",r:1,stroke:"none"}),s("circle",{cx:"11.5",cy:"13.5",r:1,stroke:"none"})]}),s("line",{fill:"none",strokeLinecap:"round",strokeMiterlimit:10,x1:"7.5",x2:"10.5",y1:7,y2:7}),s("line",{fill:"none",strokeLinecap:"round",strokeMiterlimit:10,x1:9,x2:9,y1:"8.5",y2:"5.5"})]})}),"Th\xEAm v\xE0o gi\u1ECF h\xE0ng"]}),s("button",{className:"fkex ml-4 h-12 min-w-[5rem] items-center justify-center rounded-sm bg-orange px-5 capitalize text-white shadow-sm outline-none hover:bg-orange/90",onClick:ie,children:"Mua ngay"})]})]})]})})}),s("div",{className:"mt-8",children:s("div",{className:"container",children:p("div",{className:" bg-white p-4 shadow",children:[s("div",{className:"rounded bg-gray-50 p-4 text-lg capitalize text-slate-700",children:"M\xF4 t\u1EA3 s\u1EA3n ph\u1EA9m"}),s("div",{className:"mx-4 mt-12 mb-4 text-sm leading-loose",children:s("div",{dangerouslySetInnerHTML:{__html:wn.sanitize(i.description)}})})]})})}),s("div",{className:"mt-8",children:p("div",{className:"container",children:[s("div",{className:"uppercase text-gray-400",children:"C\xD3 TH\u1EC2 B\u1EA0N C\u0168NG TH\xCDCH"}),q&&s("div",{className:"mt-6 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6",children:q.products.map(m=>s("div",{className:"col-span-1",children:s(an,{product:m})},m._id))})]})})]}):j?s(Kt,{}):s(sn,{})}export{In as default};