[printease](../README.md) / [Modules](../modules.md) / [interface/UniappWebview](../modules/interface_UniappWebview.md) / UniappWebviewInterface

# Interface: UniappWebviewInterface

[interface/UniappWebview](../modules/interface_UniappWebview.md).UniappWebviewInterface

## Implemented by

- [`UniappWebview`](../classes/components_uniappWebview.UniappWebview.md)

## Table of contents

### Properties

- [callback](interface_UniappWebview.UniappWebviewInterface.md#callback)
- [html](interface_UniappWebview.UniappWebviewInterface.md#html)
- [webview](interface_UniappWebview.UniappWebviewInterface.md#webview)

### Methods

- [createWebView](interface_UniappWebview.UniappWebviewInterface.md#createwebview)
- [init](interface_UniappWebview.UniappWebviewInterface.md#init)
- [install](interface_UniappWebview.UniappWebviewInterface.md#install)
- [setHtml](interface_UniappWebview.UniappWebviewInterface.md#sethtml)

## Properties

### callback

• **callback**: `any`

#### Defined in

[interface/UniappWebview.ts:4](https://github.com/Liu-Jinshuai/printease/blob/87fa96f/src/interface/UniappWebview.ts#L4)

___

### html

• **html**: `string`

#### Defined in

[interface/UniappWebview.ts:3](https://github.com/Liu-Jinshuai/printease/blob/87fa96f/src/interface/UniappWebview.ts#L3)

___

### webview

• **webview**: `any`

#### Defined in

[interface/UniappWebview.ts:2](https://github.com/Liu-Jinshuai/printease/blob/87fa96f/src/interface/UniappWebview.ts#L2)

## Methods

### createWebView

▸ **createWebView**(): `void`

create webview

#### Returns

`void`

#### Defined in

[interface/UniappWebview.ts:17](https://github.com/Liu-Jinshuai/printease/blob/87fa96f/src/interface/UniappWebview.ts#L17)

___

### init

▸ **init**(): `void`

init

#### Returns

`void`

#### Defined in

[interface/UniappWebview.ts:8](https://github.com/Liu-Jinshuai/printease/blob/87fa96f/src/interface/UniappWebview.ts#L8)

___

### install

▸ **install**(`file`, `callback`): `void`

Load complete callback

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `callback` | (`data`: `string`) => `void` |

#### Returns

`void`

#### Defined in

[interface/UniappWebview.ts:23](https://github.com/Liu-Jinshuai/printease/blob/87fa96f/src/interface/UniappWebview.ts#L23)

___

### setHtml

▸ **setHtml**(`html`): `void`

set webview html

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `html` | `string` | html string |

#### Returns

`void`

#### Defined in

[interface/UniappWebview.ts:13](https://github.com/Liu-Jinshuai/printease/blob/87fa96f/src/interface/UniappWebview.ts#L13)
