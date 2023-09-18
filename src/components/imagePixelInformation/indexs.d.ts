declare const uni: {
    createCanvasContext: (canvasId: string, componentInstance?: object) => {
        drawImage: (imageResource: string, dx?: number, dy?: number, dWidth?: number, dHeight?: number, sx?: number, sy?: number, sWidth?: number, sHeight?: number) => void;
        draw: (bool?: Boolean, callback?: () => void) => void;
        canvasGetImageData: (obj: any) => void;
        putImageData: (obj: any, x: any, y: any) => void;
    },
    canvasGetImageData: (obj: any) => void;
    env: {
        USER_DATA_PATH: string;
    },
    writeFile: (obj: any) => void;
    createWebView: (obj: any) => void;
    canvasPutImageData: (obj: any) => void;

}

declare const plus: {
    webview: {
        create: (url: string) => void;
    },
    storage: {
        setItem: (key: string, value: string) => void;
        getItem: (key: string) => string;
        removeItem: (key: string) => void;
    }
}

declare module 'pdfjs-dist' {
    var pdfjsLib: any;
    export = pdfjsLib;
}
