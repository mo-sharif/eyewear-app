(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{pZl2:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=function(){},a=u("pMnS"),o=u("ra/t"),i=u("ntG5"),r=u("CI40"),c=u("ZYCi"),s=u("fHOL"),f=u("tXrQ"),p=u("Ip0R"),b=u("s5XM"),h=function(){function l(l,n,u){this.GetJson=l,this.router=n,this.route=u,this.id=this.route.snapshot.paramMap.get("id")}return l.prototype.ngOnInit=function(){return l=this,void 0,u=function(){var l=this;return function(l,n){var u,t,e,a,o={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(u)throw new TypeError("Generator is already executing.");for(;o;)try{if(u=1,t&&(e=2&a[0]?t.return:a[0]?t.throw||((e=t.return)&&e.call(t),0):t.next)&&!(e=e.call(t,a[1])).done)return e;switch(t=0,e&&(a=[2&a[0],e.value]),a[0]){case 0:case 1:e=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,t=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(e=(e=o.trys).length>0&&e[e.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!e||a[1]>e[0]&&a[1]<e[3])){o.label=a[1];break}if(6===a[0]&&o.label<e[1]){o.label=e[1],e=a;break}if(e&&o.label<e[2]){o.label=e[2],o.ops.push(a);break}e[2]&&o.ops.pop(),o.trys.pop();continue}a=n.call(l,o)}catch(l){a=[6,l],t=0}finally{u=e=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}}(this,function(n){switch(n.label){case 0:return[4,this.GetJson.getJSon().subscribe(function(n){l.eyewearList=n.eyewear,l.selectedEyewear=n.eyewear[l.id],l.frontImg=n.eyewear[l.id].images.frontal,l.sideImg=n.eyewear[l.id].images.side,l.price=n.eyewear[l.id].price,l.desc=n.eyewear[l.id].description,l.brand=n.eyewear[l.id].brand,l.name=n.eyewear[l.id].name})];case 1:return n.sent(),[2]}})},new((n=void 0)||(n=Promise))(function(t,e){function a(l){try{i(u.next(l))}catch(l){e(l)}}function o(l){try{i(u.throw(l))}catch(l){e(l)}}function i(l){l.done?t(l.value):new n(function(n){n(l.value)}).then(a,o)}i((u=u.apply(l,[])).next())});var l,n,u},l.prototype.onClick=function(l){return this.router.navigate(["/eyewear",{id:l}])},l}(),d=t.Pa({encapsulation:0,styles:[[""]],data:{}});function m(l){return t.eb(0,[(l()(),t.Ra(0,0,null,null,6,"ion-col",[["size","6"],["size-md",""]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onClick(l.context.$implicit.id)&&t),t},o.F,o.j)),t.Qa(1,49152,null,0,i.q,[t.l],{size:[0,"size"]},null),(l()(),t.Ra(2,0,null,0,4,"div",[["margin",""],["padding",""]],null,null,null,null,null)),(l()(),t.Ra(3,0,null,null,1,"ion-img",[["padding",""]],null,null,null,o.K,o.o)),t.Qa(4,49152,null,0,i.B,[t.l],{src:[0,"src"]},null),(l()(),t.Ra(5,0,null,null,0,"h4",[["class","title"],["no-margin",""]],[[8,"innerHTML",1]],null,null,null,null)),(l()(),t.Ra(6,0,null,null,0,"p",[["class","subTitle"],["no-margin",""]],[[8,"innerHTML",1]],null,null,null,null))],function(l,n){l(n,1,0,"6"),l(n,4,0,n.context.$implicit.images.frontal)},function(l,n){l(n,5,0,n.context.$implicit.brand),l(n,6,0,n.context.$implicit.name)})}function g(l){return t.eb(0,[(l()(),t.Ra(0,0,null,null,11,"ion-header",[],null,null,null,o.I,o.m)),t.Qa(1,49152,null,0,i.y,[t.l],null,null),(l()(),t.Ra(2,0,null,0,9,"ion-toolbar",[],null,null,null,o.R,o.u)),t.Qa(3,49152,null,0,i.Xa,[t.l],null,null),(l()(),t.Ra(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,o.z,o.d)),t.Qa(5,49152,null,0,i.g,[],null,null),(l()(),t.Ra(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.bb(l,8).onClick(u)&&e),e},o.x,o.b)),t.Qa(7,49152,null,0,i.c,[t.l],null,null),t.Qa(8,16384,null,0,r.a,[[2,c.l],[2,s.a],f.a,t.l],null,null),(l()(),t.Ra(9,0,null,0,2,"ion-title",[["text-center",""]],null,null,null,o.Q,o.v)),t.Qa(10,49152,null,0,i.Ya,[t.l],null,null),(l()(),t.db(-1,0,["DITTO"])),(l()(),t.Ra(12,0,null,null,34,"ion-content",[["padding",""]],null,null,null,o.G,o.k)),t.Qa(13,49152,null,0,i.r,[t.l],null,null),(l()(),t.Ra(14,0,null,0,32,"ion-grid",[["text-center",""]],null,null,null,o.H,o.l)),t.Qa(15,49152,null,0,i.x,[t.l],null,null),(l()(),t.Ra(16,0,null,0,9,"ion-row",[],null,null,null,o.N,o.r)),t.Qa(17,49152,null,0,i.Ea,[],null,null),(l()(),t.Ra(18,0,null,0,3,"ion-col",[["justify-content-center",""],["size","6"],["size-md",""]],null,null,null,o.F,o.j)),t.Qa(19,49152,null,0,i.q,[t.l],{size:[0,"size"]},null),(l()(),t.Ra(20,0,null,0,1,"ion-img",[["padding",""]],null,null,null,o.K,o.o)),t.Qa(21,49152,null,0,i.B,[t.l],{src:[0,"src"]},null),(l()(),t.Ra(22,0,null,0,3,"ion-col",[["justify-content-center",""],["size","6"],["size-md",""]],null,null,null,o.F,o.j)),t.Qa(23,49152,null,0,i.q,[t.l],{size:[0,"size"]},null),(l()(),t.Ra(24,0,null,0,1,"ion-img",[["padding",""]],null,null,null,o.K,o.o)),t.Qa(25,49152,null,0,i.B,[t.l],{src:[0,"src"]},null),(l()(),t.Ra(26,0,null,0,6,"ion-row",[],null,null,null,o.N,o.r)),t.Qa(27,49152,null,0,i.Ea,[],null,null),(l()(),t.Ra(28,0,null,0,4,"ion-col",[["justify-content-center",""],["size","12"],["size-md",""]],null,null,null,o.F,o.j)),t.Qa(29,49152,null,0,i.q,[t.l],{size:[0,"size"]},null),(l()(),t.Ra(30,0,null,0,0,"h1",[["class","hero"]],[[8,"innerHTML",1]],null,null,null,null)),(l()(),t.Ra(31,0,null,0,0,"p",[["class","subTitle"],["no-margin",""]],[[8,"innerHTML",1]],null,null,null,null)),(l()(),t.Ra(32,0,null,0,0,"p",[["class","subTitle"],["no-margin",""]],[[8,"innerHTML",1]],null,null,null,null)),(l()(),t.Ra(33,0,null,0,3,"ion-row",[],null,null,null,o.N,o.r)),t.Qa(34,49152,null,0,i.Ea,[],null,null),(l()(),t.Ra(35,0,null,0,1,"ion-col",[["justify-content-center",""],["size","6"],["size-md",""],["text-left",""]],[[8,"innerHTML",1]],null,null,o.F,o.j)),t.Qa(36,49152,null,0,i.q,[t.l],{size:[0,"size"]},null),(l()(),t.Ra(37,0,null,0,5,"ion-row",[],null,null,null,o.N,o.r)),t.Qa(38,49152,null,0,i.Ea,[],null,null),(l()(),t.Ra(39,0,null,0,3,"ion-col",[["justify-content-center",""],["size","12"],["size-md",""]],null,null,null,o.F,o.j)),t.Qa(40,49152,null,0,i.q,[t.l],{size:[0,"size"]},null),(l()(),t.Ra(41,0,null,0,1,"h1",[["class","hero"]],null,null,null,null,null)),(l()(),t.db(-1,null,["Select Your Eyewear"])),(l()(),t.Ra(43,0,null,0,3,"ion-row",[],null,null,null,o.N,o.r)),t.Qa(44,49152,null,0,i.Ea,[],null,null),(l()(),t.Ia(16777216,null,0,1,null,m)),t.Qa(46,278528,null,0,p.h,[t.Q,t.N,t.u],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,19,0,"6"),l(n,21,0,u.frontImg),l(n,23,0,"6"),l(n,25,0,u.sideImg),l(n,29,0,"12"),l(n,36,0,"6"),l(n,40,0,"12"),l(n,46,0,u.eyewearList)},function(l,n){var u=n.component;l(n,30,0,u.brand),l(n,31,0,u.name),l(n,32,0,u.price),l(n,35,0,u.desc)})}var Q=t.Na("app-eyewear",h,function(l){return t.eb(0,[(l()(),t.Ra(0,0,null,null,1,"app-eyewear",[],null,null,null,g,d)),t.Qa(1,114688,null,0,h,[b.a,c.l,c.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),R=u("UT9D"),y=u("WmJ3"),w=u("95zI"),v=function(){},k=t.Pa({encapsulation:0,styles:[[""]],data:{}});function O(l){return t.eb(0,[(l()(),t.Ra(0,0,null,null,17,"ion-tabs",[],null,[[null,"ionTabbarClick"]],function(l,n,u){var e=!0;return"ionTabbarClick"===n&&(e=!1!==t.bb(l,2).onTabbarClick(u)&&e),e},o.P,o.t)),t.Qa(1,49152,null,0,i.Sa,[t.l],null,null),t.Qa(2,16384,null,0,R.a,[[2,c.l],t.l],null,null),(l()(),t.Ra(3,16777216,null,0,4,"ion-tab",[["href","/tabs/(home:home)"],["icon","home"],["label","Home"]],null,[[null,"ionRouterOutletActivated"]],function(l,n,u){var e=!0;return"ionRouterOutletActivated"===n&&(e=!1!==t.bb(l,5).onNavChanged(u)&&e),e},o.O,o.s)),t.Qa(4,49152,null,0,i.Ra,[t.l],{label:[0,"label"],href:[1,"href"],icon:[2,"icon"]},null),t.Qa(5,16384,null,0,y.a,[t.l,t.k,t.s,w.a,t.Q],null,null),(l()(),t.Ra(6,16777216,null,0,1,"ion-router-outlet",[["name","home"]],null,null,null,null,null)),t.Qa(7,212992,null,0,s.a,[c.b,t.Q,t.k,t.l,[8,"home"],[8,null],t.i,f.a,c.l],null,null),(l()(),t.Ra(8,16777216,null,0,4,"ion-tab",[["href","/tabs/(about:about)"],["icon","information-circle"],["label","About"]],null,[[null,"ionRouterOutletActivated"]],function(l,n,u){var e=!0;return"ionRouterOutletActivated"===n&&(e=!1!==t.bb(l,10).onNavChanged(u)&&e),e},o.O,o.s)),t.Qa(9,49152,null,0,i.Ra,[t.l],{label:[0,"label"],href:[1,"href"],icon:[2,"icon"]},null),t.Qa(10,16384,null,0,y.a,[t.l,t.k,t.s,w.a,t.Q],null,null),(l()(),t.Ra(11,16777216,null,0,1,"ion-router-outlet",[["name","about"]],null,null,null,null,null)),t.Qa(12,212992,null,0,s.a,[c.b,t.Q,t.k,t.l,[8,"about"],[8,null],t.i,f.a,c.l],null,null),(l()(),t.Ra(13,16777216,null,0,4,"ion-tab",[["href","/tabs/(contact:contact)"],["icon","contacts"],["label","Contact"]],null,[[null,"ionRouterOutletActivated"]],function(l,n,u){var e=!0;return"ionRouterOutletActivated"===n&&(e=!1!==t.bb(l,15).onNavChanged(u)&&e),e},o.O,o.s)),t.Qa(14,49152,null,0,i.Ra,[t.l],{label:[0,"label"],href:[1,"href"],icon:[2,"icon"]},null),t.Qa(15,16384,null,0,y.a,[t.l,t.k,t.s,w.a,t.Q],null,null),(l()(),t.Ra(16,16777216,null,0,1,"ion-router-outlet",[["name","contact"]],null,null,null,null,null)),t.Qa(17,212992,null,0,s.a,[c.b,t.Q,t.k,t.l,[8,"contact"],[8,null],t.i,f.a,c.l],null,null)],function(l,n){l(n,4,0,"Home","/tabs/(home:home)","home"),l(n,7,0),l(n,9,0,"About","/tabs/(about:about)","information-circle"),l(n,12,0),l(n,14,0,"Contact","/tabs/(contact:contact)","contacts"),l(n,17,0)},null)}var z=t.Na("app-tabs",v,function(l){return t.eb(0,[(l()(),t.Ra(0,0,null,null,1,"app-tabs",[],null,null,null,O,k)),t.Qa(1,49152,null,0,v,[],null,null)],null,null)},{},{},[]),C=function(){function l(l,n){this.GetJson=l,this.router=n}return l.prototype.ngOnInit=function(){var l=this;this.GetJson.getJSon().subscribe(function(n){l.eyewearList=n.eyewear,console.log(l.eyewearList)})},l.prototype.onClick=function(l){return this.router.navigate(["/eyewear",{id:--l}])},l}(),M=t.Pa({encapsulation:0,styles:[[".slides-md[_ngcontent-%COMP%]{height:100%}.tutorial-page[_ngcontent-%COMP%]   .homePageSlides[_ngcontent-%COMP%]{flex-direction:column;height:100%}.tutorial-page[_ngcontent-%COMP%]   .toolbar-background[_ngcontent-%COMP%]{background:#fff;border-color:transparent}.tutorial-page[_ngcontent-%COMP%]   .slide-zoom[_ngcontent-%COMP%]{height:100%}.tutorial-page[_ngcontent-%COMP%]   .slide-title[_ngcontent-%COMP%]{margin-top:2.8rem}.tutorial-page[_ngcontent-%COMP%]   .slide-image[_ngcontent-%COMP%]{max-height:50%;max-width:60%;margin:18px 0}.tutorial-page[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{font-weight:500}.tutorial-page[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:0 40px;font-size:14px;line-height:1.5;color:#60646b}.tutorial-page[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:#000}"]],data:{}});function x(l){return t.eb(0,[(l()(),t.Ra(0,0,null,null,6,"ion-col",[["size","6"],["size-md",""]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onClick(l.context.$implicit.id)&&t),t},o.F,o.j)),t.Qa(1,49152,null,0,i.q,[t.l],{size:[0,"size"]},null),(l()(),t.Ra(2,0,null,0,4,"div",[["margin",""],["padding",""]],null,null,null,null,null)),(l()(),t.Ra(3,0,null,null,1,"ion-img",[["padding",""]],null,null,null,o.K,o.o)),t.Qa(4,49152,null,0,i.B,[t.l],{src:[0,"src"]},null),(l()(),t.Ra(5,0,null,null,0,"h4",[["class","title"],["no-margin",""]],[[8,"innerHTML",1]],null,null,null,null)),(l()(),t.Ra(6,0,null,null,0,"p",[["class","subTitle"],["no-margin",""]],[[8,"innerHTML",1]],null,null,null,null))],function(l,n){l(n,1,0,"6"),l(n,4,0,n.context.$implicit.images.frontal)},function(l,n){l(n,5,0,n.context.$implicit.brand),l(n,6,0,n.context.$implicit.name)})}function _(l){return t.eb(0,[(l()(),t.Ra(0,0,null,null,6,"ion-header",[],null,null,null,o.I,o.m)),t.Qa(1,49152,null,0,i.y,[t.l],null,null),(l()(),t.Ra(2,0,null,0,4,"ion-toolbar",[],null,null,null,o.R,o.u)),t.Qa(3,49152,null,0,i.Xa,[t.l],null,null),(l()(),t.Ra(4,0,null,0,2,"ion-title",[["text-center",""]],null,null,null,o.Q,o.v)),t.Qa(5,49152,null,0,i.Ya,[t.l],null,null),(l()(),t.db(-1,0,["DITTO"])),(l()(),t.Ra(7,0,null,null,13,"ion-content",[["padding",""]],null,null,null,o.G,o.k)),t.Qa(8,49152,null,0,i.r,[t.l],null,null),(l()(),t.Ra(9,0,null,0,11,"ion-grid",[["text-center",""]],null,null,null,o.H,o.l)),t.Qa(10,49152,null,0,i.x,[t.l],null,null),(l()(),t.Ra(11,0,null,0,5,"ion-row",[],null,null,null,o.N,o.r)),t.Qa(12,49152,null,0,i.Ea,[],null,null),(l()(),t.Ra(13,0,null,0,3,"ion-col",[["justify-content-center",""],["size","12"],["size-md",""]],null,null,null,o.F,o.j)),t.Qa(14,49152,null,0,i.q,[t.l],{size:[0,"size"]},null),(l()(),t.Ra(15,0,null,0,1,"h1",[["class","hero"]],null,null,null,null,null)),(l()(),t.db(-1,null,["Select Your Eyewear"])),(l()(),t.Ra(17,0,null,0,3,"ion-row",[],null,null,null,o.N,o.r)),t.Qa(18,49152,null,0,i.Ea,[],null,null),(l()(),t.Ia(16777216,null,0,1,null,x)),t.Qa(20,278528,null,0,p.h,[t.Q,t.N,t.u],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,14,0,"12"),l(n,20,0,u.eyewearList)},null)}var P=t.Na("app-home",C,function(l){return t.eb(0,[(l()(),t.Ra(0,0,null,null,1,"app-home",[],null,null,null,_,M)),t.Qa(1,114688,null,0,C,[b.a,c.l],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),T=u("M9A9"),j=function(){function l(){}return l.prototype.ngOnInit=function(){return l=this,void 0,u=function(){var l;return function(l,n){var u,t,e,a,o={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(u)throw new TypeError("Generator is already executing.");for(;o;)try{if(u=1,t&&(e=2&a[0]?t.return:a[0]?t.throw||((e=t.return)&&e.call(t),0):t.next)&&!(e=e.call(t,a[1])).done)return e;switch(t=0,e&&(a=[2&a[0],e.value]),a[0]){case 0:case 1:e=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,t=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(e=(e=o.trys).length>0&&e[e.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!e||a[1]>e[0]&&a[1]<e[3])){o.label=a[1];break}if(6===a[0]&&o.label<e[1]){o.label=e[1],e=a;break}if(e&&o.label<e[2]){o.label=e[2],o.ops.push(a);break}e[2]&&o.ops.pop(),o.trys.pop();continue}a=n.call(l,o)}catch(l){a=[6,l],t=0}finally{u=e=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}}(this,function(n){switch(n.label){case 0:return[4,fetch("https://www.mosh-media.com/wp-json/wp/v2/posts?per_page=4&_embed")];case 1:return[4,n.sent().json()];case 2:return l=n.sent(),[2,this.blog$=l]}})},new((n=void 0)||(n=Promise))(function(t,e){function a(l){try{i(u.next(l))}catch(l){e(l)}}function o(l){try{i(u.throw(l))}catch(l){e(l)}}function i(l){l.done?t(l.value):new n(function(n){n(l.value)}).then(a,o)}i((u=u.apply(l,[])).next())});var l,n,u},l}(),Z=t.Pa({encapsulation:0,styles:[[""]],data:{}});function F(l){return t.eb(0,[(l()(),t.Ra(0,0,null,null,21,"ion-card",[],null,null,null,o.E,o.e)),t.Qa(1,49152,null,0,i.h,[t.l],null,null),(l()(),t.Ra(2,0,null,0,7,"ion-card-header",[],null,null,null,o.B,o.g)),t.Qa(3,49152,null,0,i.j,[t.l],null,null),(l()(),t.Ra(4,0,null,0,2,"ion-card-subtitle",[],null,null,null,o.C,o.h)),t.Qa(5,49152,null,0,i.k,[t.l],null,null),(l()(),t.db(-1,0,["Grabed from Mosh Media"])),(l()(),t.Ra(7,0,null,0,2,"ion-card-title",[],null,null,null,o.D,o.i)),t.Qa(8,49152,null,0,i.l,[t.l],null,null),(l()(),t.db(9,0,["",""])),(l()(),t.Ra(10,0,null,0,1,"ion-img",[["width","50%"]],null,null,null,o.K,o.o)),t.Qa(11,49152,null,0,i.B,[t.l],{src:[0,"src"]},null),(l()(),t.Ra(12,0,null,0,9,"ion-card-content",[],null,null,null,o.A,o.f)),t.Qa(13,49152,null,0,i.i,[t.l],null,null),(l()(),t.Ra(14,0,null,0,7,"ion-item",[["target","_blank"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.bb(l,16).onClick(u)&&e),e},o.L,o.p)),t.Qa(15,49152,null,0,i.F,[t.l],{href:[0,"href"]},null),t.Qa(16,16384,null,0,T.a,[[2,c.l],t.l],{href:[0,"href"]},null),(l()(),t.Ra(17,0,null,0,1,"ion-icon",[["name","ios-flash"],["slot","start"]],null,null,null,o.J,o.n)),t.Qa(18,49152,null,0,i.A,[t.l],{name:[0,"name"]},null),(l()(),t.Ra(19,0,null,0,2,"ion-label",[],null,null,null,o.M,o.q)),t.Qa(20,49152,null,0,i.L,[t.l],null,null),(l()(),t.db(-1,0,["Check it out!"]))],function(l,n){l(n,11,0,n.context.$implicit._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url),l(n,15,0,t.Ta(1,"",n.context.$implicit.link,"")),l(n,16,0,t.Ta(1,"",n.context.$implicit.link,"")),l(n,18,0,"ios-flash")},function(l,n){l(n,9,0,n.context.$implicit.title.rendered)})}function G(l){return t.eb(0,[(l()(),t.Ra(0,0,null,null,6,"ion-header",[],null,null,null,o.I,o.m)),t.Qa(1,49152,null,0,i.y,[t.l],null,null),(l()(),t.Ra(2,0,null,0,4,"ion-toolbar",[],null,null,null,o.R,o.u)),t.Qa(3,49152,null,0,i.Xa,[t.l],null,null),(l()(),t.Ra(4,0,null,0,2,"ion-title",[],null,null,null,o.Q,o.v)),t.Qa(5,49152,null,0,i.Ya,[t.l],null,null),(l()(),t.db(-1,0,["About"])),(l()(),t.Ra(7,0,null,null,20,"ion-content",[],null,null,null,o.G,o.k)),t.Qa(8,49152,null,0,i.r,[t.l],null,null),(l()(),t.Ia(16777216,null,0,1,null,F)),t.Qa(10,278528,null,0,p.h,[t.Q,t.N,t.u],{ngForOf:[0,"ngForOf"]},null),(l()(),t.Ra(11,0,null,0,16,"ion-card",[],null,null,null,o.E,o.e)),t.Qa(12,49152,null,0,i.h,[t.l],null,null),(l()(),t.Ra(13,0,null,0,11,"ion-item",[],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.bb(l,15).onClick(u)&&e),e},o.L,o.p)),t.Qa(14,49152,null,0,i.F,[t.l],null,null),t.Qa(15,16384,null,0,T.a,[[2,c.l],t.l],null,null),(l()(),t.Ra(16,0,null,0,1,"ion-icon",[["name","pin"],["slot","start"]],null,null,null,o.J,o.n)),t.Qa(17,49152,null,0,i.A,[t.l],{name:[0,"name"]},null),(l()(),t.Ra(18,0,null,0,2,"ion-label",[],null,null,null,o.M,o.q)),t.Qa(19,49152,null,0,i.L,[t.l],null,null),(l()(),t.db(-1,0,["ion-item in a card, icon left, button right"])),(l()(),t.Ra(21,0,null,0,3,"ion-button",[["fill","outline"],["slot","end"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.bb(l,23).onClick(u)&&e),e},o.y,o.c)),t.Qa(22,49152,null,0,i.f,[t.l],{fill:[0,"fill"]},null),t.Qa(23,16384,null,0,T.a,[[2,c.l],t.l],null,null),(l()(),t.db(-1,0,["View"])),(l()(),t.Ra(25,0,null,0,2,"ion-card-content",[],null,null,null,o.A,o.f)),t.Qa(26,49152,null,0,i.i,[t.l],null,null),(l()(),t.db(-1,0,[" Great content could be here. "]))],function(l,n){l(n,10,0,n.component.blog$),l(n,17,0,"pin"),l(n,22,0,"outline")},null)}var I=t.Na("app-about",j,function(l){return t.eb(0,[(l()(),t.Ra(0,0,null,null,1,"app-about",[],null,null,null,G,Z)),t.Qa(1,114688,null,0,j,[],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),L=u("9opb"),N=u("apKv");u("mrSG"),u("0/uQ"),u("6blF"),u("isby"),u("G5J1"),u("zotm"),u("MGBS"),u("67Y/"),u("ZYjt");var E=function(){function l(){this._accessors=[]}return l.prototype.add=function(l,n){this._accessors.push([l,n])},l.prototype.remove=function(l){for(var n=this._accessors.length-1;n>=0;--n)if(this._accessors[n][1]===l)return void this._accessors.splice(n,1)},l.prototype.select=function(l){var n=this;this._accessors.forEach(function(u){n._isSameGroup(u,l)&&u[1]!==l&&u[1].fireUncheck(l.value)})},l.prototype._isSameGroup=function(l,n){return!!l[0].control&&l[0]._parent===n._control._parent&&l[1].name===n.name},l}(),S=function(){},A=function(){},$=u("B4/3"),H=function(){},J=function(){},q=function(){},B=function(){};u.d(n,"TabsPageModuleNgFactory",function(){return Y});var Y=t.Oa(e,[],function(l){return t.Ya([t.Za(512,t.k,t.Da,[[8,[a.a,Q,z,P,I]],[3,t.k],t.z]),t.Za(4608,p.j,p.i,[t.w,[2,p.p]]),t.Za(4608,w.a,w.a,[t.B,t.g]),t.Za(4608,L.a,L.a,[w.a,t.k,t.s]),t.Za(4608,N.a,N.a,[w.a,t.k,t.s]),t.Za(4608,E,E,[]),t.Za(1073742336,p.b,p.b,[]),t.Za(1073742336,$.a,$.a,[]),t.Za(1073742336,S,S,[]),t.Za(1073742336,A,A,[]),t.Za(1073742336,c.m,c.m,[[2,c.s],[2,c.l]]),t.Za(1073742336,H,H,[]),t.Za(1073742336,J,J,[]),t.Za(1073742336,q,q,[]),t.Za(1073742336,B,B,[]),t.Za(1073742336,e,e,[]),t.Za(1024,c.j,function(){return[[{path:"eyewear",component:h}],[{path:"tabs",component:v,children:[{path:"",redirectTo:"/tabs/(home:home)",pathMatch:"full"},{path:"home",outlet:"home",component:C},{path:"home/eyewear/:id",outlet:"home",component:h},{path:"about",outlet:"about",component:j}]},{path:"",redirectTo:"/tabs/(home:home)",pathMatch:"full"}],[{path:"",component:C}],[{path:"",component:j}]]},[])])})}}]);