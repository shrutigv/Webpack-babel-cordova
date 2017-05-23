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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ 8:
/* unknown exports provided */
/* all exports used */
/*!****************************!*\
  !*** ./www/src/profile.js ***!
  \****************************/
/***/ (function(module, exports) {

function ProfileView(model,x) {
    this._model = model;
    this.isPage=x;
    this._elements = {
        save: $('#submit'),
        toggle: $('.toggle span'),
        weightInput: $('#weight'),
        dailyGoals: $('.weightText')
    };

    this.weightSubmited = new Event(this);
    var _this = this;

    // attach listeners to HTML controls

    this._elements.save.click(function() {
        _this.validate();
    });
    this._elements.toggle.click(function(e) {
        _this.toggle(e);
    });
}

ProfileView.prototype = {
    toggle: function(e) {
        this._elements.toggle.removeClass('selected');
        $(e.target).addClass('selected');
        this._elements.dailyGoals.text($(e.target).attr('data-attr'));
        e.stopImmediatePropagation();
    },
    validate: function() {
        var weight = this._elements.weightInput.val();
        if (weight > 0) {
            this.weightSubmited.notify();
            $('.error').hide();
        } else {
            $('.error').show();
        }
    }
};

function ProfileController(model, view) {
    this._model = model;
    this._view = view;
    var _this = this;
    this._view.weightSubmited.attach(function() {
        _this.onSubmit();
    });
}

ProfileController.prototype = {
    calcDailyNeeds: function(weight, u) {
        if (u == 'oz') {
            this._model.setUnit('oz');
            this._model.setDailyNeeds(weight * 0.536);

        } else {
            this._model.setUnit('ml');
            this._model.setDailyNeeds(weight * 35);
        }
    },
    onSubmit: function() {
        var weight = this._view._elements.weightInput.val();
        this._model.setWeight(weight);
        this.calcDailyNeeds(weight, $('.toggle span.selected').attr('data-unit'));
        if(this._view.isPage){
            this._model.saveData();
            window.open('hydrate.html');
        }
        else{
            this._model.modelUpdated.notify();
        }

    }
};

/***/ })

/******/ });