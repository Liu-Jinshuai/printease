[printease](../README.md) / [Modules](../modules.md) / [components/uniappWebview](../modules/components_uniappWebview.md) / UniappWebview

# Class: UniappWebview

[components/uniappWebview](../modules/components_uniappWebview.md).UniappWebview

## Implements

- [`UniappWebviewInterface`](../interfaces/interface_UniappWebview.UniappWebviewInterface.md)

## Table of contents

### Constructors

- [constructor](components_uniappWebview.UniappWebview.md#constructor)

### Properties

- [callback](components_uniappWebview.UniappWebview.md#callback)
- [html](components_uniappWebview.UniappWebview.md#html)
- [webview](components_uniappWebview.UniappWebview.md#webview)

### Methods

- [createWebView](components_uniappWebview.UniappWebview.md#createwebview)
- [init](components_uniappWebview.UniappWebview.md#init)
- [install](components_uniappWebview.UniappWebview.md#install)
- [setHtml](components_uniappWebview.UniappWebview.md#sethtml)

## Constructors

### constructor

• **new UniappWebview**()

## Properties

### callback

• **callback**: `any`

#### Implementation of

[UniappWebviewInterface](../interfaces/interface_UniappWebview.UniappWebviewInterface.md).[callback](../interfaces/interface_UniappWebview.UniappWebviewInterface.md#callback)

#### Defined in

[components/uniappWebview/index.ts:4](https://github.com/Liu-Jinshuai/printease/blob/87fa96f/src/components/uniappWebview/index.ts#L4)

___

### html

• **html**: `string`

#### Implementation of

[UniappWebviewInterface](../interfaces/interface_UniappWebview.UniappWebviewInterface.md).[html](../interfaces/interface_UniappWebview.UniappWebviewInterface.md#html)

#### Defined in

[components/uniappWebview/index.ts:5](https://github.com/Liu-Jinshuai/printease/blob/87fa96f/src/components/uniappWebview/index.ts#L5)

___

### webview

• **webview**: `any`

#### Implementation of

[UniappWebviewInterface](../interfaces/interface_UniappWebview.UniappWebviewInterface.md).[webview](../interfaces/interface_UniappWebview.UniappWebviewInterface.md#webview)

#### Defined in

[components/uniappWebview/index.ts:3](https://github.com/Liu-Jinshuai/printease/blob/87fa96f/src/components/uniappWebview/index.ts#L3)

## Methods

### createWebView

▸ **createWebView**(): `void`

create webview

#### Returns

`void`

#### Implementation of

[UniappWebviewInterface](../interfaces/interface_UniappWebview.UniappWebviewInterface.md).[createWebView](../interfaces/interface_UniappWebview.UniappWebviewInterface.md#createwebview)

#### Defined in

[components/uniappWebview/index.ts:140](https://github.com/Liu-Jinshuai/printease/blob/87fa96f/src/components/uniappWebview/index.ts#L140)

___

### init

▸ **init**(): `void`

init

#### Returns

`void`

#### Implementation of

[UniappWebviewInterface](../interfaces/interface_UniappWebview.UniappWebviewInterface.md).[init](../interfaces/interface_UniappWebview.UniappWebviewInterface.md#init)

#### Defined in

[components/uniappWebview/index.ts:132](https://github.com/Liu-Jinshuai/printease/blob/87fa96f/src/components/uniappWebview/index.ts#L132)

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

#### Implementation of

[UniappWebviewInterface](../interfaces/interface_UniappWebview.UniappWebviewInterface.md).[install](../interfaces/interface_UniappWebview.UniappWebviewInterface.md#install)

#### Defined in

[components/uniappWebview/index.ts:144](https://github.com/Liu-Jinshuai/printease/blob/87fa96f/src/components/uniappWebview/index.ts#L144)

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

#### Implementation of

[UniappWebviewInterface](../interfaces/interface_UniappWebview.UniappWebviewInterface.md).[setHtml](../interfaces/interface_UniappWebview.UniappWebviewInterface.md#sethtml)

#### Defined in

[components/uniappWebview/index.ts:135](https://github.com/Liu-Jinshuai/printease/blob/87fa96f/src/components/uniappWebview/index.ts#L135)
