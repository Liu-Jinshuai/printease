[printease](../README.md) / [Modules](../modules.md) / components/imagePixelInformation/indexs

# Module: components/imagePixelInformation/indexs

## Table of contents

### Namespaces

- [&quot;pdfjs-dist&quot;](components_imagePixelInformation_indexs._pdfjs_dist_.md)

### Variables

- [plus](components_imagePixelInformation_indexs.md#plus)
- [uni](components_imagePixelInformation_indexs.md#uni)

## Variables

### plus

• `Const` **plus**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `storage` | { `getItem`: (`key`: `string`) => `string` ; `removeItem`: (`key`: `string`) => `void` ; `setItem`: (`key`: `string`, `value`: `string`) => `void`  } |
| `storage.getItem` | (`key`: `string`) => `string` |
| `storage.removeItem` | (`key`: `string`) => `void` |
| `storage.setItem` | (`key`: `string`, `value`: `string`) => `void` |
| `webview` | { `create`: (`url`: `string`) => `void`  } |
| `webview.create` | (`url`: `string`) => `void` |

#### Defined in

[components/imagePixelInformation/indexs.d.ts:18](https://github.com/Liu-Jinshuai/printease/blob/b77399d/src/components/imagePixelInformation/indexs.d.ts#L18)

___

### uni

• `Const` **uni**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `canvasGetImageData` | (`obj`: `any`) => `void` |
| `canvasPutImageData` | (`obj`: `any`) => `void` |
| `createCanvasContext` | (`canvasId`: `string`, `componentInstance?`: `object`) => { `canvasGetImageData`: (`obj`: `any`) => `void` ; `draw`: (`bool?`: `Boolean`, `callback?`: () => `void`) => `void` ; `drawImage`: (`imageResource`: `string`, `dx?`: `number`, `dy?`: `number`, `dWidth?`: `number`, `dHeight?`: `number`, `sx?`: `number`, `sy?`: `number`, `sWidth?`: `number`, `sHeight?`: `number`) => `void` ; `putImageData`: (`obj`: `any`, `x`: `any`, `y`: `any`) => `void`  } |
| `createWebView` | (`obj`: `any`) => `void` |
| `env` | { `USER_DATA_PATH`: `string`  } |
| `env.USER_DATA_PATH` | `string` |
| `writeFile` | (`obj`: `any`) => `void` |

#### Defined in

[components/imagePixelInformation/indexs.d.ts:1](https://github.com/Liu-Jinshuai/printease/blob/b77399d/src/components/imagePixelInformation/indexs.d.ts#L1)
