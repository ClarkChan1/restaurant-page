/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! images/food.jpg */ "./src/images/food.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Allura&family=Italianno&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --transluscent-black: rgb(0, 0, 0, .82);\n  --normal-font-size: 2em;\n}\n\nbody {\n  /* background-image: url('images/one-piece-food.jpg'); */\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-attachment: fixed;\n  transition: background-image 1s ease-in;\n  margin: 0;\n}\n\n.title-container {\n  width: 100%;\n  text-align: center;\n}\n\n.title {\n  font-size: 8em;\n  padding: 30px;\n  padding-bottom: 0;\n  margin: 0;\n  /* background-color: black; */\n}\n\n.header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: var(--transluscent-black);\n  color: white;\n  font-family: 'Italianno', cursive;\n}\n\n.nav-bar {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  /* gap: 5em; */\n}\n\n.section-button-container {\n  font-size: var(--normal-font-size);\n  margin: 0px;\n  font-family: 'Allura', cursive;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-bottom: 10px;\n}\n\n.section-button:hover {\n  transform: translateY(-8px);\n  cursor: pointer;\n}\n\n.section-button-container-selected {\n  border-bottom: solid 2px white;\n}\n\n.section-button {\n  margin: 5px;\n  padding: 4px;\n  transition: transform .5s ease-out;\n}\n\n/* home section */\n.home-container {\n  font-family: 'Allura', cursive;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  max-width: 800px;\n  margin: auto;\n  margin-top: 50px;\n  padding: 2em;\n  align-items: center;\n  background-color: var(--transluscent-black);\n}\n\n.home-description {\n  text-align: center;\n  padding-left: 1em;\n  padding-right: 1em;\n  font-size: var(--normal-font-size);\n}\n\n.chef-container {\n  padding-left: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.chef-pic {\n  border-radius: 50%;\n  max-width: 200px;\n  max-height: 200px;\n  width: 100%;\n  height: 100%;\n}\n\n.chef-description {\n  text-align: left;\n  padding-left: 1em;\n  padding-right: 1em;\n  font-size: var(--normal-font-size);\n}\n\n/* menu section */\n.menu-container {\n  font-family: 'Allura', cursive;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  gap: 5em;\n  max-width: 800px;\n  margin: auto;\n  margin-top: 50px;\n  padding: 5em;\n  align-items: center;\n  background-color: var(--transluscent-black);\n}\n\n.menu-item-container {\n  display: flex;\n  width: 100%;\n  font-size: var(--normal-font-size);\n}\n\n.menu-item-pic {\n  max-width: 200px;\n  max-height: 200px;\n  width: 100%;\n  height: 200px;\n}\n\n.menu-item-description-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-left: 1em;\n  padding-right: .5em;\n}\n\n.menu-item-title-container {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.menu-item-title {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n/* currently does nothing, might use it later if I want a different font size or something */\n.menu-item-description {}\n\n/* contact section */\n.contact-container {\n  font-family: 'Allura', cursive;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  gap: 1em;\n  max-width: 800px;\n  margin: auto;\n  margin-top: 50px;\n  padding: 2em;\n  align-items: center;\n  background-color: var(--transluscent-black);\n  font-size: var(--normal-font-size);\n  text-align: center;\n}\n\n.contact-container hr {\n  width: 100%;\n}\n\n.contact-description {\n  margin: 0;\n}\n\n.phone-number {\n  width: 100%;\n  margin: 0;\n}\n\n.location {\n  border: 0;\n  margin-top: .5em;\n  max-width: 500px;\n  max-height: 500px;\n  width: 100%;\n  height: 500px;\n}\n\n/* media queries at the end so they have access to all css selectors */\n@media screen and (max-width: 600px) {\n  .chef-container {\n    flex-wrap: wrap;\n  }\n\n  .menu-container {\n    padding-left: 2em;\n    padding-right: 2em;\n  }\n\n  .menu-item-container {\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 1em;\n  }\n}\n\n/* make content fade in when section is changed */\n.home-container, .menu-container, .contact-container {\n  animation: fadein 2s;\n}\n\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,uCAAuC;EACvC,uBAAuB;AACzB;;AAEA;EACE,wDAAwD;EACxD,yDAAwC;EACxC,sBAAsB;EACtB,4BAA4B;EAC5B,uCAAuC;EACvC,SAAS;AACX;;AAEA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,iBAAiB;EACjB,SAAS;EACT,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,2CAA2C;EAC3C,YAAY;EACZ,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,cAAc;AAChB;;AAEA;EACE,kCAAkC;EAClC,WAAW;EACX,8BAA8B;EAC9B,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,2BAA2B;EAC3B,eAAe;AACjB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kCAAkC;AACpC;;AAEA,iBAAiB;AACjB;EACE,8BAA8B;EAC9B,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;EAChB,YAAY;EACZ,mBAAmB;EACnB,2CAA2C;AAC7C;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;EAClB,kCAAkC;AACpC;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,kCAAkC;AACpC;;AAEA,iBAAiB;AACjB;EACE,8BAA8B;EAC9B,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;EAChB,YAAY;EACZ,mBAAmB;EACnB,2CAA2C;AAC7C;;AAEA;EACE,aAAa;EACb,WAAW;EACX,kCAAkC;AACpC;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,WAAW;EACX,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,gBAAgB;AAClB;;AAEA,4FAA4F;AAC5F,wBAAwB;;AAExB,oBAAoB;AACpB;EACE,8BAA8B;EAC9B,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;EAChB,YAAY;EACZ,mBAAmB;EACnB,2CAA2C;EAC3C,kCAAkC;EAClC,kBAAkB;AACpB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,WAAW;EACX,SAAS;AACX;;AAEA;EACE,SAAS;EACT,gBAAgB;EAChB,gBAAgB;EAChB,iBAAiB;EACjB,WAAW;EACX,aAAa;AACf;;AAEA,sEAAsE;AACtE;EACE;IACE,eAAe;EACjB;;EAEA;IACE,iBAAiB;IACjB,kBAAkB;EACpB;;EAEA;IACE,eAAe;IACf,uBAAuB;IACvB,QAAQ;EACV;AACF;;AAEA,iDAAiD;AACjD;EACE,oBAAoB;AACtB;;AAEA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Allura&family=Italianno&display=swap');\n\n:root {\n  --transluscent-black: rgb(0, 0, 0, .82);\n  --normal-font-size: 2em;\n}\n\nbody {\n  /* background-image: url('images/one-piece-food.jpg'); */\n  background-image: url('images/food.jpg');\n  background-size: cover;\n  background-attachment: fixed;\n  transition: background-image 1s ease-in;\n  margin: 0;\n}\n\n.title-container {\n  width: 100%;\n  text-align: center;\n}\n\n.title {\n  font-size: 8em;\n  padding: 30px;\n  padding-bottom: 0;\n  margin: 0;\n  /* background-color: black; */\n}\n\n.header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: var(--transluscent-black);\n  color: white;\n  font-family: 'Italianno', cursive;\n}\n\n.nav-bar {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  /* gap: 5em; */\n}\n\n.section-button-container {\n  font-size: var(--normal-font-size);\n  margin: 0px;\n  font-family: 'Allura', cursive;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-bottom: 10px;\n}\n\n.section-button:hover {\n  transform: translateY(-8px);\n  cursor: pointer;\n}\n\n.section-button-container-selected {\n  border-bottom: solid 2px white;\n}\n\n.section-button {\n  margin: 5px;\n  padding: 4px;\n  transition: transform .5s ease-out;\n}\n\n/* home section */\n.home-container {\n  font-family: 'Allura', cursive;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  max-width: 800px;\n  margin: auto;\n  margin-top: 50px;\n  padding: 2em;\n  align-items: center;\n  background-color: var(--transluscent-black);\n}\n\n.home-description {\n  text-align: center;\n  padding-left: 1em;\n  padding-right: 1em;\n  font-size: var(--normal-font-size);\n}\n\n.chef-container {\n  padding-left: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.chef-pic {\n  border-radius: 50%;\n  max-width: 200px;\n  max-height: 200px;\n  width: 100%;\n  height: 100%;\n}\n\n.chef-description {\n  text-align: left;\n  padding-left: 1em;\n  padding-right: 1em;\n  font-size: var(--normal-font-size);\n}\n\n/* menu section */\n.menu-container {\n  font-family: 'Allura', cursive;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  gap: 5em;\n  max-width: 800px;\n  margin: auto;\n  margin-top: 50px;\n  padding: 5em;\n  align-items: center;\n  background-color: var(--transluscent-black);\n}\n\n.menu-item-container {\n  display: flex;\n  width: 100%;\n  font-size: var(--normal-font-size);\n}\n\n.menu-item-pic {\n  max-width: 200px;\n  max-height: 200px;\n  width: 100%;\n  height: 200px;\n}\n\n.menu-item-description-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-left: 1em;\n  padding-right: .5em;\n}\n\n.menu-item-title-container {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.menu-item-title {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n/* currently does nothing, might use it later if I want a different font size or something */\n.menu-item-description {}\n\n/* contact section */\n.contact-container {\n  font-family: 'Allura', cursive;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  gap: 1em;\n  max-width: 800px;\n  margin: auto;\n  margin-top: 50px;\n  padding: 2em;\n  align-items: center;\n  background-color: var(--transluscent-black);\n  font-size: var(--normal-font-size);\n  text-align: center;\n}\n\n.contact-container hr {\n  width: 100%;\n}\n\n.contact-description {\n  margin: 0;\n}\n\n.phone-number {\n  width: 100%;\n  margin: 0;\n}\n\n.location {\n  border: 0;\n  margin-top: .5em;\n  max-width: 500px;\n  max-height: 500px;\n  width: 100%;\n  height: 500px;\n}\n\n/* media queries at the end so they have access to all css selectors */\n@media screen and (max-width: 600px) {\n  .chef-container {\n    flex-wrap: wrap;\n  }\n\n  .menu-container {\n    padding-left: 2em;\n    padding-right: 2em;\n  }\n\n  .menu-item-container {\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 1em;\n  }\n}\n\n/* make content fade in when section is changed */\n.home-container, .menu-container, .contact-container {\n  animation: fadein 2s;\n}\n\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
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

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createContact() {
  const contactContainer = document.createElement('div');
  contactContainer.classList.add('contact-container');
  // add the main description
  const description = document.createElement('p');
  description.classList.add('contact-description');
  description.appendChild(document.createTextNode('Bring your friends and family along with a healthy appetite and come visit Baratie today! (Customers who were recently starving eat free! Devil Fruit users get a 20% discount if they can swim a lap around Baratie!)'));
  // description.appendChild(document.createElement('hr'));
  // add the phone number
  const phoneNumber = document.createElement('p');
  phoneNumber.classList.add('phone-number');
  phoneNumber.appendChild(document.createTextNode('Phone: 1-800-Team-Sanji'));
  // phoneNumber.appendChild(document.createElement('hr'));
  // add the google map location
  const location = document.createElement('iframe');
  location.classList.add('location');
  location.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30634007.87388524!2d-121.16438940000002!3d20.403375450000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f4bd65cc38c57%3A0x67b8d980a619503d!2sBaratie!5e0!3m2!1sen!2sus!4v1627272957658!5m2!1sen!2sus";
  location.allowfullscreen = "";
  location.loading = "lazy";
  // add all the componenets to contactContainer
  contactContainer.appendChild(description);
  contactContainer.appendChild(document.createElement('hr'));
  contactContainer.appendChild(phoneNumber);
  contactContainer.appendChild(document.createElement('hr'));
  contactContainer.appendChild(location);
  return contactContainer;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_zeff_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/zeff.jpg */ "./src/images/zeff.jpg");
