"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "configureStore", {
  enumerable: true,
  get: function get() {
    return _configureStore.default;
  }
});
Object.defineProperty(exports, "initApp", {
  enumerable: true,
  get: function get() {
    return _app.initApp;
  }
});
Object.defineProperty(exports, "minimizeChat", {
  enumerable: true,
  get: function get() {
    return _app.minimizeChat;
  }
});
Object.defineProperty(exports, "postActivity", {
  enumerable: true,
  get: function get() {
    return _app.postActivity;
  }
});

var _configureStore = _interopRequireDefault(require("./redux/configureStore"));

var _app = require("./redux/modules/app");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }