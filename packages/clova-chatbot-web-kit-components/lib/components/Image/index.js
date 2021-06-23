"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _hooks = require("../../hooks");

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  width: ", ";\n  height: ", ";\n"])), function (props) {
  return props.width || 'inherit';
}, function (props) {
  return props.width || 'inherit';
});

var ImageType = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  background-image: url(", ");\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  :hover {\n    cursor: ", ";\n  }\n"])), function (props) {
  return props.src;
}, function (props) {
  return props.cursor || 'default';
});

var propTypes = {
  data: _propTypes.default.shape({
    action: _propTypes.default.shape({
      type: _propTypes.default.string,
      data: _propTypes.default.shape({
        url: _propTypes.default.string
      })
    }),
    imageUrl: _propTypes.default.string,
    description: _propTypes.default.string
  }),
  userId: _propTypes.default.string,
  type: _propTypes.default.string,
  title: _propTypes.default.string,
  subTitle: _propTypes.default.string,
  width: _propTypes.default.string,
  onSendMessage: _propTypes.default.func
};

var Image = function Image(props) {
  var data = props.data,
      width = props.width,
      userId = props.userId,
      onSendMessage = props.onSendMessage;
  var imageUrl = data.imageUrl;
  var action = data.action;

  var _useAction = (0, _hooks.useAction)({
    userId: userId,
    onSendMessage: onSendMessage
  }),
      _useAction2 = _slicedToArray(_useAction, 1),
      onAction = _useAction2[0];

  return /*#__PURE__*/_react.default.createElement(Wrapper, {
    className: "image",
    width: width
  }, action ? /*#__PURE__*/_react.default.createElement(ImageType, {
    src: imageUrl,
    cursor: "pointer",
    onClick: function onClick() {
      return onAction(data);
    }
  }) : /*#__PURE__*/_react.default.createElement(ImageType, {
    src: imageUrl
  }));
};

Image.propTypes = propTypes;
var _default = Image;
exports.default = _default;