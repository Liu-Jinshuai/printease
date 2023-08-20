export interface ZplLibInterface {
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
     * @description: execute print
     */
    setPrint: () => void;
    /**
     * @description: set text
     * @param x x start position
     * @param y y start position
     * @param data the text to print
     */
    setText: (x: number, y: number, data: string) => void;
    /**
     * @description Print the barcode.
     * @param x x start position
     * @param y y start position
     * @param width width of the bar code(in dots)
     * @param height height of the bar code(in dots)
     * @param data the text to print
     * @param o (orientation) N = normal R = rotated 90 degrees (clockwise) I = inverted 180 degrees B = read from bottom up, 270 degrees
     * @param e (print check digit) N = no Y = yes
     * @param f (print interpretation line) N = no Y = yes
     * @param g (print interpretation line above code) N = no Y = yes
     */
    setBarCode: (x: number, y: number, width: number, height: number, data: string, o: string, e: string, f: string, g: string) => void;
    /**
     * @description: print QR code
     * @param x  x start position
     * @param y  y start position
     * @param data  the text to print
     * @param model Values: 1 (original) and 2 (enhanced – recommended) Default: 2
     * @param c Values:1 to 10 Default:1 on 150 dpi printers ;2 on 200 dpi printers ;3 on 300 dpi printers ;6 on 600 dpi printers
     * @param d Values:
H = ultra-high reliability level
Q = high reliability level
M = standard level
L = high density level
Default: Q = if emptyM = invalid values
     * @param e Values: 0 - 7 Default: 7
     * @returns 
     */
    setQRCode: (x: number, y: number, data: string, model: number, c: number, d: string, e: string) => void;
    /**
     * @description: Set encoding type
     * @param encoding encoding type
     * @returns 
     */
    setEncoding: (encoding: string) => void;
}