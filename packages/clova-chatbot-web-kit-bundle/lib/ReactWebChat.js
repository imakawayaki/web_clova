"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _react2 = require("redux-persist/integration/react");

var _clovaChatbotWebKitCore = require("@line/clova-chatbot-web-kit-core");

var _clovaChatbotWebKitComponents = require("@line/clova-chatbot-web-kit-components");

var _WebChatContainer = _interopRequireDefault(require("./WebChatContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _configureStore = (0, _clovaChatbotWebKitCore.configureStore)(),
    store = _configureStore.store,
    persistor = _configureStore.persistor;

var dispatch = store.dispatch;
var propTypes = {
  root: _propTypes.default.any,
  apiPath: _propTypes.default.string,
  width: _propTypes.default.string,
  height: _propTypes.default.string,
  title: _propTypes.default.string,
  cardWidth: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  backgroundColor: _propTypes.default.string,
  backgroundImage: _propTypes.default.string,
  headerHeight: _propTypes.default.string,
  avatarImage: _propTypes.default.string,
  bubbleStyle: _propTypes.default.string,
  bubbleRadius: _propTypes.default.string,
  bubbleColor: _propTypes.default.string,
  bubbleBackgroundColor: _propTypes.default.string,
  bubbleFontSize: _propTypes.default.string
};

var ReactWebChat = function ReactWebChat(props) {
  var root = props.root,
      apiPath = props.apiPath;

  var styles = _objectSpread(_objectSpread({}, _clovaChatbotWebKitComponents.defaultStyles), props);
  /**
   * Initialize styles
   *
   * CARD_WIDTH_RATIO: cardWidth / chat body width
   * cardWidth: carousel card width
   *
   * @todo in case of percentage value
   * @todo allow only px and %
   */


  if (!styles.cardWidth) {
    var CARD_WIDTH_RATIO = 0.6;

    if (root) {
      var styleWidth = styles.width;
      var width = styleWidth.replace(/[^0-9]/g, '');
      styles.cardWidth = Math.ceil(Number(width) * CARD_WIDTH_RATIO) + 'px';
    }
  }
  /**
   * Initialize App
   */


  dispatch((0, _clovaChatbotWebKitCore.initApp)({
    apiPath: apiPath
  }));
  return /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react.default.createElement(_react2.PersistGate, {
    loading: null,
    persistor: persistor
  }, /*#__PURE__*/_react.default.createElement(_clovaChatbotWebKitComponents.StyleContext.Provider, {
    value: styles
  }, /*#__PURE__*/_react.default.createElement(_WebChatContainer.default, null))));
};

ReactWebChat.propTypes = propTypes;
var _default = ReactWebChat;
exports.default = _default;