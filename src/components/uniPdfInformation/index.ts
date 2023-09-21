import { PdfInformationInterface } from '@/interface/pdfInformation';
// import * as pdfjsLib from 'pdfjs-dist';
export class UniPdfInformation implements PdfInformationInterface {
    pageCount = 0;
    textContent: object = {};
    imageContent = [{}];
    pdfjsLib: any;
    pdfInstance: any;
    init() {
        this.pageCount = 0;
        this.textContent = {};
        this.imageContent = [];
        // this.pdfjsLib = pdfjsLib;
    }
    loadPdfFile() {
        return new Promise((resolve) => {
            // let filees = this.pdfjsLib.getDocument(file)
            // filees.promise.then((pdf: any) => {
            //     this.pdfInstance = pdf;
            //     resolve(pdf)
            // })
            resolve(true)
        })
    }
    loadUniPdfFile(file: any, webviewObj: any) {
        return new Promise((resolve) => {
            webviewObj.install(file, (data: any) => {
                let obj = JSON.parse(data)
                this.imageContent = obj.imgItems
                this.textContent = obj.textItems
                resolve(true)
            })
        })
    }
    getPdfText() {
        return this.textContent
    }

    getPdfPageCount() {
        return new Promise((resolve) => {
            this.pdfInstance.getMetadata().then((metadata: any) => {
                this.pageCount = metadata.info.PageCount
                resolve(this.pageCount)
            })
        })
    }
    getPdfImage() {
        return this.imageContent
    }
}