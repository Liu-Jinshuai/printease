[printease](../README.md) / [Modules](../modules.md) / [components/customDirective](../modules/components_customDirective.md) / CustomDirectiveLib

# Class: CustomDirectiveLib

[components/customDirective](../modules/components_customDirective.md).CustomDirectiveLib

## Implements

- [`CustomDirectiveInterface`](../interfaces/interface_CustomDirective.CustomDirectiveInterface.md)

## Table of contents

### Constructors

- [constructor](components_customDirective.CustomDirectiveLib.md#constructor)

### Properties

- [NEW\_LINE](components_customDirective.CustomDirectiveLib.md#new_line)
- [command](components_customDirective.CustomDirectiveLib.md#command)
- [encoding](components_customDirective.CustomDirectiveLib.md#encoding)

### Methods

- [getBuffer](components_customDirective.CustomDirectiveLib.md#getbuffer)
- [getCommand](components_customDirective.CustomDirectiveLib.md#getcommand)
- [setCommand](components_customDirective.CustomDirectiveLib.md#setcommand)
- [setEncoding](components_customDirective.CustomDirectiveLib.md#setencoding)
- [setNewLine](components_customDirective.CustomDirectiveLib.md#setnewline)
- [stringToCharCodeArray](components_customDirective.CustomDirectiveLib.md#stringtocharcodearray)
- [stringToEncodedBytes](components_customDirective.CustomDirectiveLib.md#stringtoencodedbytes)

## Constructors

### constructor

• **new CustomDirectiveLib**()

#### Defined in

[components/customDirective/index.ts:7](https://github.com/Liu-Jinshuai/printease/blob/f0ce9b9/src/components/customDirective/index.ts#L7)

## Properties

### NEW\_LINE

• **NEW\_LINE**: `string`

#### Defined in

[components/customDirective/index.ts:5](https://github.com/Liu-Jinshuai/printease/blob/f0ce9b9/src/components/customDirective/index.ts#L5)

___

### command

• **command**: `number`[]

#### Implementation of

[CustomDirectiveInterface](../interfaces/interface_CustomDirective.CustomDirectiveInterface.md).[command](../interfaces/interface_CustomDirective.CustomDirectiveInterface.md#command)

#### Defined in

[components/customDirective/index.ts:4](https://github.com/Liu-Jinshuai/printease/blob/f0ce9b9/src/components/customDirective/index.ts#L4)

___

### encoding

• **encoding**: `string`

#### Implementation of

[CustomDirectiveInterface](../interfaces/interface_CustomDirective.CustomDirectiveInterface.md).[encoding](../interfaces/interface_CustomDirective.CustomDirectiveInterface.md#encoding)

#### Defined in

[components/customDirective/index.ts:6](https://github.com/Liu-Jinshuai/printease/blob/f0ce9b9/src/components/customDirective/index.ts#L6)

## Methods

### getBuffer

▸ **getBuffer**(): `ArrayBuffer`

@description: Get print command (Buffer)

#### Returns

`ArrayBuffer`

Returns the print command (Buffer)

#### Implementation of

[CustomDirectiveInterface](../interfaces/interface_CustomDirective.CustomDirectiveInterface.md).[getBuffer](../interfaces/interface_CustomDirective.CustomDirectiveInterface.md#getbuffer)

#### Defined in

[components/customDirective/index.ts:35](https://github.com/Liu-Jinshuai/printease/blob/f0ce9b9/src/components/customDirective/index.ts#L35)

___

### getCommand

▸ **getCommand**(): `number`[]

@description: get print command

#### Returns

`number`[]

return print command

#### Implementation of

[CustomDirectiveInterface](../interfaces/interface_CustomDirective.CustomDirectiveInterface.md).[getCommand](../interfaces/interface_CustomDirective.CustomDirectiveInterface.md#getcommand)

#### Defined in

[components/customDirective/index.ts:29](https://github.com/Liu-Jinshuai/printease/blob/f0ce9b9/src/components/customDirective/index.ts#L29)

___

### setCommand

▸ **setCommand**(`command`): `void`

@description: set custom command

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `string` \| `number`[] | set print command |

#### Returns

`void`

#### Implementation of

[CustomDirectiveInterface](../interfaces/interface_CustomDirective.CustomDirectiveInterface.md).[setCommand](../interfaces/interface_CustomDirective.CustomDirectiveInterface.md#setcommand)

#### Defined in

[components/customDirective/index.ts:19](https://github.com/Liu-Jinshuai/printease/blob/f0ce9b9/src/components/customDirective/index.ts#L19)

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

[CustomDirectiveInterface](../interfaces/interface_CustomDirective.CustomDirectiveInterface.md).[setEncoding](../interfaces/interface_CustomDirective.CustomDirectiveInterface.md#setencoding)

#### Defined in

[components/customDirective/index.ts:26](https://github.com/Liu-Jinshuai/printease/blob/f0ce9b9/src/components/customDirective/index.ts#L26)

___

### setNewLine

▸ **setNewLine**(): `void`

@description: new line

#### Returns

`void`

#### Implementation of

[CustomDirectiveInterface](../interfaces/interface_CustomDirective.CustomDirectiveInterface.md).[setNewLine](../interfaces/interface_CustomDirective.CustomDirectiveInterface.md#setnewline)

#### Defined in

[components/customDirective/index.ts:32](https://github.com/Liu-Jinshuai/printease/blob/f0ce9b9/src/components/customDirective/index.ts#L32)

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

[components/customDirective/index.ts:16](https://github.com/Liu-Jinshuai/printease/blob/f0ce9b9/src/components/customDirective/index.ts#L16)

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

[components/customDirective/index.ts:12](https://github.com/Liu-Jinshuai/printease/blob/f0ce9b9/src/components/customDirective/index.ts#L12)
