[printease](../README.md) / [Modules](../modules.md) / [interface/pdfInformation](../modules/interface_pdfInformation.md) / PdfInformationInterface

# Interface: PdfInformationInterface

[interface/pdfInformation](../modules/interface_pdfInformation.md).PdfInformationInterface

pdf information

## Implemented by

- [`PdfInformation`](../classes/components_pdfInformation.PdfInformation.md)
- [`UniPdfInformation`](../classes/components_uniPdfInformation.UniPdfInformation.md)

## Table of contents

### Properties

- [getPdfImage](interface_pdfInformation.PdfInformationInterface.md#getpdfimage)
- [getPdfPageCount](interface_pdfInformation.PdfInformationInterface.md#getpdfpagecount)
- [getPdfText](interface_pdfInformation.PdfInformationInterface.md#getpdftext)
- [imageContent](interface_pdfInformation.PdfInformationInterface.md#imagecontent)
- [init](interface_pdfInformation.PdfInformationInterface.md#init)
- [loadPdfFile](interface_pdfInformation.PdfInformationInterface.md#loadpdffile)
- [pageCount](interface_pdfInformation.PdfInformationInterface.md#pagecount)
- [pdfInstance](interface_pdfInformation.PdfInformationInterface.md#pdfinstance)
- [pdfjsLib](interface_pdfInformation.PdfInformationInterface.md#pdfjslib)
- [textContent](interface_pdfInformation.PdfInformationInterface.md#textcontent)

## Properties

### getPdfImage

• **getPdfImage**: (`page`: `number`, `convertRgba`: `boolean`) => `object`

#### Type declaration

▸ (`page`, `convertRgba`): `object`

get pdf image

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `page` | `number` | page number |
| `convertRgba` | `boolean` | convert to rgba default true |

##### Returns

`object`

#### Defined in

interface/pdfInformation.ts:32

___

### getPdfPageCount

• **getPdfPageCount**: () => `Promise`<`unknown`\>

#### Type declaration

▸ (): `Promise`<`unknown`\>

get pdf page count

##### Returns

`Promise`<`unknown`\>

#### Defined in

interface/pdfInformation.ts:26

___

### getPdfText

• **getPdfText**: (`page`: `number`) => `Promise`<`any`\>

#### Type declaration

▸ (`page`): `Promise`<`any`\>

get pdf Text

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `page` | `number` | page number |

##### Returns

`Promise`<`any`\>

#### Defined in

interface/pdfInformation.ts:22

___

### imageContent

• **imageContent**: `object`[]

#### Defined in

interface/pdfInformation.ts:9

___

### init

• **init**: () => `void`

#### Type declaration

▸ (): `void`

init

##### Returns

`void`

#### Defined in

interface/pdfInformation.ts:13

___

### loadPdfFile

• **loadPdfFile**: (`file`: `any`) => `void`

#### Type declaration

▸ (`file`): `void`

load pdf file

##### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `any` |

##### Returns

`void`

#### Defined in

interface/pdfInformation.ts:17

___

### pageCount

• **pageCount**: `number`

#### Defined in

interface/pdfInformation.ts:7

___

### pdfInstance

• **pdfInstance**: `any`

#### Defined in

interface/pdfInformation.ts:6

___

### pdfjsLib

• **pdfjsLib**: `any`

#### Defined in

interface/pdfInformation.ts:5

___

### textContent

• **textContent**: `object`

#### Defined in

interface/pdfInformation.ts:8
