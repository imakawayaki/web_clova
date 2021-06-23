"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _simplebarReact = _interopRequireDefault(require("simplebar-react"));

require("simplebar/dist/simplebar.min.css");

require("react-perfect-scrollbar/dist/css/styles.css");

var _reactPerfectScrollbar = _interopRequireDefault(require("react-perfect-scrollbar"));

var _hooks = require("../../hooks");

var _Loading = _interopRequireDefault(require("../Loading"));

var _UserBubble = _interopRequireDefault(require("../UserBubble"));

var _ChatbotBubble = _interopRequireDefault(require("../ChatbotBubble"));

var _QuickButton = _interopRequireDefault(require("../QuickButton"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  height: 100%;\n  .simplebar-scrollbar.simplebar-visible:before {\n    opacity: 0.2;\n  }\n"])));

var ActivitiesWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: relative;\n  height: 100%;\n  background-color: transparent;\n  box-sizing: border-box;\n  overflow: auto;\n  &.hasQuickButtons {\n    height: calc(100% - 54px);\n  }\n"])));

var QuickButtonsWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: relative;\n  display: none;\n  &.hasQuickButtons {\n    display: block;\n    height: 54px;\n    overflow: hidden;\n    .scrollbar-container {\n      height: auto;\n    }\n    .ps__rail-x {\n      border-radius: 8px;\n    }\n    .ps .ps__rail-x:hover,\n    .ps .ps__rail-y:hover,\n    .ps .ps__rail-x:focus,\n    .ps .ps__rail-y:focus,\n    .ps .ps__rail-x.ps--clicking,\n    .ps .ps__rail-y.ps--clicking {\n      background-color: rgba(255, 255, 255, 0.3);\n    }\n    .ps__thumb-x {\n      background-color: rgba(0, 0, 0, 0.3);\n      bottom: 3px;\n    }\n    .ps__rail-x:hover > .ps__thumb-x,\n    .ps__rail-x:focus > .ps__thumb-x,\n    .ps__rail-x.ps--clicking .ps__thumb-x {\n      background-color: rgba(0, 0, 0, 0.4);\n      height: 9px;\n    }\n  }\n"])));

var propTypes = {
  userId: _propTypes.default.string,
  activities: _propTypes.default.array,
  isMinimized: _propTypes.default.bool,
  error: _propTypes.default.any,
  loading: _propTypes.default.bool,
  onSendMessage: _propTypes.default.func
};

var WebChatBody = function WebChatBody(props) {
  var userId = props.userId,
      activities = props.activities,
      loading = props.loading,
      onSendMessage = props.onSendMessage;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      quickButtons = _useState2[0],
      setQuickButtons = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      mapActivities = _useState4[0],
      setMapActivities = _useState4[1];

  var _useScrollToBottom = (0, _hooks.useScrollToBottom)(),
      onScrollToBottom = _useScrollToBottom.onScrollToBottom;

  var scrollBarRef = (0, _react.useRef)(null);
  (0, _react.useLayoutEffect)(function () {
    var placeQuickbuttons = function placeQuickbuttons() {
      if (!Array.isArray(activities)) {
        return [];
      }

      var latest = activities[activities.length - 1];

      if (!latest || latest.user !== 'chatbot' || !latest.data) {
        return [];
      }

      var quickButtons = latest.data.quickButtons;

      if (Array.isArray(quickButtons)) {
        return quickButtons;
      }

      return [];
    };

    setQuickButtons(placeQuickbuttons());
    setMapActivities(Array.isArray(activities) ? activities.map(function (activity, i) {
      /**
       * User Bubbles
       */
      if (activity.user === 'user') {
        var _activity$data = activity.data,
            text = _activity$data.text,
            timestamp = _activity$data.timestamp;
        var _props = {
          text: text,
          timestamp: timestamp
        };
        return /*#__PURE__*/_react.default.createElement(_UserBubble.default, _extends({
          key: i
        }, _props));
      }
      /**
       * Chatbot Bubbles
       */


      if (activity.user === 'chatbot') {
        var _activity$data2 = activity.data,
            _timestamp = _activity$data2.timestamp,
            bubbles = _activity$data2.bubbles;
        return Array.isArray(bubbles) && bubbles.map(function (bubble, j) {
          return /*#__PURE__*/_react.default.createElement(_ChatbotBubble.default, {
            key: "".concat(i, "-").concat(j),
            userId: userId,
            bubble: bubble,
            timestamp: _timestamp,
            onSendMessage: onSendMessage
          });
        });
      }
      /**
       * Never reach here...
       */


      return null;
    }) : []);
  }, [activities]);
  (0, _react.useEffect)(function () {
    if (scrollBarRef.current) {
      var element = scrollBarRef.current.getScrollElement();
      onScrollToBottom({
        element: element,
        timeout: 0,
        behavior: 'smooth'
      });
    }
  }, [loading]);
  return /*#__PURE__*/_react.default.createElement(Wrapper, {
    id: "web-chat-body-id",
    className: "web-chat-body"
  }, /*#__PURE__*/_react.default.createElement(ActivitiesWrapper, {
    className: (0, _classnames.default)({
      hasQuickButtons: quickButtons.length > 0
    })
  }, /*#__PURE__*/_react.default.createElement(_simplebarReact.default, {
    className: "activities-scroll",
    forceVisible: "x",
    autoHide: true,
    style: {
      height: '100%'
    },
    ref: scrollBarRef
  }, mapActivities, loading && /*#__PURE__*/_react.default.createElement(_Loading.default, null))), /*#__PURE__*/_react.default.createElement(QuickButtonsWrapper, {
    className: (0, _classnames.default)({
      hasQuickButtons: quickButtons.length > 0
    })
  }, /*#__PURE__*/_react.default.createElement(_reactPerfectScrollbar.default, {
    className: "chatbot-quick-button"
  }, /*#__PURE__*/_react.default.createElement(_QuickButton.default, {
    buttons: quickButtons,
    userId: userId,
    onSendMessage: onSendMessage
  }))));
};

WebChatBody.propTypes = propTypes;
var _default = WebChatBody;
exports.default = _default;