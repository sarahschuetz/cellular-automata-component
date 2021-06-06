/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "5a74");
/******/ })
/************************************************************************/
/******/ ({

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "5a74":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (Object({"NODE_ENV":"production","BASE_URL":"/"}).NEED_CURRENTSCRIPT_POLYFILL) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__("8bbf");
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// CONCATENATED MODULE: ./node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js
const camelizeRE = /-(\w)/g;
const camelize = str => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
};

const hyphenateRE = /\B([A-Z])/g;
const hyphenate = str => {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
};

function getInitialProps (propsList) {
  const res = {};
  propsList.forEach(key => {
    res[key] = undefined;
  });
  return res
}

function injectHook (options, key, hook) {
  options[key] = [].concat(options[key] || []);
  options[key].unshift(hook);
}

function callHooks (vm, hook) {
  if (vm) {
    const hooks = vm.$options[hook] || [];
    hooks.forEach(hook => {
      hook.call(vm);
    });
  }
}

function createCustomEvent (name, args) {
  return new CustomEvent(name, {
    bubbles: false,
    cancelable: false,
    detail: args
  })
}

const isBoolean = val => /function Boolean/.test(String(val));
const isNumber = val => /function Number/.test(String(val));

function convertAttributeValue (value, name, { type } = {}) {
  if (isBoolean(type)) {
    if (value === 'true' || value === 'false') {
      return value === 'true'
    }
    if (value === '' || value === name || value != null) {
      return true
    }
    return value
  } else if (isNumber(type)) {
    const parsed = parseFloat(value, 10);
    return isNaN(parsed) ? value : parsed
  } else {
    return value
  }
}

function toVNodes (h, children) {
  const res = [];
  for (let i = 0, l = children.length; i < l; i++) {
    res.push(toVNode(h, children[i]));
  }
  return res
}

function toVNode (h, node) {
  if (node.nodeType === 3) {
    return node.data.trim() ? node.data : null
  } else if (node.nodeType === 1) {
    const data = {
      attrs: getAttributes(node),
      domProps: {
        innerHTML: node.innerHTML
      }
    };
    if (data.attrs.slot) {
      data.slot = data.attrs.slot;
      delete data.attrs.slot;
    }
    return h(node.tagName, data)
  } else {
    return null
  }
}

function getAttributes (node) {
  const res = {};
  for (let i = 0, l = node.attributes.length; i < l; i++) {
    const attr = node.attributes[i];
    res[attr.nodeName] = attr.nodeValue;
  }
  return res
}

function wrap (Vue, Component) {
  const isAsync = typeof Component === 'function' && !Component.cid;
  let isInitialized = false;
  let hyphenatedPropsList;
  let camelizedPropsList;
  let camelizedPropsMap;

  function initialize (Component) {
    if (isInitialized) return

    const options = typeof Component === 'function'
      ? Component.options
      : Component;

    // extract props info
    const propsList = Array.isArray(options.props)
      ? options.props
      : Object.keys(options.props || {});
    hyphenatedPropsList = propsList.map(hyphenate);
    camelizedPropsList = propsList.map(camelize);
    const originalPropsAsObject = Array.isArray(options.props) ? {} : options.props || {};
    camelizedPropsMap = camelizedPropsList.reduce((map, key, i) => {
      map[key] = originalPropsAsObject[propsList[i]];
      return map
    }, {});

    // proxy $emit to native DOM events
    injectHook(options, 'beforeCreate', function () {
      const emit = this.$emit;
      this.$emit = (name, ...args) => {
        this.$root.$options.customElement.dispatchEvent(createCustomEvent(name, args));
        return emit.call(this, name, ...args)
      };
    });

    injectHook(options, 'created', function () {
      // sync default props values to wrapper on created
      camelizedPropsList.forEach(key => {
        this.$root.props[key] = this[key];
      });
    });

    // proxy props as Element properties
    camelizedPropsList.forEach(key => {
      Object.defineProperty(CustomElement.prototype, key, {
        get () {
          return this._wrapper.props[key]
        },
        set (newVal) {
          this._wrapper.props[key] = newVal;
        },
        enumerable: false,
        configurable: true
      });
    });

    isInitialized = true;
  }

  function syncAttribute (el, key) {
    const camelized = camelize(key);
    const value = el.hasAttribute(key) ? el.getAttribute(key) : undefined;
    el._wrapper.props[camelized] = convertAttributeValue(
      value,
      key,
      camelizedPropsMap[camelized]
    );
  }

  class CustomElement extends HTMLElement {
    constructor () {
      const self = super();
      self.attachShadow({ mode: 'open' });

      const wrapper = self._wrapper = new Vue({
        name: 'shadow-root',
        customElement: self,
        shadowRoot: self.shadowRoot,
        data () {
          return {
            props: {},
            slotChildren: []
          }
        },
        render (h) {
          return h(Component, {
            ref: 'inner',
            props: this.props
          }, this.slotChildren)
        }
      });

      // Use MutationObserver to react to future attribute & slot content change
      const observer = new MutationObserver(mutations => {
        let hasChildrenChange = false;
        for (let i = 0; i < mutations.length; i++) {
          const m = mutations[i];
          if (isInitialized && m.type === 'attributes' && m.target === self) {
            syncAttribute(self, m.attributeName);
          } else {
            hasChildrenChange = true;
          }
        }
        if (hasChildrenChange) {
          wrapper.slotChildren = Object.freeze(toVNodes(
            wrapper.$createElement,
            self.childNodes
          ));
        }
      });
      observer.observe(self, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true
      });
    }

    get vueComponent () {
      return this._wrapper.$refs.inner
    }

    connectedCallback () {
      const wrapper = this._wrapper;
      if (!wrapper._isMounted) {
        // initialize attributes
        const syncInitialAttributes = () => {
          wrapper.props = getInitialProps(camelizedPropsList);
          hyphenatedPropsList.forEach(key => {
            syncAttribute(this, key);
          });
        };

        if (isInitialized) {
          syncInitialAttributes();
        } else {
          // async & unresolved
          Component().then(resolved => {
            if (resolved.__esModule || resolved[Symbol.toStringTag] === 'Module') {
              resolved = resolved.default;
            }
            initialize(resolved);
            syncInitialAttributes();
          });
        }
        // initialize children
        wrapper.slotChildren = Object.freeze(toVNodes(
          wrapper.$createElement,
          this.childNodes
        ));
        wrapper.$mount();
        this.shadowRoot.appendChild(wrapper.$el);
      } else {
        callHooks(this.vueComponent, 'activated');
      }
    }

    disconnectedCallback () {
      callHooks(this.vueComponent, 'deactivated');
    }
  }

  if (!isAsync) {
    initialize(Component);
  }

  return CustomElement
}

