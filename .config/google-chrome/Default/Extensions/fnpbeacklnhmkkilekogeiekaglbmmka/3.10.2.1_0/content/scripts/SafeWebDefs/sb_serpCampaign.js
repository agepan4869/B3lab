(function(d){var c=NSSS.constants,b={_processSERPCampaignLinks:function(){(document.querySelectorAll("a[href]")||[]).forEach(function(a){a&&(a.addEventListener("contextmenu",b._sendNewWindowOpenEvent),a.addEventListener("click",b._sendNewWindowOpenEvent))})},_sendNewWindowOpenEvent:function(a){""!==(this.href||"")&&SymBfw.extensionAdapter.sendMessage({id:c.SERP_RESULT_CLICKED,eventType:a.type})},_isSERPValidPage:function(){if(!1===c.IS_SERP_CAMPAIGN_ENABLED)return!1;var a=document.URL.toLowerCase();
a=URI(a);var b=a.domain(),d=a.query(!0),e=c.SERP_CAMPAIGN_SUPPORTED_DOMAIN[b];return!e||SymBfw.utils.isNil(a.query())?!1:b===c.YAHOO_DOMAIN_NAME?(b=c.yahooVendorConstants.HSPART+"="+c.yahooVendorConstants.HSPART_VALUE,-1!==a.query().toLocaleLowerCase().indexOf(b)):-1!==(d[c.SERP_CAMPAIGN_PARAM[e].CAMPAIGN_NAME]||"").indexOf(c.SERP_CAMPAIGN_PARAM[e].CAMPAIGN_VALUE)},_init:function(){b._isSERPValidPage()&&window.addEventListener("DOMContentLoaded",b._processSERPCampaignLinks,!0)}};(d.NSSS||{}).sb_serpCampaign=
b})(executionContext);
