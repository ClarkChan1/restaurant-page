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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Kalam&family=Kaushan+Script&family=Quicksand:wght@500&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --transluscent-black: rgb(0, 0, 0, .82);\n  --normal-font-size: 2em;\n}\n\nbody {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-attachment: fixed;\n  font-family: 'Kalam', cursive;\n  transition: background-image 1s ease-in;\n  margin: 0;\n}\n\n.title-container {\n  width: 100%;\n  text-align: center;\n}\n\n.title {\n  font-size: 8em;\n  padding: 30px;\n  padding-bottom: 0;\n  margin: 0;\n  /* background-color: black; */\n}\n\n.header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: var(--transluscent-black);\n  color: white;\n  font-family: 'Kaushan Script', cursive;\n}\n\n.nav-bar {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  /* gap: 5em; */\n}\n\n.section-button-container {\n  font-size: var(--normal-font-size);\n  margin: 0px;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-bottom: 10px;\n}\n\n.section-button:hover {\n  transform: translateY(-8px);\n  cursor: pointer;\n}\n\n.section-button-container-selected {\n  border-bottom: solid 2px white;\n}\n\n.section-button {\n  margin: 5px;\n  padding: 4px;\n  transition: transform .5s ease-out;\n}\n\n/* home section */\n.home-container {\n  color: white;\n  display: flex;\n  flex-direction: column;\n  max-width: 800px;\n  margin: auto;\n  margin-top: 50px;\n  padding: 2em;\n  align-items: center;\n  background-color: var(--transluscent-black);\n}\n\n.home-description {\n  text-align: center;\n  padding-left: 1em;\n  padding-right: 1em;\n  font-size: var(--normal-font-size);\n}\n\n.chef-container {\n  padding-left: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.chef-pic {\n  border-radius: 50%;\n  max-width: 200px;\n  max-height: 200px;\n  width: 100%;\n  height: 100%;\n}\n\n.chef-description {\n  text-align: left;\n  padding-left: 1em;\n  padding-right: 1em;\n  font-size: var(--normal-font-size);\n}\n\n/* menu section */\n.menu-container {\n  font-family: 'Quicksand', sans-serif;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  gap: 5em;\n  max-width: 800px;\n  margin: auto;\n  margin-top: 50px;\n  padding: 5em;\n  align-items: center;\n  background-color: var(--transluscent-black);\n}\n\n.menu-item-container {\n  display: flex;\n  width: 100%;\n  font-size: var(--normal-font-size);\n}\n\n.menu-item-pic {\n  max-width: 200px;\n  max-height: 200px;\n  width: 100%;\n  height: 200px;\n}\n\n.menu-item-description-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-left: 1em;\n  padding-right: .5em;\n}\n\n.menu-item-title-container {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.menu-item-title {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n/* currently does nothing, might use it later if I want a different font size or something */\n.menu-item-description {}\n\n/* contact section */\n.contact-container {\n  color: white;\n  display: flex;\n  flex-direction: column;\n  gap: 1em;\n  max-width: 800px;\n  margin: auto;\n  margin-top: 50px;\n  padding: 2em;\n  align-items: center;\n  background-color: var(--transluscent-black);\n  font-size: var(--normal-font-size);\n  text-align: center;\n}\n\n.contact-container hr {\n  width: 100%;\n}\n\n.contact-description {\n  margin: 0;\n}\n\n.contact-item-container {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  gap:1em;\n}\n\n.contact-item-pic {\n  max-width: 60px;\n  max-height: 60px;\n  width: 100%;\n}\n\n.location {\n  border: 0;\n  margin-top: .5em;\n  max-width: 500px;\n  max-height: 500px;\n  width: 100%;\n  height: 500px;\n}\n\n/* media queries at the end so they have access to all css selectors */\n@media screen and (max-width: 600px) {\n  .chef-container {\n    flex-wrap: wrap;\n  }\n\n  .menu-container {\n    padding-left: 2em;\n    padding-right: 2em;\n  }\n\n  .menu-item-container {\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 1em;\n  }\n}\n\n/* make content fade in when section is changed */\n.home-container, .menu-container, .contact-container {\n  animation: fadein 2s;\n}\n\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,uCAAuC;EACvC,uBAAuB;AACzB;;AAEA;EACE,yDAAwC;EACxC,sBAAsB;EACtB,4BAA4B;EAC5B,6BAA6B;EAC7B,uCAAuC;EACvC,SAAS;AACX;;AAEA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,iBAAiB;EACjB,SAAS;EACT,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,2CAA2C;EAC3C,YAAY;EACZ,sCAAsC;AACxC;;AAEA;EACE,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,cAAc;AAChB;;AAEA;EACE,kCAAkC;EAClC,WAAW;EACX,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,2BAA2B;EAC3B,eAAe;AACjB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kCAAkC;AACpC;;AAEA,iBAAiB;AACjB;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;EAChB,YAAY;EACZ,mBAAmB;EACnB,2CAA2C;AAC7C;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;EAClB,kCAAkC;AACpC;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,kCAAkC;AACpC;;AAEA,iBAAiB;AACjB;EACE,oCAAoC;EACpC,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;EAChB,YAAY;EACZ,mBAAmB;EACnB,2CAA2C;AAC7C;;AAEA;EACE,aAAa;EACb,WAAW;EACX,kCAAkC;AACpC;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,WAAW;EACX,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,gBAAgB;AAClB;;AAEA,4FAA4F;AAC5F,wBAAwB;;AAExB,oBAAoB;AACpB;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;EAChB,YAAY;EACZ,mBAAmB;EACnB,2CAA2C;EAC3C,kCAAkC;EAClC,kBAAkB;AACpB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,OAAO;AACT;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,SAAS;EACT,gBAAgB;EAChB,gBAAgB;EAChB,iBAAiB;EACjB,WAAW;EACX,aAAa;AACf;;AAEA,sEAAsE;AACtE;EACE;IACE,eAAe;EACjB;;EAEA;IACE,iBAAiB;IACjB,kBAAkB;EACpB;;EAEA;IACE,eAAe;IACf,uBAAuB;IACvB,QAAQ;EACV;AACF;;AAEA,iDAAiD;AACjD;EACE,oBAAoB;AACtB;;AAEA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Kalam&family=Kaushan+Script&family=Quicksand:wght@500&display=swap');\n\n:root {\n  --transluscent-black: rgb(0, 0, 0, .82);\n  --normal-font-size: 2em;\n}\n\nbody {\n  background-image: url('images/food.jpg');\n  background-size: cover;\n  background-attachment: fixed;\n  font-family: 'Kalam', cursive;\n  transition: background-image 1s ease-in;\n  margin: 0;\n}\n\n.title-container {\n  width: 100%;\n  text-align: center;\n}\n\n.title {\n  font-size: 8em;\n  padding: 30px;\n  padding-bottom: 0;\n  margin: 0;\n  /* background-color: black; */\n}\n\n.header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: var(--transluscent-black);\n  color: white;\n  font-family: 'Kaushan Script', cursive;\n}\n\n.nav-bar {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  /* gap: 5em; */\n}\n\n.section-button-container {\n  font-size: var(--normal-font-size);\n  margin: 0px;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-bottom: 10px;\n}\n\n.section-button:hover {\n  transform: translateY(-8px);\n  cursor: pointer;\n}\n\n.section-button-container-selected {\n  border-bottom: solid 2px white;\n}\n\n.section-button {\n  margin: 5px;\n  padding: 4px;\n  transition: transform .5s ease-out;\n}\n\n/* home section */\n.home-container {\n  color: white;\n  display: flex;\n  flex-direction: column;\n  max-width: 800px;\n  margin: auto;\n  margin-top: 50px;\n  padding: 2em;\n  align-items: center;\n  background-color: var(--transluscent-black);\n}\n\n.home-description {\n  text-align: center;\n  padding-left: 1em;\n  padding-right: 1em;\n  font-size: var(--normal-font-size);\n}\n\n.chef-container {\n  padding-left: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.chef-pic {\n  border-radius: 50%;\n  max-width: 200px;\n  max-height: 200px;\n  width: 100%;\n  height: 100%;\n}\n\n.chef-description {\n  text-align: left;\n  padding-left: 1em;\n  padding-right: 1em;\n  font-size: var(--normal-font-size);\n}\n\n/* menu section */\n.menu-container {\n  font-family: 'Quicksand', sans-serif;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  gap: 5em;\n  max-width: 800px;\n  margin: auto;\n  margin-top: 50px;\n  padding: 5em;\n  align-items: center;\n  background-color: var(--transluscent-black);\n}\n\n.menu-item-container {\n  display: flex;\n  width: 100%;\n  font-size: var(--normal-font-size);\n}\n\n.menu-item-pic {\n  max-width: 200px;\n  max-height: 200px;\n  width: 100%;\n  height: 200px;\n}\n\n.menu-item-description-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-left: 1em;\n  padding-right: .5em;\n}\n\n.menu-item-title-container {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.menu-item-title {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n/* currently does nothing, might use it later if I want a different font size or something */\n.menu-item-description {}\n\n/* contact section */\n.contact-container {\n  color: white;\n  display: flex;\n  flex-direction: column;\n  gap: 1em;\n  max-width: 800px;\n  margin: auto;\n  margin-top: 50px;\n  padding: 2em;\n  align-items: center;\n  background-color: var(--transluscent-black);\n  font-size: var(--normal-font-size);\n  text-align: center;\n}\n\n.contact-container hr {\n  width: 100%;\n}\n\n.contact-description {\n  margin: 0;\n}\n\n.contact-item-container {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  gap:1em;\n}\n\n.contact-item-pic {\n  max-width: 60px;\n  max-height: 60px;\n  width: 100%;\n}\n\n.location {\n  border: 0;\n  margin-top: .5em;\n  max-width: 500px;\n  max-height: 500px;\n  width: 100%;\n  height: 500px;\n}\n\n/* media queries at the end so they have access to all css selectors */\n@media screen and (max-width: 600px) {\n  .chef-container {\n    flex-wrap: wrap;\n  }\n\n  .menu-container {\n    padding-left: 2em;\n    padding-right: 2em;\n  }\n\n  .menu-item-container {\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 1em;\n  }\n}\n\n/* make content fade in when section is changed */\n.home-container, .menu-container, .contact-container {\n  animation: fadein 2s;\n}\n\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _images_den_den_mushi_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/den-den-mushi.png */ "./src/images/den-den-mushi.png");
/* harmony import */ var _images_clock_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/clock-icon.png */ "./src/images/clock-icon.png");



function createContact() {
  const contactContainer = document.createElement('div');
  contactContainer.classList.add('contact-container');
  // add the main description
  const description = document.createElement('p');
  description.classList.add('contact-description');
  description.appendChild(document.createTextNode('Bring your friends and family along with a healthy appetite and come visit Baratie today! (Customers who were recently starving eat free! Devil Fruit users get a 20% discount if they can swim a lap around Baratie!)'));
  contactContainer.appendChild(description);
  contactContainer.appendChild(document.createElement('hr'));

  // build the array for all other contact info
  let contactInfo = [{
    imageUrl: _images_den_den_mushi_png__WEBPACK_IMPORTED_MODULE_0__,
    description: '1-800-Team-Sanji'
  }, {
    imageUrl: _images_clock_icon_png__WEBPACK_IMPORTED_MODULE_1__,
    description: 'Mon-Fri 8AM - 9PM'
  }];
  for (let a = 0; a < contactInfo.length; a++) {
    const currentItem = contactInfo[a];
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('contact-item-container');
    // make contact element pic
    const itemIcon = new Image();
    itemIcon.classList.add('contact-item-pic');
    itemIcon.src = currentItem.imageUrl;
    // make the description of that contact info
    const contactDescription = document.createElement('p');
    contactDescription.appendChild(document.createTextNode(`${currentItem.description}`));
    // add icon and description to the itemContainer
    itemContainer.appendChild(itemIcon);
    itemContainer.appendChild(contactDescription);
    contactContainer.appendChild(itemContainer);
    contactContainer.appendChild(document.createElement('hr'));
  }
  // // add the phone number
  // const phoneNumber = document.createElement('p');
  // phoneNumber.classList.add('phone-number');
  // phoneNumber.appendChild(document.createTextNode('Phone: 1-800-Team-Sanji'));
  // // add all the componenets to contactContainer
  // contactContainer.appendChild(document.createElement('hr'));
  // contactContainer.appendChild(phoneNumber);
  // contactContainer.appendChild(document.createElement('hr'));

  // add the google map location
  const location = document.createElement('iframe');
  location.classList.add('location');
  location.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30634007.87388524!2d-121.16438940000002!3d20.403375450000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f4bd65cc38c57%3A0x67b8d980a619503d!2sBaratie!5e0!3m2!1sen!2sus!4v1627272957658!5m2!1sen!2sus";
  location.allowfullscreen = "";
  location.loading = "lazy";

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
/* harmony import */ var _images_patty_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/patty.png */ "./src/images/patty.png");
/* harmony import */ var _images_carne_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/carne.png */ "./src/images/carne.png");
/* harmony import */ var _images_luffy_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/luffy.jpg */ "./src/images/luffy.jpg");






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
  description.appendChild(document.createTextNode('Meet our staff!'));
  // append the home description to homeContainer
  homeContainer.appendChild(description);
  // now add all the chef pictures and descriptions
  let chefArr = [{
    imageUrl: _images_zeff_jpg__WEBPACK_IMPORTED_MODULE_0__,
    chefTitle: "Head Chef, Zeff",
    chefDescription: "Zeff is the owner of Baratie and has been running the restaurant ever since it's founding in 1776, don't ask him about how he lost his leg, it's a touchy subject.",
  }, {
    imageUrl: _images_sanji_jpg__WEBPACK_IMPORTED_MODULE_1__,
    chefTitle: "Sous Chef, Sanji",
    chefDescription: "Sanji has been training under Zeff since he was little, he's an excellent cook and was going to inherit the restarurant until Straw Hat Luffy came along...",
  }, {
    imageUrl: _images_patty_png__WEBPACK_IMPORTED_MODULE_2__,
    chefTitle: "Patissier, Patty",
    chefDescription: "Patty is in charge of making the desserts at Baratie and is highly skilled with knives. He manages the Sister Anko dessert ship.",
  }, {
    imageUrl: _images_carne_png__WEBPACK_IMPORTED_MODULE_3__,
    chefTitle: "Meat Master, Carne",
    chefDescription: "Carne is one of Baratie's best chefs, specializing in charcuterie and all manner of meat based cuisine. He is in charge of the Nasugasira Teppanyaki ship.",
  }, {
    imageUrl: _images_luffy_jpg__WEBPACK_IMPORTED_MODULE_4__,
    chefTitle: "Chore Boy, Luffy",
    chefDescription: "Straw Hat Luffy deflected a cannonball at Baratie and now serves as a Chore Boy to make up for the damages.",
  }];
  for (let a = 0; a < chefArr.length; a++) {
    const currentChef = chefArr[a];
    // make the containers that will hold the picture and description
    const chefContainer = document.createElement('div');
    chefContainer.classList.add('chef-container');
    // make the chef picture
    const chefPic = new Image();
    chefPic.classList.add('chef-pic');
    chefPic.src = currentChef.imageUrl;
    // make the chef description
    const chefDescription = document.createElement('p');
    chefDescription.classList.add('chef-description');
    chefDescription.appendChild(document.createTextNode(currentChef.chefTitle));
    chefDescription.appendChild(document.createElement('hr'));
    chefDescription.appendChild(document.createTextNode(currentChef.chefDescription));
    chefContainer.appendChild(chefPic);
    chefContainer.appendChild(chefDescription);
    homeContainer.appendChild(chefContainer);
  }
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

