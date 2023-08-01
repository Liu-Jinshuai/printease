/**
 * Get image pixel information
 */
export interface ImagePixelInformationInterface {

    /**
     * canvas context 
     */
    context: any;
    /** 
     * canvas id
     */
    canvasId: string;

    /**
     * create canvas
     * @param canvasId canvas id
     * @param componentInstance component instance
     * @returns canvas context or null
     */
    createCanvas: (canvasId: string, componentInstance: object) => void;
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
    drawImage: (imageResource: string, dx: number, dy: number, dWidth: number, dHeight: number, sx: number, sy: number, sWidth: number, sHeight: number) => Promise<any>;
    /**
     * Get image pixel information（rgba）
     * @param x The X coordinate of the upper left corner of the rectangle from which the pixel data will be retrieved
     * @param y The Y coordinate of the upper left corner of the rectangle from which the pixel data will be retrieved
     * @param width The width of the rectangle from which the pixel data will be retrieved
     * @param height The height of the rectangle from which the pixel data will be retrieved
     */
    getImageData: (x: number, y: number, width: number, height: number) => Promise<any>;
}