/* harmony import */ var _images_sanji_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/sanji.jpg */ "./src/images/sanji.jpg");



function createHome() {
  const homeContainer = document.createElement('div');
  homeContainer.classList.add('home-container');
  // make the description for the restaurant
  const description = document.createElement('p');
  description.classList.add('home-description');
  description.appendChild(document.createTextNode('Come one, come all to Baratie, the floating restuarant!'));
  description.appendChild(document.createElement('br'));
  description.appendChild(document.createTextNode("Using fresh ingredients locally sourced from the East Blue, we serve world class cuisine to sailors and pirates alike."));
  description.appendChild(document.createElement('hr'));
  description.appendChild(document.createTextNode('Meet our chefs!'));
  // create container for chef pictures and description
  const chefPicContainer = document.createElement('div');
  // make the containers that will hold the picture and description
  const zeffContainer = document.createElement('div');
  const sanjiContainer = document.createElement('div');
  zeffContainer.classList.add('chef-container');
  sanjiContainer.classList.add('chef-container');
  // make the zeff picture
  const zeffPic = new Image();
  zeffPic.classList.add('chef-pic');
  zeffPic.src = _images_zeff_jpg__WEBPACK_IMPORTED_MODULE_0__;
  // make the zeff description
  const zeffDescription = document.createElement('p');
  zeffDescription.classList.add('chef-description');
  zeffDescription.appendChild(document.createTextNode('Zeff, Head Chef'));
  zeffDescription.appendChild(document.createElement('hr'));
  zeffDescription.appendChild(document.createTextNode("Zeff is the owner of Baratie and has been running the restaurant ever since it's founding in 1776, don't ask him about how he lost his leg, it's a touchy subject."));
  zeffContainer.appendChild(zeffPic);
  zeffContainer.appendChild(zeffDescription);
  // make the sanji picture
  const sanjiPic = new Image();
  sanjiPic.classList.add('chef-pic');
  sanjiPic.src = _images_sanji_jpg__WEBPACK_IMPORTED_MODULE_1__;
  // make the sanji description
  const sanjiDescription = document.createElement('p');
  sanjiDescription.classList.add('chef-description');
  sanjiDescription.appendChild(document.createTextNode('Sanji, Sous Chef'));
  sanjiDescription.appendChild(document.createElement('hr'));
  sanjiDescription.appendChild(document.createTextNode("Sanji has been training under Zeff since he was little, he's an excellent cook and was going to inherit the restarurant until Straw Hat Luffy came along..."));
  sanjiContainer.appendChild(sanjiPic);
  sanjiContainer.appendChild(sanjiDescription);

  // append the chef pictures to the homeContainer
  homeContainer.appendChild(description);
  homeContainer.appendChild(zeffContainer);
  homeContainer.appendChild(sanjiContainer);

  return homeContainer;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);


/***/ }),

/***/ "./src/images/aligot.png":
/*!*******************************!*\
  !*** ./src/images/aligot.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ed615eb6a873001c1fbc.png";

/***/ }),

/***/ "./src/images/bento.png":
/*!******************************!*\
  !*** ./src/images/bento.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e8cef9e6dc969e0321ff.png";

/***/ }),

/***/ "./src/images/chopper.png":
/*!********************************!*\
  !*** ./src/images/chopper.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b562927a355002d74c37.png";

/***/ }),

/***/ "./src/images/eating-together.png":
/*!****************************************!*\
  !*** ./src/images/eating-together.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "235608239a12892a3cba.png";

/***/ }),

/***/ "./src/images/food.jpg":
/*!*****************************!*\
  !*** ./src/images/food.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "758445461e95ef869408.jpg";

/***/ }),

/***/ "./src/images/food2.jpg":
/*!******************************!*\
  !*** ./src/images/food2.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "81d7de7feda205e6245e.jpg";

/***/ }),

/***/ "./src/images/meat.png":
/*!*****************************!*\
  !*** ./src/images/meat.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "180462df49323c41d828.png";

/***/ }),

/***/ "./src/images/meatballs.jpg":
/*!**********************************!*\
  !*** ./src/images/meatballs.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a8dad299db1482ea7f3a.jpg";

/***/ }),

/***/ "./src/images/oshiruko.png":
/*!*********************************!*\
  !*** ./src/images/oshiruko.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a86d2fe8d52aa7d3c729.png";

/***/ }),

/***/ "./src/images/sanji.jpg":
/*!******************************!*\
  !*** ./src/images/sanji.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ef44f1f3ee5178fd4837.jpg";

/***/ }),

/***/ "./src/images/sashimi.jpg":
/*!********************************!*\
  !*** ./src/images/sashimi.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "122fac5af131378680b7.jpg";

/***/ }),

