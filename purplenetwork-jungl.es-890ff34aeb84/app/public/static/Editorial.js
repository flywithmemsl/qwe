(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{10:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return r}));var i={power3InOut:"power3.inOut",power3Out:"power3.out"},r={introDuration:.4,changeSectionDuration:.3}},15:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n(6),r=n.n(i),a=n(11),o=n.n(a),s=function(){function t(){r()(this,t)}return o()(t,null,[{key:"init",value:function(t){console.log(t)}}]),t}()},17:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n(6),r=n.n(i),a=n(7),o=n(10),s=function t(e){var n=this,i=e.onClick;r()(this,t),this.show=function(){a.a.to(n.domElement,{duration:o.a.introDuration,opacity:1,x:122,ease:o.b.power3InOut})},this.hide=function(){a.a.to(n.domElement,{duration:o.a.introDuration,opacity:0,x:0,ease:o.b.power3InOut})},this.visible=function(t){a.a.to(n.domElement,{duration:.35,opacity:t?1:0,ease:o.b.power3InOut})},this.domElement=document.querySelector(".js-logo"),this.domElement.addEventListener("click",i)}},18:function(t,e,n){"use strict";var i=n(6),r=n.n(i),a=n(11),o=n.n(a),s=n(7),c=n(19),u=n.n(c),l=function t(e){var n=this,i=e.currentStep,a=void 0===i?0:i,o=e.onClick;r()(this,t),this.update=function(t){var e=t.oldStep,i=t.currentStep;if(e>=0){var r=n.paginationText[e],a=n.paginationText[e+1],o=n.paginationText[i],c=n.paginationText[i+1];r.parentNode.classList.remove("is-active"),o.parentNode.classList.add("is-active"),a&&s.a.to(a,{duration:.3,width:0}),s.a.to(c,{duration:.3,width:window.innerWidth<768?0:"auto"})}else{var u=n.paginationText[i-1],l=n.paginationText[i],d=n.paginationText[i+1];u.parentNode.classList.remove("is-active"),l.parentNode.classList.add("is-active"),s.a.to(l,{duration:.3,width:0}),d&&s.a.to(d,{duration:.3,width:window.innerWidth<768?0:"auto"})}},this.onClick=o,this.paginationText=document.querySelectorAll(".js-form-pagination-text"),this.paginationDot=Object.values(document.querySelectorAll(".js-form-pagination-dot")),this.paginationDot.map((function(t,e){t.addEventListener("click",(function(){n.onClick(e)}))}));var c=this.paginationText[a+1];return s.a.set(c,{width:window.innerWidth<768?0:"auto"}),this.loader=s.a.timeline({paused:!0,repeat:-1,yoyo:!1}),this.loader.to(this.paginationDot,{duration:.3,stagger:.1,opacity:1,clearProps:"all"}).to(this.paginationDot,{duration:.3,stagger:.1,opacity:.2,clearProps:"all"}),this.loader.stop=function(){n.loader.pause(),n.loader.seek(0),s.a.set(n.paginationDot,{opacity:1})},this},d=n(28),p=function t(e){var n=this,i=e.app;return r()(this,t),this.addError=function(t){n.app.form.classList.add(n.app.errorClassName),n.app.errorMessage=t},this.removeError=function(){n.app.form.classList.remove(n.app.errorClassName)},this.checkRequired=function(t){return!(!t||""===t)||(n.addError(n.app.steps[n.app.currentStep].errors.required),!1)},this.checkName=function(){var t=n.app.input.value;return!!n.checkRequired(t)&&t},this.checkEmail=function(){var t=n.app.input.value;return!!n.checkRequired(t)&&(Object(d.validateEmail)(t)?t:(n.addError(n.app.steps[n.app.currentStep].errors.invalid),!1))},this.checkPhone=function(){var t=n.app.input.value;return t&&""!==t?n.__validatePhone(t)?t:(n.addError(n.app.steps[n.app.currentStep].errors.invalid),!1):""},this.checkMessage=function(){var t=n.app.textarea.value;return!!n.checkRequired(t)&&t},this.checkLastStep=function(){var t=n.app.checkBox.checked;return t||n.addError(n.app.steps[n.app.currentStep].errors.required),!t||"1"},this.watchPhoneChange=function(){var t=n.app.input,e=t.value,i=12;"+"===e.substr(0,1)?(e="+"+(e=(e=e.substr(1,e.length)).replace(/\s+/g,"-").replace(/[^0-9-]/g,"").replace(/-+/g,"")).substr(0,e.length),i=15):e=(e=e.replace(/\s+/g,"-").replace(/[^0-9-]/g,"").replace(/-+/g,"")).substr(0,e.length),e=e.length<=i?e:e.substr(0,i),t.value=e},this.__validatePhone=function(t){var e=t.length>6;return"+"!==t.substr(0,1)&&3!==parseInt(t.substr(0,1))&&0!==parseInt(t.substr(0,1))&&(e=!1),e},this.app=i,this},h=function t(e){var n=e.app;return r()(this,t),[{field:"name",type:"text",check:function(){return n.validator.checkName()},errors:{required:"Il campo nome è un campo obbligatorio"}},{field:"email",type:"email",check:function(){return n.validator.checkEmail()},errors:{required:"Il campo email è un campo obbligatorio",invalid:"Inserisci un indirizzo email valido"}},{field:"phone",type:"tel",check:function(){return n.validator.checkPhone()},errors:{required:"Il campo telefono è un campo obbligatorio",invalid:"Inserisci un numero di telefono valido"}},{field:"message",type:"textarea",check:function(){return n.validator.checkMessage()},errors:{required:"Il campo messaggio è un campo obbligatorio"}},{field:"privacy",type:"checkbox",check:function(){return n.validator.checkLastStep()},errors:{required:"Il campo privacy è un campo obbligatorio"}}]},f=n(8);n.d(e,"a",(function(){return m}));var m=function(){function t(e){var n=this,i=e.onResultCallback;r()(this,t),this.reset=function(){Object.keys(n.formData).map((function(t){delete n.formData[t]}));var t=n.currentStep;setTimeout((function(){n.textarea.value="",n.checkBox.checked=!1,n.form.classList.remove("is-submitted"),n.form.classList.remove("has-textarea"),n.form.classList.remove("is-last-step"),n.form.classList.add("has-captcha"),s.a.set(n.captcha,{clearProps:"all"}),n.sendButton.disabled=!n.checkBox.checked,window.grecaptcha.reset(),n.hideLastStep(),n.hideResult(),s.a.set(n.fieldSet,{marginBottom:window.innerWidth<768?"94px":"154px"}),n.validator.removeError(),0!==t&&n.pagination.update({oldStep:t,currentStep:0}),s.a.set(n.labels,{clearProps:"all"})}),300);var e=n.currentStep;n.currentStep=0,n.transformInput(e)},this.checkForm=function(){var t=n.steps[n.currentStep],e=t.check();if(!1!==e){if(n.formData[t.field]=e,n.currentStep===n.steps.length-1)return window.grecaptcha.execute();n.currentStep=n.currentStep+1,n.transformInput()}},this.addListeners=function(){n.form.addEventListener("submit",(function(t){return t.preventDefault(),n.checkForm(),!1}));var t=["focus","input","change"];[n.input,n.textarea,n.checkBox].map((function(e){return t.map((function(t){return e.addEventListener(t,n.validator.removeError)}))})),n.checkBox.addEventListener("change",(function(){n.showCaptcha()}))},this.transformInput=function(t){var e=n.steps[n.currentStep],i=window.innerWidth<768?34:38,r="".concat(n.currentStep*-i,"px");if(s.a.to(n.labels,{duration:.3,y:r}),n.input.value=n.formData[e.field]||"",n.input.blur(),"checkbox"===e.type)return n.pagination.update({oldStep:t,currentStep:n.currentStep}),n.showLastStep();t===n.steps.length-1&&n.hideLastStep(),n.input.type=e.type,n.pagination.update({oldStep:t,currentStep:n.currentStep}),"tel"===e.type?n.input.addEventListener("input",n.validator.watchPhoneChange):n.input.removeEventListener("input",n.validator.watchPhoneChange),"textarea"===e.type?(n.textarea.focus(),n.form.classList.add("has-textarea")):(n.input.focus(),n.form.classList.remove("has-textarea")),0==n.currentStep?s.a.to(".js-form-advice",{duration:.4,opacity:1,y:0,onStart:function(){document.querySelector(".js-form-advice").style.display="block"}}):s.a.to(".js-form-advice",{duration:.4,opacity:0,y:20}).then((function(){document.querySelector(".js-form-advice").style.display="none"}))},this.showLastStep=function(){n.form.classList.add("is-last-step");var t="94px";n.form.classList.contains("has-captcha")&&(t="154px"),s.a.to(n.fieldSet,{duration:.3,marginBottom:t}),s.a.to(n.inputs,{duration:.3,y:"-10px",opacity:0,pointerEvents:"none"}),s.a.to(n.lastStep,{duration:.3,y:f.a.isMobile?"-160px":"-150px",opacity:1,pointerEvents:"all"})},this.hideLastStep=function(){n.form.classList.remove("is-last-step"),s.a.to(n.fieldSet,{duration:.3,marginBottom:0}),s.a.to(n.inputs,{duration:.3,y:0,opacity:1,pointerEvents:"all"}),s.a.to(n.lastStep,{duration:.3,y:0,opacity:0,pointerEvents:"none"})},this.showCaptcha=function(){n.sendButton.disabled=!n.checkBox.checked,n.checkBox.checked&&(n.form.classList.add("has-captcha"),s.a.to(n.fieldSet,{duration:.3,marginBottom:window.innerWidth<768?"94px":"154px",onComplete:function(){n.captcha.hasChildNodes()||window.grecaptcha.render(n.captcha,{sitekey:window.recaptchaKey,size:"invisible",badge:"inline",callback:function(t){n.formData.captcha=t,n.sendForm()}}),s.a.to(n.captcha,{duration:.3,height:"auto"})}}))},this.sendForm=function(){n.lockForm(),n.pagination.loader.play(),u()({method:"post",url:window.apiUrl,config:{headers:{"Content-Type":"application/json","cache-control":"no-cache"}},data:n.formData}).then((function(){n.pagination.loader.stop(),n.showResult(),n.unlockForm()})).catch((function(t){n.validator.addError(t),n.pagination.loader.stop(),n.unlockForm()}))},this.lockForm=function(){n.form.classList.add("is-submitted"),n.sendButton.disabled=!0},this.unlockForm=function(){n.form.classList.remove("is-submitted"),n.sendButton.disabled=!1},this.showResult=function(){s.a.to([n.toHideOnResult],{duration:.3,opacity:0,pointerEvents:"none"}),s.a.to(n.result,{duration:.3,y:0,opacity:1,pointerEvents:"all"}).then((function(){null!==n.onResultCallback&&n.onResultCallback()}))},this.hideResult=function(){s.a.set([n.toHideOnResult],{clearProps:"all"}),s.a.set(n.result,{clearProps:"all"})},this.form=document.querySelector(".js-form"),this.input=this.form.querySelector("input"),this.textarea=this.form.querySelector("textarea"),this.checkBox=this.form.querySelector('input[type="checkbox"]'),this.formErrorMessage=this.form.querySelector(".js-form-error-message"),this.labels=this.form.querySelector(".js-form-labels"),this.fieldSet=this.form.querySelector(".js-form-fieldset"),this.inputs=this.form.querySelector(".js-form-inputs"),this.lastStep=this.form.querySelector(".js-form-last-step"),this.captcha=this.form.querySelector(".js-captcha"),this.sendButton=this.form.querySelector(".js-form-send"),this.result=this.form.querySelector(".js-form-result"),this.toHideOnResult=this.form.querySelectorAll(".js-form-to-hide-on-result"),this.errorClassName="has-error",this.formData={},this.currentStep=0,this.onResultCallback=i,this.steps=new h({app:this}),this.validator=new p({app:this}),this.pagination=new l({onClick:function(t){var e=n.currentStep;t<e?(n.currentStep=t,n.transformInput(e)):t>e&&n.checkForm()}}),this.addListeners()}return o()(t,[{key:"isLastStep",get:function(){return this.form.classList.contains("is-last-step")}},{key:"errorMessage",get:function(){return this.formErrorMessage.innerHTML},set:function(t){this.formErrorMessage.innerHTML=t}}]),t}()},58:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return v}));var i=n(6),r=n.n(i),a=n(11),o=n.n(a),s=n(13),c=n.n(s),u=n(12),l=n.n(u),d=n(14),p=n.n(d),h=n(15),f=n(18),m=n(17),v=function(t){function e(){return r()(this,e),c()(this,l()(e).apply(this,arguments))}return p()(e,t),o()(e,null,[{key:"init",value:function(){var t=this;document.body.style.backgroundColor="white",document.body.classList.add("is-scollable"),this.headerLogo=new m.a({onClick:function(){return window.location.href="/"}}),document.body.classList.add("app-is-ready","is-white"),this.headerLogo.show(),document.querySelector(".js-tab")?(this.setActive(window.location.hash),window.addEventListener("resize",(function(){var t=document.querySelector(".js-tab-content .is-active").clientHeight;document.querySelector(".js-tab-content").style.height="".concat(t,"px")})),Object.values(document.querySelectorAll(".js-tab [href]")).map((function(e){e.addEventListener("click",(function(){var n=e.getAttribute("href");t.setActive(n)}))}))):new f.a}}]),e}(h.a);v.setActive=function(t){if(""!==t){document.querySelector(".js-tab .is-active").classList.remove("is-active"),document.querySelector('.js-tab [href="'.concat(t,'"]')).parentNode.classList.add("is-active"),document.querySelector(".js-tab-content .is-active").classList.remove("is-active"),document.querySelector('.js-tab-content [data-tab="'.concat(t,'"]')).classList.add("is-active");var e=document.querySelector(".js-tab-content .is-active").clientHeight;document.querySelector(".js-tab-content").style.height="".concat(e,"px")}else{var n=document.querySelector(".js-tab-content .is-active").clientHeight;document.querySelector(".js-tab-content").style.height="".concat(n,"px")}}},59:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return h}));var i=n(6),r=n.n(i),a=n(11),o=n.n(a),s=n(13),c=n.n(s),u=n(12),l=n.n(u),d=n(14),p=n.n(d),h=function(t){function e(){return r()(this,e),c()(this,l()(e).apply(this,arguments))}return p()(e,t),o()(e,null,[{key:"init",value:function(){console.log("privacy page")}}]),e}(n(15).a)},8:function(t,e,n){"use strict";var i=n(29),r=n.n(i),a={selectedSetionIndex:null,selectedSection:null,sections:[],isBlobVisible:!1,contentDomElement:document.querySelector(".js-content"),browser:r.a.getParser(window.navigator.userAgent),get isMobile(){var t=!1;switch(r.a.getParser(window.navigator.userAgent).parsedResult.platform.type){case"mobile":t=!0;break;case"tablet":default:t=!1}return"ontouchstart"in window&&t},get isTablet(){return"ontouchstart"in window&&"tablet"==r.a.getParser(window.navigator.userAgent).parsedResult.platform.type},get isMobileOrTablet(){return this.isMobile||this.isTablet||this.hasTouch},get isMobileOrTabletLandscape(){return this.isMobile||this.isTablet&&this.isLandscape||this.hasTouch&&this.isLandscape},get isMobileOrTabletPortrait(){return this.isMobile||this.isTablet&&this.isPortrait||this.hasTouch&&this.isPortrait},get isLandscape(){var t=!1;return screen.orientation?t=0!==screen.orientation.angle:void 0!==window.orientation&&(t=90==window.orientation||-90==window.orientation),t},get isPortrait(){var t=!1;return screen.orientation?t=0==screen.orientation.angle:void 0!==window.orientation&&(t=90!==window.orientation&&-90!==window.orientation),t},get hasTouch(){return"ontouchstart"in window},get isSafariMobile(){var t=r.a.getParser(window.navigator.userAgent);return"ios"==t.parsedResult.os.name.toLowerCase()&&"safari"==t.parsedResult.browser.name.toLowerCase()},getSectionById:function(t){var e=!0,n=!1,i=void 0;try{for(var r,o=a.sections[Symbol.iterator]();!(e=(r=o.next()).done);e=!0){var s=r.value;if(s.id==t)return s}}catch(t){n=!0,i=t}finally{try{e||null==o.return||o.return()}finally{if(n)throw i}}return null}};e.a=a}}]);