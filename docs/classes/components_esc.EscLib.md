[printease](../README.md) / [Modules](../modules.md) / [components/esc](../modules/components_esc.md) / EscLib

# Class: EscLib

[components/esc](../modules/components_esc.md).EscLib

## Implements

- [`EscLibInterface`](../interfaces/interface_EscLib.EscLibInterface.md)

## Table of contents

### Constructors

- [constructor](components_esc.EscLib.md#constructor)

### Properties

- [NEW\_LINE](components_esc.EscLib.md#new_line)
- [command](components_esc.EscLib.md#command)
- [encoding](components_esc.EscLib.md#encoding)

### Methods

- [getBuffer](components_esc.EscLib.md#getbuffer)
- [getCommand](components_esc.EscLib.md#getcommand)
- [init](components_esc.EscLib.md#init)
- [setAlign](components_esc.EscLib.md#setalign)
- [setCommand](components_esc.EscLib.md#setcommand)
- [setEncoding](components_esc.EscLib.md#setencoding)
- [setNewLine](components_esc.EscLib.md#setnewline)
- [setPrint](components_esc.EscLib.md#setprint)
- [setPrintPaperFeed](components_esc.EscLib.md#setprintpaperfeed)
- [setSize](components_esc.EscLib.md#setsize)
- [setText](components_esc.EscLib.md#settext)
- [stringToCharCodeArray](components_esc.EscLib.md#stringtocharcodearray)
- [stringToEncodedBytes](components_esc.EscLib.md#stringtoencodedbytes)

## Constructors

### constructor

• **new EscLib**()

#### Defined in

[components/esc/index.ts:8](https://github.com/Liu-Jinshuai/printease/blob/cd89e37/src/components/esc/index.ts#L8)

## Properties

### NEW\_LINE

• **NEW\_LINE**: `string`

#### Defined in

[components/esc/index.ts:6](https://github.com/Liu-Jinshuai/printease/blob/cd89e37/src/components/esc/index.ts#L6)

___

### command

• **command**: `number`[]

#### Defined in

[components/esc/index.ts:5](https://github.com/Liu-Jinshuai/printease/blob/cd89e37/src/components/esc/index.ts#L5)

___

### encoding

• **encoding**: `string`

#### Defined in

[components/esc/index.ts:7](https://github.com/Liu-Jinshuai/printease/blob/cd89e37/src/components/esc/index.ts#L7)

## Methods

### getBuffer

▸ **getBuffer**(): `ArrayBuffer`

#### Returns

`ArrayBuffer`

#### Defined in

[components/esc/index.ts:66](https://github.com/Liu-Jinshuai/printease/blob/cd89e37/src/components/esc/index.ts#L66)

___

### getCommand

▸ **getCommand**(): `number`[]

#### Returns

`number`[]

#### Defined in

[components/esc/index.ts:63](https://github.com/Liu-Jinshuai/printease/blob/cd89e37/src/components/esc/index.ts#L63)

___

### init

▸ **init**(): `void`

@description: init the command

#### Returns

`void`

#### Implementation of

[EscLibInterface](../interfaces/interface_EscLib.EscLibInterface.md).[init](../interfaces/interface_EscLib.EscLibInterface.md#init)

#### Defined in

[components/esc/index.ts:13](https://github.com/Liu-Jinshuai/printease/blob/cd89e37/src/components/esc/index.ts#L13)

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

#### Implementation of

[EscLibInterface](../interfaces/interface_EscLib.EscLibInterface.md).[setAlign](../interfaces/interface_EscLib.EscLibInterface.md#setalign)

#### Defined in

[components/esc/index.ts:29](https://github.com/Liu-Jinshuai/printease/blob/cd89e37/src/components/esc/index.ts#L29)

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

[components/esc/index.ts:56](https://github.com/Liu-Jinshuai/printease/blob/cd89e37/src/components/esc/index.ts#L56)

___

### setEncoding

▸ **setEncoding**(`encoding`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding` | `string` |

#### Returns

`void`

#### Defined in

[components/esc/index.ts:45](https://github.com/Liu-Jinshuai/printease/blob/cd89e37/src/components/esc/index.ts#L45)

___

### setNewLine

▸ **setNewLine**(): `void`

#### Returns

`void`

#### Defined in

[components/esc/index.ts:53](https://github.com/Liu-Jinshuai/printease/blob/cd89e37/src/components/esc/index.ts#L53)

___

### setPrint

▸ **setPrint**(): `void`

#### Returns

`void`

**`Description`**

Print out the data in the print buffer, and push the printing paper forward by one line according to the current line spacing

#### Implementation of

[EscLibInterface](../interfaces/interface_EscLib.EscLibInterface.md).[setPrint](../interfaces/interface_EscLib.EscLibInterface.md#setprint)

#### Defined in

[components/esc/index.ts:48](https://github.com/Liu-Jinshuai/printease/blob/cd89e37/src/components/esc/index.ts#L48)

___

### setPrintPaperFeed

▸ **setPrintPaperFeed**(`m?`): `void`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `m` | `number` | `0` | 0 ≤ n ≤ 255 |

#### Returns

`void`

**`Description`**

Print buffer data and feed paper (inches)

#### Implementation of

[EscLibInterface](../interfaces/interface_EscLib.EscLibInterface.md).[setPrintPaperFeed](../interfaces/interface_EscLib.EscLibInterface.md#setprintpaperfeed)

#### Defined in

[components/esc/index.ts:39](https://github.com/Liu-Jinshuai/printease/blob/cd89e37/src/components/esc/index.ts#L39)

___

### setSize

▸ **setSize**(`width?`): `void`

@description: print width

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `width` | `number` | `1` |

#### Returns

`void`

#### Implementation of

[EscLibInterface](../interfaces/interface_EscLib.EscLibInterface.md).[setSize](../interfaces/interface_EscLib.EscLibInterface.md#setsize)

#### Defined in

[components/esc/index.ts:24](https://github.com/Liu-Jinshuai/printease/blob/cd89e37/src/components/esc/index.ts#L24)

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

#### Implementation of

[EscLibInterface](../interfaces/interface_EscLib.EscLibInterface.md).[setText](../interfaces/interface_EscLib.EscLibInterface.md#settext)

#### Defined in

[components/esc/index.ts:34](https://github.com/Liu-Jinshuai/printease/blob/cd89e37/src/components/esc/index.ts#L34)

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

[components/esc/index.ts:20](https://github.com/Liu-Jinshuai/printease/blob/cd89e37/src/components/esc/index.ts#L20)

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

[components/esc/index.ts:16](https://github.com/Liu-Jinshuai/printease/blob/cd89e37/src/components/esc/index.ts#L16)
