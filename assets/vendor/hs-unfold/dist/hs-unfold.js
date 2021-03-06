(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HSUnfold"] = factory();
	else
		root["HSUnfold"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/hs-unfold.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/hs-unfold.js":
/*!*****************************!*\
  !*** ./src/js/hs-unfold.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _smartPosition = __webpack_require__(/*! ./methods/smart-position */ \"./src/js/methods/smart-position.js\");\n\nvar _smartPosition2 = _interopRequireDefault(_smartPosition);\n\nvar _closeElementWithSpecificEffect = __webpack_require__(/*! ./methods/close-element-with-specific-effect */ \"./src/js/methods/close-element-with-specific-effect.js\");\n\nvar _closeElementWithSpecificEffect2 = _interopRequireDefault(_closeElementWithSpecificEffect);\n\nvar _simple = __webpack_require__(/*! ./modes/simple */ \"./src/js/modes/simple.js\");\n\nvar _simple2 = _interopRequireDefault(_simple);\n\nvar _simpleShow = __webpack_require__(/*! ./methods/simple-show */ \"./src/js/methods/simple-show.js\");\n\nvar _simpleShow2 = _interopRequireDefault(_simpleShow);\n\nvar _cssAnimation = __webpack_require__(/*! ./modes/css-animation */ \"./src/js/modes/css-animation.js\");\n\nvar _cssAnimation2 = _interopRequireDefault(_cssAnimation);\n\nvar _cssAnimationShow = __webpack_require__(/*! ./methods/css-animation-show */ \"./src/js/methods/css-animation-show.js\");\n\nvar _cssAnimationShow2 = _interopRequireDefault(_cssAnimationShow);\n\nvar _slide = __webpack_require__(/*! ./modes/slide */ \"./src/js/modes/slide.js\");\n\nvar _slide2 = _interopRequireDefault(_slide);\n\nvar _slideShow = __webpack_require__(/*! ./methods/slide-show */ \"./src/js/methods/slide-show.js\");\n\nvar _slideShow2 = _interopRequireDefault(_slideShow);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar HSUnfold = function () {\n\tfunction HSUnfold(elem, settings) {\n\t\t_classCallCheck(this, HSUnfold);\n\n\t\tthis.elem = elem;\n\t\tthis.defaults = {\n\t\t\tevent: 'click',\n\t\t\ttype: 'simple',\n\t\t\tduration: 300,\n\t\t\tdelay: 350,\n\t\t\teasing: 'linear',\n\t\t\tanimationIn: 'slideInUp',\n\t\t\tanimationOut: 'fadeOut',\n\t\t\thideOnScroll: false,\n\t\t\thasOverlay: false,\n\t\t\tsmartPositionOff: false,\n\n\t\t\twrapperSelector: '.hs-unfold',\n\t\t\tcontentSelector: '.hs-unfold-content',\n\t\t\tinvokerSelector: '.js-hs-unfold-invoker',\n\t\t\tinvokerActiveClass: '.hs-active',\n\t\t\toverlayClass: '.hs-unfold-overlay',\n\t\t\toverlayStyles: {},\n\t\t\tinitializedClass: '.hs-unfold-content-initialized',\n\t\t\thiddenClass: '.hs-unfold-hidden',\n\t\t\tsimpleEffectClass: '.hs-unfold-simple',\n\t\t\tcssAnimationClass: '.hs-unfold-css-animation',\n\t\t\tcssAnimatedClass: '.animated',\n\t\t\tslideEffectClass: '.hs-unfold-jquery-slide',\n\t\t\treverseClass: '.hs-unfold-reverse-y',\n\n\t\t\tunfoldTimeOut: null,\n\n\t\t\tafterOpen: function afterOpen() {},\n\t\t\tafterClose: function afterClose() {}\n\t\t};\n\t\tthis.settings = settings;\n\t}\n\n\t_createClass(HSUnfold, [{\n\t\tkey: \"init\",\n\t\tvalue: function init() {\n\t\t\tvar context = this;\n\n\t\t\t// Keycodes\n\t\t\tvar ESC_KEYCODE = 27,\n\t\t\t    TAB_KEYCODE = 9,\n\t\t\t    ENTER_KEYCODE = 13,\n\t\t\t    SPACE_KEYCODE = 32,\n\t\t\t    ARROW_UP_KEYCODE = 38,\n\t\t\t    ARROW_DOWN_KEYCODE = 40,\n\t\t\t    ARROW_RIGHT_KEYCODE = 39,\n\t\t\t    ARROW_LEFT_KEYCODE = 37;\n\n\t\t\t// Prevent scroll\n\t\t\tfunction preventScroll(keycode) {\n\t\t\t\treturn function (e) {\n\t\t\t\t\tif (e.which === keycode) {\n\t\t\t\t\t\te.preventDefault();\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t}\n\n\t\t\t// Get Item Settings\n\t\t\tfunction getItemSettings(el) {\n\t\t\t\tvar $el = el,\n\t\t\t\t    dataSettings = $el.attr('data-hs-unfold-options') ? JSON.parse($el.attr('data-hs-unfold-options')) : {};\n\t\t\t\tvar options = Object.assign({}, context.defaults, context.settings, dataSettings);\n\n\t\t\t\treturn options;\n\t\t\t}\n\n\t\t\t// Init Unfold\n\t\t\t$(this.elem).each(function () {\n\t\t\t\tcontext.UnfoldItem($(this));\n\t\t\t});\n\n\t\t\t// *****\n\t\t\t// Start: ACCESSIBILITY\n\t\t\t// *****\n\t\t\tvar myPreventScrollSpace = preventScroll(SPACE_KEYCODE),\n\t\t\t    myPreventScrollDown = preventScroll(ARROW_DOWN_KEYCODE),\n\t\t\t    myPreventScrollUp = preventScroll(ARROW_UP_KEYCODE);\n\n\t\t\tvar $items = void 0,\n\t\t\t    index = void 0,\n\t\t\t    itemSettings = void 0;\n\n\t\t\t$(document).on('keyup', '[data-hs-unfold-invoker], [data-hs-unfold-content]', function (e) {\n\t\t\t\t//\n\t\t\t\t// Start: PREVENT SCROLL\n\t\t\t\t//\n\t\t\t\te.preventDefault();\n\t\t\t\te.stopPropagation();\n\n\t\t\t\twindow.addEventListener('keydown', myPreventScrollSpace, false);\n\t\t\t\twindow.addEventListener('keydown', myPreventScrollUp, false);\n\t\t\t\twindow.addEventListener('keydown', myPreventScrollDown, false);\n\n\t\t\t\t//\n\t\t\t\t// End: PREVENT SCROLL\n\t\t\t\t//\n\n\t\t\t\tif (_typeof($(e.target).attr('data-hs-unfold-invoker')) !== ( true ? \"undefined\" : undefined) && $(e.target).attr('data-hs-unfold-invoker') !== false) {\n\t\t\t\t\titemSettings = getItemSettings($(e.target));\n\n\t\t\t\t\t$items = [].slice.call($(itemSettings.target).find('a, button, input, select, textarea')).filter(function (item) {\n\t\t\t\t\t\treturn $(item).is(':visible');\n\t\t\t\t\t});\n\t\t\t\t}\n\n\t\t\t\tindex = $items.indexOf(e.target);\n\n\t\t\t\t//\n\t\t\t\t// End: HAS ITEMS\n\t\t\t\t//\n\n\t\t\t\t// Up\n\t\t\t\tif ($items.length > 0 && e.which === ARROW_UP_KEYCODE && index > 0) {\n\t\t\t\t\tindex--;\n\t\t\t\t}\n\n\t\t\t\t// Down\n\t\t\t\tif ($items.length > 0 && e.which === ARROW_DOWN_KEYCODE && index < $items.length - 1) {\n\t\t\t\t\tindex++;\n\t\t\t\t}\n\n\t\t\t\t// Open Dropdown\n\t\t\t\tif ($items.length <= 0 && (e.which === ARROW_DOWN_KEYCODE || e.which === ARROW_UP_KEYCODE || e.which === SPACE_KEYCODE || e.which === ENTER_KEYCODE)) {\n\t\t\t\t\tif (!$(itemSettings.target + \":visible\").length) {\n\t\t\t\t\t\t$(e.target).addClass(itemSettings.invokerActiveClass.slice(1));\n\n\t\t\t\t\t\tif (itemSettings.type === 'css-animation') {\n\t\t\t\t\t\t\t(0, _cssAnimationShow2.default)($(itemSettings.target), itemSettings);\n\t\t\t\t\t\t} else if (itemSettings.type === 'jquery-slide') {\n\t\t\t\t\t\t\t(0, _slideShow2.default)($(itemSettings.target), itemSettings, function () {});\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t(0, _simpleShow2.default)($(itemSettings.target), itemSettings);\n\t\t\t\t\t\t}\n\t\t\t\t\t} else if ($(itemSettings.target + \":visible\").length) {\n\t\t\t\t\t\t$($(itemSettings.target).find('a')[0]).focus();\n\n\t\t\t\t\t\treturn;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t// Close Self\n\t\t\t\tif (e.which === ESC_KEYCODE) {\n\t\t\t\t\tvar _$target = $(itemSettings.contentSelector + \":not(\" + itemSettings.hiddenClass + \")\");\n\n\t\t\t\t\t// $(itemSettings.invokerActiveClass).focus();\n\n\t\t\t\t\t(0, _closeElementWithSpecificEffect2.default)(_$target, itemSettings, _$target.data('hs-unfold-content-animation-in'), _$target.data('hs-unfold-content-animation-out'));\n\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\t// Close All\n\t\t\t\tif (e.which === TAB_KEYCODE && $(e.target).closest('[data-hs-unfold-content]').length === 0) {\n\t\t\t\t\tvar $invoker = $('[data-hs-unfold-invoker].hs-active'),\n\t\t\t\t\t    $target = $('[data-hs-unfold-content]:visible'),\n\t\t\t\t\t    openedItemSettings = getItemSettings($invoker);\n\n\t\t\t\t\t$invoker.removeClass('hs-active');\n\n\t\t\t\t\t(0, _closeElementWithSpecificEffect2.default)($target, openedItemSettings, $target.data('hs-unfold-content-animation-in'), $target.data('hs-unfold-content-animation-out'));\n\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\t//\n\t\t\t\t// End: HAS ITEMS\n\t\t\t\t//\n\n\t\t\t\t$($items[index]).focus();\n\t\t\t});\n\n\t\t\t$(document).on('keyup', function (e) {\n\t\t\t\t// Close All\n\t\t\t\tif (e.which === TAB_KEYCODE && $(e.target).closest('[data-hs-unfold-content]').length === 0) {\n\t\t\t\t\tvar $invoker = $('[data-hs-unfold-invoker].hs-active'),\n\t\t\t\t\t    $target = $('[data-hs-unfold-content]:visible'),\n\t\t\t\t\t    openedItemSettings = getItemSettings($invoker);\n\n\t\t\t\t\t$invoker.removeClass('hs-active');\n\n\t\t\t\t\t(0, _closeElementWithSpecificEffect2.default)($target, openedItemSettings, $target.data('hs-unfold-content-animation-in'), $target.data('hs-unfold-content-animation-out'));\n\t\t\t\t}\n\t\t\t});\n\n\t\t\t// *****\n\t\t\t// End: ACCESSIBILITY\n\t\t\t// *****\n\t\t}\n\t}, {\n\t\tkey: \"UnfoldItem\",\n\t\tvalue: function UnfoldItem(el) {\n\t\t\tvar context = this,\n\t\t\t    $el = el,\n\t\t\t    itemDataSettings = el.attr('data-hs-unfold-options') ? JSON.parse(el.attr('data-hs-unfold-options')) : {};\n\t\t\tvar options = Object.assign({}, context.defaults, context.settings, itemDataSettings);\n\n\t\t\tcontext._prepareObjects($el, $(options.target), options);\n\n\t\t\t$el.on(options.event === 'hover' ? 'mouseenter' : 'click', function () {\n\t\t\t\t$(options.contentSelector).not($(options.target)).not($(options.target).parents(options.contentSelector)).each(function () {\n\t\t\t\t\t$(options.invokerSelector).removeClass(options.invokerActiveClass.slice(1));\n\n\t\t\t\t\t(0, _closeElementWithSpecificEffect2.default)($(this), options, options.animationIn, options.animationOut);\n\t\t\t\t});\n\t\t\t});\n\n\t\t\tif (options.type === 'css-animation') {\n\t\t\t\t(0, _cssAnimation2.default)($el, options, options.animationOut);\n\t\t\t} else if (options.type === 'jquery-slide') {\n\t\t\t\t(0, _slide2.default)($el, options);\n\t\t\t} else {\n\t\t\t\t(0, _simple2.default)($el, options);\n\t\t\t}\n\n\t\t\t// Document Events\n\t\t\t$(window).on('click', function (e) {\n\t\t\t\tvar targetClass = options.contentSelector + \":not(\" + options.hiddenClass + \")\",\n\t\t\t\t    $target = $(targetClass);\n\n\t\t\t\tif ($(e.target).closest(options.contentSelector).length === 0 && $(e.target).closest(options.invokerSelector).length === 0 && $target.length !== 0) {\n\t\t\t\t\t$el.removeClass(options.invokerActiveClass.slice(1));\n\n\t\t\t\t\t(0, _closeElementWithSpecificEffect2.default)($target, options, $target.data('hs-unfold-content-animation-in'), $target.data('hs-unfold-content-animation-out'));\n\t\t\t\t} else if ($(e.target).closest(options.contentSelector).length !== 0 && $(e.target).closest(options.contentSelector).find(options.contentSelector).length !== 0 && $(e.target).closest(options.invokerSelector).length === 0) {\n\t\t\t\t\t(0, _closeElementWithSpecificEffect2.default)($(e.target).closest(options.contentSelector).find(targetClass), options, $(e.target).closest(options.contentSelector).find(targetClass).data('hs-unfold-content-animation-in'), $(e.target).closest(options.contentSelector).find(targetClass).data('hs-unfold-content-animation-out'));\n\t\t\t\t}\n\t\t\t});\n\n\t\t\t// Resize and Scroll Events\n\t\t\t$(window).on('resize scroll', function () {\n\t\t\t\tif (!options.smartPositionOff) {\n\t\t\t\t\t(0, _smartPosition2.default)($(options.target), $el, options);\n\t\t\t\t}\n\t\t\t});\n\n\t\t\tif (options.hideOnScroll) {\n\t\t\t\t$(window).on('scroll', function () {\n\t\t\t\t\t$el.removeClass(options.invokerActiveClass.slice(1));\n\n\t\t\t\t\t(0, _closeElementWithSpecificEffect2.default)($(options.target), options, options.animationIn, options.animationOut);\n\t\t\t\t});\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: \"_prepareObjects\",\n\t\tvalue: function _prepareObjects(el, target, config) {\n\t\t\tel.addClass(config.invokerSelector.slice(1));\n\t\t\tel.attr('data-hs-unfold-target', config.target);\n\t\t\tel.attr('data-hs-unfold-invoker', '');\n\t\t\ttarget.attr('data-hs-target-height', target.outerHeight());\n\t\t\ttarget.attr('data-hs-unfold-content', '');\n\t\t\ttarget.addClass(config.hiddenClass.slice(1) + \" \" + config.initializedClass.slice(1));\n\n\t\t\tif (config.hasOverlay && $(config.overlayClass).length === 0) {\n\t\t\t\t$('body').append($(\"<div class=\\\"\" + config.overlayClass.slice(1) + \"\\\"></div>\").css(config.overlayStyles));\n\t\t\t}\n\n\t\t\tif (config.type === 'css-animation') {\n\t\t\t\ttarget.attr('data-hs-unfold-content-animation-in', config.animationIn);\n\t\t\t\ttarget.attr('data-hs-unfold-content-animation-out', config.animationOut);\n\t\t\t}\n\t\t}\n\t}]);\n\n\treturn HSUnfold;\n}();\n\nexports.default = HSUnfold;\n\n//# sourceURL=webpack://HSUnfold/./src/js/hs-unfold.js?");

/***/ }),

