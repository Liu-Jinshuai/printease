export interface TsplLibInterface {
    /**
     * @description: init the command
     * @param {*}
     * @return {*}
     */
    init: () => void;
    /**
     * @description: string to charCode array
     * @param {string} str string data
     * @return {*} charCode array
     */
    stringToCharCodeArray: (str: string) => number[];
    /**
     * @description: Set the width and length of the label paper
     * @param width Width of label paper (without backing paper)
     * @param height Height of label paper (without backing paper)
     * @returns 
     */
    setSize: (width: number, height: number) => void;
    /**
     * @description: Set the vertical distance between two label papers
     * @param m Vertical distance between two labels
     * @param n vertical spacing offset
     * @returns 
     */
    setGap: (m: number, n: number) => void;
    /**
     * @description: Clear the data of the image buffer
     * @returns 
     */
    setCls: () => void;
    /**
     * @description: Draw a bitmap (non-BMP format image file)
     * @param x The X coordinate of the upper left corner of the bitmap
     * @param y The Y coordinate of the upper left corner of the bitmap
     * @param width Width of bitmap, unit byte
     * @param height The height of the bitmap, in dot
     * @param mode bitmap drawing mode 0 OVERWRITE 1 OR 2 XOR
     * @param bitmap Image pixel value array
     * @returns 
     */
    setBitmap: (x: number, y: number, width: number, height: number, mode: number, bitmap: number[]) => void;
    /**
     * @description: string msg
     * @param x The coordinates of the starting point of the text in the X direction
     * @param y The coordinates of the starting point of the text in the Y direction
     * @param font 1 8×12 dot Alphanumeric Font 2 12×20 dot Alphanumeric Font 3 16×24 dot Alphanumeric Font 4 24×32 dot Alphanumeric Font 5 32×48 dot Alphanumeric Font 6 14×19 dot Alphanumeric Font OCR- B 7 21×27 dot Alphanumeric font OCR-B 8 14×25 dot Alphanumeric font OCR-A 9 9×17 dot Alphanumeric font 10 12×24 dot Alphanumeric font TST24.BF2 Traditional Chinese 24×24Font (big five code) TSS24.BF2 Simplified Chinese 24×24Font (GB code) K Korean 24×24Font (KS code) rotation Text rotation angle (clockwise) 0 0 degrees 90 90 degrees 180 180 degrees 270 270 degrees
     * @param rotation Text rotation angle (clockwise)
     * @param x_multiplication X direction magnification 1-10
     * @param y_multiplication Y direction magnification 1-10
     * @param text 
     * @returns 
     */
    setText: (x: number, y: number, font: string, rotation: number, x_multiplication: number, y_multiplication: number, text: string) => void;
    /**
     * @description: execute print
     * @param m print group
     * @param n Number of print rounds
     * @returns 
     */
    setPrint: (m: number, n?: number) => void;
    /**
     * @description: Instruction wrapping, called by default, if not necessary, do not need to call
     */
    setNewLine: () => void;
    /**
     * @description: get print command
     * @returns return print command
     */
    getCommand: () => number[];
    /**
     * @description: Get print command (Buffer)
     * @returns Returns the print command (Buffer)
     */
    getBuffer: () => ArrayBuffer;
}