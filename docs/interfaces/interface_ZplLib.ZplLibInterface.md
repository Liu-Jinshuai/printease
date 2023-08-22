[printease](../README.md) / [Modules](../modules.md) / [interface/ZplLib](../modules/interface_ZplLib.md) / ZplLibInterface

# Interface: ZplLibInterface

[interface/ZplLib](../modules/interface_ZplLib.md).ZplLibInterface

## Implemented by

- [`ZplLib`](../classes/components_zpl.ZplLib.md)

## Table of contents

### Properties

- [command](interface_ZplLib.ZplLibInterface.md#command)
- [encoding](interface_ZplLib.ZplLibInterface.md#encoding)
- [init](interface_ZplLib.ZplLibInterface.md#init)
- [setBarCode](interface_ZplLib.ZplLibInterface.md#setbarcode)
- [setEncoding](interface_ZplLib.ZplLibInterface.md#setencoding)
- [setPrint](interface_ZplLib.ZplLibInterface.md#setprint)
- [setQRCode](interface_ZplLib.ZplLibInterface.md#setqrcode)
- [setText](interface_ZplLib.ZplLibInterface.md#settext)

## Properties

### command

• **command**: `number`[]

@description: command array

#### Defined in

[interface/ZplLib.ts:9](https://github.com/Liu-Jinshuai/printease/blob/cd89e37/src/interface/ZplLib.ts#L9)

___

### encoding

• **encoding**: `string`

@description: Encoding method, default utf-8

#### Defined in

[interface/ZplLib.ts:5](https://github.com/Liu-Jinshuai/printease/blob/cd89e37/src/interface/ZplLib.ts#L5)

___

### init

• **init**: () => `void`

#### Type declaration

▸ (): `void`

@description: init the command

##### Returns

`void`

#### Defined in

[interface/ZplLib.ts:15](https://github.com/Liu-Jinshuai/printease/blob/cd89e37/src/interface/ZplLib.ts#L15)

___

### setBarCode

• **setBarCode**: (`x`: `number`, `y`: `number`, `width`: `number`, `height`: `number`, `data`: `string`, `o`: `string`, `e`: `string`, `f`: `string`, `g`: `string`) => `void`

#### Type declaration

▸ (`x`, `y`, `width`, `height`, `data`, `o`, `e`, `f`, `g`): `void`

##### Parameters

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

##### Returns

`void`

**`Description`**

Print the barcode.

#### Defined in

[interface/ZplLib.ts:39](https://github.com/Liu-Jinshuai/printease/blob/cd89e37/src/interface/ZplLib.ts#L39)

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

[interface/ZplLib.ts:62](https://github.com/Liu-Jinshuai/printease/blob/cd89e37/src/interface/ZplLib.ts#L62)

___

### setPrint

• **setPrint**: () => `void`

#### Type declaration

▸ (): `void`

@description: execute print

##### Returns

`void`

#### Defined in

[interface/ZplLib.ts:19](https://github.com/Liu-Jinshuai/printease/blob/cd89e37/src/interface/ZplLib.ts#L19)

___

### setQRCode

• **setQRCode**: (`x`: `number`, `y`: `number`, `data`: `string`, `model`: `number`, `c`: `number`, `d`: `string`, `e`: `string`) => `void`

#### Type declaration

▸ (`x`, `y`, `data`, `model`, `c`, `d`, `e`): `void`

@description: print QR code

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | x start position |
| `y` | `number` | y start position |
| `data` | `string` | the text to print |
| `model` | `number` | Values: 1 (original) and 2 (enhanced – recommended) Default: 2 |
| `c` | `number` | Values:1 to 10 Default:1 on 150 dpi printers ;2 on 200 dpi printers ;3 on 300 dpi printers ;6 on 600 dpi printers |
| `d` | `string` | Values: H = ultra-high reliability level Q = high reliability level M = standard level L = high density level Default: Q = if emptyM = invalid values |
| `e` | `string` | Values: 0 - 7 Default: 7 |

##### Returns

`void`

#### Defined in

[interface/ZplLib.ts:56](https://github.com/Liu-Jinshuai/printease/blob/cd89e37/src/interface/ZplLib.ts#L56)

___

### setText

• **setText**: (`x`: `number`, `y`: `number`, `data`: `string`) => `void`

#### Type declaration

▸ (`x`, `y`, `data`): `void`

@description: set text

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | x start position |
| `y` | `number` | y start position |
| `data` | `string` | the text to print |

##### Returns

`void`

#### Defined in

[interface/ZplLib.ts:26](https://github.com/Liu-Jinshuai/printease/blob/cd89e37/src/interface/ZplLib.ts#L26)
