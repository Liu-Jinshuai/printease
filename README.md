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
tspl.setGap(3, 0)
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
tspl.setGap(3, 0)
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
tspl.setGap(3, 0)
tspl.setCls()
tspl.setQRCode(10, 10, 'L', 5, 'A', 0, '123456789')
tspl.setPrint(1)
console.log(tspl.getBuffer())
```

### print image

```js

```

## License

[MIT licensed](./LICENSE)
