"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactResponsive = require("react-responsive");

var _clovaChatbotWebKitComponents = require("@line/clova-chatbot-web-kit-components");

var _hooks = require("../hooks");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  /* part of bootstrap reboot.css https://raw.githubusercontent.com/twbs/bootstrap/v4-dev/dist/css/bootstrap-reboot.css*/\n  *, *::before, *::after {\n    box-sizing: border-box;\n  }\n  p {\n    margin-top: 0;\n    //margin-bottom: 1rem;\n  }\n  a {\n    color: #007bff;\n    text-decoration: none;\n    background-color: transparent;\n  }\n  a:hover {\n    color: #0056b3;\n    text-decoration: underline;\n  }\n  a:not([href]):not([class]) {\n    color: inherit;\n    text-decoration: none;\n  }\n  a:not([href]):not([class]):hover {\n    color: inherit;\n    text-decoration: none;\n  }\n  /* */\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n  url(", ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  transition: all 0.3s ease-in-out;\n  .web-chat-header {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: ", ";\n    z-index: 1;\n  }\n  .web-chat-body {\n    padding-top: ", ";\n    padding-bottom: 50px;\n  }\n  .web-chat-send-box {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 50px;\n  }\n"])), function (props) {
  return props.backgroundColor;
}, function (props) {
  return "background-image: ".concat(props.backgroundImage);
}, function (props) {
  return props.headerHeight;
}, function (props) {
  return props.headerHeight;
});

var propTypes = {
  app: _propTypes.default.shape({
    userId: _propTypes.default.string,
    activities: _propTypes.default.array,
    isMinimized: _propTypes.default.bool,
    error: _propTypes.default.any,
    loading: _propTypes.default.bool
  }),
  onInitApp: _propTypes.default.func,
  onMinimize: _propTypes.default.func,
  onSendMessage: _propTypes.default.func
};

var WebChat = function WebChat(props) {
  var app = props.app,
      onInitApp = props.onInitApp,
      onMinimize = props.onMinimize,
      onSendMessage = props.onSendMessage;
  var userId = app.userId,
      isMinimized = app.isMinimized;
  var styles = (0, _react.useContext)(_clovaChatbotWebKitComponents.StyleContext);
  var root = styles.root,
      width = styles.width,
      height = styles.height,
      title = styles.title,
      placeholder = styles.placeholder,
      backgroundColor = styles.backgroundColor,
      backgroundImage = styles.backgroundImage,
      headerHeight = styles.headerHeight;
  var isMobile = (0, _reactResponsive.useMediaQuery)({
    query: '(max-width: 575px)'
  });

  var _usePostMessage = (0, _hooks.usePostMessage)({
    root: root,
    userId: userId,
    onInitApp: onInitApp,
    onMinimize: onMinimize,
    onSendMessage: onSendMessage
  }),
      finishChatAction = _usePostMessage.finishChatAction,
      minimizeChatAction = _usePostMessage.minimizeChatAction,
      unminimizeChatAction = _usePostMessage.unminimizeChatAction;

  (0, _hooks.useResponsive)({
    root: root,
    width: width,
    height: height,
    headerHeight: headerHeight,
    isMinimized: isMinimized,
    isMobile: isMobile
  });
  return /*#__PURE__*/_react.default.createElement(Wrapper, {
    className: "web-chat-container",
    headerHeight: headerHeight,
    backgroundColor: backgroundColor,
    backgroundImage: backgroundImage
  }, /*#__PURE__*/_react.default.createElement(_clovaChatbotWebKitComponents.WebChatHeader, {
    title: title,
    onClose: function onClose(e) {
      e.stopPropagation();
      window.postMessage(finishChatAction(), '*');
    },
    onMinimize: function onMinimize(e) {
      e.stopPropagation();
      isMinimized ? window.postMessage(unminimizeChatAction(), '*') : window.postMessage(minimizeChatAction(), '*');
    }
  }), /*#__PURE__*/_react.default.createElement(_clovaChatbotWebKitComponents.WebChatBody, _extends({}, app, {
    onSendMessage: onSendMessage
  })), /*#__PURE__*/_react.default.createElement(_clovaChatbotWebKitComponents.WebChatSendBox, {
    userId: userId,
    placeholder: placeholder,
    onSendMessage: onSendMessage
  }));
};

WebChat.propTypes = propTypes;
var _default = WebChat;
exports.default = _default;