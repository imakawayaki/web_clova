"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderWebChat = renderWebChat;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _ReactWebChat = _interopRequireDefault(require("./ReactWebChat"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function renderWebChat(props, element) {
  _reactDom.default.render( /*#__PURE__*/_react.default.createElement(_ReactWebChat.default, _extends({}, props, {
    root: element
  })), element);
}