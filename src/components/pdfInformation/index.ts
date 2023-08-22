import { PdfInformationInterface } from '@/interface/pdfInformation';
import * as pdfjsLib from 'pdfjs-dist';
export class PdfInformation implements PdfInformationInterface {
    pageCount = 0;
    textContent: object = {};
    imageContent = [{}];
    pdfjsLib: any;
    pdfInstance: any;
    init() {
        this.pageCount = 0;
        this.textContent = {};
        this.imageContent = [];
        this.pdfjsLib = pdfjsLib;
    }
    loadPdfFile(file: any) {
        return new Promise((resolve) => {
            let filees = this.pdfjsLib.getDocument(file)
            filees.promise.then((pdf: any) => {
                this.pdfInstance = pdf;
                resolve(pdf)
            })
        })
    }
    getPdfText(page: number) {
        this.textContent = {}
        return new Promise((resolve) => {
            this.pdfInstance.getPage(page).then((page: any) => {
                page.getTextContent().then((textContent: any) => {
                    this.textContent = textContent
                    resolve(textContent)
                })
            })
        })
    }
    getPdfPageCount() {
        return new Promise((resolve) => {
            this.pdfInstance.getMetadata().then((metadata: any) => {
                this.pageCount = metadata.info.PageCount
                resolve(this.pageCount)
            })
        })
    }
    getPdfImage(pageIndex: number) {
        let that = this;
        this.imageContent = []
        return new Promise((resolve) => {
            this.pdfInstance.getPage(pageIndex).then(function (page: any) {
                page.getOperatorList().then(function (opList: any) {
                    let transformMatrix = null;
                    for (let i = 0; i < opList.fnArray.length; i++) {
                        let fnId = opList.fnArray[i]
                        if (fnId === pdfjsLib.OPS.transform) {
                            transformMatrix = opList.argsArray[i];
                        }
                        if (opList.fnArray[i] == pdfjsLib.OPS.paintImageXObject) {
                            let imgIndex = opList.argsArray[i][0]
                            let img = page.objs.get(imgIndex)
                            that.imageContent.push({
                                transformMatrix: transformMatrix,
                                data: img
                            })
                            resolve(that.imageContent)
                        }
                    }
                });
            })
        })
    }
}