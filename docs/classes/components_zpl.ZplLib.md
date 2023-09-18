[printease](../README.md) / [Modules](../modules.md) / [components/zpl](../modules/components_zpl.md) / ZplLib

# Class: ZplLib

[components/zpl](../modules/components_zpl.md).ZplLib

## Implements

- [`ZplLibInterface`](../interfaces/interface_ZplLib.ZplLibInterface.md)

## Table of contents

### Constructors

- [constructor](components_zpl.ZplLib.md#constructor)

### Properties

- [NEW\_LINE](components_zpl.ZplLib.md#new_line)
- [command](components_zpl.ZplLib.md#command)
- [encoding](components_zpl.ZplLib.md#encoding)

### Methods

- [getBuffer](components_zpl.ZplLib.md#getbuffer)
- [getCommand](components_zpl.ZplLib.md#getcommand)
- [init](components_zpl.ZplLib.md#init)
- [setBarCode](components_zpl.ZplLib.md#setbarcode)
- [setCommand](components_zpl.ZplLib.md#setcommand)
- [setEncoding](components_zpl.ZplLib.md#setencoding)
- [setNewLine](components_zpl.ZplLib.md#setnewline)
- [setPrint](components_zpl.ZplLib.md#setprint)
- [setQRCode](components_zpl.ZplLib.md#setqrcode)
- [setText](components_zpl.ZplLib.md#settext)
- [stringToCharCodeArray](components_zpl.ZplLib.md#stringtocharcodearray)
- [stringToEncodedBytes](components_zpl.ZplLib.md#stringtoencodedbytes)

## Constructors

### constructor

• **new ZplLib**()

#### Defined in

[components/zpl/index.ts:8](https://github.com/Liu-Jinshuai/printease/blob/ba33e13/src/components/zpl/index.ts#L8)

## Properties

### NEW\_LINE

• **NEW\_LINE**: `string`

#### Defined in

[components/zpl/index.ts:6](https://github.com/Liu-Jinshuai/printease/blob/ba33e13/src/components/zpl/index.ts#L6)

___

### command

• **command**: `number`[]

@description: command array

#### Implementation of

[ZplLibInterface](../interfaces/interface_ZplLib.ZplLibInterface.md).[command](../interfaces/interface_ZplLib.ZplLibInterface.md#command)

#### Defined in

[components/zpl/index.ts:5](https://github.com/Liu-Jinshuai/printease/blob/ba33e13/src/components/zpl/index.ts#L5)

___

### encoding

• **encoding**: `string`

@description: Encoding method, default utf-8

#### Implementation of

[ZplLibInterface](../interfaces/interface_ZplLib.ZplLibInterface.md).[encoding](../interfaces/interface_ZplLib.ZplLibInterface.md#encoding)

#### Defined in

[components/zpl/index.ts:7](https://github.com/Liu-Jinshuai/printease/blob/ba33e13/src/components/zpl/index.ts#L7)

## Methods

### getBuffer

▸ **getBuffer**(): `ArrayBuffer`

#### Returns

`ArrayBuffer`

#### Defined in

[components/zpl/index.ts:79](https://github.com/Liu-Jinshuai/printease/blob/ba33e13/src/components/zpl/index.ts#L79)

___

### getCommand

▸ **getCommand**(): `number`[]

#### Returns

`number`[]

#### Defined in

[components/zpl/index.ts:76](https://github.com/Liu-Jinshuai/printease/blob/ba33e13/src/components/zpl/index.ts#L76)

___

### init

▸ **init**(): `void`

@description: init the command

#### Returns

`void`

#### Implementation of

[ZplLibInterface](../interfaces/interface_ZplLib.ZplLibInterface.md).[init](../interfaces/interface_ZplLib.ZplLibInterface.md#init)

#### Defined in

[components/zpl/index.ts:13](https://github.com/Liu-Jinshuai/printease/blob/ba33e13/src/components/zpl/index.ts#L13)

___

### setBarCode

▸ **setBarCode**(`x`, `y`, `width`, `height`, `data`, `o`, `e`, `f`, `g`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | x start position |
| `y` | `number` | y start position |
| `width` | `number` | width of the bar code(in dots) |
| `height` | `number` | height of the bar code(in dots) |
| `data` | `string` | the text to print |
| `o` | `string` | (orientation) N = normal R = rotated 90 degrees (clockwise) I = inverted 180 degrees B = read from bottom up, 270 degrees |
| `e` | `string` | (print check digit) N = no Y = yes |
| `f` | `string` | (print interpretation line) N = no Y = yes |
| `g` | `string` | (print interpretation line above code) N = no Y = yes |

#### Returns

`void`

**`Description`**

Print the barcode.

#### Implementation of

[ZplLibInterface](../interfaces/interface_ZplLib.ZplLibInterface.md).[setBarCode](../interfaces/interface_ZplLib.ZplLibInterface.md#setbarcode)

#### Defined in

[components/zpl/index.ts:33](https://github.com/Liu-Jinshuai/printease/blob/ba33e13/src/components/zpl/index.ts#L33)

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

[components/zpl/index.ts:66](https://github.com/Liu-Jinshuai/printease/blob/ba33e13/src/components/zpl/index.ts#L66)

___

### setEncoding

▸ **setEncoding**(`encoding`): `void`

@description: Set encoding type

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encoding` | `string` | encoding type |

#### Returns

`void`

#### Implementation of

[ZplLibInterface](../interfaces/interface_ZplLib.ZplLibInterface.md).[setEncoding](../interfaces/interface_ZplLib.ZplLibInterface.md#setencoding)

#### Defined in

[components/zpl/index.ts:73](https://github.com/Liu-Jinshuai/printease/blob/ba33e13/src/components/zpl/index.ts#L73)

___

### setNewLine

▸ **setNewLine**(): `void`

#### Returns

`void`

#### Defined in

[components/zpl/index.ts:63](https://github.com/Liu-Jinshuai/printease/blob/ba33e13/src/components/zpl/index.ts#L63)

___

### setPrint

▸ **setPrint**(): `void`

@description: execute print

#### Returns

`void`

#### Implementation of

[ZplLibInterface](../interfaces/interface_ZplLib.ZplLibInterface.md).[setPrint](../interfaces/interface_ZplLib.ZplLibInterface.md#setprint)

#### Defined in

[components/zpl/index.ts:58](https://github.com/Liu-Jinshuai/printease/blob/ba33e13/src/components/zpl/index.ts#L58)

___

### setQRCode

▸ **setQRCode**(`x`, `y`, `data`, `model`, `c`, `d`, `e`): `void`

@description: print QR code

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | x start position |
| `y` | `number` | y start position |
| `data` | `string` | the text to print |
| `model` | `number` | Values: 1 (original) and 2 (enhanced – recommended) Default: 2 |
| `c` | `number` | Values:1 to 10 Default:1 on 150 dpi printers ;2 on 200 dpi printers ;3 on 300 dpi printers ;6 on 600 dpi printers |
| `d` | `string` | Values: H = ultra-high reliability level Q = high reliability level M = standard level L = high density level Default: Q = if emptyM = invalid values |
| `e` | `string` | Values: 0 - 7 Default: 7 |

#### Returns

`void`

#### Implementation of

[ZplLibInterface](../interfaces/interface_ZplLib.ZplLibInterface.md).[setQRCode](../interfaces/interface_ZplLib.ZplLibInterface.md#setqrcode)

#### Defined in

[components/zpl/index.ts:47](https://github.com/Liu-Jinshuai/printease/blob/ba33e13/src/components/zpl/index.ts#L47)

___

### setText

▸ **setText**(`x`, `y`, `data`): `void`

@description: set text

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | x start position |
| `y` | `number` | y start position |
| `data` | `string` | the text to print |

#### Returns

`void`

#### Implementation of

[ZplLibInterface](../interfaces/interface_ZplLib.ZplLibInterface.md).[setText](../interfaces/interface_ZplLib.ZplLibInterface.md#settext)

#### Defined in

[components/zpl/index.ts:25](https://github.com/Liu-Jinshuai/printease/blob/ba33e13/src/components/zpl/index.ts#L25)

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

[components/zpl/index.ts:22](https://github.com/Liu-Jinshuai/printease/blob/ba33e13/src/components/zpl/index.ts#L22)

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

[components/zpl/index.ts:18](https://github.com/Liu-Jinshuai/printease/blob/ba33e13/src/components/zpl/index.ts#L18)
