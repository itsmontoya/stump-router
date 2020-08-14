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
/******/ 	return __webpack_require__(__webpack_require__.s = "./router.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../stump/lib/stump.js":
/*!*****************************!*\
  !*** ../stump/lib/stump.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(n,\"__esModule\",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&\"object\"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,\"default\",{enumerable:!0,value:n}),2&t&&\"string\"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,\"a\",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p=\"\",e(e.s=0)}([function(n,t,e){\"use strict\";var r=this&&this.__assign||function(){return(r=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}).apply(this,arguments)};Object.defineProperty(t,\"__esModule\",{value:!0}),t.action=t.response=t.dispatcher=t.c=t.stump=void 0,t.stump=function(n){var t=document.getElementById(n.targetID);t.innerHTML=\"\";var e=r({},n.state);function o(r){e=r(e),f(o,t,n.view(e),t.children[0])}f(o,t,n.view(n.state),void 0,0),n.dispatchers.forEach(function(n){return function(n,t){if(\"object\"!=typeof(e=t)||\"function\"!=typeof e.ondispatch)throw\"invalid type, expected dispatcher and received \"+t;var e;t.ondispatch(n)}(o,n)})},t.c=function(n){return{type:n.type,children:n.children,options:n.options}},t.dispatcher=function(n){return{ondispatch:n}},t.response=function(n){return t.dispatcher(function(t){return t(n)})},t.action=function(n){return function(t,e){return e(function(e){return n(t,e)})}};var o=function(n,t){return function(e){return t(e,n)}};function i(n,t){if(\"string\"==typeof t)return document.createTextNode(t);var e=document.createElement(t.type);return function(n,t,e){if(!e)return;e.map(function(t){return i(n,t)}).forEach(t.appendChild.bind(t))}(n,e,t.children),function(n,t,e){for(var r in e){var o=u(r),i=c(n,e,r);t.setAttribute(o,i)}}(n,e,t.options),e}function u(n){switch(n){case\"class\":return\"className\";case\"contenteditable\":return\"contentEditable\";default:return n}}function c(n,t,e){var r=t[e];return\"style\"===e?function(n){var t=[];for(var e in n)t.push(e+\": \"+n[e]+\";\");return t.join(\" \")}(r):\"on\"===e.substr(0,2)?function(n,t){if(!function(n){if(\"object\"!=typeof n)return!1;return\"function\"==typeof n.onevent}(t))return t;var e=t.onevent;return o(n,e)}(n,r):r}function f(n,t,e,r,o){if(void 0===o&&(o=0),r)if(e)if(function(n,t){if(\"string\"==typeof n)return function(n,t){return n!==t.nodeValue}(n,t);if(function(n,t){return typeof n!=typeof t}(n,t))return!0;if(function(n,t){return n.type!==function(n){if(!n)return\"\";var t=n=n;if(!t.tagName)return\"\";return t.tagName.toLowerCase()}(t)}(n,t))return!0;return!1}(e,r)){console.log(\"Swapping!\");u=i(n,e);t.replaceChild(u,s(t,o))}else!function(n,t,e){if(\"string\"==typeof t)return;for(var r=function(n,t){var e=n.children.length,r=t.childNodes.length;return e>r?e:r}(t,e)-1;r>-1;r--)a(n,t,e,r)}(n,e,r);else t.removeChild(s(t,o));else{var u=i(n,e);t.appendChild(u)}}function a(n,t,e,r){var o;f(n,e,(o=r,t.children[o]),s(e,r),r)}function s(n,t){return n.childNodes[t]}}]);\n\n//# sourceURL=webpack:///../stump/lib/stump.js?");

/***/ }),

/***/ "./lookupTable.ts":
/*!************************!*\
  !*** ./lookupTable.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.lookup = void 0;\nexports.lookup = function (arr) {\n    var lookup = {};\n    arr.forEach(function (item) {\n        return lookup[item.name] = item;\n    });\n    return lookup;\n};\n\n\n//# sourceURL=webpack:///./lookupTable.ts?");

/***/ }),

