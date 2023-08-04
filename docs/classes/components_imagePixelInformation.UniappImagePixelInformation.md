[print](../README.md) / [Modules](../modules.md) / [components/imagePixelInformation](../modules/components_imagePixelInformation.md) / UniappImagePixelInformation

# Class: UniappImagePixelInformation

[components/imagePixelInformation](../modules/components_imagePixelInformation.md).UniappImagePixelInformation

uniapp gets image pixel information

**`Classes`**

UniappImagePixelInformation

**`Implements`**

ImagePixelInformationInterface

**`Classdesc`**

uniapp gets image pixel information

## Hierarchy

- `ImagePixelInformation`

  ↳ **`UniappImagePixelInformation`**

## Implements

- [`ImagePixelInformationInterface`](../interfaces/interface_ImagePixelInformation.ImagePixelInformationInterface.md)

## Table of contents

### Constructors

- [constructor](components_imagePixelInformation.UniappImagePixelInformation.md#constructor)

### Properties

- [canvasId](components_imagePixelInformation.UniappImagePixelInformation.md#canvasid)
- [context](components_imagePixelInformation.UniappImagePixelInformation.md#context)

### Methods

- [getImageData](components_imagePixelInformation.UniappImagePixelInformation.md#getimagedata)

## Constructors

### constructor

• **new UniappImagePixelInformation**()

#### Overrides

ImagePixelInformation.constructor

#### Defined in

[components/imagePixelInformation/index.ts:43](https://github.com/17562105692/printease/blob/57b5559/src/components/imagePixelInformation/index.ts#L43)

## Properties

### canvasId

• **canvasId**: `string`

canvas id

#### Implementation of

[ImagePixelInformationInterface](../interfaces/interface_ImagePixelInformation.ImagePixelInformationInterface.md).[canvasId](../interfaces/interface_ImagePixelInformation.ImagePixelInformationInterface.md#canvasid)

#### Inherited from

ImagePixelInformation.canvasId

#### Defined in

[components/imagePixelInformation/index.ts:4](https://github.com/17562105692/printease/blob/57b5559/src/components/imagePixelInformation/index.ts#L4)

___

### context

• **context**: `any`

canvas context

#### Implementation of

[ImagePixelInformationInterface](../interfaces/interface_ImagePixelInformation.ImagePixelInformationInterface.md).[context](../interfaces/interface_ImagePixelInformation.ImagePixelInformationInterface.md#context)

#### Inherited from

ImagePixelInformation.context

#### Defined in

[components/imagePixelInformation/index.ts:3](https://github.com/17562105692/printease/blob/57b5559/src/components/imagePixelInformation/index.ts#L3)

## Methods

### getImageData

▸ **getImageData**(`canvasId`, `componentInstance`, `imageResource`, `width?`, `height?`): `Promise`<`any`\>

@description: Get image pixel information（rgba）

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `canvasId` | `string` | `undefined` | canvas id |
| `componentInstance` | `object` | `undefined` | The custom component instance this means to search for <canvas/> with canvas-id under this custom component, if omitted, it will not be searched in any custom component |
| `imageResource` | `string` | `undefined` | image absolute path |
| `width` | `number` | `200` | The width of the rectangle from which the pixel data will be retrieved |
| `height` | `number` | `200` | The height of the rectangle from which the pixel data will be retrieved |

#### Returns

`Promise`<`any`\>

#### Implementation of

[ImagePixelInformationInterface](../interfaces/interface_ImagePixelInformation.ImagePixelInformationInterface.md).[getImageData](../interfaces/interface_ImagePixelInformation.ImagePixelInformationInterface.md#getimagedata)

#### Defined in

[components/imagePixelInformation/index.ts:68](https://github.com/17562105692/printease/blob/57b5559/src/components/imagePixelInformation/index.ts#L68)
