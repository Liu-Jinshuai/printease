import { ImagePixelInformationInterface } from '@/interface/ImagePixelInformation';
class ImagePixelInformation {
    context: any;
    canvasId: string;
    constructor() {
        this.context = null;
        this.canvasId = '';
    }
    /**
    * create canvas
    * @param canvasId canvas id
    * @param componentInstance component instance
    * @returns canvas context or null
    */
    protected createCanvas(canvasId: string, componentInstance: object): void {

    }
    /**
     * draw image
     * @param imageResource image resource
     * @param dx The X-axis position of the upper left corner of the image on the target canvas
     * @param dy The Y-axis position of the upper left corner of the image on the target canvas
     * @param dWidth The width of the drawn image on the target canvas, allowing scaling of the drawn image
     * @param dHeight The height of the drawn image on the target canvas, allowing scaling of the drawn image
     * @param sx The X coordinate of the upper left corner of the source image's selection rectangle
     * @param sy The Y coordinate of the upper left corner of the source image's selection rectangle
     * @param sWidth The width of the source image's rectangular selection box
     * @param sHeight The height of the source image's rectangular selection box
     */
    protected drawImage(imageResource: string, dx: number, dy: number, dWidth: number, dHeight: number, sx: number, sy: number, sWidth: number, sHeight: number) {

    }
}

/**
 * uniapp gets image pixel information
 * @classes UniappImagePixelInformation
 * @implements ImagePixelInformationInterface
 * @extends ImagePixelInformation
 * @classdesc uniapp gets image pixel information
 */
export class UniappImagePixelInformation extends ImagePixelInformation implements ImagePixelInformationInterface {
    constructor() {
        super();
    }
    protected createCanvas(canvasId: string, componentInstance: object): void {
        if (typeof canvasId !== 'string') {
            throw new Error('canvasId must be string');
        }
        if (!componentInstance) {
            throw new Error('componentInstance must be object');
        }
        this.canvasId = canvasId;
        this.context = uni.createCanvasContext(canvasId, componentInstance)
    }
    protected drawImage(imageResource: string, dx: number = 0, dy: number = 0, dWidth: number = 200, dHeight: number = 200, sx?: number, sy?: number, sWidth?: number, sHeight?: number): Promise<any> {
        return new Promise((resolve, reject) => {
            if (typeof imageResource !== 'string') {
                throw new Error('imageResource must be string');
            }
            if (!this.context) reject('canvas context is null');
            this.context.drawImage(imageResource, dx, dy, dWidth, dHeight, sx, sy, sWidth, sHeight);
            this.context.draw(false, () => {
                resolve('success');
            });
        })
    }
    getImageData(canvasId: string, componentInstance: object, imageResource: string, width: number = 200, height: number = 200): Promise<any> {
        return new Promise(async (resolve, reject) => {
            if (!this.context) {
                reject('canvas context is null');
            }
            this.createCanvas(canvasId, componentInstance);
            await this.drawImage(imageResource, 0, 0, width, height, 0, 0, width, height);
            let widthes = Math.max(width, height);
            this.context.canvasGetImageData({
                canvasId: this.canvasId, x: 0, y: 0, width: widthes, height: widthes,
                success: (res: any) => {
                    resolve(res);
                },
                fail: (err: any) => {
                    reject(err);
                }
            })
        })
    }
}