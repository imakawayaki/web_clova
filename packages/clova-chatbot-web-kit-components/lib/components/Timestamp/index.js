"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dateFns = require("date-fns");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: transparent;\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.8);\n  letter-spacing: 0.02em;\n  padding: 8px 0 15px 0;\n"])));

var propTypes = {
  timestamp: _propTypes.default.number
};

var Timestamp = function Timestamp(_ref) {
  var timestamp = _ref.timestamp;
  return /*#__PURE__*/_react.default.createElement(Wrapper, null, timestamp && (0, _dateFns.format)(new Date(timestamp), 'k:mm'));
};

Timestamp.propTypes = propTypes;
var _default = Timestamp;
exports.default = _default;