[printease](../README.md) / [Modules](../modules.md) / [components/imagePixelInformation](../modules/components_imagePixelInformation.md) / JavaScriptImagePixelInformation

# Class: JavaScriptImagePixelInformation

[components/imagePixelInformation](../modules/components_imagePixelInformation.md).JavaScriptImagePixelInformation

**`Classdesc`**

JavaScript gets image pixel information

**`Implements`**

ImagePixelInformationInterface

**`Classes`**

JavaScriptImagePixelInformation

**`Param`**

grayscale threshold（default 100）

## Hierarchy

- `ImagePixelInformation`

  ↳ **`JavaScriptImagePixelInformation`**

## Implements

- [`ImagePixelInformationInterface`](../interfaces/interface_ImagePixelInformation.ImagePixelInformationInterface.md)

## Table of contents

### Constructors

- [constructor](components_imagePixelInformation.JavaScriptImagePixelInformation.md#constructor)

### Properties

- [grayThreshold](components_imagePixelInformation.JavaScriptImagePixelInformation.md#graythreshold)

### Methods

- [getImageData](components_imagePixelInformation.JavaScriptImagePixelInformation.md#getimagedata)
- [uniGetImageData](components_imagePixelInformation.JavaScriptImagePixelInformation.md#unigetimagedata)

## Constructors

### constructor

• **new JavaScriptImagePixelInformation**(`grayThreshold`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `grayThreshold` | `number` |

#### Overrides

ImagePixelInformation.constructor

#### Defined in

[components/imagePixelInformation/index.ts:60](https://github.com/Liu-Jinshuai/printease/blob/cd89e37/src/components/imagePixelInformation/index.ts#L60)

## Properties

### grayThreshold

• **grayThreshold**: `number`

@description: grayscale threshold（default 100）

#### Implementation of

[ImagePixelInformationInterface](../interfaces/interface_ImagePixelInformation.ImagePixelInformationInterface.md).[grayThreshold](../interfaces/interface_ImagePixelInformation.ImagePixelInformationInterface.md#graythreshold)

#### Defined in

[components/imagePixelInformation/index.ts:59](https://github.com/Liu-Jinshuai/printease/blob/cd89e37/src/components/imagePixelInformation/index.ts#L59)

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

#### Overrides

ImagePixelInformation.getImageData

#### Defined in

[components/imagePixelInformation/index.ts:64](https://github.com/Liu-Jinshuai/printease/blob/cd89e37/src/components/imagePixelInformation/index.ts#L64)

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

#### Inherited from

ImagePixelInformation.uniGetImageData

#### Defined in

[components/imagePixelInformation/index.ts:8](https://github.com/Liu-Jinshuai/printease/blob/cd89e37/src/components/imagePixelInformation/index.ts#L8)
