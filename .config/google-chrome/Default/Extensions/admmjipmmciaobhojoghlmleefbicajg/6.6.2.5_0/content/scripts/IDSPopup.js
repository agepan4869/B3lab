var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.owns=function(a,d){return Object.prototype.hasOwnProperty.call(a,d)};$jscomp.assign="function"==typeof Object.assign?Object.assign:function(a,d){for(var f=1;f<arguments.length;f++){var g=arguments[f];if(g)for(var c in g)$jscomp.owns(g,c)&&(a[c]=g[c])}return a};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,d,f){a!=Array.prototype&&a!=Object.prototype&&(a[d]=f.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(a,d,f,g){if(d){f=$jscomp.global;a=a.split(".");for(g=0;g<a.length-1;g++){var c=a[g];c in f||(f[c]={});f=f[c]}a=a[a.length-1];g=f[a];d=d(g);d!=g&&null!=d&&$jscomp.defineProperty(f,a,{configurable:!0,writable:!0,value:d})}};$jscomp.polyfill("Object.assign",function(a){return a||$jscomp.assign},"es6","es3");$jscomp.arrayIteratorImpl=function(a){var d=0;return function(){return d<a.length?{done:!1,value:a[d++]}:{done:!0}}};$jscomp.arrayIterator=function(a){return{next:$jscomp.arrayIteratorImpl(a)}};
$jscomp.makeIterator=function(a){var d="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return d?d.call(a):$jscomp.arrayIterator(a)};$jscomp.FORCE_POLYFILL_PROMISE=!1;
$jscomp.polyfill("Promise",function(a){function d(){this.batch_=null}function f(b){return b instanceof c?b:new c(function(h,a){h(b)})}if(a&&!$jscomp.FORCE_POLYFILL_PROMISE)return a;d.prototype.asyncExecute=function(b){if(null==this.batch_){this.batch_=[];var h=this;this.asyncExecuteFunction(function(){h.executeBatch_()})}this.batch_.push(b)};var g=$jscomp.global.setTimeout;d.prototype.asyncExecuteFunction=function(b){g(b,0)};d.prototype.executeBatch_=function(){for(;this.batch_&&this.batch_.length;){var b=
this.batch_;this.batch_=[];for(var h=0;h<b.length;++h){var a=b[h];b[h]=null;try{a()}catch(l){this.asyncThrow_(l)}}}this.batch_=null};d.prototype.asyncThrow_=function(b){this.asyncExecuteFunction(function(){throw b;})};var c=function(b){this.state_=0;this.result_=void 0;this.onSettledCallbacks_=[];var h=this.createResolveAndReject_();try{b(h.resolve,h.reject)}catch(k){h.reject(k)}};c.prototype.createResolveAndReject_=function(){function b(b){return function(d){a||(a=!0,b.call(h,d))}}var h=this,a=!1;
return{resolve:b(this.resolveTo_),reject:b(this.reject_)}};c.prototype.resolveTo_=function(b){if(b===this)this.reject_(new TypeError("A Promise cannot resolve to itself"));else if(b instanceof c)this.settleSameAsPromise_(b);else{a:switch(typeof b){case "object":var a=null!=b;break a;case "function":a=!0;break a;default:a=!1}a?this.resolveToNonPromiseObj_(b):this.fulfill_(b)}};c.prototype.resolveToNonPromiseObj_=function(b){var a=void 0;try{a=b.then}catch(k){this.reject_(k);return}"function"==typeof a?
this.settleSameAsThenable_(a,b):this.fulfill_(b)};c.prototype.reject_=function(b){this.settle_(2,b)};c.prototype.fulfill_=function(b){this.settle_(1,b)};c.prototype.settle_=function(b,a){if(0!=this.state_)throw Error("Cannot settle("+b+", "+a+"): Promise already settled in state"+this.state_);this.state_=b;this.result_=a;this.executeOnSettledCallbacks_()};c.prototype.executeOnSettledCallbacks_=function(){if(null!=this.onSettledCallbacks_){for(var b=0;b<this.onSettledCallbacks_.length;++b)n.asyncExecute(this.onSettledCallbacks_[b]);
this.onSettledCallbacks_=null}};var n=new d;c.prototype.settleSameAsPromise_=function(b){var a=this.createResolveAndReject_();b.callWhenSettled_(a.resolve,a.reject)};c.prototype.settleSameAsThenable_=function(b,a){var d=this.createResolveAndReject_();try{b.call(a,d.resolve,d.reject)}catch(l){d.reject(l)}};c.prototype.then=function(b,a){function d(b,a){return"function"==typeof b?function(a){try{f(b(a))}catch(e){h(e)}}:a}var f,h,g=new c(function(b,a){f=b;h=a});this.callWhenSettled_(d(b,f),d(a,h));return g};
c.prototype.catch=function(b){return this.then(void 0,b)};c.prototype.callWhenSettled_=function(b,a){function d(){switch(c.state_){case 1:b(c.result_);break;case 2:a(c.result_);break;default:throw Error("Unexpected state: "+c.state_);}}var c=this;null==this.onSettledCallbacks_?n.asyncExecute(d):this.onSettledCallbacks_.push(d)};c.resolve=f;c.reject=function(a){return new c(function(b,d){d(a)})};c.race=function(a){return new c(function(b,d){for(var c=$jscomp.makeIterator(a),h=c.next();!h.done;h=c.next())f(h.value).callWhenSettled_(b,
d)})};c.all=function(a){var b=$jscomp.makeIterator(a),d=b.next();return d.done?f([]):new c(function(a,c){function h(b){return function(d){g[b]=d;k--;0==k&&a(g)}}var g=[],k=0;do g.push(void 0),k++,f(d.value).callWhenSettled_(h(g.length-1),c),d=b.next();while(!d.done)})};return c},"es6","es3");
(function(a){var d=IDSafe.uiConstants,f=d.POPUP.TYPE,g=d.POPUP.MESSAGES,c=d.MESSAGES,n=d.POPUP.STRINGS,b=d.POPUP.frameSize,h=SymBfw.uiUtils,k=SymBfw.extensionAdapter,l=SymWax.utils.isAnyChangePasswordFormType,t=[f.FILL,f.SIGNIN],m=SymBfw.utils.isNil,p=SymBfw.utils.isntNil,r=SymBfw.utils.isFunction,q=SymBfw.localizerProxy,e={isListenersAdded:!1,currentPopupType:null,currentPopupCallback:null,popupData:{},formType:null,show:function(a,b,d,c,g){if(m(c))throw Error("Location cannot be null");if(m(a)||
-1===t.indexOf(a))throw Error("Unsupported popup type: "+a);p(e.currentPopupType)&&e.close();e.currentPopupType=a;e.formType=d;r(g)&&(e.currentPopupCallback=g);p(b)&&(e.popupData={},a==f.FILL?(e.popupData.items=b,e.popupData.formType=d):e.popupData=b);e.isListenersAdded||(e.addListener(),e.isListenersAdded=!0);e.injectPopup(c)},addListener:function(){k.addContentScriptMessageListener(function(a,b,f){switch(a.id){case g.POPUP_LOGIN_ITEM_SELECTED:case g.POPUP_CARD_ITEM_SELECTED:case g.POPUP_GENERATE_PASSWORD_CLICKED:f=
document.getElementById(d.POPUP.IFRAME_ID);if(m(f)||!SymWax.utils.isElementVisible(f,!0))break;r(e.currentPopupCallback)&&e.currentPopupCallback(a);break;case g.POPUP_CLOSE:case c.VAULT_CLOSED:case c.NA_LOGGEDOUT:e.close();break;case g.POPUP_INIT:return q.getLocalizedStringsWithFormat(n.formatStrings,function(a){Object.assign(e.popupData.i18n_strings,a);b({type:e.currentPopupType,data:e.popupData})}),!0}});document.addEventListener("click",function(){e.close()});document.addEventListener("keydown",
function(){e.close()});window.addEventListener("message",function(a){p(a)&&p(a.data)&&a.data.id===g.POPUP_EVENT_CLOSE&&e.close()})},getLocation:function(a,b){a=a.getBoundingClientRect();return{left:a.left+a.width/2-b/2,top:a.top+a.height+window.scrollY-8,elHeight:a.height,elTop:a.top}},getFrameSize:function(){var a=e.currentPopupType,d={width:b[a].WIDTH,height:b[a].HEIGHT};if(a===f.FILL){a=e.popupData.items.length;var c=5;l(e.formType)&&(c=3);a>c&&(a=c);d.height+=a*b[f.FILL].HEIGHT_PER_LOGIN}return d},
injectPopup:function(a){var b=n[e.currentPopupType]||["#empty#"],c=new Promise(function(a,b){q.getCurrentLanguageDirection(function(b){a(b)})}),f=new Promise(function(a,d){q.getLocalizedStrings(b,function(b){SymBfw.utils.isEmptyObject(b)?d():a(b)})});Promise.all([c,f]).then(function(b){var c=b[0];e.popupData.i18n_strings=b[1];e.popupData.direction=c;e.popupHtml=k.getExtensionURL(d.POPUP.HTML);e.style=k.getExtensionURL(d.POPUP.STYLE);h.injectStyle(e.style);e.getLocationAndShow(a)})},close:function(){for(var a=
document.querySelectorAll("#"+d.POPUP.IFRAME_ID),b=0;b<a.length;b++)document.documentElement.removeChild(a[b]);e.currentPopupType=null;e.currentPopupCallback=null},updateSizeAndLocation:function(a){if(!m(a)){a=e.getLocation(a,d.POPUP.WIDTH);if(l(e.formType)){if(m(e.popupData.items)||0===e.popupData.items.length)return;var c=e.popupData.items.length;3<c&&(c=3);a.top=a.elTop-(a.elHeight+c*b[f.FILL].HEIGHT_PER_LOGIN-8)}c=e.getFrameSize();h.updateFrameSizeAndLocation(d.POPUP.IFRAME_ID,c.height,c.width,
a)}},getLocationAndShow:function(a){if(l(e.formType)){if(m(e.popupData.items)||0===e.popupData.items.length)return;var c=e.popupData.items.length;3<c&&(c=3);a.top=a.elTop-(a.elHeight+c*b[f.FILL].HEIGHT_PER_LOGIN-8)}c=e.getFrameSize();p(document.getElementById(d.POPUP.IFRAME_ID))||h.createFrame(d.POPUP.IFRAME_ID,e.popupHtml,c.height,c.width,a)}};a.IDSafe.popup=e})(executionContext);