/* harmony default export */ var vue_wc_wrapper = (wrap);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/runtime/api.js
var api = __webpack_require__("24fb");

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js


function addStylesToShadowDOM (parentId, list, shadowRoot) {
  var styles = listToStyles(parentId, list)
  addStyles(styles, shadowRoot)
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

function addStyles (styles /* Array<StyleObject> */, shadowRoot) {
  const injectedStyles =
    shadowRoot._injectedStyles ||
    (shadowRoot._injectedStyles = {})
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var style = injectedStyles[item.id]
    if (!style) {
      for (var j = 0; j < item.parts.length; j++) {
        addStyle(item.parts[j], shadowRoot)
      }
      injectedStyles[item.id] = true
    }
  }
}

function createStyleElement (shadowRoot) {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  shadowRoot.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */, shadowRoot) {
  var styleElement = createStyleElement(shadowRoot)
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
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
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7c389f7a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CellularAutomataPattern.vue?vue&type=template&id=2f399a6a&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.renderType === 'canvas')?_c('canvas',{ref:"element",style:({
        backgroundColor: _vm.backgroundColor
    }),attrs:{"width":_vm.width,"height":_vm.height}}):(_vm.renderType === 'svg')?_c('svg',{ref:"element"}):_vm._e(),_c('div',[_vm._v("Rule: "+_vm._s(_vm.rule))])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CellularAutomataPattern.vue?vue&type=template&id=2f399a6a&shadow

