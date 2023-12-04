"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UniappWebview = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var UniappWebview = /*#__PURE__*/function () {
  function UniappWebview() {
    _classCallCheck(this, UniappWebview);
    _defineProperty(this, "html", "\n    <!DOCTYPE html>\n    <html>\n        <head>\n            <meta charset=\"utf-8\" />\n            <meta name=\"viewport\"\n                content=\"width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no\" />\n            <title>\u7F51\u7EDC\u7F51\u9875</title>\n            <style type=\"text/css\">   \n                .btn {\n                    display: block; \n                    margin: 20px auto;\n                    padding: 5px;\n                    background-color: #007aff;\n                    border: 0;\n                    color: #ffffff;\n                    height: 40px;\n                    width: 200px;\n                }\n    \n                .btn-red {\n                    background-color: #dd524d;\n                }\n    \n                .btn-yellow {\n                    background-color: #f0ad4e;\n                }\n    \n                .desc {\n                    padding: 10px;\n                    color: #999999;\n                }\n    \n                .post-message-section {  \n                    visibility: hidden;\n                }\n            </style>\n        </head>\n        <body>\n            <h1>pdf.js</h1>\n            <!-- uni \u7684 SDK -->\n            <!-- \u9700\u8981\u628A uni.webview.1.5.4.js \u4E0B\u8F7D\u5230\u81EA\u5DF1\u7684\u670D\u52A1\u5668 -->\n            <!-- pdf.js -->\n            <script src=\"https://unpkg.com/pdfjs-dist@2.10.377/build/pdf.js\"></script>\n    \n            <!-- pdf.worker.js -->\n            <script src=\"https://unpkg.com/pdfjs-dist@2.10.377/build/pdf.worker.min.js\"></script>\n    \n            <script type=\"text/javascript\" src=\"https://unpkg.com/@dcloudio/uni-webview-js@0.0.3/index.js\"></script>\n            <script type=\"text/javascript\">\n                let url = plus.storage.getItem('printease_url')\n                plus.storage.removeItem('printease_url')\n                var loadingTask = pdfjsLib.getDocument(url);\n                loadingTask.promise.then(function(pdf) {\n                    let imgObj = []\n    \n                    pdf.getPage(1).then(function(page) {  \n                          \n                            page.getOperatorList().then(function(opList) {\n    \n                                let imgPromises = []\n                               \n                                for (let i = 0; i < opList.fnArray.length; i++) {\n\n                                    // \u67E5\u627E\u56FE\u50CF\n                                    let transformMatrix = null;\n\n                                    let fnId = opList.fnArray[i]\n                                    if (fnId === pdfjsLib.OPS.transform) { // transform \u64CD\u4F5C\n                                        transformMatrix = opList.argsArray[i];\n                                    }\n    \n                                    if (opList.fnArray[i] == pdfjsLib.OPS.paintImageXObject) {\n                                        let imgIndex = opList.argsArray[i][0]\n                                        let img = page.objs.get(imgIndex)\n                                        let rgbaData;\n                                        const numPixels = img.width * img.height;\n                                        let len = Object.keys(img.data).length\n                                        \n                                        if (len === numPixels * 3) { // RGB\n                                            rgbaData = []; \n                                            for (let i = 0, j = 0; i < len; i += 3, j += 4) {\n                                                rgbaData[j] = img.data[i];\n                                                rgbaData[j + 1] = img.data[i + 1];\n                                                rgbaData[j + 2] = img.data[i + 2];\n                                                rgbaData[j + 3] = 255;\n                                            }\n                                        } else if (len === numPixels * 4) { // RGBA\n                                            rgbaData = Object.values(img.data); // \u6570\u636E\u5DF2\u7ECF\u662F RGBA \u683C\u5F0F\uFF0C\u65E0\u9700\u8F6C\u6362\n                                        } else {\n                                            console.error(\"Unknown image data format\");\n                                            return;\n                                        }\n                                        imgObj.push({\n                                            width: img.width,\n                                            height: img.height, \n                                            data: rgbaData,\n                                            transformMatrix:transformMatrix\n                                        }) \n                                    }\n                                   \n                                    \n                                } \n                                \n                                page.getTextContent().then(function(textContent) {\n                                    console.log('textContent', textContent);\n                                    var textItems = textContent.items;\n                                    var finalString = \"\";\n                                    for (var i = 0; i < textItems.length; i++) {\n                                        var item = textItems[i];\n                                        finalString += item.str + \" \";\n                                    } \n                                    console.log('finalString',finalString)\n                                    plus.storage.setItem('printease',JSON.stringify({\n                                        imgItems:imgObj,\n                                        textItems:textItems\n                                    }))\n                                }); \n                               \n                                \n                            }); \n                        })\n                });\n            </script> \n        </body>\n    </html>\n    ");
  }
  _createClass(UniappWebview, [{
    key: "init",
    value: function init() {
      this.webview = null;
    }
  }, {
    key: "setHtml",
    value: function setHtml(html) {
      if (html) {
        this.html = html;
      }
    }
  }, {
    key: "createWebView",
    value: function createWebView() {
      this.webview = plus.webview.create('');
      this.webview.loadData(this.html, 'text/html', 'utf-8');
    }
  }, {
    key: "install",
    value: function install(file, callback) {
      this.createWebView();
      if (typeof file === 'string') {
        plus.storage.setItem('printease_url', file);
      }
      var that = this;
      var intervalId = setInterval(function () {
        var myValue = plus.storage.getItem('printease');
        if (myValue) {
          callback(myValue);
          clearInterval(intervalId);
          plus.storage.removeItem('printease');
          that.webview.close();
        }
      }, 100);
      setTimeout(function () {
        clearInterval(intervalId);
      }, 10000);
    }
  }]);
  return UniappWebview;
}();
exports.UniappWebview = UniappWebview;