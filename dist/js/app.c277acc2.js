(function(t){function e(e){for(var r,a,c=e[0],i=e[1],u=e[2],p=0,l=[];p<c.length;p++)a=c[p],o[a]&&l.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);h&&h(e);while(l.length)l.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},s=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var h=i;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"0782":function(t,e,n){"use strict";var r=n("c366"),o=n.n(r);o.a},1772:function(t,e,n){"use strict";var r=n("c7fb"),o=n.n(r);o.a},"22b0":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Banner",{on:{clear:t.clearPhotos}}),n("Search",{on:{searchPhotos:t.getPhotos}}),this.searchWord?n("h4",[t._v('You searched: "'),n("em",[t._v(t._s(this.searchWord))]),t._v('"')]):n("h4",[t._v("Type in a search term to begin!")]),this.noResults?n("h4",[t._v("No results! Try another search term.")]):t._e(),this.error?n("h4",[t._v(t._s(t.error))]):t._e(),t.photos.length?n("PhotoArea",{attrs:{photos:t.photos}}):t._e(),t.photos.length?n("div",{staticClass:"bottom-control"},[n("button",{on:{click:this.addMorePhotos}},[t._v("Show more pics!")]),n("button",{on:{click:this.clearPhotos}},[t._v("Start over")])]):t._e()],1)},s=[],a=(n("96cf"),n("3b8d")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"banner"},[n("h1",[n("span",{staticClass:"title",on:{click:t.clearPhotos}},[t._v("Picsearch")]),n("span",{staticClass:"info",on:{click:t.handleClick}},[t._v("i")])]),n("div",{staticClass:"instructions"},[this.showInfo?n("p",[t._v("Type a word or phrase and submit to show pictures of that subject! Click title to clear results. Uses "),n("a",{attrs:{href:"https://unsplash.com/developers"}},[t._v("Unsplash")]),t._v(" photo API. \n      "),n("span",{staticClass:"info",on:{click:t.handleClick}},[t._v("X")])]):t._e()])])},i=[],u={name:"banner",data:function(){return{showInfo:!1}},methods:{handleClick:function(){this.showInfo=!this.showInfo},clearPhotos:function(){this.$emit("clear")}}},h=u,p=(n("f230"),n("2877")),l=Object(p["a"])(h,c,i,!1,null,null,null),f=l.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"search-area"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchInput,expression:"searchInput"}],staticClass:"search-input",attrs:{type:"text",placeholder:"Search for..."},domProps:{value:t.searchInput},on:{input:function(e){e.target.composing||(t.searchInput=e.target.value)}}}),n("button",{staticClass:"submit",attrs:{disabled:!t.searchInput}},[t._v("Submit")])])])},v=[],m={name:"search",data:function(){return{searchInput:""}},methods:{handleSubmit:function(){var t=this.searchInput;this.$emit("searchPhotos",t),this.searchInput=""}}},_=m,g=(n("0782"),Object(p["a"])(_,d,v,!1,null,null,null)),b=g.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"photo-area"},t._l(t.photos,function(t){return n("Photo",{key:t.id,attrs:{photo:t}})}),1)},y=[],C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"photo"},[n("div",{staticClass:"photo-head"},[n("img",{attrs:{src:"http://www.pngall.com/wp-content/uploads/2/ThumbTack-PNG-File-Download-Free.png"}}),n("p",[t._v("Photo by: "+t._s(t.photo.user))])]),n("div",{staticClass:"image-area"},[n("img",{staticClass:"picture",attrs:{src:t.photo.url,alt:t.photo.alt_description}})]),n("div",{staticClass:"photo-info"},[n("h3",[t._v("Description")]),t.photo.description||t.photo.alt_description?t._e():n("p",[t._v("No description given by user")]),n("p",[t._v(t._s(t.photo.description))]),n("p",[t._v(t._s(t.photo.alt_description))]),n("h3",[t._v("Associated terms")]),n("ul",{staticClass:"tags"},t._l(t.photo.tags,function(e,r){return n("li",{key:r,staticClass:"tag"},[t._v("\n        "+t._s(e)),r!==t.photo.tags.length-1?n("span",[t._v(",")]):t._e()])}),0)])])},k=[],P={name:"photo",props:{photo:{type:Object,required:!0}}},x=P,j=(n("a197"),Object(p["a"])(x,C,k,!1,null,null,null)),O=j.exports,I={name:"photoArea",props:{photos:{type:Array,required:!0}},components:{Photo:O}},S=I,R=(n("1772"),Object(p["a"])(S,w,y,!1,null,null,null)),T=R.exports,$=function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(e){var n,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:if(n=t.sent,!n.ok){t.next=10;break}return t.next=6,n.json();case 6:return r=t.sent,t.abrupt("return",r);case 10:throw new Error("Error!");case 11:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),E=function(t){return t.results.map(function(t){var e="";return t.tags.length&&(e=t.tags.map(function(t){return t.title})),{id:t.id,created_at:t.created_at,description:t.description,likes:t.likes,alt_description:t.alt_description,tags:e,url:t.urls.full,user:t.user.username,width:t.width,height:t.height}})},q="cc6794a4f688c2a25700ac53a00f169af5ca81e37071df97a8c15fad28447779",A={name:"app",data:function(){return{searchWord:"",photos:[],error:"",noResults:!1,pageCount:1}},methods:{getPhotos:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(e){var n,r,o,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.pageCount=1,t.prev=1,this.searchWord=e,n="https://api.unsplash.com/search/photos",r=n+"?query=".concat(e,"&page=").concat(this.pageCount,"&orientation=squarish&per_page=12&client_id=").concat(q),t.next=7,$(r);case 7:o=t.sent,this.checkResults(o),s=E(o),this.photos=s,t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](1),this.error=t.t0.message;case 16:case"end":return t.stop()}},t,this,[[1,13]])}));function e(e){return t.apply(this,arguments)}return e}(),addMorePhotos:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e,n,r,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.pageCount++,t.prev=1,e="https://api.unsplash.com/search/photos",n=e+"?query=".concat(this.searchWord,"&page=").concat(this.pageCount,"&orientation=squarish&per_page=12&client_id=").concat(q),t.next=6,$(n);case 6:r=t.sent,o=E(r),this.photos=this.photos.concat(o),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),this.error=t.t0.message;case 14:case"end":return t.stop()}},t,this,[[1,11]])}));function e(){return t.apply(this,arguments)}return e}(),clearPhotos:function(){this.searchWord="",this.photos=[],this.pageCount=1},checkResults:function(t){t.results.length?this.noResults=!1:this.noResults=!0}},components:{Banner:f,Search:b,PhotoArea:T}},M=A,W=(n("034f"),Object(p["a"])(M,o,s,!1,null,null,null)),N=W.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(N)}}).$mount("#app")},"64a9":function(t,e,n){},"836f":function(t,e,n){},a197:function(t,e,n){"use strict";var r=n("22b0"),o=n.n(r);o.a},c366:function(t,e,n){},c7fb:function(t,e,n){},f230:function(t,e,n){"use strict";var r=n("836f"),o=n.n(r);o.a}});
//# sourceMappingURL=app.c277acc2.js.map