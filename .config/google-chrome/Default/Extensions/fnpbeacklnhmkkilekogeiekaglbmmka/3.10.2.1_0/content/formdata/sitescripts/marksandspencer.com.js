(function(a){a.waxFill_Marksandspencer_create_input=function(){if(null===document.querySelector("#waxYear")){var b=document.createElement("input");b.setAttribute("id","waxYear");b.setAttribute("type","hidden");var a=document.querySelector("#addCardDetailsInPage");a.parentNode.insertBefore(b,a.nextSibling)}};a.waxFill_Marksandspencer=function(){var a=document.querySelector("#waxYear");document.querySelector("#expiryYear").value=a.value.substring(2,4)}})(window);
