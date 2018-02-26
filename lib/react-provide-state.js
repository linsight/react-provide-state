(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("react-provide-state", ["react"], factory);
	else if(typeof exports === 'object')
		exports["react-provide-state"] = factory(require("react"));
	else
		root["react-provide-state"] = factory(root["react"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _provideState = __webpack_require__(1);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_provideState).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _registry = __webpack_require__(3);

var registry = _interopRequireWildcard(_registry);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (_ref) {
  var namespace = _ref.namespace,
      name = _ref.name,
      alias = _ref.alias,
      defaultValue = _ref.defaultValue;
  return function (Component) {
    var ns = namespace || 'defaultNamespace';

    var ComponentWithState = function (_React$Component) {
      _inherits(ComponentWithState, _React$Component);

      function ComponentWithState(props) {
        _classCallCheck(this, ComponentWithState);

        var _this = _possibleConstructorReturn(this, (ComponentWithState.__proto__ || Object.getPrototypeOf(ComponentWithState)).call(this, props));

        _this.handleStateChange = _this.handleStateChange.bind(_this);

        var value = registry.getState(ns, name);

        if (value === undefined) {
          value = defaultValue;
          registry.setState(ns, name, value);
        }

        _this.state = _defineProperty({}, name, value);
        return _this;
      }

      _createClass(ComponentWithState, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
          registry.addHandler(ns, name, this.handleStateChange);
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          registry.removeHandler(ns, name, this.handleStateChange);
        }
      }, {
        key: 'handleStateChange',
        value: function handleStateChange(newValue) {
          var _this2 = this;

          var updateRegistry = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

          this.setState(_defineProperty({}, name, newValue));

          if (updateRegistry) {
            var handlers = registry.getHandlers(ns, name);
            registry.setState(ns, name, newValue);
            handlers.filter(function (handler) {
              return handler !== _this2.handleStateChange;
            }).forEach(function (handler) {
              return handler(newValue, false);
            });
          }
        }
      }, {
        key: 'render',
        value: function render() {
          var _stateProps;

          var propName = alias || name || 'default';
          var handlerName = 'on' + propName.replace(propName[0], propName[0].toUpperCase()) + 'Change';
          var stateProps = (_stateProps = {}, _defineProperty(_stateProps, propName, this.state[name]), _defineProperty(_stateProps, handlerName, this.handleStateChange), _stateProps);

          return _react2.default.createElement(Component, _extends({}, stateProps, this.props));
        }
      }]);

      return ComponentWithState;
    }(_react2.default.Component);

    return ComponentWithState;
  };
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getState = getState;
exports.setState = setState;
exports.addHandler = addHandler;
exports.getHandlers = getHandlers;
exports.removeHandler = removeHandler;
var stateHandlers = {};
var stateValues = {};

function getState(namespace, name) {
  var nsState = stateValues[namespace] || {};
  return nsState[name];
}

function setState(namespace, name, value) {
  var nsState = stateValues[namespace] || {};
  nsState[name] = value;
  stateValues[namespace] = nsState;
}

function addHandler(namespace, name, handler) {
  var nsHandlers = stateHandlers[namespace] || {};
  var namedHandlers = nsHandlers[name] || [];

  if (!namedHandlers.includes(handler)) {
    namedHandlers.push(handler);
  }

  nsHandlers[name] = namedHandlers;
  stateHandlers[namespace] = nsHandlers;
}

function getHandlers(namespace, name) {
  var nsHandlers = stateHandlers[namespace] || {};
  return nsHandlers[name] || [];
}

function removeHandler(namespace, name, handler) {
  var nsHandlers = stateHandlers[namespace] || {};
  var namedHandlers = nsHandlers[name] || [];

  nsHandlers[name] = namedHandlers.filter(function (h) {
    return h !== handler;
  });
  stateHandlers[namespace] = nsHandlers;
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=react-provide-state.js.map