/***/ "./src/js/methods/close-element-with-specific-effect.js":
/*!**************************************************************!*\
  !*** ./src/js/methods/close-element-with-specific-effect.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.default = closeElementWithSpecificEffect;\n\nvar _simpleHide = __webpack_require__(/*! ../methods/simple-hide */ \"./src/js/methods/simple-hide.js\");\n\nvar _simpleHide2 = _interopRequireDefault(_simpleHide);\n\nvar _cssAnimationHide = __webpack_require__(/*! ./css-animation-hide */ \"./src/js/methods/css-animation-hide.js\");\n\nvar _cssAnimationHide2 = _interopRequireDefault(_cssAnimationHide);\n\nvar _slideHide = __webpack_require__(/*! ../methods/slide-hide */ \"./src/js/methods/slide-hide.js\");\n\nvar _slideHide2 = _interopRequireDefault(_slideHide);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction closeElementWithSpecificEffect(el, config, cssAnimationShowEffect, cssAnimationHideEffect) {\n\tif (el.hasClass(config.hiddenClass.slice(1))) return;\n\n\tif (el.hasClass(config.cssAnimationClass.slice(1))) {\n\t\t(0, _cssAnimationHide2.default)(el, config, cssAnimationHideEffect);\n\n\t\tel.on('animationend webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend', function (e) {\n\t\t\tif (el.hasClass(cssAnimationHideEffect)) {\n\t\t\t\tel.removeClass(cssAnimationHideEffect).addClass(config.hiddenClass.slice(1));\n\n\t\t\t\tconfig.afterClose();\n\t\t\t}\n\n\t\t\tif (el.hasClass(cssAnimationShowEffect)) {\n\t\t\t\tconfig.afterOpen();\n\t\t\t}\n\n\t\t\te.preventDefault();\n\t\t\te.stopPropagation();\n\t\t});\n\t} else if (el.hasClass(config.slideEffectClass.slice(1))) {\n\t\t(0, _slideHide2.default)(el, config, function () {});\n\t} else {\n\t\t(0, _simpleHide2.default)(el, config);\n\t}\n}\n\n//# sourceURL=webpack://HSUnfold/./src/js/methods/close-element-with-specific-effect.js?");

