(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aa852d2c"],{"0532":function(e,t,n){"use strict";n.d(t,"f",(function(){return i})),n.d(t,"e",(function(){return a})),n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return s}));var o=n("b775"),r="/admin/file.Group/";function i(e){return Object(o["a"])({url:r+"list",method:"get",params:e})}function a(e){return Object(o["a"])({url:r+"info",method:"get",params:e})}function l(e){return Object(o["a"])({url:r+"add",method:"post",data:e})}function c(e){return Object(o["a"])({url:r+"edit",method:"post",data:e})}function u(e){return Object(o["a"])({url:r+"dele",method:"post",data:e})}function s(e){return Object(o["a"])({url:r+"disable",method:"post",data:e})}},"09f4":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),Math.easeInOutQuad=function(e,t,n,o){return e/=o/2,e<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)};var o=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function r(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function i(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function a(e,t,n){var a=i(),l=e-a,c=20,u=0;t="undefined"===typeof t?500:t;var s=function e(){u+=c;var i=Math.easeInOutQuad(u,a,l,t);r(i),u<t?o(e):n&&"function"===typeof n&&n()};s()}},4381:function(e,t,n){"use strict";n("666d"),n("a52a");var o=n("4360");function r(e,t){var n=t.value,r=o["a"].getters&&o["a"].getters.roles;if(!(n&&n instanceof Array))throw new Error("need roles! Like v-permission=\"['admin','editor']\"");if(n.length>0){var i=n,a=r.some((function(e){return i.includes(e)}));a||e.parentNode&&e.parentNode.removeChild(e)}}var i={inserted:function(e,t){r(e,t)},update:function(e,t){r(e,t)}},a=function(e){e.directive("permission",i)};window.Vue&&(window["permission"]=i,Vue.use(a)),i.install=a;t["a"]=i},7094:function(e,t,n){
/*!
 * clipboard.js v2.0.8
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function(t,n){e.exports=n()})(0,(function(){return function(){var e={134:function(e,t,n){"use strict";n.d(t,{default:function(){return T}});var o=n(279),r=n.n(o),i=n(370),a=n.n(i),l=n(817),c=n.n(l);function u(e){return u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),e}var p=function(){function e(t){s(this,e),this.resolveOptions(t),this.initSelection()}return f(e,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"createFakeElement",value:function(){var e="rtl"===document.documentElement.getAttribute("dir");this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var t=window.pageYOffset||document.documentElement.scrollTop;return this.fakeElem.style.top="".concat(t,"px"),this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.fakeElem}},{key:"selectFake",value:function(){var e=this,t=this.createFakeElement();this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.container.appendChild(t),this.selectedText=c()(t),this.copyText(),this.removeFake()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=c()(this.target),this.copyText()}},{key:"copyText",value:function(){var e;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==u(e)||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),e}(),m=p;function h(e){return h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function y(e,t,n){return t&&b(e.prototype,t),n&&b(e,n),e}function v(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}function k(e,t){return k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},k(e,t)}function _(e){var t=E();return function(){var n,o=O(e);if(t){var r=O(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return w(this,n)}}function w(e,t){return!t||"object"!==h(t)&&"function"!==typeof t?x(e):t}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}function j(e,t){var n="data-clipboard-".concat(e);if(t.hasAttribute(n))return t.getAttribute(n)}var S=function(e){v(n,e);var t=_(n);function n(e,o){var r;return g(this,n),r=t.call(this),r.resolveOptions(o),r.listenClick(e),r}return y(n,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"===typeof e.action?e.action:this.defaultAction,this.target="function"===typeof e.target?e.target:this.defaultTarget,this.text="function"===typeof e.text?e.text:this.defaultText,this.container="object"===h(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=a()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new m({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return j("action",e)}},{key:"defaultTarget",value:function(e){var t=j("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return j("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"===typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach((function(e){n=n&&!!document.queryCommandSupported(e)})),n}}]),n}(r()),T=S},828:function(e){var t=9;if("undefined"!==typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}function o(e,n){while(e&&e.nodeType!==t){if("function"===typeof e.matches&&e.matches(n))return e;e=e.parentNode}}e.exports=o},438:function(e,t,n){var o=n(828);function r(e,t,n,o,r){var i=a.apply(this,arguments);return e.addEventListener(n,i,r),{destroy:function(){e.removeEventListener(n,i,r)}}}function i(e,t,n,o,i){return"function"===typeof e.addEventListener?r.apply(null,arguments):"function"===typeof n?r.bind(null,document).apply(null,arguments):("string"===typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return r(e,t,n,o,i)})))}function a(e,t,n,r){return function(n){n.delegateTarget=o(n.target,t),n.delegateTarget&&r.call(e,n)}}e.exports=i},879:function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"===typeof e||e instanceof String},t.fn=function(e){var t=Object.prototype.toString.call(e);return"[object Function]"===t}},370:function(e,t,n){var o=n(879),r=n(438);function i(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!o.string(t))throw new TypeError("Second argument must be a String");if(!o.fn(n))throw new TypeError("Third argument must be a Function");if(o.node(e))return a(e,t,n);if(o.nodeList(e))return l(e,t,n);if(o.string(e))return c(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function a(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}function l(e,t,n){return Array.prototype.forEach.call(e,(function(e){e.addEventListener(t,n)})),{destroy:function(){Array.prototype.forEach.call(e,(function(e){e.removeEventListener(t,n)}))}}}function c(e,t,n){return r(document.body,e,t,n)}e.exports=i},817:function(e){function t(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(e),o.removeAllRanges(),o.addRange(r),t=o.toString()}return t}e.exports=t},279:function(e){function t(){}t.prototype={on:function(e,t,n){var o=this.e||(this.e={});return(o[e]||(o[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var o=this;function r(){o.off(e,r),t.apply(n,arguments)}return r._=t,this.on(e,r,n)},emit:function(e){var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),o=0,r=n.length;for(o;o<r;o++)n[o].fn.apply(n[o].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),o=n[e],r=[];if(o&&t)for(var i=0,a=o.length;i<a;i++)o[i].fn!==t&&o[i].fn._!==t&&r.push(o[i]);return r.length?n[e]=r:delete n[e],this}},e.exports=t,e.exports.TinyEmitter=t}},t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}return function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),n(134)}().default}))},"98b1":function(e,t,n){"use strict";function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:230,t=880,n=document.documentElement.clientHeight||document.body.clientHeight;return n?n-e:t-e}n.d(t,"a",(function(){return o}))},dbe5:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-tabs",[e.checkPermission(["admin/SettingWechat/offiInfo"])?n("el-tab-pane",{attrs:{label:"公众号",lazy:""}},[n("wechat-offi",{staticClass:"dialog-body",style:{height:e.height+50+"px"}})],1):e._e(),e.checkPermission(["admin/SettingWechat/miniInfo"])?n("el-tab-pane",{attrs:{label:"小程序",lazy:""}},[n("wechat-mini")],1):e._e()],1)],1)},r=[],i=n("98b1"),a=n("e350"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-card",{staticClass:"box-card"},[n("el-row",{attrs:{gutter:0}},[n("el-col",{attrs:{xs:24,sm:16}},[n("el-form",{ref:"ref",attrs:{model:e.model,rules:e.rules,"label-width":"130px"}},[n("el-form-item",{attrs:{label:"名称",prop:"name"}},[n("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-document-copy"},on:{click:function(t){return e.copy(e.model.name,t)}},slot:"append"})],1)],1),n("el-form-item",{attrs:{label:"原始ID",prop:"origin_id"}},[n("el-input",{model:{value:e.model.origin_id,callback:function(t){e.$set(e.model,"origin_id",t)},expression:"model.origin_id"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-document-copy"},on:{click:function(t){return e.copy(e.model.origin_id,t)}},slot:"append"})],1)],1),n("el-form-item",{attrs:{label:"二维码",prop:"qrcode_url"}},[n("el-col",{attrs:{span:10}},[n("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:e.model.qrcode_url,"preview-src-list":[e.model.qrcode_url],title:"点击查看大图"}},[n("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[n("i",{staticClass:"el-icon-picture-outline"})])])],1),n("el-col",{attrs:{span:14}},[n("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.fileUpload()}}},[e._v("上传图片")]),n("br"),n("span",[e._v("jpg、png图片，小于200kb，宽高1:1")])],1)],1),n("el-form-item",{attrs:{label:"AppID",prop:"appid"}},[n("el-input",{model:{value:e.model.appid,callback:function(t){e.$set(e.model,"appid",t)},expression:"model.appid"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-document-copy"},on:{click:function(t){return e.copy(e.model.appid,t)}},slot:"append"})],1)],1),n("el-form-item",{attrs:{label:"AppSecret",prop:"appsecret"}},[n("el-input",{model:{value:e.model.appsecret,callback:function(t){e.$set(e.model,"appsecret",t)},expression:"model.appsecret"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-document-copy"},on:{click:function(t){return e.copy(e.model.appsecret,t)}},slot:"append"})],1)],1),n("el-form-item",{attrs:{label:"服务器地址(URL)",prop:"server_url"}},[n("el-input",{model:{value:e.model.server_url,callback:function(t){e.$set(e.model,"server_url",t)},expression:"model.server_url"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-document-copy"},on:{click:function(t){return e.copy(e.model.server_url,t)}},slot:"append"})],1)],1),n("el-form-item",{attrs:{label:"令牌(Token)",prop:"token"}},[n("el-input",{model:{value:e.model.token,callback:function(t){e.$set(e.model,"token",t)},expression:"model.token"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-document-copy"},on:{click:function(t){return e.copy(e.model.token,t)}},slot:"append"})],1)],1),n("el-form-item",{attrs:{label:"消息加解密密钥",prop:"encoding_aes_key"}},[n("el-input",{model:{value:e.model.encoding_aes_key,callback:function(t){e.$set(e.model,"encoding_aes_key",t)},expression:"model.encoding_aes_key"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-document-copy"},on:{click:function(t){return e.copy(e.model.encoding_aes_key,t)}},slot:"append"})],1)],1),n("el-form-item",{attrs:{label:"消息加解密方式",prop:"encoding_aes_type"}},[n("el-radio-group",{model:{value:e.model.encoding_aes_type,callback:function(t){e.$set(e.model,"encoding_aes_type",t)},expression:"model.encoding_aes_type"}},e._l(e.encoding_aes_types,(function(t){return n("el-radio",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.label))])})),1)],1),n("el-form-item",[n("el-button",{attrs:{loading:e.loading},on:{click:function(t){return e.refresh()}}},[e._v("刷新")]),n("el-button",{attrs:{loading:e.loading,type:"primary"},on:{click:function(t){return e.submit()}}},[e._v("提交")])],1)],1)],1)],1)],1),n("el-dialog",{attrs:{title:"文件管理",visible:e.fileDialog,width:"80%",top:"1vh"},on:{"update:visible":function(t){e.fileDialog=t}}},[n("file-manage",{attrs:{"file-type":"image"},on:{"file-lists":e.fileLists}})],1)],1)},c=[],u=n("f71e"),s=n("3659"),d=n("b775"),f="/admin/SettingWechat/";function p(e){return Object(d["a"])({url:f+"offiInfo",method:"get",params:e})}function m(e){return Object(d["a"])({url:f+"offiEdit",method:"post",data:e})}function h(e){return Object(d["a"])({url:f+"miniInfo",method:"get",params:e})}function g(e){return Object(d["a"])({url:f+"miniEdit",method:"post",data:e})}var b={components:{FileManage:s["a"]},data:function(){return{loading:!1,encoding_aes_types:[{value:1,label:"明文模式"},{value:2,label:"兼容模式"},{value:3,label:"安全模式"}],model:{name:"",origin_id:"",qrcode:"",appid:"",appsecret:"",server_url:"",token:"",encoding_aes_key:"",encoding_aes_type:1,qrcode_url:""},fileDialog:!1,rules:{appid:[{required:!0,message:"请输入appid",trigger:"blur"}],appsecret:[{required:!0,message:"请输入appsecret",trigger:"blur"}]}}},created:function(){this.info()},methods:{info:function(){var e=this;p().then((function(t){e.model=t.data}))},refresh:function(){var e=this;this.loading=!0,p().then((function(t){e.model=t.data,e.loading=!1,e.$message.success(t.msg)})).catch((function(){e.loading=!1}))},submit:function(){var e=this;this.$refs["ref"].validate((function(t){t&&(e.loading=!0,m(e.model).then((function(t){e.info(),e.loading=!1,e.$message.success(t.msg)})).catch((function(){e.loading=!1})))}))},fileUpload:function(){this.fileDialog=!0},fileLists:function(e){this.fileDialog=!1,this.model.qrcode_id=e[0]["file_id"],this.model.qrcode_url=e[0]["file_url"]},copy:function(e,t){e?Object(u["a"])(e,t):this.$message.error("内容为空")}}},y=b,v=n("4ac2"),k=Object(v["a"])(y,l,c,!1,null,"ebcc39e4",null),_=k.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-card",{staticClass:"box-card"},[n("el-row",{attrs:{gutter:0}},[n("el-col",{attrs:{xs:24,sm:16}},[n("el-form",{ref:"ref",attrs:{model:e.model,rules:e.rules,"label-width":"130px"}},[n("el-form-item",{attrs:{label:"名称",prop:"name"}},[n("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-document-copy"},on:{click:function(t){return e.copy(e.model.name,t)}},slot:"append"})],1)],1),n("el-form-item",{attrs:{label:"原始ID",prop:"origin_id"}},[n("el-input",{model:{value:e.model.origin_id,callback:function(t){e.$set(e.model,"origin_id",t)},expression:"model.origin_id"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-document-copy"},on:{click:function(t){return e.copy(e.model.origin_id,t)}},slot:"append"})],1)],1),n("el-form-item",{attrs:{label:"二维码",prop:"qrcode_url"}},[n("el-col",{attrs:{span:10}},[n("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:e.model.qrcode_url,"preview-src-list":[e.model.qrcode_url],title:"点击查看大图"}},[n("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[n("i",{staticClass:"el-icon-picture-outline"})])])],1),n("el-col",{attrs:{span:14}},[n("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.fileUpload()}}},[e._v("上传图片")]),n("br"),n("span",[e._v("jpg、png图片，小于200kb，宽高1:1")])],1)],1),n("el-form-item",{attrs:{label:"AppID",prop:"appid"}},[n("el-input",{model:{value:e.model.appid,callback:function(t){e.$set(e.model,"appid",t)},expression:"model.appid"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-document-copy"},on:{click:function(t){return e.copy(e.model.appid,t)}},slot:"append"})],1)],1),n("el-form-item",{attrs:{label:"AppSecret",prop:"appsecret"}},[n("el-input",{model:{value:e.model.appsecret,callback:function(t){e.$set(e.model,"appsecret",t)},expression:"model.appsecret"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-document-copy"},on:{click:function(t){return e.copy(e.model.appsecret,t)}},slot:"append"})],1)],1),n("el-form-item",[n("el-button",{attrs:{loading:e.loading},on:{click:function(t){return e.refresh()}}},[e._v("刷新")]),n("el-button",{attrs:{loading:e.loading,type:"primary"},on:{click:function(t){return e.submit()}}},[e._v("提交")])],1)],1)],1)],1)],1),n("el-dialog",{attrs:{title:"文件管理",visible:e.fileDialog,width:"80%",top:"1vh"},on:{"update:visible":function(t){e.fileDialog=t}}},[n("file-manage",{attrs:{"file-type":"image"},on:{"file-lists":e.fileLists}})],1)],1)},x=[],E={components:{FileManage:s["a"]},data:function(){return{loading:!1,model:{name:"",origin_id:"",appid:"",appsecret:"",qrcode_id:0,qrcode_url:""},fileDialog:!1,rules:{appid:[{required:!0,message:"请输入appid",trigger:"blur"}],appsecret:[{required:!0,message:"请输入appsecret",trigger:"blur"}]}}},created:function(){this.info()},methods:{info:function(){var e=this;h().then((function(t){e.model=t.data}))},refresh:function(){var e=this;this.loading=!0,h().then((function(t){e.model=t.data,e.loading=!1,e.$message.success(t.msg)})).catch((function(){e.loading=!1}))},submit:function(){var e=this;this.$refs["ref"].validate((function(t){t&&(e.loading=!0,g(e.model).then((function(t){e.info(),e.loading=!1,e.$message.success(t.msg)})).catch((function(){e.loading=!1})))}))},fileUpload:function(){this.fileDialog=!0},fileLists:function(e){this.fileDialog=!1,this.model.qrcode_id=e[0]["file_id"],this.model.qrcode_url=e[0]["file_url"]},copy:function(e,t){e?Object(u["a"])(e,t):this.$message.error("内容为空")}}},O=E,j=Object(v["a"])(O,w,x,!1,null,"7cc28d6b",null),S=j.exports,T={name:"Wechat",components:{WechatOffi:_,WechatMini:S},data:function(){return{height:680}},created:function(){this.height=Object(i["a"])()},methods:{checkPermission:a["a"]}},A=T,C=Object(v["a"])(A,o,r,!1,null,null,null);t["default"]=C.exports},e08b:function(e,t,n){"use strict";n.d(t,"e",(function(){return i})),n.d(t,"h",(function(){return a})),n.d(t,"g",(function(){return l})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return d})),n.d(t,"f",(function(){return f})),n.d(t,"i",(function(){return p})),n.d(t,"k",(function(){return m})),n.d(t,"j",(function(){return h}));var o=n("b775"),r="/admin/file.File/";function i(e){return Object(o["a"])({url:r+"group",method:"get",params:e})}function a(e){return Object(o["a"])({url:r+"list",method:"get",params:e})}function l(e){return Object(o["a"])({url:r+"info",method:"get",params:e})}function c(){return r+"add"}function u(e){return Object(o["a"])({url:r+"edit",method:"post",data:e})}function s(e){return Object(o["a"])({url:r+"dele",method:"post",data:e})}function d(e){return Object(o["a"])({url:r+"disable",method:"post",data:e})}function f(e){return Object(o["a"])({url:r+"grouping",method:"post",data:e})}function p(e){return Object(o["a"])({url:r+"recover",method:"get",params:e})}function m(e){return Object(o["a"])({url:r+"recoverReco",method:"post",data:e})}function h(e){return Object(o["a"])({url:r+"recoverDele",method:"post",data:e})}},f71e:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n("430a"),r=n("7094"),i=n.n(r);function a(){o["default"].prototype.$message({message:"复制成功",type:"success",duration:1500})}function l(){o["default"].prototype.$message({message:"复制失败",type:"error"})}function c(e,t){var n=new i.a(t.target,{text:function(){return e}});n.on("success",(function(){a(),n.destroy()})),n.on("error",(function(){l(),n.destroy()})),n.onClick(t)}}}]);