/***/ "./src/images/seafood-risotto.jpg":
/*!****************************************!*\
  !*** ./src/images/seafood-risotto.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3e6147bbd78b9cfa2e73.jpg";

/***/ }),

/***/ "./src/images/soba-noodles.jpg":
/*!*************************************!*\
  !*** ./src/images/soba-noodles.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2b73547ab843e49cb8be.jpg";

/***/ }),

/***/ "./src/images/zeff.jpg":
/*!*****************************!*\
  !*** ./src/images/zeff.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "18b305edee4239eeb82a.jpg";

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_sashimi_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/sashimi.jpg */ "./src/images/sashimi.jpg");
/* harmony import */ var _images_seafood_risotto_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/seafood-risotto.jpg */ "./src/images/seafood-risotto.jpg");
/* harmony import */ var _images_meatballs_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/meatballs.jpg */ "./src/images/meatballs.jpg");
/* harmony import */ var _images_soba_noodles_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/soba-noodles.jpg */ "./src/images/soba-noodles.jpg");
/* harmony import */ var _images_meat_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/meat.png */ "./src/images/meat.png");
/* harmony import */ var _images_bento_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/bento.png */ "./src/images/bento.png");
/* harmony import */ var _images_oshiruko_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/oshiruko.png */ "./src/images/oshiruko.png");
/* harmony import */ var _images_aligot_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/aligot.png */ "./src/images/aligot.png");
/* harmony import */ var _images_chopper_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/chopper.png */ "./src/images/chopper.png");










function createMenu() {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');
  // make the array with objects that have the information for each menu item
  let itemArr = [{
    imageUrl: _images_sashimi_jpg__WEBPACK_IMPORTED_MODULE_0__,
    itemTitle: "Sashimi Platter",
    itemPrice: 18.00,
    itemDescription: "Bluefin tuna and toro slices, a staple of fine dining."
  }, {
    imageUrl: _images_seafood_risotto_jpg__WEBPACK_IMPORTED_MODULE_1__,
    itemTitle: "Seafood Risotto",
    itemPrice: 12.00,
    itemDescription: "Buttery Risotto served with shrimp, octopus, and calamari."
  }, {
    imageUrl: _images_meatballs_jpg__WEBPACK_IMPORTED_MODULE_2__,
    itemTitle: "Signature Meatballs",
    itemPrice: 15.00,
    itemDescription: "One of Sanji's signature dishes. These meatballs are to die for... Literally, Luffy almost died at G5 for these..."
  }, {
    imageUrl: _images_meat_png__WEBPACK_IMPORTED_MODULE_4__,
    itemTitle: "Mystery Meat",
    itemPrice: 10.00,
    itemDescription: "Feeling frisky? Try our Mystery Meat, it changes every week!"
  }, {
    imageUrl: _images_soba_noodles_jpg__WEBPACK_IMPORTED_MODULE_3__,
    itemTitle: "Soba Noodles",
    itemPrice: 8.00,
    itemDescription: "Sanji served this dish extensively at the land of Wano, totally out of the goodness of his heart and not so he can try and score with the Wano ladies..."
  }, {
    imageUrl: _images_bento_png__WEBPACK_IMPORTED_MODULE_5__,
    itemTitle: "Chef's Choice Bento Box",
    itemPrice: 25.00,
    itemDescription: "On one the days preceding Sanji and Pudding's wedding, Sanji made this Bento box for Pudding. It is comprised of all the Straw Hat Pirates' favorite foods."
  }, {
    imageUrl: _images_aligot_png__WEBPACK_IMPORTED_MODULE_7__,
    itemTitle: "Aligot",
    itemPrice: 16.00,
    itemDescription: "Thick slices of filet served with potatoes and a delectable, cheesy fondue sauce."
  }, {
    imageUrl: _images_oshiruko_png__WEBPACK_IMPORTED_MODULE_6__,
    itemTitle: "Oshiruko",
    itemPrice: 5.00,
    itemDescription: "Red bean soup with mochi cakes. Don't tell Big Mom we serve this..."
  }, {
    imageUrl: _images_chopper_png__WEBPACK_IMPORTED_MODULE_8__,
    itemTitle: "Emergency Rations",
    itemPrice: 5.00,
    itemDescription: "In the event of an extreme food shortage, Captain Straw Hat Luffy has given us permission to serve Tony Tony Chopper, a memeber of the straw hat crew as an emergency ration..."
  }];
  // loop through all the items in itemArr and create DOM elements for them
  for (let a = 0; a < itemArr.length; a++) {
    const currentItem = itemArr[a];
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('menu-item-container');
    // make the menu item picture
    const itemPic = new Image();
    itemPic.classList.add('menu-item-pic');
    itemPic.src = currentItem.imageUrl;
    // make container for item title and description
    const itemDescriptionContainer = document.createElement('div');
    itemDescriptionContainer.classList.add('menu-item-description-container');
    // make the container for menu item name and price
    const itemTitleContainer = document.createElement('div');
    itemTitleContainer.classList.add('menu-item-title-container');
    const itemTitle = document.createElement('p');
    itemTitle.classList.add('menu-item-title');
    itemTitle.appendChild(document.createTextNode(`${currentItem.itemTitle}`));
    const itemPrice = document.createElement('p');
    itemPrice.classList.add('menu-item-title');
    itemPrice.appendChild(document.createTextNode(`$${currentItem.itemPrice}`));
    // add the title and price to the container
    itemTitleContainer.appendChild(itemTitle);
    itemTitleContainer.appendChild(itemPrice);
    // make the menu item description
    const itemDescription = document.createElement('div');
    itemDescription.classList.add('menu-item-description');
    itemDescription.appendChild(document.createElement('hr'));
    itemDescription.appendChild(document.createTextNode(`${currentItem.itemDescription}`));
    // add the title and the description to the container
    itemDescriptionContainer.appendChild(itemTitleContainer);
    itemDescriptionContainer.appendChild(itemDescription);
    // add the image and the full title and description to the itemContainer
    itemContainer.appendChild(itemPic);
    itemContainer.appendChild(itemDescriptionContainer);
    // finally, append the itemContainer to the menuContainer
    menuContainer.appendChild(itemContainer);
  }

  return menuContainer;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _images_food_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/food.jpg */ "./src/images/food.jpg");
/* harmony import */ var _images_food2_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/food2.jpg */ "./src/images/food2.jpg");
/* harmony import */ var _images_eating_together_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/eating-together.png */ "./src/images/eating-together.png");





// import the image backgrounds for the three sections




let homeContent;
let menuContent;
let contactContent;

let currentSection;

function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');
  // create the title text
  const title = document.createElement('div');
  title.classList.add('title-container');
  title.innerHTML = '<p class="title">Baratie</p>';
  // create the three category buttons
  const navBar = document.createElement('nav');
  navBar.classList.add('nav-bar');
  const homeButton = document.createElement('div');
  homeButton.classList.add('section-button-container');
  homeButton.id = "homeButton";
  homeButton.innerHTML += '<p class="section-button">Home</p>';
  homeButton.classList.add('section-button-container-selected');
  homeButton.addEventListener('click', function() {
    changeSection('home', navBar);
  });
  const menuButton = document.createElement('div');
  menuButton.classList.add('section-button-container');
  menuButton.id = "menuButton";
  menuButton.innerHTML += '<p class="section-button">Menu</p>';
  menuButton.addEventListener('click', function() {
    changeSection('menu', navBar);
  });
  const contactButton = document.createElement('div');
  contactButton.classList.add('section-button-container');
  contactButton.id = "contactButton";
  contactButton.innerHTML += '<p class="section-button">Contact</p>';
  contactButton.addEventListener('click', function() {
    changeSection('contact', navBar);
  });
  // add all the three sections to the header
  navBar.appendChild(homeButton);
  navBar.appendChild(menuButton);
  navBar.appendChild(contactButton);
  // append title and the section buttons to the header
  header.appendChild(title);
  header.appendChild(navBar);
  // append the header to the document body
  document.body.appendChild(header);
}

