(this.webpackJsonpCountr=this.webpackJsonpCountr||[]).push([[16],{102:function(t,e,r){"use strict";r.r(e),r.d(e,"ion_checkbox",(function(){return b}));var o=r(16),i=r(5),n=r(6),c=r(17),a=r(14),s=r(20),h=r(168),b=function(){function t(e){var r=this;Object(i.a)(this,t),Object(c.l)(this,e),this.inputId="ion-cb-".concat(d++),this.name=this.inputId,this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.value="on",this.onClick=function(){r.setFocus(),r.checked=!r.checked,r.indeterminate=!1},this.onFocus=function(){r.ionFocus.emit()},this.onBlur=function(){r.ionBlur.emit()},this.ionChange=Object(c.f)(this,"ionChange",7),this.ionFocus=Object(c.f)(this,"ionFocus",7),this.ionBlur=Object(c.f)(this,"ionBlur",7),this.ionStyle=Object(c.f)(this,"ionStyle",7)}return Object(n.a)(t,[{key:"componentWillLoad",value:function(){this.emitStyle()}},{key:"checkedChanged",value:function(t){this.ionChange.emit({checked:t,value:this.value}),this.emitStyle()}},{key:"disabledChanged",value:function(){this.emitStyle()}},{key:"emitStyle",value:function(){this.ionStyle.emit({"checkbox-checked":this.checked,"interactive-disabled":this.disabled})}},{key:"setFocus",value:function(){this.buttonEl&&this.buttonEl.focus()}},{key:"render",value:function(){var t,e=this,r=this.inputId,i=this.indeterminate,n=this.disabled,b=this.checked,d=this.value,l=this.color,u=this.el,k=r+"-lbl",m=Object(a.b)(this),p=Object(s.f)(u);p&&(p.id=k),Object(s.a)(!0,u,this.name,b?d:"",n);var g=i?Object(c.j)("path",{d:"M6 12L18 12"}):Object(c.j)("path",{d:"M5.9,12.5l3.8,3.8l8.8-8.8"});return"md"===m&&(g=i?Object(c.j)("path",{d:"M2 12H22"}):Object(c.j)("path",{d:"M1.73,12.91 8.1,19.28 22.79,4.59"})),Object(c.j)(c.b,{onClick:this.onClick,role:"checkbox","aria-disabled":n?"true":null,"aria-checked":"".concat(b),"aria-labelledby":k,class:Object.assign(Object.assign({},Object(h.a)(l)),(t={},Object(o.a)(t,m,!0),Object(o.a)(t,"in-item",Object(h.c)("ion-item",u)),Object(o.a)(t,"checkbox-checked",b),Object(o.a)(t,"checkbox-disabled",n),Object(o.a)(t,"checkbox-indeterminate",i),Object(o.a)(t,"interactive",!0),t))},Object(c.j)("svg",{class:"checkbox-icon",viewBox:"0 0 24 24"},g),Object(c.j)("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:this.disabled,ref:function(t){return e.buttonEl=t}}))}},{key:"el",get:function(){return Object(c.g)(this)}}],[{key:"watchers",get:function(){return{checked:["checkedChanged"],disabled:["disabledChanged"]}}}]),t}(),d=0;b.style={ios:":host{--background-checked:var(--ion-color-primary, #3880ff);--border-color-checked:var(--ion-color-primary, #3880ff);--checkmark-color:var(--ion-color-primary-contrast, #fff);--checkmark-width:1;--transition:none;display:inline-block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-color){--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}[dir=rtl] button,:host-context([dir=rtl]) button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.checkbox-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-sizing:border-box;box-sizing:border-box}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:var(--checkmark-width);opacity:0}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--border-radius:50%;--border-width:1px;--border-style:solid;--border-color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.23);--background:var(--ion-item-background, var(--ion-background-color, #fff));--size:26px;width:var(--size);height:var(--size)}:host(.checkbox-disabled){opacity:0.3}:host(.in-item){margin-left:0;margin-right:8px;margin-top:10px;margin-bottom:9px;display:block;position:static}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.in-item[slot=start]){margin-left:2px;margin-right:20px;margin-top:8px;margin-bottom:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:20px;margin-inline-end:20px}}",md:":host{--background-checked:var(--ion-color-primary, #3880ff);--border-color-checked:var(--ion-color-primary, #3880ff);--checkmark-color:var(--ion-color-primary-contrast, #fff);--checkmark-width:1;--transition:none;display:inline-block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-color){--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}[dir=rtl] button,:host-context([dir=rtl]) button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.checkbox-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-sizing:border-box;box-sizing:border-box}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:var(--checkmark-width);opacity:0}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--border-radius:calc(var(--size) * .125);--border-width:2px;--border-style:solid;--border-color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.51);--checkmark-width:3;--background:var(--ion-item-background, var(--ion-background-color, #fff));--transition:background 180ms cubic-bezier(0.4, 0, 0.2, 1);--size:18px;width:var(--size);height:var(--size)}.checkbox-icon path{stroke-dasharray:30;stroke-dashoffset:30}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{stroke-dashoffset:0;-webkit-transition:stroke-dashoffset 90ms linear 90ms;transition:stroke-dashoffset 90ms linear 90ms}:host(.checkbox-disabled){opacity:0.3}:host(.in-item){margin-left:0;margin-right:0;margin-top:18px;margin-bottom:18px;display:block;position:static}:host(.in-item[slot=start]){margin-left:4px;margin-right:36px;margin-top:18px;margin-bottom:18px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:36px;margin-inline-end:36px}}"}},168:function(t,e,r){"use strict";r.d(e,"a",(function(){return s})),r.d(e,"b",(function(){return h})),r.d(e,"c",(function(){return a})),r.d(e,"d",(function(){return d}));var o=r(1),i=r.n(o),n=r(4),c=r(16),a=function(t,e){return null!==e.closest(t)},s=function(t){return"string"===typeof t&&t.length>0?Object(c.a)({"ion-color":!0},"ion-color-".concat(t),!0):void 0},h=function(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return e[t]=!0})),e},b=/^[a-z][a-z0-9+\-.]*:/,d=function(){var t=Object(n.a)(i.a.mark((function t(e,r,o){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null==e||"#"===e[0]||b.test(e)){t.next=5;break}if(!(n=document.querySelector("ion-router"))){t.next=5;break}return null!=r&&r.preventDefault(),t.abrupt("return",n.push(e,o));case 5:return t.abrupt("return",!1);case 6:case"end":return t.stop()}}),t)})));return function(e,r,o){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=stencil-ion-checkbox-ios-entry-js.9af93907.chunk.js.map