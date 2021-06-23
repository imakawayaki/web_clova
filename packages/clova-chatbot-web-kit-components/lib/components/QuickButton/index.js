"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _hooks = require("../../hooks");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  overflow: hidden;\n  width: max-content;\n  padding: 10px 20px 16px 20px;\n  span {\n    display: inline-block;\n    fload: left;\n    background-color: rgba(0, 0, 0, 0.4);\n    color: #ffffff;\n    font-size: 10px;\n    border-radius: 1.2em;\n    padding: 4px 12px 4px 12px;\n    transition: all 0.2s ease-in-out;\n    :hover {\n      cursor: pointer;\n      opacity: 0.8;\n    }\n  }\n  span + span {\n    margin-left: 8px;\n  }\n"])));

var propTypes = {
  userId: _propTypes.default.string,
  buttons: _propTypes.default.array,
  onSendMessage: _propTypes.default.func
};

var QuickButton = function QuickButton(props) {
  var userId = props.userId,
      buttons = props.buttons,
      onSendMessage = props.onSendMessage;

  var _useAction = (0, _hooks.useAction)({
    userId: userId,
    onSendMessage: onSendMessage
  }),
      _useAction2 = _slicedToArray(_useAction, 1),
      onAction = _useAction2[0];

  var mapButtons = Array.isArray(buttons) && buttons.map(function (item, i) {
    var data = item.data;
    return /*#__PURE__*/_react.default.createElement("span", {
      className: "quick-button",
      key: i,
      onClick: function onClick() {
        return onAction(data);
      }
    }, item.title);
  });
  return /*#__PURE__*/_react.default.createElement(Wrapper, null, mapButtons);
};

QuickButton.propTypes = propTypes;
var _default = QuickButton;
exports.default = _default;