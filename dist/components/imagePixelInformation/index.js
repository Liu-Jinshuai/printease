"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UniappImagePixelInformation = exports.JavaScriptImagePixelInformation = void 0;
var _imageProcessing = require("../../utils/imageProcessing");
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
  }
  _createClass(ImagePixelInformation, [{
    key: "assignToPowerOfTwo",
    value: function assignToPowerOfTwo(n) {
      var power = Math.ceil(Math.log2(n));
      return Math.pow(2, power);
    }
  }, {
    key: "uniGetImageData",
    value: function uniGetImageData(canvasId, imageResource) {
      var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 256;
      var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 256;
      var callback = arguments.length > 4 ? arguments[4] : undefined;
    }
  }, {
    key: "getImageData",
    value: function getImageData(imageResource) {
      var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 256;
      var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 256;
      var callback = arguments.length > 3 ? arguments[3] : undefined;
    }
  }]);
  return ImagePixelInformation;
}();
/**
 * @classdesc uniapp gets image pixel information
 * @classes UniappImagePixelInformation
 * @implements ImagePixelInformationInterface
 * @extends ImagePixelInformation
 * @param grayThreshold grayscale threshold（default 100）
 */
var UniappImagePixelInformation = /*#__PURE__*/function (_ImagePixelInformatio) {
  _inherits(UniappImagePixelInformation, _ImagePixelInformatio);
  var _super = _createSuper(UniappImagePixelInformation);
  function UniappImagePixelInformation(grayThreshold) {
    var _this;
    _classCallCheck(this, UniappImagePixelInformation);
    _this = _super.call(this);
    _this.grayThreshold = grayThreshold;
    return _this;
  }
  _createClass(UniappImagePixelInformation, [{
    key: "uniGetImageData",
    value: function uniGetImageData(canvasId, imageResource) {
      var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 256;
      var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 256;
      var callback = arguments.length > 4 ? arguments[4] : undefined;
      var that = this;
      var ctx = uni.createCanvasContext(canvasId);
      var maxWidth = this.assignToPowerOfTwo(Math.max(width, height));
      if (Array.isArray(imageResource)) {
        callback && callback({
          data: (0, _imageProcessing.convertBinaryDataToDecimalData)((0, _imageProcessing.convertRgbToGrayscaleAndBinarization)(imageResource, that.grayThreshold)),
          width: width,
          height: height
        });
      } else {
        ctx.drawImage(imageResource, 0, 0, width, height);
        ctx.draw(false, function () {
          uni.canvasGetImageData({
            canvasId: canvasId,
            x: 0,
            y: 0,
            width: maxWidth,
            height: maxWidth,
            success: function success(res) {
              callback && callback({
                data: (0, _imageProcessing.convertBinaryDataToDecimalData)((0, _imageProcessing.convertRgbToGrayscaleAndBinarization)(Object.values(res.data), that.grayThreshold)),
                width: maxWidth,
                height: maxWidth
              });
            },
            fail: function fail() {
              callback && callback([]);
            }
          });
        });
      }
    }
  }]);
  return UniappImagePixelInformation;
}(ImagePixelInformation);
/**
* @classdesc JavaScript gets image pixel information
* @implements ImagePixelInformationInterface
* @extends ImagePixelInformation
* @classes JavaScriptImagePixelInformation
* @param grayThreshold grayscale threshold（default 100）
*/
exports.UniappImagePixelInformation = UniappImagePixelInformation;
var JavaScriptImagePixelInformation = /*#__PURE__*/function (_ImagePixelInformatio2) {
  _inherits(JavaScriptImagePixelInformation, _ImagePixelInformatio2);
  var _super2 = _createSuper(JavaScriptImagePixelInformation);
  function JavaScriptImagePixelInformation(grayThreshold) {
    var _this2;
    _classCallCheck(this, JavaScriptImagePixelInformation);
    _this2 = _super2.call(this);
    _this2.grayThreshold = grayThreshold;
    return _this2;
  }
  _createClass(JavaScriptImagePixelInformation, [{
    key: "getImageData",
    value: function getImageData(imageResource) {
      var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 256;
      var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 256;
      var callback = arguments.length > 3 ? arguments[3] : undefined;
      var that = this;
      if (imageResource instanceof Array) {
        throw new Error('imageResource is Array');
      }
      var image = new Image();
      image.crossOrigin = 'Anonymous';
      image.src = imageResource;
      image.onload = function () {
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        canvas.width = that.assignToPowerOfTwo(Math.max(width, height));
        canvas.height = that.assignToPowerOfTwo(Math.max(width, height));
        if (!ctx) {
          throw new Error('canvas is null');
        }
        ctx.drawImage(image, 0, 0, width, height);
        var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        callback && callback({
          data: (0, _imageProcessing.convertBinaryDataToDecimalData)((0, _imageProcessing.convertRgbToGrayscaleAndBinarization)(Object.values(imageData.data), that.grayThreshold)),
          width: canvas.width,
          height: canvas.height
        });
      };
    }
  }]);
  return JavaScriptImagePixelInformation;
}(ImagePixelInformation);
exports.JavaScriptImagePixelInformation = JavaScriptImagePixelInformation;