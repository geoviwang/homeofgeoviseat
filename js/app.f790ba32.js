(function(s){function e(e){for(var t,r,o=e[0],i=e[1],d=e[2],f=0,j=[];f<o.length;f++)r=o[f],n[r]&&j.push(n[r][0]),n[r]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(s[t]=i[t]);l&&l(e);while(j.length)j.shift()();return c.push.apply(c,d||[]),a()}function a(){for(var s,e=0;e<c.length;e++){for(var a=c[e],t=!0,o=1;o<a.length;o++){var i=a[o];0!==n[i]&&(t=!1)}t&&(c.splice(e--,1),s=r(r.s=a[0]))}return s}var t={},n={app:0},c=[];function r(e){if(t[e])return t[e].exports;var a=t[e]={i:e,l:!1,exports:{}};return s[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=s,r.c=t,r.d=function(s,e,a){r.o(s,e)||Object.defineProperty(s,e,{enumerable:!0,get:a})},r.r=function(s){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},r.t=function(s,e){if(1&e&&(s=r(s)),8&e)return s;if(4&e&&"object"===typeof s&&s&&s.__esModule)return s;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:s}),2&e&&"string"!=typeof s)for(var t in s)r.d(a,t,function(e){return s[e]}.bind(null,t));return a},r.n=function(s){var e=s&&s.__esModule?function(){return s["default"]}:function(){return s};return r.d(e,"a",e),e},r.o=function(s,e){return Object.prototype.hasOwnProperty.call(s,e)},r.p="/homeofgeoviseat/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var l=i;c.push([0,"chunk-vendors"]),a()})({0:function(s,e,a){s.exports=a("56d7")},"034f":function(s,e,a){"use strict";var t=a("64a9"),n=a.n(t);n.a},"064e":function(s,e,a){s.exports=a.p+"img/homeofgeovi.9756a6c1.jpg"},4678:function(s,e,a){var t={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(s){var e=c(s);return a(e)}function c(s){var e=t[s];if(!(e+1)){var a=new Error("Cannot find module '"+s+"'");throw a.code="MODULE_NOT_FOUND",a}return e}n.keys=function(){return Object.keys(t)},n.resolve=c,s.exports=n,n.id="4678"},4693:function(s,e,a){"use strict";var t=a("7487"),n=a.n(t);n.a},"56d7":function(s,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var t=a("2b0e"),n=(a("1157"),a("4989"),a("f9e3"),function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("div",{attrs:{id:"app"}},[a("QuerySeat")],1)}),c=[],r=function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("div",{staticClass:"container"},[a("img",{attrs:{src:s.imgUrl}}),a("div",{staticClass:"row justify-content-center align-items-center"},[a("div",{staticClass:"seatCenter"},[a("div",{staticClass:"row"},[a("div",{staticClass:"bar",on:{click:s.admin}}),a("div",{staticClass:"col"},[a("div",{staticClass:"row",attrs:{id:"seat9"}},[a("div",{staticClass:"seat",class:s.seatClass.seat9,on:{click:s.upNdown}})]),a("div",{staticClass:"row",attrs:{id:"seat8"}},[a("div",{staticClass:"seat",class:s.seatClass.seat8,on:{click:s.upNdown}})]),a("div",{staticClass:"row",attrs:{id:"seat7"}},[a("div",{staticClass:"seat",class:s.seatClass.seat7,on:{click:s.upNdown}})])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"seat",class:s.seatClass.seat1,attrs:{id:"seat1"},on:{click:s.upNdown}}),a("div",{staticClass:"seat",class:s.seatClass.seat2,attrs:{id:"seat2"},on:{click:s.upNdown}}),a("div",{staticClass:"seat",class:s.seatClass.seat3,attrs:{id:"seat3"},on:{click:s.upNdown}}),a("div",{staticClass:"seat",class:s.seatClass.seat4,attrs:{id:"seat4"},on:{click:s.upNdown}}),a("div",{staticClass:"seat",class:s.seatClass.seat5,attrs:{id:"seat5"},on:{click:s.upNdown}}),a("div",{staticClass:"seat",class:s.seatClass.seat6,attrs:{id:"seat6"},on:{click:s.upNdown}})])])])])},o=[],i=a("064e"),d=a.n(i),l=a("8aa5"),f=a("c1df"),j=a.n(f);j.a.locale("zh-tw");var u={apiKey:"AIzaSyDOfQKzA2WKr50Rc1fbaVWpgAaW1ALXCSo",authDomain:"ttlseatdatabase.firebaseapp.com",databaseURL:"https://ttlseatdatabase.firebaseio.com",projectId:"ttlseatdatabase",storageBucket:"ttlseatdatabase.appspot.com",messagingSenderId:"775630335713"};l["initializeApp"](u),l["auth"]().signInAnonymously().catch(function(s){var e=s.code,a=s.message;console.log(e),console.log(a)});var b=l["database"](),p={name:"QuerySeat",data:function(){return{imgUrl:d.a,adminCount:0,seatClass:{seat1:"empty",seat2:"empty",seat3:"empty",seat4:"empty",seat5:"empty",seat6:"empty",seat7:"empty",seat8:"empty",seat9:"empty"}}},methods:{upNdown:function(s){if(!(this.adminCount<5)){var e=s.target.id,a=this.seatClass;"empty"==a[e]?b.ref("/homeofgeoviseat/"+e).set({people:"arrival",mt:j()().format()}):b.ref("/homeofgeoviseat/"+e).set({people:"empty"})}},admin:function(){this.adminCount++,5==this.adminCount&&alert("歡迎光臨北極的家>.^")}},mounted:function(){var s=this.seatClass;b.ref("/homeofgeoviseat/").on("value",function(e){var a=e.val();for(var t in a)s[t]=a[t].people}),setInterval(function(){b.ref("/homeofgeoviseat/").once("value").then(function(s){var e=s.val();for(var a in e)"arrival"==e[a].people&&j()().diff(j()(e[a].mt))>18e5&&b.ref("/homeofgeoviseat/"+a).set({people:"awhile"})})},1e3)}},m=p,v=(a("4693"),a("2877")),h=Object(v["a"])(m,r,o,!1,null,"a903551a",null);h.options.__file="QuerySeat.vue";var y=h.exports,g={name:"app",components:{QuerySeat:y}},k=g,C=(a("034f"),Object(v["a"])(k,n,c,!1,null,null,null));C.options.__file="App.vue";var w=C.exports;t["a"].config.productionTip=!1,new t["a"]({render:function(s){return s(w)}}).$mount("#app")},"64a9":function(s,e,a){},7487:function(s,e,a){}});
//# sourceMappingURL=app.f790ba32.js.map