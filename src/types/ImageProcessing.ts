/**
 * Convert image to grayscale and binarization
 * @param data rgba data array
 * @param grayThreshold The size of this value determines the gray value, the default is 100, the maximum is 255
 * @returns Gray scale binarized data array
 */
export type ConvertRgbToGrayscaleAndBinarization = (data: number[], grayThreshold?: number) => number[];

/**
 * Convert Binary Data Array to Decimal Data Array
 * @param data binarized data array
 * @returns array of decimal data
 */
export type ConvertBinaryDataToDecimalData = (data: number[]) => number[];

/**
 * convert rgb to rgba
 * @param data rgb data array
 * @returns rgba data array
 */
export type ConvertRgbToRgba = (data: number[]) => number[];