/***/ }),

/***/ "./src/js/methods/css-animation-hide.js":
/*!**********************************************!*\
  !*** ./src/js/methods/css-animation-hide.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.default = cssAnimationHide;\nfunction cssAnimationHide(target, config, effect) {\n\ttarget.removeClass(config.animationIn).addClass(effect);\n}\n\n//# sourceURL=webpack://HSUnfold/./src/js/methods/css-animation-hide.js?");

/***/ }),

/***/ "./src/js/methods/css-animation-show.js":
/*!**********************************************!*\
  !*** ./src/js/methods/css-animation-show.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.default = cssAnimationShow;\nfunction cssAnimationShow(target, config) {\n\tif (config.cssAnimatedClass) {\n\t\ttarget.removeClass(config.hiddenClass.slice(1) + \" \" + config.animationOut).addClass(config.animationIn);\n\t} else {\n\t\ttarget.removeClass(config.hiddenClass.slice(1) + \" \" + config.animationOut);\n\n\t\tsetTimeout(function () {\n\t\t\ttarget.addClass(config.animationIn);\n\t\t});\n\t}\n}\n\n//# sourceURL=webpack://HSUnfold/./src/js/methods/css-animation-show.js?");

/***/ }),

/***/ "./src/js/methods/simple-hide.js":
/*!***************************************!*\
  !*** ./src/js/methods/simple-hide.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.default = simpleHide;\nfunction simpleHide(target, config) {\n\ttarget.addClass(config.hiddenClass.slice(1));\n\n\tif (config.hasOverlay) {\n\t\t$(config.overlayClass).hide();\n\t}\n\n\tconfig.afterClose();\n}\n\n//# sourceURL=webpack://HSUnfold/./src/js/methods/simple-hide.js?");

/***/ }),

