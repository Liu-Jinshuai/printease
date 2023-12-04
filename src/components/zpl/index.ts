import { ZplLibInterface } from "@/interface/ZplLib";
import textEncoder from '../../utils/encoding'

export class ZplLib implements ZplLibInterface {
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
        this.setCommand('^XA');
        this.setNewLine();
    }
    stringToEncodedBytes(str: string): number[] {
        const buffer = textEncoder(this.encoding, str);
        return Array.from(buffer);
    }
    stringToCharCodeArray(str: string): number[] {
        return Array.from(str).map((char) => char.charCodeAt(0));
    }
    setText(x: number, y: number, data: string) {
        let str1 = `^FO${x},${y}`;
        let str2 = `^FD${data}^FS`;
        this.setCommand(str1);
        this.setNewLine();
        this.setCommand(str2);
        this.setNewLine();
    }
    setBarCode(x: number, y: number, width: number, height: number, data: string, o: string, e: string, f: string, g: string) {
        let str1 = `^FO${x},${y}`;
        let str2 = `^BY${width}`;
        let str3 = `^BC${o || 'N'},${height},${f || 'Y'},${g || 'N'},${e || 'N'}`;
        let str4 = `^FD${data}^FS`;
        this.setCommand(str1);
        this.setNewLine();
        this.setCommand(str2);
        this.setNewLine();
        this.setCommand(str3);
        this.setNewLine();
        this.setCommand(str4);
        this.setNewLine();
    }
    setQRCode(x: number, y: number, data: string, model: number, c: number, d: string, e: string) {
        let str1 = `^FO${x},${y}`;
        let str2 = `^BQN,${model},${c},${d || 'Q'},${e || 7}`;
        let str3 = `^FD${data}^FS`;
        this.setCommand(str1);
        this.setNewLine();
        this.setCommand(str2);
        this.setNewLine();
        this.setCommand(str3);
        this.setNewLine();
    }
    setPrint(): void {
        let str = `^XZ`;
        this.setCommand(str);
        this.setNewLine();
    }
    setNewLine(): void {
        this.command.push(...this.stringToCharCodeArray(this.NEW_LINE));
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
    getBuffer() {
        let buffer = new ArrayBuffer(this.command.length);
        let dataView = new DataView(buffer);
        for (let i = 0; i < this.command.length; i++) {
            dataView.setUint8(i, this.command[i]);
        }
        return buffer;
    }
}