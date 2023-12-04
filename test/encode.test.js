import textEncoder from '../src/utils/encoding'

test('encode gb18030', () => {
    expect(textEncoder('gb18030', '你好')).toEqual(new Uint8Array([0xC4, 0xE3, 0xBA, 0xC3]))
})
test('encode utf-8', () => {
    expect(textEncoder('utf-8', '你好')).toEqual(new Uint8Array([0xE4, 0xBD, 0xA0, 0xE5, 0xA5, 0xBD]))
})