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
     * @description: Get image pixel information（rgba） 
     * @param canvasId canvas id
     * @param componentInstance The custom component instance this means to search for <canvas/> with canvas-id under this custom component, if omitted, it will not be searched in any custom component
     * @param imageResource image absolute path
     * @param width The width of the rectangle from which the pixel data will be retrieved
     * @param height The height of the rectangle from which the pixel data will be retrieved
     */
    getImageData: (canvasId: string,componentInstance: object,imageResource: string, width: number, height: number) => Promise<any>;
}