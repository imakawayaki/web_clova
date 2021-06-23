"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _context = require("../../context");

var _ContentTable = _interopRequireDefault(require("./ContentTable"));

var _Cover = _interopRequireDefault(require("./Cover"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// import FootTable from './FootTable'
var Wrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  width: ", ";\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  background-color: ", ";\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);\n  border-radius: ", ";\n  overflow: hidden;\n"])), function (props) {
  return props.width ? "".concat(props.width) : '100%';
}, function (props) {
  return props.backgroundColor;
}, function (props) {
  return props.borderRadius;
});

var propTypes = {
  data: _propTypes.default.shape({
    cover: _propTypes.default.shape({
      type: _propTypes.default.string,
      title: _propTypes.default.string,
      data: _propTypes.default.object
    }),
    contentTable: _propTypes.default.arrayOf(_propTypes.default.arrayOf(_propTypes.default.shape({
      rowSpan: _propTypes.default.number,
      colSpan: _propTypes.default.number,
      data: _propTypes.default.shape({
        type: _propTypes.default.string,
        title: _propTypes.default.string,
        data: _propTypes.default.shape({
          type: _propTypes.default.string,
          action: _propTypes.default.shape({
            type: _propTypes.default.string,
            data: _propTypes.default.shape({
              url: _propTypes.default.string
            })
          })
        })
      })
    }))),
    footTable: _propTypes.default.array
  }),
  userId: _propTypes.default.string,
  type: _propTypes.default.string,
  title: _propTypes.default.string,
  subTitle: _propTypes.default.string,
  width: _propTypes.default.string,
  onSendMessage: _propTypes.default.func
};

var Template = function Template(props) {
  var _props$data = props.data,
      cover = _props$data.cover,
      contentTable = _props$data.contentTable,
      userId = props.userId,
      type = props.type,
      width = props.width,
      onSendMessage = props.onSendMessage;
  var styles = (0, _react.useContext)(_context.StyleContext);
  var bubbleRadius = styles.bubbleRadius,
      bubbleStyle = styles.bubbleStyle,
      bubbleBackgroundColor = styles.bubbleBackgroundColor,
      cardWidth = styles.cardWidth;

  if (type !== 'template') {
    return /*#__PURE__*/_react.default.createElement(Wrapper, null, "There is not Template type.");
  }

  return /*#__PURE__*/_react.default.createElement(Wrapper, _extends({
    backgroundColor: bubbleBackgroundColor,
    borderRadius: bubbleStyle === 'square' ? '0' : bubbleRadius
  }, _objectSpread({}, width ? {
    width: width
  } : {
    width: cardWidth
  })), cover && /*#__PURE__*/_react.default.createElement("div", {
    className: "cover"
  }, /*#__PURE__*/_react.default.createElement(_Cover.default, _objectSpread(_objectSpread({}, cover), width ? {
    width: width
  } : {
    width: cardWidth
  }))), contentTable && /*#__PURE__*/_react.default.createElement("div", {
    className: "content-table"
  }, /*#__PURE__*/_react.default.createElement(_ContentTable.default, _objectSpread({
    contentTable: contentTable,
    userId: userId,
    onSendMessage: onSendMessage
  }, width ? {
    width: width
  } : {
    width: cardWidth
  }))));
};

Template.propTypes = propTypes;
var _default = Template;
exports.default = _default;