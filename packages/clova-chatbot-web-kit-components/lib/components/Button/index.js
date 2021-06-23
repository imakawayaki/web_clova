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

var _hooks = require("../../hooks");

var _templateObject;

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

var Wrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  margin: 0;\n  word-break: break-all;\n  overflow: hidden;\n  background-color: azure;\n  border-top: 1px solid #eee;\n  padding: 10px 16px;\n  font-size: ", ";\n  color: #007bff;\n  .icon {\n    display: inline-block;\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    font-size: 1.7em;\n  }\n  p {\n    margin: 0 1.7em 0 0;\n  }\n  transition: all 0.2s ease-in-out;\n  :hover {\n    cursor: pointer;\n    color: #0056b3;\n  }\n"])), function (props) {
  return props.fontSize;
});

var propTypes = {
  data: _propTypes.default.shape({
    type: _propTypes.default.string,
    action: _propTypes.default.shape({
      type: _propTypes.default.string,
      data: _propTypes.default.shape({
        url: _propTypes.default.string
      })
    })
  }),
  userId: _propTypes.default.string,
  type: _propTypes.default.string,
  title: _propTypes.default.string,
  onSendMessage: _propTypes.default.func
};

var Button = function Button(props) {
  var userId = props.userId,
      title = props.title,
      data = props.data,
      onSendMessage = props.onSendMessage;

  var _useAction = (0, _hooks.useAction)({
    userId: userId,
    onSendMessage: onSendMessage
  }),
      _useAction2 = _slicedToArray(_useAction, 1),
      onAction = _useAction2[0];

  var styles = (0, _react.useContext)(_context.StyleContext);
  var bubbleFontSize = styles.bubbleFontSize;

  if (data && data.action) {
    return /*#__PURE__*/_react.default.createElement(Wrapper, {
      fontSize: bubbleFontSize
    }, /*#__PURE__*/_react.default.createElement("div", {
      onClick: function onClick() {
        return onAction(data);
      }
    }, /*#__PURE__*/_react.default.createElement(_md.MdKeyboardArrowRight, {
      className: "icon"
    }), /*#__PURE__*/_react.default.createElement("p", null, title)));
  } else {
    return /*#__PURE__*/_react.default.createElement(Wrapper, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_md.MdKeyboardArrowRight, {
      className: "icon"
    }), /*#__PURE__*/_react.default.createElement("p", null, title)));
  }
};

Button.propTypes = propTypes;
var _default = Button;
exports.default = _default;