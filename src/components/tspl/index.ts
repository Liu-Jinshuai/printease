import { TsplLib } from "@/interface/TsplLib";

class MyTsplLib implements TsplLib {
    command: number[];
    NEW_LINE: number[];
    constructor() {
        this.command = [];
        this.NEW_LINE = [0xD, 0xA];
    }
    init(): void {
        this.command = [];
    }
    stringToCharCodeArray(str: string): number[] {
        return Array.from(str).map((char) => char.charCodeAt(0));
    }
    setSize(width: number, height: number) {
        let str = `SIZE ${width} mm, ${height} mm`;
        this.command.push(...this.stringToCharCodeArray(str))
        this.setNewLine();
    }
    setGap(m: number, n: number) {
        let str = `GAP ${m} mm, ${n} mm`;
        this.command.push(...this.stringToCharCodeArray(str))
        this.setNewLine();
    }
    setCls(): void {
        let str = `CLS`;
        this.command.push(...this.stringToCharCodeArray(str))
        this.setNewLine();
    }
    setBitmap(x: number, y: number, width: number, height: number, mode: number, bitmap: number[]) {
        let str = `BITMAP ${x}, ${y}, ${width / 8}, ${height}, ${mode},`;
        this.command.push(...this.stringToCharCodeArray(str));
        for (let i = 0; i < bitmap.length; i++) {
            this.command.push(bitmap[i]);
        }
        this.setNewLine();
    }
    setText(x: number, y: number, font: string, rotation: number, x_multiplication: number, y_multiplication: number, text: string) {
        let str = `TEXT ${x}, ${y}, "${font}", ${rotation}, ${x_multiplication}, ${y_multiplication}, "${text}"`;
        this.command.push(...this.stringToCharCodeArray(str))
        this.setNewLine();
    }
    setPrint(m: number, n: number = 1): void {
        let str = `PRINT ${m}, ${n}`;
        this.command.push(...this.stringToCharCodeArray(str));
        this.setNewLine();
    }
    setNewLine(): void {
        this.command.push(...this.NEW_LINE);
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
export default MyTsplLib;