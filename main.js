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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --transluscent-black: rgb(0, 0, 0, .82);\n  --normal-font-size: 2em;\n}\n\nbody {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-attachment: fixed;\n  font-family: 'Kalam', cursive;\n  transition: background-image 1s ease-in;\n  margin: 0;\n}\n\n.title-container {\n  width: 100%;\n  text-align: center;\n}\n\n.title {\n  font-size: 8em;\n  padding: 30px;\n  padding-bottom: 0;\n  margin: 0;\n  /* background-color: black; */\n}\n\n.header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: var(--transluscent-black);\n  color: white;\n  font-family: 'Kaushan Script', cursive;\n}\n\n.nav-bar {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  /* gap: 5em; */\n}\n\n.section-button-container {\n  font-size: var(--normal-font-size);\n  margin: 0px;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-bottom: 10px;\n}\n\n.section-button:hover {\n  transform: translateY(-8px);\n  cursor: pointer;\n}\n\n.section-button-container-selected {\n  border-bottom: solid 2px white;\n}\n\n.section-button {\n  margin: 5px;\n  padding: 4px;\n  transition: transform .5s ease-out;\n}\n\n/* home section */\n.home-container {\n  color: white;\n  display: flex;\n  flex-direction: column;\n  max-width: 800px;\n  margin: auto;\n  margin-top: 50px;\n  padding: 2em;\n  align-items: center;\n  background-color: var(--transluscent-black);\n}\n\n.home-description {\n  text-align: center;\n  padding-left: 1em;\n  padding-right: 1em;\n  font-size: var(--normal-font-size);\n}\n\n.chef-container {\n  padding-left: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.chef-pic {\n  border-radius: 50%;\n  max-width: 200px;\n  max-height: 200px;\n  width: 100%;\n  height: 100%;\n}\n\n.chef-description {\n  text-align: left;\n  padding-left: 1em;\n  padding-right: 1em;\n  font-size: var(--normal-font-size);\n}\n\n/* menu section */\n.menu-container {\n  font-family: 'Quicksand', sans-serif;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  gap: 5em;\n  max-width: 800px;\n  margin: auto;\n  margin-top: 50px;\n  padding: 5em;\n  align-items: center;\n  background-color: var(--transluscent-black);\n}\n\n.menu-item-container {\n  display: flex;\n  width: 100%;\n  font-size: var(--normal-font-size);\n}\n\n.menu-item-pic {\n  max-width: 200px;\n  max-height: 200px;\n  width: 100%;\n  height: 200px;\n}\n\n.menu-item-description-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-left: 1em;\n  padding-right: .5em;\n}\n\n.menu-item-title-container {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.menu-item-title {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n/* currently does nothing, might use it later if I want a different font size or something */\n.menu-item-description {}\n\n/* contact section */\n.contact-container {\n  color: white;\n  display: flex;\n  flex-direction: column;\n  gap: 1em;\n  max-width: 800px;\n  margin: auto;\n  margin-top: 50px;\n  padding: 2em;\n  align-items: center;\n  background-color: var(--transluscent-black);\n  font-size: var(--normal-font-size);\n  text-align: center;\n}\n\n.contact-container hr {\n  width: 100%;\n}\n\n.contact-description {\n  margin: 0;\n}\n\n.contact-item-container {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  gap:1em;\n}\n\n.contact-item-pic {\n  max-width: 60px;\n  max-height: 60px;\n  width: 100%;\n}\n\n.contact-description{\n  margin:0;\n}\n\n.location {\n  border: 0;\n  margin-top: .5em;\n  max-width: 500px;\n  max-height: 500px;\n  width: 100%;\n  height: 500px;\n}\n\n/* media queries at the end so they have access to all css selectors */\n@media screen and (max-width: 600px) {\n  .chef-container {\n    flex-wrap: wrap;\n  }\n\n  .menu-container {\n    padding-left: 2em;\n    padding-right: 2em;\n  }\n\n  .menu-item-container {\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 1em;\n  }\n}\n\n/* make content fade in when section is changed */\n.home-container, .menu-container, .contact-container {\n  animation: fadein 2s;\n}\n\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,uCAAuC;EACvC,uBAAuB;AACzB;;AAEA;EACE,yDAAwC;EACxC,sBAAsB;EACtB,4BAA4B;EAC5B,6BAA6B;EAC7B,uCAAuC;EACvC,SAAS;AACX;;AAEA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,iBAAiB;EACjB,SAAS;EACT,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,2CAA2C;EAC3C,YAAY;EACZ,sCAAsC;AACxC;;AAEA;EACE,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,cAAc;AAChB;;AAEA;EACE,kCAAkC;EAClC,WAAW;EACX,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,2BAA2B;EAC3B,eAAe;AACjB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kCAAkC;AACpC;;AAEA,iBAAiB;AACjB;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;EAChB,YAAY;EACZ,mBAAmB;EACnB,2CAA2C;AAC7C;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;EAClB,kCAAkC;AACpC;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,kCAAkC;AACpC;;AAEA,iBAAiB;AACjB;EACE,oCAAoC;EACpC,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;EAChB,YAAY;EACZ,mBAAmB;EACnB,2CAA2C;AAC7C;;AAEA;EACE,aAAa;EACb,WAAW;EACX,kCAAkC;AACpC;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,WAAW;EACX,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,gBAAgB;AAClB;;AAEA,4FAA4F;AAC5F,wBAAwB;;AAExB,oBAAoB;AACpB;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;EAChB,YAAY;EACZ,mBAAmB;EACnB,2CAA2C;EAC3C,kCAAkC;EAClC,kBAAkB;AACpB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,OAAO;AACT;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,SAAS;EACT,gBAAgB;EAChB,gBAAgB;EAChB,iBAAiB;EACjB,WAAW;EACX,aAAa;AACf;;AAEA,sEAAsE;AACtE;EACE;IACE,eAAe;EACjB;;EAEA;IACE,iBAAiB;IACjB,kBAAkB;EACpB;;EAEA;IACE,eAAe;IACf,uBAAuB;IACvB,QAAQ;EACV;AACF;;AAEA,iDAAiD;AACjD;EACE,oBAAoB;AACtB;;AAEA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Kalam&family=Kaushan+Script&family=Quicksand:wght@500&display=swap');\n\n:root {\n  --transluscent-black: rgb(0, 0, 0, .82);\n  --normal-font-size: 2em;\n}\n\nbody {\n  background-image: url('images/food.jpg');\n  background-size: cover;\n  background-attachment: fixed;\n  font-family: 'Kalam', cursive;\n  transition: background-image 1s ease-in;\n  margin: 0;\n}\n\n.title-container {\n  width: 100%;\n  text-align: center;\n}\n\n.title {\n  font-size: 8em;\n  padding: 30px;\n  padding-bottom: 0;\n  margin: 0;\n  /* background-color: black; */\n}\n\n.header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: var(--transluscent-black);\n  color: white;\n  font-family: 'Kaushan Script', cursive;\n}\n\n.nav-bar {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  /* gap: 5em; */\n}\n\n.section-button-container {\n  font-size: var(--normal-font-size);\n  margin: 0px;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-bottom: 10px;\n}\n\n.section-button:hover {\n  transform: translateY(-8px);\n  cursor: pointer;\n}\n\n.section-button-container-selected {\n  border-bottom: solid 2px white;\n}\n\n.section-button {\n  margin: 5px;\n  padding: 4px;\n  transition: transform .5s ease-out;\n}\n\n/* home section */\n.home-container {\n  color: white;\n  display: flex;\n  flex-direction: column;\n  max-width: 800px;\n  margin: auto;\n  margin-top: 50px;\n  padding: 2em;\n  align-items: center;\n  background-color: var(--transluscent-black);\n}\n\n.home-description {\n  text-align: center;\n  padding-left: 1em;\n  padding-right: 1em;\n  font-size: var(--normal-font-size);\n}\n\n.chef-container {\n  padding-left: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.chef-pic {\n  border-radius: 50%;\n  max-width: 200px;\n  max-height: 200px;\n  width: 100%;\n  height: 100%;\n}\n\n.chef-description {\n  text-align: left;\n  padding-left: 1em;\n  padding-right: 1em;\n  font-size: var(--normal-font-size);\n}\n\n/* menu section */\n.menu-container {\n  font-family: 'Quicksand', sans-serif;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  gap: 5em;\n  max-width: 800px;\n  margin: auto;\n  margin-top: 50px;\n  padding: 5em;\n  align-items: center;\n  background-color: var(--transluscent-black);\n}\n\n.menu-item-container {\n  display: flex;\n  width: 100%;\n  font-size: var(--normal-font-size);\n}\n\n.menu-item-pic {\n  max-width: 200px;\n  max-height: 200px;\n  width: 100%;\n  height: 200px;\n}\n\n.menu-item-description-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-left: 1em;\n  padding-right: .5em;\n}\n\n.menu-item-title-container {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.menu-item-title {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n/* currently does nothing, might use it later if I want a different font size or something */\n.menu-item-description {}\n\n/* contact section */\n.contact-container {\n  color: white;\n  display: flex;\n  flex-direction: column;\n  gap: 1em;\n  max-width: 800px;\n  margin: auto;\n  margin-top: 50px;\n  padding: 2em;\n  align-items: center;\n  background-color: var(--transluscent-black);\n  font-size: var(--normal-font-size);\n  text-align: center;\n}\n\n.contact-container hr {\n  width: 100%;\n}\n\n.contact-description {\n  margin: 0;\n}\n\n.contact-item-container {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  gap:1em;\n}\n\n.contact-item-pic {\n  max-width: 60px;\n  max-height: 60px;\n  width: 100%;\n}\n\n.contact-description{\n  margin:0;\n}\n\n.location {\n  border: 0;\n  margin-top: .5em;\n  max-width: 500px;\n  max-height: 500px;\n  width: 100%;\n  height: 500px;\n}\n\n/* media queries at the end so they have access to all css selectors */\n@media screen and (max-width: 600px) {\n  .chef-container {\n    flex-wrap: wrap;\n  }\n\n  .menu-container {\n    padding-left: 2em;\n    padding-right: 2em;\n  }\n\n  .menu-item-container {\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 1em;\n  }\n}\n\n/* make content fade in when section is changed */\n.home-container, .menu-container, .contact-container {\n  animation: fadein 2s;\n}\n\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n"],"sourceRoot":""}]);
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
    contactDescription.classList.add('contact-description');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUNPO0FBQ2hHLDRDQUE0Qyw2R0FBa0M7QUFDOUUsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRixtS0FBbUs7QUFDbksseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLGlEQUFpRCw0Q0FBNEMsNEJBQTRCLEdBQUcsVUFBVSxzRUFBc0UsMkJBQTJCLGlDQUFpQyxrQ0FBa0MsNENB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QSx1REFBdUQsZUFBZTtBQUN0RTs7QUFFQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImltYWdlcy9mb29kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9S2FsYW0mZmFtaWx5PUthdXNoYW4rU2NyaXB0JmZhbWlseT1RdWlja3NhbmQ6d2dodEA1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tdHJhbnNsdXNjZW50LWJsYWNrOiByZ2IoMCwgMCwgMCwgLjgyKTtcXG4gIC0tbm9ybWFsLWZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIGZvbnQtZmFtaWx5OiAnS2FsYW0nLCBjdXJzaXZlO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAxcyBlYXNlLWluO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4udGl0bGUtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZm9udC1zaXplOiA4ZW07XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDA7XFxuICBtYXJnaW46IDA7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc2x1c2NlbnQtYmxhY2spO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6ICdLYXVzaGFuIFNjcmlwdCcsIGN1cnNpdmU7XFxufVxcblxcbi5uYXYtYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC8qIGdhcDogNWVtOyAqL1xcbn1cXG5cXG4uc2VjdGlvbi1idXR0b24tY29udGFpbmVyIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbm9ybWFsLWZvbnQtc2l6ZSk7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uc2VjdGlvbi1idXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2VjdGlvbi1idXR0b24tY29udGFpbmVyLXNlbGVjdGVkIHtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCB3aGl0ZTtcXG59XFxuXFxuLnNlY3Rpb24tYnV0dG9uIHtcXG4gIG1hcmdpbjogNXB4O1xcbiAgcGFkZGluZzogNHB4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cyBlYXNlLW91dDtcXG59XFxuXFxuLyogaG9tZSBzZWN0aW9uICovXFxuLmhvbWUtY29udGFpbmVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBwYWRkaW5nOiAyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNsdXNjZW50LWJsYWNrKTtcXG59XFxuXFxuLmhvbWUtZGVzY3JpcHRpb24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAxZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxZW07XFxuICBmb250LXNpemU6IHZhcigtLW5vcm1hbC1mb250LXNpemUpO1xcbn1cXG5cXG4uY2hlZi1jb250YWluZXIge1xcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNoZWYtcGljIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG1heC13aWR0aDogMjAwcHg7XFxuICBtYXgtaGVpZ2h0OiAyMDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY2hlZi1kZXNjcmlwdGlvbiB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZy1sZWZ0OiAxZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxZW07XFxuICBmb250LXNpemU6IHZhcigtLW5vcm1hbC1mb250LXNpemUpO1xcbn1cXG5cXG4vKiBtZW51IHNlY3Rpb24gKi9cXG4ubWVudS1jb250YWluZXIge1xcbiAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVlbTtcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgcGFkZGluZzogNWVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zbHVzY2VudC1ibGFjayk7XFxufVxcblxcbi5tZW51LWl0ZW0tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbm9ybWFsLWZvbnQtc2l6ZSk7XFxufVxcblxcbi5tZW51LWl0ZW0tcGljIHtcXG4gIG1heC13aWR0aDogMjAwcHg7XFxuICBtYXgtaGVpZ2h0OiAyMDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyMDBweDtcXG59XFxuXFxuLm1lbnUtaXRlbS1kZXNjcmlwdGlvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctbGVmdDogMWVtO1xcbiAgcGFkZGluZy1yaWdodDogLjVlbTtcXG59XFxuXFxuLm1lbnUtaXRlbS10aXRsZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLm1lbnUtaXRlbS10aXRsZSB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuLyogY3VycmVudGx5IGRvZXMgbm90aGluZywgbWlnaHQgdXNlIGl0IGxhdGVyIGlmIEkgd2FudCBhIGRpZmZlcmVudCBmb250IHNpemUgb3Igc29tZXRoaW5nICovXFxuLm1lbnUtaXRlbS1kZXNjcmlwdGlvbiB7fVxcblxcbi8qIGNvbnRhY3Qgc2VjdGlvbiAqL1xcbi5jb250YWN0LWNvbnRhaW5lciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMWVtO1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBwYWRkaW5nOiAyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNsdXNjZW50LWJsYWNrKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbm9ybWFsLWZvbnQtc2l6ZSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWN0LWNvbnRhaW5lciBociB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbnRhY3QtZGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uY29udGFjdC1pdGVtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ2FwOjFlbTtcXG59XFxuXFxuLmNvbnRhY3QtaXRlbS1waWMge1xcbiAgbWF4LXdpZHRoOiA2MHB4O1xcbiAgbWF4LWhlaWdodDogNjBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29udGFjdC1kZXNjcmlwdGlvbntcXG4gIG1hcmdpbjowO1xcbn1cXG5cXG4ubG9jYXRpb24ge1xcbiAgYm9yZGVyOiAwO1xcbiAgbWFyZ2luLXRvcDogLjVlbTtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICBtYXgtaGVpZ2h0OiA1MDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MDBweDtcXG59XFxuXFxuLyogbWVkaWEgcXVlcmllcyBhdCB0aGUgZW5kIHNvIHRoZXkgaGF2ZSBhY2Nlc3MgdG8gYWxsIGNzcyBzZWxlY3RvcnMgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmNoZWYtY29udGFpbmVyIHtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgfVxcblxcbiAgLm1lbnUtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDJlbTtcXG4gIH1cXG5cXG4gIC5tZW51LWl0ZW0tY29udGFpbmVyIHtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxZW07XFxuICB9XFxufVxcblxcbi8qIG1ha2UgY29udGVudCBmYWRlIGluIHdoZW4gc2VjdGlvbiBpcyBjaGFuZ2VkICovXFxuLmhvbWUtY29udGFpbmVyLCAubWVudS1jb250YWluZXIsIC5jb250YWN0LWNvbnRhaW5lciB7XFxuICBhbmltYXRpb246IGZhZGVpbiAycztcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlaW4ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseURBQXdDO0VBQ3hDLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLHVDQUF1QztFQUN2QyxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsU0FBUztFQUNULDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDJDQUEyQztFQUMzQyxZQUFZO0VBQ1osc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0NBQWtDO0FBQ3BDOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtDQUFrQztBQUNwQzs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtFQUNSLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQSw0RkFBNEY7QUFDNUYsd0JBQXdCOztBQUV4QixvQkFBb0I7QUFDcEI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiwyQ0FBMkM7RUFDM0Msa0NBQWtDO0VBQ2xDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLE9BQU87QUFDVDs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsUUFBUTtBQUNWOztBQUVBO0VBQ0UsU0FBUztFQUNULGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUEsc0VBQXNFO0FBQ3RFO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsUUFBUTtFQUNWO0FBQ0Y7O0FBRUEsaURBQWlEO0FBQ2pEO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1LYWxhbSZmYW1pbHk9S2F1c2hhbitTY3JpcHQmZmFtaWx5PVF1aWNrc2FuZDp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAtLXRyYW5zbHVzY2VudC1ibGFjazogcmdiKDAsIDAsIDAsIC44Mik7XFxuICAtLW5vcm1hbC1mb250LXNpemU6IDJlbTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlcy9mb29kLmpwZycpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICBmb250LWZhbWlseTogJ0thbGFtJywgY3Vyc2l2ZTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMXMgZWFzZS1pbjtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnRpdGxlLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogOGVtO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7ICovXFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNsdXNjZW50LWJsYWNrKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiAnS2F1c2hhbiBTY3JpcHQnLCBjdXJzaXZlO1xcbn1cXG5cXG4ubmF2LWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAvKiBnYXA6IDVlbTsgKi9cXG59XFxuXFxuLnNlY3Rpb24tYnV0dG9uLWNvbnRhaW5lciB7XFxuICBmb250LXNpemU6IHZhcigtLW5vcm1hbC1mb250LXNpemUpO1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLnNlY3Rpb24tYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNlY3Rpb24tYnV0dG9uLWNvbnRhaW5lci1zZWxlY3RlZCB7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggd2hpdGU7XFxufVxcblxcbi5zZWN0aW9uLWJ1dHRvbiB7XFxuICBtYXJnaW46IDVweDtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXMgZWFzZS1vdXQ7XFxufVxcblxcbi8qIGhvbWUgc2VjdGlvbiAqL1xcbi5ob21lLWNvbnRhaW5lciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgcGFkZGluZzogMmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zbHVzY2VudC1ibGFjayk7XFxufVxcblxcbi5ob21lLWRlc2NyaXB0aW9uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogMWVtO1xcbiAgcGFkZGluZy1yaWdodDogMWVtO1xcbiAgZm9udC1zaXplOiB2YXIoLS1ub3JtYWwtZm9udC1zaXplKTtcXG59XFxuXFxuLmNoZWYtY29udGFpbmVyIHtcXG4gIHBhZGRpbmctbGVmdDogMzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jaGVmLXBpYyB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXgtd2lkdGg6IDIwMHB4O1xcbiAgbWF4LWhlaWdodDogMjAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNoZWYtZGVzY3JpcHRpb24ge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmctbGVmdDogMWVtO1xcbiAgcGFkZGluZy1yaWdodDogMWVtO1xcbiAgZm9udC1zaXplOiB2YXIoLS1ub3JtYWwtZm9udC1zaXplKTtcXG59XFxuXFxuLyogbWVudSBzZWN0aW9uICovXFxuLm1lbnUtY29udGFpbmVyIHtcXG4gIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1ZW07XFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIHBhZGRpbmc6IDVlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc2x1c2NlbnQtYmxhY2spO1xcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IHZhcigtLW5vcm1hbC1mb250LXNpemUpO1xcbn1cXG5cXG4ubWVudS1pdGVtLXBpYyB7XFxuICBtYXgtd2lkdGg6IDIwMHB4O1xcbiAgbWF4LWhlaWdodDogMjAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjAwcHg7XFxufVxcblxcbi5tZW51LWl0ZW0tZGVzY3JpcHRpb24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWxlZnQ6IDFlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IC41ZW07XFxufVxcblxcbi5tZW51LWl0ZW0tdGl0bGUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5tZW51LWl0ZW0tdGl0bGUge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi8qIGN1cnJlbnRseSBkb2VzIG5vdGhpbmcsIG1pZ2h0IHVzZSBpdCBsYXRlciBpZiBJIHdhbnQgYSBkaWZmZXJlbnQgZm9udCBzaXplIG9yIHNvbWV0aGluZyAqL1xcbi5tZW51LWl0ZW0tZGVzY3JpcHRpb24ge31cXG5cXG4vKiBjb250YWN0IHNlY3Rpb24gKi9cXG4uY29udGFjdC1jb250YWluZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFlbTtcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgcGFkZGluZzogMmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zbHVzY2VudC1ibGFjayk7XFxuICBmb250LXNpemU6IHZhcigtLW5vcm1hbC1mb250LXNpemUpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY29udGFjdC1jb250YWluZXIgaHIge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb250YWN0LWRlc2NyaXB0aW9uIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmNvbnRhY3QtaXRlbS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdhcDoxZW07XFxufVxcblxcbi5jb250YWN0LWl0ZW0tcGljIHtcXG4gIG1heC13aWR0aDogNjBweDtcXG4gIG1heC1oZWlnaHQ6IDYwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbnRhY3QtZGVzY3JpcHRpb257XFxuICBtYXJnaW46MDtcXG59XFxuXFxuLmxvY2F0aW9uIHtcXG4gIGJvcmRlcjogMDtcXG4gIG1hcmdpbi10b3A6IC41ZW07XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgbWF4LWhlaWdodDogNTAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTAwcHg7XFxufVxcblxcbi8qIG1lZGlhIHF1ZXJpZXMgYXQgdGhlIGVuZCBzbyB0aGV5IGhhdmUgYWNjZXNzIHRvIGFsbCBjc3Mgc2VsZWN0b3JzICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5jaGVmLWNvbnRhaW5lciB7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIH1cXG5cXG4gIC5tZW51LWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmctbGVmdDogMmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyZW07XFxuICB9XFxuXFxuICAubWVudS1pdGVtLWNvbnRhaW5lciB7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMWVtO1xcbiAgfVxcbn1cXG5cXG4vKiBtYWtlIGNvbnRlbnQgZmFkZSBpbiB3aGVuIHNlY3Rpb24gaXMgY2hhbmdlZCAqL1xcbi5ob21lLWNvbnRhaW5lciwgLm1lbnUtY29udGFpbmVyLCAuY29udGFjdC1jb250YWluZXIge1xcbiAgYW5pbWF0aW9uOiBmYWRlaW4gMnM7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZWluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGRlbmRlbiBmcm9tICcuL2ltYWdlcy9kZW4tZGVuLW11c2hpLnBuZyc7XG5pbXBvcnQgY2xvY2sgZnJvbSAnLi9pbWFnZXMvY2xvY2staWNvbi5wbmcnO1xuXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xuICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1jb250YWluZXInKTtcbiAgLy8gYWRkIHRoZSBtYWluIGRlc2NyaXB0aW9uXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWRlc2NyaXB0aW9uJyk7XG4gIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdCcmluZyB5b3VyIGZyaWVuZHMgYW5kIGZhbWlseSBhbG9uZyB3aXRoIGEgaGVhbHRoeSBhcHBldGl0ZSBhbmQgY29tZSB2aXNpdCBCYXJhdGllIHRvZGF5ISAoQ3VzdG9tZXJzIHdobyB3ZXJlIHJlY2VudGx5IHN0YXJ2aW5nIGVhdCBmcmVlISBEZXZpbCBGcnVpdCB1c2VycyBnZXQgYSAyMCUgZGlzY291bnQgaWYgdGhleSBjYW4gc3dpbSBhIGxhcCBhcm91bmQgQmFyYXRpZSEpJykpO1xuICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpKTtcblxuICAvLyBidWlsZCB0aGUgYXJyYXkgZm9yIGFsbCBvdGhlciBjb250YWN0IGluZm9cbiAgbGV0IGNvbnRhY3RJbmZvID0gW3tcbiAgICBpbWFnZVVybDogZGVuZGVuLFxuICAgIGRlc2NyaXB0aW9uOiAnMS04MDAtVGVhbS1TYW5qaSdcbiAgfSwge1xuICAgIGltYWdlVXJsOiBjbG9jayxcbiAgICBkZXNjcmlwdGlvbjogJ01vbi1GcmkgOEFNIC0gOVBNJ1xuICB9XTtcbiAgZm9yIChsZXQgYSA9IDA7IGEgPCBjb250YWN0SW5mby5sZW5ndGg7IGErKykge1xuICAgIGNvbnN0IGN1cnJlbnRJdGVtID0gY29udGFjdEluZm9bYV07XG4gICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1pdGVtLWNvbnRhaW5lcicpO1xuICAgIC8vIG1ha2UgY29udGFjdCBlbGVtZW50IHBpY1xuICAgIGNvbnN0IGl0ZW1JY29uID0gbmV3IEltYWdlKCk7XG4gICAgaXRlbUljb24uY2xhc3NMaXN0LmFkZCgnY29udGFjdC1pdGVtLXBpYycpO1xuICAgIGl0ZW1JY29uLnNyYyA9IGN1cnJlbnRJdGVtLmltYWdlVXJsO1xuICAgIC8vIG1ha2UgdGhlIGRlc2NyaXB0aW9uIG9mIHRoYXQgY29udGFjdCBpbmZvXG4gICAgY29uc3QgY29udGFjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRhY3REZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWRlc2NyaXB0aW9uJyk7XG4gICAgY29udGFjdERlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke2N1cnJlbnRJdGVtLmRlc2NyaXB0aW9ufWApKTtcbiAgICAvLyBhZGQgaWNvbiBhbmQgZGVzY3JpcHRpb24gdG8gdGhlIGl0ZW1Db250YWluZXJcbiAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1JY29uKTtcbiAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3REZXNjcmlwdGlvbik7XG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtQ29udGFpbmVyKTtcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJykpO1xuICB9XG4gIC8vIC8vIGFkZCB0aGUgcGhvbmUgbnVtYmVyXG4gIC8vIGNvbnN0IHBob25lTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAvLyBwaG9uZU51bWJlci5jbGFzc0xpc3QuYWRkKCdwaG9uZS1udW1iZXInKTtcbiAgLy8gcGhvbmVOdW1iZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1Bob25lOiAxLTgwMC1UZWFtLVNhbmppJykpO1xuICAvLyAvLyBhZGQgYWxsIHRoZSBjb21wb25lbmV0cyB0byBjb250YWN0Q29udGFpbmVyXG4gIC8vIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKSk7XG4gIC8vIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocGhvbmVOdW1iZXIpO1xuICAvLyBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJykpO1xuXG4gIC8vIGFkZCB0aGUgZ29vZ2xlIG1hcCBsb2NhdGlvblxuICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICBsb2NhdGlvbi5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbicpO1xuICBsb2NhdGlvbi5zcmMgPSBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDMwNjM0MDA3Ljg3Mzg4NTI0ITJkLTEyMS4xNjQzODk0MDAwMDAwMiEzZDIwLjQwMzM3NTQ1MDAwMDAwMiEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4ODQyZjRiZDY1Y2MzOGM1NyUzQTB4NjdiOGQ5ODBhNjE5NTAzZCEyc0JhcmF0aWUhNWUwITNtMiExc2VuITJzdXMhNHYxNjI3MjcyOTU3NjU4ITVtMiExc2VuITJzdXNcIjtcbiAgbG9jYXRpb24uYWxsb3dmdWxsc2NyZWVuID0gXCJcIjtcbiAgbG9jYXRpb24ubG9hZGluZyA9IFwibGF6eVwiO1xuXG4gIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xuICByZXR1cm4gY29udGFjdENvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFjdDtcbiIsImltcG9ydCB6ZWZmIGZyb20gJy4vaW1hZ2VzL3plZmYuanBnJztcbmltcG9ydCBzYW5qaSBmcm9tICcuL2ltYWdlcy9zYW5qaS5qcGcnO1xuaW1wb3J0IHBhdHR5IGZyb20gJy4vaW1hZ2VzL3BhdHR5LnBuZyc7XG5pbXBvcnQgY2FybmUgZnJvbSAnLi9pbWFnZXMvY2FybmUucG5nJztcbmltcG9ydCBsdWZmeSBmcm9tICcuL2ltYWdlcy9sdWZmeS5qcGcnO1xuXG5mdW5jdGlvbiBjcmVhdGVIb21lKCkge1xuICBjb25zdCBob21lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhvbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG9tZS1jb250YWluZXInKTtcbiAgLy8gbWFrZSB0aGUgZGVzY3JpcHRpb24gZm9yIHRoZSByZXN0YXVyYW50XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdob21lLWRlc2NyaXB0aW9uJyk7XG4gIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdDb21lIG9uZSwgY29tZSBhbGwgdG8gQmFyYXRpZSwgdGhlIGZsb2F0aW5nIHJlc3R1YXJhbnQhJykpO1xuICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcbiAgZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJVc2luZyBmcmVzaCBpbmdyZWRpZW50cyBsb2NhbGx5IHNvdXJjZWQgZnJvbSB0aGUgRWFzdCBCbHVlLCB3ZSBzZXJ2ZSB3b3JsZCBjbGFzcyBjdWlzaW5lIHRvIHNhaWxvcnMgYW5kIHBpcmF0ZXMgYWxpa2UuXCIpKTtcbiAgZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKSk7XG4gIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdNZWV0IG91ciBzdGFmZiEnKSk7XG4gIC8vIGFwcGVuZCB0aGUgaG9tZSBkZXNjcmlwdGlvbiB0byBob21lQ29udGFpbmVyXG4gIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAvLyBub3cgYWRkIGFsbCB0aGUgY2hlZiBwaWN0dXJlcyBhbmQgZGVzY3JpcHRpb25zXG4gIGxldCBjaGVmQXJyID0gW3tcbiAgICBpbWFnZVVybDogemVmZixcbiAgICBjaGVmVGl0bGU6IFwiSGVhZCBDaGVmLCBaZWZmXCIsXG4gICAgY2hlZkRlc2NyaXB0aW9uOiBcIlplZmYgaXMgdGhlIG93bmVyIG9mIEJhcmF0aWUgYW5kIGhhcyBiZWVuIHJ1bm5pbmcgdGhlIHJlc3RhdXJhbnQgZXZlciBzaW5jZSBpdCdzIGZvdW5kaW5nIGluIDE3NzYsIGRvbid0IGFzayBoaW0gYWJvdXQgaG93IGhlIGxvc3QgaGlzIGxlZywgaXQncyBhIHRvdWNoeSBzdWJqZWN0LlwiLFxuICB9LCB7XG4gICAgaW1hZ2VVcmw6IHNhbmppLFxuICAgIGNoZWZUaXRsZTogXCJTb3VzIENoZWYsIFNhbmppXCIsXG4gICAgY2hlZkRlc2NyaXB0aW9uOiBcIlNhbmppIGhhcyBiZWVuIHRyYWluaW5nIHVuZGVyIFplZmYgc2luY2UgaGUgd2FzIGxpdHRsZSwgaGUncyBhbiBleGNlbGxlbnQgY29vayBhbmQgd2FzIGdvaW5nIHRvIGluaGVyaXQgdGhlIHJlc3RhcnVyYW50IHVudGlsIFN0cmF3IEhhdCBMdWZmeSBjYW1lIGFsb25nLi4uXCIsXG4gIH0sIHtcbiAgICBpbWFnZVVybDogcGF0dHksXG4gICAgY2hlZlRpdGxlOiBcIlBhdGlzc2llciwgUGF0dHlcIixcbiAgICBjaGVmRGVzY3JpcHRpb246IFwiUGF0dHkgaXMgaW4gY2hhcmdlIG9mIG1ha2luZyB0aGUgZGVzc2VydHMgYXQgQmFyYXRpZSBhbmQgaXMgaGlnaGx5IHNraWxsZWQgd2l0aCBrbml2ZXMuIEhlIG1hbmFnZXMgdGhlIFNpc3RlciBBbmtvIGRlc3NlcnQgc2hpcC5cIixcbiAgfSwge1xuICAgIGltYWdlVXJsOiBjYXJuZSxcbiAgICBjaGVmVGl0bGU6IFwiTWVhdCBNYXN0ZXIsIENhcm5lXCIsXG4gICAgY2hlZkRlc2NyaXB0aW9uOiBcIkNhcm5lIGlzIG9uZSBvZiBCYXJhdGllJ3MgYmVzdCBjaGVmcywgc3BlY2lhbGl6aW5nIGluIGNoYXJjdXRlcmllIGFuZCBhbGwgbWFubmVyIG9mIG1lYXQgYmFzZWQgY3Vpc2luZS4gSGUgaXMgaW4gY2hhcmdlIG9mIHRoZSBOYXN1Z2FzaXJhIFRlcHBhbnlha2kgc2hpcC5cIixcbiAgfSwge1xuICAgIGltYWdlVXJsOiBsdWZmeSxcbiAgICBjaGVmVGl0bGU6IFwiQ2hvcmUgQm95LCBMdWZmeVwiLFxuICAgIGNoZWZEZXNjcmlwdGlvbjogXCJTdHJhdyBIYXQgTHVmZnkgZGVmbGVjdGVkIGEgY2Fubm9uYmFsbCBhdCBCYXJhdGllIGFuZCBub3cgc2VydmVzIGFzIGEgQ2hvcmUgQm95IHRvIG1ha2UgdXAgZm9yIHRoZSBkYW1hZ2VzLlwiLFxuICB9XTtcbiAgZm9yIChsZXQgYSA9IDA7IGEgPCBjaGVmQXJyLmxlbmd0aDsgYSsrKSB7XG4gICAgY29uc3QgY3VycmVudENoZWYgPSBjaGVmQXJyW2FdO1xuICAgIC8vIG1ha2UgdGhlIGNvbnRhaW5lcnMgdGhhdCB3aWxsIGhvbGQgdGhlIHBpY3R1cmUgYW5kIGRlc2NyaXB0aW9uXG4gICAgY29uc3QgY2hlZkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNoZWZDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2hlZi1jb250YWluZXInKTtcbiAgICAvLyBtYWtlIHRoZSBjaGVmIHBpY3R1cmVcbiAgICBjb25zdCBjaGVmUGljID0gbmV3IEltYWdlKCk7XG4gICAgY2hlZlBpYy5jbGFzc0xpc3QuYWRkKCdjaGVmLXBpYycpO1xuICAgIGNoZWZQaWMuc3JjID0gY3VycmVudENoZWYuaW1hZ2VVcmw7XG4gICAgLy8gbWFrZSB0aGUgY2hlZiBkZXNjcmlwdGlvblxuICAgIGNvbnN0IGNoZWZEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjaGVmRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnY2hlZi1kZXNjcmlwdGlvbicpO1xuICAgIGNoZWZEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjdXJyZW50Q2hlZi5jaGVmVGl0bGUpKTtcbiAgICBjaGVmRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKSk7XG4gICAgY2hlZkRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGN1cnJlbnRDaGVmLmNoZWZEZXNjcmlwdGlvbikpO1xuICAgIGNoZWZDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlZlBpYyk7XG4gICAgY2hlZkNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVmRGVzY3JpcHRpb24pO1xuICAgIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlZkNvbnRhaW5lcik7XG4gIH1cbiAgcmV0dXJuIGhvbWVDb250YWluZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvbWU7XG4iLCJpbXBvcnQgc2FzaGltaSBmcm9tICcuL2ltYWdlcy9zYXNoaW1pLmpwZyc7XG5pbXBvcnQgc2VhZm9vZFJpc290dG8gZnJvbSAnLi9pbWFnZXMvc2VhZm9vZC1yaXNvdHRvLmpwZyc7XG5pbXBvcnQgbWVhdGJhbGxzIGZyb20gJy4vaW1hZ2VzL21lYXRiYWxscy5qcGcnO1xuaW1wb3J0IHNvYmEgZnJvbSAnLi9pbWFnZXMvc29iYS1ub29kbGVzLmpwZyc7XG5pbXBvcnQgbWVhdCBmcm9tICcuL2ltYWdlcy9tZWF0LnBuZyc7XG5pbXBvcnQgYmVudG8gZnJvbSAnLi9pbWFnZXMvYmVudG8ucG5nJztcbmltcG9ydCBvc2hpcnVrbyBmcm9tICcuL2ltYWdlcy9vc2hpcnVrby5wbmcnO1xuaW1wb3J0IGFsaWdvdCBmcm9tICcuL2ltYWdlcy9hbGlnb3QucG5nJztcbmltcG9ydCBjaG9wcGVyIGZyb20gJy4vaW1hZ2VzL2Nob3BwZXIucG5nJztcblxuZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtY29udGFpbmVyJyk7XG4gIC8vIG1ha2UgdGhlIGFycmF5IHdpdGggb2JqZWN0cyB0aGF0IGhhdmUgdGhlIGluZm9ybWF0aW9uIGZvciBlYWNoIG1lbnUgaXRlbVxuICBsZXQgaXRlbUFyciA9IFt7XG4gICAgaW1hZ2VVcmw6IHNhc2hpbWksXG4gICAgaXRlbVRpdGxlOiBcIlNhc2hpbWkgUGxhdHRlclwiLFxuICAgIGl0ZW1QcmljZTogMTguMDAsXG4gICAgaXRlbURlc2NyaXB0aW9uOiBcIkJsdWVmaW4gdHVuYSBhbmQgdG9ybyBzbGljZXMsIGEgc3RhcGxlIG9mIGZpbmUgZGluaW5nLlwiXG4gIH0sIHtcbiAgICBpbWFnZVVybDogc2VhZm9vZFJpc290dG8sXG4gICAgaXRlbVRpdGxlOiBcIlNlYWZvb2QgUmlzb3R0b1wiLFxuICAgIGl0ZW1QcmljZTogMTIuMDAsXG4gICAgaXRlbURlc2NyaXB0aW9uOiBcIkJ1dHRlcnkgUmlzb3R0byBzZXJ2ZWQgd2l0aCBzaHJpbXAsIG9jdG9wdXMsIGFuZCBjYWxhbWFyaS5cIlxuICB9LCB7XG4gICAgaW1hZ2VVcmw6IG1lYXRiYWxscyxcbiAgICBpdGVtVGl0bGU6IFwiU2lnbmF0dXJlIE1lYXRiYWxsc1wiLFxuICAgIGl0ZW1QcmljZTogMTUuMDAsXG4gICAgaXRlbURlc2NyaXB0aW9uOiBcIk9uZSBvZiBTYW5qaSdzIHNpZ25hdHVyZSBkaXNoZXMuIFRoZXNlIG1lYXRiYWxscyBhcmUgdG8gZGllIGZvci4uLiBMaXRlcmFsbHksIEx1ZmZ5IGFsbW9zdCBkaWVkIGF0IEc1IGZvciB0aGVzZS4uLlwiXG4gIH0sIHtcbiAgICBpbWFnZVVybDogbWVhdCxcbiAgICBpdGVtVGl0bGU6IFwiTXlzdGVyeSBNZWF0XCIsXG4gICAgaXRlbVByaWNlOiAxMC4wMCxcbiAgICBpdGVtRGVzY3JpcHRpb246IFwiRmVlbGluZyBmcmlza3k/IFRyeSBvdXIgTXlzdGVyeSBNZWF0LCBpdCBjaGFuZ2VzIGV2ZXJ5IHdlZWshXCJcbiAgfSwge1xuICAgIGltYWdlVXJsOiBzb2JhLFxuICAgIGl0ZW1UaXRsZTogXCJTb2JhIE5vb2RsZXNcIixcbiAgICBpdGVtUHJpY2U6IDguMDAsXG4gICAgaXRlbURlc2NyaXB0aW9uOiBcIlNhbmppIHNlcnZlZCB0aGlzIGRpc2ggZXh0ZW5zaXZlbHkgYXQgdGhlIGxhbmQgb2YgV2FubywgdG90YWxseSBvdXQgb2YgdGhlIGdvb2RuZXNzIG9mIGhpcyBoZWFydCBhbmQgbm90IHNvIGhlIGNhbiB0cnkgYW5kIHNjb3JlIHdpdGggdGhlIFdhbm8gbGFkaWVzLi4uXCJcbiAgfSwge1xuICAgIGltYWdlVXJsOiBiZW50byxcbiAgICBpdGVtVGl0bGU6IFwiQ2hlZidzIENob2ljZSBCZW50byBCb3hcIixcbiAgICBpdGVtUHJpY2U6IDI1LjAwLFxuICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJPbiBvbmUgdGhlIGRheXMgcHJlY2VkaW5nIFNhbmppIGFuZCBQdWRkaW5nJ3Mgd2VkZGluZywgU2FuamkgbWFkZSB0aGlzIEJlbnRvIGJveCBmb3IgUHVkZGluZy4gSXQgaXMgY29tcHJpc2VkIG9mIGFsbCB0aGUgU3RyYXcgSGF0IFBpcmF0ZXMnIGZhdm9yaXRlIGZvb2RzLlwiXG4gIH0sIHtcbiAgICBpbWFnZVVybDogYWxpZ290LFxuICAgIGl0ZW1UaXRsZTogXCJBbGlnb3RcIixcbiAgICBpdGVtUHJpY2U6IDE2LjAwLFxuICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJUaGljayBzbGljZXMgb2YgZmlsZXQgc2VydmVkIHdpdGggcG90YXRvZXMgYW5kIGEgZGVsZWN0YWJsZSwgY2hlZXN5IGZvbmR1ZSBzYXVjZS5cIlxuICB9LCB7XG4gICAgaW1hZ2VVcmw6IG9zaGlydWtvLFxuICAgIGl0ZW1UaXRsZTogXCJPc2hpcnVrb1wiLFxuICAgIGl0ZW1QcmljZTogNS4wMCxcbiAgICBpdGVtRGVzY3JpcHRpb246IFwiUmVkIGJlYW4gc291cCB3aXRoIG1vY2hpIGNha2VzLiBEb24ndCB0ZWxsIEJpZyBNb20gd2Ugc2VydmUgdGhpcy4uLlwiXG4gIH0sIHtcbiAgICBpbWFnZVVybDogY2hvcHBlcixcbiAgICBpdGVtVGl0bGU6IFwiRW1lcmdlbmN5IFJhdGlvbnNcIixcbiAgICBpdGVtUHJpY2U6IDUuMDAsXG4gICAgaXRlbURlc2NyaXB0aW9uOiBcIkluIHRoZSBldmVudCBvZiBhbiBleHRyZW1lIGZvb2Qgc2hvcnRhZ2UsIENhcHRhaW4gU3RyYXcgSGF0IEx1ZmZ5IGhhcyBnaXZlbiB1cyBwZXJtaXNzaW9uIHRvIHNlcnZlIFRvbnkgVG9ueSBDaG9wcGVyLCBhIG1lbWViZXIgb2YgdGhlIHN0cmF3IGhhdCBjcmV3IGFzIGFuIGVtZXJnZW5jeSByYXRpb24uLi5cIlxuICB9XTtcbiAgLy8gbG9vcCB0aHJvdWdoIGFsbCB0aGUgaXRlbXMgaW4gaXRlbUFyciBhbmQgY3JlYXRlIERPTSBlbGVtZW50cyBmb3IgdGhlbVxuICBmb3IgKGxldCBhID0gMDsgYSA8IGl0ZW1BcnIubGVuZ3RoOyBhKyspIHtcbiAgICBjb25zdCBjdXJyZW50SXRlbSA9IGl0ZW1BcnJbYV07XG4gICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLWNvbnRhaW5lcicpO1xuICAgIC8vIG1ha2UgdGhlIG1lbnUgaXRlbSBwaWN0dXJlXG4gICAgY29uc3QgaXRlbVBpYyA9IG5ldyBJbWFnZSgpO1xuICAgIGl0ZW1QaWMuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLXBpYycpO1xuICAgIGl0ZW1QaWMuc3JjID0gY3VycmVudEl0ZW0uaW1hZ2VVcmw7XG4gICAgLy8gbWFrZSBjb250YWluZXIgZm9yIGl0ZW0gdGl0bGUgYW5kIGRlc2NyaXB0aW9uXG4gICAgY29uc3QgaXRlbURlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbURlc2NyaXB0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1kZXNjcmlwdGlvbi1jb250YWluZXInKTtcbiAgICAvLyBtYWtlIHRoZSBjb250YWluZXIgZm9yIG1lbnUgaXRlbSBuYW1lIGFuZCBwcmljZVxuICAgIGNvbnN0IGl0ZW1UaXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1UaXRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tdGl0bGUtY29udGFpbmVyJyk7XG4gICAgY29uc3QgaXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGl0ZW1UaXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tdGl0bGUnKTtcbiAgICBpdGVtVGl0bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7Y3VycmVudEl0ZW0uaXRlbVRpdGxlfWApKTtcbiAgICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaXRlbVByaWNlLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS10aXRsZScpO1xuICAgIGl0ZW1QcmljZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgJCR7Y3VycmVudEl0ZW0uaXRlbVByaWNlfWApKTtcbiAgICAvLyBhZGQgdGhlIHRpdGxlIGFuZCBwcmljZSB0byB0aGUgY29udGFpbmVyXG4gICAgaXRlbVRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1UaXRsZSk7XG4gICAgaXRlbVRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7XG4gICAgLy8gbWFrZSB0aGUgbWVudSBpdGVtIGRlc2NyaXB0aW9uXG4gICAgY29uc3QgaXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1kZXNjcmlwdGlvbicpO1xuICAgIGl0ZW1EZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpKTtcbiAgICBpdGVtRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7Y3VycmVudEl0ZW0uaXRlbURlc2NyaXB0aW9ufWApKTtcbiAgICAvLyBhZGQgdGhlIHRpdGxlIGFuZCB0aGUgZGVzY3JpcHRpb24gdG8gdGhlIGNvbnRhaW5lclxuICAgIGl0ZW1EZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtVGl0bGVDb250YWluZXIpO1xuICAgIGl0ZW1EZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRGVzY3JpcHRpb24pO1xuICAgIC8vIGFkZCB0aGUgaW1hZ2UgYW5kIHRoZSBmdWxsIHRpdGxlIGFuZCBkZXNjcmlwdGlvbiB0byB0aGUgaXRlbUNvbnRhaW5lclxuICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbVBpYyk7XG4gICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRGVzY3JpcHRpb25Db250YWluZXIpO1xuICAgIC8vIGZpbmFsbHksIGFwcGVuZCB0aGUgaXRlbUNvbnRhaW5lciB0byB0aGUgbWVudUNvbnRhaW5lclxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbUNvbnRhaW5lcik7XG4gIH1cblxuICByZXR1cm4gbWVudUNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWVudTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgY3JlYXRlSG9tZSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IGNyZWF0ZU1lbnUgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCBjcmVhdGVDb250YWN0IGZyb20gJy4vY29udGFjdC5qcyc7XG5cbi8vIGltcG9ydCB0aGUgaW1hZ2UgYmFja2dyb3VuZHMgZm9yIHRoZSB0aHJlZSBzZWN0aW9uc1xuaW1wb3J0IGhvbWVCYWNrZ3JvdW5kIGZyb20gJy4vaW1hZ2VzL2Zvb2QuanBnJztcbmltcG9ydCBtZW51QmFja2dyb3VuZCBmcm9tICcuL2ltYWdlcy9mb29kMi5qcGcnO1xuaW1wb3J0IGNvbnRhY3RCYWNrZ3JvdW5kIGZyb20gJy4vaW1hZ2VzL2VhdGluZy10b2dldGhlci5wbmcnO1xuXG5sZXQgaG9tZUNvbnRlbnQ7XG5sZXQgbWVudUNvbnRlbnQ7XG5sZXQgY29udGFjdENvbnRlbnQ7XG5cbmxldCBjdXJyZW50U2VjdGlvbjtcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAvLyBjcmVhdGUgdGhlIHRpdGxlIHRleHRcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUtY29udGFpbmVyJyk7XG4gIHRpdGxlLmlubmVySFRNTCA9ICc8cCBjbGFzcz1cInRpdGxlXCI+QmFyYXRpZTwvcD4nO1xuICAvLyBjcmVhdGUgdGhlIHRocmVlIGNhdGVnb3J5IGJ1dHRvbnNcbiAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIG5hdkJhci5jbGFzc0xpc3QuYWRkKCduYXYtYmFyJyk7XG4gIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWJ1dHRvbi1jb250YWluZXInKTtcbiAgaG9tZUJ1dHRvbi5pZCA9IFwiaG9tZUJ1dHRvblwiO1xuICBob21lQnV0dG9uLmlubmVySFRNTCArPSAnPHAgY2xhc3M9XCJzZWN0aW9uLWJ1dHRvblwiPkhvbWU8L3A+JztcbiAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWJ1dHRvbi1jb250YWluZXItc2VsZWN0ZWQnKTtcbiAgaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGNoYW5nZVNlY3Rpb24oJ2hvbWUnLCBuYXZCYXIpO1xuICB9KTtcbiAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24tYnV0dG9uLWNvbnRhaW5lcicpO1xuICBtZW51QnV0dG9uLmlkID0gXCJtZW51QnV0dG9uXCI7XG4gIG1lbnVCdXR0b24uaW5uZXJIVE1MICs9ICc8cCBjbGFzcz1cInNlY3Rpb24tYnV0dG9uXCI+TWVudTwvcD4nO1xuICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY2hhbmdlU2VjdGlvbignbWVudScsIG5hdkJhcik7XG4gIH0pO1xuICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi1idXR0b24tY29udGFpbmVyJyk7XG4gIGNvbnRhY3RCdXR0b24uaWQgPSBcImNvbnRhY3RCdXR0b25cIjtcbiAgY29udGFjdEJ1dHRvbi5pbm5lckhUTUwgKz0gJzxwIGNsYXNzPVwic2VjdGlvbi1idXR0b25cIj5Db250YWN0PC9wPic7XG4gIGNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBjaGFuZ2VTZWN0aW9uKCdjb250YWN0JywgbmF2QmFyKTtcbiAgfSk7XG4gIC8vIGFkZCBhbGwgdGhlIHRocmVlIHNlY3Rpb25zIHRvIHRoZSBoZWFkZXJcbiAgbmF2QmFyLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xuICBuYXZCYXIuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG4gIG5hdkJhci5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcbiAgLy8gYXBwZW5kIHRpdGxlIGFuZCB0aGUgc2VjdGlvbiBidXR0b25zIHRvIHRoZSBoZWFkZXJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdkJhcik7XG4gIC8vIGFwcGVuZCB0aGUgaGVhZGVyIHRvIHRoZSBkb2N1bWVudCBib2R5XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlU2VjdGlvbihuZXdTZWN0aW9uLCBuYXZCYXIpIHtcbiAgLy8gcmVtb3ZlIHRoZSB1bmRlcmxpbmUgZnJvbSB0aGUgb2xkIHNlY3Rpb25cbiAgbmF2QmFyLnF1ZXJ5U2VsZWN0b3IoYCMke2N1cnJlbnRTZWN0aW9ufUJ1dHRvbmApLmNsYXNzTGlzdC5yZW1vdmUoJ3NlY3Rpb24tYnV0dG9uLWNvbnRhaW5lci1zZWxlY3RlZCcpO1xuICAvLyB1bmRlcmxpbmUgdGhlIG5ldyBzZWN0aW9uXG4gIG5hdkJhci5xdWVyeVNlbGVjdG9yKGAjJHtuZXdTZWN0aW9ufUJ1dHRvbmApLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24tYnV0dG9uLWNvbnRhaW5lci1zZWxlY3RlZCcpO1xuICAvLyBkaXNwbGF5IHRoZSBuZXcgc2VjdGlvbidzIGNvbnRlbnRcbiAgaWYgKGN1cnJlbnRTZWN0aW9uICE9IG5ld1NlY3Rpb24pIHtcbiAgICBjbGVhckNvbnRlbnQoKTtcbiAgICAvLyBhY3R1YWxseSBzd2l0Y2ggdG8gdGhlIG5ldyBjb250ZW50XG4gICAgc3dpdGNoIChuZXdTZWN0aW9uKSB7XG4gICAgICBjYXNlICdob21lJzpcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChob21lQ29udGVudCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2hvbWVCYWNrZ3JvdW5kfSlgO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21lbnUnOlxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1lbnVDb250ZW50KTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7bWVudUJhY2tncm91bmR9KWA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY29udGFjdCc6XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRlbnQpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtjb250YWN0QmFja2dyb3VuZH0pYDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGN1cnJlbnRTZWN0aW9uID0gbmV3U2VjdGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2FkV2Vic2l0ZSgpIHtcbiAgY3JlYXRlSGVhZGVyKCk7XG4gIGhvbWVDb250ZW50ID0gY3JlYXRlSG9tZSgpO1xuICBtZW51Q29udGVudCA9IGNyZWF0ZU1lbnUoKTtcbiAgY29udGFjdENvbnRlbnQgPSBjcmVhdGVDb250YWN0KCk7XG4gIC8vIGluaXRpYWxseSBkaXNwbGF5IHRoZSBob21lIHNlY3Rpb25cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChob21lQ29udGVudCk7XG4gIGN1cnJlbnRTZWN0aW9uID0gXCJob21lXCI7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ29udGVudCgpIHtcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjdXJyZW50U2VjdGlvbn0tY29udGFpbmVyYCkpO1xufVxuXG5sb2FkV2Vic2l0ZSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==