/***/ "./src/js/methods/simple-show.js":
/*!***************************************!*\
  !*** ./src/js/methods/simple-show.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.default = simpleShow;\nfunction simpleShow(target, config) {\n\ttarget.removeClass(config.hiddenClass.slice(1));\n\n\tif (config.hasOverlay) {\n\t\t$(config.overlayClass).show();\n\t}\n\n\tconfig.afterOpen();\n}\n\n//# sourceURL=webpack://HSUnfold/./src/js/methods/simple-show.js?");

/***/ }),

/***/ "./src/js/methods/slide-hide.js":
/*!**************************************!*\
  !*** ./src/js/methods/slide-hide.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.default = slideHide;\nfunction slideHide(target, config, callback) {\n\ttarget.slideUp({\n\t\tduration: config.duration,\n\t\teasing: config.easing,\n\t\tcomplete: function complete() {\n\t\t\tcallback();\n\n\t\t\tconfig.afterClose();\n\n\t\t\ttarget.addClass(config.hiddenClass.slice(1));\n\t\t}\n\t});\n\n\tif (config.hasOverlay) {\n\t\t$(config.overlayClass).fadeOut(200);\n\t}\n}\n\n//# sourceURL=webpack://HSUnfold/./src/js/methods/slide-hide.js?");

/***/ }),

