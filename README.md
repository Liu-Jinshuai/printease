# printease
"PrintEase: A powerful, user-friendly tool for easy control of your printer. Tailored for ease of use and efficient handling of all your printing needs, PrintEase provides seamless integration between your computer and printer. Whether it's adjusting printer settings, or troubleshooting common problems, PrintEase has you covered.

## document

[document](docs/modules.md)

## install

```bash
npm install printease
```

## usage

It is relatively simple to use, for example, we can use the following statement to print a piece of content

### print text

```js
import printsea from 'printsea'
let tspl = new printsea.tspl.TsplLib()
tspl.init()
tspl.setSize(60, 40)
tspl.setGap(0, 0)
tspl.setCls()
tspl.setText(50,50,'3',0,1,1,'Hello, Printease!')
tspl.setPrint(1)
// Send the contents of the buffer buffer to the printer, and the printer will print a piece of content
console.log(tspl.getBuffer())
```

You can see that we have used ```tspl.getBuffer()``` to get a piece of buffer data, you need to connect to the printer, and then send the buffer content to the printer, and the printer will perform a printing process.

### print barcode

```js
import printsea from 'printsea'
let tspl = new printsea.tspl.TsplLib()
tspl.init()
tspl.setSize(60, 40)
tspl.setGap(0, 0)
tspl.setCls()
tspl.setBarCode(10, 10, '39', 100, 1, 0, 2, 4, '123456789')
tspl.setPrint(1)
console.log(tspl.getBuffer())
```

Similarly, you should send the content obtained by ```tspl.getBuffer()``` to the printer, otherwise it is just a console print

### print QR code
    
```js
import printsea from 'printsea'
let tspl = new printsea.tspl.TsplLib()
tspl.init()
tspl.setSize(60, 40)
tspl.setGap(0, 0)
tspl.setCls()
tspl.setQRCode(10, 10, 'L', 5, 'A', 0, '123456789')
tspl.setPrint(1)
console.log(tspl.getBuffer())
```

### print image

```js
import printsea from 'printsea'
let imageData = [0, 0, 0, 0, 0, 0, 7, 255, 3, 255, 17, 255, 24, 255, 28, 127, 30, 63, 31, 31, 31, 143, 31, 199, 31, 227, 31, 231, 31, 255, 31, 255]
let tspl = new printsea.tspl.TsplLib()
tspl.init()
tspl.setSize(60, 40)
tspl.setGap(0, 0)
tspl.setCls()
tspl.setBitmap(200, 200, 16, 16, 0, imageData)
tspl.setPrint(1)
console.log(tspl.getBuffer())
```

If you don't want to organize the image data yourself, you can use ```imagePixelInformation``` for processing, like this:

```js
import printsea from 'printsea'
import img from './test.png'
let ctx = new printsea.imagePixelInformation.JavaScriptImagePixelInformation(100);
ctx.getImageData(img,200,300,(res)=>{
    let tspl = new printsea.tspl.TsplLib()
    tspl.init()
    tspl.setSize(60, 40)
    tspl.setGap(0, 0)
    tspl.setCls()
    tspl.setBitmap(10, 10, res.width, res.height, 0, res.data)
    tspl.setPrint(1)
    console.log(tspl.getBuffer())
})
```
If you use uniapp, please use the ```uniGetImageData``` method of ```UniappImagePixelInformation```. eg: ```ctx.uniGetImageData('myCanvas','./test.png',200,300,(res)=>{})```

## License

[MIT licensed](./LICENSE)
