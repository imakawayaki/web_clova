"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _context = require("../../../context");

var _Image = _interopRequireDefault(require("../../Image"));

var _Text = _interopRequireDefault(require("../../Text"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ImageWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n"])));

var TextType = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding: 10px 16px;\n  white-space: pre-wrap;\n  word-break: break-all;\n  color: ", ";\n  font-size: ", ";\n  letter-spacing: 0.02em;\n  line-height: 1.6em;\n  overflow: hidden;\n  p {\n    margin-bottom: 0;\n    &.title {\n      font-weight: bold;\n    }\n    &.description {\n      font-weight: normal;\n    }\n  }\n  p + p {\n    margin-top: 4px;\n  }\n"])), function (props) {
  return props.color;
}, function (props) {
  return props.fontSize;
});

var propTypes = {
  type: _propTypes.default.string,
  title: _propTypes.default.string,
  data: _propTypes.default.shape({
    imageUrl: _propTypes.default.string,
    description: _propTypes.default.string
  }),
  width: _propTypes.default.string
};

var Cover = function Cover(props) {
  var type = props.type,
      title = props.title,
      data = props.data;
  var styles = (0, _react.useContext)(_context.StyleContext);
  var bubbleColor = styles.bubbleColor,
      bubbleFontSize = styles.bubbleFontSize;
  var description = data && data.description ? data.description : '';

  switch (type) {
    case 'image':
      {
        return /*#__PURE__*/_react.default.createElement(ImageWrapper, null, /*#__PURE__*/_react.default.createElement(_Image.default, props), (title || description) && /*#__PURE__*/_react.default.createElement(TextType, {
          color: bubbleColor,
          fontSize: bubbleFontSize
        }, title && /*#__PURE__*/_react.default.createElement("p", {
          className: "title"
        }, title), description && /*#__PURE__*/_react.default.createElement("p", {
          className: "description"
        }, description)));
      }

    case 'text':
      {
        return /*#__PURE__*/_react.default.createElement(_Text.default, props);
      }

    default:
      {
        return /*#__PURE__*/_react.default.createElement(_Text.default, props);
      }
  }
};

Cover.propTypes = propTypes;
var _default = Cover;
exports.default = _default;