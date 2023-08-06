import { ImagePixelInformationInterface } from '@/interface/ImagePixelInformation';
import { convertRgbToGrayscaleAndBinarization, convertBinaryDataToDecimalData } from '../../utils/imageProcessing';
class ImagePixelInformation {
    protected assignToPowerOfTwo(n: number) {
        let power = Math.ceil(Math.log2(n));
        return Math.pow(2, power);
    }
    uniGetImageData(canvasId: string, imageResource: string, width: number = 256, height: number = 256, callback: (pixelInformation: object) => void) { }
    getImageData(imageResource: string, width: number = 256, height: number = 256, callback: (pixelInformation: object) => void) { }
}

/**
 * @classdesc uniapp gets image pixel information
 * @classes UniappImagePixelInformation
 * @implements ImagePixelInformationInterface
 * @extends ImagePixelInformation
 * @param grayThreshold grayscale threshold（default 100）
 */
export class UniappImagePixelInformation extends ImagePixelInformation implements ImagePixelInformationInterface {
    grayThreshold: number;
    constructor(grayThreshold: number) {
        super();
        this.grayThreshold = grayThreshold;
    }
    uniGetImageData(canvasId: string, imageResource: string, width: number = 256, height: number = 256, callback: (pixelInformation: object) => void) {
        let that = this;
        const ctx = uni.createCanvasContext(canvasId)
        ctx.drawImage(imageResource, 0, 0, width, height)
        ctx.draw(false, () => {
            let maxWidth = this.assignToPowerOfTwo(Math.max(width, height))
            uni.canvasGetImageData({
                canvasId: canvasId,
                x: 0,
                y: 0,
                width: maxWidth,
                height: maxWidth,
                success(res: any) {
                    callback && callback({
                        data: convertBinaryDataToDecimalData(convertRgbToGrayscaleAndBinarization(Object.values(res.data), that.grayThreshold)),
                        width: maxWidth,
                        height: maxWidth
                    })
                },
                fail() {
                    callback && callback([])
                }
            })
        })
    }
}
/**
* @classdesc JavaScript gets image pixel information
* @implements ImagePixelInformationInterface
* @extends ImagePixelInformation
* @classes JavaScriptImagePixelInformation
* @param grayThreshold grayscale threshold（default 100）
*/
export class JavaScriptImagePixelInformation extends ImagePixelInformation implements ImagePixelInformationInterface {
    grayThreshold: number;
    constructor(grayThreshold: number) {
        super();
        this.grayThreshold = grayThreshold;
    }
    getImageData(imageResource: string, width: number = 256, height: number = 256, callback: (pixelInformation: object) => void) {
        let that = this;
        let image = new Image();
        image.crossOrigin = 'Anonymous';
        image.src = imageResource;
        image.onload = function () {
            let canvas = document.createElement('canvas');
            let ctx = canvas.getContext('2d');
            canvas.width = that.assignToPowerOfTwo(Math.max(width, height));
            canvas.height = that.assignToPowerOfTwo(Math.max(width, height));
            if (!ctx) {
                throw new Error('canvas is null')
            }
            ctx.drawImage(image, 0, 0, width, height);
            let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            callback && callback({
                data: convertBinaryDataToDecimalData(convertRgbToGrayscaleAndBinarization(Object.values(imageData.data), that.grayThreshold)),
                width: canvas.width,
                height: canvas.height
            })
        }
    }
}