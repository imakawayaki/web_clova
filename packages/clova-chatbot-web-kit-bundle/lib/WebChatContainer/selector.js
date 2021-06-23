"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propsSelector = void 0;

var propsSelector = function propsSelector(state) {
  var app = state.app;
  return {
    app: app
  };
};

exports.propsSelector = propsSelector;