/***/ "./src/images/carne.png":
/*!******************************!*\
  !*** ./src/images/carne.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9d879c9c776f66319061.png";

/***/ }),

/***/ "./src/images/chopper.png":
/*!********************************!*\
  !*** ./src/images/chopper.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b562927a355002d74c37.png";

/***/ }),

/***/ "./src/images/clock-icon.png":
/*!***********************************!*\
  !*** ./src/images/clock-icon.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cf49ea1f786214489ac0.png";

/***/ }),

/***/ "./src/images/den-den-mushi.png":
/*!**************************************!*\
  !*** ./src/images/den-den-mushi.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "070edbce6321e9f77e03.png";

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

/***/ "./src/images/luffy.jpg":
/*!******************************!*\
  !*** ./src/images/luffy.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fd2366cafd2337ee58f5.jpg";

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

/***/ "./src/images/patty.png":
/*!******************************!*\
  !*** ./src/images/patty.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4ac8b6e4f483715c3510.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUNPO0FBQ2hHLDRDQUE0Qyw2R0FBa0M7QUFDOUUsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRixtS0FBbUs7QUFDbksseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLGlEQUFpRCw0Q0FBNEMsNEJBQTRCLEdBQUcsVUFBVSxzRUFBc0UsMkJBQTJCLGlDQUFpQyxrQ0FBa0MsNENB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bnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImltYWdlcy9mb29kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9S2FsYW0mZmFtaWx5PUthdXNoYW4rU2NyaXB0JmZhbWlseT1RdWlja3NhbmQ6d2dodEA1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tdHJhbnNsdXNjZW50LWJsYWNrOiByZ2IoMCwgMCwgMCwgLjgyKTtcXG4gIC0tbm9ybWFsLWZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIGZvbnQtZmFtaWx5OiAnS2FsYW0nLCBjdXJzaXZlO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAxcyBlYXNlLWluO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4udGl0bGUtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZm9udC1zaXplOiA4ZW07XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDA7XFxuICBtYXJnaW46IDA7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc2x1c2NlbnQtYmxhY2spO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6ICdLYXVzaGFuIFNjcmlwdCcsIGN1cnNpdmU7XFxufVxcblxcbi5uYXYtYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC8qIGdhcDogNWVtOyAqL1xcbn1cXG5cXG4uc2VjdGlvbi1idXR0b24tY29udGFpbmVyIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbm9ybWFsLWZvbnQtc2l6ZSk7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uc2VjdGlvbi1idXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2VjdGlvbi1idXR0b24tY29udGFpbmVyLXNlbGVjdGVkIHtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCB3aGl0ZTtcXG59XFxuXFxuLnNlY3Rpb24tYnV0dG9uIHtcXG4gIG1hcmdpbjogNXB4O1xcbiAgcGFkZGluZzogNHB4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cyBlYXNlLW91dDtcXG59XFxuXFxuLyogaG9tZSBzZWN0aW9uICovXFxuLmhvbWUtY29udGFpbmVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBwYWRkaW5nOiAyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNsdXNjZW50LWJsYWNrKTtcXG59XFxuXFxuLmhvbWUtZGVzY3JpcHRpb24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAxZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxZW07XFxuICBmb250LXNpemU6IHZhcigtLW5vcm1hbC1mb250LXNpemUpO1xcbn1cXG5cXG4uY2hlZi1jb250YWluZXIge1xcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNoZWYtcGljIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG1heC13aWR0aDogMjAwcHg7XFxuICBtYXgtaGVpZ2h0OiAyMDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY2hlZi1kZXNjcmlwdGlvbiB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZy1sZWZ0OiAxZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxZW07XFxuICBmb250LXNpemU6IHZhcigtLW5vcm1hbC1mb250LXNpemUpO1xcbn1cXG5cXG4vKiBtZW51IHNlY3Rpb24gKi9cXG4ubWVudS1jb250YWluZXIge1xcbiAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVlbTtcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgcGFkZGluZzogNWVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zbHVzY2VudC1ibGFjayk7XFxufVxcblxcbi5tZW51LWl0ZW0tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbm9ybWFsLWZvbnQtc2l6ZSk7XFxufVxcblxcbi5tZW51LWl0ZW0tcGljIHtcXG4gIG1heC13aWR0aDogMjAwcHg7XFxuICBtYXgtaGVpZ2h0OiAyMDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyMDBweDtcXG59XFxuXFxuLm1lbnUtaXRlbS1kZXNjcmlwdGlvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctbGVmdDogMWVtO1xcbiAgcGFkZGluZy1yaWdodDogLjVlbTtcXG59XFxuXFxuLm1lbnUtaXRlbS10aXRsZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLm1lbnUtaXRlbS10aXRsZSB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuLyogY3VycmVudGx5IGRvZXMgbm90aGluZywgbWlnaHQgdXNlIGl0IGxhdGVyIGlmIEkgd2FudCBhIGRpZmZlcmVudCBmb250IHNpemUgb3Igc29tZXRoaW5nICovXFxuLm1lbnUtaXRlbS1kZXNjcmlwdGlvbiB7fVxcblxcbi8qIGNvbnRhY3Qgc2VjdGlvbiAqL1xcbi5jb250YWN0LWNvbnRhaW5lciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMWVtO1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBwYWRkaW5nOiAyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNsdXNjZW50LWJsYWNrKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbm9ybWFsLWZvbnQtc2l6ZSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWN0LWNvbnRhaW5lciBociB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbnRhY3QtZGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uY29udGFjdC1pdGVtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ2FwOjFlbTtcXG59XFxuXFxuLmNvbnRhY3QtaXRlbS1waWMge1xcbiAgbWF4LXdpZHRoOiA2MHB4O1xcbiAgbWF4LWhlaWdodDogNjBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubG9jYXRpb24ge1xcbiAgYm9yZGVyOiAwO1xcbiAgbWFyZ2luLXRvcDogLjVlbTtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICBtYXgtaGVpZ2h0OiA1MDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MDBweDtcXG59XFxuXFxuLyogbWVkaWEgcXVlcmllcyBhdCB0aGUgZW5kIHNvIHRoZXkgaGF2ZSBhY2Nlc3MgdG8gYWxsIGNzcyBzZWxlY3RvcnMgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmNoZWYtY29udGFpbmVyIHtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgfVxcblxcbiAgLm1lbnUtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDJlbTtcXG4gIH1cXG5cXG4gIC5tZW51LWl0ZW0tY29udGFpbmVyIHtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxZW07XFxuICB9XFxufVxcblxcbi8qIG1ha2UgY29udGVudCBmYWRlIGluIHdoZW4gc2VjdGlvbiBpcyBjaGFuZ2VkICovXFxuLmhvbWUtY29udGFpbmVyLCAubWVudS1jb250YWluZXIsIC5jb250YWN0LWNvbnRhaW5lciB7XFxuICBhbmltYXRpb246IGZhZGVpbiAycztcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlaW4ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltd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Q0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsUUFBUTtFQUNWO0FBQ0Y7O0FBRUEsaURBQWlEO0FBQ2pEO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1LYWxhbSZmYW1pbHk9S2F1c2hhbitTY3JpcHQmZmFtaWx5PVF1aWNrc2FuZDp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAtLXRyYW5zbHVzY2VudC1ibGFjazogcmdiKDAsIDAsIDAsIC44Mik7XFxuICAtLW5vcm1hbC1mb250LXNpemU6IDJlbTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlcy9mb29kLmpwZycpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICBmb250LWZhbWlseTogJ0thbGFtJywgY3Vyc2l2ZTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMXMgZWFzZS1pbjtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnRpdGxlLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogOGVtO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7ICovXFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNsdXNjZW50LWJsYWNrKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiAnS2F1c2hhbiBTY3JpcHQnLCBjdXJzaXZlO1xcbn1cXG5cXG4ubmF2LWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAvKiBnYXA6IDVlbTsgKi9cXG59XFxuXFxuLnNlY3Rpb24tYnV0dG9uLWNvbnRhaW5lciB7XFxuICBmb250LXNpemU6IHZhcigtLW5vcm1hbC1mb250LXNpemUpO1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnNlY3Rpb24tYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNlY3Rpb24tYnV0dG9uLWNvbnRhaW5lci1zZWxlY3RlZCB7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggd2hpdGU7XFxufVxcblxcbi5zZWN0aW9uLWJ1dHRvbiB7XFxuICBtYXJnaW46IDVweDtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXMgZWFzZS1vdXQ7XFxufVxcblxcbi8qIGhvbWUgc2VjdGlvbiAqL1xcbi5ob21lLWNvbnRhaW5lciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgcGFkZGluZzogMmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zbHVzY2VudC1ibGFjayk7XFxufVxcblxcbi5ob21lLWRlc2NyaXB0aW9uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogMWVtO1xcbiAgcGFkZGluZy1yaWdodDogMWVtO1xcbiAgZm9udC1zaXplOiB2YXIoLS1ub3JtYWwtZm9udC1zaXplKTtcXG59XFxuXFxuLmNoZWYtY29udGFpbmVyIHtcXG4gIHBhZGRpbmctbGVmdDogMzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jaGVmLXBpYyB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXgtd2lkdGg6IDIwMHB4O1xcbiAgbWF4LWhlaWdodDogMjAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNoZWYtZGVzY3JpcHRpb24ge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmctbGVmdDogMWVtO1xcbiAgcGFkZGluZy1yaWdodDogMWVtO1xcbiAgZm9udC1zaXplOiB2YXIoLS1ub3JtYWwtZm9udC1zaXplKTtcXG59XFxuXFxuLyogbWVudSBzZWN0aW9uICovXFxuLm1lbnUtY29udGFpbmVyIHtcXG4gIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1ZW07XFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIHBhZGRpbmc6IDVlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc2x1c2NlbnQtYmxhY2spO1xcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IHZhcigtLW5vcm1hbC1mb250LXNpemUpO1xcbn1cXG5cXG4ubWVudS1pdGVtLXBpYyB7XFxuICBtYXgtd2lkdGg6IDIwMHB4O1xcbiAgbWF4LWhlaWdodDogMjAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjAwcHg7XFxufVxcblxcbi5tZW51LWl0ZW0tZGVzY3JpcHRpb24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWxlZnQ6IDFlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IC41ZW07XFxufVxcblxcbi5tZW51LWl0ZW0tdGl0bGUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5tZW51LWl0ZW0tdGl0bGUge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi8qIGN1cnJlbnRseSBkb2VzIG5vdGhpbmcsIG1pZ2h0IHVzZSBpdCBsYXRlciBpZiBJIHdhbnQgYSBkaWZmZXJlbnQgZm9udCBzaXplIG9yIHNvbWV0aGluZyAqL1xcbi5tZW51LWl0ZW0tZGVzY3JpcHRpb24ge31cXG5cXG4vKiBjb250YWN0IHNlY3Rpb24gKi9cXG4uY29udGFjdC1jb250YWluZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFlbTtcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgcGFkZGluZzogMmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zbHVzY2VudC1ibGFjayk7XFxuICBmb250LXNpemU6IHZhcigtLW5vcm1hbC1mb250LXNpemUpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY29udGFjdC1jb250YWluZXIgaHIge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb250YWN0LWRlc2NyaXB0aW9uIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmNvbnRhY3QtaXRlbS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdhcDoxZW07XFxufVxcblxcbi5jb250YWN0LWl0ZW0tcGljIHtcXG4gIG1heC13aWR0aDogNjBweDtcXG4gIG1heC1oZWlnaHQ6IDYwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmxvY2F0aW9uIHtcXG4gIGJvcmRlcjogMDtcXG4gIG1hcmdpbi10b3A6IC41ZW07XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgbWF4LWhlaWdodDogNTAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTAwcHg7XFxufVxcblxcbi8qIG1lZGlhIHF1ZXJpZXMgYXQgdGhlIGVuZCBzbyB0aGV5IGhhdmUgYWNjZXNzIHRvIGFsbCBjc3Mgc2VsZWN0b3JzICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5jaGVmLWNvbnRhaW5lciB7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIH1cXG5cXG4gIC5tZW51LWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmctbGVmdDogMmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyZW07XFxuICB9XFxuXFxuICAubWVudS1pdGVtLWNvbnRhaW5lciB7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMWVtO1xcbiAgfVxcbn1cXG5cXG4vKiBtYWtlIGNvbnRlbnQgZmFkZSBpbiB3aGVuIHNlY3Rpb24gaXMgY2hhbmdlZCAqL1xcbi5ob21lLWNvbnRhaW5lciwgLm1lbnUtY29udGFpbmVyLCAuY29udGFjdC1jb250YWluZXIge1xcbiAgYW5pbWF0aW9uOiBmYWRlaW4gMnM7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZWluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGRlbmRlbiBmcm9tICcuL2ltYWdlcy9kZW4tZGVuLW11c2hpLnBuZyc7XG5pbXBvcnQgY2xvY2sgZnJvbSAnLi9pbWFnZXMvY2xvY2staWNvbi5wbmcnO1xuXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xuICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1jb250YWluZXInKTtcbiAgLy8gYWRkIHRoZSBtYWluIGRlc2NyaXB0aW9uXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWRlc2NyaXB0aW9uJyk7XG4gIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdCcmluZyB5b3VyIGZyaWVuZHMgYW5kIGZhbWlseSBhbG9uZyB3aXRoIGEgaGVhbHRoeSBhcHBldGl0ZSBhbmQgY29tZSB2aXNpdCBCYXJhdGllIHRvZGF5ISAoQ3VzdG9tZXJzIHdobyB3ZXJlIHJlY2VudGx5IHN0YXJ2aW5nIGVhdCBmcmVlISBEZXZpbCBGcnVpdCB1c2VycyBnZXQgYSAyMCUgZGlzY291bnQgaWYgdGhleSBjYW4gc3dpbSBhIGxhcCBhcm91bmQgQmFyYXRpZSEpJykpO1xuICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpKTtcblxuICAvLyBidWlsZCB0aGUgYXJyYXkgZm9yIGFsbCBvdGhlciBjb250YWN0IGluZm9cbiAgbGV0IGNvbnRhY3RJbmZvID0gW3tcbiAgICBpbWFnZVVybDogZGVuZGVuLFxuICAgIGRlc2NyaXB0aW9uOiAnMS04MDAtVGVhbS1TYW5qaSdcbiAgfSwge1xuICAgIGltYWdlVXJsOiBjbG9jayxcbiAgICBkZXNjcmlwdGlvbjogJ01vbi1GcmkgOEFNIC0gOVBNJ1xuICB9XTtcbiAgZm9yIChsZXQgYSA9IDA7IGEgPCBjb250YWN0SW5mby5sZW5ndGg7IGErKykge1xuICAgIGNvbnN0IGN1cnJlbnRJdGVtID0gY29udGFjdEluZm9bYV07XG4gICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1pdGVtLWNvbnRhaW5lcicpO1xuICAgIC8vIG1ha2UgY29udGFjdCBlbGVtZW50IHBpY1xuICAgIGNvbnN0IGl0ZW1JY29uID0gbmV3IEltYWdlKCk7XG4gICAgaXRlbUljb24uY2xhc3NMaXN0LmFkZCgnY29udGFjdC1pdGVtLXBpYycpO1xuICAgIGl0ZW1JY29uLnNyYyA9IGN1cnJlbnRJdGVtLmltYWdlVXJsO1xuICAgIC8vIG1ha2UgdGhlIGRlc2NyaXB0aW9uIG9mIHRoYXQgY29udGFjdCBpbmZvXG4gICAgY29uc3QgY29udGFjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRhY3REZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgJHtjdXJyZW50SXRlbS5kZXNjcmlwdGlvbn1gKSk7XG4gICAgLy8gYWRkIGljb24gYW5kIGRlc2NyaXB0aW9uIHRvIHRoZSBpdGVtQ29udGFpbmVyXG4gICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtSWNvbik7XG4gICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0RGVzY3JpcHRpb24pO1xuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbUNvbnRhaW5lcik7XG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpKTtcbiAgfVxuICAvLyAvLyBhZGQgdGhlIHBob25lIG51bWJlclxuICAvLyBjb25zdCBwaG9uZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgLy8gcGhvbmVOdW1iZXIuY2xhc3NMaXN0LmFkZCgncGhvbmUtbnVtYmVyJyk7XG4gIC8vIHBob25lTnVtYmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdQaG9uZTogMS04MDAtVGVhbS1TYW5qaScpKTtcbiAgLy8gLy8gYWRkIGFsbCB0aGUgY29tcG9uZW5ldHMgdG8gY29udGFjdENvbnRhaW5lclxuICAvLyBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJykpO1xuICAvLyBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHBob25lTnVtYmVyKTtcbiAgLy8gY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpKTtcblxuICAvLyBhZGQgdGhlIGdvb2dsZSBtYXAgbG9jYXRpb25cbiAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgbG9jYXRpb24uY2xhc3NMaXN0LmFkZCgnbG9jYXRpb24nKTtcbiAgbG9jYXRpb24uc3JjID0gXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQzMDYzNDAwNy44NzM4ODUyNCEyZC0xMjEuMTY0Mzg5NDAwMDAwMDIhM2QyMC40MDMzNzU0NTAwMDAwMDIhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDg0MmY0YmQ2NWNjMzhjNTclM0EweDY3YjhkOTgwYTYxOTUwM2QhMnNCYXJhdGllITVlMCEzbTIhMXNlbiEyc3VzITR2MTYyNzI3Mjk1NzY1OCE1bTIhMXNlbiEyc3VzXCI7XG4gIGxvY2F0aW9uLmFsbG93ZnVsbHNjcmVlbiA9IFwiXCI7XG4gIGxvY2F0aW9uLmxvYWRpbmcgPSBcImxhenlcIjtcblxuICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcbiAgcmV0dXJuIGNvbnRhY3RDb250YWluZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbnRhY3Q7XG4iLCJpbXBvcnQgemVmZiBmcm9tICcuL2ltYWdlcy96ZWZmLmpwZyc7XG5pbXBvcnQgc2FuamkgZnJvbSAnLi9pbWFnZXMvc2FuamkuanBnJztcbmltcG9ydCBwYXR0eSBmcm9tICcuL2ltYWdlcy9wYXR0eS5wbmcnO1xuaW1wb3J0IGNhcm5lIGZyb20gJy4vaW1hZ2VzL2Nhcm5lLnBuZyc7XG5pbXBvcnQgbHVmZnkgZnJvbSAnLi9pbWFnZXMvbHVmZnkuanBnJztcblxuZnVuY3Rpb24gY3JlYXRlSG9tZSgpIHtcbiAgY29uc3QgaG9tZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBob21lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hvbWUtY29udGFpbmVyJyk7XG4gIC8vIG1ha2UgdGhlIGRlc2NyaXB0aW9uIGZvciB0aGUgcmVzdGF1cmFudFxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnaG9tZS1kZXNjcmlwdGlvbicpO1xuICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnQ29tZSBvbmUsIGNvbWUgYWxsIHRvIEJhcmF0aWUsIHRoZSBmbG9hdGluZyByZXN0dWFyYW50IScpKTtcbiAgZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG4gIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiVXNpbmcgZnJlc2ggaW5ncmVkaWVudHMgbG9jYWxseSBzb3VyY2VkIGZyb20gdGhlIEVhc3QgQmx1ZSwgd2Ugc2VydmUgd29ybGQgY2xhc3MgY3Vpc2luZSB0byBzYWlsb3JzIGFuZCBwaXJhdGVzIGFsaWtlLlwiKSk7XG4gIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJykpO1xuICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnTWVldCBvdXIgc3RhZmYhJykpO1xuICAvLyBhcHBlbmQgdGhlIGhvbWUgZGVzY3JpcHRpb24gdG8gaG9tZUNvbnRhaW5lclxuICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgLy8gbm93IGFkZCBhbGwgdGhlIGNoZWYgcGljdHVyZXMgYW5kIGRlc2NyaXB0aW9uc1xuICBsZXQgY2hlZkFyciA9IFt7XG4gICAgaW1hZ2VVcmw6IHplZmYsXG4gICAgY2hlZlRpdGxlOiBcIkhlYWQgQ2hlZiwgWmVmZlwiLFxuICAgIGNoZWZEZXNjcmlwdGlvbjogXCJaZWZmIGlzIHRoZSBvd25lciBvZiBCYXJhdGllIGFuZCBoYXMgYmVlbiBydW5uaW5nIHRoZSByZXN0YXVyYW50IGV2ZXIgc2luY2UgaXQncyBmb3VuZGluZyBpbiAxNzc2LCBkb24ndCBhc2sgaGltIGFib3V0IGhvdyBoZSBsb3N0IGhpcyBsZWcsIGl0J3MgYSB0b3VjaHkgc3ViamVjdC5cIixcbiAgfSwge1xuICAgIGltYWdlVXJsOiBzYW5qaSxcbiAgICBjaGVmVGl0bGU6IFwiU291cyBDaGVmLCBTYW5qaVwiLFxuICAgIGNoZWZEZXNjcmlwdGlvbjogXCJTYW5qaSBoYXMgYmVlbiB0cmFpbmluZyB1bmRlciBaZWZmIHNpbmNlIGhlIHdhcyBsaXR0bGUsIGhlJ3MgYW4gZXhjZWxsZW50IGNvb2sgYW5kIHdhcyBnb2luZyB0byBpbmhlcml0IHRoZSByZXN0YXJ1cmFudCB1bnRpbCBTdHJhdyBIYXQgTHVmZnkgY2FtZSBhbG9uZy4uLlwiLFxuICB9LCB7XG4gICAgaW1hZ2VVcmw6IHBhdHR5LFxuICAgIGNoZWZUaXRsZTogXCJQYXRpc3NpZXIsIFBhdHR5XCIsXG4gICAgY2hlZkRlc2NyaXB0aW9uOiBcIlBhdHR5IGlzIGluIGNoYXJnZSBvZiBtYWtpbmcgdGhlIGRlc3NlcnRzIGF0IEJhcmF0aWUgYW5kIGlzIGhpZ2hseSBza2lsbGVkIHdpdGgga25pdmVzLiBIZSBtYW5hZ2VzIHRoZSBTaXN0ZXIgQW5rbyBkZXNzZXJ0IHNoaXAuXCIsXG4gIH0sIHtcbiAgICBpbWFnZVVybDogY2FybmUsXG4gICAgY2hlZlRpdGxlOiBcIk1lYXQgTWFzdGVyLCBDYXJuZVwiLFxuICAgIGNoZWZEZXNjcmlwdGlvbjogXCJDYXJuZSBpcyBvbmUgb2YgQmFyYXRpZSdzIGJlc3QgY2hlZnMsIHNwZWNpYWxpemluZyBpbiBjaGFyY3V0ZXJpZSBhbmQgYWxsIG1hbm5lciBvZiBtZWF0IGJhc2VkIGN1aXNpbmUuIEhlIGlzIGluIGNoYXJnZSBvZiB0aGUgTmFzdWdhc2lyYSBUZXBwYW55YWtpIHNoaXAuXCIsXG4gIH0sIHtcbiAgICBpbWFnZVVybDogbHVmZnksXG4gICAgY2hlZlRpdGxlOiBcIkNob3JlIEJveSwgTHVmZnlcIixcbiAgICBjaGVmRGVzY3JpcHRpb246IFwiU3RyYXcgSGF0IEx1ZmZ5IGRlZmxlY3RlZCBhIGNhbm5vbmJhbGwgYXQgQmFyYXRpZSBhbmQgbm93IHNlcnZlcyBhcyBhIENob3JlIEJveSB0byBtYWtlIHVwIGZvciB0aGUgZGFtYWdlcy5cIixcbiAgfV07XG4gIGZvciAobGV0IGEgPSAwOyBhIDwgY2hlZkFyci5sZW5ndGg7IGErKykge1xuICAgIGNvbnN0IGN1cnJlbnRDaGVmID0gY2hlZkFyclthXTtcbiAgICAvLyBtYWtlIHRoZSBjb250YWluZXJzIHRoYXQgd2lsbCBob2xkIHRoZSBwaWN0dXJlIGFuZCBkZXNjcmlwdGlvblxuICAgIGNvbnN0IGNoZWZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaGVmQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NoZWYtY29udGFpbmVyJyk7XG4gICAgLy8gbWFrZSB0aGUgY2hlZiBwaWN0dXJlXG4gICAgY29uc3QgY2hlZlBpYyA9IG5ldyBJbWFnZSgpO1xuICAgIGNoZWZQaWMuY2xhc3NMaXN0LmFkZCgnY2hlZi1waWMnKTtcbiAgICBjaGVmUGljLnNyYyA9IGN1cnJlbnRDaGVmLmltYWdlVXJsO1xuICAgIC8vIG1ha2UgdGhlIGNoZWYgZGVzY3JpcHRpb25cbiAgICBjb25zdCBjaGVmRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY2hlZkRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2NoZWYtZGVzY3JpcHRpb24nKTtcbiAgICBjaGVmRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3VycmVudENoZWYuY2hlZlRpdGxlKSk7XG4gICAgY2hlZkRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJykpO1xuICAgIGNoZWZEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjdXJyZW50Q2hlZi5jaGVmRGVzY3JpcHRpb24pKTtcbiAgICBjaGVmQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWZQaWMpO1xuICAgIGNoZWZDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlZkRlc2NyaXB0aW9uKTtcbiAgICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWZDb250YWluZXIpO1xuICB9XG4gIHJldHVybiBob21lQ29udGFpbmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb21lO1xuIiwiaW1wb3J0IHNhc2hpbWkgZnJvbSAnLi9pbWFnZXMvc2FzaGltaS5qcGcnO1xuaW1wb3J0IHNlYWZvb2RSaXNvdHRvIGZyb20gJy4vaW1hZ2VzL3NlYWZvb2Qtcmlzb3R0by5qcGcnO1xuaW1wb3J0IG1lYXRiYWxscyBmcm9tICcuL2ltYWdlcy9tZWF0YmFsbHMuanBnJztcbmltcG9ydCBzb2JhIGZyb20gJy4vaW1hZ2VzL3NvYmEtbm9vZGxlcy5qcGcnO1xuaW1wb3J0IG1lYXQgZnJvbSAnLi9pbWFnZXMvbWVhdC5wbmcnO1xuaW1wb3J0IGJlbnRvIGZyb20gJy4vaW1hZ2VzL2JlbnRvLnBuZyc7XG5pbXBvcnQgb3NoaXJ1a28gZnJvbSAnLi9pbWFnZXMvb3NoaXJ1a28ucG5nJztcbmltcG9ydCBhbGlnb3QgZnJvbSAnLi9pbWFnZXMvYWxpZ290LnBuZyc7XG5pbXBvcnQgY2hvcHBlciBmcm9tICcuL2ltYWdlcy9jaG9wcGVyLnBuZyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRhaW5lcicpO1xuICAvLyBtYWtlIHRoZSBhcnJheSB3aXRoIG9iamVjdHMgdGhhdCBoYXZlIHRoZSBpbmZvcm1hdGlvbiBmb3IgZWFjaCBtZW51IGl0ZW1cbiAgbGV0IGl0ZW1BcnIgPSBbe1xuICAgIGltYWdlVXJsOiBzYXNoaW1pLFxuICAgIGl0ZW1UaXRsZTogXCJTYXNoaW1pIFBsYXR0ZXJcIixcbiAgICBpdGVtUHJpY2U6IDE4LjAwLFxuICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJCbHVlZmluIHR1bmEgYW5kIHRvcm8gc2xpY2VzLCBhIHN0YXBsZSBvZiBmaW5lIGRpbmluZy5cIlxuICB9LCB7XG4gICAgaW1hZ2VVcmw6IHNlYWZvb2RSaXNvdHRvLFxuICAgIGl0ZW1UaXRsZTogXCJTZWFmb29kIFJpc290dG9cIixcbiAgICBpdGVtUHJpY2U6IDEyLjAwLFxuICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJCdXR0ZXJ5IFJpc290dG8gc2VydmVkIHdpdGggc2hyaW1wLCBvY3RvcHVzLCBhbmQgY2FsYW1hcmkuXCJcbiAgfSwge1xuICAgIGltYWdlVXJsOiBtZWF0YmFsbHMsXG4gICAgaXRlbVRpdGxlOiBcIlNpZ25hdHVyZSBNZWF0YmFsbHNcIixcbiAgICBpdGVtUHJpY2U6IDE1LjAwLFxuICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJPbmUgb2YgU2FuamkncyBzaWduYXR1cmUgZGlzaGVzLiBUaGVzZSBtZWF0YmFsbHMgYXJlIHRvIGRpZSBmb3IuLi4gTGl0ZXJhbGx5LCBMdWZmeSBhbG1vc3QgZGllZCBhdCBHNSBmb3IgdGhlc2UuLi5cIlxuICB9LCB7XG4gICAgaW1hZ2VVcmw6IG1lYXQsXG4gICAgaXRlbVRpdGxlOiBcIk15c3RlcnkgTWVhdFwiLFxuICAgIGl0ZW1QcmljZTogMTAuMDAsXG4gICAgaXRlbURlc2NyaXB0aW9uOiBcIkZlZWxpbmcgZnJpc2t5PyBUcnkgb3VyIE15c3RlcnkgTWVhdCwgaXQgY2hhbmdlcyBldmVyeSB3ZWVrIVwiXG4gIH0sIHtcbiAgICBpbWFnZVVybDogc29iYSxcbiAgICBpdGVtVGl0bGU6IFwiU29iYSBOb29kbGVzXCIsXG4gICAgaXRlbVByaWNlOiA4LjAwLFxuICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJTYW5qaSBzZXJ2ZWQgdGhpcyBkaXNoIGV4dGVuc2l2ZWx5IGF0IHRoZSBsYW5kIG9mIFdhbm8sIHRvdGFsbHkgb3V0IG9mIHRoZSBnb29kbmVzcyBvZiBoaXMgaGVhcnQgYW5kIG5vdCBzbyBoZSBjYW4gdHJ5IGFuZCBzY29yZSB3aXRoIHRoZSBXYW5vIGxhZGllcy4uLlwiXG4gIH0sIHtcbiAgICBpbWFnZVVybDogYmVudG8sXG4gICAgaXRlbVRpdGxlOiBcIkNoZWYncyBDaG9pY2UgQmVudG8gQm94XCIsXG4gICAgaXRlbVByaWNlOiAyNS4wMCxcbiAgICBpdGVtRGVzY3JpcHRpb246IFwiT24gb25lIHRoZSBkYXlzIHByZWNlZGluZyBTYW5qaSBhbmQgUHVkZGluZydzIHdlZGRpbmcsIFNhbmppIG1hZGUgdGhpcyBCZW50byBib3ggZm9yIFB1ZGRpbmcuIEl0IGlzIGNvbXByaXNlZCBvZiBhbGwgdGhlIFN0cmF3IEhhdCBQaXJhdGVzJyBmYXZvcml0ZSBmb29kcy5cIlxuICB9LCB7XG4gICAgaW1hZ2VVcmw6IGFsaWdvdCxcbiAgICBpdGVtVGl0bGU6IFwiQWxpZ290XCIsXG4gICAgaXRlbVByaWNlOiAxNi4wMCxcbiAgICBpdGVtRGVzY3JpcHRpb246IFwiVGhpY2sgc2xpY2VzIG9mIGZpbGV0IHNlcnZlZCB3aXRoIHBvdGF0b2VzIGFuZCBhIGRlbGVjdGFibGUsIGNoZWVzeSBmb25kdWUgc2F1Y2UuXCJcbiAgfSwge1xuICAgIGltYWdlVXJsOiBvc2hpcnVrbyxcbiAgICBpdGVtVGl0bGU6IFwiT3NoaXJ1a29cIixcbiAgICBpdGVtUHJpY2U6IDUuMDAsXG4gICAgaXRlbURlc2NyaXB0aW9uOiBcIlJlZCBiZWFuIHNvdXAgd2l0aCBtb2NoaSBjYWtlcy4gRG9uJ3QgdGVsbCBCaWcgTW9tIHdlIHNlcnZlIHRoaXMuLi5cIlxuICB9LCB7XG4gICAgaW1hZ2VVcmw6IGNob3BwZXIsXG4gICAgaXRlbVRpdGxlOiBcIkVtZXJnZW5jeSBSYXRpb25zXCIsXG4gICAgaXRlbVByaWNlOiA1LjAwLFxuICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJJbiB0aGUgZXZlbnQgb2YgYW4gZXh0cmVtZSBmb29kIHNob3J0YWdlLCBDYXB0YWluIFN0cmF3IEhhdCBMdWZmeSBoYXMgZ2l2ZW4gdXMgcGVybWlzc2lvbiB0byBzZXJ2ZSBUb255IFRvbnkgQ2hvcHBlciwgYSBtZW1lYmVyIG9mIHRoZSBzdHJhdyBoYXQgY3JldyBhcyBhbiBlbWVyZ2VuY3kgcmF0aW9uLi4uXCJcbiAgfV07XG4gIC8vIGxvb3AgdGhyb3VnaCBhbGwgdGhlIGl0ZW1zIGluIGl0ZW1BcnIgYW5kIGNyZWF0ZSBET00gZWxlbWVudHMgZm9yIHRoZW1cbiAgZm9yIChsZXQgYSA9IDA7IGEgPCBpdGVtQXJyLmxlbmd0aDsgYSsrKSB7XG4gICAgY29uc3QgY3VycmVudEl0ZW0gPSBpdGVtQXJyW2FdO1xuICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1jb250YWluZXInKTtcbiAgICAvLyBtYWtlIHRoZSBtZW51IGl0ZW0gcGljdHVyZVxuICAgIGNvbnN0IGl0ZW1QaWMgPSBuZXcgSW1hZ2UoKTtcbiAgICBpdGVtUGljLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1waWMnKTtcbiAgICBpdGVtUGljLnNyYyA9IGN1cnJlbnRJdGVtLmltYWdlVXJsO1xuICAgIC8vIG1ha2UgY29udGFpbmVyIGZvciBpdGVtIHRpdGxlIGFuZCBkZXNjcmlwdGlvblxuICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1EZXNjcmlwdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tZGVzY3JpcHRpb24tY29udGFpbmVyJyk7XG4gICAgLy8gbWFrZSB0aGUgY29udGFpbmVyIGZvciBtZW51IGl0ZW0gbmFtZSBhbmQgcHJpY2VcbiAgICBjb25zdCBpdGVtVGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtVGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLXRpdGxlLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpdGVtVGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLXRpdGxlJyk7XG4gICAgaXRlbVRpdGxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke2N1cnJlbnRJdGVtLml0ZW1UaXRsZX1gKSk7XG4gICAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGl0ZW1QcmljZS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tdGl0bGUnKTtcbiAgICBpdGVtUHJpY2UuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCQke2N1cnJlbnRJdGVtLml0ZW1QcmljZX1gKSk7XG4gICAgLy8gYWRkIHRoZSB0aXRsZSBhbmQgcHJpY2UgdG8gdGhlIGNvbnRhaW5lclxuICAgIGl0ZW1UaXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtVGl0bGUpO1xuICAgIGl0ZW1UaXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtUHJpY2UpO1xuICAgIC8vIG1ha2UgdGhlIG1lbnUgaXRlbSBkZXNjcmlwdGlvblxuICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tZGVzY3JpcHRpb24nKTtcbiAgICBpdGVtRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKSk7XG4gICAgaXRlbURlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke2N1cnJlbnRJdGVtLml0ZW1EZXNjcmlwdGlvbn1gKSk7XG4gICAgLy8gYWRkIHRoZSB0aXRsZSBhbmQgdGhlIGRlc2NyaXB0aW9uIHRvIHRoZSBjb250YWluZXJcbiAgICBpdGVtRGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbVRpdGxlQ29udGFpbmVyKTtcbiAgICBpdGVtRGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbURlc2NyaXB0aW9uKTtcbiAgICAvLyBhZGQgdGhlIGltYWdlIGFuZCB0aGUgZnVsbCB0aXRsZSBhbmQgZGVzY3JpcHRpb24gdG8gdGhlIGl0ZW1Db250YWluZXJcbiAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1QaWMpO1xuICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbURlc2NyaXB0aW9uQ29udGFpbmVyKTtcbiAgICAvLyBmaW5hbGx5LCBhcHBlbmQgdGhlIGl0ZW1Db250YWluZXIgdG8gdGhlIG1lbnVDb250YWluZXJcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1Db250YWluZXIpO1xuICB9XG5cbiAgcmV0dXJuIG1lbnVDb250YWluZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGNyZWF0ZUhvbWUgZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCBjcmVhdGVNZW51IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgY3JlYXRlQ29udGFjdCBmcm9tICcuL2NvbnRhY3QuanMnO1xuXG4vLyBpbXBvcnQgdGhlIGltYWdlIGJhY2tncm91bmRzIGZvciB0aGUgdGhyZWUgc2VjdGlvbnNcbmltcG9ydCBob21lQmFja2dyb3VuZCBmcm9tICcuL2ltYWdlcy9mb29kLmpwZyc7XG5pbXBvcnQgbWVudUJhY2tncm91bmQgZnJvbSAnLi9pbWFnZXMvZm9vZDIuanBnJztcbmltcG9ydCBjb250YWN0QmFja2dyb3VuZCBmcm9tICcuL2ltYWdlcy9lYXRpbmctdG9nZXRoZXIucG5nJztcblxubGV0IGhvbWVDb250ZW50O1xubGV0IG1lbnVDb250ZW50O1xubGV0IGNvbnRhY3RDb250ZW50O1xuXG5sZXQgY3VycmVudFNlY3Rpb247XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgLy8gY3JlYXRlIHRoZSB0aXRsZSB0ZXh0XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWNvbnRhaW5lcicpO1xuICB0aXRsZS5pbm5lckhUTUwgPSAnPHAgY2xhc3M9XCJ0aXRsZVwiPkJhcmF0aWU8L3A+JztcbiAgLy8gY3JlYXRlIHRoZSB0aHJlZSBjYXRlZ29yeSBidXR0b25zXG4gIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBuYXZCYXIuY2xhc3NMaXN0LmFkZCgnbmF2LWJhcicpO1xuICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi1idXR0b24tY29udGFpbmVyJyk7XG4gIGhvbWVCdXR0b24uaWQgPSBcImhvbWVCdXR0b25cIjtcbiAgaG9tZUJ1dHRvbi5pbm5lckhUTUwgKz0gJzxwIGNsYXNzPVwic2VjdGlvbi1idXR0b25cIj5Ib21lPC9wPic7XG4gIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi1idXR0b24tY29udGFpbmVyLXNlbGVjdGVkJyk7XG4gIGhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBjaGFuZ2VTZWN0aW9uKCdob21lJywgbmF2QmFyKTtcbiAgfSk7XG4gIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWJ1dHRvbi1jb250YWluZXInKTtcbiAgbWVudUJ1dHRvbi5pZCA9IFwibWVudUJ1dHRvblwiO1xuICBtZW51QnV0dG9uLmlubmVySFRNTCArPSAnPHAgY2xhc3M9XCJzZWN0aW9uLWJ1dHRvblwiPk1lbnU8L3A+JztcbiAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGNoYW5nZVNlY3Rpb24oJ21lbnUnLCBuYXZCYXIpO1xuICB9KTtcbiAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24tYnV0dG9uLWNvbnRhaW5lcicpO1xuICBjb250YWN0QnV0dG9uLmlkID0gXCJjb250YWN0QnV0dG9uXCI7XG4gIGNvbnRhY3RCdXR0b24uaW5uZXJIVE1MICs9ICc8cCBjbGFzcz1cInNlY3Rpb24tYnV0dG9uXCI+Q29udGFjdDwvcD4nO1xuICBjb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY2hhbmdlU2VjdGlvbignY29udGFjdCcsIG5hdkJhcik7XG4gIH0pO1xuICAvLyBhZGQgYWxsIHRoZSB0aHJlZSBzZWN0aW9ucyB0byB0aGUgaGVhZGVyXG4gIG5hdkJhci5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcbiAgbmF2QmFyLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuICBuYXZCYXIuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbik7XG4gIC8vIGFwcGVuZCB0aXRsZSBhbmQgdGhlIHNlY3Rpb24gYnV0dG9ucyB0byB0aGUgaGVhZGVyXG4gIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChuYXZCYXIpO1xuICAvLyBhcHBlbmQgdGhlIGhlYWRlciB0byB0aGUgZG9jdW1lbnQgYm9keVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVNlY3Rpb24obmV3U2VjdGlvbiwgbmF2QmFyKSB7XG4gIC8vIHJlbW92ZSB0aGUgdW5kZXJsaW5lIGZyb20gdGhlIG9sZCBzZWN0aW9uXG4gIG5hdkJhci5xdWVyeVNlbGVjdG9yKGAjJHtjdXJyZW50U2VjdGlvbn1CdXR0b25gKS5jbGFzc0xpc3QucmVtb3ZlKCdzZWN0aW9uLWJ1dHRvbi1jb250YWluZXItc2VsZWN0ZWQnKTtcbiAgLy8gdW5kZXJsaW5lIHRoZSBuZXcgc2VjdGlvblxuICBuYXZCYXIucXVlcnlTZWxlY3RvcihgIyR7bmV3U2VjdGlvbn1CdXR0b25gKS5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWJ1dHRvbi1jb250YWluZXItc2VsZWN0ZWQnKTtcbiAgLy8gZGlzcGxheSB0aGUgbmV3IHNlY3Rpb24ncyBjb250ZW50XG4gIGlmIChjdXJyZW50U2VjdGlvbiAhPSBuZXdTZWN0aW9uKSB7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgLy8gYWN0dWFsbHkgc3dpdGNoIHRvIHRoZSBuZXcgY29udGVudFxuICAgIHN3aXRjaCAobmV3U2VjdGlvbikge1xuICAgICAgY2FzZSAnaG9tZSc6XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaG9tZUNvbnRlbnQpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtob21lQmFja2dyb3VuZH0pYDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtZW51JzpcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtZW51Q29udGVudCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke21lbnVCYWNrZ3JvdW5kfSlgO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NvbnRhY3QnOlxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhY3RDb250ZW50KTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7Y29udGFjdEJhY2tncm91bmR9KWA7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjdXJyZW50U2VjdGlvbiA9IG5ld1NlY3Rpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZFdlYnNpdGUoKSB7XG4gIGNyZWF0ZUhlYWRlcigpO1xuICBob21lQ29udGVudCA9IGNyZWF0ZUhvbWUoKTtcbiAgbWVudUNvbnRlbnQgPSBjcmVhdGVNZW51KCk7XG4gIGNvbnRhY3RDb250ZW50ID0gY3JlYXRlQ29udGFjdCgpO1xuICAvLyBpbml0aWFsbHkgZGlzcGxheSB0aGUgaG9tZSBzZWN0aW9uXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaG9tZUNvbnRlbnQpO1xuICBjdXJyZW50U2VjdGlvbiA9IFwiaG9tZVwiO1xufVxuXG5mdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y3VycmVudFNlY3Rpb259LWNvbnRhaW5lcmApKTtcbn1cblxubG9hZFdlYnNpdGUoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=