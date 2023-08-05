import { TsplLibInterface } from "@/interface/TsplLib";

/**
 * @description: TSPL instruction library interface document
 * @param {*}
 * @return {*}
 * @implements TsplLibInterface
 */
export class TsplLib implements TsplLibInterface {
    command: number[];
    NEW_LINE: number[];
    constructor() {
        this.command = [];
        this.NEW_LINE = [10]
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
    setCashBox(m: 0 | 1, t1: number, t2: number) {
        let str = `ESC p ${m}, ${t1}, ${t2}`;
        this.command.push(...this.stringToCharCodeArray(str))
        this.setNewLine();
    }
    setBline(m: number, n: number) {
        let str = `BLINE ${m} mm, ${n} mm`;
        this.command.push(...this.stringToCharCodeArray(str))
        this.setNewLine();
    }
    setOffset(m: number) {
        let str = `OFFSET ${m} mm`;
        this.command.push(...this.stringToCharCodeArray(str))
        this.setNewLine();
    }
    setSpeed(m: number) {
        let str = `SPEED ${m}`;
        this.command.push(...this.stringToCharCodeArray(str))
        this.setNewLine();
    }
    setDensity(m: number) {
        let str = `DENSITY ${m}`;
        this.command.push(...this.stringToCharCodeArray(str))
        this.setNewLine();
    }
    setDirection(m: number) {
        let str = `DIRECTION ${m}`;
        this.command.push(...this.stringToCharCodeArray(str))
        this.setNewLine();
    }
    setReference(x: number, y: number) {
        let str = `REFERENCE ${x}, ${y}`;
        this.command.push(...this.stringToCharCodeArray(str))
        this.setNewLine();
    }
    setCountry(m: number) {
        let str = `COUNTRY ${m}`;
        this.command.push(...this.stringToCharCodeArray(str))
        this.setNewLine();
    }
    setCodePage(m: number) {
        let str = `CODEPAGE ${m}`;
        this.command.push(...this.stringToCharCodeArray(str))
        this.setNewLine();
    }
    setFeed(m: number) {
        let str = `FEED ${m}`;
        this.command.push(...this.stringToCharCodeArray(str))
        this.setNewLine();
    }
    setBackFeed(m: number) {
        let str = `BACKFEED ${m}`;
        this.command.push(...this.stringToCharCodeArray(str))
        this.setNewLine();
    }
    setBackup(m: number) {
        let str = `BACKUP ${m}`;
        this.command.push(...this.stringToCharCodeArray(str))
        this.setNewLine();
    }
    setFormFeed(): void {
        let str = `FORMFEED`;
        this.command.push(...this.stringToCharCodeArray(str))
        this.setNewLine();
    }
    setHome(): void {
        let str = `HOME`;
        this.command.push(...this.stringToCharCodeArray(str))
        this.setNewLine();
    }
    setSound(m: number, n: number): void {
        let str = `SOUND ${m}, ${n}`;
        this.command.push(...this.stringToCharCodeArray(str))
        this.setNewLine();
    }
    setLimitFeed(m: number): void {
        let str = `LIMITFEED ${m}`;
        this.command.push(...this.stringToCharCodeArray(str))
        this.setNewLine();
    }
    setBar(x: number, y: number, width: number, height: number) {
        let str = `BAR ${x}, ${y}, ${width}, ${height}`;
        this.command.push(...this.stringToCharCodeArray(str))
        this.setNewLine();
    }
    setBarCode(x: number, y: number, codeType: string, height: number, humanReadable: 0 | 1, rotation: number, narrow: number, wide: number, content: string) {
        let str = `BARCODE ${x}, ${y}, "${codeType}", ${height}, ${humanReadable}, ${rotation}, ${narrow}, ${wide}, "${content}"`;
        this.command.push(...this.stringToCharCodeArray(str))
        this.setNewLine();
    }
    setBox(x: number, y: number, xend: number, yend: number, thickness: number) {
        let str = `BOX ${x}, ${y}, ${xend}, ${yend}, ${thickness}`;
        this.command.push(...this.stringToCharCodeArray(str))
        this.setNewLine();
    }
    setPutBmp(x: number, y: number, fileName: string) {
        let str = `PUTBMP ${x}, ${y}, "${fileName}"`;
        this.command.push(...this.stringToCharCodeArray(str))
        this.setNewLine();
    }
    setPutPcx(x: number, y: number, fileName: string) {
        let str = `PUTPCX ${x}, ${y}, "${fileName}"`;
        this.command.push(...this.stringToCharCodeArray(str))
        this.setNewLine();
    }
    setErase(x_start: number, y_start: number, x_width: number, y_height: number) {
        let str = `ERASE ${x_start}, ${y_start}, ${x_width}, ${y_height}`;
        this.command.push(...this.stringToCharCodeArray(str))
        this.setNewLine();
    }
    setReverse(x_start: number, y_start: number, x_width: number, y_height: number) {
        let str = `REVERSE ${x_start}, ${y_start}, ${x_width}, ${y_height}`;
        this.command.push(...this.stringToCharCodeArray(str))
        this.setNewLine();
    }
    setQRCode(x: number, y: number, ecc: string, cellWidth: number, mode: string, rotation: number, content: string) {
        let str = `QRCODE ${x},${y},${ecc},${cellWidth},${mode},${rotation},"${content}"`;
        this.command.push(...this.stringToCharCodeArray(str))
        this.setNewLine();
    }
    setPrint(m: number = 1, n: number = 1): void {
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