/***/ "./src/js/methods/slide-show.js":
/*!**************************************!*\
  !*** ./src/js/methods/slide-show.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.default = slideShow;\nfunction slideShow(target, config, callback) {\n\ttarget.removeClass(config.hiddenClass.slice(1)).stop().slideDown({\n\t\tduration: config.duration,\n\t\teasing: config.easing,\n\t\tcomplete: function complete() {\n\t\t\tcallback();\n\t\t\tconfig.afterOpen();\n\t\t}\n\t});\n\n\tif (config.hasOverlay) {\n\t\t$(config.overlayClass).fadeIn(200);\n\t}\n}\n\n//# sourceURL=webpack://HSUnfold/./src/js/methods/slide-show.js?");

/***/ }),

/***/ "./src/js/methods/smart-position.js":
/*!******************************************!*\
  !*** ./src/js/methods/smart-position.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.default = smartPosition;\nfunction smartPosition(el, invoker, config) {\n\tvar $w = $(window);\n\tvar styles = getComputedStyle(el.get(0)),\n\t    direction = Math.abs(parseInt(styles.left, 10)) < 40 ? 'left' : 'right',\n\t    targetOuterGeometry = el.offset(),\n\t    invokerOffsetTop = invoker.offset().top - $(window).scrollTop();\n\n\t// Horizontal Axis\n\tif (direction === 'right') {\n\t\tif (targetOuterGeometry.left < 0) {\n\t\t\tel.css({\n\t\t\t\tleft: 'auto',\n\t\t\t\tright: (parseInt(el.css('right'), 10) - (targetOuterGeometry.left - 10)) * -1\n\t\t\t});\n\t\t}\n\t} else {\n\t\tif (targetOuterGeometry.left + el.outerWidth() > $w.width()) {\n\t\t\tel.css({\n\t\t\t\tright: 'auto',\n\t\t\t\tleft: parseInt(el.css('left'), 10) - (targetOuterGeometry.left + el.outerWidth() + 10 - $w.width())\n\t\t\t});\n\t\t}\n\t}\n\n\t// Vertical Axis\n\tif (invokerOffsetTop > $w.height() / 2 && el.data('hs-target-height') - invoker.offset().top < 0) {\n\t\tel.addClass(config.reverseClass.slice(1));\n\t} else {\n\t\tel.removeClass(config.reverseClass.slice(1));\n\t}\n}\n\n//# sourceURL=webpack://HSUnfold/./src/js/methods/smart-position.js?");

/***/ }),

