"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Avatar = _interopRequireDefault(require("../Avatar"));

var _context = require("../../context");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  width: 100%;\n  padding: 10px 0 10px 16px;\n"])));

var AvatarWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-right: 14px;\n"])));

var BubbleWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 70%;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  background-color: transparent;\n  overflow: hidden;\n"])));

var BubbleInner = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: relative;\n  margin: 0;\n  padding: 0;\n  background-color: ", ";\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);\n  border-radius: ", ";\n  overflow: hidden;\n"])), function (props) {
  return props.backgroundColor;
}, function (props) {
  return props.borderRadius;
});

var LoadingWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: relative;\n"])));

var LoadingInner = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  padding: 10px 16px;\n  word-break: break-all;\n  color: ", ";\n  font-size: ", ";\n  letter-spacing: 0.02em;\n  line-height: 1.6em;\n"])), function (props) {
  return props.color;
}, function (props) {
  return props.fontSize;
});

var propTypes = {
  userId: _propTypes.default.string,
  bubble: _propTypes.default.any,
  timestamp: _propTypes.default.number,
  onSendMessage: _propTypes.default.func
};

var Loading = function Loading(props) {
  var styles = (0, _react.useContext)(_context.StyleContext);
  var bubbleRadius = styles.bubbleRadius,
      bubbleStyle = styles.bubbleStyle,
      bubbleBackgroundColor = styles.bubbleBackgroundColor,
      bubbleFontSize = styles.bubbleFontSize,
      bubbleColor = styles.bubbleColor;
  return /*#__PURE__*/_react.default.createElement(Wrapper, null, /*#__PURE__*/_react.default.createElement(AvatarWrapper, null, /*#__PURE__*/_react.default.createElement(_Avatar.default, {
    style: {
      marginTop: '-0.2em'
    }
  })), /*#__PURE__*/_react.default.createElement(BubbleWrapper, null, /*#__PURE__*/_react.default.createElement(BubbleInner, {
    backgroundColor: bubbleBackgroundColor,
    borderRadius: bubbleStyle === 'square' ? '0' : bubbleRadius
  }, /*#__PURE__*/_react.default.createElement(LoadingWrapper, null, /*#__PURE__*/_react.default.createElement(LoadingInner, {
    fontSize: bubbleFontSize,
    color: bubbleColor
  }, /*#__PURE__*/_react.default.createElement("svg", {
    version: "1.1",
    id: "L4",
    width: "50",
    height: "8"
  }, /*#__PURE__*/_react.default.createElement("circle", {
    fill: "#ccc",
    stroke: "none",
    cx: "3",
    cy: "4",
    r: "3"
  }, /*#__PURE__*/_react.default.createElement("animate", {
    attributeName: "opacity",
    dur: "1s",
    values: "0;1;0",
    repeatCount: "indefinite",
    begin: "0.1"
  })), /*#__PURE__*/_react.default.createElement("circle", {
    fill: "#ccc",
    stroke: "none",
    cx: "13",
    cy: "4",
    r: "3"
  }, /*#__PURE__*/_react.default.createElement("animate", {
    attributeName: "opacity",
    dur: "1s",
    values: "0;1;0",
    repeatCount: "indefinite",
    begin: "0.2"
  })), /*#__PURE__*/_react.default.createElement("circle", {
    fill: "#ccc",
    stroke: "none",
    cx: "23",
    cy: "4",
    r: "3"
  }, /*#__PURE__*/_react.default.createElement("animate", {
    attributeName: "opacity",
    dur: "1s",
    values: "0;1;0",
    repeatCount: "indefinite",
    begin: "0.3"
  }))))))));
};

Loading.propTypes = propTypes;
var _default = Loading;
exports.default = _default;