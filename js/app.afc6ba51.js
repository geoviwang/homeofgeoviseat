(function(t){function s(s){for(var a,o,i=s[0],r=s[1],l=s[2],d=0,f=[];d<i.length;d++)o=i[d],n[o]&&f.push(n[o][0]),n[o]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);u&&u(s);while(f.length)f.shift()();return c.push.apply(c,l||[]),e()}function e(){for(var t,s=0;s<c.length;s++){for(var e=c[s],a=!0,i=1;i<e.length;i++){var r=e[i];0!==n[r]&&(a=!1)}a&&(c.splice(s--,1),t=o(o.s=e[0]))}return t}var a={},n={app:0},c=[];function o(s){if(a[s])return a[s].exports;var e=a[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=a,o.d=function(t,s,e){o.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,s){if(1&s&&(t=o(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)o.d(e,a,function(s){return t[s]}.bind(null,a));return e},o.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(s,"a",s),s},o.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},o.p="/homeofgeoviseat/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=s,i=i.slice();for(var l=0;l<i.length;l++)s(i[l]);var u=r;c.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},"034f":function(t,s,e){"use strict";var a=e("64a9"),n=e.n(a);n.a},"064e":function(t,s,e){t.exports=e.p+"img/homeofgeovi.9756a6c1.jpg"},4678:function(t,s,e){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var s=c(t);return e(s)}function c(t){var s=a[t];if(!(s+1)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s}n.keys=function(){return Object.keys(a)},n.resolve=c,t.exports=n,n.id="4678"},"4e38":function(t,s,e){},"56d7":function(t,s,e){"use strict";e.r(s);e("cadf"),e("551c"),e("097d");var a=e("2b0e"),n=(e("4989"),e("f9e3"),e("4413"),function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("QuerySeat")],1)}),c=[],o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[e("img",{attrs:{src:t.imgUrl},on:{click:t.extraFunc}}),e("div",{staticClass:"row justify-content-center align-items-center"},[e("div",{staticClass:"seatCenter"},[t.isAdm?e("div",{staticClass:"row"},[e("div",{staticClass:"seat seatNone"}),e("div",{staticClass:"seat",class:t.seatClass.seat6,attrs:{id:"seat26"},on:{click:t.upNdown}}),e("div",{staticClass:"seat",class:t.seatClass.seat5,attrs:{id:"seat25"},on:{click:t.upNdown}}),e("div",{staticClass:"seat",class:t.seatClass.seat4,attrs:{id:"seat24"},on:{click:t.upNdown}}),e("div",{staticClass:"seat",class:t.seatClass.seat3,attrs:{id:"seat23"},on:{click:t.upNdown}}),e("div",{staticClass:"seat",class:t.seatClass.seat2,attrs:{id:"seat22"},on:{click:t.upNdown}}),e("div",{staticClass:"seat",class:t.seatClass.seat1,attrs:{id:"seat21"},on:{click:t.upNdown}})]):t._e(),e("div",{staticClass:"row"},[t.isAdm?e("div",{staticClass:"col"},[e("div",{staticClass:"row"},[e("div",{staticClass:"seat",class:t.seatClass.seat7,attrs:{id:"seat27"},on:{click:t.upNdown}})]),e("div",{staticClass:"row"},[e("div",{staticClass:"seat",class:t.seatClass.seat8,attrs:{id:"seat28"},on:{click:t.upNdown}})]),e("div",{staticClass:"row"},[e("div",{staticClass:"seat",class:t.seatClass.seat9,attrs:{id:"seat29"},on:{click:t.upNdown}})])]):t._e(),e("div",{staticClass:"bar",class:[t.isAdm?"barAdm":"barCus"],on:{click:t.admin}}),t.isAdm?t._e():e("div",{staticClass:"col"},[e("div",{staticClass:"row"},[e("div",{staticClass:"seat",class:t.seatClass.seat9,attrs:{id:"seat19"},on:{click:t.upNdown}})]),e("div",{staticClass:"row"},[e("div",{staticClass:"seat",class:t.seatClass.seat8,attrs:{id:"seat18"},on:{click:t.upNdown}})]),e("div",{staticClass:"row"},[e("div",{staticClass:"seat",class:t.seatClass.seat7,attrs:{id:"seat17"},on:{click:t.upNdown}})])])]),t.isAdm?t._e():e("div",{staticClass:"row"},[e("div",{staticClass:"seat",class:t.seatClass.seat1,attrs:{id:"seat11"},on:{click:t.upNdown}}),e("div",{staticClass:"seat",class:t.seatClass.seat2,attrs:{id:"seat12"},on:{click:t.upNdown}}),e("div",{staticClass:"seat",class:t.seatClass.seat3,attrs:{id:"seat13"},on:{click:t.upNdown}}),e("div",{staticClass:"seat",class:t.seatClass.seat4,attrs:{id:"seat14"},on:{click:t.upNdown}}),e("div",{staticClass:"seat",class:t.seatClass.seat5,attrs:{id:"seat15"},on:{click:t.upNdown}}),e("div",{staticClass:"seat",class:t.seatClass.seat6,attrs:{id:"seat16"},on:{click:t.upNdown}})]),e("br")])]),e("h2",{staticClass:"row"},[t._v(t._s(t.announce))])])},i=[],r=e("064e"),l=e.n(r),u=e("8aa5"),d=e("0241"),f=e.n(d),j=e("c1df"),b=e.n(j);b.a.locale("zh-tw");var p={apiKey:"AIzaSyDOfQKzA2WKr50Rc1fbaVWpgAaW1ALXCSo",authDomain:"ttlseatdatabase.firebaseapp.com",databaseURL:"https://ttlseatdatabase.firebaseio.com",projectId:"ttlseatdatabase",storageBucket:"ttlseatdatabase.appspot.com",messagingSenderId:"775630335713"};u["initializeApp"](p),u["auth"]().signInAnonymously().catch(function(t){var s=t.code,e=t.message;console.log(s),console.log(e)});var m=u["database"](),v={name:"QuerySeat",data:function(){return{isAdm:!1,announce:"",imgUrl:l.a,adminCount:0,psCount:0,seatClass:{seat1:"empty",seat2:"empty",seat3:"empty",seat4:"empty",seat5:"empty",seat6:"empty",seat7:"empty",seat8:"empty",seat9:"empty"}}},methods:{upNdown:function(t){if(this.isAdm){var s="seat"+t.target.id.substr(5);"empty"==this.seatClass[s]?f.a.fire({title:"請選擇座位狀態",text:"提醒：閃爍狀態半小時後會自動改為靜態",type:"question",showCancelButton:!0,confirmButtonColor:"blue",cancelButtonColor:"red",confirmButtonText:"閃爍",cancelButtonText:"靜態"}).then(function(t){t.dismiss&&"cancel"==t.dismiss?m.ref("/homeofgeoviseat/"+s).set({people:"awhile",mt:b()().format()}):m.ref("/homeofgeoviseat/"+s).set({people:"arrival",mt:b()().format()})}):f.a.fire({title:"確定取消？",text:"確定不是手誤喔！？！？！？",type:"question",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"對啦對啦",cancelButtonText:"我手滑惹"}).then(function(t){t.value&&m.ref("/homeofgeoviseat/"+s).set({people:"empty"})})}},admin:function(){if(this.adminCount++,!this.isAdm&&this.adminCount%5==0){var t=this.changeToAdm;f.a.fire({title:"請輸入密碼",type:"info",input:"password",showCancelButton:!0,confirmButtonText:"確定",cancelButtonText:"取消"}).then(function(s){s.value&&m.ref("/password/").once("value").then(function(e){s.value==e.val().homeofgeoviseat?(t(),f.a.fire({title:"祝妹子越來越多！！",text:"如果有多的話記得call阿忠",imageUrl:l.a})):f.a.fire("密碼錯惹","幫ＱＱ","error")})})}},extraFunc:function(){var t=this;this.psCount++,this.isAdm&&this.psCount%5==0&&f.a.fire({title:"請選擇功能",text:"點擊框框外空白處可取消選擇",type:"question",showCancelButton:!0,confirmButtonColor:"blue",cancelButtonColor:"red",confirmButtonText:"設定公告",cancelButtonText:"修改密碼"}).then(function(s){"cancel"==s.dismiss?t.changePs():s.value&&t.changeAnnounce()})},changePs:function(){f.a.fire({title:"輸入原密碼",type:"warning",input:"password",showCancelButton:!0,confirmButtonText:"確認",cancelButtonText:"取消"}).then(function(t){t.value&&m.ref("/password/").once("value").then(function(s){t.value==s.val().homeofgeoviseat?f.a.fire({title:"輸入新密碼",type:"info",input:"password",showCancelButton:!0,confirmButtonText:"修改密碼",cancelButtonText:"取消"}).then(function(t){t.value&&(m.ref("/password/").set({homeofgeoviseat:t.value}),f.a.fire("修改完成","忘記密碼呼叫北極","success"))}):f.a.fire("密碼錯惹","忘記密碼打給北極","error")})})},changeToAdm:function(){this.isAdm=!0},changeAnnounce:function(){f.a.fire({title:"請輸入公告或按清除公告按鈕",type:"info",text:"點擊框框外空白處可取消選擇",input:"text",showCancelButton:!0,confirmButtonColor:"blue",cancelButtonColor:"red",confirmButtonText:"送出公告",cancelButtonText:"清除公告"}).then(function(t){t.value?f.a.fire({title:"確認送出公告？",text:"公告："+t.value,type:"warning",showCancelButton:!0,confirmButtonText:"確認",cancelButtonText:"取消"}).then(function(s){s.value&&(m.ref("/announce/").set({homeofgeoviseat:t.value}),f.a.fire("公告已設定","","success"))}):"cancel"==t.dismiss&&f.a.fire({title:"確認清除？",type:"warning",showCancelButton:!0,confirmButtonText:"確認",cancelButtonText:"取消"}).then(function(t){t.value&&(m.ref("/announce/").set({homeofgeoviseat:""}),f.a.fire("公告已清除","","success"))})})},checkStatus:function(){m.ref("/homeofgeoviseat/").once("value").then(function(t){var s=t.val();for(var e in s)"arrival"==s[e].people&&b()().diff(b()(s[e].mt))>18e5&&m.ref("/homeofgeoviseat/"+e).set({people:"awhile",mt:s[e].mt})})}},mounted:function(){var t=this;m.ref("/homeofgeoviseat/").on("value",function(s){var e=s.val();for(var a in e)t.seatClass[a]=e[a].people}),m.ref("/announce/").on("value",function(s){t.announce=s.val()["homeofgeoviseat"]}),this.checkStatus(),setInterval(function(){t.checkStatus()},3e4)}},h=v,C=(e("b102"),e("2877")),g=Object(C["a"])(h,o,i,!1,null,"102236b6",null),w=g.exports,y={name:"app",components:{QuerySeat:w}},k=y,x=(e("034f"),Object(C["a"])(k,n,c,!1,null,null,null)),B=x.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(B)}}).$mount("#app")},"64a9":function(t,s,e){},b102:function(t,s,e){"use strict";var a=e("4e38"),n=e.n(a);n.a}});
//# sourceMappingURL=app.afc6ba51.js.map