// CONCATENATED MODULE: ./src/algorithm/Cell.js
const STATE_ALIVE = 1;
const STATE_DEAD = 0;

class Cell {
  constructor(color) {
    this.color = color;
    this.x = 0;
    this.y = 0;
    this.activeState = STATE_DEAD;
    this.livingNeighbours = 0;
  }

  setX(value) {
    this.x = value;
  }

  setY(value) {
    this.y = value;
  }

  setActiveState(value) {
    this.activeState = value;
  }

  setLivingNeighbours(value) {
    this.livingNeighbours = value;
  }

  getColor() {
    return this.color;
  }

  isOverpopulated() {
    return this.livingNeighbours >= 4;
  }

  isLonely() {
    return this.livingNeighbours <= 1;
  }

  isDead() {
    return this.activeState === STATE_DEAD;
  }

  isAlive() {
    return this.activeState === STATE_ALIVE;
  }

  birth() {
    this.activeState = STATE_ALIVE;
  }

  death() {
    this.activeState = STATE_DEAD;
  }

  liveOrDie() {
    if (this.isDead() && this.livingNeighbours === 3) {
      return STATE_ALIVE;
    }

    if (this.isAlive() && (this.isOverpopulated() || this.isLonely())) {
      return STATE_DEAD;
    }

    return this.activeState;
  }

}

/* harmony default export */ var algorithm_Cell = (Cell);
// CONCATENATED MODULE: ./src/algorithm/CanvasAnimationScript.js
const defaultConfig = {
  fillStyle: '#000'
};

class CanvasAnimationScript {
  constructor(customConfig = {}) {
    const config = { ...defaultConfig,
      ...customConfig
    };
    this.fillStyle = config.fillStyle;
  }

  init(canvas, context) {
    this.canvas = canvas;
    this.context = context;
    this.context.fillStyle = this.fillStyle;
    this.cumDeltaTime = 0;
  }

  update(deltaTime) {
    this.cumDeltaTime += deltaTime;
  }

}

/* harmony default export */ var algorithm_CanvasAnimationScript = (CanvasAnimationScript);
// CONCATENATED MODULE: ./src/errors/BaseClassError.js
class BaseClassError extends Error {
  constructor(className, message = null) {
    super(message || `Don't use base class ${className} directly, extend class before instancing it.`);
  }

}

/* harmony default export */ var errors_BaseClassError = (BaseClassError);
// CONCATENATED MODULE: ./src/algorithm/CellGrid.js



const CellGrid_defaultConfig = {
  pixelSize: 6,
  interval: 0.1,
  useFutureArray: true,
  color: '#000'
};

class CellGrid_CellGrid extends algorithm_CanvasAnimationScript {
  constructor(customConfig = {}) {
    super(customConfig);
    const config = { ...CellGrid_defaultConfig,
      ...customConfig
    };
    this.pixelSize = config.pixelSize;
    this.interval = Math.max(CellGrid_defaultConfig.interval, config.interval);
    this.useFutureArray = config.useFutureArray;
    this.color = config.color;
  }

  init(canvas, context) {
    super.init(canvas, context);
    this.initGrid();
    this.initPixels();
  }

  update(deltaTime) {
    super.update(deltaTime);

    if (this.cumDeltaTime > this.interval) {
      this.cumDeltaTime = 0;
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.runAnimationAlgorithm(deltaTime);

      if (this.useFutureArray) {
        this.switchFuturePixelsToCurrentPixels();
      }
    }
  }

  switchFuturePixelsToCurrentPixels() {
    this.tempPixelArray = this.currentPixelArray;
    this.currentPixelArray = this.futurePixelArray;
    this.futurePixelArray = this.tempPixelArray;
  }

  runAnimationAlgorithm() {
    throw new errors_BaseClassError(this.constructor.name);
  }

