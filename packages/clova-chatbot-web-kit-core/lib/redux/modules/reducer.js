"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = function rootReducer() {
  return (0, _redux.combineReducers)({
    app: _app.default
  });
};

var _default = rootReducer;
exports.default = _default;