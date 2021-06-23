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

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  margin: 0;\n  padding: 0;\n  width: 36px;\n  height: 36px;\n  border-radius: 20px;\n  background-color: ", ";\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  font-size: 24px;\n  line-height: 1em;\n"])), function (props) {
  return props.backgroundColor;
});

var AvatarImage = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  url(", ");\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n"])), function (props) {
  return "background-image: ".concat(props.src);
});

var propTypes = {
  imageUrl: _propTypes.default.string
};

var Avatar = function Avatar(props) {
  var styles = (0, _react.useContext)(_context.StyleContext);
  var avatarBackgroundColor = styles.avatarBackgroundColor,
      avatarImage = styles.avatarImage;
  return /*#__PURE__*/_react.default.createElement(Wrapper, {
    backgroundColor: avatarBackgroundColor
  }, avatarImage ? /*#__PURE__*/_react.default.createElement(AvatarImage, {
    src: avatarImage
  }) : /*#__PURE__*/_react.default.createElement(_md.MdPerson, null));
};

Avatar.propTypes = propTypes;
var _default = Avatar;
exports.default = _default;