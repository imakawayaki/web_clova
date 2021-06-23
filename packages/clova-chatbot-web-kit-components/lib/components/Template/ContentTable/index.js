"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Button = _interopRequireDefault(require("../../Button"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n"])));

var propTypes = {
  contentTable: _propTypes.default.arrayOf(_propTypes.default.arrayOf(_propTypes.default.shape({
    rowSpan: _propTypes.default.number,
    colSpan: _propTypes.default.number,
    data: _propTypes.default.shape({
      type: _propTypes.default.string,
      title: _propTypes.default.string,
      data: _propTypes.default.shape({
        type: _propTypes.default.string,
        action: _propTypes.default.shape({
          type: _propTypes.default.string,
          data: _propTypes.default.shape({
            url: _propTypes.default.string
          })
        })
      })
    })
  }))),
  userId: _propTypes.default.string,
  width: _propTypes.default.string,
  onSendMessage: _propTypes.default.func
};

var ContentTable = function ContentTable(props) {
  var contentTable = props.contentTable,
      userId = props.userId,
      onSendMessage = props.onSendMessage;

  var mapContentTable = function mapContentTable() {
    return contentTable.map(function (items, i) {
      return items.map(function (item, j) {
        var data = item.data;

        if (data && data.type === 'button') {
          return /*#__PURE__*/_react.default.createElement(_Button.default, _extends({
            key: j
          }, _objectSpread(_objectSpread({}, data), {}, {
            userId: userId,
            onSendMessage: onSendMessage
          })));
        } else {
          return null;
        }
      });
    }).filter(Boolean);
  };

  if (Array.isArray(contentTable)) {
    return /*#__PURE__*/_react.default.createElement(Wrapper, null, mapContentTable());
  } else {
    return /*#__PURE__*/_react.default.createElement(Wrapper, null);
  }
};

ContentTable.propTypes = propTypes;
var _default = ContentTable;
exports.default = _default;