"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var useAction = function useAction(props) {
  var userId = props.userId,
      onSendMessage = props.onSendMessage;

  var onAction = function onAction(_ref) {
    var action = _ref.action;

    switch (action.type) {
      case 'postback':
        {
          var params = {
            userId: userId,
            text: action.data && action.data.postback,
            event: 'send'
          };
          onSendMessage(params);
          break;
        }

      case 'utterance':
        {
          /* @todo */
          var _params = {
            userId: userId,
            text: action.data && action.data.postback,
            event: 'send'
          };
          onSendMessage(_params);
          break;
        }

      case 'link':
        {
          if (action.data && action.data.url) {
            window.open(action.data.url, '_blank');
          }

          break;
        }

      case 'phone':
        {
          /* @todo */
          var _params2 = {
            userId: userId,
            number: action.data && action.data.number,
            event: 'send'
          };
          onSendMessage(_params2);
          break;
        }
    }
  };

  return [onAction];
};

var _default = useAction;
exports.default = _default;