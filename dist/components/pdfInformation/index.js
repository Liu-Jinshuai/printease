"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PdfInformation = void 0;
var pdfjsLib = _interopRequireWildcard(require("pdfjs-dist"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var PdfInformation = /*#__PURE__*/function () {
  function PdfInformation() {
    _classCallCheck(this, PdfInformation);
    _defineProperty(this, "pageCount", 0);
    _defineProperty(this, "textContent", {});
    _defineProperty(this, "imageContent", [{}]);
  }
  _createClass(PdfInformation, [{
    key: "init",
    value: function init() {
      this.pageCount = 0;
      this.textContent = {};
      this.imageContent = [];
      this.pdfjsLib = pdfjsLib;
    }
  }, {
    key: "loadPdfFile",
    value: function loadPdfFile(file) {
      var _this = this;
      return new Promise(function (resolve) {
        var filees = _this.pdfjsLib.getDocument(file);
        filees.promise.then(function (pdf) {
          _this.pdfInstance = pdf;
          resolve(pdf);
        });
      });
    }
  }, {
    key: "getPdfText",
    value: function getPdfText(page) {
      var _this2 = this;
      this.textContent = {};
      return new Promise(function (resolve) {
        _this2.pdfInstance.getPage(page).then(function (page) {
          page.getTextContent().then(function (textContent) {
            _this2.textContent = textContent;
            resolve(textContent);
          });
        });
      });
    }
  }, {
    key: "getPdfPageCount",
    value: function getPdfPageCount() {
      var _this3 = this;
      return new Promise(function (resolve) {
        _this3.pdfInstance.getMetadata().then(function (metadata) {
          _this3.pageCount = metadata.info.PageCount;
          resolve(_this3.pageCount);
        });
      });
    }
  }, {
    key: "getPdfImage",
    value: function getPdfImage(pageIndex) {
      var _this4 = this;
      var that = this;
      this.imageContent = [];
      return new Promise(function (resolve) {
        _this4.pdfInstance.getPage(pageIndex).then(function (page) {
          page.getOperatorList().then(function (opList) {
            var transformMatrix = null;
            for (var i = 0; i < opList.fnArray.length; i++) {
              var fnId = opList.fnArray[i];
              if (fnId === pdfjsLib.OPS.transform) {
                transformMatrix = opList.argsArray[i];
              }
              if (opList.fnArray[i] == pdfjsLib.OPS.paintImageXObject) {
                var imgIndex = opList.argsArray[i][0];
                var img = page.objs.get(imgIndex);
                that.imageContent.push({
                  transformMatrix: transformMatrix,
                  data: img
                });
                resolve(that.imageContent);
              }
            }
          });
        });
      });
    }
  }]);
  return PdfInformation;
}();
exports.PdfInformation = PdfInformation;