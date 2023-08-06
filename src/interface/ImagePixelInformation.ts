/**
 * Get image pixel information
 */
export interface ImagePixelInformationInterface {
    /**
     * @description: grayscale threshold（default 100）
     */
    grayThreshold: number;
     /**
     * @description: Get image pixel information（rgba） 
     * @param imageResource image path
     * @param width The width of the rectangle from which the pixel data will be retrieved; 
     * @param height The height of the rectangle from which the pixel data will be retrieved
     * @param callback callback function
     */
     getImageData: (imageResource: string, width: number, height: number,callback:(pixelInformation:object)=>void) => void;
    /**
     * @description: Uniapp Get image pixel information（rgba） 
     * @param canvasId canvas id
     * @param imageResource image path
     * @param width The width of the rectangle from which the pixel data will be retrieved; 
     * @param height The height of the rectangle from which the pixel data will be retrieved
     * @param callback callback function
     */
    uniGetImageData: (canvasId: string,imageResource: string, width: number, height: number,callback:(pixelInformation:object)=>void) => void;
}