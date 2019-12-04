(function(){function c(m,e,k){function g(b,a){if(!e[b]){if(!m[b]){var d="function"==typeof require&&require;if(!a&&d)return d(b,!0);if(l)return l(b,!0);a=Error("Cannot find module '"+b+"'");throw a.code="MODULE_NOT_FOUND",a;}a=e[b]={exports:{}};m[b][0].call(a.exports,function(a){return g(m[b][1][a]||a)},a,a.exports,c,m,e,k)}return e[b].exports}for(var l="function"==typeof require&&require,f=0;f<k.length;f++)g(k[f]);return g}return c})()({1:[function(c,m,e){function k(a,d){if("function"!==typeof d&&
null!==d)throw new TypeError("Super expression must either be null or a function, not "+typeof d);a.prototype=Object.create(d&&d.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}});d&&(Object.setPrototypeOf?Object.setPrototypeOf(a,d):a.__proto__=d)}Object.defineProperty(e,"__esModule",{value:!0});e.SymHeader=void 0;var g=function(){function a(a,b){for(var d=0;d<b.length;d++){var h=b[d];h.enumerable=h.enumerable||!1;h.configurable=!0;"value"in h&&(h.writable=!0);Object.defineProperty(a,
h.key,h)}}return function(d,h,b){h&&a(d.prototype,h);b&&a(d,b);return d}}(),l=(c=c("./popup-base.jsx"))&&c.__esModule?c:{default:c},f=IDSafe.uiConstants.VAULT_UNLOCK.MESSAGES,b=SymBfw.extensionAdapter;e.SymHeader=function(a){function d(a){if(!(this instanceof d))throw new TypeError("Cannot call a class as a function");a=(d.__proto__||Object.getPrototypeOf(d)).call(this,a);if(!this)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");a=!a||"object"!==typeof a&&"function"!==
typeof a?this:a;a.state={showSignOutPopup:!1};return a}k(d,a);g(d,[{key:"componentDidMount",value:function(){window.addEventListener("click",this.hidePopup.bind(this),!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.hidePopup.bind(this),!1)}},{key:"hidePopup",value:function(){this.setState({showSignOutPopup:!1})}},{key:"onNAClick",value:function(a){a.stopPropagation();this.props.showPopup&&(this.setState({showSignOutPopup:!this.state.showSignOutPopup}),a=
IDSafe.pageViewTelemetryWrapper,a.send(document.location.pathname,a.constants.DOCUMENT_TITLE.NA_SIGN_OUT_POPUP))}},{key:"signOutOfNA",value:function(){b.sendMessage({id:f.SIGNOUT_OF_NA});this.props.vaultUnlock?IDSafe.eventUITelemetryWrapper.sendVaultUnlockUIEventTelemetry(IDSafe.eventUITelemetryWrapper.constants.action.CLICK,IDSafe.eventUITelemetryWrapper.constants.elementId.VAULT_UNLOCK_SIGNOUT_OF_NA):this.props.noVault?IDSafe.eventUITelemetryWrapper.sendNoVaultDetectedUIEventTelemetry(IDSafe.eventUITelemetryWrapper.constants.action.CLICK,
IDSafe.eventUITelemetryWrapper.constants.elementId.NO_UNLOCK_SIGNOUT_OF_NA):this.props.vaultTabUI&&IDSafe.eventUITelemetryWrapper.sendVaultTabPageUIEventTelemetry(IDSafe.eventUITelemetryWrapper.constants.action.CLICK,IDSafe.eventUITelemetryWrapper.constants.elementId.VTU_SIGN_OUT)}},{key:"getClassName",value:function(a,d){var b="";a.forEach(function(a){b+=" "+a});this.props.showPopup||(b+=" "+d);return b}},{key:"render",value:function(){return React.createElement("div",{className:"header row"},React.createElement("div",
{className:"norton-image"}),React.createElement("div",{className:"column popup-container"},React.createElement("div",{className:this.getClassName(["na-account"],"nosignout"),onClick:this.onNAClick.bind(this)},this.props.email),this.state.showSignOutPopup?React.createElement(l.default,{onClick:this.signOutOfNA.bind(this)},React.createElement("span",{id:"sign-out"},this.props.strings["Sign out"])):null))}}]);return d}(React.Component)},{"./popup-base.jsx":2}],2:[function(c,m,e){function k(b,a){if("function"!==
typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);b.prototype=Object.create(a&&a.prototype,{constructor:{value:b,enumerable:!1,writable:!0,configurable:!0}});a&&(Object.setPrototypeOf?Object.setPrototypeOf(b,a):b.__proto__=a)}Object.defineProperty(e,"__esModule",{value:!0});var g=function(){function b(a,d){for(var b=0;b<d.length;b++){var c=d[b];c.enumerable=c.enumerable||!1;c.configurable=!0;"value"in c&&(c.writable=!0);Object.defineProperty(a,
c.key,c)}}return function(a,d,c){d&&b(a.prototype,d);c&&b(a,c);return a}}(),l=(c=c("./utils.jsx"))&&c.__esModule?c:{default:c},f=SymBfw.utils.isNil;c=function(b){function a(b){if(!(this instanceof a))throw new TypeError("Cannot call a class as a function");var d=(a.__proto__||Object.getPrototypeOf(a)).call(this,b);if(!this)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");d=!d||"object"!==typeof d&&"function"!==typeof d?this:d;b.direction&&l.default.setDirection(b.direction);
return d}k(a,b);g(a,[{key:"onClick",value:function(){if(!f(this.props.onClick))this.props.onClick()}},{key:"render",value:function(){return"change-password"===this.props.type?React.createElement("div",{className:"base-popup"},React.createElement("div",{className:"change-password-content-wrapper",onClick:this.onClick.bind(this)},React.createElement("div",{className:"top-status-left"}),React.createElement("div",{className:"top-status-center"}),React.createElement("div",{className:"top-status-right"}),
this.props.children),React.createElement("div",{className:"popup-anchor-down"}),React.createElement("div",{className:"triangle-with-shadow"})):React.createElement("div",{className:"base-popup"},React.createElement("div",{className:"popup-anchor"}),React.createElement("div",{className:"triangle-with-shadow"}),React.createElement("div",{className:"content-wrapper",onClick:this.onClick.bind(this)},React.createElement("div",{className:"top-status-left"}),React.createElement("div",{className:"top-status-center"}),
React.createElement("div",{className:"top-status-right"}),this.props.children))}}]);return a}(React.Component);e.default=c},{"./utils.jsx":4}],3:[function(c,m,e){function k(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function");}function g(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!==typeof b&&"function"!==typeof b?a:b}function l(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+
typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}});b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}Object.defineProperty(e,"__esModule",{value:!0});var f=function(){function a(a,b){for(var d=0;d<b.length;d++){var c=b[d];c.enumerable=c.enumerable||!1;c.configurable=!0;"value"in c&&(c.writable=!0);Object.defineProperty(a,c.key,c)}}return function(b,d,c){d&&a(b.prototype,d);c&&a(b,c);return b}}(),b=c("./extn-page-header.jsx"),
a=(c=c("./utils.jsx"))&&c.__esModule?c:{default:c};c=IDSafe.uiConstants;var d=c.SETTINGS.MESSAGES,h=c.MESSAGES,r=c.VAULT_UNLOCK.MESSAGES;h=c.MESSAGES;var p=IDSafe.constants.settings,t=SymBfw.utils.isNil,n=SymBfw.extensionAdapter,u=function(b){function c(b){k(this,c);var d=g(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,b)),f=p.AUTO_FILL,e=p.AUTO_SAVE;d.state={requireVaultPassword:b.settings[p.REQUIRE_VAULT_PASSWORD],autoFill:b.settings[f],autoSave:b.settings[e],autoFillParent:b.settings[f]&&
b.settings[e],showHoverOver:!1};b.direction&&a.default.setDirection(b.direction);return d}l(c,b);f(c,[{key:"signOutOfNA",value:function(){IDSafe.settingsUI.logoutOfNa();IDSafe.eventUITelemetryWrapper.sendSettingsPageUIEventTelemetry(IDSafe.eventUITelemetryWrapper.constants.action.CLICK,IDSafe.eventUITelemetryWrapper.constants.elementId.SETTINGS_SIGN_OUT_NA)}},{key:"_onMouseEnter",value:function(){this.setState({showHoverOver:!0})}},{key:"_onMouseLeave",value:function(){this.setState({showHoverOver:!1})}},
{key:"handleChange",value:function(a){switch(a.target.id){case "require-vault-password":var b=a.target.checked,c=this;if(!1===!a.target.checked){c.setState({requireVaultPassword:a.target.checked},c.setSettings.bind(this));IDSafe.eventUITelemetryWrapper.sendSettingsPageUIEventTelemetry(IDSafe.eventUITelemetryWrapper.constants.action.CLICK,IDSafe.eventUITelemetryWrapper.constants.elementId.SETTINGS_REQUIRE_VAULT_PASSWORD,a.target.checked?1:0);break}n.sendMessage({id:d.INITIALIZE_VERIFY_VAULT_PASSWORD},
function(a){!SymBfw.utils.isNil(a)&&a.result&&(c.setState({requireVaultPassword:b},c.setSettings.bind(c)),IDSafe.eventUITelemetryWrapper.sendSettingsPageUIEventTelemetry(IDSafe.eventUITelemetryWrapper.constants.action.CLICK,IDSafe.eventUITelemetryWrapper.constants.elementId.SETTINGS_REQUIRE_VAULT_PASSWORD,b?1:0))});break;case "auto-save":this.setState({autoSave:a.target.checked,autoFillParent:a.target.checked&&this.state.autoFill},this.setSettings.bind(this));IDSafe.eventUITelemetryWrapper.sendSettingsPageUIEventTelemetry(IDSafe.eventUITelemetryWrapper.constants.action.CLICK,
IDSafe.eventUITelemetryWrapper.constants.elementId.SETTINGS_AUTO_SAVE,a.target.checked?1:0);break;case "auto-fill":this.setState({autoFill:a.target.checked,autoFillParent:this.state.autoSave&&a.target.checked},this.setSettings.bind(this));IDSafe.eventUITelemetryWrapper.sendSettingsPageUIEventTelemetry(IDSafe.eventUITelemetryWrapper.constants.action.CLICK,IDSafe.eventUITelemetryWrapper.constants.elementId.SETTINGS_AUTO_FILL,a.target.checked?1:0);break;case "auto-fill-parent":a.target.checked?(this.setState({autoFill:!0,
autoSave:!0,autoFillParent:!0},this.setSettings.bind(this)),IDSafe.eventUITelemetryWrapper.sendSettingsPageUIEventTelemetry(IDSafe.eventUITelemetryWrapper.constants.action.CLICK,IDSafe.eventUITelemetryWrapper.constants.elementId.SETTINGS_AUTO_FILL_PARENT,1)):(this.setState({autoFill:!1,autoSave:!1,autoFillParent:!1},this.setSettings.bind(this)),IDSafe.eventUITelemetryWrapper.sendSettingsPageUIEventTelemetry(IDSafe.eventUITelemetryWrapper.constants.action.CLICK,IDSafe.eventUITelemetryWrapper.constants.elementId.SETTINGS_AUTO_FILL_PARENT,
0))}}},{key:"launchDeleteVaultFlow",value:function(){n.sendMessage({id:h.LAUNCH_DELETE_VAULT_FLOW})}},{key:"launchChangePasswordFlow",value:function(){n.sendMessage({id:d.LAUNCH_CHANGE_PASSWORD})}},{key:"setSettings",value:function(){IDSafe.settingsUI.setSettings(this.state)}},{key:"restoreDefaultSettings",value:function(){var a=this;IDSafe.settingsUI.restoreDefaultSettings(function(b){var d=p.AUTO_FILL,c=p.AUTO_SAVE;a.setState({autoFill:b[d],autoSave:b[c],autoFillParent:b[d]&&b[c]});IDSafe.eventUITelemetryWrapper.sendSettingsPageUIEventTelemetry(IDSafe.eventUITelemetryWrapper.constants.action.CLICK,
IDSafe.eventUITelemetryWrapper.constants.elementId.SETTINGS_RESTORE_DEFAULT)})}},{key:"render",value:function(){return React.createElement("div",{className:"content column"},React.createElement("div",{className:"settings"},this.props.strings.Settings),React.createElement("div",{className:"row signin-info"},React.createElement("div",{className:"signed-in-as"},this.props.strings["Signed in as:"]),React.createElement("div",{className:"na-account"},this.props.email),React.createElement("div",{className:"signout",
onClick:this.signOutOfNA.bind(this)},this.props.strings["Sign out"])),React.createElement("div",{className:"vault-access-settings"},React.createElement("div",{className:"vault-access"},this.props.strings["Vault Access"]),React.createElement("div",{className:"subtitle-underline"}),React.createElement("label",{className:"-checkbox"},React.createElement("input",{type:"checkbox",id:"require-vault-password",defaultChecked:this.state.requireVaultPassword,checked:this.state.requireVaultPassword,onChange:this.handleChange.bind(this),
className:"require-vault-password"}),React.createElement("span",null,this.props.strings["Always require vault password before filling a login or form"])),React.createElement("div",{className:"change-vault-password",onClick:this.launchChangePasswordFlow.bind(this)},this.props.strings["Change vault password"])),React.createElement("label",{className:"-checkbox"},React.createElement("input",{type:"checkbox",id:"auto-fill-parent",defaultChecked:this.state.autoFillParent,className:"auto-fill-parent-input",
checked:this.state.autoFillParent,onChange:this.handleChange.bind(this)}),React.createElement("span",{className:"auto-fill-parent"},this.props.strings.Autofilling)),React.createElement("div",{className:"subtitle-underline"}),React.createElement("label",{className:"-checkbox"},React.createElement("input",{type:"checkbox",id:"auto-save",defaultChecked:this.state.autoSave,checked:this.state.autoSave,className:"auto-save",onChange:this.handleChange.bind(this)}),React.createElement("span",null,this.props.strings["Autosave logins"])),
React.createElement("label",{className:"-checkbox"},React.createElement("input",{type:"checkbox",id:"auto-fill",defaultChecked:this.state.autoFill,checked:this.state.autoFill,className:"auto-fill",onChange:this.handleChange.bind(this)}),React.createElement("span",null,this.props.strings["Autofill logins"])),React.createElement("div",{className:"row footer"},React.createElement("div",{className:"restore-settings",onClick:this.restoreDefaultSettings.bind(this)},this.props.strings["Restore default settings"])),
React.createElement("button",{className:"delete-vault",onClick:this.launchDeleteVaultFlow.bind(this),onMouseEnter:this._onMouseEnter.bind(this),onMouseLeave:this._onMouseLeave.bind(this)},this.props.strings["Delete vault"]),1==this.state.showHoverOver?React.createElement("div",{className:"delete-vault-tooltip"},React.createElement("div",{className:"delete-vault-tooltip-text"},this.props.strings["Norton account password verification required before deletion."])):null)}}]);return c}(React.Component),
q=function(a){function d(a){k(this,d);return g(this,(d.__proto__||Object.getPrototypeOf(d)).call(this,a))}l(d,a);f(d,[{key:"render",value:function(){return React.createElement("div",null,React.createElement(b.SymHeader,null),React.createElement(u,{settings:this.props.settings,email:this.props.email,strings:this.props.strings,direction:this.props.direction}))}}]);return d}(React.Component);e.default=q;(function(){var a={logoutOfNa:function(){n.sendMessage({id:r.SIGNOUT_OF_NA})},restoreDefaultSettings:function(a){n.sendMessage({id:d.RESTORE_DEFAULT_SETTINGS},
a)},setSettings:function(a){n.sendMessage({id:d.SET_SETTINGS,payload:a})},show:function(){n.sendMessage({id:d.UI_INIT},function(a){t(a)||ReactDOM.render(React.createElement(q,{settings:a.settings,email:a.email,strings:a.strings,direction:a.direction}),document.getElementById("container"))})}};IDSafe.settingsUI=a;a.show()})()},{"./extn-page-header.jsx":1,"./utils.jsx":4}],4:[function(c,m,e){Object.defineProperty(e,"__esModule",{value:!0});var k=function(){function c(c,b){for(var a=0;a<b.length;a++){var d=
b[a];d.enumerable=d.enumerable||!1;d.configurable=!0;"value"in d&&(d.writable=!0);Object.defineProperty(c,d.key,d)}}return function(f,b,a){b&&c(f.prototype,b);a&&c(f,a);return f}}(),g=SymBfw.utils.isntNil;c=function(){function c(){if(!(this instanceof c))throw new TypeError("Cannot call a class as a function");}k(c,null,[{key:"setDirection",value:function(c){var b=document.getElementsByTagName("body");g(b)&&g(b[0])&&b[0].setAttribute("dir",c)}},{key:"setLanguage",value:function(){var c=0<arguments.length&&
void 0!==arguments[0]?arguments[0]:"en",b=document.querySelector("html");g(b)&&b.setAttribute("lang",c)}},{key:"formatCreditCard",value:function(c){for(var b=[],a=0,d=c.length;a<d;a+=4)b.push(c.substring(a,a+4));return b.length?b.join(" "):c}}]);return c}();e.default=c},{}]},{},[3]);
