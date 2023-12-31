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
- [loadUniPdfFile](interface_pdfInformation.PdfInformationInterface.md#loadunipdffile)
- [pageCount](interface_pdfInformation.PdfInformationInterface.md#pagecount)
- [pdfInstance](interface_pdfInformation.PdfInformationInterface.md#pdfinstance)
- [pdfjsLib](interface_pdfInformation.PdfInformationInterface.md#pdfjslib)
- [textContent](interface_pdfInformation.PdfInformationInterface.md#textcontent)

## Properties

### getPdfImage

• **getPdfImage**: () => `any`

#### Type declaration

▸ (): `any`

get pdf image

##### Returns

`any`

#### Defined in

[interface/pdfInformation.ts:36](https://github.com/Liu-Jinshuai/printease/blob/f0ce9b9/src/interface/pdfInformation.ts#L36)

___

### getPdfPageCount

• **getPdfPageCount**: () => `Promise`<`unknown`\>

#### Type declaration

▸ (): `Promise`<`unknown`\>

get pdf page count

##### Returns

`Promise`<`unknown`\>

#### Defined in

[interface/pdfInformation.ts:32](https://github.com/Liu-Jinshuai/printease/blob/f0ce9b9/src/interface/pdfInformation.ts#L32)

___

### getPdfText

• **getPdfText**: () => `object`

#### Type declaration

▸ (): `object`

get pdf Text

##### Returns

`object`

#### Defined in

[interface/pdfInformation.ts:28](https://github.com/Liu-Jinshuai/printease/blob/f0ce9b9/src/interface/pdfInformation.ts#L28)

___

### imageContent

• **imageContent**: `object`[]

#### Defined in

[interface/pdfInformation.ts:9](https://github.com/Liu-Jinshuai/printease/blob/f0ce9b9/src/interface/pdfInformation.ts#L9)

___

### init

• **init**: () => `void`

#### Type declaration

▸ (): `void`

init

##### Returns

`void`

#### Defined in

[interface/pdfInformation.ts:13](https://github.com/Liu-Jinshuai/printease/blob/f0ce9b9/src/interface/pdfInformation.ts#L13)

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

[interface/pdfInformation.ts:17](https://github.com/Liu-Jinshuai/printease/blob/f0ce9b9/src/interface/pdfInformation.ts#L17)

___

### loadUniPdfFile

• **loadUniPdfFile**: (`file`: `any`, `webviewObj`: `object`) => `Promise`<`any`\>

#### Type declaration

▸ (`file`, `webviewObj`): `Promise`<`any`\>

load uni pdf file

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `any` | file path |
| `webviewObj` | `object` | webview object |

##### Returns

`Promise`<`any`\>

#### Defined in

[interface/pdfInformation.ts:24](https://github.com/Liu-Jinshuai/printease/blob/f0ce9b9/src/interface/pdfInformation.ts#L24)

___

### pageCount

• **pageCount**: `number`

#### Defined in

[interface/pdfInformation.ts:7](https://github.com/Liu-Jinshuai/printease/blob/f0ce9b9/src/interface/pdfInformation.ts#L7)

___

### pdfInstance

• **pdfInstance**: `any`

#### Defined in

[interface/pdfInformation.ts:6](https://github.com/Liu-Jinshuai/printease/blob/f0ce9b9/src/interface/pdfInformation.ts#L6)

___

### pdfjsLib

• **pdfjsLib**: `any`

#### Defined in

[interface/pdfInformation.ts:5](https://github.com/Liu-Jinshuai/printease/blob/f0ce9b9/src/interface/pdfInformation.ts#L5)

___

### textContent

• **textContent**: `object`

#### Defined in

[interface/pdfInformation.ts:8](https://github.com/Liu-Jinshuai/printease/blob/f0ce9b9/src/interface/pdfInformation.ts#L8)