function changeSection(newSection, navBar) {
  // remove the underline from the old section
  navBar.querySelector(`#${currentSection}Button`).classList.remove('section-button-container-selected');
  // underline the new section
  navBar.querySelector(`#${newSection}Button`).classList.add('section-button-container-selected');
  // display the new section's content
  if (currentSection != newSection) {
    clearContent();
    // actually switch to the new content
    switch (newSection) {
      case 'home':
        document.body.appendChild(homeContent);
        document.body.style.backgroundImage = `url(${_images_food_jpg__WEBPACK_IMPORTED_MODULE_4__})`;
        break;
      case 'menu':
        document.body.appendChild(menuContent);
        document.body.style.backgroundImage = `url(${_images_food2_jpg__WEBPACK_IMPORTED_MODULE_5__})`;
        break;
      case 'contact':
        document.body.appendChild(contactContent);
        document.body.style.backgroundImage = `url(${_images_eating_together_png__WEBPACK_IMPORTED_MODULE_6__})`;
        break;
    }
    currentSection = newSection;
  }
}

function loadWebsite() {
  createHeader();
  homeContent = (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.default)();
  menuContent = (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.default)();
  contactContent = (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.default)();
  // initially display the home section
  document.body.appendChild(homeContent);
  currentSection = "home";
}

function clearContent() {
  document.body.removeChild(document.querySelector(`.${currentSection}-container`));
}

