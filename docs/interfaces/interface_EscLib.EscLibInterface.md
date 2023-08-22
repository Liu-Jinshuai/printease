[printease](../README.md) / [Modules](../modules.md) / [interface/EscLib](../modules/interface_EscLib.md) / EscLibInterface

# Interface: EscLibInterface

[interface/EscLib](../modules/interface_EscLib.md).EscLibInterface

## Implemented by

- [`EscLib`](../classes/components_esc.EscLib.md)

## Table of contents

### Methods

- [init](interface_EscLib.EscLibInterface.md#init)
- [setAlign](interface_EscLib.EscLibInterface.md#setalign)
- [setPrint](interface_EscLib.EscLibInterface.md#setprint)
- [setPrintPaperFeed](interface_EscLib.EscLibInterface.md#setprintpaperfeed)
- [setSize](interface_EscLib.EscLibInterface.md#setsize)
- [setText](interface_EscLib.EscLibInterface.md#settext)

## Methods

### init

▸ **init**(): `void`

@description: init the command

#### Returns

`void`

#### Defined in

interface/EscLib.ts:5

___

### setAlign

▸ **setAlign**(`align`): `void`

@description: Set align

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `align` | `number` | 0 align left, 1 align center, 2 align right |

#### Returns

`void`

#### Defined in

interface/EscLib.ts:15

___

### setPrint

▸ **setPrint**(): `void`

#### Returns

`void`

**`Description`**

Print out the data in the print buffer, and push the printing paper forward by one line according to the current line spacing

#### Defined in

interface/EscLib.ts:24

___

### setPrintPaperFeed

▸ **setPrintPaperFeed**(`m`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | `number` | 0 ≤ n ≤ 255 |

#### Returns

`void`

**`Description`**

Print buffer data and feed paper (inches)

#### Defined in

interface/EscLib.ts:29

___

### setSize

▸ **setSize**(`width`): `void`

@description: print width

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |

#### Returns

`void`

#### Defined in

interface/EscLib.ts:10

___

### setText

▸ **setText**(`data`): `void`

@description: Set the text to be printed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` | print data |

#### Returns

`void`

#### Defined in

interface/EscLib.ts:20
