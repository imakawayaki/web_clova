"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

require("react-perfect-scrollbar/dist/css/styles.css");

var _reactPerfectScrollbar = _interopRequireDefault(require("react-perfect-scrollbar"));

var _Avatar = _interopRequireDefault(require("../Avatar"));

var _Carousel = _interopRequireDefault(require("../Carousel"));

var _Template = _interopRequireDefault(require("../Template"));

var _Timestamp = _interopRequireDefault(require("../Timestamp"));

var _Text = _interopRequireDefault(require("../Text"));

var _Image = _interopRequireDefault(require("../Image"));

var _context = require("../../context");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  width: 100%;\n  padding: 10px 0 10px 16px;\n"])));

var AvatarWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-right: 14px;\n"])));

var BubbleWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 70%;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  background-color: transparent;\n  overflow: hidden;\n"])));

var BubbleInner = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: relative;\n  margin: 0;\n  padding: 0;\n  background-color: ", ";\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);\n  border-radius: ", ";\n  overflow: hidden;\n"])), function (props) {
  return props.backgroundColor;
}, function (props) {
  return props.borderRadius;
});

var CarouselWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  background-color: transparent;\n  overflow: hidden;\n  .scrollbar-container {\n    height: auto;\n  }\n  .ps__rail-x {\n    border-radius: 8px;\n  }\n  .ps .ps__rail-x:hover,\n  .ps .ps__rail-y:hover,\n  .ps .ps__rail-x:focus,\n  .ps .ps__rail-y:focus,\n  .ps .ps__rail-x.ps--clicking,\n  .ps .ps__rail-y.ps--clicking {\n    background-color: rgba(255, 255, 255, 0.3);\n  }\n  .ps__thumb-x {\n    background-color: rgba(0, 0, 0, 0.3);\n    bottom: 3px;\n  }\n  .ps__rail-x:hover > .ps__thumb-x,\n  .ps__rail-x:focus > .ps__thumb-x,\n  .ps__rail-x.ps--clicking .ps__thumb-x {\n    background-color: rgba(0, 0, 0, 0.4);\n    height: 9px;\n  }\n"])));

var propTypes = {
  userId: _propTypes.default.string,
  bubble: _propTypes.default.any,
  timestamp: _propTypes.default.number,
  onSendMessage: _propTypes.default.func
};

var ChatbotBubble = function ChatbotBubble(props) {
  var userId = props.userId,
      bubble = props.bubble,
      timestamp = props.timestamp,
      onSendMessage = props.onSendMessage;
  var styles = (0, _react.useContext)(_context.StyleContext);
  var bubbleRadius = styles.bubbleRadius,
      bubbleStyle = styles.bubbleStyle,
      bubbleBackgroundColor = styles.bubbleBackgroundColor;

  if (!bubble || !bubble.type) {
    return;
  }

  var Bubble = function Bubble(_ref) {
    var bubble = _ref.bubble;
    var type = bubble.type,
        data = bubble.data;

    switch (type) {
      case 'text':
        {
          return /*#__PURE__*/_react.default.createElement(BubbleWrapper, null, /*#__PURE__*/_react.default.createElement(BubbleInner, {
            backgroundColor: bubbleBackgroundColor,
            borderRadius: bubbleStyle === 'square' ? '0' : bubbleRadius
          }, /*#__PURE__*/_react.default.createElement(_Text.default, _objectSpread(_objectSpread({}, bubble), {}, {
            userId: userId,
            onSendMessage: onSendMessage
          }))), /*#__PURE__*/_react.default.createElement(_Timestamp.default, {
            timestamp: timestamp
          }));
        }

      case 'image':
        {
          return /*#__PURE__*/_react.default.createElement(BubbleWrapper, null, /*#__PURE__*/_react.default.createElement(BubbleInner, {
            backgroundColor: bubbleBackgroundColor,
            borderRadius: bubbleStyle === 'square' ? '0' : bubbleRadius
          }, /*#__PURE__*/_react.default.createElement(_Image.default, _objectSpread(_objectSpread({}, bubble), {}, {
            userId: userId,
            onSendMessage: onSendMessage
          }))), /*#__PURE__*/_react.default.createElement(_Timestamp.default, {
            timestamp: timestamp
          }));
        }

      case 'template':
        {
          return /*#__PURE__*/_react.default.createElement(BubbleWrapper, null, /*#__PURE__*/_react.default.createElement(_Template.default, _objectSpread(_objectSpread({}, bubble), {}, {
            userId: userId,
            onSendMessage: onSendMessage
          })), /*#__PURE__*/_react.default.createElement(_Timestamp.default, {
            timestamp: timestamp
          }));
        }

      case 'carousel':
        {
          var cards = data.cards;
          return /*#__PURE__*/_react.default.createElement(CarouselWrapper, null, /*#__PURE__*/_react.default.createElement(_reactPerfectScrollbar.default, null, /*#__PURE__*/_react.default.createElement(_Carousel.default, {
            cards: cards,
            userId: userId,
            onSendMessage: onSendMessage
          })), /*#__PURE__*/_react.default.createElement(_Timestamp.default, {
            timestamp: timestamp
          }));
        }

      default:
        {
          return /*#__PURE__*/_react.default.createElement(BubbleWrapper, null, /*#__PURE__*/_react.default.createElement(BubbleInner, {
            backgroundColor: bubbleBackgroundColor,
            borderRadius: bubbleStyle === 'square' ? '0' : bubbleRadius
          }, /*#__PURE__*/_react.default.createElement(_Text.default, _objectSpread(_objectSpread({}, bubble), {}, {
            userId: userId,
            onSendMessage: onSendMessage
          }))), /*#__PURE__*/_react.default.createElement(_Timestamp.default, {
            timestamp: timestamp
          }));
        }
    }
  };

  return /*#__PURE__*/_react.default.createElement(Wrapper, null, /*#__PURE__*/_react.default.createElement(AvatarWrapper, null, /*#__PURE__*/_react.default.createElement(_Avatar.default, {
    style: {
      marginTop: '-0.2em'
    }
  })), /*#__PURE__*/_react.default.createElement(Bubble, {
    bubble: bubble
  }));
};

ChatbotBubble.propTypes = propTypes;
var _default = ChatbotBubble;
exports.default = _default;