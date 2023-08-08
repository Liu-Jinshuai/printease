export interface TsplLibInterface {
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
     * @description: string to charCode array
     * @param {string} str string data
     * @return {*} charCode array
     */
    stringToCharCodeArray: (str: string) => number[];
    /**
     * @description: string to encoded bytes
     * @param str  string data
     * @returns
     */
    stringToEncodedBytes: (str: string) => number[];
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
     * @param m Specify the number of copies to print;1≤m≤65535
     * @param n The number of sheets to be printed repeatedly per label;1≤n≤65535
     * @returns 
     */
    setPrint: (m?: number, n?: number) => void;
    /**
     * @description: cash box control pulse
     * @param m 0, 48 Pin 2 of the cash drawer socket 1, 49 Pin 5 of the cash drawer socket
     * @param t1 0≤t1≤255 Output the cash drawer open pulse set by t1 and t2 to the pin specified by m
     * @param t2 0≤t2≤255 Output the cash drawer open pulse set by t1 and t2 to the pin specified by m
     */
    setCashBox: (m: 0 | 1, t1: number, t2: number) => void;
    /**
     * @description: Set the height of the black mark and define the length of the label that is sent out after the label is printed
     * @param m Black mark height, unit (mm)
     * @param n Extra output paper length, unit (mm)
     */
    setBline: (m: number, n: number) => void;
    /**
     * @description: Control the stop position of each label in peel-off mode. When printing the next sheet, the printer will compensate the part that was pushed out more or less by pulling back. This command is only available in strip mode
     * @param m paper stop distance, unit (mm)
     */
    setOffset: (m: number) => void;
    /**
     * @description: Control print speed
     * @param m set print speed（For example: 2.0 sets the printing speed to 2.0”/sec）
     */
    setSpeed: (m: number) => void;
    /**
     * @description: Controlling Density When Printing
     * @param m 0～15 0: use the lightest printing density 15: use the darkest printing density
     */
    setDensity: (m: number) => void;
    /**
     * @description: Define the orientation of output paper and printed fonts when printing
     * @param m 0 or 1
     */
    setDirection: (m: 0 | 1) => void;
    /**
     * @description: Define the reference coordinate origin of the label
     * @param x The coordinate position in the horizontal direction, unit dot
     * @param y Coordinate position in the vertical direction, unit dot
     */
    setReference: (x: number, y: number) => void;
    /**
     * @description: Select the corresponding international character set
     * @param m 001:USA 002:French 003:Latin America 034:Spanish 039:Italian 044:United Kingdom 046:Swedish 047:Norwegian 049:German
     */
    setCountry: (m: number) => void;
    /**
     * @description: Select the corresponding international code page
     * @param m 8-bit codepage character set represents 437:United States 850:Multilingual 852:Slavic 860:Portuguese 863:Canadian/French 865:Nordic
     * Windows code page 1250:Central Europe 1252:Latin I 1253:Greek 1254:Turkish
     * Limited to 12×24 dot alphanumeric font WestEurope:WestEurope Greek:Greek Hebrew:Hebrew EastEurope:EastEurope Iran:Iran IranII:IranII Latvian:Latvian Arabic:Arabic Vietnam:Vietnam Uygur:Uygur Thai:Thai 1252:Latin I 1257:WPC1257 1251:WPC1251 866:Cyrillic 858:PC858 747:PC747 864:PC864 1001:PC1001
     */
    setCodePage: (m: number) => void;
    /**
     * @description: Pushes the label stock forward by the specified length
     * @param m 1≤n≤9999, unit dot
     */
    setFeed: (m: number) => void;
    /**
     * @description: Pulls the label back the specified length
     * @param m 1≤n≤9999, unit dot
     */
    setBackFeed: (m: number) => void;
    /**
    * @description: Pulls the label back the specified length
    * @param m 1≤n≤9999, unit dot
    */
    setBackup: (m: number) => void;
    /**
     * @description: Control the printer to feed a label paper
     */
    setFormFeed: () => void;
    /**
     * @description: When using label paper with gaps or black marks, if it is uncertain whether the first label paper is in the correct printing position, this command can push the label paper forward to the beginning of the next label paper to start printing. Label size and gap need to be set before this command;Paper height greater than or equal to 30 mm
     */
    setHome: () => void;
    /**
     * @description: This command is used to control the frequency of the buzzer, and 10 levels of sound can be set, and the length of each level of sound is controlled by the second parameter
     * @param m Scale: 0-9
     * @param n Interval time: 1-4095
     */
    setSound: (m: number, n: number) => void;
    /**
     * @description: When setting the printer to feed paper, if the vertical distance cannot be detected after the set length, the printer will generate an error and stop paper feeding.
     * @param m unit mm
     */
    setLimitFeed: (m: number) => void;
    /**
     * @description: draw a line on the label
     * @param x The X coordinate of the upper left corner of the line, in dot
     * @param y The Y coordinate of the upper left corner of the line, in dot
     * @param width Line width, unit dot
     * @param height Line height, unit dot
     */
    setBar: (x: number, y: number, width: number, height: number) => void;
    /**
     * @description: Draw 1D barcode
     * @param x The starting point of the horizontal coordinates of the upper left corner, expressed in dots
     * @param y The starting point of the vertical coordinate of the upper left corner, expressed in dots
     * @param codeType Barcode type
     * @param height Barcode height, expressed in dots
     * @param humanReadable 0 means invisible to human eyes, 1 means visible to human eyes
     * @param rotation Barcode rotation angle, clockwise
     * @param narrow Narrow bar width, expressed in dots
     * @param wide Width bar width, expressed in dots
     * @param content Barcode content
     * 
     * @example setBarCode(10, 10, '39', 100, 1, 0, 2, 4, '123456789')
     */
    setBarCode: (x: number, y: number, codeType: string, height: number, humanReadable: 0 | 1, rotation: number, narrow: number, wide: number, content: string) => void;
    /**
     * @description: Draw a rectangular box on the volume label
     * @param x The X coordinate of the upper left corner of the box, in dot
     * @param y The Y coordinate of the upper left corner of the box, in dot
     * @param xend The X coordinate of the lower right corner of the box, in dot
     * @param yend The Y coordinate of the lower right corner of the box, in dot
     * @param thickness Box line width, unit dot
     */
    setBox: (x: number, y: number, xend: number, yend: number, thickness: number) => void;
    /**
     * @description: Print monochrome BMP image files
     * @param x The coordinates of the starting point in the horizontal direction, expressed in dots
     * @param y The coordinates of the starting point in the vertical direction, expressed in dots
     * @param fileName The name of the file to be printed (need to be downloaded in the printer cache)
     */
    setPutBmp: (x: number, y: number, fileName: string) => void;
    /**
     * @description: Print monochrome PCX format picture files
     * @param x The coordinates of the starting point in the horizontal direction, expressed in dots
     * @param y The coordinates of the starting point in the vertical direction, expressed in dots
     * @param fileName The name of the file to be printed (need to be downloaded in the printer cache)
     */
    setPutPcx: (x: number, y: number, fileName: string) => void;
    /**
     * @description: Clear data in some areas of the image buffer
     * @param x_start The X coordinate of the upper left corner of the cleared area, unit dot
     * @param y_start The Y coordinate of the upper left corner of the cleared area, unit dot
     * @param x_width Clear area width, unit dot
     * @param y_height Clear area height, unit dot
     */
    setErase: (x_start: number, y_start: number, x_width: number, y_height: number) => void;
    /**
     * @description: Print the specified area in reverse
     * @param x_start The X coordinate of the upper left corner of the reverse area, unit dot
     * @param y_start The Y coordinate of the upper left corner of the reverse area, unit dot
     * @param x_width Reverse area width, unit dot
     * @param y_height Reverse area height, unit dot
     */
    setReverse: (x_start: number, y_start: number, x_width: number, y_height: number) => void;
    /**
     * @description: This command is used to print the QR code
     * @param x The coordinates of the starting point in the horizontal direction of the QR code
     * @param y The coordinates of the starting point in the vertical direction of the QR code
     * @param ecc Select QRCODE Error Correction Level:L 7% M 15% Q 25% H 30%
     * @param cellWidth QR code width 1-10
     * @param mode manual/automatic coding:A Auto M Manual
     * @param rotation Rotation angle (clockwise):0 0 degrees 90 90 degrees 180 180 degrees 270 270 degrees
     * @param content QR code content
     * @example setQRCode(10, 10, 'L', 5, 'A', 0, '123456789')
     */
    setQRCode: (x: number, y: number, ecc: string, cellWidth: number, mode: string, rotation: number, content: string) => void;
    /**
     * @description: Set encoding type
     * @param encoding encoding type
     * @returns 
     */
    setEncoding: (encoding: string) => void;
    /**
     * @description: Instruction wrapping, called by default, if not necessary, do not need to call
     */
    setNewLine: () => void;
    /**
     * @description: Set commands（If you want to set a custom directive, you can use the command）
     * @param command command
     */
    setCommand: (command: number[]|string) => void;
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