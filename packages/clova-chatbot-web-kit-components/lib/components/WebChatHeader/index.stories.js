"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Primary = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Components/WebChatHeader',
  component: _.default
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_.default, args);
};

var Primary = Template.bind({});
exports.Primary = Primary;
Primary.args = {
  primary: true,
  label: 'Button'
};