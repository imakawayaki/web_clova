"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var useScrollToBottom = function useScrollToBottom(props) {
  var onScrollToBottom = function onScrollToBottom(_ref) {
    var _ref$element = _ref.element,
        element = _ref$element === void 0 ? null : _ref$element,
        _ref$timeout = _ref.timeout,
        timeout = _ref$timeout === void 0 ? 0 : _ref$timeout,
        _ref$behavior = _ref.behavior,
        behavior = _ref$behavior === void 0 ? 'auto' : _ref$behavior;
    if (!element) return;
    setTimeout(function () {
      element.scrollTo({
        top: element.scrollHeight,
        left: 0,
        behavior: behavior
      });
    }, timeout);
  };

  return {
    onScrollToBottom: onScrollToBottom
  };
};

var _default = useScrollToBottom;
exports.default = _default;