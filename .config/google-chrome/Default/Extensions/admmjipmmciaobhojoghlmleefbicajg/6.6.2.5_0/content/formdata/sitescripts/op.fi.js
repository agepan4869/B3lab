(function(a){if("##REPLACE_STRING_FOR_BROWSER##"()){var c="",d="";a.waxMain=function(){var b=document.querySelector("input[name=USERID]"),a=document.querySelector("input[name=PASSWORD]");null!=b&&"undefined"!=typeof b&&b.addEventListener("change",function(a){d=b.value},!1);null!=a&&"undefined"!=typeof a&&a.addEventListener("change",function(b){c=a.value},!1)};a.waxFetchData=function(){var a={};a[SymWax.constants.loginType.USERNAME]=d;a[SymWax.constants.loginType.PASSWORD]=c;return a};a.onload=a.waxMain}})(window);
