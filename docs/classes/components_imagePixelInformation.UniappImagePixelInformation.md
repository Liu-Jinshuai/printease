[printease](../README.md) / [Modules](../modules.md) / [components/imagePixelInformation](../modules/components_imagePixelInformation.md) / UniappImagePixelInformation

# Class: UniappImagePixelInformation

[components/imagePixelInformation](../modules/components_imagePixelInformation.md).UniappImagePixelInformation

**`Classdesc`**

uniapp gets image pixel information

**`Classes`**

UniappImagePixelInformation

**`Implements`**

ImagePixelInformationInterface

**`Param`**

grayscale threshold（default 100）

## Hierarchy

- `ImagePixelInformation`

  ↳ **`UniappImagePixelInformation`**

## Implements

- [`ImagePixelInformationInterface`](../interfaces/interface_ImagePixelInformation.ImagePixelInformationInterface.md)

## Table of contents

### Constructors

- [constructor](components_imagePixelInformation.UniappImagePixelInformation.md#constructor)

### Properties

- [grayThreshold](components_imagePixelInformation.UniappImagePixelInformation.md#graythreshold)

### Methods

- [getImageData](components_imagePixelInformation.UniappImagePixelInformation.md#getimagedata)
- [uniGetImageData](components_imagePixelInformation.UniappImagePixelInformation.md#unigetimagedata)

## Constructors

### constructor

• **new UniappImagePixelInformation**(`grayThreshold`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `grayThreshold` | `number` |

#### Overrides

ImagePixelInformation.constructor

#### Defined in

[components/imagePixelInformation/index.ts:21](https://github.com/Liu-Jinshuai/printease/blob/26e3b3c/src/components/imagePixelInformation/index.ts#L21)

## Properties

### grayThreshold

• **grayThreshold**: `number`

@description: grayscale threshold（default 100）

#### Implementation of

[ImagePixelInformationInterface](../interfaces/interface_ImagePixelInformation.ImagePixelInformationInterface.md).[grayThreshold](../interfaces/interface_ImagePixelInformation.ImagePixelInformationInterface.md#graythreshold)

#### Defined in

[components/imagePixelInformation/index.ts:20](https://github.com/Liu-Jinshuai/printease/blob/26e3b3c/src/components/imagePixelInformation/index.ts#L20)

## Methods

### getImageData

▸ **getImageData**(`imageResource`, `width?`, `height?`, `callback`): `void`

@description: Get image pixel information（rgba）

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `imageResource` | `string` | `undefined` | image path |
| `width` | `number` | `256` | The width of the rectangle from which the pixel data will be retrieved; |
| `height` | `number` | `256` | The height of the rectangle from which the pixel data will be retrieved |
| `callback` | (`pixelInformation`: `object`) => `void` | `undefined` | callback function |

#### Returns

`void`

#### Implementation of

[ImagePixelInformationInterface](../interfaces/interface_ImagePixelInformation.ImagePixelInformationInterface.md).[getImageData](../interfaces/interface_ImagePixelInformation.ImagePixelInformationInterface.md#getimagedata)

#### Inherited from

ImagePixelInformation.getImageData

#### Defined in

[components/imagePixelInformation/index.ts:9](https://github.com/Liu-Jinshuai/printease/blob/26e3b3c/src/components/imagePixelInformation/index.ts#L9)

___

### uniGetImageData

▸ **uniGetImageData**(`canvasId`, `imageResource`, `width?`, `height?`, `callback`): `void`

@description: Uniapp Get image pixel information（rgba）

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `canvasId` | `string` | `undefined` | canvas id |
| `imageResource` | `string` | `undefined` | image path |
| `width` | `number` | `256` | The width of the rectangle from which the pixel data will be retrieved; |
| `height` | `number` | `256` | The height of the rectangle from which the pixel data will be retrieved |
| `callback` | (`pixelInformation`: `object`) => `void` | `undefined` | callback function |

#### Returns

`void`

#### Implementation of

[ImagePixelInformationInterface](../interfaces/interface_ImagePixelInformation.ImagePixelInformationInterface.md).[uniGetImageData](../interfaces/interface_ImagePixelInformation.ImagePixelInformationInterface.md#unigetimagedata)

#### Overrides

ImagePixelInformation.uniGetImageData

#### Defined in

[components/imagePixelInformation/index.ts:25](https://github.com/Liu-Jinshuai/printease/blob/26e3b3c/src/components/imagePixelInformation/index.ts#L25)
