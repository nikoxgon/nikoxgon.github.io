(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{ejOg:function(n,e,o){"use strict";o.r(e),o.d(e,"mdTransitionAnimation",function(){return i});var a=o("1iah");const i=(n,e)=>{const o="back"===e.direction,i=e.leavingEl,r=t(e.enteringEl),s=r.querySelector("ion-toolbar"),c=Object(a.a)();if(c.addElement(r).beforeRemoveClass("ion-page-invisible"),o?c.duration(e.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):c.duration(e.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform","translateY(40px)","translateY(0px)").fromTo("opacity",.01,1),s){const n=Object(a.a)();n.addElement(s),c.addAnimation(n)}if(i&&o){c.duration(e.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");const n=Object(a.a)();n.addElement(t(i)).fromTo("transform","translateY(0px)","translateY(40px)").fromTo("opacity",1,0),c.addAnimation(n)}return c},t=n=>n.classList.contains("ion-page")?n:n.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||n}}]);