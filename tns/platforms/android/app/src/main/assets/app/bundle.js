module.exports =
webpackJsonp([0],{

/***/ 115:
/* exports provided: default */
/* exports used: default */
/*!***********************************!*\
  !*** ./components/JsComponent.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    template: "\n        <label>A JS component.</label>\n        "
});

/***/ }),

/***/ 117:
/* no static exports found */
/*!******************!*\
  !*** ./app.scss ***!
  \******************/
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 118:
/* exports provided: default */
/* exports used: default */
/*!*************************************!*\
  !*** ./components/VueComponent.vue ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_ns_vue_loader_lib_selector_type_script_index_0_bustCache_VueComponent_vue__ = __webpack_require__(/*! !babel-loader!../../~/ns-vue-loader/lib/selector?type=script&index=0&bustCache!./VueComponent.vue */ 122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_ns_vue_loader_lib_template_compiler_index_id_data_v_33c0d51c_hasScoped_true_buble_transforms_node_modules_ns_vue_loader_lib_selector_type_template_index_0_bustCache_VueComponent_vue__ = __webpack_require__(/*! !../../~/ns-vue-loader/lib/template-compiler/index?{"id":"data-v-33c0d51c","hasScoped":true,"buble":{"transforms":{}}}!../../~/ns-vue-loader/lib/selector?type=template&index=0&bustCache!./VueComponent.vue */ 126);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(/*! !../../~/extract-text-webpack-plugin/loader.js?{"id":2,"omit":1,"remove":true}!vue-style-loader!css-loader?{"url":false}!../../~/ns-vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-33c0d51c","scoped":true,"hasInlineConfig":false}!sass-loader!../../~/ns-vue-loader/lib/selector?type=styles&index=0&bustCache!./VueComponent.vue */ 124)
}
var normalizeComponent = __webpack_require__(/*! ../../~/ns-vue-loader/lib/component-normalizer */ 125)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-33c0d51c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_ns_vue_loader_lib_selector_type_script_index_0_bustCache_VueComponent_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_ns_vue_loader_lib_template_compiler_index_id_data_v_33c0d51c_hasScoped_true_buble_transforms_node_modules_ns_vue_loader_lib_selector_type_template_index_0_bustCache_VueComponent_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "components/VueComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("ns-vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-33c0d51c", Component.options)
  } else {
    hotAPI.reload("data-v-33c0d51c", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 120:
/* no static exports found */
/* all exports used */
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_JsComponent__ = __webpack_require__(/*! ./components/JsComponent */ 115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_VueComponent__ = __webpack_require__(/*! ./components/VueComponent */ 118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_scss__ = __webpack_require__(/*! ./app.scss */ 117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__app_scss__);
var Vue = __webpack_require__(/*! nativescript-vue/dist/index */ 29);
var http = __webpack_require__(/*! http */ 28);






Vue.prototype.$http = http;

new Vue({
  components: {
    JsComponent: __WEBPACK_IMPORTED_MODULE_0__components_JsComponent__["a" /* default */],
    VueComponent: __WEBPACK_IMPORTED_MODULE_1__components_VueComponent__["a" /* default */]
  },

  template: '\n    <page ref="page">\n      <stack-layout>\n        <js-component></js-component>\n        <vue-component></vue-component>\n      </stack-layout>\n    </page>\n  ',
  methods: {}
}).$start();

/***/ }),

/***/ 122:
/* exports provided: default */
/* exports used: default */
/*!****************************************************************************************************************************!*\
  !*** ../~/babel-loader/lib!../~/ns-vue-loader/lib/selector.js?type=script&index=0&bustCache!./components/VueComponent.vue ***!
  \****************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      val: 'Vue.js'
    };
  }
});

/***/ }),

/***/ 124:
/* no static exports found */
/* all exports used */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../~/extract-text-webpack-plugin/loader.js?{"id":2,"omit":1,"remove":true}!../~/vue-style-loader!../~/css-loader?{"url":false}!../~/ns-vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-33c0d51c","scoped":true,"hasInlineConfig":false}!../~/sass-loader/lib/loader.js!../~/ns-vue-loader/lib/selector.js?type=styles&index=0&bustCache!./components/VueComponent.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 125:
/* no static exports found */
/* all exports used */
/*!******************************************************!*\
  !*** ../~/ns-vue-loader/lib/component-normalizer.js ***!
  \******************************************************/
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.template = compiledTemplate.template
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 126:
/* exports provided: default */
/* exports used: default */
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ../~/ns-vue-loader/lib/template-compiler?{"id":"data-v-33c0d51c","hasScoped":true,"buble":{"transforms":{}}}!../~/ns-vue-loader/lib/selector.js?type=template&index=0&bustCache!./components/VueComponent.vue ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var esExports = { template: '  \n  <label>A {{val}} component.</label>\n  ' }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

},[120]);