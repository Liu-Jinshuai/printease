declare const uni: {
    createCanvasContext: (canvasId: string, componentInstance?: object) => {
        drawImage: (imageResource: string, dx?: number, dy?: number, dWidth?: number, dHeight?: number, sx?: number, sy?: number, sWidth?: number, sHeight?: number) => void;
        draw: (bool?: Boolean, callback?: () => void) => void;
        canvasGetImageData: (obj: any) => void;
    },
    canvasGetImageData: (obj: any) => void;
    env: {
        USER_DATA_PATH: string;
    },
    writeFile: (obj: any) => void;
    createWebView: (obj: any) => void;
}

declare module 'pdfjs-dist' {
    var pdfjsLib: any;
    export = pdfjsLib;
}
