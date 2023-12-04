[printease](../README.md) / [Modules](../modules.md) / [components/cpcl](../modules/components_cpcl.md) / CpclLib

# Class: CpclLib

[components/cpcl](../modules/components_cpcl.md).CpclLib

## Implements

- [`CpclLibInterface`](../interfaces/interface_CpclLib.CpclLibInterface.md)

## Table of contents

### Constructors

- [constructor](components_cpcl.CpclLib.md#constructor)

### Properties

- [NEW\_LINE](components_cpcl.CpclLib.md#new_line)
- [command](components_cpcl.CpclLib.md#command)
- [encoding](components_cpcl.CpclLib.md#encoding)

### Methods

- [getBuffer](components_cpcl.CpclLib.md#getbuffer)
- [getCommand](components_cpcl.CpclLib.md#getcommand)
- [init](components_cpcl.CpclLib.md#init)
- [labelInit](components_cpcl.CpclLib.md#labelinit)
- [setBag](components_cpcl.CpclLib.md#setbag)
- [setBarCode](components_cpcl.CpclLib.md#setbarcode)
- [setBold](components_cpcl.CpclLib.md#setbold)
- [setCommand](components_cpcl.CpclLib.md#setcommand)
- [setNewLine](components_cpcl.CpclLib.md#setnewline)
- [setPrint](components_cpcl.CpclLib.md#setprint)
- [setText](components_cpcl.CpclLib.md#settext)
- [stringToCharCodeArray](components_cpcl.CpclLib.md#stringtocharcodearray)
- [stringToEncodedBytes](components_cpcl.CpclLib.md#stringtoencodedbytes)

## Constructors

### constructor

• **new CpclLib**()

#### Defined in

[components/cpcl/index.ts:8](https://github.com/Liu-Jinshuai/printease/blob/a0e1aa3/src/components/cpcl/index.ts#L8)

## Properties

### NEW\_LINE

• **NEW\_LINE**: `string`

#### Defined in

[components/cpcl/index.ts:6](https://github.com/Liu-Jinshuai/printease/blob/a0e1aa3/src/components/cpcl/index.ts#L6)

___

### command

• **command**: `number`[]

@description: command array

#### Implementation of

[CpclLibInterface](../interfaces/interface_CpclLib.CpclLibInterface.md).[command](../interfaces/interface_CpclLib.CpclLibInterface.md#command)

#### Defined in

[components/cpcl/index.ts:5](https://github.com/Liu-Jinshuai/printease/blob/a0e1aa3/src/components/cpcl/index.ts#L5)

___

### encoding

• **encoding**: `string`

@description: Encoding method, default utf-8

#### Implementation of

[CpclLibInterface](../interfaces/interface_CpclLib.CpclLibInterface.md).[encoding](../interfaces/interface_CpclLib.CpclLibInterface.md#encoding)

#### Defined in

[components/cpcl/index.ts:7](https://github.com/Liu-Jinshuai/printease/blob/a0e1aa3/src/components/cpcl/index.ts#L7)

## Methods

### getBuffer

▸ **getBuffer**(): `ArrayBuffer`

#### Returns

`ArrayBuffer`

#### Defined in

[components/cpcl/index.ts:68](https://github.com/Liu-Jinshuai/printease/blob/a0e1aa3/src/components/cpcl/index.ts#L68)

___

### getCommand

▸ **getCommand**(): `number`[]

#### Returns

`number`[]

#### Defined in

[components/cpcl/index.ts:65](https://github.com/Liu-Jinshuai/printease/blob/a0e1aa3/src/components/cpcl/index.ts#L65)

___

### init

▸ **init**(): `void`

@description: init the command

#### Returns

`void`

#### Implementation of

[CpclLibInterface](../interfaces/interface_CpclLib.CpclLibInterface.md).[init](../interfaces/interface_CpclLib.CpclLibInterface.md#init)

#### Defined in

[components/cpcl/index.ts:13](https://github.com/Liu-Jinshuai/printease/blob/a0e1aa3/src/components/cpcl/index.ts#L13)

___

### labelInit

▸ **labelInit**(`offset?`, `landscapeDPI?`, `portraitDPI?`, `height?`): `void`

@description: Label Initialization Directive

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `offset` | `number` | `0` | label horizontal offset (default 0) |
| `landscapeDPI` | `number` | `200` | Landscape DPI (default 200) |
| `portraitDPI` | `number` | `200` | Portrait DPI (default 200) |
| `height` | `number` | `40` | label height (default 40) |

#### Returns

`void`

#### Implementation of

[CpclLibInterface](../interfaces/interface_CpclLib.CpclLibInterface.md).[labelInit](../interfaces/interface_CpclLib.CpclLibInterface.md#labelinit)

#### Defined in

[components/cpcl/index.ts:24](https://github.com/Liu-Jinshuai/printease/blob/a0e1aa3/src/components/cpcl/index.ts#L24)

___

### setBag

▸ **setBag**(`x`, `y`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | Width magnification, effective magnification is 1 to 16 |
| `y` | `number` | Height magnification, effective magnification is 1 to 16 |

#### Returns

`void`

**`Description`**

Enlarge the resident font by the specified magnification factor

#### Implementation of

[CpclLibInterface](../interfaces/interface_CpclLib.CpclLibInterface.md).[setBag](../interfaces/interface_CpclLib.CpclLibInterface.md#setbag)

#### Defined in

[components/cpcl/index.ts:34](https://github.com/Liu-Jinshuai/printease/blob/a0e1aa3/src/components/cpcl/index.ts#L34)

___

### setBarCode

▸ **setBarCode**(`printDirection`, `type`, `width`, `ratio`, `height`, `x`, `y`, `data`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `printDirection` | `number` | 0:landscape printing 1:vertical print |
| `type` | `string` | UPCA UPC-A 2:1 2 ;UPCE UPC-E 2:1 2 ;EAN13 EAN/JAN-13 2:1 2 ;EAN8 EAN/JAN-8 2:1 2 ;39 Code39 2.5:1 2 ;93 Code93/Ext.93 1.5:1 1 ;128 Code128 N/A 2 ;CODABAR Codabar 2.5:1 2 |
| `width` | `number` | width of the barcode |
| `ratio` | `number` | ratio of the barcode(0 1.5:1 ;1 2.0:1 ;2 2.5:1 ;3 3.0:1 ;4 3.5:1 ;20 2.0:1 ;21 2.1:1 ;22 2.2:1 ;23 2.3:1 ;24 2.4:1 ;25 2.5:1 ;26 2.6:1 ;27 2.7:1 ;28 2.8:1 ;29 2.9:1 ;30 3.0:1) |
| `height` | `number` | height of the barcode |
| `x` | `number` | horizontal start position |
| `y` | `number` | vertical start position |
| `data` | `string` | barcode data |

#### Returns

`void`

**`Description`**

Print the barcode.

#### Implementation of

[CpclLibInterface](../interfaces/interface_CpclLib.CpclLibInterface.md).[setBarCode](../interfaces/interface_CpclLib.CpclLibInterface.md#setbarcode)

#### Defined in

[components/cpcl/index.ts:44](https://github.com/Liu-Jinshuai/printease/blob/a0e1aa3/src/components/cpcl/index.ts#L44)

___

### setBold

▸ **setBold**(`bold`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bold` | `boolean` | 1: bold, 0: not bold |

#### Returns

`void`

**`Description`**

Bold the resident font

#### Implementation of

[CpclLibInterface](../interfaces/interface_CpclLib.CpclLibInterface.md).[setBold](../interfaces/interface_CpclLib.CpclLibInterface.md#setbold)

#### Defined in

[components/cpcl/index.ts:39](https://github.com/Liu-Jinshuai/printease/blob/a0e1aa3/src/components/cpcl/index.ts#L39)

___

### setCommand

▸ **setCommand**(`command`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` \| `number`[] |

#### Returns

`void`

#### Defined in

[components/cpcl/index.ts:58](https://github.com/Liu-Jinshuai/printease/blob/a0e1aa3/src/components/cpcl/index.ts#L58)

___

### setNewLine

▸ **setNewLine**(): `void`

#### Returns

`void`

#### Defined in

[components/cpcl/index.ts:55](https://github.com/Liu-Jinshuai/printease/blob/a0e1aa3/src/components/cpcl/index.ts#L55)

___

### setPrint

▸ **setPrint**(): `void`

@description: execute print

#### Returns

`void`

#### Implementation of

[CpclLibInterface](../interfaces/interface_CpclLib.CpclLibInterface.md).[setPrint](../interfaces/interface_CpclLib.CpclLibInterface.md#setprint)

#### Defined in

[components/cpcl/index.ts:50](https://github.com/Liu-Jinshuai/printease/blob/a0e1aa3/src/components/cpcl/index.ts#L50)

___

### setText

▸ **setText**(`command`, `font`, `size`, `x`, `y`, `data`): `void`

@description: set text

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `string` | TEXT (or T) Prints text in landscape orientation. VTEXT (or VT) Rotates 90 degrees counterclockwise to print text in portrait orientation. TEXT90 (or T90) (Same as VTEXT.) TEXT180 (or T180) Rotate 80 degrees counterclockwise, reverse the printed text. TEXT270 (or T270) Rotate counterclockwise 270 |
| `font` | `string` | 0 12*24 24*24 Simplified Chinese GB18030 1 9*17 24*24 Simplified Chinese GB18030 2 12*24 24*24 Simplified Chinese GB18030 3 10*20 20*20 Simplified Chinese GBK 4 16*32 32*32 Simplified Chinese GBK 5 9*17 24*24 Simplified Chinese GB18030 6 12*24 7 12*24 24*24 Simplified Chinese GB18030 8 12*24 24*24 Simplified Chinese GB18030 10 24*48 48*48 Simplified Chinese GBK 11 8*16 24* 24 Simplified Chinese GB18030 13 12*24 24*24 Traditional Chinese BIG5 20 8*16 16*16 Simplified Chinese GB18030 24 12*24 24*24 Simplified Chinese GB18030 41 8*12 42 12*20 43 16*24 44 24*32 45 32*48 46 14*19 47 21*27 48 14*25 49 28*56 55 8*16 16*16 Simplified Chinese GB18030 |
| `size` | `number` | any number |
| `x` | `number` | Horizontal starting position |
| `y` | `number` | vertical start position |
| `data` | `string` | the text to print |

#### Returns

`void`

#### Implementation of

[CpclLibInterface](../interfaces/interface_CpclLib.CpclLibInterface.md).[setText](../interfaces/interface_CpclLib.CpclLibInterface.md#settext)

#### Defined in

[components/cpcl/index.ts:29](https://github.com/Liu-Jinshuai/printease/blob/a0e1aa3/src/components/cpcl/index.ts#L29)

___

### stringToCharCodeArray

▸ **stringToCharCodeArray**(`str`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`number`[]

#### Defined in

[components/cpcl/index.ts:20](https://github.com/Liu-Jinshuai/printease/blob/a0e1aa3/src/components/cpcl/index.ts#L20)

___

### stringToEncodedBytes

▸ **stringToEncodedBytes**(`str`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`number`[]

#### Defined in

[components/cpcl/index.ts:16](https://github.com/Liu-Jinshuai/printease/blob/a0e1aa3/src/components/cpcl/index.ts#L16)
