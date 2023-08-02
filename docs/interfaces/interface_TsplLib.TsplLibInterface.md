[print](../README.md) / [Modules](../modules.md) / [interface/TsplLib](../modules/interface_TsplLib.md) / TsplLibInterface

# Interface: TsplLibInterface

[interface/TsplLib](../modules/interface_TsplLib.md).TsplLibInterface

## Implemented by

- [`TsplLib`](../classes/components_tspl.TsplLib.md)

## Table of contents

### Properties

- [getBuffer](interface_TsplLib.TsplLibInterface.md#getbuffer)
- [getCommand](interface_TsplLib.TsplLibInterface.md#getcommand)
- [init](interface_TsplLib.TsplLibInterface.md#init)
- [setBitmap](interface_TsplLib.TsplLibInterface.md#setbitmap)
- [setCls](interface_TsplLib.TsplLibInterface.md#setcls)
- [setGap](interface_TsplLib.TsplLibInterface.md#setgap)
- [setNewLine](interface_TsplLib.TsplLibInterface.md#setnewline)
- [setPrint](interface_TsplLib.TsplLibInterface.md#setprint)
- [setSize](interface_TsplLib.TsplLibInterface.md#setsize)
- [setText](interface_TsplLib.TsplLibInterface.md#settext)
- [stringToCharCodeArray](interface_TsplLib.TsplLibInterface.md#stringtocharcodearray)

## Properties

### getBuffer

• **getBuffer**: () => `ArrayBuffer`

#### Type declaration

▸ (): `ArrayBuffer`

@description: Get print command (Buffer)

##### Returns

`ArrayBuffer`

Returns the print command (Buffer)

#### Defined in

[interface/TsplLib.ts:76](https://github.com/17562105692/printease/blob/f4cf8ae/src/interface/TsplLib.ts#L76)

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

[interface/TsplLib.ts:71](https://github.com/17562105692/printease/blob/f4cf8ae/src/interface/TsplLib.ts#L71)

___

### init

• **init**: () => `void`

#### Type declaration

▸ (): `void`

@description: init the command

##### Returns

`void`

#### Defined in

[interface/TsplLib.ts:7](https://github.com/17562105692/printease/blob/f4cf8ae/src/interface/TsplLib.ts#L7)

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

[interface/TsplLib.ts:43](https://github.com/17562105692/printease/blob/f4cf8ae/src/interface/TsplLib.ts#L43)

___

### setCls

• **setCls**: () => `void`

#### Type declaration

▸ (): `void`

@description: Clear the data of the image buffer

##### Returns

`void`

#### Defined in

[interface/TsplLib.ts:32](https://github.com/17562105692/printease/blob/f4cf8ae/src/interface/TsplLib.ts#L32)

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

[interface/TsplLib.ts:27](https://github.com/17562105692/printease/blob/f4cf8ae/src/interface/TsplLib.ts#L27)

___

### setNewLine

• **setNewLine**: () => `void`

#### Type declaration

▸ (): `void`

@description: Instruction wrapping, called by default, if not necessary, do not need to call

##### Returns

`void`

#### Defined in

[interface/TsplLib.ts:66](https://github.com/17562105692/printease/blob/f4cf8ae/src/interface/TsplLib.ts#L66)

___

### setPrint

• **setPrint**: (`m`: `number`, `n?`: `number`) => `void`

#### Type declaration

▸ (`m`, `n?`): `void`

@description: execute print

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | `number` | print group |
| `n?` | `number` | Number of print rounds |

##### Returns

`void`

#### Defined in

[interface/TsplLib.ts:62](https://github.com/17562105692/printease/blob/f4cf8ae/src/interface/TsplLib.ts#L62)

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

[interface/TsplLib.ts:20](https://github.com/17562105692/printease/blob/f4cf8ae/src/interface/TsplLib.ts#L20)

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

[interface/TsplLib.ts:55](https://github.com/17562105692/printease/blob/f4cf8ae/src/interface/TsplLib.ts#L55)

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

[interface/TsplLib.ts:13](https://github.com/17562105692/printease/blob/f4cf8ae/src/interface/TsplLib.ts#L13)
