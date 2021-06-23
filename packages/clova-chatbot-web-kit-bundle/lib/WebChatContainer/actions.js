"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onMinimize = exports.onInitApp = exports.onSendMessage = void 0;

var _clovaChatbotWebKitCore = require("@line/clova-chatbot-web-kit-core");

var onSendMessage = function onSendMessage(value) {
  return (0, _clovaChatbotWebKitCore.postActivity)(value);
};

exports.onSendMessage = onSendMessage;

var onInitApp = function onInitApp() {
  return (0, _clovaChatbotWebKitCore.initApp)();
};

exports.onInitApp = onInitApp;

var onMinimize = function onMinimize(value) {
  return (0, _clovaChatbotWebKitCore.minimizeChat)(value);
};

exports.onMinimize = onMinimize;