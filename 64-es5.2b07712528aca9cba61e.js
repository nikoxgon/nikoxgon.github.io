function i(i,n,e,t,o,a,r){try{var s=i[a](r);var c=s.value}catch(d){e(d);return}if(s.done){n(c)}else{Promise.resolve(c).then(t,o)}}function n(n){return function(){var e=this,t=arguments;return new Promise(function(o,a){var r=n.apply(e,t);function s(n){i(r,o,a,s,c,"next",n)}function c(n){i(r,o,a,s,c,"throw",n)}s(undefined)})}}function e(i,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||false;t.configurable=true;if("value"in t)t.writable=true;Object.defineProperty(i,t.key,t)}}function t(i,n,t){if(n)e(i.prototype,n);if(t)e(i,t);return i}(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{J3Yu:function i(e,o,a){"use strict";a.r(o),a.d(o,"ion_loading",function(){return h});var r=a("S6Yj"),s=a("OoTa"),c=a("1iah"),d=a("zZxQ"),l=a("pyhm"),p=a("YWFk");var u=function i(n){var e=Object(c.a)(),t=Object(c.a)(),o=Object(c.a)();return t.addElement(n.querySelector("ion-backdrop")).fromTo("opacity",.01,.3),o.addElement(n.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),e.addElement(n).easing("ease-in-out").duration(200).addAnimation([t,o])},g=function i(n){var e=Object(c.a)(),t=Object(c.a)(),o=Object(c.a)();return t.addElement(n.querySelector("ion-backdrop")).fromTo("opacity",.3,0),o.addElement(n.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),e.addElement(n).easing("ease-in-out").duration(200).addAnimation([t,o])},m=function i(n){var e=Object(c.a)(),t=Object(c.a)(),o=Object(c.a)();return t.addElement(n.querySelector("ion-backdrop")).fromTo("opacity",.01,.32),o.addElement(n.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),e.addElement(n).easing("ease-in-out").duration(200).addAnimation([t,o])},f=function i(n){var e=Object(c.a)(),t=Object(c.a)(),o=Object(c.a)();return t.addElement(n.querySelector("ion-backdrop")).fromTo("opacity",.32,0),o.addElement(n.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),e.addElement(n).easing("ease-in-out").duration(200).addAnimation([t,o])},h=function(){function i(i){var n=this;Object(r.m)(this,i),this.presented=!1,this.mode=Object(r.e)(this),this.keyboardClose=!0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onBackdropTap=function(){n.dismiss(void 0,d.a)},this.didPresent=Object(r.d)(this,"ionLoadingDidPresent",7),this.willPresent=Object(r.d)(this,"ionLoadingWillPresent",7),this.willDismiss=Object(r.d)(this,"ionLoadingWillDismiss",7),this.didDismiss=Object(r.d)(this,"ionLoadingDidDismiss",7)}var e=i.prototype;e.componentWillLoad=function i(){if(void 0===this.spinner){var n=Object(r.e)(this);this.spinner=s.b.get("loadingSpinner",s.b.get("spinner","ios"===n?"lines":"crescent"))}};e.present=function(){var i=n(regeneratorRuntime.mark(function i(){var n=this;return regeneratorRuntime.wrap(function i(e){while(1){switch(e.prev=e.next){case 0:e.next=2;return Object(d.e)(this,"loadingEnter",u,m,void 0);case 2:this.duration>0&&(this.durationTimeout=setTimeout(function(){return n.dismiss()},this.duration+10));case 3:case"end":return e.stop()}}},i,this)}));function e(){return i.apply(this,arguments)}return e}();e.dismiss=function i(n,e){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(d.f)(this,n,e,"loadingLeave",g,f)};e.onDidDismiss=function i(){return Object(d.g)(this.el,"ionLoadingDidDismiss")};e.onWillDismiss=function i(){return Object(d.g)(this.el,"ionLoadingWillDismiss")};e.render=function i(){var n;var e=this.message,t=this.spinner,o=Object(r.e)(this);return Object(r.i)(r.a,{onIonBackdropTap:this.onBackdropTap,style:{zIndex:""+(4e4+this.overlayIndex)},class:Object.assign({},Object(l.b)(this.cssClass),(n={},n[o]=!0,n["loading-translucent"]=this.translucent,n))},Object(r.i)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),Object(r.i)("div",{class:"loading-wrapper",role:"dialog"},t&&Object(r.i)("div",{class:"loading-spinner"},Object(r.i)("ion-spinner",{name:t})),e&&Object(r.i)("div",{class:"loading-content",innerHTML:Object(p.a)(e)})))};t(i,[{key:"el",get:function i(){return Object(r.f)(this)}}],[{key:"style",get:function i(){return".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-bubbles.sc-ion-loading-ios, .spinner-circles.sc-ion-loading-ios, .spinner-crescent.sc-ion-loading-ios, .spinner-dots.sc-ion-loading-ios, .spinner-lines.sc-ion-loading-ios, .spinner-lines-small.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color,var(--ion-color-step-100,#f9f9f9));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600,#666);color:var(--ion-text-color,#000);font-size:14px}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;padding-left:34px;padding-right:34px;padding-top:24px;padding-bottom:24px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-wrapper.sc-ion-loading-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px}}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:700}.loading-spinner.sc-ion-loading-ios + .loading-content.sc-ion-loading-ios{margin-left:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-spinner.sc-ion-loading-ios + .loading-content.sc-ion-loading-ios{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}"}}]);return i}()}}]);