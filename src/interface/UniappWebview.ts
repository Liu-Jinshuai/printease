export interface UniappWebviewInterface {
    webview: any;
    html: string;
    callback: any;
    /**
     * init
     */
    init(): void;
    /**
     * set webview html
     * @param html html string
     */
    setHtml(html: string): void;
    /**
     * create webview
     */
    createWebView(): void;
    /**
     * Load complete callback
     * @param file
     * @param callback 
     */
    install(file: string, callback: (data: string) => void): void;
}