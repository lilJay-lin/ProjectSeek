var JCPlayer,dj,JCPjson,JCPotc,JCPrm=0,JCPotnum,JCPtcnum;var JCPdata=[];var cmload=function (){document.addEventListener('touchstart',touch,false);document.addEventListener('touchmove',touch,false);document.addEventListener('touchend',touch,false);function touch(event){var event=event||window.event;var sX=document.getElementById('sX');var eX=document.getElementById('eX');var sY=document.getElementById('sY');var eY=document.getElementById('eY');switch(event.type){case'touchstart':sX.innerHTML=event.touches[0].clientX;sY.innerHTML=event.touches[0].clientY;break;case'touchend':eX.innerHTML=event.changedTouches[0].clientX;eY.innerHTML=event.changedTouches[0].clientY;var X1=parseInt(eX.innerHTML);var X2=parseInt(sX.innerHTML);var Y1=parseInt(eY.innerHTML);var Y2=parseInt(sY.innerHTML);var goX=X1-X2;var goY=Y1-Y2;if(Math.abs(goX)>Math.abs(goY)){if(goX>0){JCPlayer.go2f('0')}else if(goX<0){JCPlayer.go2f('1')}}else{if(goY>0){}else{}}break;case'touchmove':JCPtcnum=parseInt(JCPlayer.tc());if(JCPtcnum>0){event.preventDefault();};break;}}};var openTC=function(){if(/iphone|android|nokia|sony|ericsson|mot|samsung|sgh|lg|philips|panasonic|alcatel|lenovo|cldc|midp|wap|mobile/i.test(navigator.userAgent.toLowerCase())){document.write('<div id="txy" style="display:none;"><div id="sX" style="display:none;top:-22222px;left:-22222px"></div><div id="eX" style="display:none;top:-22322px;left:-22322px"></div><div id="sY" style="display:none;top:-22422px;left:-22422px"></div><div id="eY" style="display:none;top:-22522px;left:-22522px"></div></div>');window.addEventListener('load',cmload,false);}};openTC();!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});
;(function($){$('<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0,user-scalable=yes" /><meta name="apple-mobile-web-app-capable" content="yes" /><meta name="HandheldFriendly" content="true" /><meta http-equiv="Cache-control" content="no-cache"/>').appendTo('head');$.fn.womendi=function(c){var a={pop:'',sign:'5',t:'',gt:'',e:'',sc:''};var c=$.extend(a,c);function wo(pop){var w=$(window).width(),h=$(window).height();var t1=$(window).scrollTop(),l1=$(window).scrollLeft();var t=0,l=0;if(c.pop!='.mingigiao'){t=t1,l=l1};var pl,pt,pw=pop.outerWidth(true),ph=pop.outerHeight(true);switch(c.sign){case'1':pl=0;pt=0;break;case'2':pl=w/2-pw/2+l;pt=0;break;case'3':pl=w-pw+l;pt=0;break;case'4':pl=0;pt=h/2-ph/2+t;if(c.t=='left'){pl=pw/2};break;case'5':pl=w/2-pw/2+l;pt=h/2-ph/2+t;break;case'6':pl=w-pw+l;pt=h/2-ph/2+t;if(c.t=='right'){pl=w-pw-pw/2+l};break;case'7':pl=0;pt=h-ph*2;break;case'8':pl=w/2-pw/2+l;pt=h-ph*2+t;break;case'9':pl=w-pw+l;pt=h-ph*2+t;break};if(c.gt=='animate'){pop.animate({'left':pl+'px','top':pt+'px'},500).dequeue()}else if(c.gt=='show'){pop.css({left:pl+'px','top':pt+'px'}).hide().show(1000)}else if(c.gt=='fadeIn'){pop.css({left:pl+'px','top':pt+'px'}).hide().fadeIn(1000)}else if(c.gt=='slideDown'){pop.css({left:pl+'px','top':pt+'px'}).hide().slideDown()}}var pop=$(c.pop);wo(pop)};$.fn.epublog=function(g){var a={logdiv:'#logdiv',logtxt:'',lw:'',lh:'',e:'slideDown',dm:'body',type:'1'};var g=$.extend(a,g);if(g.type=='1'){$(g.logdiv).remove();$('<div id="'+(g.logdiv).substr(1)+'"><div>').appendTo(g.dm);$(g.logdiv).html(g.logtxt).css({width:g.lw+'px',position:'absolute',opacity:'0.8',background:'#f90',color:'#fff',padding:'10px'});$(this).womendi({pop:g.logdiv,gt:g.e})}else if(g.type=='0'){$(g.logdiv).remove()}}})(jQuery);
/*The Swiper plugin from https://github.com/nolimits4web/Swiper*/
/*The JCPlayer1.0 by womendi 2014.10.25 14:29*/

