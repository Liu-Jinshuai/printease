"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertRgbToRgba = exports.convertRgbToGrayscaleAndBinarization = exports.convertBinaryDataToDecimalData = void 0;
var convertRgbToGrayscaleAndBinarization = function convertRgbToGrayscaleAndBinarization(data) {
  var grayThreshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  if (data.length % 4 !== 0) {
    throw new Error("The length of the data array is not a multiple of 4");
  }
  if (grayThreshold > 255 || grayThreshold < 0) {
    throw new Error("The grayThreshold value is out of range");
  }
  // number array
  var arr = [];
  for (var i = 0; i < data.length; i++) {
    arr.push(data[i]);
  }
  var grayscaleArr = [];
  for (var _i = 0; _i < arr.length; _i += 4) {
    if (arr[_i + 3] === 0) {
      grayscaleArr.push(1);
      continue;
    }
    var gray = arr[_i] * 0.299 + arr[_i + 1] * 0.587 + arr[_i + 2] * 0.114;
    if (gray >= grayThreshold) {
      grayscaleArr.push(1);
    } else {
      grayscaleArr.push(0);
    }
  }
  return grayscaleArr;
};
exports.convertRgbToGrayscaleAndBinarization = convertRgbToGrayscaleAndBinarization;
var convertBinaryDataToDecimalData = function convertBinaryDataToDecimalData(data) {
  var arr = [];
  for (var k = 0; k < data.length; k += 8) {
    var temp = data[k] * 128 + data[k + 1] * 64 + data[k + 2] * 32 + data[k + 3] * 16 + data[k + 4] * 8 + data[k + 5] * 4 + data[k + 6] * 2 + data[k + 7] * 1;
    arr.push(temp);
  }
  return arr;
};
exports.convertBinaryDataToDecimalData = convertBinaryDataToDecimalData;
var convertRgbToRgba = function convertRgbToRgba(data) {
  if (data.length % 4 == 0) {
    return data;
  }
  var arr = [];
  for (var i = 0; i < data.length; i++) {
    arr.push(data[i]);
    if ((i + 1) % 3 === 0) {
      arr.push(255);
    }
  }
  return arr;
};
exports.convertRgbToRgba = convertRgbToRgba;