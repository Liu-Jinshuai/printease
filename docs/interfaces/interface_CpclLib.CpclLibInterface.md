[printease](../README.md) / [Modules](../modules.md) / [interface/CpclLib](../modules/interface_CpclLib.md) / CpclLibInterface

# Interface: CpclLibInterface

[interface/CpclLib](../modules/interface_CpclLib.md).CpclLibInterface

## Implemented by

- [`CpclLib`](../classes/components_cpcl.CpclLib.md)

## Table of contents

### Properties

- [command](interface_CpclLib.CpclLibInterface.md#command)
- [encoding](interface_CpclLib.CpclLibInterface.md#encoding)
- [init](interface_CpclLib.CpclLibInterface.md#init)
- [labelInit](interface_CpclLib.CpclLibInterface.md#labelinit)
- [setBag](interface_CpclLib.CpclLibInterface.md#setbag)
- [setBarCode](interface_CpclLib.CpclLibInterface.md#setbarcode)
- [setBold](interface_CpclLib.CpclLibInterface.md#setbold)
- [setPrint](interface_CpclLib.CpclLibInterface.md#setprint)
- [setText](interface_CpclLib.CpclLibInterface.md#settext)

## Properties

### command

• **command**: `number`[]

@description: command array

#### Defined in

[interface/CpclLib.ts:9](https://github.com/Liu-Jinshuai/printease/blob/ea3e8cb/src/interface/CpclLib.ts#L9)

___

### encoding

• **encoding**: `string`

@description: Encoding method, default utf-8

#### Defined in

[interface/CpclLib.ts:5](https://github.com/Liu-Jinshuai/printease/blob/ea3e8cb/src/interface/CpclLib.ts#L5)

___

### init

• **init**: () => `void`

#### Type declaration

▸ (): `void`

@description: init the command

##### Returns

`void`

#### Defined in

[interface/CpclLib.ts:15](https://github.com/Liu-Jinshuai/printease/blob/ea3e8cb/src/interface/CpclLib.ts#L15)

___

### labelInit

• **labelInit**: (`offset`: `number`, `landscapeDPI`: `number`, `portraitDPI`: `number`, `height`: `number`) => `void`

#### Type declaration

▸ (`offset`, `landscapeDPI`, `portraitDPI`, `height`): `void`

@description: Label Initialization Directive

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset` | `number` | label horizontal offset (default 0) |
| `landscapeDPI` | `number` | Landscape DPI (default 200) |
| `portraitDPI` | `number` | Portrait DPI (default 200) |
| `height` | `number` | label height (default 40) |

##### Returns

`void`

#### Defined in

[interface/CpclLib.ts:23](https://github.com/Liu-Jinshuai/printease/blob/ea3e8cb/src/interface/CpclLib.ts#L23)

___

### setBag

• **setBag**: (`x`: `number`, `y`: `number`) => `void`

#### Type declaration

▸ (`x`, `y`): `void`

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | Width magnification, effective magnification is 1 to 16 |
| `y` | `number` | Height magnification, effective magnification is 1 to 16 |

##### Returns

`void`

**`Description`**

Enlarge the resident font by the specified magnification factor

#### Defined in

[interface/CpclLib.ts:45](https://github.com/Liu-Jinshuai/printease/blob/ea3e8cb/src/interface/CpclLib.ts#L45)

___

### setBarCode

• **setBarCode**: (`printDirection`: `number`, `type`: `string`, `width`: `number`, `ratio`: `number`, `height`: `number`, `x`: `number`, `y`: `number`, `data`: `string`) => `void`

#### Type declaration

▸ (`printDirection`, `type`, `width`, `ratio`, `height`, `x`, `y`, `data`): `void`

##### Parameters

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

##### Returns

`void`

**`Description`**

Print the barcode.

#### Defined in

[interface/CpclLib.ts:64](https://github.com/Liu-Jinshuai/printease/blob/ea3e8cb/src/interface/CpclLib.ts#L64)

___

### setBold

• **setBold**: (`bold`: `boolean`) => `void`

#### Type declaration

▸ (`bold`): `void`

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bold` | `boolean` | 1: bold, 0: not bold |

##### Returns

`void`

**`Description`**

Bold the resident font

#### Defined in

[interface/CpclLib.ts:51](https://github.com/Liu-Jinshuai/printease/blob/ea3e8cb/src/interface/CpclLib.ts#L51)

___

### setPrint

• **setPrint**: () => `void`

#### Type declaration

▸ (): `void`

@description: execute print

##### Returns

`void`

#### Defined in

[interface/CpclLib.ts:27](https://github.com/Liu-Jinshuai/printease/blob/ea3e8cb/src/interface/CpclLib.ts#L27)

___

### setText

• **setText**: (`command`: `string`, `font`: `string`, `size`: `number`, `x`: `number`, `y`: `number`, `data`: `string`) => `void`

#### Type declaration

▸ (`command`, `font`, `size`, `x`, `y`, `data`): `void`

@description: set text

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `string` | TEXT (or T) Prints text in landscape orientation. VTEXT (or VT) Rotates 90 degrees counterclockwise to print text in portrait orientation. TEXT90 (or T90) (Same as VTEXT.) TEXT180 (or T180) Rotate 80 degrees counterclockwise, reverse the printed text. TEXT270 (or T270) Rotate counterclockwise 270 |
| `font` | `string` | 0 12*24 24*24 Simplified Chinese GB18030 1 9*17 24*24 Simplified Chinese GB18030 2 12*24 24*24 Simplified Chinese GB18030 3 10*20 20*20 Simplified Chinese GBK 4 16*32 32*32 Simplified Chinese GBK 5 9*17 24*24 Simplified Chinese GB18030 6 12*24 7 12*24 24*24 Simplified Chinese GB18030 8 12*24 24*24 Simplified Chinese GB18030 10 24*48 48*48 Simplified Chinese GBK 11 8*16 24* 24 Simplified Chinese GB18030 13 12*24 24*24 Traditional Chinese BIG5 20 8*16 16*16 Simplified Chinese GB18030 24 12*24 24*24 Simplified Chinese GB18030 41 8*12 42 12*20 43 16*24 44 24*32 45 32*48 46 14*19 47 21*27 48 14*25 49 28*56 55 8*16 16*16 Simplified Chinese GB18030 |
| `size` | `number` | any number |
| `x` | `number` | Horizontal starting position |
| `y` | `number` | vertical start position |
| `data` | `string` | the text to print |

##### Returns

`void`

#### Defined in

[interface/CpclLib.ts:38](https://github.com/Liu-Jinshuai/printease/blob/ea3e8cb/src/interface/CpclLib.ts#L38)
