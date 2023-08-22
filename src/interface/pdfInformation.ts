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
     * get pdf Text
     * @param page page number
     */
    getPdfText: (page: number) => Promise<any>;
    /**
     * get pdf page count
     */
    getPdfPageCount: () => Promise<unknown>;
    /**
     * get pdf image
     * @param page page number
     * @param convertRgba convert to rgba default true
     */
    getPdfImage: (page: number, convertRgba: boolean) => object;
}