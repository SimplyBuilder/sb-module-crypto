use base64::Engine;
use std::str;

/// Encodes a string into Base64 format.
///
/// Arguments:
/// * `input`: The string to encode.
///
/// Returns:
/// A string representing the Base64 encoded representation of `input`.
#[allow(dead_code)]
#[inline]
pub fn core_base64_encode(input: &str) -> String {
    base64::prelude::BASE64_STANDARD.encode(input.as_bytes())

}
/// Decodes a Base64 encoded string.
///
/// Arguments:
/// * `input`: The Base64 encoded string to decode.
///
/// Returns:
/// A string representing the decoded content of `input`.
#[allow(dead_code)]
#[inline]
pub fn core_base64_decode(input: &str) -> String {
    let decoded = base64::prelude::BASE64_STANDARD.decode(input.as_bytes()).unwrap();
    str::from_utf8(&decoded).unwrap().to_string()
}