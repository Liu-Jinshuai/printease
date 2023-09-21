import { PdfInformationInterface } from '@/interface/pdfInformation';
// import * as pdfjsLib from 'pdfjs-dist';
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
        // this.pdfjsLib = pdfjsLib;
    }
    loadPdfFile() {
        // let that = this
        // return new Promise((resolve) => {
        //     let filees = this.pdfjsLib.getDocument(file)
        //     filees.promise.then((pdf: any) => {
        //         let imgObj: object[] = []

        //         pdf.getPage(1).then(function (page: any) {

        //             page.getOperatorList().then(function (opList: any) {

        //                 for (let i = 0; i < opList.fnArray.length; i++) {
        //                     let transformMatrix = null;

        //                     let fnId = opList.fnArray[i]
        //                     if (fnId === pdfjsLib.OPS.transform) {
        //                         transformMatrix = opList.argsArray[i];
        //                     }

        //                     if (opList.fnArray[i] == pdfjsLib.OPS.paintImageXObject) {
        //                         let imgIndex = opList.argsArray[i][0]
        //                         let img = page.objs.get(imgIndex)
        //                         let rgbaData;
        //                         const numPixels = img.width * img.height;
        //                         let len = Object.keys(img.data).length

        //                         if (len === numPixels * 3) { // RGB
        //                             rgbaData = [];
        //                             for (let i = 0, j = 0; i < len; i += 3, j += 4) {
        //                                 rgbaData[j] = img.data[i];
        //                                 rgbaData[j + 1] = img.data[i + 1];
        //                                 rgbaData[j + 2] = img.data[i + 2];
        //                                 rgbaData[j + 3] = 255;
        //                             }
        //                         } else if (len === numPixels * 4) { // RGBA
        //                             rgbaData = Object.values(img.data);
        //                         } else {
        //                             console.error("Unknown image data format");
        //                             return;
        //                         }
        //                         imgObj.push({
        //                             width: img.width,
        //                             height: img.height,
        //                             data: rgbaData,
        //                             transformMatrix: transformMatrix
        //                         })
        //                     }

        //                 }

        //                 page.getTextContent().then(function (textContent: any) {
        //                     console.log('textContent', textContent);
        //                     var textItems = textContent.items;
        //                     var finalString = "";
        //                     for (var i = 0; i < textItems.length; i++) {
        //                         var item = textItems[i];
        //                         finalString += item.str + " ";
        //                     }
        //                     that.imageContent = imgObj
        //                     that.textContent = textItems
        //                     resolve(true)
        //                 });

        //             });
        //         })
        //     })
        // })
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