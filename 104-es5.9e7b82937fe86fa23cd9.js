function t(t,e,n,i,o,r,s){try{var a=t[r](s);var c=a.value}catch(d){n(d);return}if(a.done){e(c)}else{Promise.resolve(c).then(i,o)}}function e(e){return function(){var n=this,i=arguments;return new Promise(function(o,r){var s=e.apply(n,i);function a(e){t(s,o,r,a,c,"next",e)}function c(e){t(s,o,r,a,c,"throw",e)}a(undefined)})}}function n(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||false;i.configurable=true;if("value"in i)i.writable=true;Object.defineProperty(t,i.key,i)}}function i(t,e,i){if(e)n(t.prototype,e);if(i)n(t,i);return t}(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{WbT0:function t(n,o,r){"use strict";r.r(o),r.d(o,"ion_toggle",function(){return l});var s=r("S6Yj"),a=(r("OoTa"),r("pyhm")),c=r("1OJ9"),d=r("9Xoc");var l=function(){function t(t){var e=this;Object(s.m)(this,t),this.inputId="ion-tg-"+h++,this.lastDrag=0,this.activated=!1,this.name=this.inputId,this.checked=!1,this.disabled=!1,this.value="on",this.onClick=function(){e.lastDrag+300<Date.now()&&(e.checked=!e.checked)},this.onFocus=function(){e.ionFocus.emit()},this.onBlur=function(){e.ionBlur.emit()},this.ionChange=Object(s.d)(this,"ionChange",7),this.ionFocus=Object(s.d)(this,"ionFocus",7),this.ionBlur=Object(s.d)(this,"ionBlur",7),this.ionStyle=Object(s.d)(this,"ionStyle",7)}var n=t.prototype;n.checkedChanged=function t(e){this.ionChange.emit({checked:e,value:this.value})};n.disabledChanged=function t(){this.emitStyle(),this.gesture&&this.gesture.setDisabled(this.disabled)};n.componentWillLoad=function t(){this.emitStyle()};n.componentDidLoad=function(){var t=e(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function t(n){while(1){switch(n.prev=n.next){case 0:n.next=2;return Promise.resolve().then(r.bind(null,"VUZZ"));case 2:n.t0={el:this.el,gestureName:"toggle",gesturePriority:100,threshold:5,passive:!1,onStart:function t(){return e.onStart()},onMove:function t(n){return e.onMove(n)},onEnd:function t(n){return e.onEnd(n)}};this.gesture=n.sent.createGesture(n.t0);this.disabledChanged();case 5:case"end":return n.stop()}}},t,this)}));function n(){return t.apply(this,arguments)}return n}();n.componentDidUnload=function t(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)};n.emitStyle=function t(){this.ionStyle.emit({"interactive-disabled":this.disabled})};n.onStart=function t(){this.activated=!0,this.setFocus()};n.onMove=function t(e){g(document,this.checked,e.deltaX,-10)&&(this.checked=!this.checked,Object(c.d)())};n.onEnd=function t(e){this.activated=!1,this.lastDrag=Date.now(),e.event.preventDefault(),e.event.stopImmediatePropagation()};n.getValue=function t(){return this.value||""};n.setFocus=function t(){this.buttonEl&&this.buttonEl.focus()};n.render=function t(){var e,n=this;var i=this.inputId,o=this.disabled,r=this.checked,c=this.activated,l=this.color,g=this.el,h=Object(s.e)(this),u=i+"-lbl",b=Object(d.f)(g),p=this.getValue();return b&&(b.id=u),Object(d.k)(!0,g,this.name,r?p:"",o),Object(s.i)(s.a,{onClick:this.onClick,role:"checkbox","aria-disabled":o?"true":null,"aria-checked":""+r,"aria-labelledby":u,class:Object.assign({},Object(a.a)(l),(e={},e[h]=!0,e["in-item"]=Object(a.c)("ion-item",g),e["toggle-activated"]=c,e["toggle-checked"]=r,e["toggle-disabled"]=o,e.interactive=!0,e))},Object(s.i)("div",{class:"toggle-icon"},Object(s.i)("div",{class:"toggle-inner"})),Object(s.i)("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:o,ref:function t(e){return n.buttonEl=e}}))};i(t,[{key:"el",get:function t(){return Object(s.f)(this)}}],[{key:"watchers",get:function t(){return{checked:["checkedChanged"],disabled:["disabledChanged"]}}},{key:"style",get:function t(){return":host{-webkit-box-sizing:content-box!important;box-sizing:content-box!important;display:inline-block;outline:none;contain:content;cursor:pointer;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-focused) input{border:2px solid #5e9ed6}:host(.toggle-disabled){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}:host{--background:rgba(var(--ion-text-color-rgb,0,0,0),0.088);--background-checked:var(--ion-color-primary,#3880ff);--handle-background:#fff;--handle-background-checked:#fff;-webkit-box-sizing:content-box;box-sizing:content-box;position:relative;width:51px;height:32px;contain:strict}:host(.ion-color.toggle-checked) .toggle-icon{background:var(--ion-color-base)}.toggle-icon{border-radius:16px;display:block;position:relative;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:background-color .3s;transition:background-color .3s;background:var(--background);overflow:hidden;pointer-events:none}.toggle-inner{left:2px;top:2px;border-radius:14px;position:absolute;width:28px;height:28px;-webkit-transition:width .12s ease-in-out 80ms,left .11s ease-in-out 80ms,right .11s ease-in-out 80ms,-webkit-transform .3s;transition:width .12s ease-in-out 80ms,left .11s ease-in-out 80ms,right .11s ease-in-out 80ms,-webkit-transform .3s;transition:transform .3s,width .12s ease-in-out 80ms,left .11s ease-in-out 80ms,right .11s ease-in-out 80ms;transition:transform .3s,width .12s ease-in-out 80ms,left .11s ease-in-out 80ms,right .11s ease-in-out 80ms,-webkit-transform .3s;background:var(--handle-background);-webkit-box-shadow:0 3px 12px rgba(0,0,0,.16),0 3px 1px rgba(0,0,0,.1);box-shadow:0 3px 12px rgba(0,0,0,.16),0 3px 1px rgba(0,0,0,.1);will-change:transform;contain:strict}:host-context([dir=rtl]) .toggle-inner,[dir=rtl] .toggle-inner{left:unset;right:unset;right:2px}:host(.toggle-checked) .toggle-icon{background:var(--background-checked)}:host(.toggle-activated) .toggle-icon:before,:host(.toggle-checked) .toggle-icon:before{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0)}:host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(19px,0,0);transform:translate3d(19px,0,0);background:var(--handle-background-checked)}:host-context([dir=rtl]).toggle-checked .toggle-inner,:host-context([dir=rtl]):host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(-1 * 19px),0,0);transform:translate3d(calc(-1 * 19px),0,0)}:host(.toggle-activated.toggle-checked) .toggle-inner:before{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0)}:host(.toggle-activated) .toggle-inner{width:34px}:host(.toggle-activated.toggle-checked) .toggle-inner{left:-4px}:host-context([dir=rtl]).toggle-activated.toggle-checked .toggle-inner,:host-context([dir=rtl]):host(.toggle-activated.toggle-checked) .toggle-inner{left:unset;right:unset;right:-4px}:host(.toggle-disabled){opacity:.3}:host(.in-item[slot]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:16px;padding-right:8px;padding-top:6px;padding-bottom:5px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot]){padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:8px;padding-inline-end:8px}}:host(.in-item[slot=start]){padding-left:0;padding-right:16px;padding-top:6px;padding-bottom:5px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){padding-left:unset;padding-right:unset;-webkit-padding-start:0;padding-inline-start:0;-webkit-padding-end:16px;padding-inline-end:16px}}"}}]);return t}(),g=function t(e,n,i,o){var r="rtl"===e.dir;return n?!r&&o>i||r&&-o<i:!r&&-o<i||r&&o>i};var h=0}}]);