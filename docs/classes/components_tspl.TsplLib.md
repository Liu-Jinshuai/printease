[printease](../README.md) / [Modules](../modules.md) / [components/tspl](../modules/components_tspl.md) / TsplLib

# Class: TsplLib

[components/tspl](../modules/components_tspl.md).TsplLib

@description: TSPL instruction library interface document

**`Param`**

**`Implements`**

TsplLibInterface

## Implements

- [`TsplLibInterface`](../interfaces/interface_TsplLib.TsplLibInterface.md)

## Table of contents

### Constructors

- [constructor](components_tspl.TsplLib.md#constructor)

### Properties

- [NEW\_LINE](components_tspl.TsplLib.md#new_line)
- [command](components_tspl.TsplLib.md#command)

### Methods

- [getBuffer](components_tspl.TsplLib.md#getbuffer)
- [getCommand](components_tspl.TsplLib.md#getcommand)
- [init](components_tspl.TsplLib.md#init)
- [setBackFeed](components_tspl.TsplLib.md#setbackfeed)
- [setBackup](components_tspl.TsplLib.md#setbackup)
- [setBar](components_tspl.TsplLib.md#setbar)
- [setBarCode](components_tspl.TsplLib.md#setbarcode)
- [setBitmap](components_tspl.TsplLib.md#setbitmap)
- [setBline](components_tspl.TsplLib.md#setbline)
- [setBox](components_tspl.TsplLib.md#setbox)
- [setCashBox](components_tspl.TsplLib.md#setcashbox)
- [setCls](components_tspl.TsplLib.md#setcls)
- [setCodePage](components_tspl.TsplLib.md#setcodepage)
- [setCommand](components_tspl.TsplLib.md#setcommand)
- [setCountry](components_tspl.TsplLib.md#setcountry)
- [setDensity](components_tspl.TsplLib.md#setdensity)
- [setDirection](components_tspl.TsplLib.md#setdirection)
- [setErase](components_tspl.TsplLib.md#seterase)
- [setFeed](components_tspl.TsplLib.md#setfeed)
- [setFormFeed](components_tspl.TsplLib.md#setformfeed)
- [setGap](components_tspl.TsplLib.md#setgap)
- [setHome](components_tspl.TsplLib.md#sethome)
- [setLimitFeed](components_tspl.TsplLib.md#setlimitfeed)
- [setNewLine](components_tspl.TsplLib.md#setnewline)
- [setOffset](components_tspl.TsplLib.md#setoffset)
- [setPrint](components_tspl.TsplLib.md#setprint)
- [setPutBmp](components_tspl.TsplLib.md#setputbmp)
- [setPutPcx](components_tspl.TsplLib.md#setputpcx)
- [setQRCode](components_tspl.TsplLib.md#setqrcode)
- [setReference](components_tspl.TsplLib.md#setreference)
- [setReverse](components_tspl.TsplLib.md#setreverse)
- [setSize](components_tspl.TsplLib.md#setsize)
- [setSound](components_tspl.TsplLib.md#setsound)
- [setSpeed](components_tspl.TsplLib.md#setspeed)
- [setText](components_tspl.TsplLib.md#settext)
- [stringToCharCodeArray](components_tspl.TsplLib.md#stringtocharcodearray)

## Constructors

### constructor

• **new TsplLib**()

#### Defined in

[components/tspl/index.ts:12](https://github.com/17562105692/printease/blob/08cf583/src/components/tspl/index.ts#L12)

## Properties

### NEW\_LINE

• **NEW\_LINE**: `number`[]

#### Defined in

[components/tspl/index.ts:11](https://github.com/17562105692/printease/blob/08cf583/src/components/tspl/index.ts#L11)

___

### command

• **command**: `number`[]

#### Defined in

[components/tspl/index.ts:10](https://github.com/17562105692/printease/blob/08cf583/src/components/tspl/index.ts#L10)

## Methods

### getBuffer

▸ **getBuffer**(): `ArrayBuffer`

@description: Get print command (Buffer)

#### Returns

`ArrayBuffer`

Returns the print command (Buffer)

#### Implementation of

[TsplLibInterface](../interfaces/interface_TsplLib.TsplLibInterface.md).[getBuffer](../interfaces/interface_TsplLib.TsplLibInterface.md#getbuffer)

#### Defined in

[components/tspl/index.ts:189](https://github.com/17562105692/printease/blob/08cf583/src/components/tspl/index.ts#L189)

___

### getCommand

▸ **getCommand**(): `number`[]

@description: get print command

#### Returns

`number`[]

return print command

#### Implementation of

[TsplLibInterface](../interfaces/interface_TsplLib.TsplLibInterface.md).[getCommand](../interfaces/interface_TsplLib.TsplLibInterface.md#getcommand)

#### Defined in

[components/tspl/index.ts:186](https://github.com/17562105692/printease/blob/08cf583/src/components/tspl/index.ts#L186)

___

### init

▸ **init**(): `void`

@description: init the command

#### Returns

`void`

#### Implementation of

[TsplLibInterface](../interfaces/interface_TsplLib.TsplLibInterface.md).[init](../interfaces/interface_TsplLib.TsplLibInterface.md#init)

#### Defined in

[components/tspl/index.ts:16](https://github.com/17562105692/printease/blob/08cf583/src/components/tspl/index.ts#L16)

___

### setBackFeed

▸ **setBackFeed**(`m`): `void`

@description: Pulls the label back the specified length

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | `number` | 1≤n≤9999, unit dot |

#### Returns

`void`

#### Implementation of

[TsplLibInterface](../interfaces/interface_TsplLib.TsplLibInterface.md).[setBackFeed](../interfaces/interface_TsplLib.TsplLibInterface.md#setbackfeed)

#### Defined in

[components/tspl/index.ts:100](https://github.com/17562105692/printease/blob/08cf583/src/components/tspl/index.ts#L100)

___

### setBackup

▸ **setBackup**(`m`): `void`

@description: Pulls the label back the specified length

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | `number` | 1≤n≤9999, unit dot |

#### Returns

`void`

#### Implementation of

[TsplLibInterface](../interfaces/interface_TsplLib.TsplLibInterface.md).[setBackup](../interfaces/interface_TsplLib.TsplLibInterface.md#setbackup)

#### Defined in

[components/tspl/index.ts:105](https://github.com/17562105692/printease/blob/08cf583/src/components/tspl/index.ts#L105)

___

### setBar

▸ **setBar**(`x`, `y`, `width`, `height`): `void`

@description: draw a line on the label

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The X coordinate of the upper left corner of the line, in dot |
| `y` | `number` | The Y coordinate of the upper left corner of the line, in dot |
| `width` | `number` | Line width, unit dot |
| `height` | `number` | Line height, unit dot |

#### Returns

`void`

#### Implementation of

[TsplLibInterface](../interfaces/interface_TsplLib.TsplLibInterface.md).[setBar](../interfaces/interface_TsplLib.TsplLibInterface.md#setbar)

#### Defined in

[components/tspl/index.ts:130](https://github.com/17562105692/printease/blob/08cf583/src/components/tspl/index.ts#L130)

___

### setBarCode

▸ **setBarCode**(`x`, `y`, `codeType`, `height`, `humanReadable`, `rotation`, `narrow`, `wide`, `content`): `void`

@description: Draw 1D barcode

#### Parameters

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

#### Returns

`void`

**`Example`**

```ts
setBarCode(10, 10, '39', 100, 1, 0, 2, 4, '123456789')
```

#### Implementation of

[TsplLibInterface](../interfaces/interface_TsplLib.TsplLibInterface.md).[setBarCode](../interfaces/interface_TsplLib.TsplLibInterface.md#setbarcode)

#### Defined in

[components/tspl/index.ts:135](https://github.com/17562105692/printease/blob/08cf583/src/components/tspl/index.ts#L135)

___

### setBitmap

▸ **setBitmap**(`x`, `y`, `width`, `height`, `mode`, `bitmap`): `void`

@description: Draw a bitmap (non-BMP format image file)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The X coordinate of the upper left corner of the bitmap |
| `y` | `number` | The Y coordinate of the upper left corner of the bitmap |
| `width` | `number` | Width of bitmap, unit byte |
| `height` | `number` | The height of the bitmap, in dot |
| `mode` | `number` | bitmap drawing mode 0 OVERWRITE 1 OR 2 XOR |
| `bitmap` | `number`[] | Image pixel value array |

#### Returns

`void`

#### Implementation of

[TsplLibInterface](../interfaces/interface_TsplLib.TsplLibInterface.md).[setBitmap](../interfaces/interface_TsplLib.TsplLibInterface.md#setbitmap)

#### Defined in

[components/tspl/index.ts:37](https://github.com/17562105692/printease/blob/08cf583/src/components/tspl/index.ts#L37)

___

### setBline

▸ **setBline**(`m`, `n`): `void`

@description: Set the height of the black mark and define the length of the label that is sent out after the label is printed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | `number` | Black mark height, unit (mm) |
| `n` | `number` | Extra output paper length, unit (mm) |

#### Returns

`void`

#### Implementation of

[TsplLibInterface](../interfaces/interface_TsplLib.TsplLibInterface.md).[setBline](../interfaces/interface_TsplLib.TsplLibInterface.md#setbline)

#### Defined in

[components/tspl/index.ts:55](https://github.com/17562105692/printease/blob/08cf583/src/components/tspl/index.ts#L55)

___

### setBox

▸ **setBox**(`x`, `y`, `xend`, `yend`, `thickness`): `void`

@description: Draw a rectangular box on the volume label

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The X coordinate of the upper left corner of the box, in dot |
| `y` | `number` | The Y coordinate of the upper left corner of the box, in dot |
| `xend` | `number` | The X coordinate of the lower right corner of the box, in dot |
| `yend` | `number` | The Y coordinate of the lower right corner of the box, in dot |
| `thickness` | `number` | Box line width, unit dot |

#### Returns

`void`

#### Implementation of

[TsplLibInterface](../interfaces/interface_TsplLib.TsplLibInterface.md).[setBox](../interfaces/interface_TsplLib.TsplLibInterface.md#setbox)

#### Defined in

[components/tspl/index.ts:140](https://github.com/17562105692/printease/blob/08cf583/src/components/tspl/index.ts#L140)

___

### setCashBox

▸ **setCashBox**(`m`, `t1`, `t2`): `void`

@description: cash box control pulse

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | ``0`` \| ``1`` | 0, 48 Pin 2 of the cash drawer socket 1, 49 Pin 5 of the cash drawer socket |
| `t1` | `number` | 0≤t1≤255 Output the cash drawer open pulse set by t1 and t2 to the pin specified by m |
| `t2` | `number` | 0≤t2≤255 Output the cash drawer open pulse set by t1 and t2 to the pin specified by m |

#### Returns

`void`

#### Implementation of

[TsplLibInterface](../interfaces/interface_TsplLib.TsplLibInterface.md).[setCashBox](../interfaces/interface_TsplLib.TsplLibInterface.md#setcashbox)

#### Defined in

[components/tspl/index.ts:50](https://github.com/17562105692/printease/blob/08cf583/src/components/tspl/index.ts#L50)

___

### setCls

▸ **setCls**(): `void`

@description: Clear the data of the image buffer

#### Returns

`void`

#### Implementation of

[TsplLibInterface](../interfaces/interface_TsplLib.TsplLibInterface.md).[setCls](../interfaces/interface_TsplLib.TsplLibInterface.md#setcls)

#### Defined in

[components/tspl/index.ts:32](https://github.com/17562105692/printease/blob/08cf583/src/components/tspl/index.ts#L32)

___

### setCodePage

▸ **setCodePage**(`m`): `void`

@description: Select the corresponding international code page

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | `number` | 8-bit codepage character set represents 437:United States 850:Multilingual 852:Slavic 860:Portuguese 863:Canadian/French 865:Nordic Windows code page 1250:Central Europe 1252:Latin I 1253:Greek 1254:Turkish Limited to 12×24 dot alphanumeric font WestEurope:WestEurope Greek:Greek Hebrew:Hebrew EastEurope:EastEurope Iran:Iran IranII:IranII Latvian:Latvian Arabic:Arabic Vietnam:Vietnam Uygur:Uygur Thai:Thai 1252:Latin I 1257:WPC1257 1251:WPC1251 866:Cyrillic 858:PC858 747:PC747 864:PC864 1001:PC1001 |

#### Returns

`void`

#### Implementation of

[TsplLibInterface](../interfaces/interface_TsplLib.TsplLibInterface.md).[setCodePage](../interfaces/interface_TsplLib.TsplLibInterface.md#setcodepage)

#### Defined in

[components/tspl/index.ts:90](https://github.com/17562105692/printease/blob/08cf583/src/components/tspl/index.ts#L90)

___

### setCommand

▸ **setCommand**(`command`): `void`

@description: Set commands（If you want to set a custom directive, you can use the command）

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `string` \| `number`[] | command |

#### Returns

`void`

#### Implementation of

[TsplLibInterface](../interfaces/interface_TsplLib.TsplLibInterface.md).[setCommand](../interfaces/interface_TsplLib.TsplLibInterface.md#setcommand)

#### Defined in

[components/tspl/index.ts:178](https://github.com/17562105692/printease/blob/08cf583/src/components/tspl/index.ts#L178)

___

### setCountry

▸ **setCountry**(`m`): `void`

@description: Select the corresponding international character set

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | `number` | 001:USA 002:French 003:Latin America 034:Spanish 039:Italian 044:United Kingdom 046:Swedish 047:Norwegian 049:German |

#### Returns

`void`

#### Implementation of

[TsplLibInterface](../interfaces/interface_TsplLib.TsplLibInterface.md).[setCountry](../interfaces/interface_TsplLib.TsplLibInterface.md#setcountry)

#### Defined in

[components/tspl/index.ts:85](https://github.com/17562105692/printease/blob/08cf583/src/components/tspl/index.ts#L85)

___

### setDensity

▸ **setDensity**(`m`): `void`

@description: Controlling Density When Printing

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | `number` | 0～15 0: use the lightest printing density 15: use the darkest printing density |

#### Returns

`void`

#### Implementation of

[TsplLibInterface](../interfaces/interface_TsplLib.TsplLibInterface.md).[setDensity](../interfaces/interface_TsplLib.TsplLibInterface.md#setdensity)

#### Defined in

[components/tspl/index.ts:70](https://github.com/17562105692/printease/blob/08cf583/src/components/tspl/index.ts#L70)

___

### setDirection

▸ **setDirection**(`m`): `void`

@description: Define the orientation of output paper and printed fonts when printing

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | `number` | 0 or 1 |

#### Returns

`void`

#### Implementation of

[TsplLibInterface](../interfaces/interface_TsplLib.TsplLibInterface.md).[setDirection](../interfaces/interface_TsplLib.TsplLibInterface.md#setdirection)

#### Defined in

[components/tspl/index.ts:75](https://github.com/17562105692/printease/blob/08cf583/src/components/tspl/index.ts#L75)

___

### setErase

▸ **setErase**(`x_start`, `y_start`, `x_width`, `y_height`): `void`

@description: Clear data in some areas of the image buffer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x_start` | `number` | The X coordinate of the upper left corner of the cleared area, unit dot |
| `y_start` | `number` | The Y coordinate of the upper left corner of the cleared area, unit dot |
| `x_width` | `number` | Clear area width, unit dot |
| `y_height` | `number` | Clear area height, unit dot |

#### Returns

`void`

#### Implementation of

[TsplLibInterface](../interfaces/interface_TsplLib.TsplLibInterface.md).[setErase](../interfaces/interface_TsplLib.TsplLibInterface.md#seterase)

#### Defined in

[components/tspl/index.ts:155](https://github.com/17562105692/printease/blob/08cf583/src/components/tspl/index.ts#L155)

___

### setFeed

▸ **setFeed**(`m`): `void`

@description: Pushes the label stock forward by the specified length

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | `number` | 1≤n≤9999, unit dot |

#### Returns

`void`

#### Implementation of

[TsplLibInterface](../interfaces/interface_TsplLib.TsplLibInterface.md).[setFeed](../interfaces/interface_TsplLib.TsplLibInterface.md#setfeed)

#### Defined in

[components/tspl/index.ts:95](https://github.com/17562105692/printease/blob/08cf583/src/components/tspl/index.ts#L95)

___

### setFormFeed

▸ **setFormFeed**(): `void`

@description: Control the printer to feed a label paper

#### Returns

`void`

#### Implementation of

[TsplLibInterface](../interfaces/interface_TsplLib.TsplLibInterface.md).[setFormFeed](../interfaces/interface_TsplLib.TsplLibInterface.md#setformfeed)

#### Defined in

[components/tspl/index.ts:110](https://github.com/17562105692/printease/blob/08cf583/src/components/tspl/index.ts#L110)

___

### setGap

▸ **setGap**(`m`, `n`): `void`

@description: Set the vertical distance between two label papers

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | `number` | Vertical distance between two labels |
| `n` | `number` | vertical spacing offset |

#### Returns

`void`

#### Implementation of

[TsplLibInterface](../interfaces/interface_TsplLib.TsplLibInterface.md).[setGap](../interfaces/interface_TsplLib.TsplLibInterface.md#setgap)

#### Defined in

[components/tspl/index.ts:27](https://github.com/17562105692/printease/blob/08cf583/src/components/tspl/index.ts#L27)

___

### setHome

▸ **setHome**(): `void`

@description: When using label paper with gaps or black marks, if it is uncertain whether the first label paper is in the correct printing position, this command can push the label paper forward to the beginning of the next label paper to start printing. Label size and gap need to be set before this command;Paper height greater than or equal to 30 mm

#### Returns

`void`

#### Implementation of

[TsplLibInterface](../interfaces/interface_TsplLib.TsplLibInterface.md).[setHome](../interfaces/interface_TsplLib.TsplLibInterface.md#sethome)

#### Defined in

[components/tspl/index.ts:115](https://github.com/17562105692/printease/blob/08cf583/src/components/tspl/index.ts#L115)

___

### setLimitFeed

▸ **setLimitFeed**(`m`): `void`

@description: When setting the printer to feed paper, if the vertical distance cannot be detected after the set length, the printer will generate an error and stop paper feeding.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | `number` | unit mm |

#### Returns

`void`

#### Implementation of

[TsplLibInterface](../interfaces/interface_TsplLib.TsplLibInterface.md).[setLimitFeed](../interfaces/interface_TsplLib.TsplLibInterface.md#setlimitfeed)

#### Defined in

[components/tspl/index.ts:125](https://github.com/17562105692/printease/blob/08cf583/src/components/tspl/index.ts#L125)

___

### setNewLine

▸ **setNewLine**(): `void`

@description: Instruction wrapping, called by default, if not necessary, do not need to call

#### Returns

`void`

#### Implementation of

[TsplLibInterface](../interfaces/interface_TsplLib.TsplLibInterface.md).[setNewLine](../interfaces/interface_TsplLib.TsplLibInterface.md#setnewline)

#### Defined in

[components/tspl/index.ts:175](https://github.com/17562105692/printease/blob/08cf583/src/components/tspl/index.ts#L175)

___

### setOffset

▸ **setOffset**(`m`): `void`

@description: Control the stop position of each label in peel-off mode. When printing the next sheet, the printer will compensate the part that was pushed out more or less by pulling back. This command is only available in strip mode

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | `number` | paper stop distance, unit (mm) |

#### Returns

`void`

#### Implementation of

[TsplLibInterface](../interfaces/interface_TsplLib.TsplLibInterface.md).[setOffset](../interfaces/interface_TsplLib.TsplLibInterface.md#setoffset)

#### Defined in

[components/tspl/index.ts:60](https://github.com/17562105692/printease/blob/08cf583/src/components/tspl/index.ts#L60)

___

### setPrint

▸ **setPrint**(`m?`, `n?`): `void`

@description: execute print

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `m` | `number` | `1` | Specify the number of copies to print;1≤m≤65535 |
| `n` | `number` | `1` | The number of sheets to be printed repeatedly per label;1≤n≤65535 |

#### Returns

`void`

#### Implementation of

[TsplLibInterface](../interfaces/interface_TsplLib.TsplLibInterface.md).[setPrint](../interfaces/interface_TsplLib.TsplLibInterface.md#setprint)

#### Defined in

[components/tspl/index.ts:170](https://github.com/17562105692/printease/blob/08cf583/src/components/tspl/index.ts#L170)

___

### setPutBmp

▸ **setPutBmp**(`x`, `y`, `fileName`): `void`

@description: Print monochrome BMP image files

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The coordinates of the starting point in the horizontal direction, expressed in dots |
| `y` | `number` | The coordinates of the starting point in the vertical direction, expressed in dots |
| `fileName` | `string` | The name of the file to be printed (need to be downloaded in the printer cache) |

#### Returns

`void`

#### Implementation of

[TsplLibInterface](../interfaces/interface_TsplLib.TsplLibInterface.md).[setPutBmp](../interfaces/interface_TsplLib.TsplLibInterface.md#setputbmp)

#### Defined in

[components/tspl/index.ts:145](https://github.com/17562105692/printease/blob/08cf583/src/components/tspl/index.ts#L145)

___

### setPutPcx

▸ **setPutPcx**(`x`, `y`, `fileName`): `void`

@description: Print monochrome PCX format picture files

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The coordinates of the starting point in the horizontal direction, expressed in dots |
| `y` | `number` | The coordinates of the starting point in the vertical direction, expressed in dots |
| `fileName` | `string` | The name of the file to be printed (need to be downloaded in the printer cache) |

#### Returns

`void`

#### Implementation of

[TsplLibInterface](../interfaces/interface_TsplLib.TsplLibInterface.md).[setPutPcx](../interfaces/interface_TsplLib.TsplLibInterface.md#setputpcx)

#### Defined in

[components/tspl/index.ts:150](https://github.com/17562105692/printease/blob/08cf583/src/components/tspl/index.ts#L150)

___

### setQRCode

▸ **setQRCode**(`x`, `y`, `ecc`, `cellWidth`, `mode`, `rotation`, `content`): `void`

@description: This command is used to print the QR code

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The coordinates of the starting point in the horizontal direction of the QR code |
| `y` | `number` | The coordinates of the starting point in the vertical direction of the QR code |
| `ecc` | `string` | Select QRCODE Error Correction Level:L 7% M 15% Q 25% H 30% |
| `cellWidth` | `number` | QR code width 1-10 |
| `mode` | `string` | manual/automatic coding:A Auto M Manual |
| `rotation` | `number` | Rotation angle (clockwise):0 0 degrees 90 90 degrees 180 180 degrees 270 270 degrees |
| `content` | `string` | QR code content |

#### Returns

`void`

**`Example`**

```ts
setQRCode(10, 10, 'L', 5, 'A', 0, '123456789')
```

#### Implementation of

[TsplLibInterface](../interfaces/interface_TsplLib.TsplLibInterface.md).[setQRCode](../interfaces/interface_TsplLib.TsplLibInterface.md#setqrcode)

#### Defined in

[components/tspl/index.ts:165](https://github.com/17562105692/printease/blob/08cf583/src/components/tspl/index.ts#L165)

___

### setReference

▸ **setReference**(`x`, `y`): `void`

@description: Define the reference coordinate origin of the label

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The coordinate position in the horizontal direction, unit dot |
| `y` | `number` | Coordinate position in the vertical direction, unit dot |

#### Returns

`void`

#### Implementation of

[TsplLibInterface](../interfaces/interface_TsplLib.TsplLibInterface.md).[setReference](../interfaces/interface_TsplLib.TsplLibInterface.md#setreference)

#### Defined in

[components/tspl/index.ts:80](https://github.com/17562105692/printease/blob/08cf583/src/components/tspl/index.ts#L80)

___

### setReverse

▸ **setReverse**(`x_start`, `y_start`, `x_width`, `y_height`): `void`

@description: Print the specified area in reverse

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x_start` | `number` | The X coordinate of the upper left corner of the reverse area, unit dot |
| `y_start` | `number` | The Y coordinate of the upper left corner of the reverse area, unit dot |
| `x_width` | `number` | Reverse area width, unit dot |
| `y_height` | `number` | Reverse area height, unit dot |

#### Returns

`void`

#### Implementation of

[TsplLibInterface](../interfaces/interface_TsplLib.TsplLibInterface.md).[setReverse](../interfaces/interface_TsplLib.TsplLibInterface.md#setreverse)

#### Defined in

[components/tspl/index.ts:160](https://github.com/17562105692/printease/blob/08cf583/src/components/tspl/index.ts#L160)

___

### setSize

▸ **setSize**(`width`, `height`): `void`

@description: Set the width and length of the label paper

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `width` | `number` | Width of label paper (without backing paper) |
| `height` | `number` | Height of label paper (without backing paper) |

#### Returns

`void`

#### Implementation of

[TsplLibInterface](../interfaces/interface_TsplLib.TsplLibInterface.md).[setSize](../interfaces/interface_TsplLib.TsplLibInterface.md#setsize)

#### Defined in

[components/tspl/index.ts:22](https://github.com/17562105692/printease/blob/08cf583/src/components/tspl/index.ts#L22)

___

### setSound

▸ **setSound**(`m`, `n`): `void`

@description: This command is used to control the frequency of the buzzer, and 10 levels of sound can be set, and the length of each level of sound is controlled by the second parameter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | `number` | Scale: 0-9 |
| `n` | `number` | Interval time: 1-4095 |

#### Returns

`void`

#### Implementation of

[TsplLibInterface](../interfaces/interface_TsplLib.TsplLibInterface.md).[setSound](../interfaces/interface_TsplLib.TsplLibInterface.md#setsound)

#### Defined in

[components/tspl/index.ts:120](https://github.com/17562105692/printease/blob/08cf583/src/components/tspl/index.ts#L120)

___

### setSpeed

▸ **setSpeed**(`m`): `void`

@description: Control print speed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | `number` | set print speed（For example: 2.0 sets the printing speed to 2.0”/sec） |

#### Returns

`void`

#### Implementation of

[TsplLibInterface](../interfaces/interface_TsplLib.TsplLibInterface.md).[setSpeed](../interfaces/interface_TsplLib.TsplLibInterface.md#setspeed)

#### Defined in

[components/tspl/index.ts:65](https://github.com/17562105692/printease/blob/08cf583/src/components/tspl/index.ts#L65)

___

### setText

▸ **setText**(`x`, `y`, `font`, `rotation`, `x_multiplication`, `y_multiplication`, `text`): `void`

@description: string msg

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The coordinates of the starting point of the text in the X direction |
| `y` | `number` | The coordinates of the starting point of the text in the Y direction |
| `font` | `string` | 1 8×12 dot Alphanumeric Font 2 12×20 dot Alphanumeric Font 3 16×24 dot Alphanumeric Font 4 24×32 dot Alphanumeric Font 5 32×48 dot Alphanumeric Font 6 14×19 dot Alphanumeric Font OCR- B 7 21×27 dot Alphanumeric font OCR-B 8 14×25 dot Alphanumeric font OCR-A 9 9×17 dot Alphanumeric font 10 12×24 dot Alphanumeric font TST24.BF2 Traditional Chinese 24×24Font (big five code) TSS24.BF2 Simplified Chinese 24×24Font (GB code) K Korean 24×24Font (KS code) rotation Text rotation angle (clockwise) 0 0 degrees 90 90 degrees 180 180 degrees 270 270 degrees |
| `rotation` | `number` | Text rotation angle (clockwise) |
| `x_multiplication` | `number` | X direction magnification 1-10 |
| `y_multiplication` | `number` | Y direction magnification 1-10 |
| `text` | `string` |  |

#### Returns

`void`

#### Implementation of

[TsplLibInterface](../interfaces/interface_TsplLib.TsplLibInterface.md).[setText](../interfaces/interface_TsplLib.TsplLibInterface.md#settext)

#### Defined in

[components/tspl/index.ts:45](https://github.com/17562105692/printease/blob/08cf583/src/components/tspl/index.ts#L45)

___

### stringToCharCodeArray

▸ **stringToCharCodeArray**(`str`): `number`[]

@description: string to charCode array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | string data |

#### Returns

`number`[]

charCode array

#### Implementation of

[TsplLibInterface](../interfaces/interface_TsplLib.TsplLibInterface.md).[stringToCharCodeArray](../interfaces/interface_TsplLib.TsplLibInterface.md#stringtocharcodearray)

#### Defined in

[components/tspl/index.ts:19](https://github.com/17562105692/printease/blob/08cf583/src/components/tspl/index.ts#L19)
