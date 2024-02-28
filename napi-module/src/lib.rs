use napi_derive::napi;

const MIN_RANDOM_BYTES: u32 = 32;
const MAX_RANDOM_BYTES: u32 = 4096;

use sb_utils_cripto:: {
    base64:: {core_base64_encode, core_base64_decode},
    random:: {core_random_bytes, core_random_uuidv4},
    hash:: {core_sha256, core_sha512, core_md5}
};

/// Calculates the MD5 hash of a string.
///
/// Arguments:
/// * `input`: The string to calculate the hash of.
///
/// Returns:
/// A string representing the MD5 hash of `input` in hexadecimal format.
#[napi]
pub fn md5(input: String) -> String {
    core_md5(&input)
}
/// Calculates the SHA-256 hash of a string.
///
/// Arguments:
/// * `input`: The string to calculate the hash of.
///
/// Returns:
/// A string representing the SHA-256 hash of `input` in hexadecimal format.
#[napi]
pub fn sha256(input: String) -> String {
    core_sha256(&input)
}
/// Calculates the SHA-512 hash of a string.
///
/// Arguments:
/// * `input`: The string to calculate the hash of.
///
/// Returns:
/// A string representing the SHA-512 hash of `input` in hexadecimal format.
#[napi]
pub fn sha512(input: String) -> String {
    core_sha512(&input)
}
/// Encodes a string in Base64.
///
/// Arguments:
/// * `input`: The string to encode.
///
/// Returns:
/// A string representing the Base64 encoding of `input`.
#[napi]
pub fn base64_encode(input: String) -> String {
    core_base64_encode(&input)
}
/// Decodes a Base64 encoded string.
///
/// Arguments:
/// * `input`: The Base64 encoded string to decode.
///
/// Returns:
/// The decoded string from `input`.
#[napi]
pub fn base64_decode(input: String) -> String {
    core_base64_decode(&input)
}
/// Generates a random Universally Unique Identifier (UUID) version 4.
///
/// Returns:
/// A string representing the generated UUIDv4.
#[napi]
pub fn random_uuidv4() -> String {
    core_random_uuidv4()
}
/// Generates a vector of random bytes with a specified size.
///
/// Arguments:
/// * `size`: Desired size of the random byte vector (optional).
///
/// Returns:
/// A vector containing `size` random bytes.
///
/// Remarks:
/// If no `size` is provided or if `size` is 0, a minimum of 32 bytes will be generated.
/// The size is capped at a maximum of 4096 bytes.
#[napi]
pub fn random_bytes(size: Option<u32>) -> Vec<u8> {
    let len = match size {
        Some(0) | None => MIN_RANDOM_BYTES,
        Some(len) => len.min(MAX_RANDOM_BYTES),
    } as usize;
    core_random_bytes(len)
}