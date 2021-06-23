"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _context = require("../../context");

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n"])));

var TextType = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: ", ";\n  padding: 10px 16px;\n  white-space: pre-wrap;\n  word-break: break-all;\n  color: ", ";\n  font-size: ", ";\n  letter-spacing: 0.02em;\n  line-height: 1.6em;\n  p {\n    margin-bottom: 0;\n    &.title {\n      font-weight: bold;\n    }\n    &.description {\n      font-weight: normal;\n    }\n  }\n  p + p {\n    margin-top: 4px;\n  }\n"])), function (props) {
  return props.width || 'inherit';
}, function (props) {
  return props.color;
}, function (props) {
  return props.fontSize;
});

var propTypes = {
  data: _propTypes.default.shape({
    description: _propTypes.default.string,
    url: _propTypes.default.string,
    urlAlias: _propTypes.default.string,
    action: _propTypes.default.object // 一旦無視

  }),
  userId: _propTypes.default.string,
  type: _propTypes.default.string,
  title: _propTypes.default.string,
  subTitle: _propTypes.default.string,
  width: _propTypes.default.string,
  onSendMessage: _propTypes.default.func
};

var Text = function Text(props) {
  var _props$data = props.data,
      description = _props$data.description,
      url = _props$data.url,
      urlAlias = _props$data.urlAlias,
      width = props.width;
  var styles = (0, _react.useContext)(_context.StyleContext);
  var bubbleFontSize = styles.bubbleFontSize,
      bubbleColor = styles.bubbleColor;
  return /*#__PURE__*/_react.default.createElement(Wrapper, null, /*#__PURE__*/_react.default.createElement(TextType, {
    width: width,
    fontSize: bubbleFontSize,
    color: bubbleColor
  }, /*#__PURE__*/_react.default.createElement("p", null, description), url && /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("a", {
    href: url,
    target: "_blank",
    rel: "noopener noreferrer"
  }, urlAlias))));
};

Text.propTypes = propTypes;
var _default = Text;
exports.default = _default;