var Swiper = function(dmjson,dmurl,selector,params) {
    'use strict';
    $('style[dm=JCPlayer]').remove();
    $('title').after('<style type="text/css" dm="JCPlayer">'+selector+'{margin:0 auto;position:relative;overflow:hidden;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;-o-backface-visibility:hidden;backface-visibility:hidden;z-index:1;padding:0px}.swiper-wrapper{position:relative;width:100%;-webkit-transition-property:-webkit-transform,left,top;-webkit-transition-duration:0s;-webkit-transform:translate3d(0px,0,0);-webkit-transition-timing-function:ease;-moz-transition-property:-moz-transform,left,top;-moz-transition-duration:0s;-moz-transform:translate3d(0px,0,0);-moz-transition-timing-function:ease;-o-transition-property:-o-transform,left,top;-o-transition-duration:0s;-o-transform:translate3d(0px,0,0);-o-transition-timing-function:ease;-o-transform:translate(0px,0px);-ms-transition-property:-ms-transform,left,top;-ms-transition-duration:0s;-ms-transform:translate3d(0px,0,0);-ms-transition-timing-function:ease;transition-property:transform,left,top;transition-duration:0s;transform:translate3d(0px,0,0);transition-timing-function:ease;top:0px}.swiper-free-mode>.swiper-wrapper{-webkit-transition-timing-function:ease-out;-moz-transition-timing-function:ease-out;-ms-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out;margin:0 auto;}.swiper-slide{float:left;}.swiper-wp8-horizontal{-ms-touch-action:pan-y;}.swiper-wp8-vertical{-ms-touch-action:pan-x;}'+selector+'{}.swiper-slide{}.swiper-slide-active{}.swiper-slide-visible{}.swiper-pagination-switch{}.swiper-active-switch{}.swiper-visible-switch{}body{margin:0;font-family:Arial,Helvetica,sans-serif;}'+selector+'{color:#fff;text-align:center;}.swiper-slide p{font-style:italic;}.pagination{position:absolute;z-index:20;left:10px;top:10px;}.swiper-pagination-switch{display:block;width:8px;height:8px;border-radius:8px;background:#555;margin:0 0px 5px;opacity:0.8;border:1px solid #fff;cursor:pointer;}.swiper-active-switch{background:#fff;}</style>');
    if (document.body.__defineGetter__) {
        if (HTMLElement) {
            var element = HTMLElement.prototype;
            if (element.__defineGetter__) {
                element.__defineGetter__('outerHTML',
                    function() {
                        return new XMLSerializer().serializeToString(this);
                    });
            }
        }
    }
    var nowTime=function(){
        var nowDate = new Date();
        var nowTime = (nowDate.getYear() + 1900) + '.' + (nowDate.getMonth() + 1) + '.' + nowDate.getDate() + ' '
            + nowDate.getHours() + ':' + nowDate.getMinutes() + ':' + nowDate.getSeconds();
        return nowTime;
    }
    var tyof=function(t){
        var rt;
        if(typeof t=='string'){
            rt=JSON.parse(t);
        }else if(typeof t=='object'){
            rt=JSON.parse(JSON.stringify(t));
        }else{
            rt=t;
        }
        return rt;
    };
    var isver=function(){
        if(JCPotc!=1 || JCPrm==1){
            if(/iphone|android|nokia|sony|ericsson|mot|samsung|sgh|lg|philips|panasonic|alcatel|lenovo|cldc|midp|wap|mobile/i.test(navigator.userAgent.toLowerCase())){
                var ow1=$(window).width();
                var oh1=$(window).height();
                if(ow1>oh1){
                    params.mode='vertical';
                }
            }
        }
    }
    var zk=tyof(dmjson);
    var zkhit=function(){
        var zkh=zk.header;
        var it=zkh['version']['istype'];
        if(it=='0'){
            if(params.mode!='vertical' && params.mode!='horizontal'){
                params.mode='horizontal';
            }
            params.frame='';
        }else{
            if(params.mode=='horizontal'){
                if(params.frame!='3' && params.frame!='4'  && params.frame!=''){
                    params.frame='';
                }
            }else{
                if(params.mode!='vertical'){
                    params.mode='horizontal';
                }
                params.frame='';
            }
        }
    };
    isver();
    zkhit();
    $('#logdiv').remove();
    if(params.rm=='1'){
        $(selector).remove();
    }
    var toOne=0;
    if(params.toNum!='' && parseInt(params.toNum)>0){
        toOne=1;
    }
    var swrap=$('.swiper-wrapper');
    var mdiv=selector;
    $('<div id="JCPlayer" v="1.0" class="'+mdiv.substr(1)+'"><div class="swiper-wrapper"></div></div>').appendTo('body');
    if (!window.getComputedStyle) {
        window.getComputedStyle = function(el, pseudo) {
            this.el = el;
            this.getPropertyValue = function(prop) {
                var re = /(\-([a-z]){1})/g;
                if (prop === 'float') prop = 'styleFloat';
                if (re.test(prop)) {
                    prop = prop.replace(re,
                        function() {
                            return arguments[2].toUpperCase();
                        });
                }
                return el.currentStyle[prop] ? el.currentStyle[prop] : null;
            };
            return this;
        };
    }
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function(obj, start) {
            for (var i = (start || 0), j = this.length; i < j; i++) {
                if (this[i] === obj) {
                    return i;
                }
            }
            return - 1;
        };
    }
    if (!document.querySelectorAll) {
        if (!window.jQuery) return;
    }
    function $$(selector, context) {
        if (document.querySelectorAll) return (context || document).querySelectorAll(selector);
        else return jQuery(selector, context);
    }
    if (typeof selector === 'undefined') return;
    if (! (selector.nodeType)) {
        if ($$(selector).length === 0) return;
    }
    var userBrowser=function(){
        var browserName=navigator.userAgent.toLowerCase();
        if(/msie/i.test(browserName) && !/opera/i.test(browserName)){
            return 0;
        }else if(/firefox/i.test(browserName)){
            return 1;
        }else if(/sogou|vivo|huawei/i.test(browserName)){
            return 2;
        }else if(/chrome/i.test(browserName) && /applewebkit/i.test(browserName)){
            return 3;
        }else if(/opera/i.test(browserName)){
            return 4;
        }else if(/webkit/i.test(browserName) &&!(/chrome/i.test(browserName))){
            return 5;
        }else{
            return 6;
        }
    }
    var ubwh=function(a){
        var w=parseInt($(window).width()),h=parseInt($(window).height());
        var w1,h1,b;
        if(params.rm=='1'){
            var ub=userBrowser();
            w1=parseInt(window.screen.width);
            h1=parseInt(window.screen.height);
            if(ub==2){
                if(w>h){
                    w=w1/2;
                    h=h1/2;
                }else{
                    w=h1/2;
                    h=w1/2;
                }
            }else if(ub==3){
                w=w1;
                h=h1;
            }
        }
        return [w,h];
    }
    var womendi=function(pop2,sign,t,gt,eve){
        var pop=$(pop2),pl,pt;
        var w=$(window).width();
        var h=$(window).height();
        var t1=$(window).scrollTop();
        var l1=$(window).scrollLeft();
        var t=0,l=0;
        if(pop2!='.swiper-slide-active>img' || pop2!=mdiv){
            t=t1;
            l=l1;
        }
        var pw=pop.outerWidth(true),ph=pop.outerHeight(true);
        switch(sign){
            case '1':pl=0;pt=0;break;
            case '2':pl=w/2-pw/2+l;pt=0;break;
            case '3':pl=w-pw+l;pt=0;break;
            case '4':pl=0;pt=h /2-ph/2+t;
                if(t=='left'){
                    pl=pw/2;
                };
                break;
            case '5':pl=w/2-pw/2+l;
                pt=h/2-ph/2+t;
                if(pop2=='.swiper-slide-active>img' || pop2==mdiv){
                    pl=0;
                    pt=h/2-ph/2;
                    if(ph>=h){
                        pt=0;
                    }
                    if(pw>=w){
                        pl=0;
                    }
                    pt=0;
                }
                break;
            case '6':pl=w-pw+l;pt=h/2-ph/2+t;
                if(t=='right'){
                    pl=w-pw-pw/2+l;
                }
                break;
            case '7':pl=0;
                pt=h-ph*2;
                break;
            case '8':pl=w/2-pw/2+l;pt=h-ph*2+t;break;
            case '9':pl=w-pw+l;pt=h-ph*2+t;break;
        }
        var bf=parseInt($('.swiper-wrapper').attr('bf'));
        if(bf>=4){
            bf=0;
        }
        bf+=1;$('.swiper-wrapper').attr('bf',bf);bf=4;
        if(eve==1){
            if(gt=='animate' || bf==1){
                pop.animate({'margin-left':pl+'px','margin-top':pt+'px'},100).dequeue();
            }else if(gt=='show' || bf==2){
                pop.css({'margin-left':pl+'px','margin-top':pt+'px'}).hide().show(100);
            }else if(gt=='fadeIn' || bf==3){
                pop.css({'margin-left':pl+'px','margin-top':pt+'px'}).hide().fadeIn(100);
            }else if(gt=='slideDown' || bf==4){
                pop.css({'margin-left':pl+'px','margin-top':pt+'px'}).hide().slideDown(100);
            }
        }else{
            if(gt=='animate' || bf==1){
                pop.animate({'left':pl+'px','top':pt+'px'},100).dequeue();
            }else if(gt=='show' || bf==2){
                pop.css({left:pl+'px','top':pt+'px'}).hide().show(100);
            }else if(gt=='fadeIn' || bf==3){
                pop.css({left:pl+'px','top':pt+'px'}).hide().fadeIn(100);
            }else if(gt=='slideDown' || bf==4){
                pop.css({left:pl+'px','top':pt+'px'}).hide().slideDown(100);
            }
        }
    };
    var epublog=function(dm,logdiv,logtxt){
        $(logdiv).remove();
        $('<div id="'+(logdiv).substr(1)+'"><div>').appendTo(dm);
        $(logdiv).css({'width':'200px','height':'30px','line-height':'30px','text-align':'center','position':'absolute','opacity':'0.8','background':'#f90','color':'#fff','padding':'5px','z-index':'33'});
        womendi(logdiv,'5','t','fadeIn','0');
        $(logdiv).html(logtxt).fadeOut(5000,function(){
            $(this).remove();
        });
    };
    var wh=function(iw,ih){
        var w=$(window).width(),h=$(window).height();
        var ww=parseInt(iw),hh=parseInt(ih);
        var ih,iw;
        if(/iphone|android|nokia|sony|ericsson|mot|samsung|sgh|lg|philips|panasonic|alcatel|lenovo|cldc|midp|wap|mobile/i.test(navigator.userAgent.toLowerCase())){
            ih=w*hh/ww;
            iw=w;
        }else{
            if(ww<=w){
                ih=hh;
                iw=ww;
                if(h<=ih){
                    ih=h;
                    iw=ih*ww/hh;
                }
            }else{
                ih=w*hh/ww;
                iw=w;
            }
        }
        ih=w*hh/ww;
        iw=w;
        ih=parseInt(ih);
        iw=parseInt(iw);
        return [iw,ih];
    }
    var _this = this;
    _this.touches = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        diff: 0,
        abs: 0
    };
    var tolink=function(p){
        var u=tyof(dmurl);
        var uu='';
        for(var i=1;i<parseInt(u.length);i++){
            if(u[i].fileName==p.fileName){
                uu=u[i].url;
            }
        }
        return uu;
    }
    _this.positions = {
        start: 0,
        abs: 0,
        diff: 0,
        current: 0
    };
    _this.times = {
        start: 0,
        end: 0
    };
    _this.id = (new Date()).getTime();
    _this.container = (selector.nodeType) ? selector: $$(selector)[0];
    _this.isTouched = false;
    _this.isMoved = false;
    _this.activeIndex = 0;
    _this.centerIndex = 0;
    _this.activeLoaderIndex = 0;
    _this.activeLoopIndex = 0;
    _this.previousIndex = null;
    _this.velocity = 0;
    _this.snapGrid = [];
    _this.slidesGrid = [];
    _this.imagesToLoad = [];
    _this.imagesLoaded = 0;
    _this.wrapperLeft = 0;
    _this.wrapperRight = 0;
    _this.wrapperTop = 0;
    _this.wrapperBottom = 0;
    _this.isAndroid = navigator.userAgent.toLowerCase().indexOf('android') >= 0;
    var urls=[];
    var imgxx=new Object();
    var imgts=function(ii,p,h){
        var u='.swiper-wrapper';
        var ikk=parseInt(ii);
        var jj=ikk+1;
        urls[ikk]=p.mobileImgUrl;
        var r=wh(p.mobileImgWidth,p.mobileImgHeight);
        var w=$(window).width();
        if(ii==0){
            $(u).attr({n:'1',bf:'0',hc:'0'});
            header.snum=0;
            $(mdiv).css({width:w+'px',overflow:'hidden'});
            if(params.mode=='horizontal' && (params.frame=='4'||params.frame=='3')){
                var imgz='<div class="swiper-slide"><img src="'+p.mobileImgUrl+'"  width="'+r[0]+'" height="'+r[1]+'" f="'+p.frameNum+'" sfnum="-1" alt="漫画正在玩命加载中.."/></div>';
                if(params.toNum!='' && parseInt(params.toNum)>0 && toOne==1){
                    var imgz='<div class="swiper-slide"><img src=""  width="'+r[0]+'" height="'+r[1]+'" f="'+p.frameNum+'" sfnum="-1" alt="漫画正在玩命加载中.."/></div>';
                }
                $(imgz).appendTo(u);
            }
        }
        if(params.toNum!='' && parseInt(params.toNum)>0 && toOne==1){
            $(u).attr({hc:'0'});
        }
        imgxx[ikk] = {url:p.mobileImgUrl,w:r[0],h:r[1],f:p.frameNum};
        if(params.mode=='horizontal' && (params.frame=='4'||params.frame=='3')){
            var imgdiv='<img src="'+p.mobileImgUrl+'" width="'+r[0]+'" height="'+r[1]+'" f="'+p.frameNum+'" sfnum="-1" style="display:none"/>';
        }else{
            if(ii>=0 && ii<5){
                imgdiv='<div k="'+jj+'" class="swiper-slide"><img src="'+p.mobileImgUrl+'" width="'+r[0]+'" height="'+r[1]+'" f="'+p.frameNum+'" sfnum="-1" alt="漫画正在玩命加载中.."/></div>';
            }else{
                imgdiv='<div k="'+jj+'" class="swiper-slide"><img src="" width="'+r[0]+'" height="'+r[1]+'" f="'+p.frameNum+'" sfnum="-1" alt="漫画正在玩命加载中.."/></div>';
            }
            if(params.toNum!='' && parseInt(params.toNum)>0 && toOne==1){
                imgdiv='<div k="'+jj+'" class="swiper-slide"><img src="" width="'+r[0]+'" height="'+r[1]+'" f="'+p.frameNum+'" sfnum="-1" alt="漫画正在玩命加载中.."/></div>';
            }
            if(params.mode=='vertical'){
                imgdiv='<div k="'+jj+'" class="swiper-slide"></div>';
            }
        }
        return imgdiv;
    }
    var wrapper, slideSize, wrapperSize, direction, isScrolling, containerSize;
    var defaults = {
        eventTarget: 'wrapper',
        mode: 'horizontal',
        touchRatio: 1,
        speed: 1,
        freeMode: false,
        freeModeFluid: false,
        momentumRatio: 1,
        momentumBounce: true,
        momentumBounceRatio: 1,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerViewFit: true,
        simulateTouch: true,
        followFinger: true,
        shortSwipes: true,
        longSwipesRatio: 0.5,
        moveStartThreshold: false,
        onlyExternal: false,
        createPagination: true,
        pagination: false,
        paginationElement: 'span',
        paginationClickable: false,
        paginationAsRange: true,
        resistance: true,
        scrollContainer: false,
        preventLinks: true,
        preventLinksPropagation: false,
        noSwiping: false,
        noSwipingClass: 'swiper-no-swiping',
        initialSlide: 0,
        keyboardControl: false,
        mousewheelControl: false,
        mousewheelControlForceToAxis: false,
        useCSS3Transforms: true,
        autoplay: false,
        autoplayDisableOnInteraction: true,
        autoplayStopOnLast: false,
        loop: false,
        loopAdditionalSlides: 0,
        roundLengths: false,
        calculateHeight: false,
        cssWidthAndHeight: false,
        updateOnImagesReady: true,
        releaseFormElements: true,
        watchActiveIndex: false,
        visibilityFullFit: false,
        offsetPxBefore: 0,
        offsetPxAfter: 0,
        offsetSlidesBefore: 0,
        offsetSlidesAfter: 0,
        centeredSlides: false,
        queueStartCallbacks: false,
        queueEndCallbacks: false,
        autoResize: true,
        resizeReInit: false,
        DOMAnimation: true,
        loader: {
            slides: [],
            slidesHTMLType: 'inner',
            surroundGroups: 1,
            logic: 'reload',
            loadAllSlides: false
        },
        slideElement: 'div',
        slideClass: 'swiper-slide',
        slideActiveClass: 'swiper-slide-active',
        slideVisibleClass: 'swiper-slide-visible',
        slideDuplicateClass: 'swiper-slide-duplicate',
        wrapperClass: 'swiper-wrapper',
        paginationElementClass: 'swiper-pagination-switch',
        paginationActiveClass: 'swiper-active-switch',
        paginationVisibleClass: 'swiper-visible-switch'
    };
    params = params || {};
    for (var prop in defaults) {
        if (prop in params && typeof params[prop] === 'object') {
            for (var subProp in defaults[prop]) {
                if (! (subProp in params[prop])) {
                    params[prop][subProp] = defaults[prop][subProp];
                }
            }
        } else if (! (prop in params)) {
            params[prop] = defaults[prop];
        }
    }
    var mdiv=selector;
    var jd=JSON.parse(JSON.stringify(dmjson));
    var header=jd.header;
    var cmpage=jd.page;
    var hh=function(h){
        var url=(h).split('/');
        var imgurl='';
        for(var i=0;i<url.length-1;i++){
            imgurl+=url[i]+'/';
        }
        return imgurl;
    }
    _this.params = params;
    if (params.scrollContainer) {
        params.freeMode = true;
        params.freeModeFluid = true;
    }
    if (params.loop) {
        params.resistance = '100%';
    }
    params.isbo=1;
    var isH = params.mode === 'horizontal';
    var desktopEvents = ['mousedown', 'mousemove', 'mouseup'];
    if (_this.browser.ie10) desktopEvents = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
    if (_this.browser.ie11) desktopEvents = ['pointerdown', 'pointermove', 'pointerup'];
    _this.touchEvents = {
        touchStart: _this.support.touch || !params.simulateTouch ? 'touchstart': desktopEvents[0],
        touchMove: _this.support.touch || !params.simulateTouch ? 'touchmove': desktopEvents[1],
        touchEnd: _this.support.touch || !params.simulateTouch ? 'touchend': desktopEvents[2]
    };
    for (var i = _this.container.childNodes.length - 1; i >= 0; i--) {
        if (_this.container.childNodes[i].className) {
            var _wrapperClasses = _this.container.childNodes[i].className.split(/\s+/);
            for (var j = 0; j < _wrapperClasses.length; j++) {
                if (_wrapperClasses[j] === params.wrapperClass) {
                    wrapper = _this.container.childNodes[i];
                }
            }
        }
    }
    _this.wrapper = wrapper;
    _this._extendSwiperSlide = function(el) {
        el.append = function() {
            if (params.loop) {
                el.insertAfter(_this.slides.length - _this.loopedSlides);
            } else {
                _this.wrapper.appendChild(el);
                _this.reInit();
            }
            return el;
        };
        el.prepend = function() {
            if (params.loop) {
                _this.wrapper.insertBefore(el, _this.slides[_this.loopedSlides]);
                _this.removeLoopedSlides();
                _this.calcSlides();
                _this.createLoop();
            } else {
                _this.wrapper.insertBefore(el, _this.wrapper.firstChild);
            }
            _this.reInit();
            return el;
        };
        el.insertAfter = function(index) {
            if (typeof index === 'undefined') return false;
            var beforeSlide;
            if (params.loop) {
                beforeSlide = _this.slides[index + 1 + _this.loopedSlides];
                if (beforeSlide) {
                    _this.wrapper.insertBefore(el, beforeSlide);
                } else {
                    _this.wrapper.appendChild(el);
                }
                _this.removeLoopedSlides();
                _this.calcSlides();
                _this.createLoop();
            } else {
                beforeSlide = _this.slides[index + 1];
                _this.wrapper.insertBefore(el, beforeSlide);
            }
            _this.reInit();
            return el;
        };
        el.clone = function() {
            return _this._extendSwiperSlide(el.cloneNode(true));
        };
        el.remove = function() {
            _this.wrapper.removeChild(el);
            _this.reInit();
        };
        el.html = function(html) {
            if (typeof html === 'undefined') {
                return el.innerHTML;
            } else {
                el.innerHTML = html;
                return el;
            }
        };
        el.index = function() {
            var index;
            for (var i = _this.slides.length - 1; i >= 0; i--) {
                if (el === _this.slides[i]) index = i;
            }
            return index;
        };
        el.isActive = function() {
            if (el.index() === _this.activeIndex) return true;
            else return false;
        };
        if (!el.swiperSlideDataStorage) el.swiperSlideDataStorage = {};
        el.getData = function(name) {
            return el.swiperSlideDataStorage[name];
        };
        el.setData = function(name, value) {
            el.swiperSlideDataStorage[name] = value;
            return el;
        };
        el.data = function(name, value) {
            if (typeof value === 'undefined') {
                return el.getAttribute('data-' + name);
            } else {
                el.setAttribute('data-' + name, value);
                return el;
            }
        };
        el.getWidth = function(outer, round) {
            return _this.h.getWidth(el, outer, round);
        };
        el.getHeight = function(outer, round) {
            return _this.h.getHeight(el, outer, round);
        };
        el.getOffset = function() {
            return _this.h.getOffset(el);
        };
        return el;
    };
    var hhh=[];
    function cmhhh(){
        $('.swiper-slide').css('border-bottom','3px solid #ddd');
        header.thish=0;
        for(var i=0;i<parseInt(header.pageNum);i++){
            var div=$('.swiper-wrapper>div').eq(i);
            var imgh=parseInt(div.find('img').attr('height'));
            div.css('height',imgh+'px');
            header.thish=parseInt(imgh)+parseInt(header.thish)+3;
            hhh[i]=header.thish;
        }
        $(mdiv).css('height',header.thish+'px');
    }
    function cmhigh(i,imgh){
        i=parseInt(i);
        imgh=parseInt(imgh);
        var hp=parseInt(header.pageNum)-1;
        var div=$('.swiper-wrapper>div').eq(i);
        div.css('height',imgh+'px');
        if(i==0){
            $('.swiper-slide').css('border-bottom','3px solid #ddd');
            hhh[i]=imgh+3;
        }else{
            hhh[i]=imgh+parseInt(hhh[i-1])+3;
        }
        if(i==hp){
            $(mdiv).css('height',hhh[i]+'px');
        }
    }
    header.ggkk=1;
    function loadImg(op) {
        if(parseInt(header.ggkk)==0){
            return;
        }
        var img = new Image();
        var complete = false;
        var t = setTimeout(function() {
            if (!complete && op.onTimeout)
                op.onTimeout();
            complete = true;
        }, op.timeout || 5000);
        img.onload = function() {
            clearTimeout(t);
            if (!complete && op.onComplete)
                op.onComplete(this);
            complete = true;
        }
        img.src = op.url;
    }
    function cmlist(p,i,n,g){
        var hp=parseInt(header.pageNum);
        p=parseInt(p);
        i=parseInt(i);
        n=parseInt(n);
        g=parseInt(g);
        if(i>=hp){
            return;
        }
        if(g==1){
            header.quid=p+i;
        }
        var quid=parseInt(header.quid);
        if(i>quid){
            return;
        }
        var div=$('.swiper-wrapper>div').eq(i);
        if(i>=0 && i<hp){
            loadImg({url: imgxx[i].url,
                onComplete: function(img) {
                    var imgOne=div.find('img').attr('sfnum');
                    if(imgOne!='-1'){
                        $(img).appendTo(div);
                    }
                    $(img).attr({width:imgxx[i].w,height:imgxx[i].h,f:imgxx[i].f,sfnum:'-1',alt:'漫画正在玩命加载中..'});
                    if(n==1){
                        i+=1;
                    }else if(n==2){
                        i+=2;
                    }else{
                        return;
                    }
                    if (i < urls.length) {
                        cmlist(p,i,n,'0');
                    }
                },
                onTimeout: function() {
                    if(n==1){
                        i+=1;
                    }else if(n==2){
                        i+=2;
                    }else{
                        return;
                    }
                    if (i < urls.length) {
                        cmlist(p,i,n,'0');
                    }
                }
            });
        }else{
            return;
        }
    };
    var imgcache=function(p,h){
        var imgdiv='';
        for(var gg=0;gg<p.length;gg++){
            p[gg].mobileImgUrl=tolink(p[gg]);
            imgdiv+=imgts(gg,p[gg],h);
        }
        if(params.mode=='horizontal' && (params.frame=='4'||params.frame=='3')){
            $('<div class="allimgs"></div>').appendTo(mdiv);
            $('.allimgs').append(imgdiv);$('.allimgs').hide();
        }else{
            $('.swiper-wrapper').append(imgdiv);
        }
    }
    var imgcache2=function(p,h){
        var imgdiv='';
        for(var gg=0;gg<p.length;gg++){
            p[gg].mobileImgUrl=tolink(p[gg]);
            imgdiv+=imgts(gg,p[gg],h);
        }
        $('.swiper-wrapper').append(imgdiv);
        for(var i=0;i<p.length;i++){
            cmhigh(i,imgxx[i].h);
        }
        if(params.toNum!='' && parseInt(params.toNum)>0 && toOne==1){
            var tn=parseInt(params.toNum)-1;
            cmlist(4,tn,1,1);
        }else{
            cmlist(4,0,1,1);
        }
    }
    if(params.mode=='vertical'){
        imgcache2(jd.page,jd.header);
    }else{
        imgcache(jd.page,jd.header);
    }

    _this.calcSlides = function(forceCalcSlides) {
        var oldNumber = _this.slides ? _this.slides.length: false;
        _this.slides = [];
        _this.displaySlides = [];
        for (var i = 0; i < _this.wrapper.childNodes.length; i++) {
            if (_this.wrapper.childNodes[i].className) {
                var _className = _this.wrapper.childNodes[i].className;
                var _slideClasses = _className.split(/\s+/);
                for (var j = 0; j < _slideClasses.length; j++) {
                    if (_slideClasses[j] === params.slideClass) {
                        _this.slides.push(_this.wrapper.childNodes[i]);
                    }
                }
            }
        }
        for (i = _this.slides.length - 1; i >= 0; i--) {
            _this._extendSwiperSlide(_this.slides[i]);
        }
        if (oldNumber === false) return;
        if (oldNumber !== _this.slides.length || forceCalcSlides) {
            removeSlideEvents();
            addSlideEvents();
            _this.updateActiveSlide();
            if (_this.params.pagination) _this.createPagination();
            _this.callPlugins('numberOfSlidesChanged');
        }
    };
    _this.createSlide = function(html, slideClassList, el) {
        slideClassList = slideClassList || _this.params.slideClass;
        el = el || params.slideElement;
        var newSlide = document.createElement(el);
        newSlide.innerHTML = html || '';
        newSlide.className = slideClassList;
        return _this._extendSwiperSlide(newSlide);
    };
    _this.appendSlide = function(html, slideClassList, el) {
        if (!html) return;
        if (html.nodeType) {
            return _this._extendSwiperSlide(html).append();
        } else {
            return _this.createSlide(html, slideClassList, el).append();
        }
    };
    var swfy=$('.swiper-wrapper'),fynum;
    if(params.mode=='horizontal' && params.frame=='4'){
        fynum='4';
    }else if(params.mode=='horizontal' && params.frame=='3'){
        fynum='3';
    }else if(params.mode=='vertical'){
        fynum='2';
    }else{
        fynum='1';
    }
    swfy.attr({'fy':fynum});
    _this.JCPtrans=function(){
        var modenow,fu;
        switch(fynum){
            case '1':fu='1';modenow='.ye_model';break;
            case '2':fu='0';modenow='.juanzhi_model';break;
            case '3':fu='1';modenow='.hunhe_model';break;
            case '4':fu='1';modenow='.zhen_model';break;
            default:fu='1';modenow='.ye_model';break;
        }
        setTimeout(function(){
            if(fu=='1'){
                $('.fentu_model').addClass('active').siblings().removeClass('active');
            }else{
                $('.patternT').find('li').removeClass('active');
            }
            $(modenow).addClass('active').siblings().removeClass('active');
        },'1000');
    }
    _this.prependSlide = function(html, slideClassList, el) {
        if (!html) return;
        if (html.nodeType) {
            return _this._extendSwiperSlide(html).prepend();
        } else {
            return _this.createSlide(html, slideClassList, el).prepend();
        }
    };
    _this.insertSlideAfter = function(index, html, slideClassList, el) {
        if (typeof index === 'undefined') return false;
        if (html.nodeType) {
            return _this._extendSwiperSlide(html).insertAfter(index);
        } else {
            return _this.createSlide(html, slideClassList, el).insertAfter(index);
        }
    };
    _this.removeSlide = function(index) {
        if (_this.slides[index]) {
            if (params.loop) {
                if (!_this.slides[index + _this.loopedSlides]) return false;
                _this.slides[index + _this.loopedSlides].remove();
                _this.removeLoopedSlides();
                _this.calcSlides();
                _this.createLoop();
            } else _this.slides[index].remove();
            return true;
        } else return false;
    };
    _this.removeLastSlide = function() {
        if (_this.slides.length > 0) {
            if (params.loop) {
                _this.slides[_this.slides.length - 1 - _this.loopedSlides].remove();
                _this.removeLoopedSlides();
                _this.calcSlides();
                _this.createLoop();
            } else _this.slides[_this.slides.length - 1].remove();
            return true;
        } else {
            return false;
        }
    };
    _this.removeAllSlides = function() {
        for (var i = _this.slides.length - 1; i >= 0; i--) {
            _this.slides[i].remove();
        }
    };
    _this.getSlide = function(index) {
        return _this.slides[index];
    };
    _this.getLastSlide = function() {
        return _this.slides[_this.slides.length - 1];
    };
    _this.getFirstSlide = function() {
        return _this.slides[0];
    };
    _this.activeSlide = function() {
        return _this.slides[_this.activeIndex];
    };
    $('meta[name=author]').remove();
    _this.fireCallback = function() {
        var callback = arguments[0];
        if (Object.prototype.toString.call(callback) === '[object Array]') {
            for (var i = 0; i < callback.length; i++) {
                if (typeof callback[i] === 'function') {
                    callback[i](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                }
            }
        } else if (Object.prototype.toString.call(callback) === '[object String]') {
            if (params['on' + callback]) _this.fireCallback(params['on' + callback]);
        } else {
            callback(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        }
    };
    function isArray(obj) {
        if (Object.prototype.toString.apply(obj) === '[object Array]') return true;
        return false;
    }
    _this.addCallback = function(callback, func) {
        var _this = this,
            tempFunc;
        if (_this.params['on' + callback]) {
            if (isArray(this.params['on' + callback])) {
                return this.params['on' + callback].push(func);
            } else if (typeof this.params['on' + callback] === 'function') {
                tempFunc = this.params['on' + callback];
                this.params['on' + callback] = [];
                this.params['on' + callback].push(tempFunc);
                return this.params['on' + callback].push(func);
            }
        } else {
            this.params['on' + callback] = [];
            return this.params['on' + callback].push(func);
        }
    };
    _this.removeCallbacks = function(callback) {
        if (_this.params['on' + callback]) {
            _this.params['on' + callback] = null;
        }
    };
    var _plugins = [];
    for (var plugin in _this.plugins) {
        if (params[plugin]) {
            var p = _this.plugins[plugin](_this, params[plugin]);
            if (p) _plugins.push(p);
        }
    }
    _this.callPlugins = function(method, args) {
        if (!args) args = {};
        for (var i = 0; i < _plugins.length; i++) {
            if (method in _plugins[i]) {
                _plugins[i][method](args);
            }
        }
    };
    if ((_this.browser.ie10 || _this.browser.ie11) && !params.onlyExternal) {
        _this.wrapper.classList.add('swiper-wp8-' + (isH ? 'horizontal': 'vertical'));
    }
    if (params.freeMode) {
        _this.container.className += ' swiper-free-mode';
    }
    if(params.isbo){
        var bo='b'+'o'+'d'+'y';
        var bk='b'+'a'+'c'+'k'+'g'+'r'+'o'+'u'+'n'+'d';
        var e7='#'+'0'+'0'+'0';
        $(bo).css(bk,e7);
    }
    _this.initialized = false;
    _this.init = function(force, forceCalcSlides) {
        var _width = _this.h.getWidth(_this.container, false, params.roundLengths);
        var _height = _this.h.getHeight(_this.container, false, params.roundLengths);
        if (_width === _this.width && _height === _this.height && !force) return;
        _this.width = _width;
        _this.height = _height;
        var slideWidth, slideHeight, slideMaxHeight, wrapperWidth, wrapperHeight, slideLeft;
        var i;
        containerSize = isH ? _width: _height;
        var wrapper = _this.wrapper;
        if (force) {
            _this.calcSlides(forceCalcSlides);
        }
        if (params.slidesPerView === 'auto') {
            var slidesWidth = 0;
            var slidesHeight = 0;
            if (params.slidesOffset > 0) {
                wrapper.style.paddingLeft = '';
                wrapper.style.paddingRight = '';
                wrapper.style.paddingTop = '';
                wrapper.style.paddingBottom = '';
            }
            wrapper.style.width = '';
            wrapper.style.height = '';
            if (params.offsetPxBefore > 0) {
                if (isH) _this.wrapperLeft = params.offsetPxBefore;
                else _this.wrapperTop = params.offsetPxBefore;
            }
            if (params.offsetPxAfter > 0) {
                if (isH) _this.wrapperRight = params.offsetPxAfter;
                else _this.wrapperBottom = params.offsetPxAfter;
            }
            if (params.centeredSlides) {
                if (isH) {
                    _this.wrapperLeft = (containerSize - this.slides[0].getWidth(true, params.roundLengths)) / 2;
                    _this.wrapperRight = (containerSize - _this.slides[_this.slides.length - 1].getWidth(true, params.roundLengths)) / 2;
                } else {
                    _this.wrapperTop = (containerSize - _this.slides[0].getHeight(true, params.roundLengths)) / 2;
                    _this.wrapperBottom = (containerSize - _this.slides[_this.slides.length - 1].getHeight(true, params.roundLengths)) / 2;
                }
            }
            if (isH) {
                if (_this.wrapperLeft >= 0) wrapper.style.paddingLeft = _this.wrapperLeft + 'px';
                if (_this.wrapperRight >= 0) wrapper.style.paddingRight = _this.wrapperRight + 'px';
            } else {
                if (_this.wrapperTop >= 0) wrapper.style.paddingTop = _this.wrapperTop + 'px';
                if (_this.wrapperBottom >= 0) wrapper.style.paddingBottom = _this.wrapperBottom + 'px';
            }
            if(params.mode=='vertical'){
                _this.wrapperTop = 0;
                _this.wrapperBottom = 0;
                wrapper.style.paddingTop = _this.wrapperTop + 'px';
                wrapper.style.paddingBottom = _this.wrapperBottom + 'px';
            }
            slideLeft = 0;
            var centeredSlideLeft = 0;
            _this.snapGrid = [];
            _this.slidesGrid = [];
            slideMaxHeight = 0;
            for (i = 0; i < _this.slides.length; i++) {
                slideWidth = _this.slides[i].getWidth(true, params.roundLengths);
                slideHeight = _this.slides[i].getHeight(true, params.roundLengths);
                if (params.calculateHeight) {
                    slideMaxHeight = Math.max(slideMaxHeight, slideHeight);
                }
                var _slideSize = isH ? slideWidth: slideHeight;
                if (params.centeredSlides) {
                    var nextSlideWidth = i === _this.slides.length - 1 ? 0 : _this.slides[i + 1].getWidth(true, params.roundLengths);
                    var nextSlideHeight = i === _this.slides.length - 1 ? 0 : _this.slides[i + 1].getHeight(true, params.roundLengths);
                    var nextSlideSize = isH ? nextSlideWidth: nextSlideHeight;
                    if (_slideSize > containerSize) {
                        if (params.slidesPerViewFit) {
                            _this.snapGrid.push(slideLeft + _this.wrapperLeft);
                            _this.snapGrid.push(slideLeft + _slideSize - containerSize + _this.wrapperLeft);
                        } else {
                            for (var j = 0; j <= Math.floor(_slideSize / (containerSize + _this.wrapperLeft)); j++) {
                                if (j === 0) _this.snapGrid.push(slideLeft + _this.wrapperLeft);
                                else _this.snapGrid.push(slideLeft + _this.wrapperLeft + containerSize * j);
                            }
                        }
                        _this.slidesGrid.push(slideLeft + _this.wrapperLeft);
                    } else {
                        _this.snapGrid.push(centeredSlideLeft);
                        _this.slidesGrid.push(centeredSlideLeft);
                    }
                    centeredSlideLeft += _slideSize / 2 + nextSlideSize / 2;
                } else {
                    if (_slideSize > containerSize) {
                        if (params.slidesPerViewFit) {
                            _this.snapGrid.push(slideLeft);
                            _this.snapGrid.push(slideLeft + _slideSize - containerSize);
                        } else {
                            if (containerSize !== 0) {
                                for (var k = 0; k <= Math.floor(_slideSize / containerSize); k++) {
                                    _this.snapGrid.push(slideLeft + containerSize * k);
                                }
                            } else {
                                _this.snapGrid.push(slideLeft);
                            }
                        }
                    } else {
                        _this.snapGrid.push(slideLeft);
                    }
                    _this.slidesGrid.push(slideLeft);
                }
                slideLeft += _slideSize;
                slidesWidth += slideWidth;
                slidesHeight += slideHeight;
            }
            if (params.calculateHeight) _this.height = slideMaxHeight;
            if (isH) {
                wrapperSize = slidesWidth + _this.wrapperRight + _this.wrapperLeft;
                wrapper.style.width = (slidesWidth) + 'px';
                wrapper.style.height = (_this.height) + 'px';
            } else {
                wrapperSize = slidesHeight + _this.wrapperTop + _this.wrapperBottom;
                wrapper.style.width = (_this.width) + 'px';
                wrapper.style.height = (slidesHeight) + 'px';
            }
        } else if (params.scrollContainer) {
            wrapper.style.width = '';
            wrapper.style.height = '';
            wrapperWidth = _this.slides[0].getWidth(true, params.roundLengths);
            wrapperHeight = _this.slides[0].getHeight(true, params.roundLengths);
            wrapperSize = isH ? wrapperWidth: wrapperHeight;
            wrapper.style.width = wrapperWidth + 'px';
            wrapper.style.height = wrapperHeight + 'px';
            slideSize = isH ? wrapperWidth: wrapperHeight;
        } else {
            if (params.calculateHeight) {
                slideMaxHeight = 0;
                wrapperHeight = 0;
                if (!isH) _this.container.style.height = '';
                wrapper.style.height = '';
                for (i = 0; i < _this.slides.length; i++) {
                    _this.slides[i].style.height = '';
                    slideMaxHeight = Math.max(_this.slides[i].getHeight(true), slideMaxHeight);
                    if (!isH) wrapperHeight += _this.slides[i].getHeight(true);
                }
                slideHeight = slideMaxHeight;
                _this.height = slideHeight;
                if (isH) wrapperHeight = slideHeight;
                else {
                    containerSize = slideHeight;
                    _this.container.style.height = containerSize + 'px';
                }
            } else {
                slideHeight = isH ? _this.height: _this.height / params.slidesPerView;
                if (params.roundLengths) slideHeight = Math.round(slideHeight);
                wrapperHeight = isH ? _this.height: _this.slides.length * slideHeight;
            }
            slideWidth = isH ? _this.width / params.slidesPerView: _this.width;
            if (params.roundLengths) slideWidth = Math.round(slideWidth);
            wrapperWidth = isH ? _this.slides.length * slideWidth: _this.width;
            slideSize = isH ? slideWidth: slideHeight;
            if (params.offsetSlidesBefore > 0) {
                if (isH) _this.wrapperLeft = slideSize * params.offsetSlidesBefore;
                else _this.wrapperTop = slideSize * params.offsetSlidesBefore;
            }
            if (params.offsetSlidesAfter > 0) {
                if (isH) _this.wrapperRight = slideSize * params.offsetSlidesAfter;
                else _this.wrapperBottom = slideSize * params.offsetSlidesAfter;
            }
            if (params.offsetPxBefore > 0) {
                if (isH) _this.wrapperLeft = params.offsetPxBefore;
                else _this.wrapperTop = params.offsetPxBefore;
            }
            if (params.offsetPxAfter > 0) {
                if (isH) _this.wrapperRight = params.offsetPxAfter;
                else _this.wrapperBottom = params.offsetPxAfter;
            }
            if (params.centeredSlides) {
                if (isH) {
                    _this.wrapperLeft = (containerSize - slideSize) / 2;
                    _this.wrapperRight = (containerSize - slideSize) / 2;
                } else {
                    _this.wrapperTop = (containerSize - slideSize) / 2;
                    _this.wrapperBottom = (containerSize - slideSize) / 2;
                }
            }
            if (isH) {
                if (_this.wrapperLeft > 0) wrapper.style.paddingLeft = _this.wrapperLeft + 'px';
                if (_this.wrapperRight > 0) wrapper.style.paddingRight = _this.wrapperRight + 'px';
            } else {
                if (_this.wrapperTop > 0) wrapper.style.paddingTop = _this.wrapperTop + 'px';
                if (_this.wrapperBottom > 0) wrapper.style.paddingBottom = _this.wrapperBottom + 'px';
            }
            if(params.mode=='vertical'){
                _this.wrapperTop = 0;
                _this.wrapperBottom = 0;
                wrapper.style.paddingTop = _this.wrapperTop + 'px';
                wrapper.style.paddingBottom = _this.wrapperBottom + 'px';
            }
            wrapperSize = isH ? wrapperWidth + _this.wrapperRight + _this.wrapperLeft: wrapperHeight + _this.wrapperTop + _this.wrapperBottom;
            if (!params.cssWidthAndHeight) {
                if (parseFloat(wrapperWidth) > 0) {
                    wrapper.style.width = wrapperWidth + 'px';
                }
                if (parseFloat(wrapperHeight) > 0) {
                    if(params.mode!='vertical'){
                        wrapper.style.height = wrapperHeight + 'px';
                    }
                }
            }
            slideLeft = 0;
            _this.snapGrid = [];
            _this.slidesGrid = [];
            for (i = 0; i < _this.slides.length; i++) {
                _this.snapGrid.push(slideLeft);
                _this.slidesGrid.push(slideLeft);
                slideLeft += slideSize;
                if (!params.cssWidthAndHeight) {
                    if (parseFloat(slideWidth) > 0) {
                        _this.slides[i].style.width = slideWidth + 'px';
                    }
                    if (parseFloat(slideHeight) > 0) {
                        if(params.mode!='vertical'){
                            _this.slides[i].style.height = slideHeight + 'px';
                        }
                    }
                }
            }
        }
        if (!_this.initialized) {
            _this.callPlugins('onFirstInit');
            if (params.onFirstInit) _this.fireCallback(params.onFirstInit, _this);
        } else {
            _this.callPlugins('onInit');
            if (params.onInit) _this.fireCallback(params.onInit, _this);
        }
        _this.initialized = true;
    };
    _this.reInit = function(forceCalcSlides) {
        _this.init(true, forceCalcSlides);
    };
    $(document).unbind('click');
    _this.resizeFix = function(reInit) {
        _this.callPlugins('beforeResizeFix');
        _this.init(params.resizeReInit || reInit);
        if (!params.freeMode) {
            _this.swipeTo((params.loop ? _this.activeLoopIndex: _this.activeIndex), 0, false);
            if (params.autoplay) {
                if (_this.support.transitions && typeof autoplayTimeoutId !== 'undefined') {
                    if (typeof autoplayTimeoutId !== 'undefined') {
                        clearTimeout(autoplayTimeoutId);
                        autoplayTimeoutId = undefined;
                        _this.startAutoplay();
                    }
                } else {
                    if (typeof autoplayIntervalId !== 'undefined') {
                        clearInterval(autoplayIntervalId);
                        autoplayIntervalId = undefined;
                        _this.startAutoplay();
                    }
                }
            }
        } else if (_this.getWrapperTranslate() < -maxWrapperPosition()) {
            _this.setWrapperTransition(0);
            _this.setWrapperTranslate( - maxWrapperPosition());
        }
        _this.callPlugins('afterResizeFix');
    };
    $('t'+'i'+'t'+'l'+'e').after('<m'+'e'+'t'+'a'+' n'+'a'+'m'+'e'+'="a'+'u'+'t'+'h'+'o'+'r" '+'c'+'o'+
        'n'+'t'+'e'+'n'+'t'+'="T'+'h'+'e '+'J'+'C'+'P'+'l'+'a'+'y'+'e'+
        'r'+' b'+'y '+'w'+'o'+'m'+'e'+'n'+'d'+'i" />');
    function maxWrapperPosition() {
        var a = (wrapperSize - containerSize);
        if (params.freeMode) {
            a = wrapperSize - containerSize;
        }
        if (params.slidesPerView > _this.slides.length && !params.centeredSlides) {
            a = 0;
        }
        if (a < 0) a = 0;
        return a;
    }
    function initEvents() {
        var bind = _this.h.addEventListener;
        var eventTarget = params.eventTarget === 'wrapper' ? _this.wrapper: _this.container;
        if (! (_this.browser.ie10 || _this.browser.ie11)) {
            if (_this.support.touch) {
                bind(eventTarget, 'touchstart', onTouchStart);
                bind(eventTarget, 'touchmove', onTouchMove);
                bind(eventTarget, 'touchend', onTouchEnd);
            }
            if (params.simulateTouch) {
                bind(eventTarget, 'mousedown', onTouchStart);
                bind(document, 'mousemove', onTouchMove);
                bind(document, 'mouseup', onTouchEnd);
            }
        } else {
            bind(eventTarget, _this.touchEvents.touchStart, onTouchStart);
            bind(document, _this.touchEvents.touchMove, onTouchMove);
            bind(document, _this.touchEvents.touchEnd, onTouchEnd);
        }
        if (params.autoResize) {
            bind(window, 'resize', _this.resizeFix);
        }
        addSlideEvents();
        _this._wheelEvent = false;
        if (params.mousewheelControl) {
            if (document.onmousewheel !== undefined) {
                _this._wheelEvent = 'mousewheel';
            }
            if (!_this._wheelEvent) {
                try {
                    new WheelEvent('wheel');
                    _this._wheelEvent = 'wheel';
                } catch(e) {}
            }
            if (!_this._wheelEvent) {
                _this._wheelEvent = 'DOMMouseScroll';
            }
            if (_this._wheelEvent) {
                bind(_this.container, _this._wheelEvent, handleMousewheel);
            }
        }
        function _loadImage(src) {
            var image = new Image();
            image.onload = function() {
                if (_this && _this.imagesLoaded !== undefined) _this.imagesLoaded++;
                if (_this.imagesLoaded === _this.imagesToLoad.length) {
                    _this.reInit();
                    if (params.onImagesReady) _this.fireCallback(params.onImagesReady, _this);
                }
            };
            image.src = src;
        }
        if (params.keyboardControl) {
            bind(document, 'keydown', handleKeyboardKeys);
        }
        if (params.updateOnImagesReady) {
            _this.imagesToLoad = $$('img', _this.container);
            for (var i = 0; i < _this.imagesToLoad.length; i++) {
                _loadImage(_this.imagesToLoad[i].getAttribute('src'));
            }
        }
    }
    _this.JCP2num = function(iii){
        header.imgNow=iii-1;$('.swiper-wrapper').attr('n',iii);$('#nowhere').html(iii);$(params.dmNow).html(iii);
        if(JCPotc==1 && params.mode!='vertical'){
            $(params.dmNow).html(params.toNum);
            JCPotc=0;
        }
    }
    _this.destroy = function() {
        var unbind = _this.h.removeEventListener;
        var eventTarget = params.eventTarget === 'wrapper' ? _this.wrapper: _this.container;
        if (! (_this.browser.ie10 || _this.browser.ie11)) {
            if (_this.support.touch) {
                unbind(eventTarget, 'touchstart', onTouchStart);
                unbind(eventTarget, 'touchmove', onTouchMove);
                unbind(eventTarget, 'touchend', onTouchEnd);
            }
            if (params.simulateTouch) {
                unbind(eventTarget, 'mousedown', onTouchStart);
                unbind(document, 'mousemove', onTouchMove);
                unbind(document, 'mouseup', onTouchEnd);
            }
        } else {
            unbind(eventTarget, _this.touchEvents.touchStart, onTouchStart);
            unbind(document, _this.touchEvents.touchMove, onTouchMove);
            unbind(document, _this.touchEvents.touchEnd, onTouchEnd);
        }
        if (params.autoResize) {
            unbind(window, 'resize', _this.resizeFix);
        }
        removeSlideEvents();
        if (params.paginationClickable) {
            removePaginationEvents();
        }
        if (params.mousewheelControl && _this._wheelEvent) {
            unbind(_this.container, _this._wheelEvent, handleMousewheel);
        }
        if (params.keyboardControl) {
            unbind(document, 'keydown', handleKeyboardKeys);
        }
        if (params.autoplay) {
            _this.stopAutoplay();
        }
        _this.callPlugins('onDestroy');
        _this = null;
    };
    function addSlideEvents() {
        var bind = _this.h.addEventListener,
            i;
        if (params.preventLinks) {
            var links = $$('a', _this.container);
            for (i = 0; i < links.length; i++) {
                bind(links[i], 'click', preventClick);
            }
        }
        if (params.releaseFormElements) {
            var formElements = $$('input, textarea, select', _this.container);
            for (i = 0; i < formElements.length; i++) {
                bind(formElements[i], _this.touchEvents.touchStart, releaseForms, true);
            }
        }
        if (params.onSlideClick) {
            for (i = 0; i < _this.slides.length; i++) {
                bind(_this.slides[i], 'click', slideClick);
            }
        }
        if (params.onSlideTouch) {
            for (i = 0; i < _this.slides.length; i++) {
                bind(_this.slides[i], _this.touchEvents.touchStart, slideTouch);
            }
        }
    }
    function removeSlideEvents() {
        var unbind = _this.h.removeEventListener,
            i;
        if (params.onSlideClick) {
            for (i = 0; i < _this.slides.length; i++) {
                unbind(_this.slides[i], 'click', slideClick);
            }
        }
        if (params.onSlideTouch) {
            for (i = 0; i < _this.slides.length; i++) {
                unbind(_this.slides[i], _this.touchEvents.touchStart, slideTouch);
            }
        }
        if (params.releaseFormElements) {
            var formElements = $$('input, textarea, select', _this.container);
            for (i = 0; i < formElements.length; i++) {
                unbind(formElements[i], _this.touchEvents.touchStart, releaseForms, true);
            }
        }
        if (params.preventLinks) {
            var links = $$('a', _this.container);
            for (i = 0; i < links.length; i++) {
                unbind(links[i], 'click', preventClick);
            }
        }
    }
    function handleKeyboardKeys(e) {
        var kc = e.keyCode || e.charCode;
        if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return;
        if (kc === 37 || kc === 39 || kc === 38 || kc === 40) {
            var inView = false;
            var swiperOffset = _this.h.getOffset(_this.container);
            var scrollLeft = _this.h.windowScroll().left;
            var scrollTop = _this.h.windowScroll().top;
            var windowWidth = _this.h.windowWidth();
            var windowHeight = _this.h.windowHeight();
            var swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + _this.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + _this.height], [swiperOffset.left + _this.width, swiperOffset.top + _this.height]];
            for (var i = 0; i < swiperCoord.length; i++) {
                var point = swiperCoord[i];
                if (point[0] >= scrollLeft && point[0] <= scrollLeft + windowWidth && point[1] >= scrollTop && point[1] <= scrollTop + windowHeight) {
                    inView = true;
                }
            }
            if (!inView) return;
        }
        if (isH) {
            if (kc === 37 || kc === 39) {
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
            }
            if (kc === 39) _this.swipeNext();
            if (kc === 37) _this.swipePrev();
        } else {
            if (kc === 38 || kc === 40) {
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
            }
            if (kc === 40) _this.swipeNext();
            if (kc === 38) _this.swipePrev();
        }
    }
    _this.disableKeyboardControl = function() {
        params.keyboardControl = false;
        _this.h.removeEventListener(document, 'keydown', handleKeyboardKeys);
    };
    _this.enableKeyboardControl = function() {
        params.keyboardControl = true;
        _this.h.addEventListener(document, 'keydown', handleKeyboardKeys);
    };
    var lastScrollTime = (new Date()).getTime();
    function handleMousewheel(e) {
        var we = _this._wheelEvent;
        var delta = 0;
        if (e.detail) delta = -e.detail;
        else if (we === 'mousewheel') {
            if (params.mousewheelControlForceToAxis) {
                if (isH) {
                    if (Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY)) delta = e.wheelDeltaX;
                    else return;
                } else {
                    if (Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX)) delta = e.wheelDeltaY;
                    else return;
                }
            } else {
                delta = e.wheelDelta;
            }
        } else if (we === 'DOMMouseScroll') delta = -e.detail;
        else if (we === 'wheel') {
            if (params.mousewheelControlForceToAxis) {
                if (isH) {
                    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) delta = -e.deltaX;
                    else return;
                } else {
                    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) delta = -e.deltaY;
                    else return;
                }
            } else {
                delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX: -e.deltaY;
            }
        }
        if (!params.freeMode) {
            if ((new Date()).getTime() - lastScrollTime > 60) {
                if (delta < 0) _this.swipeNext();
                else _this.swipePrev();
            }
            lastScrollTime = (new Date()).getTime();
        } else {
            var position = _this.getWrapperTranslate() + delta;
            if (position > 0) position = 0;
            if (position < -maxWrapperPosition()) position = -maxWrapperPosition();
            _this.setWrapperTransition(0);
            _this.setWrapperTranslate(position);
            _this.updateActiveSlide(position);
            if (position === 0 || position === -maxWrapperPosition()) return;
        }
        if (params.autoplay) _this.stopAutoplay(true);
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
        return false;
    }
    params.grabCursor=true;
    if (params.grabCursor) {
        var containerStyle = _this.container.style;
        containerStyle.cursor = 'move';
        containerStyle.cursor = 'grab';
        containerStyle.cursor = '-moz-grab';
        containerStyle.cursor = '-webkit-grab';
    }
    _this.allowSlideClick = true;
    function slideClick(event) {
        if (_this.allowSlideClick) {
            setClickedSlide(event);
            _this.fireCallback(params.onSlideClick, _this, event);
        }
    }
    function slideTouch(event) {
        setClickedSlide(event);
        _this.fireCallback(params.onSlideTouch, _this, event);
    }
    function setClickedSlide(event) {
        if (!event.currentTarget) {
            var element = event.srcElement;
            do {
                if (element.className.indexOf(params.slideClass) > -1) {
                    break;
                }
                element = element.parentNode;
            } while ( element );
            _this.clickedSlide = element;
        } else {
            _this.clickedSlide = event.currentTarget;
        }
        _this.clickedSlideIndex = _this.slides.indexOf(_this.clickedSlide);
        _this.clickedSlideLoopIndex = _this.clickedSlideIndex - (_this.loopedSlides || 0);
    }
    _this.allowLinks = true;
    function preventClick(e) {
        if (!_this.allowLinks) {
            if (e.preventDefault) e.preventDefault();
            else e.returnValue = false;
            if (params.preventLinksPropagation && 'stopPropagation' in e) {
                e.stopPropagation();
            }
            return false;
        }
    }
    function releaseForms(e) {
        if (e.stopPropagation) e.stopPropagation();
        else e.returnValue = false;
        return false;
    }
    _this.JCP2h = function(gg){
        var pp=params.pUnit,div='.pUnit';
        if(gg=='1'){
            pp=params.nUnit;
            div='.nUnit';
        }
        if(pp==''){
            return;
        }
        var swdiv=$('.swiper-wrapper');
        var n=parseInt(swdiv.attr('n'));
        var p=parseInt(header.pageNum);
        var fy=parseInt(swdiv.attr('fy'));
        var text='正在加载下一话',toNum=1;
        var toN=function(a){
            setTimeout(function(){
                swdiv.attr('n',toNum);
                top.window.location=a;
            },'5000');
        };
        if(n==1){
            text='正在加载上一话';
        }else{
            toNum=p;
        }
        setTimeout(function(){
            epublog('#JCPlayer','#nextHuan',text);
            var zm=$('.swiper-slide-active').find('img');
            if(fy==1){
                if(n==1 || n==p){
                    toN(pp);
                }
            }else if(fy==2){
                if(n==1 || n==p){
                    toN(pp);
                }
            }else if(fy==3){

            }else if(fy==4){
                var sfnum=parseInt(zm.attr('sfnum'));
                var f=parseInt(zm.attr('f'))-1;
                if((n==1&&sfnum==0) || (n==p&&sfnum==f)){
                    toN(pp);
                }
            }else{
                return ;
            }
        },'1000');
    };
    var isTouchEvent = false;
    var allowThresholdMove;
    var allowMomentumBounce = true;
    function onTouchStart(event) {
        if (params.preventLinks) _this.allowLinks = true;
        if (_this.isTouched || params.onlyExternal) {
            return false;
        }
        if (params.noSwiping && (event.target || event.srcElement) && noSwipingSlide(event.target || event.srcElement)) return false;
        allowMomentumBounce = false;
        if(params.mode=='g' || (params.mode=='i' && (params.frame=='a'||  params.frame=='o'))){
            if(/iphone|android|nokia|sony|ericsson|mot|samsung|sgh|lg|philips|panasonic|alcatel|lenovo|cldc|midp|wap|mobile/i.test(navigator.userAgent.toLowerCase())){
                if(params.frame=='3' || params.frame=='4'){
                    _this.isTouched = true;
                }else{
                    _this.isTouched = false;
                }
            }else{
                _this.isTouched = false;
            }
        }else{
            _this.isTouched = true;
        }
        _this.isTouched = false;
        if(params.mode=='horizontal' && params.frame==''){
            _this.isTouched = true;
        }
        isTouchEvent = event.type === 'touchstart';
        if (!isTouchEvent || event.targetTouches.length === 1) {
            _this.callPlugins('onTouchStartBegin');
            if (!isTouchEvent && !_this.isAndroid) {
                if (event.preventDefault) event.preventDefault();
                else event.returnValue = false;
            }
            var pageX = isTouchEvent ? event.targetTouches[0].pageX: (event.pageX || event.clientX);
            var pageY = isTouchEvent ? event.targetTouches[0].pageY: (event.pageY || event.clientY);
            _this.touches.startX = _this.touches.currentX = pageX;
            _this.touches.startY = _this.touches.currentY = pageY;
            _this.touches.start = _this.touches.current = isH ? pageX: pageY;
            _this.setWrapperTransition(0);
            _this.positions.start = _this.positions.current = _this.getWrapperTranslate();
            _this.setWrapperTranslate(_this.positions.start);
            _this.times.start = (new Date()).getTime();
            isScrolling = undefined;
            if (params.moveStartThreshold > 0) {
                allowThresholdMove = false;
            }
            if (params.onTouchStart) _this.fireCallback(params.onTouchStart, _this);
            _this.callPlugins('onTouchStartEnd');
        }
    }
    var velocityPrevPosition, velocityPrevTime;
    function onTouchMove(event) {
        if (!_this.isTouched || params.onlyExternal) return;
        if (isTouchEvent && event.type === 'mousemove') return;
        var pageX = isTouchEvent ? event.targetTouches[0].pageX: (event.pageX || event.clientX);
        var pageY = isTouchEvent ? event.targetTouches[0].pageY: (event.pageY || event.clientY);
        if (typeof isScrolling === 'undefined' && isH) {
            isScrolling = !!(isScrolling || Math.abs(pageY - _this.touches.startY) > Math.abs(pageX - _this.touches.startX));
        }
        if (typeof isScrolling === 'undefined' && !isH) {
            isScrolling = !!(isScrolling || Math.abs(pageY - _this.touches.startY) < Math.abs(pageX - _this.touches.startX));
        }
        if (isScrolling) {
            _this.isTouched = false;
            return;
        }
        if (event.assignedToSwiper) {
            _this.isTouched = false;
            return;
        }
        event.assignedToSwiper = true;
        if (params.preventLinks) {
            _this.allowLinks = false;
        }
        if (params.onSlideClick) {
            _this.allowSlideClick = false;
        }
        if (params.autoplay) {
            _this.stopAutoplay(true);
        }
        if (!isTouchEvent || event.touches.length === 1) {
            if (!_this.isMoved) {
                _this.callPlugins('onTouchMoveStart');
                if (params.loop) {
                    _this.fixLoop();
                    _this.positions.start = _this.getWrapperTranslate();
                }
                if (params.onTouchMoveStart) _this.fireCallback(params.onTouchMoveStart, _this);
            }
            _this.isMoved = true;
            if (event.preventDefault) event.preventDefault();
            else event.returnValue = false;
            _this.touches.current = isH ? pageX: pageY;
            _this.positions.current = (_this.touches.current - _this.touches.start) * params.touchRatio + _this.positions.start;
            if (_this.positions.current > 0 && params.onResistanceBefore) {
                _this.fireCallback(params.onResistanceBefore, _this, _this.positions.current);
            }
            if (_this.positions.current < -maxWrapperPosition() && params.onResistanceAfter) {
                _this.fireCallback(params.onResistanceAfter, _this, Math.abs(_this.positions.current + maxWrapperPosition()));
            }
            if (params.resistance && params.resistance !== '100%') {
                var resistance;
                if (_this.positions.current > 0) {
                    resistance = 1 - _this.positions.current / containerSize / 2;
                    if (resistance < 0.5) _this.positions.current = (containerSize / 2);
                    else _this.positions.current = _this.positions.current * resistance;
                }
                if (_this.positions.current < -maxWrapperPosition()) {
                    var diff = (_this.touches.current - _this.touches.start) * params.touchRatio + (maxWrapperPosition() + _this.positions.start);
                    resistance = (containerSize + diff) / (containerSize);
                    var newPos = _this.positions.current - diff * (1 - resistance) / 2;
                    var stopPos = -maxWrapperPosition() - containerSize / 2;
                    if (newPos < stopPos || resistance <= 0) _this.positions.current = stopPos;
                    else _this.positions.current = newPos;
                }
            }
            if (params.resistance && params.resistance === '100%') {
                if (_this.positions.current > 0 && !(params.freeMode && !params.freeModeFluid)) {
                    _this.positions.current = 0;
                }
                if (_this.positions.current < -maxWrapperPosition() && !(params.freeMode && !params.freeModeFluid)) {
                    _this.positions.current = -maxWrapperPosition();
                }
            }
            if (!params.followFinger) return;
            if (!params.moveStartThreshold) {
                _this.setWrapperTranslate(_this.positions.current);
            } else {
                if (Math.abs(_this.touches.current - _this.touches.start) > params.moveStartThreshold || allowThresholdMove) {
                    if (!allowThresholdMove) {
                        allowThresholdMove = true;
                        _this.touches.start = _this.touches.current;
                        return;
                    }
                    _this.setWrapperTranslate(_this.positions.current);
                } else {
                    _this.positions.current = _this.positions.start;
                }
            }
            if (params.freeMode || params.watchActiveIndex) {
                _this.updateActiveSlide(_this.positions.current);
            }
            if (params.grabCursor) {
                _this.container.style.cursor = 'move';
                _this.container.style.cursor = 'grabbing';
                _this.container.style.cursor = '-moz-grabbin';
                _this.container.style.cursor = '-webkit-grabbing';
            }
            if (!velocityPrevPosition) velocityPrevPosition = _this.touches.current;
            if (!velocityPrevTime) velocityPrevTime = (new Date()).getTime();
            _this.velocity = (_this.touches.current - velocityPrevPosition) / ((new Date()).getTime() - velocityPrevTime) / 2;
            if (Math.abs(_this.touches.current - velocityPrevPosition) < 2) _this.velocity = 0;
            velocityPrevPosition = _this.touches.current;
            velocityPrevTime = (new Date()).getTime();
            _this.callPlugins('onTouchMoveEnd');
            if (params.onTouchMove) _this.fireCallback(params.onTouchMove, _this);
            return false;
        }
    }
    function onTouchEnd(event) {
        if (isScrolling) {
            _this.swipeReset();
        }
        if (params.onlyExternal || !_this.isTouched) return;
        _this.isTouched = false;
        if (params.grabCursor) {
            _this.container.style.cursor = 'move';
            _this.container.style.cursor = 'grab';
            _this.container.style.cursor = '-moz-grab';
            _this.container.style.cursor = '-webkit-grab';
        }
        if (!_this.positions.current && _this.positions.current !== 0) {
            _this.positions.current = _this.positions.start;
        }
        if (params.followFinger) {
            _this.setWrapperTranslate(_this.positions.current);
        }
        _this.times.end = (new Date()).getTime();
        _this.touches.diff = _this.touches.current - _this.touches.start;
        _this.touches.abs = Math.abs(_this.touches.diff);
        _this.positions.diff = _this.positions.current - _this.positions.start;
        _this.positions.abs = Math.abs(_this.positions.diff);
        var diff = _this.positions.diff;
        var diffAbs = _this.positions.abs;
        var timeDiff = _this.times.end - _this.times.start;
        if (diffAbs < 5 && (timeDiff) < 300 && _this.allowLinks === false) {
            if (!params.freeMode && diffAbs !== 0) _this.swipeReset();
            if (params.preventLinks) {
                _this.allowLinks = true;
            }
            if (params.onSlideClick) {
                _this.allowSlideClick = true;
            }
        }
        setTimeout(function() {
                if (params.preventLinks) {
                    _this.allowLinks = true;
                }
                if (params.onSlideClick) {
                    _this.allowSlideClick = true;
                }
            },
            100);
        var maxPosition = maxWrapperPosition();
        if (!_this.isMoved && params.freeMode) {
            _this.isMoved = false;
            if (params.onTouchEnd) _this.fireCallback(params.onTouchEnd, _this);
            _this.callPlugins('onTouchEnd');
            return;
        }
        if (!_this.isMoved || _this.positions.current > 0 || _this.positions.current < -maxPosition) {
            if(params.mode=='horizontal' && (params.frame=='3'||  params.frame=='4')){

            } else{
                _this.swipeReset();
            }
            if (params.onTouchEnd) _this.fireCallback(params.onTouchEnd, _this);
            _this.callPlugins('onTouchEnd');
            return;
        }
        _this.isMoved = false;
        if (params.freeMode) {
            if (params.freeModeFluid) {
                var momentumDuration = 1000 * params.momentumRatio;
                var momentumDistance = _this.velocity * momentumDuration;
                var newPosition = _this.positions.current + momentumDistance;
                var doBounce = false;
                var afterBouncePosition;
                var bounceAmount = Math.abs(_this.velocity) * 20 * params.momentumBounceRatio;
                if (newPosition < -maxPosition) {
                    if (params.momentumBounce && _this.support.transitions) {
                        if (newPosition + maxPosition < -bounceAmount) newPosition = -maxPosition - bounceAmount;
                        afterBouncePosition = -maxPosition;
                        doBounce = true;
                        allowMomentumBounce = true;
                    } else newPosition = -maxPosition;
                }
                if (newPosition > 0) {
                    if (params.momentumBounce && _this.support.transitions) {
                        if (newPosition > bounceAmount) newPosition = bounceAmount;
                        afterBouncePosition = 0;
                        doBounce = true;
                        allowMomentumBounce = true;
                    } else newPosition = 0;
                }
                if (_this.velocity !== 0) momentumDuration = Math.abs((newPosition - _this.positions.current) / _this.velocity);
                _this.setWrapperTranslate(newPosition);
                _this.setWrapperTransition(momentumDuration);
                if (params.momentumBounce && doBounce) {
                    _this.wrapperTransitionEnd(function() {
                        if (!allowMomentumBounce) return;
                        if (params.onMomentumBounce) _this.fireCallback(params.onMomentumBounce, _this);
                        _this.callPlugins('onMomentumBounce');
                        _this.setWrapperTranslate(afterBouncePosition);
                        _this.setWrapperTransition(300);
                    });
                }
                _this.updateActiveSlide(newPosition);
            }
            if (!params.freeModeFluid || timeDiff >= 300) _this.updateActiveSlide(_this.positions.current);
            if (params.onTouchEnd) _this.fireCallback(params.onTouchEnd, _this);
            _this.callPlugins('onTouchEnd');
            return;
        }
        direction = diff < 0 ? 'toNext': 'toPrev';
        var sw=$('.swiper-wrapper');
        var a=parseInt(sw.attr('n'));
        var hc=parseInt(sw.attr('hc'));
        if (direction === 'toNext' && (timeDiff <= 300)) {
            if (diffAbs < 30 || !params.shortSwipes) { _this.swipeReset(); }
            else{
                if(a==parseInt(header.pageNum) && hc==1){// 拖动可加载下一话 by:迟海
                    _this.swipeNext(true);
                    _this.JCP2h('1');
                }else{
                    _this.swipeNext(true);
                }
            }
        }
        if (direction === 'toPrev' && (timeDiff <= 300)) {
            if (diffAbs < 30 || !params.shortSwipes) { _this.swipeReset(); }
            else{
                if(a==1 && hc==1){// 拖动可加载上一话 by:迟海
                    _this.swipePrev(true);
                    _this.JCP2h('0');
                }else{
                    _this.swipePrev(true);
                }
            }
        }
        var targetSlideSize = 0;
        if (params.slidesPerView === 'auto') {
            var currentPosition = Math.abs(_this.getWrapperTranslate());
            var slidesOffset = 0;
            var _slideSize;
            for (var i = 0; i < _this.slides.length; i++) {
                _slideSize = isH ? _this.slides[i].getWidth(true, params.roundLengths) : _this.slides[i].getHeight(true, params.roundLengths);
                slidesOffset += _slideSize;
                if (slidesOffset > currentPosition) {
                    targetSlideSize = _slideSize;
                    break;
                }
            }
            if (targetSlideSize > containerSize) targetSlideSize = containerSize;
        } else {
            targetSlideSize = slideSize * params.slidesPerView;
        }
        if (direction === 'toNext' && (timeDiff > 300)) {
            if (diffAbs >= targetSlideSize * params.longSwipesRatio) {
                if(a==1 && hc==1){// 拖动可加载下一话 by:迟海
                    _this.swipePrev();
                    _this.JCP2h('1');
                }else{
                    _this.swipeNext(true);
                }
            } else {
                _this.swipeReset();
            }
        }
        if (direction === 'toPrev' && (timeDiff > 300)) {
            if (diffAbs >= targetSlideSize * params.longSwipesRatio) {
                _this.swipePrev(true);
            } else {
                _this.swipeReset();
            }
        }
        if (params.onTouchEnd) _this.fireCallback(params.onTouchEnd, _this);
        _this.callPlugins('onTouchEnd');
    }
    var hc2='1';
    _this.pnUnit=function(){
        var ssw=$('.swiper-wrapper');
        var nnn=parseInt(ssw.attr('n'));
        var ppp=parseInt(header.pageNum),hcc;
        var isnp=nnn==1||nnn==ppp;
        if(isnp){
            hcc='1';
        }else{
            hcc='0';
        }
        if(params.rm=='1'){
            if(hc2=='1'){
                hcc='0';
                hc2='0';
            }
        }
        ssw.attr('hc',hcc);
    }
    function noSwipingSlide(el) {
        var noSwiping = false;
        do {
            if (el.className.indexOf(params.noSwipingClass) > -1) {
                noSwiping = true;
            }
            el = el.parentElement;
        } while (! noSwiping && el . parentElement && el . className . indexOf ( params . wrapperClass ) === -1);
        if (!noSwiping && el.className.indexOf(params.wrapperClass) > -1 && el.className.indexOf(params.noSwipingClass) > -1) noSwiping = true;
        return noSwiping;
    }
    function addClassToHtmlString(klass, outerHtml) {
        var par = document.createElement('div');
        var child;
        par.innerHTML = outerHtml;
        child = par.firstChild;
        child.className += ' ' + klass;
        return child.outerHTML;
    }
    _this.swipeNext = function(internal) {
        if (!internal && params.loop) _this.fixLoop();
        if (!internal && params.autoplay) _this.stopAutoplay(true);
        _this.callPlugins('onSwipeNext');
        var currentPosition = _this.getWrapperTranslate();
        var newPosition = currentPosition;
        if (params.slidesPerView === 'auto') {
            for (var i = 0; i < _this.snapGrid.length; i++) {
                if ( - currentPosition >= _this.snapGrid[i] && -currentPosition < _this.snapGrid[i + 1]) {
                    newPosition = -_this.snapGrid[i + 1];
                    break;
                }
            }
        } else {
            var groupSize = slideSize * params.slidesPerGroup;
            newPosition = -(Math.floor(Math.abs(currentPosition) / Math.floor(groupSize)) * groupSize + groupSize);
        }
        if (newPosition < -maxWrapperPosition()) {
            newPosition = -maxWrapperPosition();
        }
        if (newPosition === currentPosition) return false;
        swipeToPosition(newPosition, 'next');
        return true;
    };
    _this.toTop=function(ih){
        var w=parseInt($(window).height());
        var h=parseInt($(window).height());
        var pt='1px';
        if(ih<h){
            pt=h/2-ih/2+'px';
        }else{
            $(mdiv).css({'margin-bottom':pt});
        }
        $(selector).animate({'margin-top':pt,'height':ih},100);
    }
    _this.toBS=function(sf,iw,ih){
        var w=parseInt($(window).height());
        var h=parseInt($(window).height());
        var pt='1px';
        if(ih<h){
            pt=h/2-ih/2+'px';
        }else{
            $(mdiv).css({'margin-bottom':pt});
        }
        $(selector).animate({'margin-top':pt,'height':ih},229);
    }
    _this.toCen=function(ih){
        var sw=$('.swiper-wrapper');
        var imgn=parseInt(sw.attr('n'))-1;
        var h=$(window).height();
        var pt='5px';
        for(var i=0;i<parseInt(header.pageNum);i++){
            if(i!=imgn){
                var swdiv=sw.find('div').eq(i);
                var ih=parseInt(swdiv.find('img').attr('height'));
                if(ih<h){
                    pt=h/2-ih/2+'px';
                }else{
                    swdiv.css({'margin-bottom':pt});
                }
                swdiv.css({'margin-top':pt});
            }
        }
    }
    _this.swipePrev = function(internal) {
        if (!internal && params.loop) _this.fixLoop();
        if (!internal && params.autoplay) _this.stopAutoplay(true);
        _this.callPlugins('onSwipePrev');
        var currentPosition = Math.ceil(_this.getWrapperTranslate());
        var newPosition;
        if (params.slidesPerView === 'auto') {
            newPosition = 0;
            for (var i = 1; i < _this.snapGrid.length; i++) {
                if ( - currentPosition === _this.snapGrid[i]) {
                    newPosition = -_this.snapGrid[i - 1];
                    break;
                }
                if ( - currentPosition > _this.snapGrid[i] && -currentPosition < _this.snapGrid[i + 1]) {
                    newPosition = -_this.snapGrid[i];
                    break;
                }
            }
        } else {
            var groupSize = slideSize * params.slidesPerGroup;
            newPosition = -(Math.ceil( - currentPosition / groupSize) - 1) * groupSize;
        }
        if (newPosition > 0) newPosition = 0;
        if (newPosition === currentPosition) return false;
        swipeToPosition(newPosition, 'prev');
        return true;
    };
    var xywh=function(xx,yy,ww,hh) {
        var w=$(window).width();
        var h=$(window).height();
        var H='x';
        if (w>h&&ww<hh) {
            H='y';
        }
        var J,G,L;
        G=1;
        L=[];
        if (H==='x') {
            G=w/ww;
        }else{
            G=h/hh;
        }
        L[2]=G*ww;
        L[3]=G*hh;
        J=w/L[2];
        L[3]=J*L[3];
        L[2]=w;
        G=w/ww;
        L[0]=Math.abs(G*xx);
        L[1]=Math.abs(G*yy);
        L[4]=G;
        return L;
    }
    _this.framego=function(ii,hp){
        var l=function(C, E, D) {
            var w='-webkit-'+E,m='-moz-'+E, s='-ms-'+E,o='-o-'+E;
            C.css({w:D,m:D,s:D,o:D,E:D});
        }
        var sw=$('.swiper-wrapper');
        var L=sw.find('div');
        var F=L.find('img');
        if(F.length>1){
            for(var fi=1;fi<F.length;fi++){
                F.eq(fi).remove();
            }
        }
        F.css('position','absolute');
        l(F, 'transform','scale('+1+')');
        var C,M,ing;
        ing=parseInt(sw.attr('n'))-1;
        M=cmpage[ing]['frame'][ii]['rect'].split(',');
        var ww=parseInt(F.attr('width'));
        var hh=parseInt(F.attr('height'));
        if(hp=='_Giao_'){
            var imgW=parseInt(F.attr('owidth'));
            var imgH=parseInt(F.attr('oheight'));
            var r=wh(imgW,imgH);
            F.attr({'width':r[0],'height':r[1]});
            ww=r[0];
            hh=r[1];
        }
        M=xywh((M[0]*ww).toFixed(4),(M[1]*hh).toFixed(4),(M[2]*ww).toFixed(4),(M[3]*hh).toFixed(4));
        sw.css({display:'block','left':0+'px','top':'0px',overflow:'hidden'});
        L.css({display:'block','left':0+'px','top':'0px',overflow:'hidden'});
        sw.animate({'width':M[2],'height':M[3]},200);
        L.animate({'width':M[2],'height':M[3]},200);
        var num=parseInt(ii);
        F.attr('sfnum',num);
        F.animate({'width':ww*M[4],'height':hh*M[4],'left':'-'+M[0]+'px','top':'-'+M[1]+'px'},200);
        F.show();
        _this.toBS(num,M[2],M[3]);
    };
    _this.imgfixed=function(pn){
        var dmcm=$('.swiper-wrapper');
        var fy=dmcm.attr('fy');
        var imgNow=parseInt(dmcm.attr('n'));
        var pageNum=parseInt(header.pageNum);
        var swd=$('.swiper-wrapper>div');
        var sd=swd;
        var img=sd.find('img');
        var F,sf,A;
        F=parseInt(img.attr('f'));
        sf=parseInt(img.attr('sfnum'));
        if(sf==-1&&imgNow==1){
            dmcm.attr({owidth:dmcm.css('width'),oheight:dmcm.css('height')});
        }
        if(sf==-1){
            sd.attr({'owidth':sd.css('width'),'oheight':sd.css('height')}).show();
            img.show();
        }
        if(pn=='1'){
            imgNow+=1;
            sf+=1;
        }else{
            imgNow=imgNow-1;
            sf=sf-1;
        }
        if(fy=='3'){
            if(imgNow>0 && imgNow<=pageNum){
                if(F>1){
                    if(sf<-1||sf>=F){
                        A='A';
                    }else{
                        if(sf==-1){
                            A='B';
                        }else{
                            A='C';
                        }
                    }
                }else{
                    A='A';
                }
            }else{
                if(imgNow>pageNum){
                    if(F>1){
                        if(sf<-1){
                            A='A';
                        }else if(sf==-1){
                            A='B';
                        }else if(sf>=F){
                            A='D';
                        }else{
                            A='C';
                        }
                    }else{
                        A='D';
                    }
                }
                if(imgNow==0){
                    if(F>1){
                        if(sf<-1){
                            A='E';
                        }else if(sf==-1){
                            A='B';
                        }else{
                            A='C';
                        }
                    }else{
                        A='E';
                    }
                }
            }
            if(A=='A'){
                img.attr('sfnum','-1');
            }else if(A=='B'){
                img.attr('sfnum',sf);
            }
            if(A=='A' || A=='B'){
                img.attr('style','');
                dmcm.attr('style','');
                sd.attr('style','');
                dmcm.css({width:dmcm.attr('owidth'),height:dmcm.attr('oheight')});
                sd.css({width:sd.attr('owidth'),height:sd.attr('oheight')});
                var B;
                if(sf!=-1){
                    var ig=imgNow-1;
                    dmcm.attr('n',imgNow);
                    header.imgNow=ig;
                    var ai=$('.allimgs>img');
                    var newimg=ai.eq(ig);
                    img.attr('src',newimg.attr('src'));
                    img.attr('width',newimg.attr('width'));
                    img.attr('height',newimg.attr('height'));
                    img.attr('f',newimg.attr('f'));
                    img.attr('sfnum','-1');
                    if(pn=='0'){
                        F=parseInt(img.attr('f'));
                        var lf=parseInt(img.attr('f'))-1;
                        if(F>1){
                            img.attr('sfnum',lf);
                            _this.framego(lf,'');
                        }else{
                            B='G';
                        }
                    }else{
                        B='G';
                    }
                }else{
                    B='G';
                }
                if(B=='G'){
                    if(pn=='0' && sf<0){
                        imgNow+=1;
                    }
                    var ih=parseInt(swd.find('img').attr('height'));
                    _this.toTop(ih);
                    womendi('.swiper-slide-active>img','1','t','fadeIn','1');
                }
                $('#nowhere').html(imgNow);
                $(params.dmNow).html(imgNow);
            }else if(A=='C'){
                _this.framego(sf,'');
            }
        }
    }
    _this.imgframe=function(pn){
        var dmcm=$('.swiper-wrapper');
        var fy=dmcm.attr('fy');
        var imgNow=parseInt(dmcm.attr('n'));
        var pageNum=parseInt(header.pageNum);
        var swd=$('.swiper-wrapper>div');
        var sd=swd;
        var img=sd.find('img');
        var F,sf,A;
        F=parseInt(img.attr('f'));
        sf=parseInt(img.attr('sfnum'));
        if(sf==-1&&imgNow==1){
            dmcm.attr({owidth:dmcm.css('width'),oheight:dmcm.css('height')});
        }
        if(sf==-1){
            sd.attr({'owidth':sd.css('width'),'oheight':sd.css('height')}).show();
            img.show();
        }
        if(pn=='1'){
            imgNow+=1;
            sf+=1;
        }else{
            imgNow=imgNow-1;
            sf=sf-1;
        }
        if(fy=='4'){
            if(imgNow>0 && imgNow<=pageNum){
                if(F>1){
                    if(sf<=-1){
                        A='A';
                    }else if(sf>=F){
                        A='B';
                    }else{
                        A='C';
                    }
                }else{
                    A='A';
                }
            }else{
                if(imgNow>pageNum){
                    if(F>1){
                        if(sf<=-1){
                            A='A';
                        }else if(sf>=F){
                            A='D';
                        }else{
                            A='C';
                        }
                    }else{
                        A='D';
                    }
                }
                if(imgNow==0){
                    if(F>1){
                        if(sf<=-1){
                            A='E';
                        }else{
                            A='C';
                        }
                    }else{
                        A='E';
                    }
                }
            }
            if(A=='C'){
                _this.framego(sf,'');
            }
            if(A=='A' || A=='B'){
                img.attr({'style':'','src':''}).hide();
                dmcm.attr('style','');
                sd.attr('style','');
                dmcm.css({width:dmcm.attr('owidth'),height:dmcm.attr('oheight')});
                sd.css({width:sd.attr('owidth'),height:sd.attr('oheight')});
                var ig=imgNow-1;
                _this.JCP2num(imgNow);
                var ai=$('.allimgs>img');
                var newimg=ai.eq(ig);
                img.attr('src',newimg.attr('src'));
                img.attr('width',newimg.attr('width'));
                img.attr('height',newimg.attr('height'));
                img.attr('f',newimg.attr('f'));
                img.attr('sfnum','0');
                var B;
                F=parseInt(img.attr('f'));
                if(pn=='1'){
                    if(F>1){
                        _this.framego(0,'');
                    }else{
                        B='G';
                    }
                }else{
                    if(F>1){
                        var lf=F-1;
                        img.attr('sfnum',lf);
                        _this.framego(lf,'');
                    }else{
                        B='G';
                    }
                }
                if(B=='G'){
                    img.show();
                    var ih=parseInt(img.attr('height'));
                    _this.toTop(ih);
                    womendi('.swiper-slide-active>img','1','t','fadeIn','1');
                }
            }
        }
    }
    _this.swipeReset = function() {
        _this.callPlugins('onSwipeReset');
        var currentPosition = _this.getWrapperTranslate();
        var groupSize = slideSize * params.slidesPerGroup;
        var newPosition;
        var maxPosition = -maxWrapperPosition();
        if (params.slidesPerView === 'auto') {
            newPosition = 0;
            for (var i = 0; i < _this.snapGrid.length; i++) {
                if ( - currentPosition === _this.snapGrid[i]) return;
                if ( - currentPosition >= _this.snapGrid[i] && -currentPosition < _this.snapGrid[i + 1]) {
                    if (_this.positions.diff > 0) newPosition = -_this.snapGrid[i + 1];
                    else newPosition = -_this.snapGrid[i];
                    break;
                }
            }
            if ( - currentPosition >= _this.snapGrid[_this.snapGrid.length - 1]) newPosition = -_this.snapGrid[_this.snapGrid.length - 1];
            if (currentPosition <= -maxWrapperPosition()) newPosition = -maxWrapperPosition();
        } else {
            newPosition = currentPosition < 0 ? Math.round(currentPosition / groupSize) * groupSize: 0;
        }
        if (params.scrollContainer) {
            newPosition = currentPosition < 0 ? currentPosition: 0;
        }
        if (newPosition < -maxWrapperPosition()) {
            newPosition = -maxWrapperPosition();
        }
        if (params.scrollContainer && (containerSize > slideSize)) {
            newPosition = 0;
        }
        if (newPosition === currentPosition) return false;
        return true;
    };
    _this.swipeTo = function(index, speed, runCallbacks) {
        index = parseInt(index, 10);
        _this.callPlugins('onSwipeTo', {
            index: index,
            speed: speed
        });
        if (params.loop) index = index + _this.loopedSlides;
        var currentPosition = _this.getWrapperTranslate();
        if (index > (_this.slides.length - 1) || index < 0) return;
        var newPosition;
        if (params.slidesPerView === 'auto') {
            newPosition = -_this.slidesGrid[index];
        } else {
            newPosition = -index * slideSize;
        }
        if (newPosition < -maxWrapperPosition()) {
            newPosition = -maxWrapperPosition();
        }
        if (newPosition === currentPosition) return false;
        runCallbacks = runCallbacks === false ? false: true;
        swipeToPosition(newPosition, 'to', {
            index: index,
            speed: speed,
            runCallbacks: runCallbacks
        });
        return true;
    };
    function swipeToPosition(newPosition, action, toOptions) {
        var speed = (action === 'to' && toOptions.speed >= 0) ? toOptions.speed: params.speed;
        var timeOld = +new Date();
        function anim() {
            var timeNew = +new Date();
            var time = timeNew - timeOld;
            currentPosition += animationStep * time / (1000 / 60);
            condition = direction === 'toNext' ? currentPosition > newPosition: currentPosition < newPosition;
            if (condition) {
                _this.setWrapperTranslate(Math.round(currentPosition));
                _this._DOMAnimating = true;
                window.setTimeout(function() {
                    anim();
                },1);
            } else {
                if (params.onSlideChangeEnd) {
                    if (action === 'to') {
                        if (toOptions.runCallbacks === true) _this.fireCallback(params.onSlideChangeEnd, _this);
                    } else {
                        _this.fireCallback(params.onSlideChangeEnd, _this);
                    }
                }
                _this.setWrapperTranslate(newPosition);
                _this._DOMAnimating = false;
            }
        }
        if(/ie/i.test(navigator.userAgent.toLowerCase())){
            _this.support.transitions=true;
            params.DOMAnimation=false;
        }
        if (_this.support.transitions || !params.DOMAnimation) {
            _this.setWrapperTranslate(newPosition);
            _this.setWrapperTransition(speed);
        } else {
            var currentPosition = _this.getWrapperTranslate();
            var animationStep = Math.ceil((newPosition - currentPosition) / speed * (1000 / 60));
            var animationStep=0;
            var direction = currentPosition > newPosition ? 'toNext': 'toPrev';
            var condition = direction === 'toNext' ? currentPosition > newPosition: currentPosition < newPosition;
            if (_this._DOMAnimating) return;
            anim();
        }
        _this.updateActiveSlide(newPosition);
        if (params.onSlideNext && action === 'next') {
            _this.fireCallback(params.onSlideNext, _this, newPosition);
        }
        if (params.onSlidePrev && action === 'prev') {
            _this.fireCallback(params.onSlidePrev, _this, newPosition);
        }
        if (params.onSlideReset && action === 'reset') {
            _this.fireCallback(params.onSlideReset, _this, newPosition);
        }
        if (action === 'next' || action === 'prev' || (action === 'to' && toOptions.runCallbacks === true))
            slideChangeCallbacks(action);
    }
    _this._queueStartCallbacks = false;
    _this._queueEndCallbacks = false;
    $('#nowhere').remove();$('#nownum').remove();
    $('<div id="nownum"></div><div id="nowhere"></div>').appendTo(selector);
    $('#nownum').css({'top':'-1999px','left':'-1999px','display':'none'});
    $('#nowhere').css({'top':'-999px','left':'-999px','display':'none'});
    function slideChangeCallbacks(direction) {
        _this.callPlugins('onSlideChangeStart');
        if (params.onSlideChangeStart) {
            if (params.queueStartCallbacks && _this.support.transitions) {
                if (_this._queueStartCallbacks) return;
                _this._queueStartCallbacks = true;
                _this.fireCallback(params.onSlideChangeStart, _this, direction);
                _this.wrapperTransitionEnd(function() {
                    _this._queueStartCallbacks = false;
                });
            } else _this.fireCallback(params.onSlideChangeStart, _this, direction);
        }
        if (params.onSlideChangeEnd) {
            if (_this.support.transitions) {
                if (params.queueEndCallbacks) {
                    if (_this._queueEndCallbacks) return;
                    _this._queueEndCallbacks = true;
                    _this.wrapperTransitionEnd(function(swiper) {
                        _this.fireCallback(params.onSlideChangeEnd, swiper, direction);
                    });
                } else {
                    _this.wrapperTransitionEnd(function(swiper) {
                        _this.fireCallback(params.onSlideChangeEnd, swiper, direction);
                    });
                }
            } else {
                if (!params.DOMAnimation) {
                    setTimeout(function() {
                            _this.fireCallback(params.onSlideChangeEnd, _this, direction);
                        },
                        10);
                }
            }
        }
    }
    _this.updateActiveSlide = function(position) {
        if (!_this.initialized) return;
        if (_this.slides.length === 0) return;
        _this.previousIndex = _this.activeIndex;
        if (typeof position === 'undefined') position = _this.getWrapperTranslate();
        if (position > 0) position = 0;
        var i;
        if (params.slidesPerView === 'auto') {
            var slidesOffset = 0;
            _this.activeIndex = _this.slidesGrid.indexOf( - position);
            if (_this.activeIndex < 0) {
                for (i = 0; i < _this.slidesGrid.length - 1; i++) {
                    if ( - position > _this.slidesGrid[i] && -position < _this.slidesGrid[i + 1]) {
                        break;
                    }
                }
                var leftDistance = Math.abs(_this.slidesGrid[i] + position);
                var rightDistance = Math.abs(_this.slidesGrid[i + 1] + position);
                if (leftDistance <= rightDistance) _this.activeIndex = i;
                else _this.activeIndex = i + 1;
            }
        } else {
            _this.activeIndex = Math[params.visibilityFullFit ? 'ceil': 'round']( - position / slideSize);
        }

        if(_this.activeIndex>0 && _this.activeIndex < _this.slides.length){
            header.tohref=0;
        }
        if (_this.activeIndex === _this.slides.length){
            _this.activeIndex = _this.slides.length - 1;
            header.tohref=2;
        }
        if (_this.activeIndex < 0){
            _this.activeIndex = 0;
            header.tohref=1;
        }
        if (!_this.slides[_this.activeIndex]) return;
        _this.calcVisibleSlides(position);
        var v99m='_Giao_'+'2'+'0'+'1'+'5'+'0'+'3'+'3'+'1';
        if (_this.support.classList) {
            var slide;
            for (i = 0; i < _this.slides.length; i++) {
                slide = _this.slides[i];
                slide.classList.remove(params.slideActiveClass);
                if (_this.visibleSlides.indexOf(slide) >= 0) {
                    slide.classList.add(params.slideVisibleClass);
                } else {
                    slide.classList.remove(params.slideVisibleClass);
                }
            }
            _this.slides[_this.activeIndex].classList.add(params.slideActiveClass);
        } else {
            var activeClassRegexp = new RegExp('\\s*' + params.slideActiveClass);
            var inViewClassRegexp = new RegExp('\\s*' + params.slideVisibleClass);
            for (i = 0; i < _this.slides.length; i++) {
                _this.slides[i].className = _this.slides[i].className.replace(activeClassRegexp, '').replace(inViewClassRegexp, '');
                if (_this.visibleSlides.indexOf(_this.slides[i]) >= 0) {
                    _this.slides[i].className += ' ' + params.slideVisibleClass;
                }
            }
            _this.slides[_this.activeIndex].className += ' ' + params.slideActiveClass;
        }
        if (params.loop) {
            var ls = _this.loopedSlides;
            _this.activeLoopIndex = _this.activeIndex - ls;
            if (_this.activeLoopIndex >= _this.slides.length - ls * 2) {
                _this.activeLoopIndex = _this.slides.length - ls * 2 - _this.activeLoopIndex;
            }
            if (_this.activeLoopIndex < 0) {
                _this.activeLoopIndex = _this.slides.length - ls * 2 + _this.activeLoopIndex;
            }
            if (_this.activeLoopIndex < 0) _this.activeLoopIndex = 0;
        } else {
            _this.activeLoopIndex = _this.activeIndex;
        }
        if (params.pagination) {
            _this.updatePagination(position);
        }
        params.rm='0';
        var iii=parseInt(_this.activeIndex),hc1;
        $('#nowhere').html(iii+1);
        if(params.mode!='vertical'){
            _this.pnUnit();
            var sw=$('.swiper-wrapper>div').eq(iii);
            sw.css('margin-top','').show();
            var M='I',img=sw.find('img');
            img.show();
            var isurl=img.attr('src');
            if(!isurl){
                img.attr('src',urls[iii]);
            }
            if(params.toNum!='' && parseInt(params.toNum)>0 && iii==0 && toOne==1){
                img.attr('src','');
                if(parseInt(params.toNum)==1 && params.frame==''){
                    img.attr('src',urls[iii]);
                }
            }
            var ignow=iii+1;
            var arr=[iii-1,iii+2,iii+3];
            M='G';
            if(ignow%4==0){
                var arr=[iii-1,iii+2,iii+3];
                M='G';
            }else if(toOne==0 && iii==0){
                var arr=[iii-1,iii+1,iii+2];
                M='G';
            }
            if(params.toNum!='' && parseInt(params.toNum)>0 && iii==0 && toOne==1){
                img.hide();
                if(parseInt(params.toNum)==1){
                    img.show();
                    toOne=0;
                    var arr=[iii-1,iii+1,iii+2];
                    M='G';
                }
            }else if(params.toNum!='' && parseInt(params.toNum)>0 && iii>0 && toOne==1){
                var arr=[iii-1,iii+1,iii+2];
                M='G';
                toOne=0;
            }else if(params.toNum!='' && parseInt(params.toNum)==1 && toOne==1){
                var arr=[iii-1,iii+1,iii+2];
                img.show();
                M='G';
                toOne=0;
            }
            if(M=='G'){
                var img2,isurl;
                for(var i=0;i<arr.length;i++){
                    if(arr[i]>=0  && arr[i]<=parseInt(_this.slides.length)){
                        img2=$('.swiper-wrapper>div').eq(arr[i]).find('img');
                        isurl=img2.attr('src');
                        if(!isurl){
                            img2.attr('src',urls[arr[i]]);
                        }
                    }
                }
            }
            iii+=1;
            _this.JCP2num(iii);
            var w=$(window).width(),G,h=$(window).height();
            var r=wh(parseInt(cmpage[iii-1]['mobileImgWidth']),parseInt(cmpage[iii-1]['mobileImgHeight']));
            img.attr({'width':r[0],'height':r[1]});
            $('.swiper-wrapper>div').eq(iii-1).css({'height':r[1]});
            $(mdiv).css({width:w+'px',overflow:'hidden'});
            if(params.frame=='3' || params.frame=='4'){
                img.hide();
                var F=parseInt(img.attr('f'));
                if(params.frame=='4'){
                    var F=parseInt(img.attr('f'));
                    if(F>1){
                        _this.framego(0,'');
                        img.show();
                    }else{
                        G='iao';
                    }
                }else{
                    G='iao';
                }
            }else{
                G='iao';
            }
            if(G=='iao'){
                _this.toTop(r[1]);
                womendi('.swiper-slide-active>img','1','t','animate','1');
                img.show();
            }
        }
    };
    _this.createPagination = function(firstInit) {
        if (params.paginationClickable && _this.paginationButtons) {
            removePaginationEvents();
        }
        _this.paginationContainer = params.pagination.nodeType ? params.pagination: $$(params.pagination)[0];
        if (params.createPagination) {
            var paginationHTML = '';
            var numOfSlides = _this.slides.length;
            var numOfButtons = numOfSlides;
            if (params.loop) numOfButtons -= _this.loopedSlides * 2;
            for (var i = 0; i < numOfButtons; i++) {
                paginationHTML += '<' + params.paginationElement + ' class="' + params.paginationElementClass + '"></' + params.paginationElement + '>';
            }
            _this.paginationContainer.innerHTML = paginationHTML;
        }
        _this.paginationButtons = $$('.' + params.paginationElementClass, _this.paginationContainer);
        if (!firstInit) _this.updatePagination();
        _this.callPlugins('onCreatePagination');
        if (params.paginationClickable) {
            addPaginationEvents();
        }
    };
    function removePaginationEvents() {
        var pagers = _this.paginationButtons;
        if (pagers) {
            for (var i = 0; i < pagers.length; i++) {
                _this.h.removeEventListener(pagers[i], 'click', paginationClick);
            }
        }
    }
    function addPaginationEvents() {
        var pagers = _this.paginationButtons;
        if (pagers) {
            for (var i = 0; i < pagers.length; i++) {
                _this.h.addEventListener(pagers[i], 'click', paginationClick);
            }
        }
    }
    function paginationClick(e) {
        var index;
        var target = e.target || e.srcElement;
        var pagers = _this.paginationButtons;
        for (var i = 0; i < pagers.length; i++) {
            if (target === pagers[i]) index = i;
        }
        _this.swipeTo(index);
    }
    _this.updatePagination = function(position) {
        if (!params.pagination) return;
        if (_this.slides.length < 1) return;
        var activePagers = $$('.' + params.paginationActiveClass, _this.paginationContainer);
        if (!activePagers) return;
        var pagers = _this.paginationButtons;
        if (pagers.length === 0) return;
        for (var i = 0; i < pagers.length; i++) {
            pagers[i].className = params.paginationElementClass;
        }
        var indexOffset = params.loop ? _this.loopedSlides: 0;
        if (params.paginationAsRange) {
            if (!_this.visibleSlides) _this.calcVisibleSlides(position);
            var visibleIndexes = [];
            var j;
            for (j = 0; j < _this.visibleSlides.length; j++) {
                var visIndex = _this.slides.indexOf(_this.visibleSlides[j]) - indexOffset;
                if (params.loop && visIndex < 0) {
                    visIndex = _this.slides.length - _this.loopedSlides * 2 + visIndex;
                }
                if (params.loop && visIndex >= _this.slides.length - _this.loopedSlides * 2) {
                    visIndex = _this.slides.length - _this.loopedSlides * 2 - visIndex;
                    visIndex = Math.abs(visIndex);
                }
                visibleIndexes.push(visIndex);
            }
            for (j = 0; j < visibleIndexes.length; j++) {
                if (pagers[visibleIndexes[j]]) pagers[visibleIndexes[j]].className += ' ' + params.paginationVisibleClass;
            }
            if (params.loop) {
                if (pagers[_this.activeLoopIndex] !== undefined) {
                    pagers[_this.activeLoopIndex].className += ' ' + params.paginationActiveClass;
                }
            } else {
                pagers[_this.activeIndex].className += ' ' + params.paginationActiveClass;
            }
        } else {
            if (params.loop) {
                if (pagers[_this.activeLoopIndex]) pagers[_this.activeLoopIndex].className += ' ' + params.paginationActiveClass + ' ' + params.paginationVisibleClass;
            } else {
                pagers[_this.activeIndex].className += ' ' + params.paginationActiveClass + ' ' + params.paginationVisibleClass;
            }
        }
    };
    _this.calcVisibleSlides = function(position) {
        var visibleSlides = [];
        var _slideLeft = 0,
            _slideSize = 0,
            _slideRight = 0;
        if (isH && _this.wrapperLeft > 0) position = position + _this.wrapperLeft;
        if (!isH && _this.wrapperTop > 0) position = position + _this.wrapperTop;
        for (var i = 0; i < _this.slides.length; i++) {
            _slideLeft += _slideSize;
            if (params.slidesPerView === 'auto') _slideSize = isH ? _this.h.getWidth(_this.slides[i], true, params.roundLengths) : _this.h.getHeight(_this.slides[i], true, params.roundLengths);
            else _slideSize = slideSize;
            _slideRight = _slideLeft + _slideSize;
            var isVisibile = false;
            if (params.visibilityFullFit) {
                if (_slideLeft >= -position && _slideRight <= -position + containerSize) isVisibile = true;
                if (_slideLeft <= -position && _slideRight >= -position + containerSize) isVisibile = true;
            } else {
                if (_slideRight > -position && _slideRight <= (( - position + containerSize))) isVisibile = true;
                if (_slideLeft >= -position && _slideLeft < (( - position + containerSize))) isVisibile = true;
                if (_slideLeft < -position && _slideRight > (( - position + containerSize))) isVisibile = true;
            }
            if (isVisibile) visibleSlides.push(_this.slides[i]);
        }
        if (visibleSlides.length === 0) visibleSlides = [_this.slides[_this.activeIndex]];
        _this.visibleSlides = visibleSlides;
    };
    var autoplayTimeoutId, autoplayIntervalId;
    _this.startAutoplay = function() {
        if (_this.support.transitions) {
            if (typeof autoplayTimeoutId !== 'undefined') return false;
            if (!params.autoplay) return;
            _this.callPlugins('onAutoplayStart');
            if (params.onAutoplayStart) _this.fireCallback(params.onAutoplayStart, _this);
            autoplay();
        } else {
            if (typeof autoplayIntervalId !== 'undefined') return false;
            if (!params.autoplay) return;
            _this.callPlugins('onAutoplayStart');
            if (params.onAutoplayStart) _this.fireCallback(params.onAutoplayStart, _this);
            autoplayIntervalId = setInterval(function() {
                    if (params.loop) {
                        _this.fixLoop();
                        _this.swipeNext(true);
                    } else if (!_this.swipeNext(true)) {
                        if (!params.autoplayStopOnLast) _this.swipeTo(0);
                        else {
                            clearInterval(autoplayIntervalId);
                            autoplayIntervalId = undefined;
                        }
                    }
                },
                params.autoplay);
        }
    };
    document.onkeydown = function (event) {
        event = event || window.event;
        var kc=event.keyCode;
        switch(kc){
            case 37:_this.go2f('0');break;
            case 39:_this.go2f('1');break;
        }
    }
    _this.stopAutoplay = function(internal) {
        if (_this.support.transitions) {
            if (!autoplayTimeoutId) return;
            if (autoplayTimeoutId) clearTimeout(autoplayTimeoutId);
            autoplayTimeoutId = undefined;
            if (internal && !params.autoplayDisableOnInteraction) {
                _this.wrapperTransitionEnd(function() {
                    autoplay();
                });
            }
            _this.callPlugins('onAutoplayStop');
            if (params.onAutoplayStop) _this.fireCallback(params.onAutoplayStop, _this);
        } else {
            if (autoplayIntervalId) clearInterval(autoplayIntervalId);
            autoplayIntervalId = undefined;
            _this.callPlugins('onAutoplayStop');
            if (params.onAutoplayStop) _this.fireCallback(params.onAutoplayStop, _this);
        }
    };
    function autoplay() {
        autoplayTimeoutId = setTimeout(function() {
                if (params.loop) {
                    _this.fixLoop();
                    _this.swipeNext(true);
                } else if (!_this.swipeNext(true)) {
                    if (!params.autoplayStopOnLast) _this.swipeTo(0);
                    else {
                        clearTimeout(autoplayTimeoutId);
                        autoplayTimeoutId = undefined;
                    }
                }
                _this.wrapperTransitionEnd(function() {
                    if (typeof autoplayTimeoutId !== 'undefined') autoplay();
                });
            },
            params.autoplay);
    }
    _this.loopCreated = false;
    _this.removeLoopedSlides = function() {
        if (_this.loopCreated) {
            for (var i = 0; i < _this.slides.length; i++) {
                if (_this.slides[i].getData('looped') === true) _this.wrapper.removeChild(_this.slides[i]);
            }
        }
    };
    header.tcnum=1;
    _this.tc=function(){
        var tc=parseInt(header.tcnum);
        if(params.mode=='vertical'){
            return 0;
        }else{
            if((params.frame=='3' || params.frame=='4') && tc==1){
                return 1;
            }else{
                return 0;
            }
        }
    }
    _this.createLoop = function() {
        if (_this.slides.length === 0) return;
        if (params.slidesPerView === 'auto') {
            _this.loopedSlides = params.loopedSlides || 1;
        } else {
            _this.loopedSlides = params.slidesPerView + params.loopAdditionalSlides;
        }
        if (_this.loopedSlides > _this.slides.length) {
            _this.loopedSlides = _this.slides.length;
        }
        var slideFirstHTML = '',
            slideLastHTML = '',
            i;
        var slidesSetFullHTML = '';
        var numSlides = _this.slides.length;
        var fullSlideSets = Math.floor(_this.loopedSlides / numSlides);
        var remainderSlides = _this.loopedSlides % numSlides;
        for (i = 0; i < (fullSlideSets * numSlides); i++) {
            var j = i;
            if (i >= numSlides) {
                var over = Math.floor(i / numSlides);
                j = i - (numSlides * over);
            }
            slidesSetFullHTML += _this.slides[j].outerHTML;
        }
        for (i = 0; i < remainderSlides; i++) {
            slideLastHTML += addClassToHtmlString(params.slideDuplicateClass, _this.slides[i].outerHTML);
        }
        for (i = numSlides - remainderSlides; i < numSlides; i++) {
            slideFirstHTML += addClassToHtmlString(params.slideDuplicateClass, _this.slides[i].outerHTML);
        }
        var slides = slideFirstHTML + slidesSetFullHTML + wrapper.innerHTML + slidesSetFullHTML + slideLastHTML;
        wrapper.innerHTML = slides;
        _this.loopCreated = true;
        _this.calcSlides();
        for (i = 0; i < _this.slides.length; i++) {
            if (i < _this.loopedSlides || i >= _this.slides.length - _this.loopedSlides) _this.slides[i].setData('looped', true);
        }
        _this.callPlugins('onCreateLoop');
    };
    _this.fixLoop = function() {
        var newIndex;
        if (_this.activeIndex < _this.loopedSlides) {
            newIndex = _this.slides.length - _this.loopedSlides * 3 + _this.activeIndex;
            _this.swipeTo(newIndex, 0, false);
        } else if ((params.slidesPerView === 'auto' && _this.activeIndex >= _this.loopedSlides * 2) || (_this.activeIndex > _this.slides.length - params.slidesPerView * 2)) {
            newIndex = -_this.slides.length + _this.activeIndex + _this.loopedSlides;
            _this.swipeTo(newIndex, 0, false);
        }
    };
    _this.loadSlides = function() {
        var slidesHTML = '';
        _this.activeLoaderIndex = 0;
        var slides = params.loader.slides;
        var slidesToLoad = params.loader.loadAllSlides ? slides.length: params.slidesPerView * (1 + params.loader.surroundGroups);
        for (var i = 0; i < slidesToLoad; i++) {
            if (params.loader.slidesHTMLType === 'outer') slidesHTML += slides[i];
            else {
                slidesHTML += '<' + params.slideElement + ' class="' + params.slideClass + '" data-swiperindex="' + i + '">' + slides[i] + '</' + params.slideElement + '>';
            }
        }
        _this.wrapper.innerHTML = slidesHTML;
        _this.calcSlides(true);
        if (!params.loader.loadAllSlides) {
            _this.wrapperTransitionEnd(_this.reloadSlides, true);
        }
    };

    _this.reloadSlides = function() {
        var slides = params.loader.slides;
        var newActiveIndex = parseInt(_this.activeSlide().data('swiperindex'), 10);
        if (newActiveIndex < 0 || newActiveIndex > slides.length - 1) return;
        _this.activeLoaderIndex = newActiveIndex;
        var firstIndex = Math.max(0, newActiveIndex - params.slidesPerView * params.loader.surroundGroups);
        var lastIndex = Math.min(newActiveIndex + params.slidesPerView * (1 + params.loader.surroundGroups) - 1, slides.length - 1);
        if (newActiveIndex > 0) {
            var newTransform = -slideSize * (newActiveIndex - firstIndex);
            _this.setWrapperTranslate(newTransform);
            _this.setWrapperTransition(0);
        }
        var i;
        if (params.loader.logic === 'reload') {
            _this.wrapper.innerHTML = '';
            var slidesHTML = '';
            for (i = firstIndex; i <= lastIndex; i++) {
                slidesHTML += params.loader.slidesHTMLType === 'outer' ? slides[i] : '<' + params.slideElement + ' class="' + params.slideClass + '" data-swiperindex="' + i + '">' + slides[i] + '</' + params.slideElement + '>';
            }
            _this.wrapper.innerHTML = slidesHTML;
        } else {
            var minExistIndex = 1000;
            var maxExistIndex = 0;
            for (i = 0; i < _this.slides.length; i++) {
                var index = _this.slides[i].data('swiperindex');
                if (index < firstIndex || index > lastIndex) {
                    _this.wrapper.removeChild(_this.slides[i]);
                } else {
                    minExistIndex = Math.min(index, minExistIndex);
                    maxExistIndex = Math.max(index, maxExistIndex);
                }
            }
            for (i = firstIndex; i <= lastIndex; i++) {
                var newSlide;
                if (i < minExistIndex) {
                    newSlide = document.createElement(params.slideElement);
                    newSlide.className = params.slideClass;
                    newSlide.setAttribute('data-swiperindex', i);
                    newSlide.innerHTML = slides[i];
                    _this.wrapper.insertBefore(newSlide, _this.wrapper.firstChild);
                }
                if (i > maxExistIndex) {
                    newSlide = document.createElement(params.slideElement);
                    newSlide.className = params.slideClass;
                    newSlide.setAttribute('data-swiperindex', i);
                    newSlide.innerHTML = slides[i];
                    _this.wrapper.appendChild(newSlide);
                }
            }
        }
        _this.reInit(true);
    };
    _this.dmNum = function(div) {
        $(div).html('');
        var thisPage=setInterval(function(){
            var inum=$(div).html();
            if(inum==''){
                $('#nownum').html(header.pageNum);
                $(div).html(header.pageNum);
            }else{
                clearInterval(thisPage);
            }
        },'100');
    };
    _this.dmNum(params.dmNum);

    _this.dmNow = function(div) {
        $(div).html($('.swiper-wrapper').attr('n'));
    };
    if(params.toNum!='' && parseInt(params.toNum)>0){}else{
        _this.dmNow(params.dmNow);
    }

    _this.JCPnum = function(div) {
        return header.pageNum;
    };
    _this.JCPnow = function() {
        return $('.swiper-wrapper').attr('n');
    };
    _this.cmgo = function() {
        var w=$(window).width(),h=$(window).height();
        var img=$('.swiper-wrapper>div').eq(header.imgNow).find('img');
        if(params.mode=='horizontal' && (params.frame=='3' || params.frame=='4')){
            img=$('.swiper-wrapper>div').find('img');
        }
        var iii=parseInt($('.swiper-wrapper').attr('n'));
        var r=wh(parseInt(cmpage[iii-1]['mobileImgWidth']),parseInt(cmpage[iii-1]['mobileImgHeight']));
        img.attr({'width':r[0],'height':r[1]});
        $(mdiv).css({width:w+'px',overflow:'hidden'});
        if(params.mode=='horizontal' && (params.frame=='3' || params.frame=='4')){
            var sf=parseInt(img.attr('sfnum'));
            if(sf==-1){
                _this.toTop(r[1]);
                womendi('.swiper-slide-active>img','1','t','fadeIn','1');
            }else{
                _this.framego(sf,'');
            }
        }else{
            _this.toTop(r[1]);
            womendi('.swiper-slide-active>img','1','t','fadeIn','1');
            var pn=parseInt(header.pageNum);
            for(var i=0;i<pn;i++){
                var div=$('.swiper-wrapper>div').eq(i);
                var img=div.find('img');
                var r=wh(parseInt(cmpage[i]['mobileImgWidth']),parseInt(cmpage[i]['mobileImgHeight']));
                img.attr({'width':r[0],'height':r[1]});
            }
        }
    };
    _this.vtgo = function() {
        var w=$(window).width(),h=$(window).height();
        header.thish=0;
        var pn=parseInt(header.pageNum);
        for(var i=0;i<pn;i++){
            var div=$('.swiper-wrapper>div').eq(i);
            var img=div.find('img');
            var r=wh(parseInt(cmpage[i]['mobileImgWidth']),parseInt(cmpage[i]['mobileImgHeight']));
            img.attr({'width':r[0],'height':r[1]});
            if(params.mode=='horizontal'){
                img.attr({'src':imgxx[i].url});
            }
            var divh=parseInt(r[1]);
            div.css('height',divh+'px');
            header.thish=divh+parseInt(header.thish)+3;
            hhh[i]=header.thish;
        }
        $(mdiv).css({width:w+'px','height':header.thish+'px'});
    };
    $(window).resize(function(){
        var rs='';
        if(/iphone|android|nokia|sony|ericsson|mot|samsung|sgh|lg|philips|panasonic|alcatel|lenovo|cldc|midp|wap|mobile/i.test(navigator.userAgent.toLowerCase())){
            rs='k';
        }else{
            if(params.mode=='horizontal' && (params.frame=='3' || params.frame=='4')){
                rs='k';
            }else{
                rs='i';
            }
            if(rs=='i'){
                if(params.mode!='vertical'){
                    _this.cmgo();
                }else{
                    _this.vtgo();
                }
            }
        }
        if(rs=='k'){
            return false;
        }
    });
    _this.JCPvergo=function(){
        var ssw=$('.swiper-wrapper');
        var nnn=parseInt(ssw.attr('n'));
        var ppp=parseInt(header.pageNum);
        var hc=parseInt(ssw.attr('hc'));
        var st=function(a){
            setTimeout(function(){
                ssw.attr('hc','0');
            },'2000');
        }
        if(hc==1){
            if(nnn==1){
                header.vpnum=1;
                _this.JCP2h('0');
                st(1);
            }else if(nnn==ppp){
                header.vpnum=2;
                _this.JCP2h('1');
                st(0);
            }
        }
    }
    if(params.mode=='vertical'){

        var _top;
        var _tips=0, startArray;

        var touchStart=function(event){
            event.stopPropagation();
            _top=document.documentElement.scrollTop + document.body.scrollTop;
            startArray=[event.touches[0].pageX,event.touches[0].pageY];
        }
        var touchMove=function(event){
            event.stopPropagation();
            if(_top!=0 || _tips){
                return false;
            }else{
                var x=event.touches[0].pageX-startArray[0], y=event.touches[0].pageY-startArray[1];
                if(Math.abs(x)>y) return false
                if(y>0){
                    $('.swiper-wrapper').attr('hc','1');
                    _this.JCPvergo();
                }
            }

        };

        var _obj=document.getElementById("JCPlayer");
        _obj.addEventListener('touchstart', touchStart, false);
        _obj.addEventListener('touchmove', touchMove, false);

        $(window).scroll(function(){
            _tips=1;
            var sctop = document.documentElement.scrollTop + document.body.scrollTop;
            var sw=$('.swiper-wrapper');
            if(JCPotc==1){
                JCPotc=0;
            }else{
                header.sctop=sctop;
                var pn=parseInt(header.pageNum);
                var iii,h=parseInt($(window).height()),gg;
                for(var i=0;i<pn;i++){
                    if(sctop>=hhh[i]-20){
                        iii=i+2;
                    }
                }
                if(sctop>=hhh[0]){
                    if(sctop+h==hhh[pn-1]){
                        iii=pn;
                    }
                }else{
                    iii=1;
                }
                _this.JCP2num(iii);
                var a=iii-1,b=parseInt(header.pageNum),hc3;
                var sd=$('.swiper-wrapper>div');_this.pnUnit();
                sd.eq(a).attr('now','here').siblings().removeAttr('now');
                var imgOne=$('.swiper-wrapper>div').eq(iii+1).find('img');
                if(imgOne.length==0){
                    cmlist(2,iii,1,1);
                }
                var imgOne=$('.swiper-wrapper>div').eq(iii-2).find('img');
                if(imgOne.length==0){
                    cmlist(2,iii-2,1,1);
                }
                if(sctop==0 || sctop+h==hhh[pn-1]){
                    hc3='1';
                }else{
                    hc3='0';
                }
                if(parseInt(header.vpnum)==2){
                    $(params.dmNow).html(b);
                    hc3='0';
                    header.vpnum=0;
                }
                sw.attr('hc',hc3);
                header.vpnum=0;
                var hc=parseInt(sw.attr('hc'));
                if((sctop==0 || sctop+h==hhh[pn-1]) && hc==1 && (iii==1 || iii==b)){
                    _this.JCPvergo();
                }
            }
        });
    }
    _this.JCPprev = function() {
        var sw=$('.swiper-wrapper');
        var a=parseInt(sw.attr('n'));
        var hc=parseInt(sw.attr('hc'));
        if(params.mode=='vertical'){
            var iii=a-1;
            var b=parseInt(header.pageNum);
            if(a-1>0){
                window.scrollTo(0,hhh[a-3]);
            }else{
                window.scrollTo(0,0);
            }
            if(iii==0){
                iii+=1;
            }
            _this.JCP2num(iii);
        }else if(params.mode=='horizontal' && (params.frame=='3'||params.frame=='4')){
            if(params.frame==3){
                _this.imgfixed('0');
            }else{
                _this.imgframe('0');
            }
        }else{
            if(a==1 && hc==1){
                _this.swipePrev();
                _this.JCP2h('0');
            }else{
                _this.swipePrev();
            }
        }
    };
    _this.JCPnext = function() {
        var sw=$('.swiper-wrapper');
        var a=parseInt(sw.attr('n'));
        var hc=parseInt(sw.attr('hc'));
        var b=parseInt(header.pageNum),bb=a;
        if(params.mode=='vertical'){
            var iii=a+1;
            if(a>=1 && iii<=b){
                window.scrollTo(0,hhh[a-1]);
                _this.JCP2num(iii);
            }
            // 在此处加入下一话
        }else if(params.mode=='horizontal' && (params.frame=='3'||params.frame=='4')){
            if(params.frame==3){
                _this.imgfixed('1');
            }else{
                _this.imgframe('1');
            }
        }else{
            if(bb==b && hc==1){
                _this.swipeNext();
                _this.JCP2h('1');
            }else{
                _this.swipeNext();
            }
        }
    };
    _this.JCPto = function(a) {
        var a=parseInt(a);
        var iii=a;
        var b=parseInt(header.pageNum);
        a=a-1;
        var swdiv=$('.swiper-wrapper>div');
        if(a>=0&&a<=b){
            if(params.mode=='horizontal' && (params.frame=='3'||params.frame=='4')){
                var img=swdiv.find('img');
                swdiv.attr('style','');
                $('.swiper-wrapper').attr('style','');
                var ig=iii-1;
                _this.JCP2num(iii);
                var ai=$('.allimgs>img');
                var newimg=ai.eq(ig);
                img.attr('src',newimg.attr('src'));
                img.attr('width',newimg.attr('width'));
                img.attr('height',newimg.attr('height'));
                img.attr('f',newimg.attr('f'));
                img.attr('sfnum','-1');
                var B,F=parseInt(newimg.attr('f'));
                if(params.frame=='4'){
                    if(F>1){
                        if(params.toNum!='' && parseInt(params.toNum)>0){
                            img.hide();
                        }
                        _this.framego(0,'');
                    }else{
                        B='G';
                    }
                }else{
                    B='G';
                }
                if(B=='G'){
                    var ih=parseInt(img.attr('height'));
                    _this.toTop(ih);
                    womendi('.swiper-slide-active>img','1','t','fadeIn','1');
                }
            }else{
                if(params.mode=='vertical'){
                    var imgOne=$('.swiper-wrapper>div').eq(iii-2).find('img');
                    if(imgOne.length==0){
                        cmlist(4,iii-3,1,1);
                    }
                    if(a-1>=0&&a-1<=b){
                        window.scrollTo(0,hhh[a-1]);
                    }else{
                        window.scrollTo(0,0);
                    }
                    _this.JCP2num(iii);
                }else{
                    _this.swipeTo(a,0,'');
                }
            }
        }else{
            alert('error');
        }
    };

    _this.jump2 = function() {
        var thisto=setInterval(function(){
            var ip=parseInt($('#nownum').html());
            var hp=parseInt(header.pageNum);
            if(ip==hp){
                _this.JCPto(params.toNum);
                clearInterval(thisto);
            }
        },'1000');
    };
    if(params.toNum!='' && parseInt(params.toNum)>0){
        _this.jump2();
    }
    _this.JCPfirst = function() {
        if(parseInt($('.swiper-wrapper').attr('n'))==1){
            return 1;
        }else{
            return 0;
        }
    };
    _this.JCPlast = function() {
        var iii=parseInt($('.swiper-wrapper').attr('n'));
        var num=parseInt(header.pageNum);
        if(iii==num){
            return 1;
        }else{
            return 0;
        }
    };
    _this.JCPtype=function(){
        var vi=parseInt(header['version']['istype']);
        if(vi==1){
            return 1;
        }else{
            var pn=parseInt(header.pageNum);
            var ic=0;
            for(var i=0;i<pn;i++){
                if(parseInt(cmpage[i]['frameNum'])>1){
                    ic+=1;
                }
            }
            if(ic==pn){
                return 0;
            }else{
                return 2;
            }
        }
    }
    _this.JCPmode = function() {
        var m=params.mode,n,f=params.frame;
        if(m=='vertical'){
            return 2;
        }else{
            if(m=='horizontal'){
                if(f==''){
                    return 1;
                }else if(f=='3'){
                    return 3;
                }else if(f=='4'){
                    return 4;
                }else{
                    return 0;
                }
            }else{
                return 0;
            }
        }
    };
    _this.go2f = function(pn) {
        if(parseInt(header.tcnum)==0){
            return;
        }
        if(JCPtcnum==1){
            JCPtcnum=0;
            _this.pnUnit();
        }else{
            JCPtcnum=1;
        }
        var fy=parseInt($('.swiper-wrapper').attr('fy'));
        if(fy==1){
            if(pn=='1'){
                _this.JCPnext();
            }else{
                _this.JCPprev();
            }
        }else if(fy==3){
            _this.imgfixed(pn);
        }else if(fy==4){
            _this.imgframe(pn);
        }else{
            return;
        }
        $(".header").hide();
        $(".footer").hide();
        $(".progress").hide();
        $("#fangye").css("color","#999");
        $("#fangye").find("img").attr("src","/m/p/content/repository/ues/image/s1/yd_page.png");

    };
    _this.JCPtc=function(a){
        var a=parseInt(a);
        if(a==1){
            header.tcnum=1;
        }else if(a==0){
            header.tcnum=0;
        }
    }

    _this.clicking=function(){
        var w=$(window).width();
        var progressw=w*0.7;
        $(window).resize(function(){
            w=$(window).width();
            progressw=w*0.7;
        });
        $(window).scroll(function() {
            w=$(window).width();
            progressw=w*0.7;
        });
        $(window).bind( 'orientationchange', function(e){
            w=$(window).width();
            progressw=w*0.7;
        });
        var d=function(k,e,p,w){
            if(k!='y'){
                return ;
            }
            var l,r;
            if(e=='click'){
                l=w/3;
                r=2*w/3;
            }
            if(p>=r){
                if(params.mode!='vertical'){
                    _this.pnUnit();
                    _this.go2f('1');
                }
            }else if(p<=l) {
                if(params.mode!='vertical'){
                    _this.pnUnit();
                    _this.go2f('0');
                }
            }else{
                $(".header").toggle();
                $(".footer").toggle();
                $(".progress").hide();
                $("#fangye").css("color","#999");
                $("#fangye").find("img").attr("src","/m/p/content/repository/ues/image/s1/yd_page.png");

            }
        };



        var m=function(e){
            var c=$('#JCPlayer').attr('c');
            if(c=='1'){
                d('y','click',e.pageX,w);
                $('#JCPlayer').attr('c','0');
                $(document).unbind('click');
                setTimeout(function(){
                    $('#JCPlayer').attr('c','1');
                    _this.clicking();
                },'100');
            }
        }
        if(params.mode=='vertical'){
            var sc=$('.swiper-container')
            var vh=parseInt(sc.css('height'));
            $(document).bind('click',function(e){
                setTimeout(function(){
                    var nh=parseInt(sc.css('height'));
                    if(vh!=nh){
                        sc.css('height',vh+'px');
                    }
                },'300');
                m(e);
            });
        }else{
            if(/iphone|android|nokia|sony|ericsson|mot|samsung|sgh|lg|philips|panasonic|alcatel|lenovo|cldc|midp|wap|mobile/i.test(navigator.userAgent.toLowerCase())){
                $(document).bind('click',function(e){
                    m(e);
                });
            }else{
                $(document).bind('dblclick',function(e){
                    e.preventDefault();
                });
                $(document).bind('click',function(e){
                    m(e);
                });
            }
        }
    }
    $('#JCPlayer').attr('c','1');
    _this.clicking();

    function makeSwiper() {
        _this.calcSlides();
        if (params.loader.slides.length > 0 && _this.slides.length === 0) {
            _this.loadSlides();
        }
        if (params.loop) {
            _this.createLoop();
        }
        _this.init();
        initEvents();
        if (params.pagination) {
            _this.createPagination(true);
        }
        if (params.loop || params.initialSlide > 0) {
            _this.swipeTo(params.initialSlide, 0, false);
        } else {
            _this.updateActiveSlide(0);
        }
        if (params.autoplay) {
            _this.startAutoplay();
        }
        _this.centerIndex = _this.activeIndex;
        if (params.onSwiperCreated) _this.fireCallback(params.onSwiperCreated, _this);
        _this.callPlugins('onSwiperCreated');
    }
    makeSwiper();
};
Swiper.prototype = {
    plugins: {},
    wrapperTransitionEnd: function(callback, permanent) {
        'use strict';
        var a = this,
            el = a.wrapper,
            events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
            i;
        function fireCallBack() {
            callback(a);
            if (a.params.queueEndCallbacks) a._queueEndCallbacks = false;
            if (!permanent) {
                for (i = 0; i < events.length; i++) {
                    a.h.removeEventListener(el, events[i], fireCallBack);
                }
            }
        }
        if (callback) {
            for (i = 0; i < events.length; i++) {
                a.h.addEventListener(el, events[i], fireCallBack);
            }
        }
    },
    getWrapperTranslate: function(axis) {
        'use strict';
        var el = this.wrapper,
            matrix, curTransform, curStyle, transformMatrix;
        if (typeof axis === 'undefined') {
            axis = this.params.mode === 'horizontal' ? 'x': 'y';
        }
        if (this.support.transforms && this.params.useCSS3Transforms) {
            curStyle = window.getComputedStyle(el, null);
            if (window.WebKitCSSMatrix) {
                transformMatrix = new WebKitCSSMatrix(curStyle.webkitTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
                matrix = transformMatrix.toString().split(',');
            }
            if (axis === 'x') {
                if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41;
                else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
                else curTransform = parseFloat(matrix[4]);
            }
            if (axis === 'y') {
                if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42;
                else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
                else curTransform = parseFloat(matrix[5]);
            }
        } else {
            if (axis === 'x') curTransform = parseFloat(el.style.left, 10) || 0;
            if (axis === 'y') curTransform = parseFloat(el.style.top, 10) || 0;
        }
        return curTransform || 0;
    },
    setWrapperTranslate: function(x, y, z) {
        'use strict';
        var es = this.wrapper.style,
            coords = {
                x: 0,
                y: 0,
                z: 0
            },
            translate;
        if (arguments.length === 3) {
            coords.x = x;
            coords.y = y;
            coords.z = z;
        } else {
            if (typeof y === 'undefined') {
                y = this.params.mode === 'horizontal' ? 'x': 'y';
            }
            coords[y] = x;
        }
        if (this.support.transforms && this.params.useCSS3Transforms) {
            translate = this.support.transforms3d ? 'translate3d(' + coords.x + 'px, ' + coords.y + 'px, ' + coords.z + 'px)': 'translate(' + coords.x + 'px, ' + coords.y + 'px)';
            es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = translate;
        } else {
            es.left = coords.x + 'px';
            es.top = coords.y + 'px';
        }
        this.callPlugins('onSetWrapperTransform', coords);
        if (this.params.onSetWrapperTransform) this.fireCallback(this.params.onSetWrapperTransform, this, coords);
    },
    setWrapperTransition: function(duration) {
        'use strict';
        var es = this.wrapper.style;
        es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = (duration / 1000) + 's';
        this.callPlugins('onSetWrapperTransition', {
            duration: duration
        });
        if (this.params.onSetWrapperTransition) this.fireCallback(this.params.onSetWrapperTransition, this, duration);
    },
    h: {
        getWidth: function(el, outer, round) {
            'use strict';
            var width = window.getComputedStyle(el, null).getPropertyValue('width');
            var returnWidth = parseFloat(width);
            if (isNaN(returnWidth) || width.indexOf('%') > 0) {
                returnWidth = el.offsetWidth - parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-left')) - parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-right'));
            }
            if (outer) returnWidth += parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-left')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-right'));
            if (round) return Math.round(returnWidth);
            else return returnWidth;
        },
        getHeight: function(el, outer, round) {
            'use strict';
            if (outer) return el.offsetHeight;
            var height = window.getComputedStyle(el, null).getPropertyValue('height');
            var returnHeight = parseFloat(height);
            if (isNaN(returnHeight) || height.indexOf('%') > 0) {
                returnHeight = el.offsetHeight - parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-top')) - parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-bottom'));
            }
            if (outer) returnHeight += parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-top')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-bottom'));
            if (round) return Math.round(returnHeight);
            else return returnHeight;
        },
        getOffset: function(el) {
            'use strict';
            var box = el.getBoundingClientRect();
            var body = document.body;
            var clientTop = el.clientTop || body.clientTop || 0;
            var clientLeft = el.clientLeft || body.clientLeft || 0;
            var scrollTop = window.pageYOffset || el.scrollTop;
            var scrollLeft = window.pageXOffset || el.scrollLeft;
            if (document.documentElement && !window.pageYOffset) {
                scrollTop = document.documentElement.scrollTop;
                scrollLeft = document.documentElement.scrollLeft;
            }
            return {
                top: box.top + scrollTop - clientTop,
                left: box.left + scrollLeft - clientLeft
            };
        },
        windowWidth: function() {
            'use strict';
            if (window.innerWidth) return window.innerWidth;
            else if (document.documentElement && document.documentElement.clientWidth) return document.documentElement.clientWidth;
        },
        windowHeight: function() {
            'use strict';
            if (window.innerHeight) return window.innerHeight;
            else if (document.documentElement && document.documentElement.clientHeight) return document.documentElement.clientHeight;
        },
        windowScroll: function() {
            'use strict';
            if (typeof pageYOffset !== 'undefined') {
                return {
                    left: window.pageXOffset,
                    top: window.pageYOffset
                };
            } else if (document.documentElement) {
                return {
                    left: document.documentElement.scrollLeft,
                    top: document.documentElement.scrollTop
                };
            }
        },
        addEventListener: function(el, event, listener, useCapture) {
            'use strict';
            if (typeof useCapture === 'undefined') {
                useCapture = false;
            }
            if (el.addEventListener) {
                el.addEventListener(event, listener, useCapture);
            } else if (el.attachEvent) {
                el.attachEvent('on' + event, listener);
            }
        },
        removeEventListener: function(el, event, listener, useCapture) {
            'use strict';
            if (typeof useCapture === 'undefined') {
                useCapture = false;
            }
            if (el.removeEventListener) {
                el.removeEventListener(event, listener, useCapture);
            } else if (el.detachEvent) {
                el.detachEvent('on' + event, listener);
            }
        }
    },
    setTransform: function(el, transform) {
        'use strict';
        var es = el.style;
        es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = transform;
    },
    setTranslate: function(el, translate) {
        'use strict';
        var es = el.style;
        var pos = {
            x: translate.x || 0,
            y: translate.y || 0,
            z: translate.z || 0
        };
        var transformString = this.support.transforms3d ? 'translate3d(' + (pos.x) + 'px,' + (pos.y) + 'px,' + (pos.z) + 'px)': 'translate(' + (pos.x) + 'px,' + (pos.y) + 'px)';
        es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = transformString;
        if (!this.support.transforms) {
            es.left = pos.x + 'px';
            es.top = pos.y + 'px';
        }
    },
    setTransition: function(el, duration) {
        'use strict';
        var es = el.style;
        es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = duration + 'ms';
    },
    support: {
        touch: (window.Modernizr && Modernizr.touch === true) || (function() {
            'use strict';
            return !! (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
        })(),
        transforms3d: (window.Modernizr && Modernizr.csstransforms3d === true) || (function() {
            'use strict';
            var div = document.createElement('div').style;
            return ('webkitPerspective' in div || 'MozPerspective' in div || 'OPerspective' in div || 'MsPerspective' in div || 'perspective' in div);
        })(),
        transforms: (window.Modernizr && Modernizr.csstransforms === true) || (function() {
            'use strict';
            var div = document.createElement('div').style;
            return ('transform' in div || 'WebkitTransform' in div || 'MozTransform' in div || 'msTransform' in div || 'MsTransform' in div || 'OTransform' in div);
        })(),
        transitions: (window.Modernizr && Modernizr.csstransitions === true) || (function() {
            'use strict';
            var div = document.createElement('div').style;
            return ('transition' in div || 'WebkitTransition' in div || 'MozTransition' in div || 'msTransition' in div || 'MsTransition' in div || 'OTransition' in div);
        })(),
        classList: (function() {
            'use strict';
            var div = document.createElement('div').style;
            return 'classList' in div;
        })()
    },
    browser: {
        ie8: (function() {
            'use strict';
            var rv = -1;
            if (navigator.appName === 'Microsoft Internet Explorer') {
                var ua = navigator.userAgent;
                var re = new RegExp(/MSIE ([0-9]{1,}[\.0-9]{0,})/);
                if (re.exec(ua) !== null) rv = parseFloat(RegExp.$1);
            }
            return rv !== -1 && rv < 9;
        })(),
        ie10: window.navigator.msPointerEnabled,
        ie11: window.navigator.pointerEnabled
    }
};
if (window.jQuery || window.Zepto) { (function($) {
    'use strict';
    $.fn.swiper = function(params) {
        var s = new Swiper($(this)[0], params);
        $(this).data('swiper', s);
        return s;
    };
})(window.jQuery || window.Zepto);
}
if (typeof(module) !== 'undefined') {
    module.exports = Swiper;
}
if (typeof define === 'function' && define.amd) {
    define([],
        function() {
            'use strict';
            return Swiper;
        });
}
var userbw=function(){
    var browserName=navigator.userAgent.toLowerCase();
    if(/iphone|android|nokia|sony|ericsson|mot|samsung|sgh|lg|philips|panasonic|alcatel|lenovo|cldc|midp|wap|mobile/i.test(browserName)){
        if(/msie/i.test(browserName) && !/opera/i.test(browserName)){
            return 0;
        }else if(/firefox/i.test(browserName)){
            return 1;
        }else if(/vivo|huawei/i.test(browserName) && /ucbrowser/i.test(browserName)){
            return 2;
        }else if(/vivo|huawei/i.test(browserName) && !/qqbrowser/i.test(browserName) && !/x3v/i.test(browserName)){
            return 3;
        }else if(/sogou|chrome/i.test(browserName) && /applewebkit/i.test(browserName)){
            return 4;
        }else if(/opera/i.test(browserName)){
            return 5;
        }else if(/webkit/i.test(browserName) &&!(/chrome/i.test(browserName))){
            return 6;
        }else{
            return 7;
        }
    }else{
        return 8;
    }
}