/***/ "./src/js/modes/css-animation.js":
/*!***************************************!*\
  !*** ./src/js/modes/css-animation.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.default = cssAnimation;\n\nvar _smartPosition = __webpack_require__(/*! ../methods/smart-position */ \"./src/js/methods/smart-position.js\");\n\nvar _smartPosition2 = _interopRequireDefault(_smartPosition);\n\nvar _cssAnimationShow = __webpack_require__(/*! ../methods/css-animation-show */ \"./src/js/methods/css-animation-show.js\");\n\nvar _cssAnimationShow2 = _interopRequireDefault(_cssAnimationShow);\n\nvar _cssAnimationHide = __webpack_require__(/*! ../methods/css-animation-hide */ \"./src/js/methods/css-animation-hide.js\");\n\nvar _cssAnimationHide2 = _interopRequireDefault(_cssAnimationHide);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction cssAnimation(el, config, hideEffect) {\n\t$(config.target).addClass(config.cssAnimationClass.slice(1) + \" \" + (config.cssAnimatedClass ? config.cssAnimatedClass.slice(1) : '')).css('animation-duration', config.duration + \"ms\");\n\n\t$(config.target).on('animationend webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend', function (e) {\n\t\tif ($(config.target).hasClass(config.animationOut)) {\n\t\t\t$(config.target).removeClass(config.animationOut).addClass(config.hiddenClass.slice(1));\n\n\t\t\tconfig.afterClose();\n\t\t}\n\n\t\tif ($(config.target).hasClass(config.animationIn)) {\n\t\t\tconfig.afterOpen();\n\t\t}\n\n\t\te.preventDefault();\n\t\te.stopPropagation();\n\t});\n\n\t$(config.target).on('animationstart webkitAnimationStart mozAnimationStart MSAnimationStart oanimationstart', function (e) {\n\t\tif ($(config.target).hasClass(config.animationOut)) {\n\t\t\tif (config.hasOverlay) {\n\t\t\t\t$(config.overlayClass).fadeOut(200);\n\t\t\t}\n\t\t}\n\n\t\tif ($(config.target).hasClass(config.animationIn)) {\n\t\t\tif (config.hasOverlay) {\n\t\t\t\t$(config.overlayClass).fadeIn(200);\n\t\t\t}\n\t\t}\n\n\t\te.preventDefault();\n\t\te.stopPropagation();\n\t});\n\n\tfunction mouseEnterFunc() {\n\t\tif (config.unfoldTimeOut) {\n\t\t\tclearTimeout(config.unfoldTimeOut);\n\t\t}\n\n\t\tel.addClass(config.invokerActiveClass.slice(1));\n\n\t\t(0, _cssAnimationShow2.default)($(config.target), config);\n\n\t\tif (!config.smartPositionOff) {\n\t\t\t(0, _smartPosition2.default)($(config.target), el, config);\n\t\t}\n\t}\n\n\tfunction mouseLeaveFunc() {\n\t\tconfig.unfoldTimeOut = setTimeout(function () {\n\t\t\tel.removeClass(config.invokerActiveClass.slice(1));\n\n\t\t\t(0, _cssAnimationHide2.default)($(config.target), config, hideEffect);\n\t\t}, config.delay);\n\t}\n\n\tfunction clickFunc() {\n\t\tif (!$(config.target).hasClass(config.hiddenClass.slice(1))) {\n\t\t\tel.removeClass(config.invokerActiveClass.slice(1));\n\n\t\t\t(0, _cssAnimationHide2.default)($(config.target), config, hideEffect);\n\t\t} else {\n\t\t\tel.addClass(config.invokerActiveClass.slice(1));\n\n\t\t\t(0, _cssAnimationShow2.default)($(config.target), config);\n\n\t\t\tif (!config.smartPositionOff) {\n\t\t\t\t(0, _smartPosition2.default)($(config.target), el, config);\n\t\t\t}\n\n\t\t\tif (config.hasOverlay) {\n\t\t\t\t$(config.overlayClass).fadeIn(200);\n\t\t\t}\n\t\t}\n\t}\n\n\tif (config.event === 'hover') {\n\t\t// Hover\n\t\t$(window).on('resize', function () {\n\t\t\tif (window.navigator.userAgent.indexOf('Mobile') !== -1) {\n\t\t\t\tel.parent(config.wrapperSelector)[0].removeEventListener('mouseenter', mouseEnterFunc, false);\n\t\t\t\tel.parent(config.wrapperSelector)[0].removeEventListener('mouseleave', mouseLeaveFunc, false);\n\n\t\t\t\tel[0].addEventListener('click', clickFunc, false);\n\t\t\t} else {\n\t\t\t\tel[0].removeEventListener('click', clickFunc, false);\n\n\t\t\t\tel.parent(config.wrapperSelector)[0].addEventListener('mouseenter', mouseEnterFunc, false);\n\t\t\t\tel.parent(config.wrapperSelector)[0].addEventListener('mouseleave', mouseLeaveFunc, false);\n\t\t\t}\n\t\t}).trigger('resize');\n\t} else {\n\t\t// Click\n\t\tel[0].addEventListener('click', clickFunc, false);\n\t}\n}\n\n//# sourceURL=webpack://HSUnfold/./src/js/modes/css-animation.js?");

