[printease](../README.md) / [Modules](../modules.md) / [components/cpcl](../modules/components_cpcl.md) / CpclLib

# Class: CpclLib

[components/cpcl](../modules/components_cpcl.md).CpclLib

@description: TSPL instruction library interface document

**`Param`**

**`Implements`**

TsplLibInterface

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

components/cpcl/index.ts:14

## Properties

### NEW\_LINE

• **NEW\_LINE**: `string`

#### Defined in

components/cpcl/index.ts:12

___

### command

• **command**: `number`[]

@description: command array

#### Implementation of

[CpclLibInterface](../interfaces/interface_CpclLib.CpclLibInterface.md).[command](../interfaces/interface_CpclLib.CpclLibInterface.md#command)

#### Defined in

components/cpcl/index.ts:11

___

### encoding

• **encoding**: `string`

@description: Encoding method, default utf-8

#### Implementation of

[CpclLibInterface](../interfaces/interface_CpclLib.CpclLibInterface.md).[encoding](../interfaces/interface_CpclLib.CpclLibInterface.md#encoding)

#### Defined in

components/cpcl/index.ts:13

## Methods

### getBuffer

▸ **getBuffer**(): `ArrayBuffer`

#### Returns

`ArrayBuffer`

#### Defined in

components/cpcl/index.ts:59

___

### getCommand

▸ **getCommand**(): `number`[]

#### Returns

`number`[]

#### Defined in

components/cpcl/index.ts:56

___

### init

▸ **init**(): `void`

@description: init the command

#### Returns

`void`

#### Implementation of

[CpclLibInterface](../interfaces/interface_CpclLib.CpclLibInterface.md).[init](../interfaces/interface_CpclLib.CpclLibInterface.md#init)

#### Defined in

components/cpcl/index.ts:19

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

components/cpcl/index.ts:30

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

components/cpcl/index.ts:49

___

### setNewLine

▸ **setNewLine**(): `void`

#### Returns

`void`

#### Defined in

components/cpcl/index.ts:46

___

### setPrint

▸ **setPrint**(): `void`

@description: execute print

#### Returns

`void`

#### Implementation of

[CpclLibInterface](../interfaces/interface_CpclLib.CpclLibInterface.md).[setPrint](../interfaces/interface_CpclLib.CpclLibInterface.md#setprint)

#### Defined in

components/cpcl/index.ts:41

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

components/cpcl/index.ts:35

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

components/cpcl/index.ts:26

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

components/cpcl/index.ts:22
