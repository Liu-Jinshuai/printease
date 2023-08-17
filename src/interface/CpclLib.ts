export interface CpclLibInterface {
    /**
     * @description: Encoding method, default utf-8
     */
    encoding: string;
    /**
     * @description: command array
     */
    command: number[];
    /**
    * @description: init the command
    * @param {*}
    * @return {*}
    */
    init: () => void;
    /**
     * @description: Label Initialization Directive
     * @param {number} offset label horizontal offset (default 0)
     * @param {number} landscapeDPI Landscape DPI (default 200)
     * @param {number} portraitDPI Portrait DPI (default 200)
     * @param {number} height label height (default 40)
     */
    labelInit: (offset: number, landscapeDPI: number, portraitDPI: number, height: number) => void;
    /**
     * @description: execute print
     */
    setPrint: () => void;
    /**
     * @description: set text
     * @param command TEXT (or T) Prints text in landscape orientation. VTEXT (or VT) Rotates 90 degrees counterclockwise to print text in portrait orientation. TEXT90 (or T90) (Same as VTEXT.) TEXT180 (or T180) Rotate 80 degrees counterclockwise, reverse the printed text. TEXT270 (or T270) Rotate counterclockwise 270
     * @param font 0 12*24 24*24 Simplified Chinese GB18030 1 9*17 24*24 Simplified Chinese GB18030 2 12*24 24*24 Simplified Chinese GB18030 3 10*20 20*20 Simplified Chinese GBK 4 16*32 32*32 Simplified Chinese GBK 5 9*17 24*24 Simplified Chinese GB18030 6 12*24 7 12*24 24*24 Simplified Chinese GB18030 8 12*24 24*24 Simplified Chinese GB18030 10 24*48 48*48 Simplified Chinese GBK 11 8*16 24* 24 Simplified Chinese GB18030 13 12*24 24*24 Traditional Chinese BIG5 20 8*16 16*16 Simplified Chinese GB18030 24 12*24 24*24 Simplified Chinese GB18030 41 8*12 42 12*20 43 16*24 44 24*32 45 32*48 46 14*19 47 21*27 48 14*25 49 28*56 55 8*16 16*16 Simplified Chinese GB18030
     * @param size any number
     * @param x Horizontal starting position
     * @param y vertical start position
     * @param data the text to print
     * @returns 
     */
    setText: (command: string, font: string, size: number, x: number, y: number, data: string) => void;
}