"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var usePostMessage = function usePostMessage(props) {
  var root = props.root,
      userId = props.userId,
      onInitApp = props.onInitApp,
      onMinimize = props.onMinimize,
      onSendMessage = props.onSendMessage;
  /**
   * Messaging Action Types
   */

  var CHAT_START = 'CHAT_START';
  var CHAT_FINISH = 'CHAT_FINISH';
  var CHAT_MINIMIZE = 'CHAT_MINIMIZE';
  var CHAT_UNMINIMIZE = 'CHAT_UNMINIMIZE';
  var CHAT_SEND = 'CHAT_SEND';
  /**
   * Action when starting a WebChat
   */

  var startChatAction = function startChatAction() {
    return {
      type: CHAT_START,
      payload: {}
    };
  };
  /**
   * Action when finishing a WebChat
   */


  var finishChatAction = function finishChatAction() {
    return {
      type: CHAT_FINISH,
      payload: {}
    };
  };
  /**
   * Action when minimizing a WebChat
   */


  var minimizeChatAction = function minimizeChatAction() {
    return {
      type: CHAT_MINIMIZE,
      payload: {}
    };
  };
  /**
   * Action when unminimizing a WebChat
   */


  var unminimizeChatAction = function unminimizeChatAction() {
    return {
      type: CHAT_UNMINIMIZE,
      payload: {}
    };
  };
  /**
   * Action when post chat message
   */


  var sendChatAction = function sendChatAction() {
    return {
      type: CHAT_SEND,
      payload: {}
    };
  };

  var handleStart = function handleStart() {
    // Do something when minimizing a WebChat
    onSendMessage({
      userId: userId,
      text: 'postback text of welcome action',
      event: 'open'
    });
  };

  var handleFinish = function handleFinish() {
    // Do something when minimizing a WebChat
    onInitApp();
    root.style.display = 'none';
  };

  var handleMinimize = function handleMinimize(value) {
    // Do something when minimizing a WebChat
    onMinimize(value);
  };

  var handleSend = function handleSend(value) {
    onSendMessage({
      userId: userId,
      text: value,
      event: 'send'
    });
  };

  var handleMessage = function handleMessage(e) {
    var data = e.data;

    if (data && data.type) {
      switch (data.type) {
        case 'CHAT_START':
          {
            handleStart();
            break;
          }

        case 'CHAT_FINISH':
          {
            handleFinish();
            break;
          }

        case 'CHAT_MINIMIZE':
          {
            handleMinimize(true);
            break;
          }

        case 'CHAT_UNMINIMIZE':
          {
            handleMinimize(false);
            break;
          }

        case 'CHAT_SEND':
          {
            handleSend(data.payload);
            break;
          }
      }
    }
  };

  var addMessageListener = function addMessageListener() {
    return window.addEventListener('message', handleMessage);
  };

  var removeMessageListener = function removeMessageListener() {
    return window.removeEventListener('message', handleMessage);
  };

  (0, _react.useEffect)(function () {
    addMessageListener();
    return removeMessageListener;
  }, [root, userId, onInitApp, onMinimize, onSendMessage]);
  return {
    startChatAction: startChatAction,
    finishChatAction: finishChatAction,
    minimizeChatAction: minimizeChatAction,
    unminimizeChatAction: unminimizeChatAction,
    sendChatAction: sendChatAction
  };
};

var _default = usePostMessage;
exports.default = _default;