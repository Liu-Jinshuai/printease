import { CpclLibInterface } from "@/interface/CpclLib";
import iconv from 'iconv-lite';

/**
 * @description: TSPL instruction library interface document
 * @param {*}
 * @return {*}
 * @implements TsplLibInterface
 */
export class CpclLib implements CpclLibInterface {
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

    labelInit(offset: number = 0, landscapeDPI: number = 200, portraitDPI: number = 200, height: number = 40) {
        let str = `! ${offset} ${landscapeDPI} ${portraitDPI} ${height} 1`;
        this.setCommand(str);
        this.setNewLine();
    }
    setText(command: string, font: string, size: number, x: number, y: number, data: string) {
        let str = `${command} ${font} ${size} ${x} ${y} ${data}`;
        this.setCommand(str);
        this.setNewLine();
    }

    setPrint(): void {
        let str = `PRINT`;
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