/***/ }),

/***/ "./src/js/modes/simple.js":
/*!********************************!*\
  !*** ./src/js/modes/simple.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.default = simple;\n\nvar _smartPosition = __webpack_require__(/*! ../methods/smart-position */ \"./src/js/methods/smart-position.js\");\n\nvar _smartPosition2 = _interopRequireDefault(_smartPosition);\n\nvar _simpleShow = __webpack_require__(/*! ../methods/simple-show */ \"./src/js/methods/simple-show.js\");\n\nvar _simpleShow2 = _interopRequireDefault(_simpleShow);\n\nvar _simpleHide = __webpack_require__(/*! ../methods/simple-hide */ \"./src/js/methods/simple-hide.js\");\n\nvar _simpleHide2 = _interopRequireDefault(_simpleHide);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction simple(el, config) {\n\t$(config.target).addClass(config.simpleEffectClass.slice(1));\n\n\tif (config.event === 'hover') {\n\t\t// Hover\n\t\tel.parent(config.wrapperSelector).on({\n\t\t\tmouseenter: function mouseenter() {\n\t\t\t\tel.addClass(config.invokerActiveClass.slice(1));\n\n\t\t\t\t(0, _simpleShow2.default)($(config.target), config);\n\n\t\t\t\tif (!config.smartPositionOff) {\n\t\t\t\t\t(0, _smartPosition2.default)($(config.target), el, config);\n\t\t\t\t}\n\t\t\t},\n\t\t\tmouseleave: function mouseleave() {\n\t\t\t\tel.removeClass(config.invokerActiveClass.slice(1));\n\n\t\t\t\t(0, _simpleHide2.default)($(config.target), config);\n\t\t\t}\n\t\t});\n\t} else {\n\t\t// Click\n\t\tel.on('click', function () {\n\t\t\tif (!$(config.target).hasClass(config.hiddenClass.slice(1))) {\n\t\t\t\tel.removeClass(config.invokerActiveClass.slice(1));\n\n\t\t\t\t(0, _simpleHide2.default)($(config.target), config);\n\t\t\t} else {\n\t\t\t\tel.addClass(config.invokerActiveClass.slice(1));\n\n\t\t\t\t(0, _simpleShow2.default)($(config.target), config);\n\n\t\t\t\tif (!config.smartPositionOff) {\n\t\t\t\t\t(0, _smartPosition2.default)($(config.target), el, config);\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\t}\n}\n\n//# sourceURL=webpack://HSUnfold/./src/js/modes/simple.js?");

