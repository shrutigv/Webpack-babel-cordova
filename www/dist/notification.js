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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ 7:
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./www/src/notification.js ***!
  \*********************************/
/***/ (function(module, exports) {

var Notification = function() {
    var notification = {
        cur: null,
        time: null,
        initialize: function() {
            cur = this;
            this.setNotification();
            for (var j = 0; j < cur.time.length; j++) {
                $('.notificationWrapper').find("[data-time='" + cur.time[j] + "']").attr('checked', 'checked');
            }
            $('#save').on('click', function(e) {
                cordova.plugins.notification.local.cancelAll(function() {}, this);
                cur.time = [];
                $('.notification input:checked').each(function(i) {
                    cur.time.push($(this).attr('data-time'));
                });
                cur.setNotification();
                e.stopImmediatePropagation();
            });
        },
        getTime: function() {
            return this.time;
        },
        setTime: function(t) {
            this.time = t;
        },
        setNotification: function() {
            for (var i = 0; i < cur.time.length; i++) {
                var date = new Date();
                var schedule_time = new Date((date.getMonth() + '-' + date.getDay() + '-' + date.getFullYear() + " " + cur.time[i]).replace(/-/g, "/")).getTime();
                schedule_time = new Date(schedule_time);
                cur.register(schedule_time, i);
            }
        },
        register: function(t, i) {
            cordova.plugins.notification.local.schedule({
                id: i,
                title: "Hydration time!!",
                text: "Time to hydrate yourself",
                every: "day",
                icon: "file://img/logo.png",
                at: t
            });
        }
    }
    return notification;
}

/***/ })

/******/ });