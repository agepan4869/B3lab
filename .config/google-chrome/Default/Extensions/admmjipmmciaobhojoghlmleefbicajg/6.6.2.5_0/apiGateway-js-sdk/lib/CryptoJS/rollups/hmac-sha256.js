var CryptoJS=CryptoJS||function(k,l){var d={},f=d.lib={},q=function(){},m=f.Base={extend:function(a){q.prototype=this;var c=new q;a&&c.mixIn(a);c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments)});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
t=f.WordArray=m.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=l?c:4*a.length},toString:function(a){return(a||h).stringify(this)},concat:function(a){var c=this.words,g=a.words,b=this.sigBytes;a=a.sigBytes;this.clamp();if(b%4)for(var e=0;e<a;e++)c[b+e>>>2]|=(g[e>>>2]>>>24-e%4*8&255)<<24-(b+e)%4*8;else if(65535<g.length)for(e=0;e<a;e+=4)c[b+e>>>2]=g[e>>>2];else c.push.apply(c,g);this.sigBytes+=a;return this},clamp:function(){var a=this.words,c=this.sigBytes;a[c>>>2]&=4294967295<<32-
c%4*8;a.length=k.ceil(c/4)},clone:function(){var a=m.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var c=[],g=0;g<a;g+=4)c.push(4294967296*k.random()|0);return new t.init(c,a)}}),p=d.enc={},h=p.Hex={stringify:function(a){var c=a.words;a=a.sigBytes;for(var g=[],b=0;b<a;b++){var e=c[b>>>2]>>>24-b%4*8&255;g.push((e>>>4).toString(16));g.push((e&15).toString(16))}return g.join("")},parse:function(a){for(var c=a.length,g=[],b=0;b<c;b+=2)g[b>>>3]|=parseInt(a.substr(b,2),16)<<
24-b%8*4;return new t.init(g,c/2)}},n=p.Latin1={stringify:function(a){var c=a.words;a=a.sigBytes;for(var g=[],b=0;b<a;b++)g.push(String.fromCharCode(c[b>>>2]>>>24-b%4*8&255));return g.join("")},parse:function(a){for(var c=a.length,g=[],b=0;b<c;b++)g[b>>>2]|=(a.charCodeAt(b)&255)<<24-b%4*8;return new t.init(g,c)}},u=p.Utf8={stringify:function(a){try{return decodeURIComponent(escape(n.stringify(a)))}catch(c){throw Error("Malformed UTF-8 data");}},parse:function(a){return n.parse(unescape(encodeURIComponent(a)))}},
w=f.BufferedBlockAlgorithm=m.extend({reset:function(){this._data=new t.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=u.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var c=this._data,g=c.words,b=c.sigBytes,e=this.blockSize,d=b/(4*e);d=a?k.ceil(d):k.max((d|0)-this._minBufferSize,0);a=d*e;b=k.min(4*a,b);if(a){for(var f=0;f<a;f+=e)this._doProcessBlock(g,f);f=g.splice(0,a);c.sigBytes-=b}return new t.init(f,b)},clone:function(){var a=m.clone.call(this);
a._data=this._data.clone();return a},_minBufferSize:0});f.Hasher=w.extend({cfg:m.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){w.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(c,g){return(new a.init(g)).finalize(c)}},_createHmacHelper:function(a){return function(c,g){return(new v.HMAC.init(a,
g)).finalize(c)}}});var v=d.algo={};return d}(Math);
(function(k){var l=CryptoJS,d=l.lib,f=d.WordArray,q=d.Hasher;d=l.algo;for(var m=[],t=[],p=function(a){return 4294967296*(a-(a|0))|0},h=2,n=0;64>n;){a:{var u=h;for(var w=k.sqrt(u),v=2;v<=w;v++)if(!(u%v)){u=!1;break a}u=!0}u&&(8>n&&(m[n]=p(k.pow(h,.5))),t[n]=p(k.pow(h,1/3)),n++);h++}var a=[];d=d.SHA256=q.extend({_doReset:function(){this._hash=new f.init(m.slice(0))},_doProcessBlock:function(c,g){for(var b=this._hash.words,e=b[0],d=b[1],f=b[2],k=b[3],h=b[4],m=b[5],q=b[6],p=b[7],r=0;64>r;r++){if(16>r)a[r]=
c[g+r]|0;else{var l=a[r-15],n=a[r-2];a[r]=((l<<25|l>>>7)^(l<<14|l>>>18)^l>>>3)+a[r-7]+((n<<15|n>>>17)^(n<<13|n>>>19)^n>>>10)+a[r-16]}l=p+((h<<26|h>>>6)^(h<<21|h>>>11)^(h<<7|h>>>25))+(h&m^~h&q)+t[r]+a[r];n=((e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22))+(e&d^e&f^d&f);p=q;q=m;m=h;h=k+l|0;k=f;f=d;d=e;e=l+n|0}b[0]=b[0]+e|0;b[1]=b[1]+d|0;b[2]=b[2]+f|0;b[3]=b[3]+k|0;b[4]=b[4]+h|0;b[5]=b[5]+m|0;b[6]=b[6]+q|0;b[7]=b[7]+p|0},_doFinalize:function(){var a=this._data,d=a.words,b=8*this._nDataBytes,e=8*a.sigBytes;
d[e>>>5]|=128<<24-e%32;d[(e+64>>>9<<4)+14]=k.floor(b/4294967296);d[(e+64>>>9<<4)+15]=b;a.sigBytes=4*d.length;this._process();return this._hash},clone:function(){var a=q.clone.call(this);a._hash=this._hash.clone();return a}});l.SHA256=q._createHelper(d);l.HmacSHA256=q._createHmacHelper(d)})(Math);
(function(){var k=CryptoJS,l=k.enc.Utf8;k.algo.HMAC=k.lib.Base.extend({init:function(d,f){d=this._hasher=new d.init;"string"==typeof f&&(f=l.parse(f));var k=d.blockSize,m=4*k;f.sigBytes>m&&(f=d.finalize(f));f.clamp();d=this._oKey=f.clone();f=this._iKey=f.clone();for(var t=d.words,p=f.words,h=0;h<k;h++)t[h]^=1549556828,p[h]^=909522486;d.sigBytes=f.sigBytes=m;this.reset()},reset:function(){var d=this._hasher;d.reset();d.update(this._iKey)},update:function(d){this._hasher.update(d);return this},finalize:function(d){var f=
this._hasher;d=f.finalize(d);f.reset();return f.finalize(this._oKey.clone().concat(d))}})})();
