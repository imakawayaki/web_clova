"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ReactWebChat = _interopRequireDefault(require("./ReactWebChat"));

var _renderWebChat = require("./renderWebChat");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Reactでimportする場合
 */
var _default = _ReactWebChat.default;
/**
 * Browserで使用する場合
 */

exports.default = _default;
window.WebChat = {
  ReactWebChat: _ReactWebChat.default,
  renderWebChat: _renderWebChat.renderWebChat
};