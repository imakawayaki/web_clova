"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureAppStore;

var _toolkit = require("@reduxjs/toolkit");

var _reduxPersist = require("redux-persist");

var _reduxMulti = _interopRequireDefault(require("redux-multi"));

var _session = _interopRequireDefault(require("redux-persist/lib/storage/session"));

var _reducer = _interopRequireDefault(require("./modules/reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var persistConfig = {
  key: 'root',
  storage: _session.default,
  whitelist: ['app']
};

function configureAppStore(preloadedState) {
  var persistedReducer = (0, _reduxPersist.persistReducer)(persistConfig, (0, _reducer.default)());
  var middlewares = [_reduxMulti.default];
  var store = (0, _toolkit.configureStore)({
    reducer: persistedReducer,
    middleware: function middleware(getDefaultMiddleware) {
      var _getDefaultMiddleware;

      return (_getDefaultMiddleware = getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [_reduxPersist.FLUSH, _reduxPersist.REHYDRATE, _reduxPersist.PAUSE, _reduxPersist.PERSIST, _reduxPersist.PURGE, _reduxPersist.REGISTER]
        }
      })).concat.apply(_getDefaultMiddleware, middlewares);
    },
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: preloadedState
  });
  var persistor = (0, _reduxPersist.persistStore)(store);
  return {
    store: store,
    persistor: persistor
  };
}