"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var useResponsive = function useResponsive(props) {
  var root = props.root,
      width = props.width,
      height = props.height,
      headerHeight = props.headerHeight,
      isMinimized = props.isMinimized,
      isMobile = props.isMobile;
  (0, _react.useEffect)(function () {
    if (isMobile) {
      root.style.width = '100%';
      root.style.height = '100%';
      root.style.margin = '0';
      root.style.padding = '0';

      if (isMinimized) {
        root.style.height = headerHeight;
      }
    } else {
      if (isMinimized) {
        root.style.width = width;
        root.style.height = headerHeight;
      } else {
        root.style.width = width;
        root.style.height = height;
      }
    }
  }, [root, width, height, headerHeight, isMinimized, isMobile]);
};

var _default = useResponsive;
exports.default = _default;