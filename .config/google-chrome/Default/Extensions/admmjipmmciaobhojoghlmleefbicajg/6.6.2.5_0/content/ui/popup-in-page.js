(function(){function d(k,f,h){function l(b,a){if(!f[b]){if(!k[b]){var e="function"==typeof require&&require;if(!a&&e)return e(b,!0);if(m)return m(b,!0);a=Error("Cannot find module '"+b+"'");throw a.code="MODULE_NOT_FOUND",a;}a=f[b]={exports:{}};k[b][0].call(a.exports,function(a){return l(k[b][1][a]||a)},a,a.exports,d,k,f,h)}return f[b].exports}for(var m="function"==typeof require&&require,g=0;g<h.length;g++)l(h[g]);return l}return d})()({1:[function(d,k,f){function h(b,a){if("function"!==typeof a&&
null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);b.prototype=Object.create(a&&a.prototype,{constructor:{value:b,enumerable:!1,writable:!0,configurable:!0}});a&&(Object.setPrototypeOf?Object.setPrototypeOf(b,a):b.__proto__=a)}Object.defineProperty(f,"__esModule",{value:!0});var l=function(){function b(a,e){for(var c=0;c<e.length;c++){var b=e[c];b.enumerable=b.enumerable||!1;b.configurable=!0;"value"in b&&(b.writable=!0);Object.defineProperty(a,b.key,
b)}}return function(a,e,c){e&&b(a.prototype,e);c&&b(a,c);return a}}(),m=(d=d("./utils.jsx"))&&d.__esModule?d:{default:d},g=SymBfw.utils.isNil;d=function(b){function a(b){if(!(this instanceof a))throw new TypeError("Cannot call a class as a function");var c=(a.__proto__||Object.getPrototypeOf(a)).call(this,b);if(!this)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");c=!c||"object"!==typeof c&&"function"!==typeof c?this:c;b.direction&&m.default.setDirection(b.direction);
return c}h(a,b);l(a,[{key:"onClick",value:function(){if(!g(this.props.onClick))this.props.onClick()}},{key:"render",value:function(){return"change-password"===this.props.type?React.createElement("div",{className:"base-popup"},React.createElement("div",{className:"change-password-content-wrapper",onClick:this.onClick.bind(this)},React.createElement("div",{className:"top-status-left"}),React.createElement("div",{className:"top-status-center"}),React.createElement("div",{className:"top-status-right"}),
this.props.children),React.createElement("div",{className:"popup-anchor-down"}),React.createElement("div",{className:"triangle-with-shadow"})):React.createElement("div",{className:"base-popup"},React.createElement("div",{className:"popup-anchor"}),React.createElement("div",{className:"triangle-with-shadow"}),React.createElement("div",{className:"content-wrapper",onClick:this.onClick.bind(this)},React.createElement("div",{className:"top-status-left"}),React.createElement("div",{className:"top-status-center"}),
React.createElement("div",{className:"top-status-right"}),this.props.children))}}]);return a}(React.Component);f.default=d},{"./utils.jsx":7}],2:[function(d,k,f){function h(a,c){if("function"!==typeof c&&null!==c)throw new TypeError("Super expression must either be null or a function, not "+typeof c);a.prototype=Object.create(c&&c.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}});c&&(Object.setPrototypeOf?Object.setPrototypeOf(a,c):a.__proto__=c)}Object.defineProperty(f,
"__esModule",{value:!0});var l=function(){function a(a,c){for(var b=0;b<c.length;b++){var e=c[b];e.enumerable=e.enumerable||!1;e.configurable=!0;"value"in e&&(e.writable=!0);Object.defineProperty(a,e.key,e)}}return function(c,b,e){b&&a(c.prototype,b);e&&a(c,e);return c}}(),m=(d=d("./popup-base.jsx"))&&d.__esModule?d:{default:d},g=IDSafe.uiConstants,b=SymBfw.utils.isntNil,a=SymBfw.utils.isNil,e=IDSafe.uiConstants.MESSAGES,c=IDSafe.constants.CREDITCARD.type;d=function(d){function n(a){if(!(this instanceof
n))throw new TypeError("Cannot call a class as a function");a=(n.__proto__||Object.getPrototypeOf(n)).call(this,a);if(!this)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");a=!a||"object"!==typeof a&&"function"!==typeof a?this:a;a.popupScrolled=!1;return a}h(n,d);l(n,[{key:"onCardItemClicked",value:function(a){this.popupScrolled?(IDSafe.eventUITelemetryWrapper.sendCardItemClickedPopupEventTelemetry(IDSafe.eventUITelemetryWrapper.constants.action.CLICK,IDSafe.eventUITelemetryWrapper.constants.elementId.CARD_ITEM_AFTER_SCROLL),
this.popupScrolled=!1):IDSafe.eventUITelemetryWrapper.sendCardItemClickedPopupEventTelemetry(IDSafe.eventUITelemetryWrapper.constants.action.CLICK,IDSafe.eventUITelemetryWrapper.constants.elementId.CARD_ITEM);SymBfw.extensionAdapter.sendMessage({id:g.POPUP.MESSAGES.POPUP_CARD_ITEM_SELECTED,payload:{itemRetrievalID:e.VAULT_GET_CARD_BY_ID,itemID:a}})}},{key:"_normalizeExpirationMonth",value:function(a){var c=Number(a);return 0<c&&10>c?"0"+c:a}},{key:"_handleScroll",value:function(a){this.popupScrolled||
(this.popupScrolled=!0)}},{key:"componentDidMount",value:function(){document.addEventListener("scroll",this._handleScroll.bind(this),!0)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this._handleScroll.bind(this),!0)}},{key:"_getCardIconStyle",value:function(a){var b={};switch(a){case c.Visa:b.background="url(../images/ic-card-visa.svg)";break;case c.MasterCard:b.background="url(../images/ic-card-mc.svg)";break;case c.Discover:b.background="url(../images/ic-card-discover.svg)";
break;case c.AmEx:b.background="url(../images/ic-card-amex.png)";break;case c.JCB:b.background="url(../images/ic-card-jcb.png)";break;default:b.background="url(../images/ic-card-other.svg)"}b.background+=" no-repeat 50%";return b}},{key:"render",value:function(){var c=[];if(a(this.props.items)||0===this.props.items.length)return null;for(var e=0;e<this.props.items.length;e++){var d=this.props.items[e];d.expMonth=this._normalizeExpirationMonth(d.expMonth);c.push(React.createElement("div",{key:d.id},
React.createElement("div",{className:"card-item-wrapper",id:d.id,onClick:this.onCardItemClicked.bind(this,d.id)},React.createElement("div",{className:"card-item"},b(d.cardtype)?React.createElement("div",{className:"card-logo-container card-list",style:this._getCardIconStyle(d.cardtype)}):null,React.createElement("div",{className:"card-item-detail"},React.createElement("div",{className:"card-title"},d.cardname),React.createElement("div",{className:"card-content"},d.cardnumber," | ",d.expMonth,"/",
d.expYear.substr(-2)," | ",d.cardHolderName," ")),React.createElement("div",{className:"icon-card"}))),React.createElement("div",{className:"divider"})))}return React.createElement(m.default,{direction:this.props.direction},React.createElement("div",{className:"content"},c))}}]);return n}(React.Component);f.default=d},{"./popup-base.jsx":1}],3:[function(d,k,f){function h(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(f,"__esModule",{value:!0});var l=function(){function a(a,c){for(var b=
0;b<c.length;b++){var e=c[b];e.enumerable=e.enumerable||!1;e.configurable=!0;"value"in e&&(e.writable=!0);Object.defineProperty(a,e.key,e)}}return function(c,b,e){b&&a(c.prototype,b);e&&a(c,e);return c}}();k=d("./popup-signin-view.jsx");var m=h(k);k=d("./popup-login-fill-view.jsx");k=h(k);var g=d("./popup-creditcard-fill-view.jsx");g=h(g);d=d("./popup-password-generator.jsx");d=h(d);var b=IDSafe.uiConstants,a=b.POPUP.TYPE,e=SymBfw.extensionAdapter,c={Login:k.default,PartialLogin:k.default,MultiPageLogin:k.default,
CardsPage:g.default,PartialCardsPage:g.default,ChangePasswordPage:d.default,LimitedChangePasswordPage:d.default,PartialChangePasswordPage:d.default},p=function(){function b(a,c){if(!(this instanceof b))throw new TypeError("Cannot call a class as a function");this.type=a;this.data=c}l(b,[{key:"show",value:function(){switch(this.type){case a.SIGNIN:ReactDOM.render(React.createElement(m.default,{data:this.data}),document.getElementById("container"));break;case a.FILL:var b=this.data.formType,e=null,
d;for(d in c)if(d===b){e=c[d];break}if(null===e)break;ReactDOM.render(React.createElement(e,{items:this.data.items,direction:this.data.direction,strings:this.data.i18n_strings}),document.getElementById("container"));break;default:throw Error("Type not set");}}}]);return b}();f.default=p;e.sendMessage({id:b.POPUP.MESSAGES.POPUP_INIT},function(a){(new p(a.type,a.data)).show()})},{"./popup-creditcard-fill-view.jsx":2,"./popup-login-fill-view.jsx":4,"./popup-password-generator.jsx":5,"./popup-signin-view.jsx":6}],
4:[function(d,k,f){function h(a,c){if("function"!==typeof c&&null!==c)throw new TypeError("Super expression must either be null or a function, not "+typeof c);a.prototype=Object.create(c&&c.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}});c&&(Object.setPrototypeOf?Object.setPrototypeOf(a,c):a.__proto__=c)}Object.defineProperty(f,"__esModule",{value:!0});var l=function(){function a(a,b){for(var c=0;c<b.length;c++){var e=b[c];e.enumerable=e.enumerable||!1;e.configurable=
!0;"value"in e&&(e.writable=!0);Object.defineProperty(a,e.key,e)}}return function(c,b,e){b&&a(c.prototype,b);e&&a(c,e);return c}}(),m=(d=d("./popup-base.jsx"))&&d.__esModule?d:{default:d},g=IDSafe.uiConstants,b=IDSafe.uiConstants.MESSAGES,a=SymBfw.localizerProxy;d=function(e){function c(a){if(!(this instanceof c))throw new TypeError("Cannot call a class as a function");var b=(c.__proto__||Object.getPrototypeOf(c)).call(this,a);if(!this)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
b=!b||"object"!==typeof b&&"function"!==typeof b?this:b;b.state={loginItems:a.items};return b}h(c,e);l(c,[{key:"onLoginClicked",value:function(c,e){var d=this;a.getLocalizedStrings(["AutoChange Backup","AutoChange Fail"],function(a){if(!SymBfw.utils.isEmptyObject(a)){var p=e.indexOf(a["AutoChange Backup"]);a=e.indexOf(a["AutoChange Fail"]);-1===p&&-1===a||IDSafe.eventUITelemetryWrapper.sendLoginFillFromAutoChangedItemUIEventTelemetry(IDSafe.eventUITelemetryWrapper.constants.action.CLICK,e);1<d.state.loginItems.length?
IDSafe.eventUITelemetryWrapper.sendMultiLoginFillPopupUIEventTelemetry(IDSafe.eventUITelemetryWrapper.constants.action.CLICK,IDSafe.eventUITelemetryWrapper.constants.elementId.MULTI_LOGIN_ITEM):IDSafe.eventUITelemetryWrapper.sendSingleLoginFillPopupUIEventTelemetry(IDSafe.eventUITelemetryWrapper.constants.action.CLICK,IDSafe.eventUITelemetryWrapper.constants.elementId.SINGLE_LOGIN_ITEM);SymBfw.extensionAdapter.sendMessage({id:g.POPUP.MESSAGES.POPUP_LOGIN_ITEM_SELECTED,payload:{itemRetrievalID:b.VAULT_GET_LOGIN_BY_ID,
itemID:c}})}})}},{key:"render",value:function(){for(var a=[],b=0;b<this.state.loginItems.length;b++){var c=this.state.loginItems[b];a.push(React.createElement("div",{key:c.id},React.createElement("div",{className:"login-item-wrapper",id:c.id,onClick:this.onLoginClicked.bind(this,c.id,c.sitename)},React.createElement("div",{className:"login-item"},React.createElement("div",{className:"username truncate",title:c.username},c.username),React.createElement("div",{className:"title truncate",title:c.sitename},
c.sitename)),React.createElement("div",{className:"icon-login"})),React.createElement("div",{className:"divider"})))}return React.createElement(m.default,{direction:this.props.direction},React.createElement("div",{className:"content"},a))}}]);return c}(React.Component);f.default=d},{"./popup-base.jsx":1}],5:[function(d,k,f){function h(b,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);b.prototype=Object.create(a&&a.prototype,
{constructor:{value:b,enumerable:!1,writable:!0,configurable:!0}});a&&(Object.setPrototypeOf?Object.setPrototypeOf(b,a):b.__proto__=a)}Object.defineProperty(f,"__esModule",{value:!0});var l=function(){function b(a,b){for(var c=0;c<b.length;c++){var e=b[c];e.enumerable=e.enumerable||!1;e.configurable=!0;"value"in e&&(e.writable=!0);Object.defineProperty(a,e.key,e)}}return function(a,e,c){e&&b(a.prototype,e);c&&b(a,c);return a}}(),m=(d=d("./popup-base.jsx"))&&d.__esModule?d:{default:d},g=IDSafe.uiConstants;
d=function(b){function a(b){if(!(this instanceof a))throw new TypeError("Cannot call a class as a function");b=(a.__proto__||Object.getPrototypeOf(a)).call(this,b);if(!this)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!==typeof b&&"function"!==typeof b?this:b}h(a,b);l(a,[{key:"onGeneratePasswordClicked",value:function(a){IDSafe.eventUITelemetryWrapper.sendGeneratePasswordItemClickedPopupEventTelemetry(IDSafe.eventUITelemetryWrapper.constants.action.CLICK,
IDSafe.eventUITelemetryWrapper.constants.elementId.GENERATE_PASSWORD_ITEM);SymBfw.extensionAdapter.sendMessage({id:g.POPUP.MESSAGES.POPUP_GENERATE_PASSWORD_CLICKED,payload:{itemID:a}})}},{key:"render",value:function(){for(var a=[],b=0;b<this.props.items.length;b++){var d=this.props.items[b];a.push(React.createElement("div",{key:d.id},React.createElement("div",{className:"divider"}),React.createElement("div",{className:"change-password-wrapper",id:d.id,onClick:this.onGeneratePasswordClicked.bind(this,
d.id)},React.createElement("div",{className:"change-password-item"},React.createElement("div",{className:"change-password-title truncate"},d.username),React.createElement("div",{className:"change-password-content"},this.props.strings["Generate secure password"])),React.createElement("div",{className:"icon-change-password"}))))}return React.createElement(m.default,{direction:this.props.direction,type:"change-password"},React.createElement("div",{className:"popup-pg-content"},a))}}]);return a}(React.Component);
f.default=d},{"./popup-base.jsx":1}],6:[function(d,k,f){function h(b,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);b.prototype=Object.create(a&&a.prototype,{constructor:{value:b,enumerable:!1,writable:!0,configurable:!0}});a&&(Object.setPrototypeOf?Object.setPrototypeOf(b,a):b.__proto__=a)}Object.defineProperty(f,"__esModule",{value:!0});var l=function(){function b(a,b){for(var c=0;c<b.length;c++){var e=b[c];e.enumerable=
e.enumerable||!1;e.configurable=!0;"value"in e&&(e.writable=!0);Object.defineProperty(a,e.key,e)}}return function(a,e,c){e&&b(a.prototype,e);c&&b(a,c);return a}}(),m=(d=d("./popup-base.jsx"))&&d.__esModule?d:{default:d},g=IDSafe.uiConstants;d=function(b){function a(b){if(!(this instanceof a))throw new TypeError("Cannot call a class as a function");var c=(a.__proto__||Object.getPrototypeOf(a)).call(this,b);if(!this)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
c=!c||"object"!==typeof c&&"function"!==typeof c?this:c;c.state={showDontAsk:b.data.showDontAsk};c.onSigninClicked=c.onSigninClicked.bind(c);c.onDontAskAgainClicked=c.onDontAskAgainClicked.bind(c);c._onEulaLinkClicked=c._onEulaLinkClicked.bind(c);return c}h(a,b);l(a,[{key:"onSigninClicked",value:function(){SymBfw.extensionAdapter.sendMessage({id:g.POPUP.MESSAGES.POPUP_SIGNIN_CLICKED});IDSafe.eventUITelemetryWrapper.sendSigninPopupUIEventTelemetry(IDSafe.eventUITelemetryWrapper.constants.action.CLICK,
IDSafe.eventUITelemetryWrapper.constants.elementId.ANCHOR_SIGN_IN)}},{key:"onDontAskAgainClicked",value:function(){SymBfw.extensionAdapter.sendMessage({id:g.POPUP.MESSAGES.POPUP_DONT_ASK_ME_AGAIN_CLICKED});IDSafe.eventUITelemetryWrapper.sendSigninPopupUIEventTelemetry(IDSafe.eventUITelemetryWrapper.constants.action.CLICK,IDSafe.eventUITelemetryWrapper.constants.elementId.ANCHOR_POPUP_DONT_ASK_ME_AGAIN)}},{key:"_onEulaLinkClicked",value:function(){SymBfw.extensionAdapter.sendMessage({id:g.POPUP.MESSAGES.POPUP_MISC_OPTIONS_EULA_CLICKED})}},
{key:"render",value:function(){var a="dont-ask-me-again";!1===this.state.showDontAsk&&(a+=" collapse");return React.createElement(m.default,{direction:this.props.data.direction},React.createElement("div",{className:"signin-content"},React.createElement("div",{className:"logo-mainui-sign-in"}),React.createElement("div",{className:"sign-in-to-your-nort"},this.props.data.i18n_strings["Sign in to your {0} vault to fill now."]),React.createElement("div",{className:"signin-button",onClick:this.onSigninClicked},
this.props.data.i18n_strings["Sign In"]),React.createElement("div",{className:a,onClick:this.onDontAskAgainClicked},this.props.data.i18n_strings["Don't ask me again"]),React.createElement("div",{className:"norton-license-agrement",onClick:this._onEulaLinkClicked},this.props.data.i18n_strings["Norton License Agreement"])))}}]);return a}(React.Component);f.default=d},{"./popup-base.jsx":1}],7:[function(d,k,f){Object.defineProperty(f,"__esModule",{value:!0});var h=function(){function d(d,b){for(var a=
0;a<b.length;a++){var e=b[a];e.enumerable=e.enumerable||!1;e.configurable=!0;"value"in e&&(e.writable=!0);Object.defineProperty(d,e.key,e)}}return function(g,b,a){b&&d(g.prototype,b);a&&d(g,a);return g}}(),l=SymBfw.utils.isntNil;d=function(){function d(){if(!(this instanceof d))throw new TypeError("Cannot call a class as a function");}h(d,null,[{key:"setDirection",value:function(d){var b=document.getElementsByTagName("body");l(b)&&l(b[0])&&b[0].setAttribute("dir",d)}},{key:"setLanguage",value:function(){var d=
0<arguments.length&&void 0!==arguments[0]?arguments[0]:"en",b=document.querySelector("html");l(b)&&b.setAttribute("lang",d)}},{key:"formatCreditCard",value:function(d){for(var b=[],a=0,e=d.length;a<e;a+=4)b.push(d.substring(a,a+4));return b.length?b.join(" "):d}}]);return d}();f.default=d},{}]},{},[3]);