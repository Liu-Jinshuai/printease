import { CustomDirectiveInterface } from '@/interface/CustomDirective';
import textEncoder from '../../utils/encoding'

export class CustomDirectiveLib implements CustomDirectiveInterface {
    command: number[];
    NEW_LINE: string;
    encoding: string;
    constructor() {
        this.command = [];
        this.NEW_LINE = '\n';
        this.encoding = "utf-8";
    }
    stringToEncodedBytes(str: string): number[] {
        const buffer = textEncoder(this.encoding, str);
        return Array.from(buffer);
    }
    stringToCharCodeArray(str: string): number[] {
        return Array.from(str).map((char) => char.charCodeAt(0));
    }
    setCommand(command: string | number[]) {
        if (typeof command === "string") {
            this.command.push(...this.stringToEncodedBytes(command));
        } else {
            this.command.push(...command);
        }
    }
    setEncoding(encoding: string) {
        this.encoding = encoding;
    }
    getCommand() {
        return this.command;
    }
    setNewLine(): void {
        this.command.push(...this.stringToCharCodeArray(this.NEW_LINE));
    }
    getBuffer() {
        let buffer = new ArrayBuffer(this.command.length);
        let dataView = new DataView(buffer);
        for (let i = 0; i < this.command.length; i++) {
            dataView.setUint8(i, this.command[i]);
        }
        return buffer;
    }
}