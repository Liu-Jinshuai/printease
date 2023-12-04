"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TsplLib = void 0;
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
/**
 * @description: TSPL instruction library interface document
 * @param {*}
 * @return {*}
 * @implements TsplLibInterface
 */
var TsplLib = /*#__PURE__*/function () {
  function TsplLib() {
    _classCallCheck(this, TsplLib);
    this.command = [];
    this.NEW_LINE = '\n';
    this.encoding = "utf-8";
  }
  _createClass(TsplLib, [{
    key: "init",
    value: function init() {
      this.command = [];
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
    key: "setSize",
    value: function setSize(width, height) {
      var str = "SIZE ".concat(width, " mm, ").concat(height, " mm");
      this.setCommand(str);
      this.setNewLine();
    }
  }, {
    key: "setGap",
    value: function setGap(m, n) {
      var str = "GAP ".concat(m, " mm, ").concat(n, " mm");
      this.setCommand(str);
      this.setNewLine();
    }
  }, {
    key: "setCls",
    value: function setCls() {
      var str = "CLS";
      this.setCommand(str);
      this.setNewLine();
    }
  }, {
    key: "setBitmap",
    value: function setBitmap(x, y, width, height, mode, bitmap) {
      var str = "BITMAP ".concat(x, ", ").concat(y, ", ").concat(width / 8, ", ").concat(height, ", ").concat(mode, ",");
      this.setCommand(str);
      for (var i = 0; i < bitmap.length; i++) {
        this.command.push(bitmap[i]);
      }
      this.setNewLine();
    }
  }, {
    key: "setText",
    value: function setText(x, y, font, rotation, x_multiplication, y_multiplication, text) {
      var str = "TEXT ".concat(x, ", ").concat(y, ", \"").concat(font, "\", ").concat(rotation, ", ").concat(x_multiplication, ", ").concat(y_multiplication, ", \"").concat(text, "\"");
      this.setCommand(str);
      this.setNewLine();
    }
  }, {
    key: "setCashBox",
    value: function setCashBox(m, t1, t2) {
      var str = "ESC p ".concat(m, ", ").concat(t1, ", ").concat(t2);
      this.setCommand(str);
      this.setNewLine();
    }
  }, {
    key: "setBline",
    value: function setBline(m, n) {
      var str = "BLINE ".concat(m, " mm, ").concat(n, " mm");
      this.setCommand(str);
      this.setNewLine();
    }
  }, {
    key: "setOffset",
    value: function setOffset(m) {
      var str = "OFFSET ".concat(m, " mm");
      this.setCommand(str);
      this.setNewLine();
    }
  }, {
    key: "setSpeed",
    value: function setSpeed(m) {
      var str = "SPEED ".concat(m);
      this.setCommand(str);
      this.setNewLine();
    }
  }, {
    key: "setDensity",
    value: function setDensity(m) {
      var str = "DENSITY ".concat(m);
      this.setCommand(str);
      this.setNewLine();
    }
  }, {
    key: "setDirection",
    value: function setDirection(m) {
      var str = "DIRECTION ".concat(m);
      this.setCommand(str);
      this.setNewLine();
    }
  }, {
    key: "setReference",
    value: function setReference(x, y) {
      var str = "REFERENCE ".concat(x, ", ").concat(y);
      this.setCommand(str);
      this.setNewLine();
    }
  }, {
    key: "setCountry",
    value: function setCountry(m) {
      var str = "COUNTRY ".concat(m);
      this.setCommand(str);
      this.setNewLine();
    }
  }, {
    key: "setCodePage",
    value: function setCodePage(m) {
      var str = "CODEPAGE ".concat(m);
      this.setCommand(str);
      this.setNewLine();
    }
  }, {
    key: "setFeed",
    value: function setFeed(m) {
      var str = "FEED ".concat(m);
      this.setCommand(str);
      this.setNewLine();
    }
  }, {
    key: "setBackFeed",
    value: function setBackFeed(m) {
      var str = "BACKFEED ".concat(m);
      this.setCommand(str);
      this.setNewLine();
    }
  }, {
    key: "setBackup",
    value: function setBackup(m) {
      var str = "BACKUP ".concat(m);
      this.setCommand(str);
      this.setNewLine();
    }
  }, {
    key: "setFormFeed",
    value: function setFormFeed() {
      var str = "FORMFEED";
      this.setCommand(str);
      this.setNewLine();
    }
  }, {
    key: "setHome",
    value: function setHome() {
      var str = "HOME";
      this.setCommand(str);
      this.setNewLine();
    }
  }, {
    key: "setSound",
    value: function setSound(m, n) {
      var str = "SOUND ".concat(m, ", ").concat(n);
      this.setCommand(str);
      this.setNewLine();
    }
  }, {
    key: "setLimitFeed",
    value: function setLimitFeed(m) {
      var str = "LIMITFEED ".concat(m);
      this.setCommand(str);
      this.setNewLine();
    }
  }, {
    key: "setBar",
    value: function setBar(x, y, width, height) {
      var str = "BAR ".concat(x, ", ").concat(y, ", ").concat(width, ", ").concat(height);
      this.setCommand(str);
      this.setNewLine();
    }
  }, {
    key: "setBarCode",
    value: function setBarCode(x, y, codeType, height, humanReadable, rotation, narrow, wide, content) {
      var str = "BARCODE ".concat(x, ", ").concat(y, ", \"").concat(codeType, "\", ").concat(height, ", ").concat(humanReadable, ", ").concat(rotation, ", ").concat(narrow, ", ").concat(wide, ", \"").concat(content, "\"");
      this.setCommand(str);
      this.setNewLine();
    }
  }, {
    key: "setBox",
    value: function setBox(x, y, xend, yend, thickness) {
      var str = "BOX ".concat(x, ", ").concat(y, ", ").concat(xend, ", ").concat(yend, ", ").concat(thickness);
      this.setCommand(str);
      this.setNewLine();
    }
  }, {
    key: "setPutBmp",
    value: function setPutBmp(x, y, fileName) {
      var str = "PUTBMP ".concat(x, ", ").concat(y, ", \"").concat(fileName, "\"");
      this.setCommand(str);
      this.setNewLine();
    }
  }, {
    key: "setPutPcx",
    value: function setPutPcx(x, y, fileName) {
      var str = "PUTPCX ".concat(x, ", ").concat(y, ", \"").concat(fileName, "\"");
      this.setCommand(str);
      this.setNewLine();
    }
  }, {
    key: "setErase",
    value: function setErase(x_start, y_start, x_width, y_height) {
      var str = "ERASE ".concat(x_start, ", ").concat(y_start, ", ").concat(x_width, ", ").concat(y_height);
      this.setCommand(str);
      this.setNewLine();
    }
  }, {
    key: "setReverse",
    value: function setReverse(x_start, y_start, x_width, y_height) {
      var str = "REVERSE ".concat(x_start, ", ").concat(y_start, ", ").concat(x_width, ", ").concat(y_height);
      this.setCommand(str);
      this.setNewLine();
    }
  }, {
    key: "setQRCode",
    value: function setQRCode(x, y, ecc, cellWidth, mode, rotation, content) {
      var str = "QRCODE ".concat(x, ",").concat(y, ",").concat(ecc, ",").concat(cellWidth, ",").concat(mode, ",").concat(rotation, ",\"").concat(content, "\"");
      this.setCommand(str);
      this.setNewLine();
    }
  }, {
    key: "setEncoding",
    value: function setEncoding(encoding) {
      this.encoding = encoding;
    }
  }, {
    key: "setPrint",
    value: function setPrint() {
      var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var str = "PRINT ".concat(m, ", ").concat(n);
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
  return TsplLib;
}();
exports.TsplLib = TsplLib;