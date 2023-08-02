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

## Table of contents

### Constructors

- [constructor](components_imagePixelInformation.UniappImagePixelInformation.md#constructor)

### Properties

- [canvasId](components_imagePixelInformation.UniappImagePixelInformation.md#canvasid)
- [context](components_imagePixelInformation.UniappImagePixelInformation.md#context)

### Methods

- [createCanvas](components_imagePixelInformation.UniappImagePixelInformation.md#createcanvas)
- [drawImage](components_imagePixelInformation.UniappImagePixelInformation.md#drawimage)
- [getImageData](components_imagePixelInformation.UniappImagePixelInformation.md#getimagedata)

## Constructors

### constructor

• **new UniappImagePixelInformation**()

#### Overrides

ImagePixelInformation.constructor

#### Defined in

[components/imagePixelInformation/index.ts:22](https://github.com/17562105692/printease/blob/f4cf8ae/src/components/imagePixelInformation/index.ts#L22)

## Properties

### canvasId

• **canvasId**: `string`

#### Inherited from

ImagePixelInformation.canvasId

#### Defined in

[components/imagePixelInformation/index.ts:4](https://github.com/17562105692/printease/blob/f4cf8ae/src/components/imagePixelInformation/index.ts#L4)

___

### context

• **context**: `any`

#### Inherited from

ImagePixelInformation.context

#### Defined in

[components/imagePixelInformation/index.ts:3](https://github.com/17562105692/printease/blob/f4cf8ae/src/components/imagePixelInformation/index.ts#L3)

## Methods

### createCanvas

▸ **createCanvas**(`canvasId`, `componentInstance`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvasId` | `string` |
| `componentInstance` | `object` |

#### Returns

`void`

#### Overrides

ImagePixelInformation.createCanvas

#### Defined in

[components/imagePixelInformation/index.ts:25](https://github.com/17562105692/printease/blob/f4cf8ae/src/components/imagePixelInformation/index.ts#L25)

___

### drawImage

▸ **drawImage**(`imageResource`, `dx`, `dy`, `dWidth`, `dHeight`, `sx`, `sy`, `sWidth`, `sHeight`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `imageResource` | `string` |
| `dx` | `number` |
| `dy` | `number` |
| `dWidth` | `number` |
| `dHeight` | `number` |
| `sx` | `number` |
| `sy` | `number` |
| `sWidth` | `number` |
| `sHeight` | `number` |

#### Returns

`Promise`<`any`\>

#### Overrides

ImagePixelInformation.drawImage

#### Defined in

[components/imagePixelInformation/index.ts:32](https://github.com/17562105692/printease/blob/f4cf8ae/src/components/imagePixelInformation/index.ts#L32)

___

### getImageData

▸ **getImageData**(`x`, `y`, `width`, `height`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |

#### Returns

`Promise`<`any`\>

#### Overrides

ImagePixelInformation.getImageData

#### Defined in

[components/imagePixelInformation/index.ts:44](https://github.com/17562105692/printease/blob/f4cf8ae/src/components/imagePixelInformation/index.ts#L44)
