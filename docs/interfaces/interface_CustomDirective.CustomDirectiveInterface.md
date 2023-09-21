[printease](../README.md) / [Modules](../modules.md) / [interface/CustomDirective](../modules/interface_CustomDirective.md) / CustomDirectiveInterface

# Interface: CustomDirectiveInterface

[interface/CustomDirective](../modules/interface_CustomDirective.md).CustomDirectiveInterface

## Implemented by

- [`CustomDirectiveLib`](../classes/components_customDirective.CustomDirectiveLib.md)

## Table of contents

### Properties

- [command](interface_CustomDirective.CustomDirectiveInterface.md#command)
- [encoding](interface_CustomDirective.CustomDirectiveInterface.md#encoding)
- [getBuffer](interface_CustomDirective.CustomDirectiveInterface.md#getbuffer)
- [getCommand](interface_CustomDirective.CustomDirectiveInterface.md#getcommand)
- [setCommand](interface_CustomDirective.CustomDirectiveInterface.md#setcommand)
- [setEncoding](interface_CustomDirective.CustomDirectiveInterface.md#setencoding)
- [setNewLine](interface_CustomDirective.CustomDirectiveInterface.md#setnewline)

## Properties

### command

• **command**: `number`[]

#### Defined in

[interface/CustomDirective.ts:2](https://github.com/Liu-Jinshuai/printease/blob/b77399d/src/interface/CustomDirective.ts#L2)

___

### encoding

• **encoding**: `string`

#### Defined in

[interface/CustomDirective.ts:3](https://github.com/Liu-Jinshuai/printease/blob/b77399d/src/interface/CustomDirective.ts#L3)

___

### getBuffer

• **getBuffer**: () => `ArrayBuffer`

#### Type declaration

▸ (): `ArrayBuffer`

@description: Get print command (Buffer)

##### Returns

`ArrayBuffer`

Returns the print command (Buffer)

#### Defined in

[interface/CustomDirective.ts:13](https://github.com/Liu-Jinshuai/printease/blob/b77399d/src/interface/CustomDirective.ts#L13)

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

[interface/CustomDirective.ts:8](https://github.com/Liu-Jinshuai/printease/blob/b77399d/src/interface/CustomDirective.ts#L8)

___

### setCommand

• **setCommand**: (`command`: `string` \| `number`[]) => `void`

#### Type declaration

▸ (`command`): `void`

@description: set custom command

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `string` \| `number`[] | set print command |

##### Returns

`void`

#### Defined in

[interface/CustomDirective.ts:19](https://github.com/Liu-Jinshuai/printease/blob/b77399d/src/interface/CustomDirective.ts#L19)

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

[interface/CustomDirective.ts:25](https://github.com/Liu-Jinshuai/printease/blob/b77399d/src/interface/CustomDirective.ts#L25)

___

### setNewLine

• **setNewLine**: () => `void`

#### Type declaration

▸ (): `void`

@description: new line

##### Returns

`void`

#### Defined in

[interface/CustomDirective.ts:30](https://github.com/Liu-Jinshuai/printease/blob/b77399d/src/interface/CustomDirective.ts#L30)
