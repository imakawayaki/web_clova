"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _md = require("react-icons/md");

var _context = require("../../context");

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  height: ", ";\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex: 0 1 auto;\n  background-color: #303b51;\n  box-sizing: border-box;\n  padding: 10px;\n  overflow: hidden;\n  :hover {\n    cursor: pointer;\n  }\n"])), function (props) {
  return props.height;
});

var TitleWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  color: white;\n"])));

var ActionList = _styledComponents.default.ul(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  li {\n    margin: 0;\n    padding: 0;\n    font-size: 20px;\n    height: 1em;\n    line-height: 1;\n    color: white;\n    float: left;\n    transition: all 0.3s;\n    &:hover {\n      cursor: pointer;\n      opacity: 0.6;\n    }\n  }\n  li + li {\n    margin-left: 4px;\n  }\n"])));

var propTypes = {
  title: _propTypes.default.string,
  onClose: _propTypes.default.func,
  onMinimize: _propTypes.default.func
};

var WebChatHeader = function WebChatHeader(props) {
  var title = props.title,
      onClose = props.onClose,
      onMinimize = props.onMinimize;
  var styles = (0, _react.useContext)(_context.StyleContext);
  var headerHeight = styles.headerHeight;
  return /*#__PURE__*/_react.default.createElement(Wrapper, {
    className: "web-chat-header",
    height: headerHeight,
    onClick: onMinimize
  }, /*#__PURE__*/_react.default.createElement(TitleWrapper, null, title), /*#__PURE__*/_react.default.createElement(ActionList, null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_md.MdClose, {
    onClick: onClose
  }))));
};

WebChatHeader.propTypes = propTypes;
var _default = WebChatHeader;
exports.default = _default;