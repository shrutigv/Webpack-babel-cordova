/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* exports provided: default */
/* all exports used */
/*!*******************************!*\
  !*** ./www/src/controller.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controller__ = __webpack_require__(/*! ./controller */ 0);
/* harmony default export */ __webpack_exports__["default"] = App = {
        model: null,
        self: null,
        hydrateCtrl: null,
        notify: null,
        // Application Constructor
        initialize: function() {
            self= this;
            this.model= new StoreModel();
             this.notify = new Notification();
             var hydrate = new HydrateView(self.model);
             this.hydrateCtrl = new HydrateController(self.model, hydrate);

            if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
                document.addEventListener("deviceready", this.onDeviceReady, false);
            }
            else {
                this.onDeviceReady();
            }
        },
        appClosed: function() {
            self.model.setTime(self.notify.getTime());
            self.model.saveData();
            self.hydrateCtrl.updateLastOpenedDate();
        },
        appOpened: function() {
           self.hydrateCtrl.initialize();
        },
        registerEvent: function(){
            document.addEventListener("pause", self.appClosed, false);
            document.addEventListener("resume", self.appOpened, false);
            document.addEventListener("backbutton", self.onBackKeyDown, false);
        },
        onBackKeyDown: function(e){
            e.preventDefault();
        },
        onDeviceReady: function() {
            self.registerEvent();
            var profile = new ProfileView(self.model,false);
            var controller = new ProfileController(self.model, profile);
            self.notify.setTime(self.model.getTime());
            self.notify.initialize();
        }
};


app.initialize();

/***/ })
/******/ ]);