use napi_derive::napi;

const MIN_RANDOM_BYTES: u32 = 32;
const MAX_RANDOM_BYTES: u32 = 4096;

use sb_utils_cripto:: {
    base64:: {core_base64_encode, core_base64_decode},
    random:: {core_random_bytes, core_random_uuidv4},
    hash:: {core_sha256, core_sha512, core_md5}
};

#[napi]
pub fn md5(input: String) -> String {
    core_md5(&input)
}

#[napi]
pub fn sha256(input: String) -> String {
    core_sha256(&input)
}

#[napi]
pub fn sha512(input: String) -> String {
    core_sha512(&input)
}

#[napi]
pub fn base64_encode(input: String) -> String {
    core_base64_encode(&input)
}

#[napi]
pub fn base64_decode(input: String) -> String {
    core_base64_decode(&input)
}

#[napi]
pub fn random_uuidv4() -> String {
    core_random_uuidv4()
}

#[napi]
pub fn random_bytes(size: Option<u32>) -> Vec<u8> {
    let len = match size {
        Some(0) | None => MIN_RANDOM_BYTES,
        Some(len) => len.min(MAX_RANDOM_BYTES),
    } as usize;
    core_random_bytes(len)
}