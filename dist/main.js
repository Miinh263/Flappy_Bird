/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/nenchinh.png */ \"./src/images/nenchinh.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n}\\r\\n\\r\\n.modal-content {\\r\\n  height: 200px;\\r\\n  width: 300px;\\r\\n  margin-left: 270px;\\r\\n  background-color: cornflowerblue;\\r\\n\\r\\n  border-radius: 30px;\\r\\n}\\r\\n#myModal {\\r\\n  display: none;\\r\\n}\\r\\n.game_over {\\r\\n  padding-left: 60px;\\r\\n  color: yellow;\\r\\n}\\r\\n#play_again {\\r\\n  margin-left: 90px;\\r\\n  border: solid 2px;\\r\\n  border-radius: 5px;\\r\\n  background-color: rgb(11, 164, 113);\\r\\n\\r\\n  width: 100px;\\r\\n  height: 35px;\\r\\n}\\r\\n#score_game {\\r\\n  color: yellow;\\r\\n  margin-left: 110px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/css/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/css/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.css */ \"./src/css/index.css\");\n\r\nvar canvas = document.getElementById(\"bird\");\r\nvar ctx = canvas.getContext(\"2d\");\r\nvar bird = new Image();\r\nvar back_ground = new Image();\r\nvar above = new Image();\r\nvar below = new Image();\r\nvar play = new Image();\r\nbird.src = \"../src/images/bird.png\";\r\nback_ground.src = \"../src/images/nenchinh.png\";\r\nabove.src = \"../src/images/ongtren.png\";\r\nbelow.src = \"../src/images/ongduoi.png\";\r\nplay.src = \"../src/images/buttonplay.png\";\r\n//\r\nvar score = 0;\r\nvar distance = 100;\r\nvar distance_to_below;\r\n//đối tượng bird\r\nvar bird_ob = {\r\n    x: 400,\r\n    y: 200,\r\n};\r\n//\r\n//xét giá trị a cho vật dừng hoặc di chuyển a==1 di chuyển, a== 0 dừng:\r\nvar a = 1;\r\nvar b = 0;\r\nvar pipes = new Array();\r\npipes[0] = canvas.width;\r\nfunction barrier() {\r\n    for (var i = 0; i < pipes.length; i++) {\r\n        distance_to_below = above.height + distance;\r\n        ctx.drawImage(above, pipes[i], 0);\r\n        ctx.drawImage(below, pipes[i], distance_to_below);\r\n        //cột di chuyển\r\n        if (a == 1) {\r\n            pipes[i] -= 5;\r\n        }\r\n        // thêm cột mới\r\n        if (pipes[i] == 450) {\r\n            //location.push(canvas.width);\r\n            // location.push(Math.floor(Math.random() * above.height) - above.height);\r\n            pipes.push(canvas.width);\r\n        }\r\n        //vượt qua ko va chạm\r\n        if (pipes[i] == bird_ob.x &&\r\n            bird_ob.y > above.height &&\r\n            bird_ob.y < above.height + distance)\r\n            score++;\r\n        //va chạm cột trên\r\n        if (pipes[i] == bird_ob.x && bird_ob.y <= above.height) {\r\n            {\r\n                a = 0; //dừng vật\r\n                modal.style.display = \"block\";\r\n                document.getElementById(\"score_game\").innerHTML = \"score : \" + score;\r\n            }\r\n        }\r\n        //va chạm cột dưới\r\n        if (pipes[i] == bird_ob.x && bird_ob.y >= distance_to_below) {\r\n            {\r\n                a = 0;\r\n                modal.style.display = \"block\";\r\n                document.getElementById(\"score_game\").innerHTML = \"score : \" + score;\r\n            }\r\n        }\r\n        //xử lý chim chạm xuống đất\r\n        if (bird_ob.y >= 480) {\r\n            {\r\n                a = 0;\r\n                modal.style.display = \"block\";\r\n                document.getElementById(\"score_game\").innerHTML = \"score : \" + score;\r\n            }\r\n        }\r\n    }\r\n}\r\n//\r\nback_ground.onload = function () {\r\n    ctx.drawImage(back_ground, 0, 0);\r\n    ctx.drawImage(bird, bird_ob.x, bird_ob.y);\r\n    ctx.drawImage(play, bird_ob.x - 90, bird_ob.y + 70);\r\n};\r\nfunction run() {\r\n    //vẽ nền & chim\r\n    ctx.drawImage(back_ground, 0, 0);\r\n    ctx.drawImage(bird, bird_ob.x, bird_ob.y);\r\n    // xử lý va chạm\r\n    barrier();\r\n    //chim rơi xuống\r\n    if (a == 1) {\r\n        bird_ob.y += 2;\r\n    }\r\n    requestAnimationFrame(run);\r\n}\r\n//xử lý nút play\r\ndocument.onclick = function () {\r\n    run();\r\n};\r\n//run();\r\ndocument.addEventListener(\"keydown\", function () {\r\n    bird_ob.y -= 40;\r\n});\r\nvar modal = document.getElementById(\"myModal\");\r\n// xử lý nút play_again\r\ndocument.getElementById(\"play_again\").onclick = function () {\r\n    location.reload();\r\n};\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.ts?");

/***/ }),

/***/ "./src/images/nenchinh.png":
/*!*********************************!*\
  !*** ./src/images/nenchinh.png ***!
  \*********************************/
/***/ ((module) => {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA4QAAAH4CAIAAACdU7T/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEM1REM1ODQ4RkEwMTFFM0E3QjBDMkZCNkQxNDdFNDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEM1REM1ODM4RkEwMTFFM0E3QjBDMkZCNkQxNDdFNDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuZGlkOjAxODAxMTc0MDcyMDY4MTE4MDgzOTM3MkQwRUNFNDc1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAxODAxMTc0MDcyMDY4MTE4MDgzOTM3MkQwRUNFNDc1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+3KDNfAAADlJJREFUeNrs3b+O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\";\n\n//# sourceURL=webpack://my-webpack-project/./src/images/nenchinh.png?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;