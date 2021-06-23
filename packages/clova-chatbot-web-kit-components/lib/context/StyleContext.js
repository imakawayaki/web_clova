"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyleContext = exports.defaultStyles = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultStyles = {
  root: null,
  width: '360px',
  height: '550px',
  title: 'CLOVA ChatBot',
  placeholder: 'Do you have any questions?',
  backgroundColor: '#7793bf',
  backgroundImage: '',
  headerHeight: '50px',
  avatarBackgroundColor: '#bbbfc3',
  avatarImage: '',
  bubbleStyle: 'rounded',
  // [rounded, square]
  bubbleRadius: '12px',
  bubbleColor: 'rgb(80,80,80)',
  bubbleBackgroundColor: 'rgb(243,243,237)',
  bubbleFontSize: '14px',
  userBubbleStyle: '',
  // [rounded, square]
  userBubbleRadius: '',
  userBubbleColor: '',
  userBubbleBackgroundColor: '',
  userBubbleFontSize: ''
};
exports.defaultStyles = defaultStyles;

var StyleContext = /*#__PURE__*/_react.default.createContext(defaultStyles);

exports.StyleContext = StyleContext;