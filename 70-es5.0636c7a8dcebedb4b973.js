function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}function t(t,n,r){if(n)e(t.prototype,n);if(r)e(t,r);return t}function n(e,t,n,r,i,s,o){try{var a=e[s](o);var u=a.value}catch(c){n(c);return}if(a.done){t(u)}else{Promise.resolve(u).then(r,i)}}function r(e){return function(){var t=this,r=arguments;return new Promise(function(i,s){var o=e.apply(t,r);function a(e){n(o,i,s,a,u,"next",e)}function u(e){n(o,i,s,a,u,"throw",e)}a(undefined)})}}(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{SUlj:function e(n,i,s){"use strict";s.r(i),s.d(i,"ion_nav",function(){return w}),s.d(i,"ion_nav_pop",function(){return y}),s.d(i,"ion_nav_push",function(){return k}),s.d(i,"ion_nav_set_root",function(){return S});var o=s("S6Yj"),a=s("OoTa"),u=s("igpV"),c=s("9Xoc"),h=s("tkfp"),v=s("qKn2"),f=s("3QqI");var l=1,d=2,p=3;var m=function(){function e(e,t){this.component=e,this.params=t,this.state=l}var t=e.prototype;t.init=function(){var e=r(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function e(r){while(1){switch(r.prev=r.next){case 0:if(!(this.state=d,!this.element)){r.next=5;break}n=this.component;r.next=4;return Object(h.a)(this.delegate,t,n,["ion-page","ion-page-invisible"],this.params);case 4:this.element=r.sent;case 5:case"end":return r.stop()}}},e,this)}));function t(t){return e.apply(this,arguments)}return t}();t._destroy=function e(){Object(c.b)(this.state!==p,"view state must be ATTACHED");var t=this.element;t&&(this.delegate?this.delegate.removeViewFromDom(t.parentElement,t):t.remove()),this.nav=void 0,this.state=p};return e}();var b=function e(t,n,r){if(!t)return!1;if(t.component!==n)return!1;var i=t.params;if(i===r)return!0;if(!i&&!r)return!0;if(!i||!r)return!1;var s=Object.keys(i),o=Object.keys(r);if(s.length!==o.length)return!1;for(var a=0,u=s;a<u.length;a++){var c=u[a];if(i[c]!==r[c])return!1}return!0},g=function e(t,n){return t?t instanceof m?t:new m(t,n):null},w=function(){function e(e){Object(o.m)(this,e),this.transInstr=[],this.animationEnabled=!0,this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0,this.ionNavWillLoad=Object(o.d)(this,"ionNavWillLoad",7),this.ionNavWillChange=Object(o.d)(this,"ionNavWillChange",3),this.ionNavDidChange=Object(o.d)(this,"ionNavDidChange",3)}var n=e.prototype;n.swipeGestureChanged=function e(){this.gesture&&this.gesture.setDisabled(!0!==this.swipeGesture)};n.rootChanged=function e(){void 0!==this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))};n.componentWillLoad=function e(){if(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]"),void 0===this.swipeGesture){var t=Object(o.e)(this);this.swipeGesture=a.b.getBoolean("swipeBackEnabled","ios"===t)}this.ionNavWillLoad.emit()};n.componentDidLoad=function(){var e=r(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function e(t){while(1){switch(t.prev=t.next){case 0:this.rootChanged();t.next=3;return s.e(2).then(s.bind(null,"15no"));case 3:t.t0=this.el;t.t1=this.canStart.bind(this);t.t2=this.onStart.bind(this);t.t3=this.onMove.bind(this);t.t4=this.onEnd.bind(this);this.gesture=t.sent.createSwipeBackGesture(t.t0,t.t1,t.t2,t.t3,t.t4);this.swipeGestureChanged();case 10:case"end":return t.stop()}}},e,this)}));function t(){return e.apply(this,arguments)}return t}();n.componentDidUnload=function e(){for(var t=this.views,n=Array.isArray(t),r=0,t=n?t:t[Symbol.iterator]();;){var i;if(n){if(r>=t.length)break;i=t[r++]}else{r=t.next();if(r.done)break;i=r.value}var s=i;Object(v.b)(s.element,u.e),s._destroy()}this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=this.views.length=0,this.destroyed=!0};n.push=function e(t,n,r,i){return this.queueTrns({insertStart:-1,insertViews:[{page:t,params:n}],opts:r},i)};n.insert=function e(t,n,r,i,s){return this.queueTrns({insertStart:t,insertViews:[{page:n,params:r}],opts:i},s)};n.insertPages=function e(t,n,r,i){return this.queueTrns({insertStart:t,insertViews:n,opts:r},i)};n.pop=function e(t,n){return this.queueTrns({removeStart:-1,removeCount:1,opts:t},n)};n.popTo=function e(t,n,r){var i={removeStart:-1,removeCount:-1,opts:n};return"object"==typeof t&&t.component?(i.removeView=t,i.removeStart=1):"number"==typeof t&&(i.removeStart=t+1),this.queueTrns(i,r)};n.popToRoot=function e(t,n){return this.queueTrns({removeStart:1,removeCount:-1,opts:t},n)};n.removeIndex=function e(t,n,r,i){if(n===void 0){n=1}return this.queueTrns({removeStart:t,removeCount:n,opts:r},i)};n.setRoot=function e(t,n,r,i){return this.setPages([{page:t,params:n}],r,i)};n.setPages=function e(t,n,r){return null==n&&(n={}),!0!==n.animated&&(n.animated=!1),this.queueTrns({insertStart:0,insertViews:t,removeStart:0,removeCount:-1,opts:n},r)};n.setRouteId=function e(t,n,i){var s=this.getActiveSync();if(b(s,t,n))return Promise.resolve({changed:!1,element:s.element});var o;var a=new Promise(function(e){return o=e});var u;var c={updateURL:!1,viewIsReady:function e(t){var n;var i=new Promise(function(e){return n=e});return o({changed:!0,element:t,markVisible:function(){var e=r(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function e(t){while(1){switch(t.prev=t.next){case 0:n();t.next=3;return u;case 3:case"end":return t.stop()}}},e)}));function t(){return e.apply(this,arguments)}return t}()}),i}};if("root"===i)u=this.setRoot(t,n,c);else{var h=this.views.find(function(e){return b(e,t,n)});h?u=this.popTo(h,Object.assign({},c,{direction:"back"})):"forward"===i?u=this.push(t,n,c):"back"===i&&(u=this.setRoot(t,n,Object.assign({},c,{direction:"back",animated:!0})))}return a};n.getRouteId=function(){var e=r(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function e(n){while(1){switch(n.prev=n.next){case 0:t=this.getActiveSync();return n.abrupt("return",t?{id:t.element.tagName,params:t.params,element:t.element}:void 0);case 2:case"end":return n.stop()}}},e,this)}));function t(){return e.apply(this,arguments)}return t}();n.getActive=function e(){return Promise.resolve(this.getActiveSync())};n.getByIndex=function e(t){return Promise.resolve(this.views[t])};n.canGoBack=function e(t){return Promise.resolve(this.canGoBackSync(t))};n.getPrevious=function e(t){return Promise.resolve(this.getPreviousSync(t))};n.getLength=function e(){return this.views.length};n.getActiveSync=function e(){return this.views[this.views.length-1]};n.canGoBackSync=function e(t){if(t===void 0){t=this.getActiveSync()}return!(!t||!this.getPreviousSync(t))};n.getPreviousSync=function e(t){if(t===void 0){t=this.getActiveSync()}if(!t)return;var n=this.views,r=n.indexOf(t);return r>0?n[r-1]:void 0};n.queueTrns=function e(t,n){if(this.isTransitioning&&null!=t.opts&&t.opts.skipIfBusy)return Promise.resolve(!1);var r=new Promise(function(e,n){t.resolve=e,t.reject=n});return t.done=n,t.insertViews&&0===t.insertViews.length&&(t.insertViews=void 0),this.transInstr.push(t),this.nextTrns(),r};n.success=function e(t,n){if(this.destroyed)this.fireError("nav controller was destroyed",n);else if(n.done&&n.done(t.hasCompleted,t.requiresTransition,t.enteringView,t.leavingView,t.direction),n.resolve(t.hasCompleted),!1!==n.opts.updateURL&&this.useRouter){var r=document.querySelector("ion-router");r&&r.navChanged("back"===t.direction?"back":"forward")}};n.failed=function e(t,n){this.destroyed?this.fireError("nav controller was destroyed",n):(this.transInstr.length=0,this.fireError(t,n))};n.fireError=function e(t,n){n.done&&n.done(!1,!1,t),n.reject&&!this.destroyed?n.reject(t):n.resolve(!1)};n.nextTrns=function e(){if(this.isTransitioning)return!1;var t=this.transInstr.shift();return!!t&&(this.runTransition(t),!0)};n.runTransition=function(){var e=r(regeneratorRuntime.mark(function e(t){var n,r,i;return regeneratorRuntime.wrap(function e(s){while(1){switch(s.prev=s.next){case 0:s.prev=0;this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(t);n=this.getActiveSync(),r=this.getEnteringView(t,n);if(!(!n&&!r)){s.next=5;break}throw new Error("no views in the stack to be removed");case 5:s.t0=r&&r.state===l;if(!s.t0){s.next=9;break}s.next=9;return r.init(this.el);case 9:this.postViewInit(r,n,t);if(!((t.enteringRequiresTransition||t.leavingRequiresTransition)&&r!==n)){s.next=16;break}s.next=13;return this.transition(r,n,t);case 13:s.t1=s.sent;s.next=17;break;case 16:s.t1={hasCompleted:!0,requiresTransition:!1};case 17:i=s.t1;this.success(i,t),this.ionNavDidChange.emit();s.next=24;break;case 21:s.prev=21;s.t2=s["catch"](0);this.failed(s.t2,t);case 24:this.isTransitioning=!1,this.nextTrns();case 25:case"end":return s.stop()}}},e,this,[[0,21]])}));function t(t){return e.apply(this,arguments)}return t}();n.prepareTI=function e(t){var n=this.views.length;if(t.opts=t.opts||{},void 0===t.opts.delegate&&(t.opts.delegate=this.delegate),void 0!==t.removeView){Object(c.b)(void 0!==t.removeStart,"removeView needs removeStart"),Object(c.b)(void 0!==t.removeCount,"removeView needs removeCount");var r=this.views.indexOf(t.removeView);if(r<0)throw new Error("removeView was not found");t.removeStart+=r}void 0!==t.removeStart&&(t.removeStart<0&&(t.removeStart=n-1),t.removeCount<0&&(t.removeCount=n-t.removeStart),t.leavingRequiresTransition=t.removeCount>0&&t.removeStart+t.removeCount===n),t.insertViews&&((t.insertStart<0||t.insertStart>n)&&(t.insertStart=n),t.enteringRequiresTransition=t.insertStart===n);var i=t.insertViews;if(!i)return;Object(c.b)(i.length>0,"length can not be zero");var s=function(e){return e.map(function(e){return e instanceof m?e:"page"in e?g(e.page,e.params):g(e,void 0)}).filter(function(e){return null!==e})}(i);if(0===s.length)throw new Error("invalid views to insert");for(var o=s,a=Array.isArray(o),u=0,o=a?o:o[Symbol.iterator]();;){var h;if(a){if(u>=o.length)break;h=o[u++]}else{u=o.next();if(u.done)break;h=u.value}var v=h;v.delegate=t.opts.delegate;var f=v.nav;if(f&&f!==this)throw new Error("inserted view was already inserted");if(v.state===p)throw new Error("inserted view was already destroyed")}t.insertViews=s};n.getEnteringView=function e(t,n){var r=t.insertViews;if(void 0!==r)return r[r.length-1];var i=t.removeStart;if(void 0!==i){var s=this.views,o=i+t.removeCount;for(var a=s.length-1;a>=0;a--){var u=s[a];if((a<i||a>=o)&&u!==n)return u}}};n.postViewInit=function e(t,n,r){Object(c.b)(n||t,"Both leavingView and enteringView are null"),Object(c.b)(r.resolve,"resolve must be valid"),Object(c.b)(r.reject,"reject must be valid");var i=r.opts,s=r.insertViews,o=r.removeStart,a=r.removeCount;var h;if(void 0!==o&&void 0!==a){Object(c.b)(o>=0,"removeStart can not be negative"),Object(c.b)(a>=0,"removeCount can not be negative"),h=[];for(var f=0;f<a;f++){var l=this.views[f+o];l&&l!==t&&l!==n&&h.push(l)}i.direction=i.direction||"back"}var d=this.views.length+(void 0!==s?s.length:0)-(void 0!==a?a:0);if(Object(c.b)(d>=0,"final balance can not be negative"),0===d)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(s){var p=r.insertStart;for(var m=s,b=Array.isArray(m),g=0,m=b?m:m[Symbol.iterator]();;){var w;if(b){if(g>=m.length)break;w=m[g++]}else{g=m.next();if(g.done)break;w=g.value}var y=w;this.insertViewAt(y,p),p++}r.enteringRequiresTransition&&(i.direction=i.direction||"forward")}if(h&&h.length>0){for(var k=h,S=Array.isArray(k),j=0,k=S?k:k[Symbol.iterator]();;){var O;if(S){if(j>=k.length)break;O=k[j++]}else{j=k.next();if(j.done)break;O=j.value}var C=O;Object(v.b)(C.element,u.c),Object(v.b)(C.element,u.d),Object(v.b)(C.element,u.e)}for(var T=h,V=Array.isArray(T),x=0,T=V?T:T[Symbol.iterator]();;){var R;if(V){if(x>=T.length)break;R=T[x++]}else{x=T.next();if(x.done)break;R=x.value}var A=R;this.destroyView(A)}}};n.transition=function(){var e=r(regeneratorRuntime.mark(function e(t,n,r){var i=this;var s,u,c,h,f,l,d,p;return regeneratorRuntime.wrap(function e(m){while(1){switch(m.prev=m.next){case 0:s=r.opts;u=s.progressAnimation?function(e){return i.sbAni=e}:void 0;c=Object(o.e)(this);h=t.element;f=n&&n.element;l=Object.assign({mode:c,showGoBack:this.canGoBackSync(t),baseEl:this.el,animationBuilder:this.animation||s.animationBuilder||a.b.get("navAnimation"),progressCallback:u,animated:this.animated&&a.b.getBoolean("animated",!0),enteringEl:h,leavingEl:f},s);m.next=8;return Object(v.d)(l);case 8:d=m.sent;p=d.hasCompleted;return m.abrupt("return",this.transitionFinish(p,t,n,s));case 11:case"end":return m.stop()}}},e,this)}));function t(t,n,r){return e.apply(this,arguments)}return t}();n.transitionFinish=function e(t,n,r,i){var s=t?n:r;return s&&this.cleanup(s),{hasCompleted:t,requiresTransition:!0,enteringView:n,leavingView:r,direction:i.direction}};n.insertViewAt=function e(t,n){var r=this.views,i=r.indexOf(t);i>-1?(Object(c.b)(t.nav===this,"view is not part of the nav"),r.splice(n,0,r.splice(i,1)[0])):(Object(c.b)(!t.nav,"nav is used"),t.nav=this,r.splice(n,0,t))};n.removeView=function e(t){Object(c.b)(t.state===d||t.state===p,"view state should be loaded or destroyed");var n=this.views,r=n.indexOf(t);Object(c.b)(r>-1,"view must be part of the stack"),r>=0&&n.splice(r,1)};n.destroyView=function e(t){t._destroy(),this.removeView(t)};n.cleanup=function e(t){if(this.destroyed)return;var n=this.views,r=n.indexOf(t);for(var i=n.length-1;i>=0;i--){var s=n[i],o=s.element;i>r?(Object(v.b)(o,u.e),this.destroyView(s)):i<r&&Object(v.c)(o,!0)}};n.canStart=function e(){return!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.animationEnabled&&this.canGoBackSync()};n.onStart=function e(){this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:!0}},void 0)};n.onMove=function e(t){this.sbAni&&this.sbAni.progressStep(t)};n.onEnd=function e(t,n,r){var i=this;if(this.sbAni){this.animationEnabled=!1,this.sbAni.onFinish(function(){i.animationEnabled=!0},{oneTimeCallback:!0});var s=t?-.001:.001;t?s+=Object(f.b)(new f.a(0,0),new f.a(.32,.72),new f.a(0,1),new f.a(1,1),n):(this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"),s+=Object(f.b)(new f.a(0,0),new f.a(1,0),new f.a(.68,.28),new f.a(1,1),n)),this.sbAni.progressEnd(t,s,r)}};n.render=function e(){return Object(o.i)("slot",null)};t(e,[{key:"el",get:function e(){return Object(o.f)(this)}}],[{key:"watchers",get:function e(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}}},{key:"style",get:function e(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"}}]);return e}(),y=function(){function e(e){var t=this;Object(o.m)(this,e),this.pop=function(){var e=t.el.closest("ion-nav");e&&e.pop({skipIfBusy:!0})}}var n=e.prototype;n.render=function e(){return Object(o.i)(o.a,{onClick:this.pop})};t(e,[{key:"el",get:function e(){return Object(o.f)(this)}}]);return e}(),k=function(){function e(e){var t=this;Object(o.m)(this,e),this.push=function(){var e=t.el.closest("ion-nav"),n=t.component;e&&void 0!==n&&e.push(n,t.componentProps,{skipIfBusy:!0})}}var n=e.prototype;n.render=function e(){return Object(o.i)(o.a,{onClick:this.push})};t(e,[{key:"el",get:function e(){return Object(o.f)(this)}}]);return e}(),S=function(){function e(e){var t=this;Object(o.m)(this,e),this.setRoot=function(){var e=t.el.closest("ion-nav"),n=t.component;e&&void 0!==n&&e.setRoot(n,t.componentProps,{skipIfBusy:!0})}}var n=e.prototype;n.render=function e(){return Object(o.i)(o.a,{onClick:this.setRoot})};t(e,[{key:"el",get:function e(){return Object(o.f)(this)}}]);return e}()}}]);