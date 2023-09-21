[printease](../README.md) / [Modules](../modules.md) / [components/pdfInformation](../modules/components_pdfInformation.md) / PdfInformation

# Class: PdfInformation

[components/pdfInformation](../modules/components_pdfInformation.md).PdfInformation

pdf information

## Implements

- [`PdfInformationInterface`](../interfaces/interface_pdfInformation.PdfInformationInterface.md)

## Table of contents

### Constructors

- [constructor](components_pdfInformation.PdfInformation.md#constructor)

### Properties

- [imageContent](components_pdfInformation.PdfInformation.md#imagecontent)
- [pageCount](components_pdfInformation.PdfInformation.md#pagecount)
- [pdfInstance](components_pdfInformation.PdfInformation.md#pdfinstance)
- [pdfjsLib](components_pdfInformation.PdfInformation.md#pdfjslib)
- [textContent](components_pdfInformation.PdfInformation.md#textcontent)

### Methods

- [getPdfImage](components_pdfInformation.PdfInformation.md#getpdfimage)
- [getPdfPageCount](components_pdfInformation.PdfInformation.md#getpdfpagecount)
- [getPdfText](components_pdfInformation.PdfInformation.md#getpdftext)
- [init](components_pdfInformation.PdfInformation.md#init)
- [loadPdfFile](components_pdfInformation.PdfInformation.md#loadpdffile)
- [loadUniPdfFile](components_pdfInformation.PdfInformation.md#loadunipdffile)

## Constructors

### constructor

• **new PdfInformation**()

## Properties

### imageContent

• **imageContent**: {}[]

#### Implementation of

[PdfInformationInterface](../interfaces/interface_pdfInformation.PdfInformationInterface.md).[imageContent](../interfaces/interface_pdfInformation.PdfInformationInterface.md#imagecontent)

#### Defined in

[components/pdfInformation/index.ts:6](https://github.com/Liu-Jinshuai/printease/blob/87fa96f/src/components/pdfInformation/index.ts#L6)

___

### pageCount

• **pageCount**: `number` = `0`

#### Implementation of

[PdfInformationInterface](../interfaces/interface_pdfInformation.PdfInformationInterface.md).[pageCount](../interfaces/interface_pdfInformation.PdfInformationInterface.md#pagecount)

#### Defined in

[components/pdfInformation/index.ts:4](https://github.com/Liu-Jinshuai/printease/blob/87fa96f/src/components/pdfInformation/index.ts#L4)

___

### pdfInstance

• **pdfInstance**: `any`

#### Implementation of

[PdfInformationInterface](../interfaces/interface_pdfInformation.PdfInformationInterface.md).[pdfInstance](../interfaces/interface_pdfInformation.PdfInformationInterface.md#pdfinstance)

#### Defined in

[components/pdfInformation/index.ts:8](https://github.com/Liu-Jinshuai/printease/blob/87fa96f/src/components/pdfInformation/index.ts#L8)

___

### pdfjsLib

• **pdfjsLib**: `any`

#### Implementation of

[PdfInformationInterface](../interfaces/interface_pdfInformation.PdfInformationInterface.md).[pdfjsLib](../interfaces/interface_pdfInformation.PdfInformationInterface.md#pdfjslib)

#### Defined in

[components/pdfInformation/index.ts:7](https://github.com/Liu-Jinshuai/printease/blob/87fa96f/src/components/pdfInformation/index.ts#L7)

___

### textContent

• **textContent**: `object` = `{}`

#### Implementation of

[PdfInformationInterface](../interfaces/interface_pdfInformation.PdfInformationInterface.md).[textContent](../interfaces/interface_pdfInformation.PdfInformationInterface.md#textcontent)

#### Defined in

[components/pdfInformation/index.ts:5](https://github.com/Liu-Jinshuai/printease/blob/87fa96f/src/components/pdfInformation/index.ts#L5)

## Methods

### getPdfImage

▸ **getPdfImage**(): {}[]

get pdf image

#### Returns

{}[]

#### Implementation of

[PdfInformationInterface](../interfaces/interface_pdfInformation.PdfInformationInterface.md).[getPdfImage](../interfaces/interface_pdfInformation.PdfInformationInterface.md#getpdfimage)

#### Defined in

[components/pdfInformation/index.ts:104](https://github.com/Liu-Jinshuai/printease/blob/87fa96f/src/components/pdfInformation/index.ts#L104)

___

### getPdfPageCount

▸ **getPdfPageCount**(): `Promise`<`unknown`\>

get pdf page count

#### Returns

`Promise`<`unknown`\>

#### Implementation of

[PdfInformationInterface](../interfaces/interface_pdfInformation.PdfInformationInterface.md).[getPdfPageCount](../interfaces/interface_pdfInformation.PdfInformationInterface.md#getpdfpagecount)

#### Defined in

[components/pdfInformation/index.ts:96](https://github.com/Liu-Jinshuai/printease/blob/87fa96f/src/components/pdfInformation/index.ts#L96)

___

### getPdfText

▸ **getPdfText**(): `object`

get pdf Text

#### Returns

`object`

#### Implementation of

[PdfInformationInterface](../interfaces/interface_pdfInformation.PdfInformationInterface.md).[getPdfText](../interfaces/interface_pdfInformation.PdfInformationInterface.md#getpdftext)

#### Defined in

[components/pdfInformation/index.ts:93](https://github.com/Liu-Jinshuai/printease/blob/87fa96f/src/components/pdfInformation/index.ts#L93)

___

### init

▸ **init**(): `void`

init

#### Returns

`void`

#### Implementation of

[PdfInformationInterface](../interfaces/interface_pdfInformation.PdfInformationInterface.md).[init](../interfaces/interface_pdfInformation.PdfInformationInterface.md#init)

#### Defined in

[components/pdfInformation/index.ts:9](https://github.com/Liu-Jinshuai/printease/blob/87fa96f/src/components/pdfInformation/index.ts#L9)

___

### loadPdfFile

▸ **loadPdfFile**(): `void`

load pdf file

#### Returns

`void`

#### Implementation of

[PdfInformationInterface](../interfaces/interface_pdfInformation.PdfInformationInterface.md).[loadPdfFile](../interfaces/interface_pdfInformation.PdfInformationInterface.md#loadpdffile)

#### Defined in

[components/pdfInformation/index.ts:15](https://github.com/Liu-Jinshuai/printease/blob/87fa96f/src/components/pdfInformation/index.ts#L15)

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

[components/pdfInformation/index.ts:83](https://github.com/Liu-Jinshuai/printease/blob/87fa96f/src/components/pdfInformation/index.ts#L83)
