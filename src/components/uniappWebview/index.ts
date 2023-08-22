import { UniappWebviewInterface } from '@/interface/UniappWebview';
const htmlStr = `
<!DOCTYPE html>
    <html>
    <head>
      <title>Blank</title>
    </head>
    <script>
      uni.postMessage({
        data: {
          message: 'Button was clicked'
        }
      });
    </script>
    <body>
    </body>
    </html>
`
export default class UniappWebview implements UniappWebviewInterface {
    webview: any;
    callback: any;
    html: string = htmlStr;
    init() {
        this.webview = null;
        this.html = htmlStr;
    }
    setHtml(html: string) {
        if (html) {
            this.html = html;
        }
    }
    async getPdfContent(callback: () => void) {
        this.callback = callback;
        this.webview.addEventListener('message', function (event: any) {
            console.log('Received message:', event.data);
        });
        try {
            const url = await this.createHtmlFile();
            this.createWebView(url as string);
        } catch (e) {
            throw new Error(String(e));
        }
    }
    createWebView(url: string) {
        this.webview = uni.createWebView({
            url: url,
        });
    }
    createHtmlFile() {
        return new Promise((resolve, reject) => {
            let tempFilePath = `${uni.env.USER_DATA_PATH}/temp.html`;
            uni.writeFile({
                filePath: tempFilePath,
                data: this.html,
                encoding: 'utf-8',
                success: () => {
                    resolve(tempFilePath);
                },
                fail: () => {
                    reject(`create html file fail`);
                }
            });
        })
    }
}