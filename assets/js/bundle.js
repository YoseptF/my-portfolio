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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/bling.js":
/*!****************************!*\
  !*** ./assets/js/bling.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.$ = document.querySelector.bind(document);\nwindow.$$ = document.querySelectorAll.bind(document);\n\nNode.prototype.on = window.on = function (name, fn) {\n  this.addEventListener(name, fn)\n};\n\nNodeList.prototype.__proto__ = Array.prototype;\n\nNodeList.prototype.on = function (name, fn) {\n  this.forEach(function (elem, i) {\n    elem.on(name, fn)\n  });\n};\n\n\n//# sourceURL=webpack:///./assets/js/bling.js?");

/***/ }),

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bling_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bling.js */ \"./assets/js/bling.js\");\n/* harmony import */ var _bling_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_bling_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var arr_diff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! arr-diff */ \"./node_modules/arr-diff/index.js\");\n/* harmony import */ var arr_diff__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(arr_diff__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nwindow.onload = event => {\n  let glitched = $('.glitch');\n\n  let messages = ['JAVASCRIPT', 'RUBY', 'GOLANG', 'REACT', 'RAILS', 'SQL'];\n\n  let cycle_animaton = event => {\n    let current_animation = glitched.classList.contains('fadeOutUp') ? 'fadeOutUp' : 'fadeInDown';\n\n    glitched.classList.remove(current_animation);\n\n    if (glitched.classList.contains('delay-3s'))\n      glitched.classList.remove('delay-3s');\n    else\n      glitched.classList.add('delay-3s');\n\n\n    if (current_animation == 'fadeOutUp') {\n      glitched.dataset.text = messages[0];\n      glitched.firstElementChild.innerHTML = messages[0];\n      glitched.firstElementChild.innerHTML = messages[0];\n      messages.push(messages.shift());\n    }\n\n    glitched.classList.add('animated', current_animation == 'fadeInDown' ? 'fadeOutUp' : 'fadeInDown');\n\n    glitched.on('animationend', cycle_animaton);\n  }\n  glitched.on('animationend', cycle_animaton);\n}\n\n\n//# sourceURL=webpack:///./assets/js/main.js?");

/***/ }),

/***/ "./node_modules/arr-diff/index.js":
/*!****************************************!*\
  !*** ./node_modules/arr-diff/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * arr-diff <https://github.com/jonschlinkert/arr-diff>\n *\n * Copyright (c) 2014-2017, Jon Schlinkert.\n * Released under the MIT License.\n */\n\n\n\nmodule.exports = function diff(arr/*, arrays*/) {\n  var len = arguments.length;\n  var idx = 0;\n  while (++idx < len) {\n    arr = diffArray(arr, arguments[idx]);\n  }\n  return arr;\n};\n\nfunction diffArray(one, two) {\n  if (!Array.isArray(two)) {\n    return one.slice();\n  }\n\n  var tlen = two.length\n  var olen = one.length;\n  var idx = -1;\n  var arr = [];\n\n  while (++idx < olen) {\n    var ele = one[idx];\n\n    var hasEle = false;\n    for (var i = 0; i < tlen; i++) {\n      var val = two[i];\n\n      if (ele === val) {\n        hasEle = true;\n        break;\n      }\n    }\n\n    if (hasEle === false) {\n      arr.push(ele);\n    }\n  }\n  return arr;\n}\n\n\n//# sourceURL=webpack:///./node_modules/arr-diff/index.js?");

/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./assets/js/main.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /home/yosept/htcdocs/my-portfolio/assets/js/main.js */\"./assets/js/main.js\");\n\n\n//# sourceURL=webpack:///multi_./assets/js/main.js?");

/***/ })

/******/ });