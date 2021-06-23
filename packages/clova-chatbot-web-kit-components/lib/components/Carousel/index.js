"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _context = require("../../context");

var _Template = _interopRequireDefault(require("../Template"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  width: max-content;\n  height: auto;\n  overflow: hidden;\n  .card + .card {\n    margin-left: 16px;\n  }\n"])));

var Card = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: relative;\n  display: inline-block;\n  float: left;\n  width: ", ";\n  height: max-content;\n  border-radius: ", ";\n  background-color: transparent;\n  overflow: visible;\n"])), function (props) {
  return props.width;
}, function (props) {
  return props.borderRadius;
});

var propTypes = {
  cards: _propTypes.default.arrayOf(_propTypes.default.shape({
    type: _propTypes.default.string,
    // template
    data: _propTypes.default.shape({
      cover: _propTypes.default.shape({
        type: _propTypes.default.string,
        title: _propTypes.default.string,
        data: _propTypes.default.object
      })
    })
  })),
  userId: _propTypes.default.string,
  onSendMessage: _propTypes.default.func
};

var Carousel = function Carousel(props) {
  var cards = props.cards,
      userId = props.userId,
      onSendMessage = props.onSendMessage;
  var styles = (0, _react.useContext)(_context.StyleContext);
  var bubbleRadius = styles.bubbleRadius,
      bubbleStyle = styles.bubbleStyle,
      cardWidth = styles.cardWidth;
  var mapCards = Array.isArray(cards) && cards.map(function (card, i) {
    var type = card.type,
        data = card.data;
    if (type !== 'template' || !data) return null;
    return /*#__PURE__*/_react.default.createElement(Card, {
      key: i,
      className: "card",
      width: cardWidth,
      borderRadius: bubbleStyle === 'square' ? '0' : bubbleRadius
    }, /*#__PURE__*/_react.default.createElement(_Template.default, _objectSpread(_objectSpread({}, card), {}, {
      userId: userId,
      onSendMessage: onSendMessage,
      width: cardWidth
    })));
  });
  return /*#__PURE__*/_react.default.createElement(Wrapper, {
    className: "carousel"
  }, mapCards);
};

Carousel.propTypes = propTypes;
var _default = Carousel;
exports.default = _default;