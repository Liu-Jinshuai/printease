[printease](../README.md) / [Modules](../modules.md) / [components/uniPdfInformation](../modules/components_uniPdfInformation.md) / UniPdfInformation

# Class: UniPdfInformation

[components/uniPdfInformation](../modules/components_uniPdfInformation.md).UniPdfInformation

pdf information

## Implements

- [`PdfInformationInterface`](../interfaces/interface_pdfInformation.PdfInformationInterface.md)

## Table of contents

### Constructors

- [constructor](components_uniPdfInformation.UniPdfInformation.md#constructor)

### Properties

- [imageContent](components_uniPdfInformation.UniPdfInformation.md#imagecontent)
- [pageCount](components_uniPdfInformation.UniPdfInformation.md#pagecount)
- [pdfInstance](components_uniPdfInformation.UniPdfInformation.md#pdfinstance)
- [pdfjsLib](components_uniPdfInformation.UniPdfInformation.md#pdfjslib)
- [textContent](components_uniPdfInformation.UniPdfInformation.md#textcontent)

### Methods

- [getPdfImage](components_uniPdfInformation.UniPdfInformation.md#getpdfimage)
- [getPdfPageCount](components_uniPdfInformation.UniPdfInformation.md#getpdfpagecount)
- [getPdfText](components_uniPdfInformation.UniPdfInformation.md#getpdftext)
- [init](components_uniPdfInformation.UniPdfInformation.md#init)
- [loadPdfFile](components_uniPdfInformation.UniPdfInformation.md#loadpdffile)
- [loadUniPdfFile](components_uniPdfInformation.UniPdfInformation.md#loadunipdffile)

## Constructors

### constructor

• **new UniPdfInformation**()

## Properties

### imageContent

• **imageContent**: {}[]

#### Implementation of

[PdfInformationInterface](../interfaces/interface_pdfInformation.PdfInformationInterface.md).[imageContent](../interfaces/interface_pdfInformation.PdfInformationInterface.md#imagecontent)

#### Defined in

[components/uniPdfInformation/index.ts:6](https://github.com/Liu-Jinshuai/printease/blob/b77399d/src/components/uniPdfInformation/index.ts#L6)

___

### pageCount

• **pageCount**: `number` = `0`

#### Implementation of

[PdfInformationInterface](../interfaces/interface_pdfInformation.PdfInformationInterface.md).[pageCount](../interfaces/interface_pdfInformation.PdfInformationInterface.md#pagecount)

#### Defined in

[components/uniPdfInformation/index.ts:4](https://github.com/Liu-Jinshuai/printease/blob/b77399d/src/components/uniPdfInformation/index.ts#L4)

___

### pdfInstance

• **pdfInstance**: `any`

#### Implementation of

[PdfInformationInterface](../interfaces/interface_pdfInformation.PdfInformationInterface.md).[pdfInstance](../interfaces/interface_pdfInformation.PdfInformationInterface.md#pdfinstance)

#### Defined in

[components/uniPdfInformation/index.ts:8](https://github.com/Liu-Jinshuai/printease/blob/b77399d/src/components/uniPdfInformation/index.ts#L8)

___

### pdfjsLib

• **pdfjsLib**: `any`

#### Implementation of

[PdfInformationInterface](../interfaces/interface_pdfInformation.PdfInformationInterface.md).[pdfjsLib](../interfaces/interface_pdfInformation.PdfInformationInterface.md#pdfjslib)

#### Defined in

[components/uniPdfInformation/index.ts:7](https://github.com/Liu-Jinshuai/printease/blob/b77399d/src/components/uniPdfInformation/index.ts#L7)

___

### textContent

• **textContent**: `object` = `{}`

#### Implementation of

[PdfInformationInterface](../interfaces/interface_pdfInformation.PdfInformationInterface.md).[textContent](../interfaces/interface_pdfInformation.PdfInformationInterface.md#textcontent)

#### Defined in

[components/uniPdfInformation/index.ts:5](https://github.com/Liu-Jinshuai/printease/blob/b77399d/src/components/uniPdfInformation/index.ts#L5)

## Methods

### getPdfImage

▸ **getPdfImage**(): {}[]

get pdf image

#### Returns

{}[]

#### Implementation of

[PdfInformationInterface](../interfaces/interface_pdfInformation.PdfInformationInterface.md).[getPdfImage](../interfaces/interface_pdfInformation.PdfInformationInterface.md#getpdfimage)

#### Defined in

[components/uniPdfInformation/index.ts:47](https://github.com/Liu-Jinshuai/printease/blob/b77399d/src/components/uniPdfInformation/index.ts#L47)

___

### getPdfPageCount

▸ **getPdfPageCount**(): `Promise`<`unknown`\>

get pdf page count

#### Returns

`Promise`<`unknown`\>

#### Implementation of

[PdfInformationInterface](../interfaces/interface_pdfInformation.PdfInformationInterface.md).[getPdfPageCount](../interfaces/interface_pdfInformation.PdfInformationInterface.md#getpdfpagecount)

#### Defined in

[components/uniPdfInformation/index.ts:39](https://github.com/Liu-Jinshuai/printease/blob/b77399d/src/components/uniPdfInformation/index.ts#L39)

___

### getPdfText

▸ **getPdfText**(): `object`

get pdf Text

#### Returns

`object`

#### Implementation of

[PdfInformationInterface](../interfaces/interface_pdfInformation.PdfInformationInterface.md).[getPdfText](../interfaces/interface_pdfInformation.PdfInformationInterface.md#getpdftext)

#### Defined in

[components/uniPdfInformation/index.ts:35](https://github.com/Liu-Jinshuai/printease/blob/b77399d/src/components/uniPdfInformation/index.ts#L35)

___

### init

▸ **init**(): `void`

init

#### Returns

`void`

#### Implementation of

[PdfInformationInterface](../interfaces/interface_pdfInformation.PdfInformationInterface.md).[init](../interfaces/interface_pdfInformation.PdfInformationInterface.md#init)

#### Defined in

[components/uniPdfInformation/index.ts:9](https://github.com/Liu-Jinshuai/printease/blob/b77399d/src/components/uniPdfInformation/index.ts#L9)

___

### loadPdfFile

▸ **loadPdfFile**(): `Promise`<`unknown`\>

load pdf file

#### Returns

`Promise`<`unknown`\>

#### Implementation of

[PdfInformationInterface](../interfaces/interface_pdfInformation.PdfInformationInterface.md).[loadPdfFile](../interfaces/interface_pdfInformation.PdfInformationInterface.md#loadpdffile)

#### Defined in

[components/uniPdfInformation/index.ts:15](https://github.com/Liu-Jinshuai/printease/blob/b77399d/src/components/uniPdfInformation/index.ts#L15)

___

### loadUniPdfFile

▸ **loadUniPdfFile**(`file`, `webviewObj`): `Promise`<`unknown`\>

load uni pdf file

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `any` | file path |
| `webviewObj` | `any` | webview object |

#### Returns

`Promise`<`unknown`\>

#### Implementation of

[PdfInformationInterface](../interfaces/interface_pdfInformation.PdfInformationInterface.md).[loadUniPdfFile](../interfaces/interface_pdfInformation.PdfInformationInterface.md#loadunipdffile)

#### Defined in

[components/uniPdfInformation/index.ts:25](https://github.com/Liu-Jinshuai/printease/blob/b77399d/src/components/uniPdfInformation/index.ts#L25)
