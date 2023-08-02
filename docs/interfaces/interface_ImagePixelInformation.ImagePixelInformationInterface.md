[print](../README.md) / [Modules](../modules.md) / [interface/ImagePixelInformation](../modules/interface_ImagePixelInformation.md) / ImagePixelInformationInterface

# Interface: ImagePixelInformationInterface

[interface/ImagePixelInformation](../modules/interface_ImagePixelInformation.md).ImagePixelInformationInterface

Get image pixel information

## Table of contents

### Properties

- [canvasId](interface_ImagePixelInformation.ImagePixelInformationInterface.md#canvasid)
- [context](interface_ImagePixelInformation.ImagePixelInformationInterface.md#context)
- [createCanvas](interface_ImagePixelInformation.ImagePixelInformationInterface.md#createcanvas)
- [drawImage](interface_ImagePixelInformation.ImagePixelInformationInterface.md#drawimage)
- [getImageData](interface_ImagePixelInformation.ImagePixelInformationInterface.md#getimagedata)

## Properties

### canvasId

• **canvasId**: `string`

canvas id

#### Defined in

[interface/ImagePixelInformation.ts:13](https://github.com/17562105692/printease/blob/f4cf8ae/src/interface/ImagePixelInformation.ts#L13)

___

### context

• **context**: `any`

canvas context

#### Defined in

[interface/ImagePixelInformation.ts:9](https://github.com/17562105692/printease/blob/f4cf8ae/src/interface/ImagePixelInformation.ts#L9)

___

### createCanvas

• **createCanvas**: (`canvasId`: `string`, `componentInstance`: `object`) => `void`

#### Type declaration

▸ (`canvasId`, `componentInstance`): `void`

create canvas

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `canvasId` | `string` | canvas id |
| `componentInstance` | `object` | component instance |

##### Returns

`void`

canvas context or null

#### Defined in

[interface/ImagePixelInformation.ts:21](https://github.com/17562105692/printease/blob/f4cf8ae/src/interface/ImagePixelInformation.ts#L21)

___

### drawImage

• **drawImage**: (`imageResource`: `string`, `dx`: `number`, `dy`: `number`, `dWidth`: `number`, `dHeight`: `number`, `sx`: `number`, `sy`: `number`, `sWidth`: `number`, `sHeight`: `number`) => `Promise`<`any`\>

#### Type declaration

▸ (`imageResource`, `dx`, `dy`, `dWidth`, `dHeight`, `sx`, `sy`, `sWidth`, `sHeight`): `Promise`<`any`\>

draw image

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imageResource` | `string` | image resource |
| `dx` | `number` | The X-axis position of the upper left corner of the image on the target canvas |
| `dy` | `number` | The Y-axis position of the upper left corner of the image on the target canvas |
| `dWidth` | `number` | The width of the drawn image on the target canvas, allowing scaling of the drawn image |
| `dHeight` | `number` | The height of the drawn image on the target canvas, allowing scaling of the drawn image |
| `sx` | `number` | The X coordinate of the upper left corner of the source image's selection rectangle |
| `sy` | `number` | The Y coordinate of the upper left corner of the source image's selection rectangle |
| `sWidth` | `number` | The width of the source image's rectangular selection box |
| `sHeight` | `number` | The height of the source image's rectangular selection box |

##### Returns

`Promise`<`any`\>

#### Defined in

[interface/ImagePixelInformation.ts:34](https://github.com/17562105692/printease/blob/f4cf8ae/src/interface/ImagePixelInformation.ts#L34)

___

### getImageData

• **getImageData**: (`x`: `number`, `y`: `number`, `width`: `number`, `height`: `number`) => `Promise`<`any`\>

#### Type declaration

▸ (`x`, `y`, `width`, `height`): `Promise`<`any`\>

Get image pixel information（rgba）

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The X coordinate of the upper left corner of the rectangle from which the pixel data will be retrieved |
| `y` | `number` | The Y coordinate of the upper left corner of the rectangle from which the pixel data will be retrieved |
| `width` | `number` | The width of the rectangle from which the pixel data will be retrieved |
| `height` | `number` | The height of the rectangle from which the pixel data will be retrieved |

##### Returns

`Promise`<`any`\>

#### Defined in

[interface/ImagePixelInformation.ts:42](https://github.com/17562105692/printease/blob/f4cf8ae/src/interface/ImagePixelInformation.ts#L42)
