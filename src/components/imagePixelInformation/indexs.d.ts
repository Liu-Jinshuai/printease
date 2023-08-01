declare const uni: {
    createCanvasContext: (canvasId: string, componentInstance: object) => {
        drawImage: (imageResource: string, dx: number, dy: number, dWidth: number, dHeight: number, sx: number, sy: number, sWidth: number, sHeight: number) => void;
        draw: (bool?: Boolean, callback?: () => {}) => void;
        canvasGetImageData: (obj: any) => void;
    }
} 