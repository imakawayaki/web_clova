"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.minimizeChat = exports.initApp = exports.postActivity = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _axios = _interopRequireDefault(require("axios"));

var _uuid = require("uuid");

var _config = require("../../../config");

var _extraReducers;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var postActivity = (0, _toolkit.createAsyncThunk)('app/postActivity', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref, _ref2) {
    var userId, text, _ref$event, event, dispatch, getState, _getState, apiPath, result;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            userId = _ref.userId, text = _ref.text, _ref$event = _ref.event, event = _ref$event === void 0 ? 'send' : _ref$event;
            dispatch = _ref2.dispatch, getState = _ref2.getState;
            _getState = getState(), apiPath = _getState.app.apiPath;
            _context.next = 5;
            return _axios.default.post("".concat(apiPath, "api/v2/message"), {
              userId: userId,
              text: text,
              event: event
            });

          case 5:
            result = _context.sent;
            return _context.abrupt("return", {
              user: 'chatbot',
              data: result.data
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref3.apply(this, arguments);
  };
}());
exports.postActivity = postActivity;
var slice = (0, _toolkit.createSlice)({
  name: 'app',
  initialState: {
    userId: null,
    activities: [],
    isMinimized: false,
    apiPath: null,
    error: null,
    loading: false
  },
  reducers: {
    initApp: function initApp(state, action) {
      var payload = action.payload;
      state.userId = (0, _uuid.v4)();
      state.isMinimized = false;
      state.error = null;
      state.loading = false;
      payload && payload.apiPath ? state.apiPath = payload.apiPath : state.activities = [];
    },
    minimizeChat: function minimizeChat(state, action) {
      state.isMinimized = !!action.payload;
    }
  },
  extraReducers: (_extraReducers = {}, _defineProperty(_extraReducers, postActivity.pending, function (state, action) {
    var arg = action.meta.arg;
    var event = arg.event;
    var unixTimestamp = Math.floor(new Date().getTime());

    if (!event || event !== 'open') {
      var bubble = {
        user: 'user',
        data: {
          type: 'TEXT',
          text: arg.text,
          event: event,
          timestamp: unixTimestamp
        }
      };
      state.activities = [].concat(_toConsumableArray(state.activities), [bubble]);
    }

    state.loading = true;
  }), _defineProperty(_extraReducers, postActivity.fulfilled, function (state, action) {
    var payload = action.payload;
    state.activities = [].concat(_toConsumableArray(state.activities), [payload]);
    state.error = null;
    state.loading = false;
  }), _defineProperty(_extraReducers, postActivity.rejected, function (state, action) {
    var error = action.error;
    var bubble = {
      user: 'chatbot',
      data: {
        bubbles: []
      }
    };

    if (error && error.message === 'Network Error') {
      bubble.data.bubbles.push({
        type: 'error',
        data: {
          description: _config.ERROR_MESSAGES.networkError
        }
      });
      state.activities = [].concat(_toConsumableArray(state.activities), [bubble]);
    } else {
      bubble.data.bubbles.push({
        type: 'error',
        data: {
          description: _config.ERROR_MESSAGES.systemError
        }
      });
      state.activities = [].concat(_toConsumableArray(state.activities), [bubble]);
    }

    state.error = true;
    state.loading = false;
  }), _extraReducers)
});
var actions = slice.actions,
    reducer = slice.reducer;
var initApp = actions.initApp,
    minimizeChat = actions.minimizeChat;
exports.minimizeChat = minimizeChat;
exports.initApp = initApp;
var _default = reducer;
exports.default = _default;