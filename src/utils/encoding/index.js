import encoding from "./encoding";
function encoder(encode = 'utf-8', content) {
    let code = new encoding.textEncoder(
        encode, {
        NONSTANDARD_allowLegacyEncoding: true
    })
    return code.encode(content)
}

export default encoder;