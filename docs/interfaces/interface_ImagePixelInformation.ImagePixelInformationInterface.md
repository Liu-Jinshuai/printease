[printease](../README.md) / [Modules](../modules.md) / [interface/ImagePixelInformation](../modules/interface_ImagePixelInformation.md) / ImagePixelInformationInterface

# Interface: ImagePixelInformationInterface

[interface/ImagePixelInformation](../modules/interface_ImagePixelInformation.md).ImagePixelInformationInterface

Get image pixel information

## Implemented by

- [`JavaScriptImagePixelInformation`](../classes/components_imagePixelInformation.JavaScriptImagePixelInformation.md)
- [`UniappImagePixelInformation`](../classes/components_imagePixelInformation.UniappImagePixelInformation.md)

## Table of contents

### Properties

- [getImageData](interface_ImagePixelInformation.ImagePixelInformationInterface.md#getimagedata)
- [grayThreshold](interface_ImagePixelInformation.ImagePixelInformationInterface.md#graythreshold)
- [uniGetImageData](interface_ImagePixelInformation.ImagePixelInformationInterface.md#unigetimagedata)

## Properties

### getImageData

• **getImageData**: (`imageResource`: `string` \| `number`[], `width`: `number`, `height`: `number`, `callback`: (`pixelInformation`: `object`) => `void`) => `void`

#### Type declaration

▸ (`imageResource`, `width`, `height`, `callback`): `void`

@description: Get image pixel information（rgba）

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imageResource` | `string` \| `number`[] | image path |
| `width` | `number` | The width of the rectangle from which the pixel data will be retrieved; |
| `height` | `number` | The height of the rectangle from which the pixel data will be retrieved |
| `callback` | (`pixelInformation`: `object`) => `void` | callback function |

##### Returns

`void`

#### Defined in

[interface/ImagePixelInformation.ts:16](https://github.com/Liu-Jinshuai/printease/blob/ba33e13/src/interface/ImagePixelInformation.ts#L16)

___

### grayThreshold

• **grayThreshold**: `number`

@description: grayscale threshold（default 100）

#### Defined in

[interface/ImagePixelInformation.ts:8](https://github.com/Liu-Jinshuai/printease/blob/ba33e13/src/interface/ImagePixelInformation.ts#L8)

___

### uniGetImageData

• **uniGetImageData**: (`canvasId`: `string`, `imageResource`: `string` \| `number`[], `width`: `number`, `height`: `number`, `callback`: (`pixelInformation`: `object`) => `void`) => `void`

#### Type declaration

▸ (`canvasId`, `imageResource`, `width`, `height`, `callback`): `void`

@description: Uniapp Get image pixel information（rgba）

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `canvasId` | `string` | canvas id |
| `imageResource` | `string` \| `number`[] | image path |
| `width` | `number` | The width of the rectangle from which the pixel data will be retrieved; |
| `height` | `number` | The height of the rectangle from which the pixel data will be retrieved |
| `callback` | (`pixelInformation`: `object`) => `void` | callback function |

##### Returns

`void`

#### Defined in

[interface/ImagePixelInformation.ts:25](https://github.com/Liu-Jinshuai/printease/blob/ba33e13/src/interface/ImagePixelInformation.ts#L25)
