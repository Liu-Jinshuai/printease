"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
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
var MyTsplLib = /*#__PURE__*/function () {
  function MyTsplLib() {
    _classCallCheck(this, MyTsplLib);
    this.command = [];
    this.NEW_LINE = [0xD, 0xA];
  }
  _createClass(MyTsplLib, [{
    key: "init",
    value: function init() {
      this.command = [];
    }
  }, {
    key: "stringToCharCodeArray",
    value: function stringToCharCodeArray(str) {
      return Array.from(str).map(function (_char) {
        return _char.charCodeAt(0);
      });
    }
  }, {
    key: "setSize",
    value: function setSize(width, height) {
      var _this$command;
      var str = "SIZE ".concat(width, " mm, ").concat(height, " mm");
      (_this$command = this.command).push.apply(_this$command, _toConsumableArray(this.stringToCharCodeArray(str)));
      this.setNewLine();
    }
  }, {
    key: "setGap",
    value: function setGap(m, n) {
      var _this$command2;
      var str = "GAP ".concat(m, " mm, ").concat(n, " mm");
      (_this$command2 = this.command).push.apply(_this$command2, _toConsumableArray(this.stringToCharCodeArray(str)));
      this.setNewLine();
    }
  }, {
    key: "setCls",
    value: function setCls() {
      var _this$command3;
      var str = "CLS";
      (_this$command3 = this.command).push.apply(_this$command3, _toConsumableArray(this.stringToCharCodeArray(str)));
      this.setNewLine();
    }
  }, {
    key: "setBitmap",
    value: function setBitmap(x, y, width, height, mode, bitmap) {
      var _this$command4;
      var str = "BITMAP ".concat(x, ", ").concat(y, ", ").concat(width / 8, ", ").concat(height, ", ").concat(mode, ",");
      (_this$command4 = this.command).push.apply(_this$command4, _toConsumableArray(this.stringToCharCodeArray(str)));
      for (var i = 0; i < bitmap.length; i++) {
        this.command.push(bitmap[i]);
      }
      this.setNewLine();
    }
  }, {
    key: "setText",
    value: function setText(x, y, font, rotation, x_multiplication, y_multiplication, text) {
      var _this$command5;
      var str = "TEXT ".concat(x, ", ").concat(y, ", \"").concat(font, "\", ").concat(rotation, ", ").concat(x_multiplication, ", ").concat(y_multiplication, ", \"").concat(text, "\"");
      (_this$command5 = this.command).push.apply(_this$command5, _toConsumableArray(this.stringToCharCodeArray(str)));
      this.setNewLine();
    }
  }, {
    key: "setPrint",
    value: function setPrint(m) {
      var _this$command6;
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var str = "PRINT ".concat(m, ", ").concat(n);
      (_this$command6 = this.command).push.apply(_this$command6, _toConsumableArray(this.stringToCharCodeArray(str)));
      this.setNewLine();
    }
  }, {
    key: "setNewLine",
    value: function setNewLine() {
      var _this$command7;
      (_this$command7 = this.command).push.apply(_this$command7, _toConsumableArray(this.NEW_LINE));
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
  return MyTsplLib;
}();
var _default = MyTsplLib;
exports["default"] = _default;