  initGrid() {
    this.grid = {};
    this.grid.cols = Math.ceil(this.canvas.width / this.pixelSize);
    this.grid.rows = Math.ceil(this.canvas.height / this.pixelSize);
    this.currentPixelArray = Array.from(new Array(this.grid.cols), () => Array.from(new Array(this.grid.rows), () => new algorithm_Cell(this.color)));

    if (this.useFutureArray) {
      this.futurePixelArray = Array.from(new Array(this.grid.cols), () => Array.from(new Array(this.grid.rows), () => new algorithm_Cell(this.color)));
      this.tempPixelArray = null;
    }
  }

  initPixels() {
    this.currentPixelArray[0].forEach((row, rowIndex) => {
      this.currentPixelArray.forEach((col, colIndex) => {
        this.currentPixelArray[colIndex][rowIndex].setX(colIndex * this.pixelSize);
        this.currentPixelArray[colIndex][rowIndex].setY(rowIndex * this.pixelSize);

        if (this.useFutureArray) {
          this.futurePixelArray[colIndex][rowIndex].setX(colIndex * this.pixelSize);
          this.futurePixelArray[colIndex][rowIndex].setY(rowIndex * this.pixelSize);
        }
      });
    });
  }

  drawCell(cell) {
    this.context.fillStyle = cell.getColor();
    this.context.beginPath();
    this.context.rect(cell.x, cell.y, this.pixelSize, this.pixelSize);
    this.context.fill();
  }

  getCellIfExists(colIndex, rowIndex) {
    if (colIndex >= 0 && colIndex < this.currentPixelArray.length && rowIndex >= 0 && rowIndex < this.currentPixelArray[0].length) {
      return this.currentPixelArray[colIndex][rowIndex];
    }

    return null;
  }

  getCellRepeated(colIndex, rowIndex) {
    let x = colIndex;
    let y = rowIndex;

    if (colIndex < 0) {
      x += this.currentPixelArray.length;
    }

    if (colIndex >= this.currentPixelArray.length) {
      x -= this.currentPixelArray.length;
    }

    if (rowIndex < 0) {
      y += this.currentPixelArray[0].length;
    }

    if (rowIndex >= this.currentPixelArray[0].length) {
      y -= this.currentPixelArray[0].length;
    }

    return this.currentPixelArray[x][y];
  }

}

/* harmony default export */ var algorithm_CellGrid = (CellGrid_CellGrid);
// CONCATENATED MODULE: ./src/algorithm/Pattern.js

const Pattern_defaultConfig = {
  rule: 1,
  rules: null
};

class Pattern_Pattern extends algorithm_CellGrid {
  constructor(customConfig = {}) {
    super({ ...customConfig,
      useFutureArray: false
    });
    const config = { ...Pattern_defaultConfig,
      ...customConfig
    };
    this.rule = config.rule;
    this.rules = config.rules || this.getRules();
  }

  runAnimationAlgorithm() {
    this.shiftPixelsUp();
    this.context.beginPath();
    this.currentPixelArray.forEach((col, colIndex) => {
      col.forEach((cell, rowIndex) => {
        if (this.currentPixelArray[colIndex][rowIndex].isAlive()) {
          this.context.rect(cell.x, cell.y, this.pixelSize, this.pixelSize);
        }
      });
    });
    this.context.fill();
  }

  initPixels() {
    super.initPixels();
    this.currentPixelArray[0].forEach((row, rowIndex) => {
      this.currentPixelArray.forEach((col, colIndex) => {
        if (rowIndex === 0) {
          const random = Math.round(Math.random());
          this.currentPixelArray[colIndex][rowIndex].setActiveState(random);
        } else {
          const activeState = this.applyRules(colIndex, rowIndex);
          this.currentPixelArray[colIndex][rowIndex].setActiveState(activeState);
        }
      });
    });
  }

  shiftPixelsUp() {
    this.currentPixelArray[0].forEach((row, rowIndex) => {
      this.currentPixelArray.forEach((col, colIndex) => {
        if (rowIndex === col.length - 1) {
          const activeState = this.applyRules(colIndex, rowIndex);
          this.currentPixelArray[colIndex][rowIndex].setActiveState(activeState);
        } else {
          this.currentPixelArray[colIndex][rowIndex].setActiveState(this.currentPixelArray[colIndex][rowIndex + 1].activeState);
        }
      });
    });
  }

