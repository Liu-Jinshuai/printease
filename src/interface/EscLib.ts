export interface EscLibInterface {
    /**
     * @description: init the command
     */
    init(): void;
    /**
     * @description: print width
     * @param width 
     */
    setSize(width: number): void;
    /**
     * @description: Set align
     * @param align 0 align left, 1 align center, 2 align right
     */
    setAlign(align: number): void;
    /**
     * @description: Set the text to be printed
     * @param data print data
     */
    setText(data: string): void;
    /**
     * @description Print out the data in the print buffer, and push the printing paper forward by one line according to the current line spacing
     */
    setPrint(): void;
    /**
     * @description Print buffer data and feed paper (inches)
     * @param m  0 ≤ n ≤ 255
     */
    setPrintPaperFeed(m: number): void;
}