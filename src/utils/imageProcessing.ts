import {
    ConvertRgbToGrayscaleAndBinarization,
    ConvertBinaryDataToDecimalData
} from '../types/ImageProcessing';

export const convertRgbToGrayscaleAndBinarization: ConvertRgbToGrayscaleAndBinarization = function (data: number[], grayThreshold=100) {
    if (data.length % 4 !== 0) {
        throw new Error("The length of the data array is not a multiple of 4");
    }
    if (grayThreshold > 255 || grayThreshold < 0) {
        throw new Error("The grayThreshold value is out of range");
    }
    // number array
    let arr: number[] = [];
    for (let i = 0; i < data.length; i++) {
        arr.push(data[i]);
    }
    let grayscaleArr: number[] = [];
    for (let i = 0; i < arr.length; i += 4) {
        if (arr[i + 3] === 0) {
            grayscaleArr.push(1);
            continue;
        }
        let gray = arr[i] * 0.299 + arr[i + 1] * 0.587 + arr[i + 2] * 0.114;
        if (gray >= grayThreshold) {
            grayscaleArr.push(1);
        } else {
            grayscaleArr.push(0);
        }
    }
    return grayscaleArr;
}

export const convertBinaryDataToDecimalData: ConvertBinaryDataToDecimalData = function (data: number[]) {
    let arr: number[] = [];
    for (let k = 0; k < data.length; k += 8) {
        let temp = data[k] * 128 + data[k + 1] * 64 + data[k + 2] * 32 + data[k + 3] * 16 + data[k + 4] * 8 + data[k + 5] * 4 +
            data[k + 6] * 2 + data[k + 7] * 1
        arr.push(temp);
    }
    return arr;
}

export const convertRgbToRgba = function (data: number[]) {
    if (data.length % 4 == 0) {
        return data;
    }
    let arr: number[] = [];
    for (let i = 0; i < data.length; i++) {
        arr.push(data[i]);
        if ((i + 1) % 3 === 0) {
            arr.push(255);
        }
    }
    return arr;
}