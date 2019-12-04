(function(){function a(g,e,h){function f(d,b){if(!e[d]){if(!g[d]){var c="function"==typeof require&&require;if(!b&&c)return c(d,!0);if(k)return k(d,!0);b=Error("Cannot find module '"+d+"'");throw b.code="MODULE_NOT_FOUND",b;}b=e[d]={exports:{}};g[d][0].call(b.exports,function(c){return f(g[d][1][c]||c)},b,b.exports,a,g,e,h)}return e[d].exports}for(var k="function"==typeof require&&require,b=0;b<h.length;b++)f(h[b]);return f}return a})()({1:[function(a,g,e){function h(b,c){if("function"!==typeof c&&
null!==c)throw new TypeError("Super expression must either be null or a function, not "+typeof c);b.prototype=Object.create(c&&c.prototype,{constructor:{value:b,enumerable:!1,writable:!0,configurable:!0}});c&&(Object.setPrototypeOf?Object.setPrototypeOf(b,c):b.__proto__=c)}Object.defineProperty(e,"__esModule",{value:!0});var f=function(){function b(b,d){for(var c=0;c<d.length;c++){var m=d[c];m.enumerable=m.enumerable||!1;m.configurable=!0;"value"in m&&(m.writable=!0);Object.defineProperty(b,m.key,
m)}}return function(c,d,a){d&&b(c.prototype,d);a&&b(c,a);return c}}(),k=(a=a("./checkbox.jsx"))&&a.__esModule?a:{default:a},b=SymBfw.extensionAdapter,d=NSSS.uiConstants.MESSAGES;a=function(a){function c(b){if(!(this instanceof c))throw new TypeError("Cannot call a class as a function");b=(c.__proto__||Object.getPrototypeOf(c)).call(this,b);if(!this)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");b=!b||"object"!==typeof b&&"function"!==typeof b?this:b;b.state=
{onlineBankingEnabled:b.props.isOnlineBankingEnabled};b._toggleOnlineBankingEnable=b._toggleOnlineBankingEnable.bind(b);return b}h(c,a);f(c,[{key:"_toggleOnlineBankingEnable",value:function(){this.setState({onlineBankingEnabled:!this.state.onlineBankingEnabled});b.sendMessage({name:d.UPDATE_FG_VALUES,message:!this.state.onlineBankingEnabled})}},{key:"_onLearnMoreLinkClicked",value:function(){b.sendMessage({name:d.FG_LEARN_MORE_LINK})}},{key:"render",value:function(){return React.createElement("div",
{className:"online-banking-protection"},React.createElement("div",{className:"banking-protection-title share-data-title"},this.props.strings["Banking Protection"]),React.createElement("div",{className:"horizontal-divider"}),React.createElement("div",{className:"share-data-content"},React.createElement("div",{className:"gdpr-checkbox online-banking",onClick:this._toggleOnlineBankingEnable},React.createElement(k.default,{isChecked:this.state.onlineBankingEnabled})),React.createElement("div",{className:"share-data-text share-data-content"},
this.props.strings["Banking Protection can help protect your sensitive online transactions."],"\u00a0",React.createElement("div",{className:"learn-more-banking-protection",onClick:this._onLearnMoreLinkClicked},this.props.strings["Learn More"]))))}}]);return c}(React.Component);e.default=a},{"./checkbox.jsx":2}],2:[function(a,g,e){function h(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&
b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}});b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}Object.defineProperty(e,"__esModule",{value:!0});var f=function(){function a(b,d){for(var a=0;a<d.length;a++){var c=d[a];c.enumerable=c.enumerable||!1;c.configurable=!0;"value"in c&&(c.writable=!0);Object.defineProperty(b,c.key,c)}}return function(b,d,l){d&&a(b.prototype,d);l&&a(b,l);return b}}();a=function(a){function b(d){if(!(this instanceof b))throw new TypeError("Cannot call a class as a function");
d=(b.__proto__||Object.getPrototypeOf(b)).call(this,d);if(!this)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!d||"object"!==typeof d&&"function"!==typeof d?this:d}h(b,a);f(b,[{key:"render",value:function(){var b=null;this.props.isChecked&&(b="../images/btn-global-checked.svg");this.props.isChecked||(b="../images/btn-global-unchecked.svg");return React.createElement("div",{className:"checkbox-container"},React.createElement("img",{src:b}))}}]);return b}(React.Component);
e.default=a},{}],3:[function(a,g,e){function h(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}});b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}Object.defineProperty(e,"__esModule",{value:!0});var f=function(){function a(b,d){for(var a=0;a<d.length;a++){var c=d[a];c.enumerable=c.enumerable||!1;
c.configurable=!0;"value"in c&&(c.writable=!0);Object.defineProperty(b,c.key,c)}}return function(b,d,e){d&&a(b.prototype,d);e&&a(b,e);return b}}();a=React.PropTypes;g=function(a){function b(a){if(!(this instanceof b))throw new TypeError("Cannot call a class as a function");a=(b.__proto__||Object.getPrototypeOf(b)).call(this,a);if(!this)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");a=!a||"object"!==typeof a&&"function"!==typeof a?this:a;a.state={isPopupShown:!1};
a._togglePopupDisplay=a._togglePopupDisplay.bind(a);a._hidePopup=a._hidePopup.bind(a);return a}h(b,a);f(b,[{key:"componentDidMount",value:function(){window.addEventListener("click",this._hidePopup)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this._hidePopup)}},{key:"_hidePopup",value:function(){!0===this.state.isPopupShown&&this.setState({isPopupShown:!1})}},{key:"_togglePopupDisplay",value:function(b){b.stopPropagation();this.setState({isPopupShown:!this.state.isPopupShown})}},
{key:"render",value:function(){return React.createElement("div",{className:"product-header"},React.createElement("div",{className:"norton-image"}),React.createElement("div",{className:"header-divider"}),React.createElement("div",{className:"product-header-title"},this.props.strings[this.props.productName]),this.props.isLoggedIn?React.createElement("div",{className:"header-email",onClick:this._togglePopupDisplay},this.props.email):null,this.props.isLoggedIn&&this.state.isPopupShown?React.createElement("div",
{className:"popup"},React.createElement("img",{src:"../images/bg-popup.svg"}),React.createElement("span",{className:"sign-out-popup",onClick:this.props.signOutClicked},this.props.strings["Sign out"])):null)}}]);return b}(React.Component);e.default=g;g.propTypes={event:a.shape({signOutClicked:a.func}),className:a.shape({"norton-image":a.string,"header-divider":a.string,"product-header-title":a.string}),optionalContent:a.shape({isLoggedIn:a.bool,email:a.string})}},{}],4:[function(a,g,e){function h(b,
a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);b.prototype=Object.create(a&&a.prototype,{constructor:{value:b,enumerable:!1,writable:!0,configurable:!0}});a&&(Object.setPrototypeOf?Object.setPrototypeOf(b,a):b.__proto__=a)}Object.defineProperty(e,"__esModule",{value:!0});var f=function(){function b(b,a){for(var c=0;c<a.length;c++){var d=a[c];d.enumerable=d.enumerable||!1;d.configurable=!0;"value"in d&&(d.writable=!0);
Object.defineProperty(b,d.key,d)}}return function(a,d,e){d&&b(a.prototype,d);e&&b(a,e);return a}}(),k=(a=a("./checkbox.jsx"))&&a.__esModule?a:{default:a},b=SymBfw.extensionAdapter,d=NSSS.uiConstants.MESSAGES;a=function(a){function c(b){if(!(this instanceof c))throw new TypeError("Cannot call a class as a function");b=(c.__proto__||Object.getPrototypeOf(c)).call(this,b);if(!this)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");b=!b||"object"!==typeof b&&"function"!==
typeof b?this:b;b.state={linkGuardEnabled:b.props.isLinkGuardEnabled};b._toggleLinkGuardEnable=b._toggleLinkGuardEnable.bind(b);b._addEventListener=b._addEventListener.bind(b);return b}h(c,a);f(c,[{key:"componentDidMount",value:function(){b.addMessageListener(this._addEventListener)}},{key:"_addEventListener",value:function(b){switch(b.id){case d.SET_LINK_GUARD_ENABLED_NOTIFICATION:this.setState({linkGuardEnabled:!0})}}},{key:"_toggleLinkGuardEnable",value:function(){this.setState({linkGuardEnabled:!this.state.linkGuardEnabled});
b.sendMessage({name:d.UPDATE_FG_LINK_GUARD,message:!this.state.linkGuardEnabled})}},{key:"render",value:function(){return React.createElement("div",{className:"link-guard"},React.createElement("div",{className:"link-guard-title share-data-title"},this.props.strings["Link Guard"]),React.createElement("div",{className:"horizontal-divider"}),React.createElement("div",{className:"share-data-content"},React.createElement("div",{className:"gdpr-checkbox link-guard",onClick:this._toggleLinkGuardEnable},
React.createElement(k.default,{isChecked:this.state.linkGuardEnabled})),React.createElement("div",{className:"share-data-text"},this.props.strings["Identify unsafe links in Webmail, Facebook, and Twitter"])))}}]);return c}(React.Component);e.default=a},{"./checkbox.jsx":2}],5:[function(a,g,e){(function(h){function f(b){return b&&b.__esModule?b:{default:b}}function k(b,a){if(!(b instanceof a))throw new TypeError("Cannot call a class as a function");}function b(b,a){if(!b)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return!a||"object"!==typeof a&&"function"!==typeof a?b:a}function d(b,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);b.prototype=Object.create(a&&a.prototype,{constructor:{value:b,enumerable:!1,writable:!0,configurable:!0}});a&&(Object.setPrototypeOf?Object.setPrototypeOf(b,a):b.__proto__=a)}Object.defineProperty(e,"__esModule",{value:!0});e.PrivacyContainer=e.GDPRContainer=e.UserLogInContainer=e.SettingsHeading=void 0;
var l=function(){function b(b,a){for(var c=0;c<a.length;c++){var d=a[c];d.enumerable=d.enumerable||!1;d.configurable=!0;"value"in d&&(d.writable=!0);Object.defineProperty(b,d.key,d)}}return function(a,c,d){c&&b(a.prototype,c);d&&b(a,d);return a}}(),c=a("./header.jsx"),g=f(c);c=a("./checkbox.jsx");var r=f(c);c=a("./utils.jsx");var t=f(c);c=a("./linkGuard.jsx");var u=f(c);c=a("./bankingProtection.jsx");var v=f(c),n=NSSS.uiConstants.MESSAGES,p=SymBfw.extensionAdapter,w=SymBfw.utils.isntNil,x=NSSS.constants,
y=e.SettingsHeading=function(a){function c(a){k(this,c);return b(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,a))}d(c,a);l(c,[{key:"render",value:function(){return React.createElement("div",{className:"settings-text"},this.props.strings.Settings)}}]);return c}(React.Component),z=e.UserLogInContainer=function(a){function c(a){k(this,c);return b(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,a))}d(c,a);l(c,[{key:"render",value:function(){return React.createElement("div",{className:"signed-in-detail"},
React.createElement("div",{className:"signed-in-as logged-in-email"},this.props.strings["Signed in as"],":\u00a0"),React.createElement("div",{className:"logged-in-email settings-email"},this.props.email),React.createElement("div",{className:"logged-in-email vertical-divider"},"\u00a0|\u00a0"),React.createElement("div",{className:"logged-in-email sign-out",onClick:this.props.signOutClicked},this.props.strings["Sign out"]))}}]);return c}(React.Component),A=e.GDPRContainer=function(a){function c(a){k(this,
c);a=b(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,a));a.state={isSharingData:a.props.isTelemetryEnabled};a._toggleCheckbox=a._toggleCheckbox.bind(a);return a}d(c,a);l(c,[{key:"_toggleCheckbox",value:function(){this.setState({isSharingData:!this.state.isSharingData});p.sendMessage({name:n.SET_TELEMETRY_ENABLED,message:!this.state.isSharingData})}},{key:"render",value:function(){return React.createElement("div",{className:"gdpr-container"},React.createElement("div",{className:"share-data-title"},
this.props.strings["Share Data with Norton"]),React.createElement("div",{className:"horizontal-divider"}),React.createElement("div",{className:"share-data-content"},React.createElement("div",{className:"gdpr-checkbox",onClick:this._toggleCheckbox},React.createElement(r.default,{isChecked:this.state.isSharingData})),React.createElement("div",{className:"share-data-text"},this.props.strings["Share usage and error data anonymously with Norton and help us make our products even better"])))}}]);return c}(React.Component),
B=e.PrivacyContainer=function(a){function c(a){k(this,c);a=b(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,a));a._privacyPolicyClicked=a._privacyPolicyClicked.bind(a);return a}d(c,a);l(c,[{key:"_privacyPolicyClicked",value:function(){p.sendMessage({name:n.SETTINGS_PRIVACY_POLICY})}},{key:"render",value:function(){return React.createElement("div",{className:"privacy-container",onClick:this._privacyPolicyClicked},this.props.strings["Privacy Policy"])}}]);return c}(React.Component),q=function(a){function c(a){k(this,
c);a=b(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,a));a.state={isLoggedIn:a.props.isLoggedIn,email:a.props.email};a.props.direction&&t.default.setDirection(a.props.direction);a.handleSignOutClicked=a.handleSignOutClicked.bind(a);return a}d(c,a);l(c,[{key:"handleSignOutClicked",value:function(){var a=this;p.sendMessage({name:n.SIGN_OUT},function(b){b.isLogoutSuccess&&a.setState({isLoggedIn:!1,email:null})})}},{key:"render",value:function(){return React.createElement("div",null,React.createElement(g.default,
{isLoggedIn:this.state.isLoggedIn,email:this.state.email,signOutClicked:this.handleSignOutClicked,strings:this.props.strings,productName:this.props.productName}),React.createElement("div",{className:"settings-container"},React.createElement(y,{strings:this.props.strings}),this.state.isLoggedIn?React.createElement(z,{signOutClicked:this.handleSignOutClicked,email:this.state.email,strings:this.props.strings}):null,React.createElement(A,{strings:this.props.strings,isTelemetryEnabled:this.props.isTelemetryEnabled}),
this.props.isLayoutSupported?React.createElement(u.default,{strings:this.props.strings,isLinkGuardEnabled:this.props.isLinkGuardEnabled}):null,this.props.isBankingProtectionFeatureAvailable?React.createElement(v.default,{strings:this.props.strings,isOnlineBankingEnabled:this.props.isOnlineBankingEnabled}):null,React.createElement(B,{strings:this.props.strings})))}}]);return c}(React.Component);e.default=q;(function(){var a={show:function(){var a=x.PRODUCT_NAME.substring(7);p.sendMessage({name:n.SETTINGS_PAGE_UI_INIT},
function(b){w(b)&&ReactDOM.render(React.createElement(q,{isLoggedIn:b.isLoggedIn,email:b.email,strings:b.strings,direction:b.direction,productName:a,isTelemetryEnabled:b.isTelemetryEnabled,isLayoutSupported:b.isLayoutSupported,isLinkGuardEnabled:b.isLinkGuardEnabled,isBankingProtectionFeatureAvailable:b.bankingProtectionFeatureAvailable,isOnlineBankingEnabled:b.isOnlineBankingEnabled}),document.getElementById("container"))})}};h.NSSS.showSettingsUI=a;a.show()})()}).call(this,"undefined"!==typeof global?
global:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{})},{"./bankingProtection.jsx":1,"./checkbox.jsx":2,"./header.jsx":3,"./linkGuard.jsx":4,"./utils.jsx":6}],6:[function(a,g,e){Object.defineProperty(e,"__esModule",{value:!0});var h=function(){function a(a,d){for(var b=0;b<d.length;b++){var c=d[b];c.enumerable=c.enumerable||!1;c.configurable=!0;"value"in c&&(c.writable=!0);Object.defineProperty(a,c.key,c)}}return function(b,d,e){d&&a(b.prototype,d);e&&a(b,e);return b}}(),f=SymBfw.utils.isntNil;
a=function(){function a(){if(!(this instanceof a))throw new TypeError("Cannot call a class as a function");}h(a,null,[{key:"setDirection",value:function(a){var b=document.getElementsByTagName("body");f(b)&&f(b[0])&&b[0].setAttribute("dir",a)}}]);return a}();e.default=a},{}]},{},[5]);