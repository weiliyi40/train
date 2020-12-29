(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./images/pic1.jpg":
/*!*************************!*\
  !*** ./images/pic1.jpg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "bbaecbf7a377ca35424bc72866fdbf98.jpg");

/***/ }),

/***/ "./images/pic2.jpg":
/*!*************************!*\
  !*** ./images/pic2.jpg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a09ee6140e42afac57015401e6174744.jpg");

/***/ }),

/***/ "./images/pic3.jpg":
/*!*************************!*\
  !*** ./images/pic3.jpg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b505533c7c571c37dd940f30325795f4.jpg");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./src/pages/battle.jsx":
/*!******************************!*\
  !*** ./src/pages/battle.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Battle; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _images_pic1_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../images/pic1.jpg */ "./images/pic1.jpg");
/* harmony import */ var _images_pic2_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../images/pic2.jpg */ "./images/pic2.jpg");
/* harmony import */ var _images_pic3_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../images/pic3.jpg */ "./images/pic3.jpg");








(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};







var Battle = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Battle, _React$Component);

  var _super = _createSuper(Battle);

  function Battle(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Battle);

    _this = _super.call(this, props);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "input1OnChagne", function (e) {
      _this.setState({
        input1: e.target.value
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "input2OnChagne", function (a) {
      _this.setState({
        input2: a.target.value
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "input1ShowChange", function () {
      var _this$state = _this.state,
          input1Show = _this$state.input1Show,
          input2Show = _this$state.input2Show;

      if (!input1Show) {
        _this.setState({
          input1: ''
        });
      }

      if (input1Show && !input2Show) {
        _this.setState({
          battleShow: true
        });
      } else {
        _this.setState({
          battleShow: false
        });
      }

      _this.setState({
        input1Show: !input1Show
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "input2ShowChange", function () {
      var _this$state2 = _this.state,
          input2Show = _this$state2.input2Show,
          input1Show = _this$state2.input1Show;

      if (!input2Show) {
        _this.setState({
          input2: ''
        });
      }

      if (input2Show && !input1Show) {
        _this.setState({
          battleShow: true
        });
      } else {
        _this.setState({
          battleShow: false
        });
      }

      _this.setState({
        input2Show: !input2Show
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "routeChange", function () {
      var _this$state3 = _this.state,
          input1 = _this$state3.input1,
          input2 = _this$state3.input2;

      _this.props.history.push({
        pathname: "/battle/result",
        search: "playerOne=".concat(input1, "&playerTwo=").concat(input2),
        state: input1
      });
    });

    _this.state = {
      input1: '',
      input2: '',
      input1Show: true,
      input2Show: true,
      battleShow: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Battle, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state4 = this.state,
          input1 = _this$state4.input1,
          input2 = _this$state4.input2,
          input1Show = _this$state4.input1Show,
          input2Show = _this$state4.input2Show,
          battleShow = _this$state4.battleShow;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Container"], {
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, "GAME"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Enter two Github users"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _images_pic1_jpg__WEBPACK_IMPORTED_MODULE_9__["default"],
        style: {
          boxShadow: '0 0 5px 3px #00000042',
          width: '200px',
          height: '200px'
        },
        alt: " "
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Battle"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _images_pic2_jpg__WEBPACK_IMPORTED_MODULE_10__["default"],
        style: {
          boxShadow: '0 0 5px 3px #00000042',
          width: '200px',
          height: '200px'
        },
        alt: " "
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "See the winner"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _images_pic3_jpg__WEBPACK_IMPORTED_MODULE_11__["default"],
        style: {
          boxShadow: '0 0 5px 3px #00000042',
          width: '200px',
          height: '200px'
        },
        alt: " "
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, "Players"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Player One"), input1Show ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], {
        onChange: function onChange(e) {
          _this2.input1OnChagne(e);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["FormControl"], {
        placeholder: "github username",
        "aria-label": "github username",
        "aria-describedby": "basic-addon2"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroup"].Append, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        variant: "outline-secondary",
        className: input1 === '' ? 'disabled' : '',
        onClick: function onClick() {
          input1 === '' ? '' : _this2.input1ShowChange();
        }
      }, "SUBMIT"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "inputShow"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "https://github.com/".concat(input1, ".png?size=200"),
        style: {
          "with": '50px',
          height: '50px'
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "https://github.com/".concat(input1)
      }, input1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        onClick: function onClick() {
          _this2.input1ShowChange();
        }
      }, "\xD7"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "Player Two"), input2Show ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], {
        onChange: function onChange(a) {
          _this2.input2OnChagne(a);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["FormControl"], {
        placeholder: "github username",
        "aria-label": "github username",
        "aria-describedby": "basic-addon2"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["InputGroup"].Append, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        variant: "outline-secondary",
        className: input2 === '' ? 'disabled' : '',
        onClick: function onClick() {
          input2 === '' ? '' : _this2.input2ShowChange();
        }
      }, "SUBMIT"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "inputShow"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "https://github.com/".concat(input2, ".png?size=200"),
        style: {
          "with": '50px',
          height: '50px'
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "https://github.com/".concat(input2)
      }, input2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        onClick: function onClick() {
          _this2.input2ShowChange();
        }
      }, "\xD7")))), battleShow ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        className: "Battle",
        onClick: function onClick() {
          _this2.routeChange();
        }
      }, "Battle") : ' ');
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Battle;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);


;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Battle, "Battle", "E:\\train\\train\\github\\src\\pages\\battle.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=3.bundle.js.map