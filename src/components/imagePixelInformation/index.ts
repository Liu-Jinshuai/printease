import { ImagePixelInformationInterface } from '@/interface/ImagePixelInformation';
class ImagePixelInformation implements ImagePixelInformationInterface {
    context: any;
    canvasId: string;
    constructor() {
        this.context = null;
        this.canvasId = '';
    }
    createCanvas(canvasId: string, componentInstance: object) { }
    drawImage(imageResource: string, dx: number, dy: number, dWidth: number, dHeight: number, sx: number, sy: number, sWidth: number, sHeight: number): Promise<any> { return new Promise((resolve, reject) => { }) }
    getImageData(x: number, y: number, width: number, height: number): Promise<any> { return new Promise((resolve, reject) => { }) }
}

/**
 * uniapp gets image pixel information
 * @classes UniappImagePixelInformation
 * @implements ImagePixelInformationInterface
 * @extends ImagePixelInformation
 * @classdesc uniapp gets image pixel information
 */
export class UniappImagePixelInformation extends ImagePixelInformation {
    constructor() {
        super();
    }
    createCanvas(canvasId: string, componentInstance: object): void {
        if (typeof canvasId !== 'string') {
            throw new Error('canvasId must be string');
        }
        this.canvasId = canvasId;
        this.context = uni.createCanvasContext(canvasId, componentInstance)
    }
    drawImage(imageResource: string, dx: number, dy: number, dWidth: number, dHeight: number, sx: number, sy: number, sWidth: number, sHeight: number): Promise<any> {
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
    getImageData(x: number, y: number, width: number, height: number): Promise<any> {
        return new Promise((resolve, reject) => {
            if (!this.context) {
                reject('canvas context is null');
            }
            this.context.canvasGetImageData({
                canvasId: this.canvasId,
                x,
                y,
                width,
                height,
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
