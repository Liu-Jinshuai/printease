"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _encoding = _interopRequireDefault(require("./encoding"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function encoder() {
  var encode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'utf-8';
  var content = arguments.length > 1 ? arguments[1] : undefined;
  var code = new _encoding["default"].textEncoder(encode, {
    NONSTANDARD_allowLegacyEncoding: true
  });
  return code.encode(content);
}
var _default = encoder;
exports["default"] = _default;