export interface UniappWebviewInterface{
    webview: any;
    html: string;
    callback: any;
    /**
     * init
     */
    init(): void;
    /**
     * set html
     * @param html 
     */
    setHtml(html: string): void;
}