/***/ "./route.ts":
/*!******************!*\
  !*** ./route.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.getMatch = void 0;\nvar url_1 = __webpack_require__(/*! ./url */ \"./url.ts\");\nfunction getMatch(route, parts) {\n    var params = url_1.getParams(route, parts);\n    if (params === null) {\n        return null;\n    }\n    return { route: route, params: params };\n}\nexports.getMatch = getMatch;\nfunction getParts(route, parts) {\n    if (route.parts.length !== parts.length) {\n        // The length of the parts differ, return\n        return null;\n    }\n    var params = {};\n    var iteratingFn = function (routePart, i) {\n        return appendParam(params, routePart, parts[i]);\n    };\n    var ended = route.parts\n        .some(iteratingFn);\n    if (ended) {\n        return null;\n    }\n    return params;\n}\nfunction appendParam(params, routePart, part) {\n    if (routePart === part) {\n        // This is a direct match, return\n        return;\n    }\n    if (routePart[0] === \":\") {\n        // Set key as the route part with the colon shifted off the front\n        var key = routePart.substr(1);\n        // Set part as the param value for the target key\n        params[key] = part;\n        return;\n    }\n    // This is not a match, end early\n    return true;\n}\n\n\n//# sourceURL=webpack:///./route.ts?");

/***/ }),

/***/ "./router.ts":
/*!*******************!*\
  !*** ./router.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.setCurrentRoute = exports.setRoute = exports.dispatchCurrentRoute = exports.dispatchURL = exports.pushURL = exports.setRoutes = exports.getRouteMatch = exports.getRouteByName = void 0;\nvar lookupTable_1 = __webpack_require__(/*! ./lookupTable */ \"./lookupTable.ts\");\nvar route_1 = __webpack_require__(/*! ./route */ \"./route.ts\");\nvar url_1 = __webpack_require__(/*! ./url */ \"./url.ts\");\nvar stump_1 = __webpack_require__(/*! stump */ \"../stump/lib/stump.js\");\nvar routesState = [], routesByName = {};\nfunction getRouteByName(name) {\n    return routesByName[name];\n}\nexports.getRouteByName = getRouteByName;\nfunction getRouteMatch(url) {\n    var parts = url_1.getURLParts(url);\n    var match = null;\n    routesState.some(function (route) {\n        match = route_1.getMatch(route, parts);\n        return match != null;\n    });\n    return match;\n}\nexports.getRouteMatch = getRouteMatch;\nfunction setRoutes(routes) {\n    var prepared = [];\n    // Set parts for each route\n    routes.forEach(function (r) {\n        return prepared.push(__assign({}, r));\n    });\n    // Assign new lookup table to name lookup\n    routesByName = lookupTable_1.lookup(prepared);\n    // Assign prepared to r\n    routesState = prepared;\n}\nexports.setRoutes = setRoutes;\nexports.pushURL = function (options) {\n    return function (_, dispatch) {\n        return exports.dispatchURL(options)(dispatch);\n    };\n};\nexports.dispatchURL = function (_a) {\n    var _b = _a.title, title = _b === void 0 ? \"\" : _b, _c = _a.url, url = _c === void 0 ? \"\" : _c;\n    return function (dispatch) {\n        history.pushState({}, title, url);\n        dispatch(exports.setCurrentRoute);\n    };\n};\nexports.dispatchCurrentRoute = stump_1.dispatcher(function (dispatch) {\n    return dispatch(exports.setCurrentRoute);\n});\nexports.setRoute = function (match) {\n    return stump_1.action(function (state) {\n        return setMatch(state, match);\n    });\n};\nexports.setCurrentRoute = function (state) {\n    // Set path as current location path\n    var path = document.location.pathname;\n    // Get route match for current path\n    var match = getRouteMatch(path);\n    // Check to see if match exists\n    if (match === null) {\n        // Route match not found, throw error\n        throw (\"404: cannot find route match for \" + path);\n    }\n    return setMatch(state, match);\n};\nvar setMatch = function (state, match) { return (__assign(__assign({}, state), { currentRoute: match.route, currentParams: match.params })); };\n\n\n//# sourceURL=webpack:///./router.ts?");

/***/ }),

/***/ "./url.ts":
/*!****************!*\
  !*** ./url.ts ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.getParams = exports.getURLParts = void 0;\nfunction getURLParts(url) {\n    return url.split(\"/\")\n        .filter(function (part) {\n        return part.length > 0;\n    });\n}\nexports.getURLParts = getURLParts;\nfunction getParams(route, parts) {\n    if (route.parts.length !== parts.length) {\n        return null;\n    }\n    var params = {};\n    var ended = route.parts\n        .some(getParam(parts, params));\n    if (ended) {\n        return null;\n    }\n    return params;\n}\nexports.getParams = getParams;\nvar getParam = function (parts, params) { return function (routePart, i) {\n    var part = parts[i];\n    if (routePart === part) {\n        return;\n    }\n    if (routePart[0] === \":\") {\n        params[routePart.substr(1)] = part;\n        return;\n    }\n    return true;\n}; };\n\n\n//# sourceURL=webpack:///./url.ts?");

/***/ })

/******/ });