/***/ }),

/***/ "./src/js/modes/slide.js":
/*!*******************************!*\
  !*** ./src/js/modes/slide.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.default = slide;\n\nvar _smartPosition = __webpack_require__(/*! ../methods/smart-position */ \"./src/js/methods/smart-position.js\");\n\nvar _smartPosition2 = _interopRequireDefault(_smartPosition);\n\nvar _slideShow = __webpack_require__(/*! ../methods/slide-show */ \"./src/js/methods/slide-show.js\");\n\nvar _slideShow2 = _interopRequireDefault(_slideShow);\n\nvar _slideHide = __webpack_require__(/*! ../methods/slide-hide */ \"./src/js/methods/slide-hide.js\");\n\nvar _slideHide2 = _interopRequireDefault(_slideHide);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction slide(el, config) {\n\t$(config.target).addClass(config.slideEffectClass.slice(1)).css('display', 'none');\n\n\tif (config.event === 'hover') {\n\t\t// Hover\n\t\tel.parent(config.wrapperSelector).on({\n\t\t\tmouseenter: function mouseenter() {\n\t\t\t\t(0, _slideShow2.default)($(config.target), config, function () {\n\t\t\t\t\tel.addClass(config.invokerActiveClass.slice(1));\n\t\t\t\t});\n\n\t\t\t\tif (!config.smartPositionOff) {\n\t\t\t\t\t(0, _smartPosition2.default)($(config.target), el, config);\n\t\t\t\t}\n\t\t\t},\n\t\t\tmouseleave: function mouseleave() {\n\t\t\t\t(0, _slideHide2.default)($(config.target), config, function () {\n\t\t\t\t\tel.removeClass(config.invokerActiveClass.slice(1));\n\t\t\t\t});\n\t\t\t}\n\t\t});\n\t} else {\n\t\t// Click\n\t\tel.on('click', function () {\n\t\t\tif (!$(config.target).hasClass(config.hiddenClass.slice(1))) {\n\t\t\t\t(0, _slideHide2.default)($(config.target), config, function () {\n\t\t\t\t\tel.removeClass(config.invokerActiveClass.slice(1));\n\t\t\t\t});\n\t\t\t} else {\n\t\t\t\t(0, _slideShow2.default)($(config.target), config, function () {\n\t\t\t\t\tel.addClass(config.invokerActiveClass.slice(1));\n\t\t\t\t});\n\n\t\t\t\tif (!config.smartPositionOff) {\n\t\t\t\t\t(0, _smartPosition2.default)($(config.target), el, config);\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\t}\n}\n\n//# sourceURL=webpack://HSUnfold/./src/js/modes/slide.js?");

/***/ })

/******/ })["default"];
});