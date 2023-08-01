"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ImagePixelInformation = /*#__PURE__*/function () {
  function ImagePixelInformation() {
    _classCallCheck(this, ImagePixelInformation);
    this.context = null;
    this.canvasId = '';
  }
  _createClass(ImagePixelInformation, [{
    key: "createCanvas",
    value: function createCanvas(canvasId, componentInstance) {}
  }, {
    key: "drawImage",
    value: function drawImage(imageResource, dx, dy, dWidth, dHeight, sx, sy, sWidth, sHeight) {
      return new Promise(function (resolve, reject) {});
    }
  }, {
    key: "getImageData",
    value: function getImageData(x, y, width, height) {
      return new Promise(function (resolve, reject) {});
    }
  }]);
  return ImagePixelInformation;
}();
/**
 * uniapp gets image pixel information
 * @extends ImagePixelInformation
 * @implements ImagePixelInformationInterface
 * @class
 * @classdesc uniapp gets image pixel information
 * @example
 */
var UniappImagePixelInformation = /*#__PURE__*/function (_ImagePixelInformatio) {
  _inherits(UniappImagePixelInformation, _ImagePixelInformatio);
  var _super = _createSuper(UniappImagePixelInformation);
  function UniappImagePixelInformation() {
    _classCallCheck(this, UniappImagePixelInformation);
    return _super.call(this);
  }
  _createClass(UniappImagePixelInformation, [{
    key: "createCanvas",
    value: function createCanvas(canvasId, componentInstance) {
      if (typeof canvasId !== 'string') {
        throw new Error('canvasId must be string');
      }
      this.canvasId = canvasId;
      this.context = uni.createCanvasContext(canvasId, componentInstance);
    }
  }, {
    key: "drawImage",
    value: function drawImage(imageResource, dx, dy, dWidth, dHeight, sx, sy, sWidth, sHeight) {
      var _this = this;
      return new Promise(function (resolve, reject) {
        if (typeof imageResource !== 'string') {
          throw new Error('imageResource must be string');
        }
        if (!_this.context) reject('canvas context is null');
        _this.context.drawImage(imageResource, dx, dy, dWidth, dHeight, sx, sy, sWidth, sHeight);
        _this.context.draw(false, function () {
          resolve('success');
        });
      });
    }
  }, {
    key: "getImageData",
    value: function getImageData(x, y, width, height) {
      var _this2 = this;
      return new Promise(function (resolve, reject) {
        if (!_this2.context) {
          reject('canvas context is null');
        }
        _this2.context.canvasGetImageData({
          canvasId: _this2.canvasId,
          x: x,
          y: y,
          width: width,
          height: height,
          success: function success(res) {
            resolve(res);
          },
          fail: function fail(err) {
            reject(err);
          }
        });
      });
    }
  }]);
  return UniappImagePixelInformation;
}(ImagePixelInformation);
var _default = UniappImagePixelInformation;
exports["default"] = _default;