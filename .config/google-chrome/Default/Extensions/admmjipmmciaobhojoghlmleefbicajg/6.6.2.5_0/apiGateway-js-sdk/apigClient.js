var apigClientFactory={newClient:function(b){var e={};void 0===b&&(b={accessKey:"",secretKey:"",sessionToken:"",region:"",apiKey:void 0,defaultContentType:"application/json",defaultAcceptType:"application/json"});void 0===b.accessKey&&(b.accessKey="");void 0===b.secretKey&&(b.secretKey="");void 0===b.apiKey&&(b.apiKey="");void 0===b.sessionToken&&(b.sessionToken="");void 0===b.region&&(b.region="us-east-1");void 0===b.defaultContentType&&(b.defaultContentType="application/json");void 0===b.defaultAcceptType&&
(b.defaultAcceptType="application/json");var l=/(^https?:\/\/[^\/]+)/g.exec("https://gz0s1l0bj0.execute-api.us-east-1.amazonaws.com/PROD")[1],g="https://gz0s1l0bj0.execute-api.us-east-1.amazonaws.com/PROD".substring(l.length),k={accessKey:b.accessKey,secretKey:b.secretKey,sessionToken:b.sessionToken,serviceName:"execute-api",region:b.region,endpoint:l,defaultContentType:b.defaultContentType,defaultAcceptType:b.defaultAcceptType},f="NONE";void 0!==k.accessKey&&""!==k.accessKey&&void 0!==k.secretKey&&
""!==k.secretKey&&(f="AWS_IAM");var h=apiGateway.core.apiGatewayClientFactory.newClient({endpoint:l,defaultContentType:b.defaultContentType,defaultAcceptType:b.defaultAcceptType},k);e.deviceGet=function(a,d,c){void 0===c&&(c={});apiGateway.core.utils.assertParametersDefined(a,[],["body"]);a={verb:"GET",path:g+uritemplate("/device").expand(apiGateway.core.utils.parseParametersToObject(a,[])),headers:apiGateway.core.utils.parseParametersToObject(a,[]),queryParams:apiGateway.core.utils.parseParametersToObject(a,
[]),body:d};return h.makeRequest(a,f,c,b.apiKey)};e.devicePut=function(a,d,c){void 0===c&&(c={});apiGateway.core.utils.assertParametersDefined(a,["body","x-symc-access-token"],["body"]);a={verb:"PUT",path:g+uritemplate("/device").expand(apiGateway.core.utils.parseParametersToObject(a,[])),headers:apiGateway.core.utils.parseParametersToObject(a,["x-symc-access-token"]),queryParams:apiGateway.core.utils.parseParametersToObject(a,[]),body:d};return h.makeRequest(a,f,c,b.apiKey)};e.deviceDelete=function(a,
d,c){void 0===c&&(c={});apiGateway.core.utils.assertParametersDefined(a,["body"],["body"]);a={verb:"DELETE",path:g+uritemplate("/device").expand(apiGateway.core.utils.parseParametersToObject(a,[])),headers:apiGateway.core.utils.parseParametersToObject(a,[]),queryParams:apiGateway.core.utils.parseParametersToObject(a,[]),body:d};return h.makeRequest(a,f,c,b.apiKey)};e.deviceOptions=function(a,d,c){void 0===c&&(c={});apiGateway.core.utils.assertParametersDefined(a,[],["body"]);a={verb:"OPTIONS",path:g+
uritemplate("/device").expand(apiGateway.core.utils.parseParametersToObject(a,[])),headers:apiGateway.core.utils.parseParametersToObject(a,[]),queryParams:apiGateway.core.utils.parseParametersToObject(a,[]),body:d};return h.makeRequest(a,f,c,b.apiKey)};e.unlockRequestPost=function(a,d,c){void 0===c&&(c={});apiGateway.core.utils.assertParametersDefined(a,["body"],["body"]);a={verb:"POST",path:g+uritemplate("/unlock-request").expand(apiGateway.core.utils.parseParametersToObject(a,[])),headers:apiGateway.core.utils.parseParametersToObject(a,
[]),queryParams:apiGateway.core.utils.parseParametersToObject(a,[]),body:d};return h.makeRequest(a,f,c,b.apiKey)};e.unlockRequestOptions=function(a,d,c){void 0===c&&(c={});apiGateway.core.utils.assertParametersDefined(a,[],["body"]);a={verb:"OPTIONS",path:g+uritemplate("/unlock-request").expand(apiGateway.core.utils.parseParametersToObject(a,[])),headers:apiGateway.core.utils.parseParametersToObject(a,[]),queryParams:apiGateway.core.utils.parseParametersToObject(a,[]),body:d};return h.makeRequest(a,
f,c,b.apiKey)};e.unlockResponsePost=function(a,d,c){void 0===c&&(c={});apiGateway.core.utils.assertParametersDefined(a,["body"],["body"]);a={verb:"POST",path:g+uritemplate("/unlock-response").expand(apiGateway.core.utils.parseParametersToObject(a,[])),headers:apiGateway.core.utils.parseParametersToObject(a,[]),queryParams:apiGateway.core.utils.parseParametersToObject(a,[]),body:d};return h.makeRequest(a,f,c,b.apiKey)};e.unlockResponseOptions=function(a,d,c){void 0===c&&(c={});apiGateway.core.utils.assertParametersDefined(a,
[],["body"]);a={verb:"OPTIONS",path:g+uritemplate("/unlock-response").expand(apiGateway.core.utils.parseParametersToObject(a,[])),headers:apiGateway.core.utils.parseParametersToObject(a,[]),queryParams:apiGateway.core.utils.parseParametersToObject(a,[]),body:d};return h.makeRequest(a,f,c,b.apiKey)};return e}};