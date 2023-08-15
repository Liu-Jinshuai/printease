[printease](../README.md) / [Modules](../modules.md) / [interface/TsplLib](../modules/interface_TsplLib.md) / TsplLibInterface

# Interface: TsplLibInterface

[interface/TsplLib](../modules/interface_TsplLib.md).TsplLibInterface

## Implemented by

- [`TsplLib`](../classes/components_tspl.TsplLib.md)

## Table of contents

### Properties

- [command](interface_TsplLib.TsplLibInterface.md#command)
- [encoding](interface_TsplLib.TsplLibInterface.md#encoding)
- [getBuffer](interface_TsplLib.TsplLibInterface.md#getbuffer)
- [getCommand](interface_TsplLib.TsplLibInterface.md#getcommand)
- [init](interface_TsplLib.TsplLibInterface.md#init)
- [setBackFeed](interface_TsplLib.TsplLibInterface.md#setbackfeed)
- [setBackup](interface_TsplLib.TsplLibInterface.md#setbackup)
- [setBar](interface_TsplLib.TsplLibInterface.md#setbar)
- [setBarCode](interface_TsplLib.TsplLibInterface.md#setbarcode)
- [setBitmap](interface_TsplLib.TsplLibInterface.md#setbitmap)
- [setBline](interface_TsplLib.TsplLibInterface.md#setbline)
- [setBox](interface_TsplLib.TsplLibInterface.md#setbox)
- [setCashBox](interface_TsplLib.TsplLibInterface.md#setcashbox)
- [setCls](interface_TsplLib.TsplLibInterface.md#setcls)
- [setCodePage](interface_TsplLib.TsplLibInterface.md#setcodepage)
- [setCommand](interface_TsplLib.TsplLibInterface.md#setcommand)
- [setCountry](interface_TsplLib.TsplLibInterface.md#setcountry)
- [setDensity](interface_TsplLib.TsplLibInterface.md#setdensity)
- [setDirection](interface_TsplLib.TsplLibInterface.md#setdirection)
- [setEncoding](interface_TsplLib.TsplLibInterface.md#setencoding)
- [setErase](interface_TsplLib.TsplLibInterface.md#seterase)
- [setFeed](interface_TsplLib.TsplLibInterface.md#setfeed)
- [setFormFeed](interface_TsplLib.TsplLibInterface.md#setformfeed)
- [setGap](interface_TsplLib.TsplLibInterface.md#setgap)
- [setHome](interface_TsplLib.TsplLibInterface.md#sethome)
- [setLimitFeed](interface_TsplLib.TsplLibInterface.md#setlimitfeed)
- [setNewLine](interface_TsplLib.TsplLibInterface.md#setnewline)
- [setOffset](interface_TsplLib.TsplLibInterface.md#setoffset)
- [setPrint](interface_TsplLib.TsplLibInterface.md#setprint)
- [setPutBmp](interface_TsplLib.TsplLibInterface.md#setputbmp)
- [setPutPcx](interface_TsplLib.TsplLibInterface.md#setputpcx)
- [setQRCode](interface_TsplLib.TsplLibInterface.md#setqrcode)
- [setReference](interface_TsplLib.TsplLibInterface.md#setreference)
- [setReverse](interface_TsplLib.TsplLibInterface.md#setreverse)
- [setSize](interface_TsplLib.TsplLibInterface.md#setsize)
- [setSound](interface_TsplLib.TsplLibInterface.md#setsound)
- [setSpeed](interface_TsplLib.TsplLibInterface.md#setspeed)
- [setText](interface_TsplLib.TsplLibInterface.md#settext)
- [stringToCharCodeArray](interface_TsplLib.TsplLibInterface.md#stringtocharcodearray)
- [stringToEncodedBytes](interface_TsplLib.TsplLibInterface.md#stringtoencodedbytes)

## Properties

### command

• **command**: `number`[]

@description: command array

#### Defined in

[interface/TsplLib.ts:9](https://github.com/Liu-Jinshuai/printease/blob/c142227/src/interface/TsplLib.ts#L9)

___

### encoding

• **encoding**: `string`

@description: Encoding method, default utf-8

#### Defined in

[interface/TsplLib.ts:5](https://github.com/Liu-Jinshuai/printease/blob/c142227/src/interface/TsplLib.ts#L5)

___

### getBuffer

• **getBuffer**: () => `ArrayBuffer`

#### Type declaration

▸ (): `ArrayBuffer`

@description: Get print command (Buffer)

##### Returns

`ArrayBuffer`

Returns the print command (Buffer)

#### Defined in

[interface/TsplLib.ts:261](https://github.com/Liu-Jinshuai/printease/blob/c142227/src/interface/TsplLib.ts#L261)

___

### getCommand

• **getCommand**: () => `number`[]

#### Type declaration

▸ (): `number`[]

@description: get print command

##### Returns

`number`[]

return print command

#### Defined in

[interface/TsplLib.ts:256](https://github.com/Liu-Jinshuai/printease/blob/c142227/src/interface/TsplLib.ts#L256)

___

### init

• **init**: () => `void`

#### Type declaration

▸ (): `void`

@description: init the command

##### Returns

`void`

#### Defined in

[interface/TsplLib.ts:16](https://github.com/Liu-Jinshuai/printease/blob/c142227/src/interface/TsplLib.ts#L16)

___

### setBackFeed

• **setBackFeed**: (`m`: `number`) => `void`

#### Type declaration

▸ (`m`): `void`

@description: Pulls the label back the specified length

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | `number` | 1≤n≤9999, unit dot |

##### Returns

`void`

#### Defined in

[interface/TsplLib.ts:138](https://github.com/Liu-Jinshuai/printease/blob/c142227/src/interface/TsplLib.ts#L138)

___

### setBackup

• **setBackup**: (`m`: `number`) => `void`

#### Type declaration

▸ (`m`): `void`

@description: Pulls the label back the specified length

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | `number` | 1≤n≤9999, unit dot |

##### Returns

`void`

#### Defined in

[interface/TsplLib.ts:143](https://github.com/Liu-Jinshuai/printease/blob/c142227/src/interface/TsplLib.ts#L143)

___

### setBar

• **setBar**: (`x`: `number`, `y`: `number`, `width`: `number`, `height`: `number`) => `void`

#### Type declaration

▸ (`x`, `y`, `width`, `height`): `void`

@description: draw a line on the label

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The X coordinate of the upper left corner of the line, in dot |
| `y` | `number` | The Y coordinate of the upper left corner of the line, in dot |
| `width` | `number` | Line width, unit dot |
| `height` | `number` | Line height, unit dot |

##### Returns

`void`

#### Defined in

[interface/TsplLib.ts:170](https://github.com/Liu-Jinshuai/printease/blob/c142227/src/interface/TsplLib.ts#L170)

___

### setBarCode

• **setBarCode**: (`x`: `number`, `y`: `number`, `codeType`: `string`, `height`: `number`, `humanReadable`: ``0`` \| ``1``, `rotation`: `number`, `narrow`: `number`, `wide`: `number`, `content`: `string`) => `void`

#### Type declaration

▸ (`x`, `y`, `codeType`, `height`, `humanReadable`, `rotation`, `narrow`, `wide`, `content`): `void`

@description: Draw 1D barcode

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The starting point of the horizontal coordinates of the upper left corner, expressed in dots |
| `y` | `number` | The starting point of the vertical coordinate of the upper left corner, expressed in dots |
| `codeType` | `string` | Barcode type |
| `height` | `number` | Barcode height, expressed in dots |
| `humanReadable` | ``0`` \| ``1`` | 0 means invisible to human eyes, 1 means visible to human eyes |
| `rotation` | `number` | Barcode rotation angle, clockwise |
| `narrow` | `number` | Narrow bar width, expressed in dots |
| `wide` | `number` | Width bar width, expressed in dots |
| `content` | `string` | Barcode content |

##### Returns

`void`

**`Example`**

```ts
setBarCode(10, 10, '39', 100, 1, 0, 2, 4, '123456789')
```

#### Defined in

[interface/TsplLib.ts:185](https://github.com/Liu-Jinshuai/printease/blob/c142227/src/interface/TsplLib.ts#L185)

___

### setBitmap

• **setBitmap**: (`x`: `number`, `y`: `number`, `width`: `number`, `height`: `number`, `mode`: `number`, `bitmap`: `number`[]) => `void`

#### Type declaration

▸ (`x`, `y`, `width`, `height`, `mode`, `bitmap`): `void`

@description: Draw a bitmap (non-BMP format image file)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The X coordinate of the upper left corner of the bitmap |
| `y` | `number` | The Y coordinate of the upper left corner of the bitmap |
| `width` | `number` | Width of bitmap, unit byte |
| `height` | `number` | The height of the bitmap, in dot |
| `mode` | `number` | bitmap drawing mode 0 OVERWRITE 1 OR 2 XOR |
| `bitmap` | `number`[] | Image pixel value array |

##### Returns

`void`

#### Defined in

[interface/TsplLib.ts:58](https://github.com/Liu-Jinshuai/printease/blob/c142227/src/interface/TsplLib.ts#L58)

___

### setBline

• **setBline**: (`m`: `number`, `n`: `number`) => `void`

#### Type declaration

▸ (`m`, `n`): `void`

@description: Set the height of the black mark and define the length of the label that is sent out after the label is printed

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | `number` | Black mark height, unit (mm) |
| `n` | `number` | Extra output paper length, unit (mm) |

##### Returns

`void`

#### Defined in

[interface/TsplLib.ts:90](https://github.com/Liu-Jinshuai/printease/blob/c142227/src/interface/TsplLib.ts#L90)

___

### setBox

• **setBox**: (`x`: `number`, `y`: `number`, `xend`: `number`, `yend`: `number`, `thickness`: `number`) => `void`

#### Type declaration

▸ (`x`, `y`, `xend`, `yend`, `thickness`): `void`

@description: Draw a rectangular box on the volume label

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The X coordinate of the upper left corner of the box, in dot |
| `y` | `number` | The Y coordinate of the upper left corner of the box, in dot |
| `xend` | `number` | The X coordinate of the lower right corner of the box, in dot |
| `yend` | `number` | The Y coordinate of the lower right corner of the box, in dot |
| `thickness` | `number` | Box line width, unit dot |

##### Returns

`void`

#### Defined in

[interface/TsplLib.ts:194](https://github.com/Liu-Jinshuai/printease/blob/c142227/src/interface/TsplLib.ts#L194)

___

### setCashBox

• **setCashBox**: (`m`: ``0`` \| ``1``, `t1`: `number`, `t2`: `number`) => `void`

#### Type declaration

▸ (`m`, `t1`, `t2`): `void`

@description: cash box control pulse

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | ``0`` \| ``1`` | 0, 48 Pin 2 of the cash drawer socket 1, 49 Pin 5 of the cash drawer socket |
| `t1` | `number` | 0≤t1≤255 Output the cash drawer open pulse set by t1 and t2 to the pin specified by m |
| `t2` | `number` | 0≤t2≤255 Output the cash drawer open pulse set by t1 and t2 to the pin specified by m |

##### Returns

`void`

#### Defined in

[interface/TsplLib.ts:84](https://github.com/Liu-Jinshuai/printease/blob/c142227/src/interface/TsplLib.ts#L84)

___

### setCls

• **setCls**: () => `void`

#### Type declaration

▸ (): `void`

@description: Clear the data of the image buffer

##### Returns

`void`

#### Defined in

[interface/TsplLib.ts:47](https://github.com/Liu-Jinshuai/printease/blob/c142227/src/interface/TsplLib.ts#L47)

___

### setCodePage

• **setCodePage**: (`m`: `number`) => `void`

#### Type declaration

▸ (`m`): `void`

@description: Select the corresponding international code page

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | `number` | 8-bit codepage character set represents 437:United States 850:Multilingual 852:Slavic 860:Portuguese 863:Canadian/French 865:Nordic Windows code page 1250:Central Europe 1252:Latin I 1253:Greek 1254:Turkish Limited to 12×24 dot alphanumeric font WestEurope:WestEurope Greek:Greek Hebrew:Hebrew EastEurope:EastEurope Iran:Iran IranII:IranII Latvian:Latvian Arabic:Arabic Vietnam:Vietnam Uygur:Uygur Thai:Thai 1252:Latin I 1257:WPC1257 1251:WPC1251 866:Cyrillic 858:PC858 747:PC747 864:PC864 1001:PC1001 |

##### Returns

`void`

#### Defined in

[interface/TsplLib.ts:128](https://github.com/Liu-Jinshuai/printease/blob/c142227/src/interface/TsplLib.ts#L128)

___

### setCommand

• **setCommand**: (`command`: `string` \| `number`[]) => `void`

#### Type declaration

▸ (`command`): `void`

@description: Set commands（If you want to set a custom directive, you can use the command）

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `string` \| `number`[] | command |

##### Returns

`void`

#### Defined in

[interface/TsplLib.ts:251](https://github.com/Liu-Jinshuai/printease/blob/c142227/src/interface/TsplLib.ts#L251)

___

### setCountry

• **setCountry**: (`m`: `number`) => `void`

#### Type declaration

▸ (`m`): `void`

@description: Select the corresponding international character set

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | `number` | 001:USA 002:French 003:Latin America 034:Spanish 039:Italian 044:United Kingdom 046:Swedish 047:Norwegian 049:German |

##### Returns

`void`

#### Defined in

[interface/TsplLib.ts:121](https://github.com/Liu-Jinshuai/printease/blob/c142227/src/interface/TsplLib.ts#L121)

___

### setDensity

• **setDensity**: (`m`: `number`) => `void`

#### Type declaration

▸ (`m`): `void`

@description: Controlling Density When Printing

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | `number` | 0～15 0: use the lightest printing density 15: use the darkest printing density |

##### Returns

`void`

#### Defined in

[interface/TsplLib.ts:105](https://github.com/Liu-Jinshuai/printease/blob/c142227/src/interface/TsplLib.ts#L105)

___

### setDirection

• **setDirection**: (`m`: ``0`` \| ``1``) => `void`

#### Type declaration

▸ (`m`): `void`

@description: Define the orientation of output paper and printed fonts when printing

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | ``0`` \| ``1`` | 0 or 1 |

##### Returns

`void`

#### Defined in

[interface/TsplLib.ts:110](https://github.com/Liu-Jinshuai/printease/blob/c142227/src/interface/TsplLib.ts#L110)

___

### setEncoding

• **setEncoding**: (`encoding`: `string`) => `void`

#### Type declaration

▸ (`encoding`): `void`

@description: Set encoding type

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encoding` | `string` | encoding type |

##### Returns

`void`

#### Defined in

[interface/TsplLib.ts:242](https://github.com/Liu-Jinshuai/printease/blob/c142227/src/interface/TsplLib.ts#L242)

___

### setErase

• **setErase**: (`x_start`: `number`, `y_start`: `number`, `x_width`: `number`, `y_height`: `number`) => `void`

#### Type declaration

▸ (`x_start`, `y_start`, `x_width`, `y_height`): `void`

@description: Clear data in some areas of the image buffer

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x_start` | `number` | The X coordinate of the upper left corner of the cleared area, unit dot |
| `y_start` | `number` | The Y coordinate of the upper left corner of the cleared area, unit dot |
| `x_width` | `number` | Clear area width, unit dot |
| `y_height` | `number` | Clear area height, unit dot |

##### Returns

`void`

#### Defined in

[interface/TsplLib.ts:216](https://github.com/Liu-Jinshuai/printease/blob/c142227/src/interface/TsplLib.ts#L216)

___

### setFeed

• **setFeed**: (`m`: `number`) => `void`

#### Type declaration

▸ (`m`): `void`

@description: Pushes the label stock forward by the specified length

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | `number` | 1≤n≤9999, unit dot |

##### Returns

`void`

#### Defined in

[interface/TsplLib.ts:133](https://github.com/Liu-Jinshuai/printease/blob/c142227/src/interface/TsplLib.ts#L133)

___

### setFormFeed

• **setFormFeed**: () => `void`

#### Type declaration

▸ (): `void`

@description: Control the printer to feed a label paper

##### Returns

`void`

#### Defined in

[interface/TsplLib.ts:147](https://github.com/Liu-Jinshuai/printease/blob/c142227/src/interface/TsplLib.ts#L147)

___

### setGap

• **setGap**: (`m`: `number`, `n`: `number`) => `void`

#### Type declaration

▸ (`m`, `n`): `void`

@description: Set the vertical distance between two label papers

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | `number` | Vertical distance between two labels |
| `n` | `number` | vertical spacing offset |

##### Returns

`void`

#### Defined in

[interface/TsplLib.ts:42](https://github.com/Liu-Jinshuai/printease/blob/c142227/src/interface/TsplLib.ts#L42)

___

### setHome

• **setHome**: () => `void`

#### Type declaration

▸ (): `void`

@description: When using label paper with gaps or black marks, if it is uncertain whether the first label paper is in the correct printing position, this command can push the label paper forward to the beginning of the next label paper to start printing. Label size and gap need to be set before this command;Paper height greater than or equal to 30 mm

##### Returns

`void`

#### Defined in

[interface/TsplLib.ts:151](https://github.com/Liu-Jinshuai/printease/blob/c142227/src/interface/TsplLib.ts#L151)

___

### setLimitFeed

• **setLimitFeed**: (`m`: `number`) => `void`

#### Type declaration

▸ (`m`): `void`

@description: When setting the printer to feed paper, if the vertical distance cannot be detected after the set length, the printer will generate an error and stop paper feeding.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | `number` | unit mm |

##### Returns

`void`

#### Defined in

[interface/TsplLib.ts:162](https://github.com/Liu-Jinshuai/printease/blob/c142227/src/interface/TsplLib.ts#L162)

___

### setNewLine

• **setNewLine**: () => `void`

#### Type declaration

▸ (): `void`

@description: Instruction wrapping, called by default, if not necessary, do not need to call

##### Returns

`void`

#### Defined in

[interface/TsplLib.ts:246](https://github.com/Liu-Jinshuai/printease/blob/c142227/src/interface/TsplLib.ts#L246)

___

### setOffset

• **setOffset**: (`m`: `number`) => `void`

#### Type declaration

▸ (`m`): `void`

@description: Control the stop position of each label in peel-off mode. When printing the next sheet, the printer will compensate the part that was pushed out more or less by pulling back. This command is only available in strip mode

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | `number` | paper stop distance, unit (mm) |

##### Returns

`void`

#### Defined in

[interface/TsplLib.ts:95](https://github.com/Liu-Jinshuai/printease/blob/c142227/src/interface/TsplLib.ts#L95)

___

### setPrint

• **setPrint**: (`m?`: `number`, `n?`: `number`) => `void`

#### Type declaration

▸ (`m?`, `n?`): `void`

@description: execute print

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m?` | `number` | Specify the number of copies to print;1≤m≤65535 |
| `n?` | `number` | The number of sheets to be printed repeatedly per label;1≤n≤65535 |

##### Returns

`void`

#### Defined in

[interface/TsplLib.ts:77](https://github.com/Liu-Jinshuai/printease/blob/c142227/src/interface/TsplLib.ts#L77)

___

### setPutBmp

• **setPutBmp**: (`x`: `number`, `y`: `number`, `fileName`: `string`) => `void`

#### Type declaration

▸ (`x`, `y`, `fileName`): `void`

@description: Print monochrome BMP image files

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The coordinates of the starting point in the horizontal direction, expressed in dots |
| `y` | `number` | The coordinates of the starting point in the vertical direction, expressed in dots |
| `fileName` | `string` | The name of the file to be printed (need to be downloaded in the printer cache) |

##### Returns

`void`

#### Defined in

[interface/TsplLib.ts:201](https://github.com/Liu-Jinshuai/printease/blob/c142227/src/interface/TsplLib.ts#L201)

___

### setPutPcx

• **setPutPcx**: (`x`: `number`, `y`: `number`, `fileName`: `string`) => `void`

#### Type declaration

▸ (`x`, `y`, `fileName`): `void`

@description: Print monochrome PCX format picture files

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The coordinates of the starting point in the horizontal direction, expressed in dots |
| `y` | `number` | The coordinates of the starting point in the vertical direction, expressed in dots |
| `fileName` | `string` | The name of the file to be printed (need to be downloaded in the printer cache) |

##### Returns

`void`

#### Defined in

[interface/TsplLib.ts:208](https://github.com/Liu-Jinshuai/printease/blob/c142227/src/interface/TsplLib.ts#L208)

___

### setQRCode

• **setQRCode**: (`x`: `number`, `y`: `number`, `ecc`: `string`, `cellWidth`: `number`, `mode`: `string`, `rotation`: `number`, `content`: `string`) => `void`

#### Type declaration

▸ (`x`, `y`, `ecc`, `cellWidth`, `mode`, `rotation`, `content`): `void`

@description: This command is used to print the QR code

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The coordinates of the starting point in the horizontal direction of the QR code |
| `y` | `number` | The coordinates of the starting point in the vertical direction of the QR code |
| `ecc` | `string` | Select QRCODE Error Correction Level:L 7% M 15% Q 25% H 30% |
| `cellWidth` | `number` | QR code width 1-10 |
| `mode` | `string` | manual/automatic coding:A Auto M Manual |
| `rotation` | `number` | Rotation angle (clockwise):0 0 degrees 90 90 degrees 180 180 degrees 270 270 degrees |
| `content` | `string` | QR code content |

##### Returns

`void`

**`Example`**

```ts
setQRCode(10, 10, 'L', 5, 'A', 0, '123456789')
```

#### Defined in

[interface/TsplLib.ts:236](https://github.com/Liu-Jinshuai/printease/blob/c142227/src/interface/TsplLib.ts#L236)

___

### setReference

• **setReference**: (`x`: `number`, `y`: `number`) => `void`

#### Type declaration

▸ (`x`, `y`): `void`

@description: Define the reference coordinate origin of the label

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The coordinate position in the horizontal direction, unit dot |
| `y` | `number` | Coordinate position in the vertical direction, unit dot |

##### Returns

`void`

#### Defined in

[interface/TsplLib.ts:116](https://github.com/Liu-Jinshuai/printease/blob/c142227/src/interface/TsplLib.ts#L116)

___

### setReverse

• **setReverse**: (`x_start`: `number`, `y_start`: `number`, `x_width`: `number`, `y_height`: `number`) => `void`

#### Type declaration

▸ (`x_start`, `y_start`, `x_width`, `y_height`): `void`

@description: Print the specified area in reverse

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x_start` | `number` | The X coordinate of the upper left corner of the reverse area, unit dot |
| `y_start` | `number` | The Y coordinate of the upper left corner of the reverse area, unit dot |
| `x_width` | `number` | Reverse area width, unit dot |
| `y_height` | `number` | Reverse area height, unit dot |

##### Returns

`void`

#### Defined in

[interface/TsplLib.ts:224](https://github.com/Liu-Jinshuai/printease/blob/c142227/src/interface/TsplLib.ts#L224)

___

### setSize

• **setSize**: (`width`: `number`, `height`: `number`) => `void`

#### Type declaration

▸ (`width`, `height`): `void`

@description: Set the width and length of the label paper

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `width` | `number` | Width of label paper (without backing paper) |
| `height` | `number` | Height of label paper (without backing paper) |

##### Returns

`void`

#### Defined in

[interface/TsplLib.ts:35](https://github.com/Liu-Jinshuai/printease/blob/c142227/src/interface/TsplLib.ts#L35)

___

### setSound

• **setSound**: (`m`: `number`, `n`: `number`) => `void`

#### Type declaration

▸ (`m`, `n`): `void`

@description: This command is used to control the frequency of the buzzer, and 10 levels of sound can be set, and the length of each level of sound is controlled by the second parameter

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | `number` | Scale: 0-9 |
| `n` | `number` | Interval time: 1-4095 |

##### Returns

`void`

#### Defined in

[interface/TsplLib.ts:157](https://github.com/Liu-Jinshuai/printease/blob/c142227/src/interface/TsplLib.ts#L157)

___

### setSpeed

• **setSpeed**: (`m`: `number`) => `void`

#### Type declaration

▸ (`m`): `void`

@description: Control print speed

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | `number` | set print speed（For example: 2.0 sets the printing speed to 2.0”/sec） |

##### Returns

`void`

#### Defined in

[interface/TsplLib.ts:100](https://github.com/Liu-Jinshuai/printease/blob/c142227/src/interface/TsplLib.ts#L100)

___

### setText

• **setText**: (`x`: `number`, `y`: `number`, `font`: `string`, `rotation`: `number`, `x_multiplication`: `number`, `y_multiplication`: `number`, `text`: `string`) => `void`

#### Type declaration

▸ (`x`, `y`, `font`, `rotation`, `x_multiplication`, `y_multiplication`, `text`): `void`

@description: string msg

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The coordinates of the starting point of the text in the X direction |
| `y` | `number` | The coordinates of the starting point of the text in the Y direction |
| `font` | `string` | 1 8×12 dot Alphanumeric Font 2 12×20 dot Alphanumeric Font 3 16×24 dot Alphanumeric Font 4 24×32 dot Alphanumeric Font 5 32×48 dot Alphanumeric Font 6 14×19 dot Alphanumeric Font OCR- B 7 21×27 dot Alphanumeric font OCR-B 8 14×25 dot Alphanumeric font OCR-A 9 9×17 dot Alphanumeric font 10 12×24 dot Alphanumeric font TST24.BF2 Traditional Chinese 24×24Font (big five code) TSS24.BF2 Simplified Chinese 24×24Font (GB code) K Korean 24×24Font (KS code) rotation Text rotation angle (clockwise) 0 0 degrees 90 90 degrees 180 180 degrees 270 270 degrees |
| `rotation` | `number` | Text rotation angle (clockwise) |
| `x_multiplication` | `number` | X direction magnification 1-10 |
| `y_multiplication` | `number` | Y direction magnification 1-10 |
| `text` | `string` |  |

##### Returns

`void`

#### Defined in

[interface/TsplLib.ts:70](https://github.com/Liu-Jinshuai/printease/blob/c142227/src/interface/TsplLib.ts#L70)

___

### stringToCharCodeArray

• **stringToCharCodeArray**: (`str`: `string`) => `number`[]

#### Type declaration

▸ (`str`): `number`[]

@description: string to charCode array

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | string data |

##### Returns

`number`[]

charCode array

#### Defined in

[interface/TsplLib.ts:22](https://github.com/Liu-Jinshuai/printease/blob/c142227/src/interface/TsplLib.ts#L22)

___

### stringToEncodedBytes

• **stringToEncodedBytes**: (`str`: `string`) => `number`[]

#### Type declaration

▸ (`str`): `number`[]

@description: string to encoded bytes

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | string data |

##### Returns

`number`[]

#### Defined in

[interface/TsplLib.ts:28](https://github.com/Liu-Jinshuai/printease/blob/c142227/src/interface/TsplLib.ts#L28)
