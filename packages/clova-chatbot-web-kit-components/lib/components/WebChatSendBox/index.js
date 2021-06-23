"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _md = require("react-icons/md");

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 0 1 auto;\n  height: 50px;\n  width: 100%;\n  background-color: white;\n  box-sizing: border-box;\n"])));

var MessageInput = _styledComponents.default.input(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-size: 16px;\n  width: 100%;\n  background-color: #fff;\n  border: none;\n  outline: none;\n  box-sizing: border-box;\n  padding: 8px;\n  ::placeholder {\n    color: #bbb;\n  }\n"])));

var SendIcon = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  height: 24px;\n  padding: 0 10px 0 10px;\n  font-size: 24px;\n  line-height: 1;\n  color: lightslategray;\n  transition: all 0.3s;\n  &:hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n"])));

var propTypes = {
  userId: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  onSendMessage: _propTypes.default.func
};

var WebChatSendBox = function WebChatSendBox(props) {
  var userId = props.userId,
      placeholder = props.placeholder,
      onSendMessage = props.onSendMessage;

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      text = _useState2[0],
      setText = _useState2[1];

  var handleChange = function handleChange(e) {
    setText(e.target.value);
  };

  var handleKeyPress = function handleKeyPress(e) {
    if (text === '') return;

    if (e.key === 'Enter') {
      onSendMessage({
        userId: userId,
        text: text
      });
      setText('');
    }
  };

  var handleSendMessage = function handleSendMessage(e) {
    if (text === '') return;
    onSendMessage({
      userId: userId,
      text: text
    });
    setText('');
  };

  return /*#__PURE__*/_react.default.createElement(Wrapper, {
    className: "web-chat-send-box"
  }, /*#__PURE__*/_react.default.createElement(MessageInput, {
    placeholder: placeholder,
    value: text,
    onChange: handleChange,
    onKeyPress: handleKeyPress
  }), /*#__PURE__*/_react.default.createElement(SendIcon, {
    onClick: handleSendMessage
  }, /*#__PURE__*/_react.default.createElement(_md.MdSend, null)));
};

WebChatSendBox.propTypes = propTypes;
var _default = WebChatSendBox;
exports.default = _default;