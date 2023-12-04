import encoding from "./encoding";

function TextEncoder(encode = 'utf-8', content) {
    let code = new encoding.TextEncoder(
        encode, {
        NONSTANDARD_allowLegacyEncoding: true
    })
    return code.encode(content)
}

export default TextEncoder;