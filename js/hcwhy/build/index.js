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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/hcwhy/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/hcwhy/src/App.js":
/*!*****************************!*\
  !*** ./js/hcwhy/src/App.js ***!
  \*****************************/
/*! exports provided: Hcwhy, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hcwhy", function() { return Hcwhy; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var htld_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! htld-lightbox */ "./node_modules/htld-lightbox/index.js");
/* harmony import */ var htld_lightbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(htld_lightbox__WEBPACK_IMPORTED_MODULE_2__);




var actionAbles = document.querySelectorAll(".hcwhy-btn");
function Hcwhy() {
  var font = window.htld_hcwhy.font;
  var lightbox = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  console.log(htld_lightbox__WEBPACK_IMPORTED_MODULE_2__["useLightbox"], "test2");
  Object(htld_lightbox__WEBPACK_IMPORTED_MODULE_2__["useLightbox"])(lightbox, "htld-theme-hcwhy");
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    actionAbles.forEach(function (e) {
      var open_action = function open_action(evt) {
        evt.preventDefault();
        lightbox.current.open();
      };

      e.addEventListener("click", open_action);
    });
  }, []);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "bg-white pa3 mw7 center"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "flex justify-end"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "pointer gray f3",
    onClick: function onClick() {
      return lightbox.current.close();
    }
  }, "\xD7")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "".concat(font, " f3 mb3 pb3 b--light-gray bb lh-title")
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Hello World", "htld-theme")));
}
/* harmony default export */ __webpack_exports__["default"] = (Hcwhy);

/***/ }),

/***/ "./js/hcwhy/src/index.js":
/*!*******************************!*\
  !*** ./js/hcwhy/src/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./js/hcwhy/src/App.js");



var renderTarget = document.getElementById("htld-theme-hcwhy");

if (renderTarget) {
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(React.StrictMode, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_App__WEBPACK_IMPORTED_MODULE_1__["default"], null)), renderTarget);
}

/***/ }),

/***/ "./node_modules/htld-lightbox/index.js":
/*!*********************************************!*\
  !*** ./node_modules/htld-lightbox/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=window.wp.element},function(e,t,n){"use strict";function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"htld-theme-js-lightbox";if(e){e.current={};var n=document.getElementById(t),r=n.closest(".htld-lightbox"),o=n.closest(".htld-lightbox-content"),l=r.querySelector(".htld-lightbox-close");e.current.open=function(t){r.classList.add("db"),r.classList.remove("dn"),e.current.lastScroll=window.scrollY,o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),t?(e.current.usesContent=!0,o.innerHTML=t):e.current.usesContent=!1};var c=function(){r.classList.remove("db"),r.classList.add("dn"),isNaN(e.current.lastScroll)||(window.scrollTo({top:e.current.lastScroll,left:0,behavior:"smooth"}),e.current.lastScroll=null),e.current.usesContent&&(o.innerHTML="")};e.current.close=c,l.addEventListener("click",c)}}n.r(t),n.d(t,"useLightbox",(function(){return r})),n.d(t,"Chrome",(function(){return l}));var o=n(0);function l(e){var t=e.light,n=e.children,r=e.title,l=e.font;return Object(o.createElement)("div",{className:"bg-white pa3 mw7 center"},Object(o.createElement)("div",{className:"flex justify-end"},Object(o.createElement)("div",{className:"pointer gray f3",onClick:function(){return t.current.close()}},"×")),Object(o.createElement)("div",{className:"".concat(l," f3 mb3 pb3 b--light-gray bb lh-title")},r),Object(o.createElement)("div",null,n))}}]);

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map