(function(g){var d=IDSafe.uiConstants,b=d.COMPROMISED_PASSWORD_MODAL,e=b.MESSAGES,f=SymBfw,h=f.uiUtils,c=f.extensionAdapter,a={show:function(){a._injectIframe()},_addListeners:function(){c.addContentScriptMessageListener(function(b,k,c){switch(b.id){case e.MODAL_HIDE:a.close();break;case e.MODAL_SHOW:a.show()}})},_injectIframe:function(){window.top.document.getElementById(b.IFRAME_ID)||(a.popupHtml=c.getExtensionURL(b.HTML),a.style=c.getExtensionURL(d.POPUP.STYLE),h.injectStyle(a.style),SymBfw.uiUtils.createFrame(b.IFRAME_ID,
a.popupHtml,b.HEIGHT,b.WIDTH,{left:0,top:0}))},close:function(){for(var a=document.querySelectorAll("#"+b.IFRAME_ID),c=0;c<a.length;c++)document.documentElement.removeChild(a[c])}};g.IDSafe.compromisedPasswordModal=a;a._addListeners()})(executionContext);