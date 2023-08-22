[printease](../README.md) / [Modules](../modules.md) / [components/uniappWebview](../modules/components_uniappWebview.md) / default

# Class: default

[components/uniappWebview](../modules/components_uniappWebview.md).default

## Implements

- [`UniappWebviewInterface`](../interfaces/interface_UniappWebview.UniappWebviewInterface.md)

## Table of contents

### Constructors

- [constructor](components_uniappWebview.default.md#constructor)

### Properties

- [callback](components_uniappWebview.default.md#callback)
- [html](components_uniappWebview.default.md#html)
- [webview](components_uniappWebview.default.md#webview)

### Methods

- [createHtmlFile](components_uniappWebview.default.md#createhtmlfile)
- [createWebView](components_uniappWebview.default.md#createwebview)
- [getPdfContent](components_uniappWebview.default.md#getpdfcontent)
- [init](components_uniappWebview.default.md#init)
- [setHtml](components_uniappWebview.default.md#sethtml)

## Constructors

### constructor

• **new default**()

## Properties

### callback

• **callback**: `any`

#### Implementation of

[UniappWebviewInterface](../interfaces/interface_UniappWebview.UniappWebviewInterface.md).[callback](../interfaces/interface_UniappWebview.UniappWebviewInterface.md#callback)

#### Defined in

components/uniappWebview/index.ts:21

___

### html

• **html**: `string` = `htmlStr`

#### Implementation of

[UniappWebviewInterface](../interfaces/interface_UniappWebview.UniappWebviewInterface.md).[html](../interfaces/interface_UniappWebview.UniappWebviewInterface.md#html)

#### Defined in

components/uniappWebview/index.ts:22

___

### webview

• **webview**: `any`

#### Implementation of

[UniappWebviewInterface](../interfaces/interface_UniappWebview.UniappWebviewInterface.md).[webview](../interfaces/interface_UniappWebview.UniappWebviewInterface.md#webview)

#### Defined in

components/uniappWebview/index.ts:20

## Methods

### createHtmlFile

▸ **createHtmlFile**(): `Promise`<`unknown`\>

#### Returns

`Promise`<`unknown`\>

#### Defined in

components/uniappWebview/index.ts:49

___

### createWebView

▸ **createWebView**(`url`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`void`

#### Defined in

components/uniappWebview/index.ts:44

___

### getPdfContent

▸ **getPdfContent**(`callback`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

`Promise`<`void`\>

#### Defined in

components/uniappWebview/index.ts:32

___

### init

▸ **init**(): `void`

init

#### Returns

`void`

#### Implementation of

[UniappWebviewInterface](../interfaces/interface_UniappWebview.UniappWebviewInterface.md).[init](../interfaces/interface_UniappWebview.UniappWebviewInterface.md#init)

#### Defined in

components/uniappWebview/index.ts:23

___

### setHtml

▸ **setHtml**(`html`): `void`

set html

#### Parameters

| Name | Type |
| :------ | :------ |
| `html` | `string` |

#### Returns

`void`

#### Implementation of

[UniappWebviewInterface](../interfaces/interface_UniappWebview.UniappWebviewInterface.md).[setHtml](../interfaces/interface_UniappWebview.UniappWebviewInterface.md#sethtml)

#### Defined in

components/uniappWebview/index.ts:27
