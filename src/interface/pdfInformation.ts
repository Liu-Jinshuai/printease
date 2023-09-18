/**
 * pdf information
 */
export interface PdfInformationInterface {
    pdfjsLib: any;
    pdfInstance: any;
    pageCount: number;
    textContent: object;
    imageContent: object[];
    /**
     * init
     */
    init: () => void;
    /**
     * load pdf file
     */
    loadPdfFile: (file: any) => void;
    /**
     * load uni pdf file
     * @param file file path
     * @param webviewObj webview object
     * @returns 
     */
    loadUniPdfFile: (file: any, webviewObj: object) => Promise<any>;
    /**
     * get pdf Text
     */
    getPdfText: () => object;
    /**
     * get pdf page count
     */
    getPdfPageCount: () => Promise<unknown>;
    /**
     * get pdf image
     */
    getPdfImage: () => any;
}