(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{NomO:function(t,e,n){"use strict";n.r(e),n.d(e,"IonRoute",function(){return s}),n.d(e,"IonRouteRedirect",function(){return c}),n.d(e,"IonRouter",function(){return O}),n.d(e,"IonRouterOutlet",function(){return k});var o=n("B5Ai"),r=n("cBjU"),i=n("TJRR"),a=n("HHlg"),u=n("cHb+"),s=function(){function t(){this.url=""}return t.prototype.onUpdate=function(t){this.ionRouteDataChanged.emit(t)},t.prototype.onComponentProps=function(t,e){if(t!==e){var n=t?Object.keys(t):[],o=e?Object.keys(e):[];if(n.length===o.length)for(var r=0,i=n;r<i.length;r++){var a=i[r];if(t[a]!==e[a])return void this.onUpdate(t)}else this.onUpdate(t)}},t.prototype.componentDidLoad=function(){this.ionRouteDataChanged.emit()},t.prototype.componentDidUnload=function(){this.ionRouteDataChanged.emit()},Object.defineProperty(t,"is",{get:function(){return"ion-route"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{component:{type:String,attr:"component",watchCallbacks:["onUpdate"]},componentProps:{type:"Any",attr:"component-props",watchCallbacks:["onComponentProps"]},url:{type:String,attr:"url",watchCallbacks:["onUpdate"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionRouteDataChanged",method:"ionRouteDataChanged",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),t}(),c=function(){function t(){this.from=""}return t.prototype.propDidChange=function(){this.ionRouteRedirectChanged.emit()},t.prototype.componentDidLoad=function(){this.ionRouteRedirectChanged.emit()},t.prototype.componentDidUnload=function(){this.ionRouteRedirectChanged.emit()},Object.defineProperty(t,"is",{get:function(){return"ion-route-redirect"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{from:{type:String,attr:"from",watchCallbacks:["propDidChange"]},to:{type:String,attr:"to",watchCallbacks:["propDidChange"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionRouteRedirectChanged",method:"ionRouteRedirectChanged",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),t}();function l(t){return"/"+t.filter(function(t){return t.length>0}).join("/")}function h(t){if(null==t)return[""];var e=t.split("/").map(function(t){return t.trim()}).filter(function(t){return t.length>0});return 0===e.length?[""]:e}var d=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet";function f(t){if(t)return t.matches(d)?t:t.querySelector(d)||void 0}function p(t,e){return e.find(function(e){return function(t,e){var n=e.from;if(void 0===e.to)return!1;if(n.length>t.length)return!1;for(var o=0;o<n.length;o++){var r=n[o];if("*"===r)return!0;if(r!==t[o])return!1}return n.length===t.length}(t,e)})}function g(t,e){for(var n=Math.min(t.length,e.length),o=0;o<n&&t[o].toLowerCase()===e[o].id;o++);return o}function m(t,e){for(var n,o=new y(t),r=!1,i=0;i<e.length;i++){var a=e[i].path;if(""===a[0])r=!0;else{for(var u=0,s=a;u<s.length;u++){var c=s[u],l=o.next();if(":"===c[0]){if(""===l)return null;((n=n||[])[i]||(n[i]={}))[c.slice(1)]=l}else if(l!==c)return null}r=!1}}return r&&r!==(""===o.next())?null:n?e.map(function(t,e){return{id:t.id,path:t.path,params:v(t.params,n[e])}}):e}function v(t,e){return!t&&e?e:t&&!e?t:t&&e?Object.assign({},t,e):void 0}function b(t){for(var e=1,n=1,o=0,r=t;o<r.length;o++)for(var i=0,a=r[o].path;i<a.length;i++){var u=a[i];":"===u[0]?e+=Math.pow(1,n):""!==u&&(e+=Math.pow(2,n)),n++}return e}var y=function(){function t(t){this.path=t.slice()}return t.prototype.next=function(){return this.path.length>0?this.path.shift():""},t}();function w(t){return Array.from(t.children).filter(function(t){return"ION-ROUTE-REDIRECT"===t.tagName}).map(function(t){var e=C(t,"to");return{from:h(C(t,"from")),to:null==e?void 0:h(e)}})}function R(t){return function(e){for(var n=[],o=0,r=function t(e,n){return void 0===n&&(n=e),Array.from(n.children).filter(function(t){return"ION-ROUTE"===t.tagName&&t.component}).map(function(n){var o=C(n,"component");if(null==o)throw new Error("component missing in ion-route");return{path:h(C(n,"url")),id:o.toLowerCase(),params:n.componentProps,children:t(e,n)}})}(t);o<r.length;o++)P([],n,r[o]);return n}()}function C(t,e){return e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null}function P(t,e,n){var o=t.slice();if(o.push({id:n.id,path:n.path,params:n.params}),0!==n.children.length)for(var r=0,i=n.children;r<i.length;r++)P(o,e,i[r]);else e.push(o)}var O=function(){function t(){this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}return t.prototype.componentWillLoad=function(){return o.a(this,void 0,void 0,function(){return o.c(this,function(t){switch(t.label){case 0:return console.debug("[ion-router] router will load"),[4,(e=this.win,f(e.document.body)?Promise.resolve():new Promise(function(t){e.addEventListener("ionNavWillLoad",t,{once:!0})}))];case 1:return t.sent(),console.debug("[ion-router] found nav"),[4,this.onRoutesChanged()];case 2:return t.sent(),[2]}var e})})},t.prototype.componentDidLoad=function(){this.win.addEventListener("ionRouteRedirectChanged",Object(i.k)(this.onRedirectChanged.bind(this),10)),this.win.addEventListener("ionRouteDataChanged",Object(i.k)(this.onRoutesChanged.bind(this),100))},t.prototype.onPopState=function(){var t=this.historyDirection(),e=this.getPath();return console.debug("[ion-router] URL changed -> update nav",e,t),this.writeNavStateRoot(e,t)},t.prototype.onBackButton=function(t){var e=this;t.detail.register(0,function(){return e.goBack()})},t.prototype.push=function(t,e){void 0===e&&(e="forward"),t.startsWith(".")&&(t=new URL(t,window.location.href).pathname),console.debug("[ion-router] URL pushed -> updating nav",t,e);var n=h(t),o=j[e];return this.setPath(n,o),this.writeNavStateRoot(n,o)},t.prototype.goBack=function(){return this.win.history.back(1),Promise.resolve(this.waitPromise)},t.prototype.printDebug=function(){console.debug("CURRENT PATH",this.getPath()),console.debug("PREVIOUS PATH",this.previousPath),function(t){console.group("[ion-core] ROUTES["+t.length+"]");for(var e=function(t){var e=[];t.forEach(function(t){return e.push.apply(e,t.path)});var n=t.map(function(t){return t.id});console.debug("%c "+l(e),"font-weight: bold; padding-left: 20px","=>\t","("+n.join(", ")+")")},n=0,o=t;n<o.length;n++)e(o[n]);console.groupEnd()}(R(this.el)),function(t){console.group("[ion-core] REDIRECTS["+t.length+"]");for(var e=0,n=t;e<n.length;e++){var o=n[e];o.to&&console.debug("FROM: ","$c "+l(o.from),"font-weight: bold"," TO: ","$c "+l(o.to),"font-weight: bold")}console.groupEnd()}(w(this.el))},t.prototype.navChanged=function(t){return o.a(this,void 0,void 0,function(){var e,n,r,i,a,u;return o.c(this,function(s){switch(s.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, navChanged was cancelled"),[2,!1]):[4,function(t){return o.a(this,void 0,void 0,function(){var e,n,r,i;return o.c(this,function(o){switch(o.label){case 0:e=[],r=t,o.label=1;case 1:return(n=f(r))?[4,n.getRouteId()]:[3,3];case 2:return(i=o.sent())?(r=i.element,i.element=void 0,e.push(i),[3,4]):[3,5];case 3:return[3,5];case 4:return[3,1];case 5:return[2,{ids:e,outlet:n}]}})})}(this.win.document.body)];case 1:return e=s.sent(),n=e.ids,r=e.outlet,i=R(this.el),(a=function(t,e){for(var n=null,o=0,r=t.map(function(t){return t.id}),i=0,a=e;i<a.length;i++){var u=a[i],s=g(r,u);s>o&&(n=u,o=s)}return n?n.map(function(e,n){return{id:e.id,path:e.path,params:v(e.params,t[n]&&t[n].params)}}):null}(n,i))?(u=function(t){for(var e=[],n=0,o=t;n<o.length;n++)for(var r=o[n],i=0,a=r.path;i<a.length;i++){var u=a[i];if(":"===u[0]){var s=r.params&&r.params[u.slice(1)];if(!s)return null;e.push(s)}else""!==u&&e.push(u)}return e}(a))?(console.debug("[ion-router] nav changed -> update URL",n,u),this.setPath(u,t),[4,this.safeWriteNavState(r,a,0,u,null,n.length)]):(console.warn("[ion-router] router could not match path because some required param is missing"),[2,!1]):(console.warn("[ion-router] no matching URL for ",n.map(function(t){return t.id})),[2,!1]);case 2:return s.sent(),[2,!0]}})})},t.prototype.onRedirectChanged=function(){var t=this.getPath();t&&p(t,w(this.el))&&this.writeNavStateRoot(t,0)},t.prototype.onRoutesChanged=function(){return this.writeNavStateRoot(this.getPath(),0)},t.prototype.historyDirection=function(){null===this.win.history.state&&(this.state++,this.win.history.replaceState(this.state,this.win.document.title,this.win.document.location.href));var t=this.win.history.state,e=this.lastState;return this.lastState=t,t>e?1:t<e?-1:0},t.prototype.writeNavStateRoot=function(t,e){return o.a(this,void 0,void 0,function(){var n,r,i,a,u;return o.c(this,function(o){return t?(n=w(this.el),r=p(t,n),i=null,r&&(this.setPath(r.to,e),i=r.from,t=r.to),a=R(this.el),(u=function(t,e){for(var n=null,o=0,r=0,i=a;r<i.length;r++){var u=m(t,i[r]);if(null!==u){var s=b(u);s>o&&(o=s,n=u)}}return n}(t))?[2,this.safeWriteNavState(this.win.document.body,u,e,t,i)]:(console.error("[ion-router] the path does not match any route"),[2,!1])):(console.error("[ion-router] URL is not part of the routing set"),[2,!1])})})},t.prototype.safeWriteNavState=function(t,e,n,r,i,a){return void 0===a&&(a=0),o.a(this,void 0,void 0,function(){var u,s,c;return o.c(this,function(o){switch(o.label){case 0:return[4,this.lock()];case 1:u=o.sent(),s=!1,o.label=2;case 2:return o.trys.push([2,4,,5]),[4,this.writeNavState(t,e,n,r,i,a)];case 3:return s=o.sent(),[3,5];case 4:return c=o.sent(),console.error(c),[3,5];case 5:return u(),[2,s]}})})},t.prototype.lock=function(){return o.a(this,void 0,void 0,function(){var t,e;return o.c(this,function(n){switch(n.label){case 0:return t=this.waitPromise,this.waitPromise=new Promise(function(t){return e=t}),void 0===t?[3,2]:[4,t];case 1:n.sent(),n.label=2;case 2:return[2,e]}})})},t.prototype.writeNavState=function(t,e,n,r,i,a){return void 0===a&&(a=0),o.a(this,void 0,void 0,function(){var u,s;return o.c(this,function(c){switch(c.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, transition was cancelled"),[2,!1]):(this.busy=!0,(u=this.routeChangeEvent(r,i))&&this.ionRouteWillChange.emit(u),[4,function t(e,n,r,i,a){return void 0===a&&(a=!1),o.a(this,void 0,void 0,function(){var u,s,c,l;return o.c(this,function(o){switch(o.label){case 0:return o.trys.push([0,6,,7]),u=f(e),i>=n.length||!u?[2,a]:[4,u.componentOnReady()];case 1:return o.sent(),[4,u.setRouteId((s=n[i]).id,s.params,r)];case 2:return(c=o.sent()).changed&&(r=0,a=!0),[4,t(c.element,n,r,i+1,a)];case 3:return a=o.sent(),c.markVisible?[4,c.markVisible()]:[3,5];case 4:o.sent(),o.label=5;case 5:return[2,a];case 6:return l=o.sent(),console.error(l),[2,!1];case 7:return[2]}})})}(t,e,n,a)]);case 1:return s=c.sent(),this.busy=!1,s&&console.debug("[ion-router] route changed",r),u&&this.ionRouteDidChange.emit(u),[2,s]}})})},t.prototype.setPath=function(t,e){this.state++,function(t,e,n,o,r,i){var a=l(h(e).concat(o));n&&(a="#"+a),1===r?t.pushState(i,"",a):t.replaceState(i,"",a)}(this.win.history,this.root,this.useHash,t,e,this.state)},t.prototype.getPath=function(){return function(t,e,n){var o=t.pathname;if(n){var r=t.hash;o="#"===r[0]?r.slice(1):""}return function(t,e){if(t.length>e.length)return null;if(t.length<=1&&""===t[0])return e;for(var n=0;n<t.length;n++)if(t[n].length>0&&t[n]!==e[n])return null;return e.length===t.length?[""]:e.slice(t.length)}(h(e),h(o))}(this.win.location,this.root,this.useHash)},t.prototype.routeChangeEvent=function(t,e){var n=this.previousPath,o=l(t);return this.previousPath=o,o===n?null:{from:n,redirectedFrom:e?l(e):null,to:o}},Object.defineProperty(t,"is",{get:function(){return"ion-router"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{config:{context:"config"},el:{elementRef:!0},goBack:{method:!0},navChanged:{method:!0},printDebug:{method:!0},push:{method:!0},queue:{context:"queue"},root:{type:String,attr:"root"},useHash:{type:Boolean,attr:"use-hash"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionRouteWillChange",method:"ionRouteWillChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionRouteDidChange",method:"ionRouteDidChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"window:popstate",method:"onPopState"},{name:"document:ionBackButton",method:"onBackButton"}]},enumerable:!0,configurable:!0}),t}(),j={back:-1,root:0,forward:1},k=function(){function t(){this.animated=!0}return t.prototype.componentWillLoad=function(){this.ionNavWillLoad.emit()},t.prototype.componentDidUnload=function(){this.activeEl=this.activeComponent=void 0},t.prototype.setRoot=function(t,e,n){return o.a(this,void 0,void 0,function(){var r,i;return o.c(this,function(o){switch(o.label){case 0:return this.activeComponent===t?[2,!1]:(r=this.activeEl,[4,Object(a.a)(this.delegate,this.el,t,["ion-page","ion-page-invisible"],e)]);case 1:return i=o.sent(),this.activeComponent=t,this.activeEl=i,[4,this.commit(i,r,n)];case 2:return o.sent(),[4,Object(a.b)(this.delegate,r)];case 3:return o.sent(),[2,!0]}})})},t.prototype.commit=function(t,e,n){return o.a(this,void 0,void 0,function(){var r,i,a;return o.c(this,function(o){switch(o.label){case 0:return[4,this.lock()];case 1:r=o.sent(),i=!1,o.label=2;case 2:return o.trys.push([2,4,,5]),[4,this.transition(t,e,n)];case 3:return i=o.sent(),[3,5];case 4:return a=o.sent(),console.error(a),[3,5];case 5:return r(),[2,i]}})})},t.prototype.setRouteId=function(t,e,n){return o.a(this,void 0,void 0,function(){return o.c(this,function(o){switch(o.label){case 0:return[4,this.setRoot(t,e,{duration:0===n?0:void 0,direction:-1===n?"back":"forward"})];case 1:return[2,{changed:o.sent(),element:this.activeEl}]}})})},t.prototype.getRouteId=function(){return o.a(this,void 0,void 0,function(){var t;return o.c(this,function(e){return[2,(t=this.activeEl)?{id:t.tagName,element:t}:void 0]})})},t.prototype.lock=function(){return o.a(this,void 0,void 0,function(){var t,e;return o.c(this,function(n){switch(n.label){case 0:return t=this.waitPromise,this.waitPromise=new Promise(function(t){return e=t}),void 0===t?[3,2]:[4,t];case 1:n.sent(),n.label=2;case 2:return[2,e]}})})},t.prototype.transition=function(t,e,n){return o.a(this,void 0,void 0,function(){var r,i,a,s,c,l,h;return o.c(this,function(o){switch(o.label){case 0:return e===t?[2,!1]:(this.ionNavWillChange.emit(),n=n||{},i=(r=this).mode,a=r.queue,s=r.animationCtrl,c=r.win,l=r.el,h=this.animated&&this.config.getBoolean("animated",!0),[4,Object(u.d)(Object.assign({mode:i,queue:a,animated:h,animationCtrl:s,window:c,enteringEl:t,leavingEl:e,baseEl:l},n))]);case 1:return o.sent(),this.ionNavDidChange.emit(),[2,!0]}})})},t.prototype.render=function(){return["ios"===this.mode&&Object(r.b)("div",{class:"nav-decor"}),Object(r.b)("slot",null)]},Object.defineProperty(t,"is",{get:function(){return"ion-router-outlet"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},animationBuilder:{type:"Any",attr:"animation-builder"},animationCtrl:{connect:"ion-animation-controller"},commit:{method:!0},config:{context:"config"},delegate:{type:"Any",attr:"delegate"},el:{elementRef:!0},getRouteId:{method:!0},queue:{context:"queue"},setRoot:{method:!0},setRouteId:{method:!0},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionNavWillLoad",method:"ionNavWillLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavWillChange",method:"ionNavWillChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavDidChange",method:"ionNavDidChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}.nav-decor{display:none}:host(.show-decor) .nav-decor{left:0;right:0;top:0;bottom:0;display:block;position:absolute;background:#000;z-index:0;pointer-events:none}"},enumerable:!0,configurable:!0}),t}()}}]);