loadWebsite();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUNPO0FBQ2hHLDRDQUE0Qyw2R0FBa0M7QUFDOUUsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRixxSUFBcUk7QUFDckkseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLGlEQUFpRCw0Q0FBNEMsNEJBQTRCLEdBQUcsVUFBVSwwREFBMEQseUVBQXlFLDJCQUEyQixpQ0FBaUMsNENB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsZUFBZTtBQUMxQztBQUNBLDJCQUEyQixXQUFXO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELDZDQUFjLENBQUM7QUFDcEU7QUFDQTtBQUNBO0FBQ0EscURBQXFELDhDQUFjLENBQUM7QUFDcEU7QUFDQTtBQUNBO0FBQ0EscURBQXFELHdEQUFpQixDQUFDO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixpREFBVTtBQUMxQixnQkFBZ0IsaURBQVU7QUFDMUIsbUJBQW1CLG9EQUFhO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdURBQXVELGVBQWU7QUFDdEU7O0FBRUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvZm9vZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFsbHVyYSZmYW1pbHk9SXRhbGlhbm5vJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLXRyYW5zbHVzY2VudC1ibGFjazogcmdiKDAsIDAsIDAsIC44Mik7XFxuICAtLW5vcm1hbC1mb250LXNpemU6IDJlbTtcXG59XFxuXFxuYm9keSB7XFxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlcy9vbmUtcGllY2UtZm9vZC5qcGcnKTsgKi9cXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMXMgZWFzZS1pbjtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnRpdGxlLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogOGVtO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7ICovXFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNsdXNjZW50LWJsYWNrKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiAnSXRhbGlhbm5vJywgY3Vyc2l2ZTtcXG59XFxuXFxuLm5hdi1iYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLyogZ2FwOiA1ZW07ICovXFxufVxcblxcbi5zZWN0aW9uLWJ1dHRvbi1jb250YWluZXIge1xcbiAgZm9udC1zaXplOiB2YXIoLS1ub3JtYWwtZm9udC1zaXplKTtcXG4gIG1hcmdpbjogMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdBbGx1cmEnLCBjdXJzaXZlO1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5zZWN0aW9uLWJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLThweCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zZWN0aW9uLWJ1dHRvbi1jb250YWluZXItc2VsZWN0ZWQge1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHdoaXRlO1xcbn1cXG5cXG4uc2VjdGlvbi1idXR0b24ge1xcbiAgbWFyZ2luOiA1cHg7XFxuICBwYWRkaW5nOiA0cHg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGVhc2Utb3V0O1xcbn1cXG5cXG4vKiBob21lIHNlY3Rpb24gKi9cXG4uaG9tZS1jb250YWluZXIge1xcbiAgZm9udC1mYW1pbHk6ICdBbGx1cmEnLCBjdXJzaXZlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc2x1c2NlbnQtYmxhY2spO1xcbn1cXG5cXG4uaG9tZS1kZXNjcmlwdGlvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLWxlZnQ6IDFlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbm9ybWFsLWZvbnQtc2l6ZSk7XFxufVxcblxcbi5jaGVmLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY2hlZi1waWMge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWF4LXdpZHRoOiAyMDBweDtcXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jaGVmLWRlc2NyaXB0aW9uIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nLWxlZnQ6IDFlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbm9ybWFsLWZvbnQtc2l6ZSk7XFxufVxcblxcbi8qIG1lbnUgc2VjdGlvbiAqL1xcbi5tZW51LWNvbnRhaW5lciB7XFxuICBmb250LWZhbWlseTogJ0FsbHVyYScsIGN1cnNpdmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNWVtO1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBwYWRkaW5nOiA1ZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNsdXNjZW50LWJsYWNrKTtcXG59XFxuXFxuLm1lbnUtaXRlbS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiB2YXIoLS1ub3JtYWwtZm9udC1zaXplKTtcXG59XFxuXFxuLm1lbnUtaXRlbS1waWMge1xcbiAgbWF4LXdpZHRoOiAyMDBweDtcXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbn1cXG5cXG4ubWVudS1pdGVtLWRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1sZWZ0OiAxZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAuNWVtO1xcbn1cXG5cXG4ubWVudS1pdGVtLXRpdGxlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ubWVudS1pdGVtLXRpdGxlIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4vKiBjdXJyZW50bHkgZG9lcyBub3RoaW5nLCBtaWdodCB1c2UgaXQgbGF0ZXIgaWYgSSB3YW50IGEgZGlmZmVyZW50IGZvbnQgc2l6ZSBvciBzb21ldGhpbmcgKi9cXG4ubWVudS1pdGVtLWRlc2NyaXB0aW9uIHt9XFxuXFxuLyogY29udGFjdCBzZWN0aW9uICovXFxuLmNvbnRhY3QtY29udGFpbmVyIHtcXG4gIGZvbnQtZmFtaWx5OiAnQWxsdXJhJywgY3Vyc2l2ZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxZW07XFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc2x1c2NlbnQtYmxhY2spO1xcbiAgZm9udC1zaXplOiB2YXIoLS1ub3JtYWwtZm9udC1zaXplKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3QtY29udGFpbmVyIGhyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29udGFjdC1kZXNjcmlwdGlvbiB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5waG9uZS1udW1iZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5sb2NhdGlvbiB7XFxuICBib3JkZXI6IDA7XFxuICBtYXJnaW4tdG9wOiAuNWVtO1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbn1cXG5cXG4vKiBtZWRpYSBxdWVyaWVzIGF0IHRoZSBlbmQgc28gdGhleSBoYXZlIGFjY2VzcyB0byBhbGwgY3NzIHNlbGVjdG9ycyAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuY2hlZi1jb250YWluZXIge1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICB9XFxuXFxuICAubWVudS1jb250YWluZXIge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMmVtO1xcbiAgfVxcblxcbiAgLm1lbnUtaXRlbS1jb250YWluZXIge1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDFlbTtcXG4gIH1cXG59XFxuXFxuLyogbWFrZSBjb250ZW50IGZhZGUgaW4gd2hlbiBzZWN0aW9uIGlzIGNoYW5nZWQgKi9cXG4uaG9tZS1jb250YWluZXIsIC5tZW51LWNvbnRhaW5lciwgLmNvbnRhY3QtY29udGFpbmVyIHtcXG4gIGFuaW1hdGlvbjogZmFkZWluIDJzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHVDQUF1QztFQUN2Qyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx3REFBd0Q7RUFDeEQseURBQXdDO0VBQ3hDLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsdUNBQXVDO0VBQ3ZDLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsMkNBQTJDO0VBQzNDLFlBQVk7RUFDWixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0NBQWtDO0FBQ3BDOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQ0FBa0M7QUFDcEM7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7RUFDUixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUEsNEZBQTRGO0FBQzVGLHdCQUF3Qjs7QUFFeEIsb0JBQW9CO0FBQ3BCO0VBQ0UsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7RUFDUixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLDJDQUEyQztFQUMzQyxrQ0FBa0M7RUFDbEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztFQUNYLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBLHNFQUFzRTtBQUN0RTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFFBQVE7RUFDVjtBQUNGOztBQUVBLGlEQUFpRDtBQUNqRDtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QWxsdXJhJmZhbWlseT1JdGFsaWFubm8mZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgLS10cmFuc2x1c2NlbnQtYmxhY2s6IHJnYigwLCAwLCAwLCAuODIpO1xcbiAgLS1ub3JtYWwtZm9udC1zaXplOiAyZW07XFxufVxcblxcbmJvZHkge1xcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCdpbWFnZXMvb25lLXBpZWNlLWZvb2QuanBnJyk7ICovXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlcy9mb29kLmpwZycpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDFzIGVhc2UtaW47XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi50aXRsZS1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50aXRsZSB7XFxuICBmb250LXNpemU6IDhlbTtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gIG1hcmdpbjogMDtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAqL1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zbHVzY2VudC1ibGFjayk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogJ0l0YWxpYW5ubycsIGN1cnNpdmU7XFxufVxcblxcbi5uYXYtYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC8qIGdhcDogNWVtOyAqL1xcbn1cXG5cXG4uc2VjdGlvbi1idXR0b24tY29udGFpbmVyIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbm9ybWFsLWZvbnQtc2l6ZSk7XFxuICBtYXJnaW46IDBweDtcXG4gIGZvbnQtZmFtaWx5OiAnQWxsdXJhJywgY3Vyc2l2ZTtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uc2VjdGlvbi1idXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2VjdGlvbi1idXR0b24tY29udGFpbmVyLXNlbGVjdGVkIHtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCB3aGl0ZTtcXG59XFxuXFxuLnNlY3Rpb24tYnV0dG9uIHtcXG4gIG1hcmdpbjogNXB4O1xcbiAgcGFkZGluZzogNHB4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cyBlYXNlLW91dDtcXG59XFxuXFxuLyogaG9tZSBzZWN0aW9uICovXFxuLmhvbWUtY29udGFpbmVyIHtcXG4gIGZvbnQtZmFtaWx5OiAnQWxsdXJhJywgY3Vyc2l2ZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBwYWRkaW5nOiAyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNsdXNjZW50LWJsYWNrKTtcXG59XFxuXFxuLmhvbWUtZGVzY3JpcHRpb24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAxZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxZW07XFxuICBmb250LXNpemU6IHZhcigtLW5vcm1hbC1mb250LXNpemUpO1xcbn1cXG5cXG4uY2hlZi1jb250YWluZXIge1xcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNoZWYtcGljIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG1heC13aWR0aDogMjAwcHg7XFxuICBtYXgtaGVpZ2h0OiAyMDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY2hlZi1kZXNjcmlwdGlvbiB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZy1sZWZ0OiAxZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxZW07XFxuICBmb250LXNpemU6IHZhcigtLW5vcm1hbC1mb250LXNpemUpO1xcbn1cXG5cXG4vKiBtZW51IHNlY3Rpb24gKi9cXG4ubWVudS1jb250YWluZXIge1xcbiAgZm9udC1mYW1pbHk6ICdBbGx1cmEnLCBjdXJzaXZlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVlbTtcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgcGFkZGluZzogNWVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zbHVzY2VudC1ibGFjayk7XFxufVxcblxcbi5tZW51LWl0ZW0tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbm9ybWFsLWZvbnQtc2l6ZSk7XFxufVxcblxcbi5tZW51LWl0ZW0tcGljIHtcXG4gIG1heC13aWR0aDogMjAwcHg7XFxuICBtYXgtaGVpZ2h0OiAyMDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyMDBweDtcXG59XFxuXFxuLm1lbnUtaXRlbS1kZXNjcmlwdGlvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctbGVmdDogMWVtO1xcbiAgcGFkZGluZy1yaWdodDogLjVlbTtcXG59XFxuXFxuLm1lbnUtaXRlbS10aXRsZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLm1lbnUtaXRlbS10aXRsZSB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuLyogY3VycmVudGx5IGRvZXMgbm90aGluZywgbWlnaHQgdXNlIGl0IGxhdGVyIGlmIEkgd2FudCBhIGRpZmZlcmVudCBmb250IHNpemUgb3Igc29tZXRoaW5nICovXFxuLm1lbnUtaXRlbS1kZXNjcmlwdGlvbiB7fVxcblxcbi8qIGNvbnRhY3Qgc2VjdGlvbiAqL1xcbi5jb250YWN0LWNvbnRhaW5lciB7XFxuICBmb250LWZhbWlseTogJ0FsbHVyYScsIGN1cnNpdmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMWVtO1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBwYWRkaW5nOiAyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNsdXNjZW50LWJsYWNrKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbm9ybWFsLWZvbnQtc2l6ZSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWN0LWNvbnRhaW5lciBociB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbnRhY3QtZGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ucGhvbmUtbnVtYmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubG9jYXRpb24ge1xcbiAgYm9yZGVyOiAwO1xcbiAgbWFyZ2luLXRvcDogLjVlbTtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICBtYXgtaGVpZ2h0OiA1MDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MDBweDtcXG59XFxuXFxuLyogbWVkaWEgcXVlcmllcyBhdCB0aGUgZW5kIHNvIHRoZXkgaGF2ZSBhY2Nlc3MgdG8gYWxsIGNzcyBzZWxlY3RvcnMgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmNoZWYtY29udGFpbmVyIHtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgfVxcblxcbiAgLm1lbnUtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDJlbTtcXG4gIH1cXG5cXG4gIC5tZW51LWl0ZW0tY29udGFpbmVyIHtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxZW07XFxuICB9XFxufVxcblxcbi8qIG1ha2UgY29udGVudCBmYWRlIGluIHdoZW4gc2VjdGlvbiBpcyBjaGFuZ2VkICovXFxuLmhvbWUtY29udGFpbmVyLCAubWVudS1jb250YWluZXIsIC5jb250YWN0LWNvbnRhaW5lciB7XFxuICBhbmltYXRpb246IGZhZGVpbiAycztcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlaW4ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xuICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1jb250YWluZXInKTtcbiAgLy8gYWRkIHRoZSBtYWluIGRlc2NyaXB0aW9uXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWRlc2NyaXB0aW9uJyk7XG4gIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdCcmluZyB5b3VyIGZyaWVuZHMgYW5kIGZhbWlseSBhbG9uZyB3aXRoIGEgaGVhbHRoeSBhcHBldGl0ZSBhbmQgY29tZSB2aXNpdCBCYXJhdGllIHRvZGF5ISAoQ3VzdG9tZXJzIHdobyB3ZXJlIHJlY2VudGx5IHN0YXJ2aW5nIGVhdCBmcmVlISBEZXZpbCBGcnVpdCB1c2VycyBnZXQgYSAyMCUgZGlzY291bnQgaWYgdGhleSBjYW4gc3dpbSBhIGxhcCBhcm91bmQgQmFyYXRpZSEpJykpO1xuICAvLyBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpKTtcbiAgLy8gYWRkIHRoZSBwaG9uZSBudW1iZXJcbiAgY29uc3QgcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHBob25lTnVtYmVyLmNsYXNzTGlzdC5hZGQoJ3Bob25lLW51bWJlcicpO1xuICBwaG9uZU51bWJlci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnUGhvbmU6IDEtODAwLVRlYW0tU2FuamknKSk7XG4gIC8vIHBob25lTnVtYmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJykpO1xuICAvLyBhZGQgdGhlIGdvb2dsZSBtYXAgbG9jYXRpb25cbiAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgbG9jYXRpb24uY2xhc3NMaXN0LmFkZCgnbG9jYXRpb24nKTtcbiAgbG9jYXRpb24uc3JjID0gXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQzMDYzNDAwNy44NzM4ODUyNCEyZC0xMjEuMTY0Mzg5NDAwMDAwMDIhM2QyMC40MDMzNzU0NTAwMDAwMDIhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDg0MmY0YmQ2NWNjMzhjNTclM0EweDY3YjhkOTgwYTYxOTUwM2QhMnNCYXJhdGllITVlMCEzbTIhMXNlbiEyc3VzITR2MTYyNzI3Mjk1NzY1OCE1bTIhMXNlbiEyc3VzXCI7XG4gIGxvY2F0aW9uLmFsbG93ZnVsbHNjcmVlbiA9IFwiXCI7XG4gIGxvY2F0aW9uLmxvYWRpbmcgPSBcImxhenlcIjtcbiAgLy8gYWRkIGFsbCB0aGUgY29tcG9uZW5ldHMgdG8gY29udGFjdENvbnRhaW5lclxuICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpKTtcbiAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwaG9uZU51bWJlcik7XG4gIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKSk7XG4gIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xuICByZXR1cm4gY29udGFjdENvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFjdDtcbiIsImltcG9ydCB6ZWZmIGZyb20gJy4vaW1hZ2VzL3plZmYuanBnJztcbmltcG9ydCBzYW5qaSBmcm9tICcuL2ltYWdlcy9zYW5qaS5qcGcnO1xuXG5mdW5jdGlvbiBjcmVhdGVIb21lKCkge1xuICBjb25zdCBob21lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhvbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG9tZS1jb250YWluZXInKTtcbiAgLy8gbWFrZSB0aGUgZGVzY3JpcHRpb24gZm9yIHRoZSByZXN0YXVyYW50XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdob21lLWRlc2NyaXB0aW9uJyk7XG4gIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdDb21lIG9uZSwgY29tZSBhbGwgdG8gQmFyYXRpZSwgdGhlIGZsb2F0aW5nIHJlc3R1YXJhbnQhJykpO1xuICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcbiAgZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJVc2luZyBmcmVzaCBpbmdyZWRpZW50cyBsb2NhbGx5IHNvdXJjZWQgZnJvbSB0aGUgRWFzdCBCbHVlLCB3ZSBzZXJ2ZSB3b3JsZCBjbGFzcyBjdWlzaW5lIHRvIHNhaWxvcnMgYW5kIHBpcmF0ZXMgYWxpa2UuXCIpKTtcbiAgZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKSk7XG4gIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdNZWV0IG91ciBjaGVmcyEnKSk7XG4gIC8vIGNyZWF0ZSBjb250YWluZXIgZm9yIGNoZWYgcGljdHVyZXMgYW5kIGRlc2NyaXB0aW9uXG4gIGNvbnN0IGNoZWZQaWNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgLy8gbWFrZSB0aGUgY29udGFpbmVycyB0aGF0IHdpbGwgaG9sZCB0aGUgcGljdHVyZSBhbmQgZGVzY3JpcHRpb25cbiAgY29uc3QgemVmZkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBzYW5qaUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB6ZWZmQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NoZWYtY29udGFpbmVyJyk7XG4gIHNhbmppQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NoZWYtY29udGFpbmVyJyk7XG4gIC8vIG1ha2UgdGhlIHplZmYgcGljdHVyZVxuICBjb25zdCB6ZWZmUGljID0gbmV3IEltYWdlKCk7XG4gIHplZmZQaWMuY2xhc3NMaXN0LmFkZCgnY2hlZi1waWMnKTtcbiAgemVmZlBpYy5zcmMgPSB6ZWZmO1xuICAvLyBtYWtlIHRoZSB6ZWZmIGRlc2NyaXB0aW9uXG4gIGNvbnN0IHplZmZEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgemVmZkRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2NoZWYtZGVzY3JpcHRpb24nKTtcbiAgemVmZkRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdaZWZmLCBIZWFkIENoZWYnKSk7XG4gIHplZmZEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpKTtcbiAgemVmZkRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiWmVmZiBpcyB0aGUgb3duZXIgb2YgQmFyYXRpZSBhbmQgaGFzIGJlZW4gcnVubmluZyB0aGUgcmVzdGF1cmFudCBldmVyIHNpbmNlIGl0J3MgZm91bmRpbmcgaW4gMTc3NiwgZG9uJ3QgYXNrIGhpbSBhYm91dCBob3cgaGUgbG9zdCBoaXMgbGVnLCBpdCdzIGEgdG91Y2h5IHN1YmplY3QuXCIpKTtcbiAgemVmZkNvbnRhaW5lci5hcHBlbmRDaGlsZCh6ZWZmUGljKTtcbiAgemVmZkNvbnRhaW5lci5hcHBlbmRDaGlsZCh6ZWZmRGVzY3JpcHRpb24pO1xuICAvLyBtYWtlIHRoZSBzYW5qaSBwaWN0dXJlXG4gIGNvbnN0IHNhbmppUGljID0gbmV3IEltYWdlKCk7XG4gIHNhbmppUGljLmNsYXNzTGlzdC5hZGQoJ2NoZWYtcGljJyk7XG4gIHNhbmppUGljLnNyYyA9IHNhbmppO1xuICAvLyBtYWtlIHRoZSBzYW5qaSBkZXNjcmlwdGlvblxuICBjb25zdCBzYW5qaURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBzYW5qaURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2NoZWYtZGVzY3JpcHRpb24nKTtcbiAgc2FuamlEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnU2FuamksIFNvdXMgQ2hlZicpKTtcbiAgc2FuamlEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpKTtcbiAgc2FuamlEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlNhbmppIGhhcyBiZWVuIHRyYWluaW5nIHVuZGVyIFplZmYgc2luY2UgaGUgd2FzIGxpdHRsZSwgaGUncyBhbiBleGNlbGxlbnQgY29vayBhbmQgd2FzIGdvaW5nIHRvIGluaGVyaXQgdGhlIHJlc3RhcnVyYW50IHVudGlsIFN0cmF3IEhhdCBMdWZmeSBjYW1lIGFsb25nLi4uXCIpKTtcbiAgc2FuamlDb250YWluZXIuYXBwZW5kQ2hpbGQoc2FuamlQaWMpO1xuICBzYW5qaUNvbnRhaW5lci5hcHBlbmRDaGlsZChzYW5qaURlc2NyaXB0aW9uKTtcblxuICAvLyBhcHBlbmQgdGhlIGNoZWYgcGljdHVyZXMgdG8gdGhlIGhvbWVDb250YWluZXJcbiAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoemVmZkNvbnRhaW5lcik7XG4gIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2FuamlDb250YWluZXIpO1xuXG4gIHJldHVybiBob21lQ29udGFpbmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb21lO1xuIiwiaW1wb3J0IHNhc2hpbWkgZnJvbSAnLi9pbWFnZXMvc2FzaGltaS5qcGcnO1xuaW1wb3J0IHNlYWZvb2RSaXNvdHRvIGZyb20gJy4vaW1hZ2VzL3NlYWZvb2Qtcmlzb3R0by5qcGcnO1xuaW1wb3J0IG1lYXRiYWxscyBmcm9tICcuL2ltYWdlcy9tZWF0YmFsbHMuanBnJztcbmltcG9ydCBzb2JhIGZyb20gJy4vaW1hZ2VzL3NvYmEtbm9vZGxlcy5qcGcnO1xuaW1wb3J0IG1lYXQgZnJvbSAnLi9pbWFnZXMvbWVhdC5wbmcnO1xuaW1wb3J0IGJlbnRvIGZyb20gJy4vaW1hZ2VzL2JlbnRvLnBuZyc7XG5pbXBvcnQgb3NoaXJ1a28gZnJvbSAnLi9pbWFnZXMvb3NoaXJ1a28ucG5nJztcbmltcG9ydCBhbGlnb3QgZnJvbSAnLi9pbWFnZXMvYWxpZ290LnBuZyc7XG5pbXBvcnQgY2hvcHBlciBmcm9tICcuL2ltYWdlcy9jaG9wcGVyLnBuZyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRhaW5lcicpO1xuICAvLyBtYWtlIHRoZSBhcnJheSB3aXRoIG9iamVjdHMgdGhhdCBoYXZlIHRoZSBpbmZvcm1hdGlvbiBmb3IgZWFjaCBtZW51IGl0ZW1cbiAgbGV0IGl0ZW1BcnIgPSBbe1xuICAgIGltYWdlVXJsOiBzYXNoaW1pLFxuICAgIGl0ZW1UaXRsZTogXCJTYXNoaW1pIFBsYXR0ZXJcIixcbiAgICBpdGVtUHJpY2U6IDE4LjAwLFxuICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJCbHVlZmluIHR1bmEgYW5kIHRvcm8gc2xpY2VzLCBhIHN0YXBsZSBvZiBmaW5lIGRpbmluZy5cIlxuICB9LCB7XG4gICAgaW1hZ2VVcmw6IHNlYWZvb2RSaXNvdHRvLFxuICAgIGl0ZW1UaXRsZTogXCJTZWFmb29kIFJpc290dG9cIixcbiAgICBpdGVtUHJpY2U6IDEyLjAwLFxuICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJCdXR0ZXJ5IFJpc290dG8gc2VydmVkIHdpdGggc2hyaW1wLCBvY3RvcHVzLCBhbmQgY2FsYW1hcmkuXCJcbiAgfSwge1xuICAgIGltYWdlVXJsOiBtZWF0YmFsbHMsXG4gICAgaXRlbVRpdGxlOiBcIlNpZ25hdHVyZSBNZWF0YmFsbHNcIixcbiAgICBpdGVtUHJpY2U6IDE1LjAwLFxuICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJPbmUgb2YgU2FuamkncyBzaWduYXR1cmUgZGlzaGVzLiBUaGVzZSBtZWF0YmFsbHMgYXJlIHRvIGRpZSBmb3IuLi4gTGl0ZXJhbGx5LCBMdWZmeSBhbG1vc3QgZGllZCBhdCBHNSBmb3IgdGhlc2UuLi5cIlxuICB9LCB7XG4gICAgaW1hZ2VVcmw6IG1lYXQsXG4gICAgaXRlbVRpdGxlOiBcIk15c3RlcnkgTWVhdFwiLFxuICAgIGl0ZW1QcmljZTogMTAuMDAsXG4gICAgaXRlbURlc2NyaXB0aW9uOiBcIkZlZWxpbmcgZnJpc2t5PyBUcnkgb3VyIE15c3RlcnkgTWVhdCwgaXQgY2hhbmdlcyBldmVyeSB3ZWVrIVwiXG4gIH0sIHtcbiAgICBpbWFnZVVybDogc29iYSxcbiAgICBpdGVtVGl0bGU6IFwiU29iYSBOb29kbGVzXCIsXG4gICAgaXRlbVByaWNlOiA4LjAwLFxuICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJTYW5qaSBzZXJ2ZWQgdGhpcyBkaXNoIGV4dGVuc2l2ZWx5IGF0IHRoZSBsYW5kIG9mIFdhbm8sIHRvdGFsbHkgb3V0IG9mIHRoZSBnb29kbmVzcyBvZiBoaXMgaGVhcnQgYW5kIG5vdCBzbyBoZSBjYW4gdHJ5IGFuZCBzY29yZSB3aXRoIHRoZSBXYW5vIGxhZGllcy4uLlwiXG4gIH0sIHtcbiAgICBpbWFnZVVybDogYmVudG8sXG4gICAgaXRlbVRpdGxlOiBcIkNoZWYncyBDaG9pY2UgQmVudG8gQm94XCIsXG4gICAgaXRlbVByaWNlOiAyNS4wMCxcbiAgICBpdGVtRGVzY3JpcHRpb246IFwiT24gb25lIHRoZSBkYXlzIHByZWNlZGluZyBTYW5qaSBhbmQgUHVkZGluZydzIHdlZGRpbmcsIFNhbmppIG1hZGUgdGhpcyBCZW50byBib3ggZm9yIFB1ZGRpbmcuIEl0IGlzIGNvbXByaXNlZCBvZiBhbGwgdGhlIFN0cmF3IEhhdCBQaXJhdGVzJyBmYXZvcml0ZSBmb29kcy5cIlxuICB9LCB7XG4gICAgaW1hZ2VVcmw6IGFsaWdvdCxcbiAgICBpdGVtVGl0bGU6IFwiQWxpZ290XCIsXG4gICAgaXRlbVByaWNlOiAxNi4wMCxcbiAgICBpdGVtRGVzY3JpcHRpb246IFwiVGhpY2sgc2xpY2VzIG9mIGZpbGV0IHNlcnZlZCB3aXRoIHBvdGF0b2VzIGFuZCBhIGRlbGVjdGFibGUsIGNoZWVzeSBmb25kdWUgc2F1Y2UuXCJcbiAgfSwge1xuICAgIGltYWdlVXJsOiBvc2hpcnVrbyxcbiAgICBpdGVtVGl0bGU6IFwiT3NoaXJ1a29cIixcbiAgICBpdGVtUHJpY2U6IDUuMDAsXG4gICAgaXRlbURlc2NyaXB0aW9uOiBcIlJlZCBiZWFuIHNvdXAgd2l0aCBtb2NoaSBjYWtlcy4gRG9uJ3QgdGVsbCBCaWcgTW9tIHdlIHNlcnZlIHRoaXMuLi5cIlxuICB9LCB7XG4gICAgaW1hZ2VVcmw6IGNob3BwZXIsXG4gICAgaXRlbVRpdGxlOiBcIkVtZXJnZW5jeSBSYXRpb25zXCIsXG4gICAgaXRlbVByaWNlOiA1LjAwLFxuICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJJbiB0aGUgZXZlbnQgb2YgYW4gZXh0cmVtZSBmb29kIHNob3J0YWdlLCBDYXB0YWluIFN0cmF3IEhhdCBMdWZmeSBoYXMgZ2l2ZW4gdXMgcGVybWlzc2lvbiB0byBzZXJ2ZSBUb255IFRvbnkgQ2hvcHBlciwgYSBtZW1lYmVyIG9mIHRoZSBzdHJhdyBoYXQgY3JldyBhcyBhbiBlbWVyZ2VuY3kgcmF0aW9uLi4uXCJcbiAgfV07XG4gIC8vIGxvb3AgdGhyb3VnaCBhbGwgdGhlIGl0ZW1zIGluIGl0ZW1BcnIgYW5kIGNyZWF0ZSBET00gZWxlbWVudHMgZm9yIHRoZW1cbiAgZm9yIChsZXQgYSA9IDA7IGEgPCBpdGVtQXJyLmxlbmd0aDsgYSsrKSB7XG4gICAgY29uc3QgY3VycmVudEl0ZW0gPSBpdGVtQXJyW2FdO1xuICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1jb250YWluZXInKTtcbiAgICAvLyBtYWtlIHRoZSBtZW51IGl0ZW0gcGljdHVyZVxuICAgIGNvbnN0IGl0ZW1QaWMgPSBuZXcgSW1hZ2UoKTtcbiAgICBpdGVtUGljLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1waWMnKTtcbiAgICBpdGVtUGljLnNyYyA9IGN1cnJlbnRJdGVtLmltYWdlVXJsO1xuICAgIC8vIG1ha2UgY29udGFpbmVyIGZvciBpdGVtIHRpdGxlIGFuZCBkZXNjcmlwdGlvblxuICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1EZXNjcmlwdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tZGVzY3JpcHRpb24tY29udGFpbmVyJyk7XG4gICAgLy8gbWFrZSB0aGUgY29udGFpbmVyIGZvciBtZW51IGl0ZW0gbmFtZSBhbmQgcHJpY2VcbiAgICBjb25zdCBpdGVtVGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtVGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLXRpdGxlLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpdGVtVGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLXRpdGxlJyk7XG4gICAgaXRlbVRpdGxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke2N1cnJlbnRJdGVtLml0ZW1UaXRsZX1gKSk7XG4gICAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGl0ZW1QcmljZS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tdGl0bGUnKTtcbiAgICBpdGVtUHJpY2UuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCQke2N1cnJlbnRJdGVtLml0ZW1QcmljZX1gKSk7XG4gICAgLy8gYWRkIHRoZSB0aXRsZSBhbmQgcHJpY2UgdG8gdGhlIGNvbnRhaW5lclxuICAgIGl0ZW1UaXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtVGl0bGUpO1xuICAgIGl0ZW1UaXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtUHJpY2UpO1xuICAgIC8vIG1ha2UgdGhlIG1lbnUgaXRlbSBkZXNjcmlwdGlvblxuICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tZGVzY3JpcHRpb24nKTtcbiAgICBpdGVtRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKSk7XG4gICAgaXRlbURlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke2N1cnJlbnRJdGVtLml0ZW1EZXNjcmlwdGlvbn1gKSk7XG4gICAgLy8gYWRkIHRoZSB0aXRsZSBhbmQgdGhlIGRlc2NyaXB0aW9uIHRvIHRoZSBjb250YWluZXJcbiAgICBpdGVtRGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbVRpdGxlQ29udGFpbmVyKTtcbiAgICBpdGVtRGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbURlc2NyaXB0aW9uKTtcbiAgICAvLyBhZGQgdGhlIGltYWdlIGFuZCB0aGUgZnVsbCB0aXRsZSBhbmQgZGVzY3JpcHRpb24gdG8gdGhlIGl0ZW1Db250YWluZXJcbiAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1QaWMpO1xuICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbURlc2NyaXB0aW9uQ29udGFpbmVyKTtcbiAgICAvLyBmaW5hbGx5LCBhcHBlbmQgdGhlIGl0ZW1Db250YWluZXIgdG8gdGhlIG1lbnVDb250YWluZXJcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1Db250YWluZXIpO1xuICB9XG5cbiAgcmV0dXJuIG1lbnVDb250YWluZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGNyZWF0ZUhvbWUgZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCBjcmVhdGVNZW51IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgY3JlYXRlQ29udGFjdCBmcm9tICcuL2NvbnRhY3QuanMnO1xuXG4vLyBpbXBvcnQgdGhlIGltYWdlIGJhY2tncm91bmRzIGZvciB0aGUgdGhyZWUgc2VjdGlvbnNcbmltcG9ydCBob21lQmFja2dyb3VuZCBmcm9tICcuL2ltYWdlcy9mb29kLmpwZyc7XG5pbXBvcnQgbWVudUJhY2tncm91bmQgZnJvbSAnLi9pbWFnZXMvZm9vZDIuanBnJztcbmltcG9ydCBjb250YWN0QmFja2dyb3VuZCBmcm9tICcuL2ltYWdlcy9lYXRpbmctdG9nZXRoZXIucG5nJztcblxubGV0IGhvbWVDb250ZW50O1xubGV0IG1lbnVDb250ZW50O1xubGV0IGNvbnRhY3RDb250ZW50O1xuXG5sZXQgY3VycmVudFNlY3Rpb247XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgLy8gY3JlYXRlIHRoZSB0aXRsZSB0ZXh0XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWNvbnRhaW5lcicpO1xuICB0aXRsZS5pbm5lckhUTUwgPSAnPHAgY2xhc3M9XCJ0aXRsZVwiPkJhcmF0aWU8L3A+JztcbiAgLy8gY3JlYXRlIHRoZSB0aHJlZSBjYXRlZ29yeSBidXR0b25zXG4gIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBuYXZCYXIuY2xhc3NMaXN0LmFkZCgnbmF2LWJhcicpO1xuICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi1idXR0b24tY29udGFpbmVyJyk7XG4gIGhvbWVCdXR0b24uaWQgPSBcImhvbWVCdXR0b25cIjtcbiAgaG9tZUJ1dHRvbi5pbm5lckhUTUwgKz0gJzxwIGNsYXNzPVwic2VjdGlvbi1idXR0b25cIj5Ib21lPC9wPic7XG4gIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi1idXR0b24tY29udGFpbmVyLXNlbGVjdGVkJyk7XG4gIGhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBjaGFuZ2VTZWN0aW9uKCdob21lJywgbmF2QmFyKTtcbiAgfSk7XG4gIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWJ1dHRvbi1jb250YWluZXInKTtcbiAgbWVudUJ1dHRvbi5pZCA9IFwibWVudUJ1dHRvblwiO1xuICBtZW51QnV0dG9uLmlubmVySFRNTCArPSAnPHAgY2xhc3M9XCJzZWN0aW9uLWJ1dHRvblwiPk1lbnU8L3A+JztcbiAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGNoYW5nZVNlY3Rpb24oJ21lbnUnLCBuYXZCYXIpO1xuICB9KTtcbiAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24tYnV0dG9uLWNvbnRhaW5lcicpO1xuICBjb250YWN0QnV0dG9uLmlkID0gXCJjb250YWN0QnV0dG9uXCI7XG4gIGNvbnRhY3RCdXR0b24uaW5uZXJIVE1MICs9ICc8cCBjbGFzcz1cInNlY3Rpb24tYnV0dG9uXCI+Q29udGFjdDwvcD4nO1xuICBjb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY2hhbmdlU2VjdGlvbignY29udGFjdCcsIG5hdkJhcik7XG4gIH0pO1xuICAvLyBhZGQgYWxsIHRoZSB0aHJlZSBzZWN0aW9ucyB0byB0aGUgaGVhZGVyXG4gIG5hdkJhci5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcbiAgbmF2QmFyLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuICBuYXZCYXIuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbik7XG4gIC8vIGFwcGVuZCB0aXRsZSBhbmQgdGhlIHNlY3Rpb24gYnV0dG9ucyB0byB0aGUgaGVhZGVyXG4gIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChuYXZCYXIpO1xuICAvLyBhcHBlbmQgdGhlIGhlYWRlciB0byB0aGUgZG9jdW1lbnQgYm9keVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVNlY3Rpb24obmV3U2VjdGlvbiwgbmF2QmFyKSB7XG4gIC8vIHJlbW92ZSB0aGUgdW5kZXJsaW5lIGZyb20gdGhlIG9sZCBzZWN0aW9uXG4gIG5hdkJhci5xdWVyeVNlbGVjdG9yKGAjJHtjdXJyZW50U2VjdGlvbn1CdXR0b25gKS5jbGFzc0xpc3QucmVtb3ZlKCdzZWN0aW9uLWJ1dHRvbi1jb250YWluZXItc2VsZWN0ZWQnKTtcbiAgLy8gdW5kZXJsaW5lIHRoZSBuZXcgc2VjdGlvblxuICBuYXZCYXIucXVlcnlTZWxlY3RvcihgIyR7bmV3U2VjdGlvbn1CdXR0b25gKS5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWJ1dHRvbi1jb250YWluZXItc2VsZWN0ZWQnKTtcbiAgLy8gZGlzcGxheSB0aGUgbmV3IHNlY3Rpb24ncyBjb250ZW50XG4gIGlmIChjdXJyZW50U2VjdGlvbiAhPSBuZXdTZWN0aW9uKSB7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgLy8gYWN0dWFsbHkgc3dpdGNoIHRvIHRoZSBuZXcgY29udGVudFxuICAgIHN3aXRjaCAobmV3U2VjdGlvbikge1xuICAgICAgY2FzZSAnaG9tZSc6XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaG9tZUNvbnRlbnQpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtob21lQmFja2dyb3VuZH0pYDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtZW51JzpcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtZW51Q29udGVudCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke21lbnVCYWNrZ3JvdW5kfSlgO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NvbnRhY3QnOlxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhY3RDb250ZW50KTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7Y29udGFjdEJhY2tncm91bmR9KWA7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjdXJyZW50U2VjdGlvbiA9IG5ld1NlY3Rpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZFdlYnNpdGUoKSB7XG4gIGNyZWF0ZUhlYWRlcigpO1xuICBob21lQ29udGVudCA9IGNyZWF0ZUhvbWUoKTtcbiAgbWVudUNvbnRlbnQgPSBjcmVhdGVNZW51KCk7XG4gIGNvbnRhY3RDb250ZW50ID0gY3JlYXRlQ29udGFjdCgpO1xuICAvLyBpbml0aWFsbHkgZGlzcGxheSB0aGUgaG9tZSBzZWN0aW9uXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaG9tZUNvbnRlbnQpO1xuICBjdXJyZW50U2VjdGlvbiA9IFwiaG9tZVwiO1xufVxuXG5mdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y3VycmVudFNlY3Rpb259LWNvbnRhaW5lcmApKTtcbn1cblxubG9hZFdlYnNpdGUoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=