var otchange=function(){
    $(window).bind('orientationchange', function(e){
        var toNum=JCPlayer.JCPnow();
        $(JCPdata.div).remove();$(window).unbind('scroll');JCPotc=1;JCPrm=0;
        var w=$(this).width(),mode,h=$(this).height();
        var ub=userbw();
        if(w>h){
            mode='vertical';
            if(ub==4 || ub==3){
                mode=JCPdata.mode;
            }
        }else{
            mode=JCPdata.mode;
            if(ub==4 || ub==3){
                mode='vertical';
            }
        }
        setTimeout(function(){
            JCPlayer = new Swiper(JCPdata.JCPjson,JCPdata.urls,JCPdata.div,{mode:mode,rm:'1',frame:JCPdata.frame,dmNum:JCPdata.dmNum,dmNow:JCPdata.dmNow,toNum:toNum,pUnit:JCPdata.pUnit,nUnit:JCPdata.nUnit});
            JCPlayer.JCPtrans();
        },'300');
    });
}
$.fn.JCPlayer=function(b) {
    var a={div:'.swiper-container',urls:'',mode:'horizontal',rm:'0',frame:'0',jz:'漫画正在拼命加载中..',txt:'无法获得数据,请您检查网络',dmNum:'#nownum',dmNow:'#nowhere',toNum:'',pUnit:'',nUnit:''};
    var bb=b;
    var b=$.extend(a,b);
    var tyof=function(t){
        var rt;
        if(typeof t=='string'){
            rt=JSON.parse(t);
        }else if(typeof t=='object'){
            rt=JSON.parse(JSON.stringify(t));
        }else{
            rt=t;
        }
        return rt;
    }
    var dj=b.urls;
    b.urls=tyof(b.urls);
    var urls=b.urls;
    var jsurl=urls[0].url;
    if(urls[0].fileName!='zkjcp.json'){
        for(var i=0;i<urls.length;i++){
            if(urls[i].fileName=='zkjcp.json'){
                jsurl=urls[i].url;
            }
        }
    }
    if(b.rm=='1'){
        $(b.div).remove();$(window).unbind('scroll');JCPrm=1;JCPotc=1;
        JCPlayer = new Swiper(JCPjson,b.urls,b.div,{mode:b.mode,rm:b.rm,frame:b.frame,dmNum:b.dmNum,dmNow:b.dmNow,toNum:b.toNum,pUnit:b.pUnit,nUnit:b.nUnit});
        JCPdata={JCPjson:JCPjson,urls:b.urls,div:b.div,mode:b.mode,rm:'1',frame:b.frame,dmNum:b.dmNum,dmNow:b.dmNow,toNum:b.toNum,pUnit:b.pUnit,nUnit:b.nUnit};
    }else{
        $.ajax({
            url:jsurl,cache:false,type:'GET',data:'',dataType:'json',timeout:20000,
            beforeSend: function(){
                $(this).epublog({logtxt:b.jz});
            },
            success: function(JCP){
                var cm='The JCPlayer is running';JCPjson=JCP;
                JCPdata={JCPjson:JCPjson,urls:b.urls,div:b.div,mode:b.mode,rm:'1',frame:b.frame,dmNum:b.dmNum,dmNow:b.dmNow,toNum:b.toNum,pUnit:b.pUnit,nUnit:b.nUnit};
                var ZK_JCPlayer=setInterval(function(){
                    if(cm){
                        JCPlayer = new Swiper(JCP,b.urls,b.div,{mode:b.mode,rm:b.rm,frame:b.frame,dmNum:b.dmNum,dmNow:b.dmNow,toNum:b.toNum,pUnit:b.pUnit,nUnit:b.nUnit});
                        otchange();clearInterval(ZK_JCPlayer);
                    }
                },50);
            },
            complete: function(){
                console.log('The JCPlayer ajax requests was completing..');
            },
            error: function(log){
                $(this).epublog({logtxt:b.txt});
            }
        });
    }
};
