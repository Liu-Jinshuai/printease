"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TsplLib = void 0;
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
    this.NEW_LINE = [10];
  }
  _createClass(TsplLib, [{
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
    key: "setCashBox",
    value: function setCashBox(m, t1, t2) {
      var _this$command6;
      var str = "ESC p ".concat(m, ", ").concat(t1, ", ").concat(t2);
      (_this$command6 = this.command).push.apply(_this$command6, _toConsumableArray(this.stringToCharCodeArray(str)));
      this.setNewLine();
    }
  }, {
    key: "setBline",
    value: function setBline(m, n) {
      var _this$command7;
      var str = "BLINE ".concat(m, " mm, ").concat(n, " mm");
      (_this$command7 = this.command).push.apply(_this$command7, _toConsumableArray(this.stringToCharCodeArray(str)));
      this.setNewLine();
    }
  }, {
    key: "setOffset",
    value: function setOffset(m) {
      var _this$command8;
      var str = "OFFSET ".concat(m, " mm");
      (_this$command8 = this.command).push.apply(_this$command8, _toConsumableArray(this.stringToCharCodeArray(str)));
      this.setNewLine();
    }
  }, {
    key: "setSpeed",
    value: function setSpeed(m) {
      var _this$command9;
      var str = "SPEED ".concat(m);
      (_this$command9 = this.command).push.apply(_this$command9, _toConsumableArray(this.stringToCharCodeArray(str)));
      this.setNewLine();
    }
  }, {
    key: "setDensity",
    value: function setDensity(m) {
      var _this$command10;
      var str = "DENSITY ".concat(m);
      (_this$command10 = this.command).push.apply(_this$command10, _toConsumableArray(this.stringToCharCodeArray(str)));
      this.setNewLine();
    }
  }, {
    key: "setDirection",
    value: function setDirection(m) {
      var _this$command11;
      var str = "DIRECTION ".concat(m);
      (_this$command11 = this.command).push.apply(_this$command11, _toConsumableArray(this.stringToCharCodeArray(str)));
      this.setNewLine();
    }
  }, {
    key: "setReference",
    value: function setReference(x, y) {
      var _this$command12;
      var str = "REFERENCE ".concat(x, ", ").concat(y);
      (_this$command12 = this.command).push.apply(_this$command12, _toConsumableArray(this.stringToCharCodeArray(str)));
      this.setNewLine();
    }
  }, {
    key: "setCountry",
    value: function setCountry(m) {
      var _this$command13;
      var str = "COUNTRY ".concat(m);
      (_this$command13 = this.command).push.apply(_this$command13, _toConsumableArray(this.stringToCharCodeArray(str)));
      this.setNewLine();
    }
  }, {
    key: "setCodePage",
    value: function setCodePage(m) {
      var _this$command14;
      var str = "CODEPAGE ".concat(m);
      (_this$command14 = this.command).push.apply(_this$command14, _toConsumableArray(this.stringToCharCodeArray(str)));
      this.setNewLine();
    }
  }, {
    key: "setFeed",
    value: function setFeed(m) {
      var _this$command15;
      var str = "FEED ".concat(m);
      (_this$command15 = this.command).push.apply(_this$command15, _toConsumableArray(this.stringToCharCodeArray(str)));
      this.setNewLine();
    }
  }, {
    key: "setBackFeed",
    value: function setBackFeed(m) {
      var _this$command16;
      var str = "BACKFEED ".concat(m);
      (_this$command16 = this.command).push.apply(_this$command16, _toConsumableArray(this.stringToCharCodeArray(str)));
      this.setNewLine();
    }
  }, {
    key: "setBackup",
    value: function setBackup(m) {
      var _this$command17;
      var str = "BACKUP ".concat(m);
      (_this$command17 = this.command).push.apply(_this$command17, _toConsumableArray(this.stringToCharCodeArray(str)));
      this.setNewLine();
    }
  }, {
    key: "setFormFeed",
    value: function setFormFeed() {
      var _this$command18;
      var str = "FORMFEED";
      (_this$command18 = this.command).push.apply(_this$command18, _toConsumableArray(this.stringToCharCodeArray(str)));
      this.setNewLine();
    }
  }, {
    key: "setHome",
    value: function setHome() {
      var _this$command19;
      var str = "HOME";
      (_this$command19 = this.command).push.apply(_this$command19, _toConsumableArray(this.stringToCharCodeArray(str)));
      this.setNewLine();
    }
  }, {
    key: "setSound",
    value: function setSound(m, n) {
      var _this$command20;
      var str = "SOUND ".concat(m, ", ").concat(n);
      (_this$command20 = this.command).push.apply(_this$command20, _toConsumableArray(this.stringToCharCodeArray(str)));
      this.setNewLine();
    }
  }, {
    key: "setLimitFeed",
    value: function setLimitFeed(m) {
      var _this$command21;
      var str = "LIMITFEED ".concat(m);
      (_this$command21 = this.command).push.apply(_this$command21, _toConsumableArray(this.stringToCharCodeArray(str)));
      this.setNewLine();
    }
  }, {
    key: "setBar",
    value: function setBar(x, y, width, height) {
      var _this$command22;
      var str = "BAR ".concat(x, ", ").concat(y, ", ").concat(width, ", ").concat(height);
      (_this$command22 = this.command).push.apply(_this$command22, _toConsumableArray(this.stringToCharCodeArray(str)));
      this.setNewLine();
    }
  }, {
    key: "setBarCode",
    value: function setBarCode(x, y, codeType, height, humanReadable, rotation, narrow, wide, content) {
      var _this$command23;
      var str = "BARCODE ".concat(x, ", ").concat(y, ", \"").concat(codeType, "\", ").concat(height, ", ").concat(humanReadable, ", ").concat(rotation, ", ").concat(narrow, ", ").concat(wide, ", \"").concat(content, "\"");
      (_this$command23 = this.command).push.apply(_this$command23, _toConsumableArray(this.stringToCharCodeArray(str)));
      this.setNewLine();
    }
  }, {
    key: "setBox",
    value: function setBox(x, y, xend, yend, thickness) {
      var _this$command24;
      var str = "BOX ".concat(x, ", ").concat(y, ", ").concat(xend, ", ").concat(yend, ", ").concat(thickness);
      (_this$command24 = this.command).push.apply(_this$command24, _toConsumableArray(this.stringToCharCodeArray(str)));
      this.setNewLine();
    }
  }, {
    key: "setPutBmp",
    value: function setPutBmp(x, y, fileName) {
      var _this$command25;
      var str = "PUTBMP ".concat(x, ", ").concat(y, ", \"").concat(fileName, "\"");
      (_this$command25 = this.command).push.apply(_this$command25, _toConsumableArray(this.stringToCharCodeArray(str)));
      this.setNewLine();
    }
  }, {
    key: "setPutPcx",
    value: function setPutPcx(x, y, fileName) {
      var _this$command26;
      var str = "PUTPCX ".concat(x, ", ").concat(y, ", \"").concat(fileName, "\"");
      (_this$command26 = this.command).push.apply(_this$command26, _toConsumableArray(this.stringToCharCodeArray(str)));
      this.setNewLine();
    }
  }, {
    key: "setErase",
    value: function setErase(x_start, y_start, x_width, y_height) {
      var _this$command27;
      var str = "ERASE ".concat(x_start, ", ").concat(y_start, ", ").concat(x_width, ", ").concat(y_height);
      (_this$command27 = this.command).push.apply(_this$command27, _toConsumableArray(this.stringToCharCodeArray(str)));
      this.setNewLine();
    }
  }, {
    key: "setReverse",
    value: function setReverse(x_start, y_start, x_width, y_height) {
      var _this$command28;
      var str = "REVERSE ".concat(x_start, ", ").concat(y_start, ", ").concat(x_width, ", ").concat(y_height);
      (_this$command28 = this.command).push.apply(_this$command28, _toConsumableArray(this.stringToCharCodeArray(str)));
      this.setNewLine();
    }
  }, {
    key: "setQRCode",
    value: function setQRCode(x, y, ecc, cellWidth, mode, rotation, content) {
      var _this$command29;
      var str = "QRCODE ".concat(x, ",").concat(y, ",").concat(ecc, ",").concat(cellWidth, ",").concat(mode, ",").concat(rotation, ",\"").concat(content, "\"");
      (_this$command29 = this.command).push.apply(_this$command29, _toConsumableArray(this.stringToCharCodeArray(str)));
      this.setNewLine();
    }
  }, {
    key: "setPrint",
    value: function setPrint() {
      var _this$command30;
      var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var str = "PRINT ".concat(m, ", ").concat(n);
      (_this$command30 = this.command).push.apply(_this$command30, _toConsumableArray(this.stringToCharCodeArray(str)));
      this.setNewLine();
    }
  }, {
    key: "setNewLine",
    value: function setNewLine() {
      var _this$command31;
      (_this$command31 = this.command).push.apply(_this$command31, _toConsumableArray(this.NEW_LINE));
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