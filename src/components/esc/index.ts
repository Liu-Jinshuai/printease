import { EscLibInterface } from "@/interface/EscLib";
import iconv from 'iconv-lite';;

export class EscLib implements EscLibInterface {
    command: number[];
    NEW_LINE: string;
    encoding: string;
    constructor() {
        this.command = [];
        this.NEW_LINE = '\n';
        this.encoding = "utf-8";
    }
    init(): void {
        this.command = [];
    }
    stringToEncodedBytes(str: string): number[] {
        const buffer = iconv.encode(str, this.encoding);
        return Array.from(buffer);
    }
    stringToCharCodeArray(str: string): number[] {
        return Array.from(str).map((char) => char.charCodeAt(0));
    }

    setSize(width: number = 1): void {
        let str = `GS W ${width} 1`;
        this.setCommand(str);
        this.setNewLine();
    }
    setAlign(align: number): void {
        let str = `ESC a ${align}`;
        this.setCommand(str);
        this.setNewLine();
    }
    setText(data: string): void {
        let str = `"${data}"`;
        this.setCommand(str);
        this.setNewLine();
    }
    setPrintPaperFeed(m: number = 0): void {
        let str = `ESC d ${m}`;
        this.setCommand(str);
        this.setNewLine();
    }

    setEncoding(encoding: string) {
        this.encoding = encoding;
    }
    setPrint(): void {
        let str = `LF`;
        this.setCommand(str);
        this.setNewLine();
    }
    setNewLine(): void {
        this.command.push(...this.stringToCharCodeArray(this.NEW_LINE));
    }
    setCommand(command: string | number[]) {
        if (typeof command === "string") {
            this.command.push(...this.stringToEncodedBytes(command));
        }else{
            this.command.push(...command);
        }
    }
    getCommand() {
        return this.command;
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