  applyRules(colIndex, rowIndex) {
    const neighbourhoodString = this.getNeighbourhoodString(colIndex, rowIndex);

    if (this.rules[neighbourhoodString] !== undefined) {
      return this.rules[neighbourhoodString];
    }

    if (this.rules.default !== undefined) {
      return this.rules.default;
    }

    const lastCell = this.getCellRepeated(colIndex, rowIndex - 1);
    return lastCell.activeState;
  }

  getRules() {
    /* eslint-disable quote-props */
    const biniaryString = this.rule.toString(2);
    const biniaryArray = Array.from(biniaryString).reverse();
    return {
      '000': +biniaryArray[0] || 0,
      '001': +biniaryArray[1] || 0,
      '010': +biniaryArray[2] || 0,
      '011': +biniaryArray[3] || 0,
      '100': +biniaryArray[4] || 0,
      '101': +biniaryArray[5] || 0,
      '110': +biniaryArray[6] || 0,
      '111': +biniaryArray[7] || 0
    };
  }

  getNeighbourhoodString(colIndex, rowIndex) {
    const cell1 = this.getCellRepeated(colIndex - 1, rowIndex - 1);
    const cell2 = this.getCellRepeated(colIndex, rowIndex - 1);
    const cell3 = this.getCellRepeated(colIndex + 1, rowIndex - 1);
    return `${cell1.activeState}${cell2.activeState}${cell3.activeState}`;
  }

}

/* harmony default export */ var algorithm_Pattern = (Pattern_Pattern);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CellularAutomataPattern.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CellularAutomataPatternvue_type_script_lang_js_shadow = ({
  name: 'CellularAutomataPattern',
  props: {
    rule: {
      type: Number,
      required: true
    },
    width: {
      type: Number,
      default: 500
    },
    height: {
      type: Number,
      default: 300
    },
    pixelWidth: {
      type: Number,
      default: 10
    },
    pixelHeight: {
      type: Number,
      default: 10
    },
    backgroundColor: {
      type: String,
      default: '#FFF'
    },
    pixelColor: {
      type: String,
      default: '#FFF'
    },
    renderType: {
      validator: function (value) {
        return ['canvas', 'svg'].indexOf(value) !== -1;
      },
      default: 'canvas'
    }
  },

  data() {
    return {
      pattern: null
    };
  },

  watch: {
    pixelColor: function () {
      this.setPattern();
    }
  },

  mounted() {
    this.initSize();
    this.setPattern();
  },

  updated() {
    console.log('update');
    this.setPattern();
  },

  methods: {
    initSize() {
      if (this.$refs.element) {
        this.$refs.element.width = this.width;
        this.$refs.element.height = this.height;
      }
    },

    setPattern() {
      const context = this.$refs.element.getContext('2d');
      context.clearRect(0, 0, this.$refs.element.width, this.$refs.element.height);
      this.pattern = new algorithm_Pattern({
        rule: this.rule,
        fillStyle: this.pixelColor // pixelSize: this.pixelSize,

      });
      this.pattern.init(this.$refs.element, context);
      this.pattern.runAnimationAlgorithm();
    }

  }
});
// CONCATENATED MODULE: ./src/components/CellularAutomataPattern.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var components_CellularAutomataPatternvue_type_script_lang_js_shadow = (CellularAutomataPatternvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/CellularAutomataPattern.vue?shadow





/* normalize component */

var component = normalizeComponent(
  components_CellularAutomataPatternvue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var CellularAutomataPatternshadow = (component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-wc.js




// runtime shared by every component chunk





window.customElements.define('cellular-automata-pattern', vue_wc_wrapper(external_Vue_default.a, CellularAutomataPatternshadow))

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = Vue;

/***/ })

/******/ });
//# sourceMappingURL=cellular-automata-pattern.js.map