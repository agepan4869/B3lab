(function(b){b.NSSS.sb_ask=function(b){var h=b.utils.isntNil,c={initialize:function(){c.parsePage=function(){if(h(Utils)){if(-1!==window.location.href.indexOf("http://jp.ask.com"))Utils.execTopBtmSponsQuery("//div[@class='ovbox']/a[not(@class)]/span[@class='l']","//div[@class='ovbox']/a[not(@class)]/span[last()]");else{var d=document.getElementById("sponsoredRight"),e=document.getElementById("midRail"),a=document.getElementById("rr_sa");Utils.execTopBtmSponsQuery("//div[@id='adBlock']/div[contains(@class,'c_')]/div[position()=1]/a",
"//div[@id='adBlock']/div[contains(@class,'c_')]/div[position()=2]/a");Utils.execTopBtmSponsQuery("//div[contains(@class,'adStd')]/a[contains(@class,'titleLink') or contains(@class,'test_titleLink')]","//div[contains(@class,'adStd')]//a[contains(@class,'domainLink') or contains(@class,'test_domainLink')]/span");h(e)&&Utils.execTopBtmSponsQuery(".//*[@id='midRail']/div/div[contains(@class,'spl_shd') or contains(@class,'spl_unshd')]/div[contains(@class,'spl_ad')]/a[@class='nu']/span[@class='L4' or @class='newAdFont']",
".//*[@id='rpane']/div[contains(@class,'spl_shd') or contains(@class,'spl_unshd')]/div[contains(@class,'spl_ad')]/a[@class='nu']/span[@class='T10']");h(d)&&Utils.execRightSponsQuery(".//*[@id='sponsoredRight']//div[contains(@class,'spl_shd') or contains(@class,'spl_unshd')]/div[contains(@class,'spl_ad')]/a[@class='nu']/span[@class='L4' or @class='newAdFont']",".//*[@id='sponsoredRight']//div[contains(@class,'spl_shd') or contains(@class,'spl_unshd')]/div[contains(@class,'spl_ad')]/a[@class='nu']/span[@class='T10']");
h(a)&&Utils.execRightSponsQuery(".//*[@id='rr_sa']/div/div[contains(@class,'spl_shd') or contains(@class,'spl_unshd')]/div[contains(@class,'spl_ad')]/a[@class='nu']/span[@class='L4' or @class='newAdFont']",".//*[@id='rr_sa']/div/div[contains(@class,'spl_shd') or contains(@class,'spl_unshd')]/div[contains(@class,'spl_ad')]/a[@class='nu']/span[@class='T10']")}d=Utils.getSearchText();for(a=0;a<d.length;a++)e=Utils.getFormatLink(unescape(d[a])),Shasta.addURL(encodeURI(e))}return!0};c.createAnnotation=
function(){var d=navigator.userAgent.indexOf("Firefox");if(h(Utils)){var e=Utils.getSearchNodes();for(var a=0;a<e.length;a++){var b=Utils.createImage(a);if(b){var f=e[a],k=f.parentNode;f=f.nextSibling;var c=!1;if(!0!==Utils.isAlreadyAnnotated(k)){var g=document.createElement("a");g.setAttribute("onclick","return false");-1!==d?b.style.zIndex="0":g.style.position="relative";g.style.marginLeft="3px";g.appendChild(b);f||(c=!0);c?(k.appendChild(document.createTextNode(" ")),k.appendChild(g)):(k.insertBefore(document.createTextNode(" "),
f),k.insertBefore(g,f))}}}}return!0}}};c.initialize();return c}(b.SymBfw)})(executionContext);
