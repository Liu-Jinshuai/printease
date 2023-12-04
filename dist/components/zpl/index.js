"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZplLib = void 0;
var _encoding = _interopRequireDefault(require("@/utils/encoding"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ZplLib = /*#__PURE__*/function () {
  function ZplLib() {
    _classCallCheck(this, ZplLib);
    this.command = [];
    this.NEW_LINE = '\n';
    this.encoding = "utf-8";
  }
  _createClass(ZplLib, [{
    key: "init",
    value: function init() {
      this.command = [];
      this.setCommand('^XA');
      this.setNewLine();
    }
  }, {
    key: "stringToEncodedBytes",
    value: function stringToEncodedBytes(str) {
      var buffer = (0, _encoding["default"])(this.encoding, str);
      return Array.from(buffer);
    }
  }, {
    key: "stringToCharCodeArray",
    value: function stringToCharCodeArray(str) {
      return Array.from(str).map(function (_char) {
        return _char.charCodeAt(0);
      });
    }
  }, {
    key: "setText",
    value: function setText(x, y, data) {
      var str1 = "^FO".concat(x, ",").concat(y);
      var str2 = "^FD".concat(data, "^FS");
      this.setCommand(str1);
      this.setNewLine();
      this.setCommand(str2);
      this.setNewLine();
    }
  }, {
    key: "setBarCode",
    value: function setBarCode(x, y, width, height, data, o, e, f, g) {
      var str1 = "^FO".concat(x, ",").concat(y);
      var str2 = "^BY".concat(width);
      var str3 = "^BC".concat(o || 'N', ",").concat(height, ",").concat(f || 'Y', ",").concat(g || 'N', ",").concat(e || 'N');
      var str4 = "^FD".concat(data, "^FS");
      this.setCommand(str1);
      this.setNewLine();
      this.setCommand(str2);
      this.setNewLine();
      this.setCommand(str3);
      this.setNewLine();
      this.setCommand(str4);
      this.setNewLine();
    }
  }, {
    key: "setQRCode",
    value: function setQRCode(x, y, data, model, c, d, e) {
      var str1 = "^FO".concat(x, ",").concat(y);
      var str2 = "^BQN,".concat(model, ",").concat(c, ",").concat(d || 'Q', ",").concat(e || 7);
      var str3 = "^FD".concat(data, "^FS");
      this.setCommand(str1);
      this.setNewLine();
      this.setCommand(str2);
      this.setNewLine();
      this.setCommand(str3);
      this.setNewLine();
    }
  }, {
    key: "setPrint",
    value: function setPrint() {
      var str = "^XZ";
      this.setCommand(str);
      this.setNewLine();
    }
  }, {
    key: "setNewLine",
    value: function setNewLine() {
      var _this$command;
      (_this$command = this.command).push.apply(_this$command, _toConsumableArray(this.stringToCharCodeArray(this.NEW_LINE)));
    }
  }, {
    key: "setCommand",
    value: function setCommand(command) {
      if (typeof command === "string") {
        var _this$command2;
        (_this$command2 = this.command).push.apply(_this$command2, _toConsumableArray(this.stringToEncodedBytes(command)));
      } else {
        var _this$command3;
        (_this$command3 = this.command).push.apply(_this$command3, _toConsumableArray(command));
      }
    }
  }, {
    key: "setEncoding",
    value: function setEncoding(encoding) {
      this.encoding = encoding;
    }
  }, {
    key: "getCommand",
    value: function getCommand() {
      return this.command;
    }
  }, {
    key: "getBuffer",
    value: function getBuffer() {
      var buffer = new ArrayBuffer(this.command.length);
      var dataView = new DataView(buffer);
      for (var i = 0; i < this.command.length; i++) {
        dataView.setUint8(i, this.command[i]);
      }
      return buffer;
    }
  }]);
  return ZplLib;
}();
exports.ZplLib = ZplLib;