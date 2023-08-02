[print](../README.md) / [Modules](../modules.md) / [components/tspl](../modules/components_tspl.md) / TsplLib

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
- [setBitmap](components_tspl.TsplLib.md#setbitmap)
- [setCls](components_tspl.TsplLib.md#setcls)
- [setGap](components_tspl.TsplLib.md#setgap)
- [setNewLine](components_tspl.TsplLib.md#setnewline)
- [setPrint](components_tspl.TsplLib.md#setprint)
- [setSize](components_tspl.TsplLib.md#setsize)
- [setText](components_tspl.TsplLib.md#settext)
- [stringToCharCodeArray](components_tspl.TsplLib.md#stringtocharcodearray)

## Constructors

### constructor

• **new TsplLib**()

#### Defined in

[components/tspl/index.ts:12](https://github.com/17562105692/printease/blob/f4cf8ae/src/components/tspl/index.ts#L12)

## Properties

### NEW\_LINE

• **NEW\_LINE**: `number`[]

#### Defined in

[components/tspl/index.ts:11](https://github.com/17562105692/printease/blob/f4cf8ae/src/components/tspl/index.ts#L11)

___

### command

• **command**: `number`[]

#### Defined in

[components/tspl/index.ts:10](https://github.com/17562105692/printease/blob/f4cf8ae/src/components/tspl/index.ts#L10)

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

[components/tspl/index.ts:64](https://github.com/17562105692/printease/blob/f4cf8ae/src/components/tspl/index.ts#L64)

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

[components/tspl/index.ts:61](https://github.com/17562105692/printease/blob/f4cf8ae/src/components/tspl/index.ts#L61)

___

### init

▸ **init**(): `void`

@description: init the command

#### Returns

`void`

#### Implementation of

[TsplLibInterface](../interfaces/interface_TsplLib.TsplLibInterface.md).[init](../interfaces/interface_TsplLib.TsplLibInterface.md#init)

#### Defined in

[components/tspl/index.ts:19](https://github.com/17562105692/printease/blob/f4cf8ae/src/components/tspl/index.ts#L19)

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

[components/tspl/index.ts:40](https://github.com/17562105692/printease/blob/f4cf8ae/src/components/tspl/index.ts#L40)

___

### setCls

▸ **setCls**(): `void`

@description: Clear the data of the image buffer

#### Returns

`void`

#### Implementation of

[TsplLibInterface](../interfaces/interface_TsplLib.TsplLibInterface.md).[setCls](../interfaces/interface_TsplLib.TsplLibInterface.md#setcls)

#### Defined in

[components/tspl/index.ts:35](https://github.com/17562105692/printease/blob/f4cf8ae/src/components/tspl/index.ts#L35)

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

[components/tspl/index.ts:30](https://github.com/17562105692/printease/blob/f4cf8ae/src/components/tspl/index.ts#L30)

___

### setNewLine

▸ **setNewLine**(): `void`

@description: Instruction wrapping, called by default, if not necessary, do not need to call

#### Returns

`void`

#### Implementation of

[TsplLibInterface](../interfaces/interface_TsplLib.TsplLibInterface.md).[setNewLine](../interfaces/interface_TsplLib.TsplLibInterface.md#setnewline)

#### Defined in

[components/tspl/index.ts:58](https://github.com/17562105692/printease/blob/f4cf8ae/src/components/tspl/index.ts#L58)

___

### setPrint

▸ **setPrint**(`m`, `n?`): `void`

@description: execute print

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `m` | `number` | `undefined` | print group |
| `n` | `number` | `1` | Number of print rounds |

#### Returns

`void`

#### Implementation of

[TsplLibInterface](../interfaces/interface_TsplLib.TsplLibInterface.md).[setPrint](../interfaces/interface_TsplLib.TsplLibInterface.md#setprint)

#### Defined in

[components/tspl/index.ts:53](https://github.com/17562105692/printease/blob/f4cf8ae/src/components/tspl/index.ts#L53)

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

[components/tspl/index.ts:25](https://github.com/17562105692/printease/blob/f4cf8ae/src/components/tspl/index.ts#L25)

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

[components/tspl/index.ts:48](https://github.com/17562105692/printease/blob/f4cf8ae/src/components/tspl/index.ts#L48)

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

[components/tspl/index.ts:22](https://github.com/17562105692/printease/blob/f4cf8ae/src/components/tspl/index.ts#L22)
