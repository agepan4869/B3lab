(function(a){(a.IDSafe=a.IDSafe||{}).loader=function(a,g){var d=a.utils.isntNil,e=a.utils.isNil,b={constants:{ID:"spinner-blue",STYLE:"width: 113px; height: 113px; position: absolute; top: 0; bottom: 0; left: 0; right: 0; margin: auto"},show:function(){if(!d(document.getElementById(b.constants.ID))){var f=a.extensionAdapter.getExtensionURL("content/images/spinner-blue.gif"),c=document.createElement("img");c.setAttribute("id",b.constants.ID);c.setAttribute("style",b.constants.STYLE);c.setAttribute("src",
f);document.body.appendChild(c)}},hide:function(){var a=document.getElementById(b.constants.ID);e(a)||document.body.removeChild(a)}};return b}(a.SymBfw,a.XIDSafe)})(executionContext);
