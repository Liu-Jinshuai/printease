[printease](../README.md) / [Modules](../modules.md) / types/dataProcessing

# Module: types/dataProcessing

## Table of contents

### Type Aliases

- [Fragmentation](types_dataProcessing.md#fragmentation)

## Type Aliases

### Fragmentation

Ƭ **Fragmentation**: (`buffer`: `ArrayBuffer`, `fragmentSize`: `number`, `callback`: (`fragment`: `ArrayBuffer`, `iterator`: `Iterator`<`ArrayBuffer`\>) => `void`) => `void`

#### Type declaration

▸ (`buffer`, `fragmentSize`, `callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `ArrayBuffer` |
| `fragmentSize` | `number` |
| `callback` | (`fragment`: `ArrayBuffer`, `iterator`: `Iterator`<`ArrayBuffer`\>) => `void` |

##### Returns

`void`

**`Description`**

Shard the arraybuffer data

#### Defined in

[types/dataProcessing.ts:8](https://github.com/Liu-Jinshuai/printease/blob/26e3b3c/src/types/dataProcessing.ts#L8)
