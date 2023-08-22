export interface CustomDirectiveInterface {
    command: number[];
    encoding: string;
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
    /**
     * @description: set custom command
     * @param command set print command
     * @returns 
     */
    setCommand: (command: number[] | string) => void;
    /**
     * @description: Set encoding type
     * @param encoding encoding type
     * @returns 
     */
    setEncoding: (encoding: string) => void;
    /**
     * @description: new line
     * @returns 
     */
    setNewLine: () => void;
}