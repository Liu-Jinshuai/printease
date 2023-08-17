[printease](../README.md) / [Modules](../modules.md) / types/ImageProcessing

# Module: types/ImageProcessing

## Table of contents

### Type Aliases

- [ConvertBinaryDataToDecimalData](types_ImageProcessing.md#convertbinarydatatodecimaldata)
- [ConvertRgbToGrayscaleAndBinarization](types_ImageProcessing.md#convertrgbtograyscaleandbinarization)

## Type Aliases

### ConvertBinaryDataToDecimalData

Ƭ **ConvertBinaryDataToDecimalData**: (`data`: `number`[]) => `number`[]

#### Type declaration

▸ (`data`): `number`[]

Convert Binary Data Array to Decimal Data Array

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `number`[] | binarized data array |

##### Returns

`number`[]

array of decimal data

#### Defined in

[types/ImageProcessing.ts:14](https://github.com/Liu-Jinshuai/printease/blob/26e3b3c/src/types/ImageProcessing.ts#L14)

___

### ConvertRgbToGrayscaleAndBinarization

Ƭ **ConvertRgbToGrayscaleAndBinarization**: (`data`: `number`[], `grayThreshold?`: `number`) => `number`[]

#### Type declaration

▸ (`data`, `grayThreshold?`): `number`[]

Convert image to grayscale and binarization

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `number`[] | rgba data array |
| `grayThreshold?` | `number` | The size of this value determines the gray value, the default is 100, the maximum is 255 |

##### Returns

`number`[]

Gray scale binarized data array

#### Defined in

[types/ImageProcessing.ts:7](https://github.com/Liu-Jinshuai/printease/blob/26e3b3c/src/types/ImageProcessing.ts#L7)
