"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _context = require("../../context");

var _Timestamp = _interopRequireDefault(require("../Timestamp"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  width: 100%;\n  padding: 10px 16px;\n"])));

var BubbleWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-end;\n  background-color: transparent;\n  overflow: hidden;\n  width: 70%;\n"])));

var Bubble = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);\n  padding: 10px 16px;\n  color: ", ";\n  font-size: ", ";\n  letter-spacing: 0.02em;\n  line-height: 1.6em;\n  border-radius: ", ";\n  overflow: hidden;\n"])), function (props) {
  return props.backgroundColor;
}, function (props) {
  return props.color;
}, function (props) {
  return props.fontSize;
}, function (props) {
  return props.borderRadius;
});

var propTypes = {
  text: _propTypes.default.string,
  timestamp: _propTypes.default.number
};

var UserBubble = function UserBubble(props) {
  var text = props.text,
      timestamp = props.timestamp;
  var styles = (0, _react.useContext)(_context.StyleContext);
  var bubbleRadius = styles.bubbleRadius,
      bubbleStyle = styles.bubbleStyle,
      bubbleColor = styles.bubbleColor,
      bubbleBackgroundColor = styles.bubbleBackgroundColor,
      bubbleFontSize = styles.bubbleFontSize,
      userBubbleStyle = styles.userBubbleStyle,
      userBubbleRadius = styles.userBubbleRadius,
      userBubbleColor = styles.userBubbleColor,
      userBubbleBackgroundColor = styles.userBubbleBackgroundColor,
      userBubbleFontSize = styles.userBubbleFontSize;

  var getBubbleRadius = function getBubbleRadius() {
    if (userBubbleStyle) {
      if (userBubbleStyle === 'rounded' && userBubbleRadius) {
        return userBubbleRadius;
      } else {
        return 0; // square
      }
    } // default value


    if (bubbleStyle === 'rounded' && bubbleRadius) {
      return bubbleRadius;
    } else {
      return 0; // square
    }
  };

  var bubbleProps = {
    color: userBubbleColor || bubbleColor,
    backgroundColor: userBubbleBackgroundColor || bubbleBackgroundColor,
    fontSize: userBubbleFontSize || bubbleFontSize,
    borderRadius: getBubbleRadius()
  };
  return /*#__PURE__*/_react.default.createElement(Wrapper, null, /*#__PURE__*/_react.default.createElement(BubbleWrapper, null, /*#__PURE__*/_react.default.createElement(Bubble, bubbleProps, text), /*#__PURE__*/_react.default.createElement(_Timestamp.default, {
    timestamp: timestamp
  })));
};

UserBubble.propTypes = propTypes;
var _default = UserBubble;
exports.default = _default;