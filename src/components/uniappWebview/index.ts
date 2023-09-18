import { UniappWebviewInterface } from '@/interface/UniappWebview';
export class UniappWebview implements UniappWebviewInterface {
    webview: any;
    callback: any;
    html: string = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <meta name="viewport"
                content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
            <title>网络网页</title>
            <style type="text/css">   
                .btn {
                    display: block; 
                    margin: 20px auto;
                    padding: 5px;
                    background-color: #007aff;
                    border: 0;
                    color: #ffffff;
                    height: 40px;
                    width: 200px;
                }
    
                .btn-red {
                    background-color: #dd524d;
                }
    
                .btn-yellow {
                    background-color: #f0ad4e;
                }
    
                .desc {
                    padding: 10px;
                    color: #999999;
                }
    
                .post-message-section {  
                    visibility: hidden;
                }
            </style>
        </head>
        <body>
            <h1>pdf.js</h1>
            <!-- uni 的 SDK -->
            <!-- 需要把 uni.webview.1.5.4.js 下载到自己的服务器 -->
            <!-- pdf.js -->
            <script src="https://unpkg.com/pdfjs-dist@2.10.377/build/pdf.js"></script>
    
            <!-- pdf.worker.js -->
            <script src="https://unpkg.com/pdfjs-dist@2.10.377/build/pdf.worker.min.js"></script>
    
            <script type="text/javascript" src="https://unpkg.com/@dcloudio/uni-webview-js@0.0.3/index.js"></script>
            <script type="text/javascript">
                let url = plus.storage.getItem('printease_url')
                plus.storage.removeItem('printease_url')
                var loadingTask = pdfjsLib.getDocument(url);
                loadingTask.promise.then(function(pdf) {
                    let imgObj = []
    
                    pdf.getPage(1).then(function(page) {  
                          
                            page.getOperatorList().then(function(opList) {
    
                                let imgPromises = []
                               
                                for (let i = 0; i < opList.fnArray.length; i++) {

                                    // 查找图像
                                    let transformMatrix = null;

                                    let fnId = opList.fnArray[i]
                                    if (fnId === pdfjsLib.OPS.transform) { // transform 操作
                                        transformMatrix = opList.argsArray[i];
                                    }
    
                                    if (opList.fnArray[i] == pdfjsLib.OPS.paintImageXObject) {
                                        let imgIndex = opList.argsArray[i][0]
                                        let img = page.objs.get(imgIndex)
                                        let rgbaData;
                                        const numPixels = img.width * img.height;
                                        let len = Object.keys(img.data).length
                                        
                                        if (len === numPixels * 3) { // RGB
                                            rgbaData = []; 
                                            for (let i = 0, j = 0; i < len; i += 3, j += 4) {
                                                rgbaData[j] = img.data[i];
                                                rgbaData[j + 1] = img.data[i + 1];
                                                rgbaData[j + 2] = img.data[i + 2];
                                                rgbaData[j + 3] = 255;
                                            }
                                        } else if (len === numPixels * 4) { // RGBA
                                            rgbaData = Object.values(img.data); // 数据已经是 RGBA 格式，无需转换
                                        } else {
                                            console.error("Unknown image data format");
                                            return;
                                        }
                                        imgObj.push({
                                            width: img.width,
                                            height: img.height, 
                                            data: rgbaData,
                                            transformMatrix:transformMatrix
                                        }) 
                                    }
                                   
                                    
                                } 
                                
                                page.getTextContent().then(function(textContent) {
                                    console.log('textContent', textContent);
                                    var textItems = textContent.items;
                                    var finalString = "";
                                    for (var i = 0; i < textItems.length; i++) {
                                        var item = textItems[i];
                                        finalString += item.str + " ";
                                    } 
                                    console.log('finalString',finalString)
                                    plus.storage.setItem('printease',JSON.stringify({
                                        imgItems:imgObj,
                                        textItems:textItems
                                    }))
                                }); 
                               
                                
                            }); 
                        })
                });
            </script> 
        </body>
    </html>
    `;
    init() {
        this.webview = null;
    }
    setHtml(html: string) {
        if (html) {
            this.html = html;
        }
    }
    createWebView() {
        this.webview = plus.webview.create('')
        this.webview.loadData(this.html, 'text/html', 'utf-8')
    }
    install(file: string, callback: (data: string) => void) {
        this.createWebView();

        if (typeof file === 'string') {
            plus.storage.setItem('printease_url', file)
        }

        let that = this;
        let intervalId = setInterval(() => {
            var myValue = plus.storage.getItem('printease');
            if (myValue) {
                callback(myValue)
                clearInterval(intervalId);
                plus.storage.removeItem('printease');
                that.webview.close();
            }
        }, 100);
        setTimeout(function () {
            clearInterval(intervalId);
        }, 10000);
    }
}