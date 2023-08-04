[print](../README.md) / [Modules](../modules.md) / [interface/ImagePixelInformation](../modules/interface_ImagePixelInformation.md) / ImagePixelInformationInterface

# Interface: ImagePixelInformationInterface

[interface/ImagePixelInformation](../modules/interface_ImagePixelInformation.md).ImagePixelInformationInterface

Get image pixel information

## Implemented by

- [`UniappImagePixelInformation`](../classes/components_imagePixelInformation.UniappImagePixelInformation.md)

## Table of contents

### Properties

- [canvasId](interface_ImagePixelInformation.ImagePixelInformationInterface.md#canvasid)
- [context](interface_ImagePixelInformation.ImagePixelInformationInterface.md#context)
- [getImageData](interface_ImagePixelInformation.ImagePixelInformationInterface.md#getimagedata)

## Properties

### canvasId

• **canvasId**: `string`

canvas id

#### Defined in

[interface/ImagePixelInformation.ts:13](https://github.com/17562105692/printease/blob/7693c0c/src/interface/ImagePixelInformation.ts#L13)

___

### context

• **context**: `any`

canvas context

#### Defined in

[interface/ImagePixelInformation.ts:9](https://github.com/17562105692/printease/blob/7693c0c/src/interface/ImagePixelInformation.ts#L9)

___

### getImageData

• **getImageData**: (`imageResource`: `string`, `width`: `number`, `height`: `number`) => `Promise`<`any`\>

#### Type declaration

▸ (`imageResource`, `width`, `height`): `Promise`<`any`\>

@description: Get image pixel information（rgba）

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imageResource` | `string` | image absolute path |
| `width` | `number` | The width of the rectangle from which the pixel data will be retrieved |
| `height` | `number` | The height of the rectangle from which the pixel data will be retrieved |

##### Returns

`Promise`<`any`\>

#### Defined in

[interface/ImagePixelInformation.ts:20](https://github.com/17562105692/printease/blob/7693c0c/src/interface/ImagePixelInformation.ts#L20)
