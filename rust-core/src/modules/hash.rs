use md5::{Md5};
use sha2::{Digest, Sha256, Sha512};
use std::str;

/// Calculates the MD5 hash of a string.
///
/// Arguments:
/// * `input`: The string to calculate the hash of.
///
/// Returns:
/// A string representing the MD5 hash of `input` in hexadecimal format.
#[allow(dead_code)]
#[inline]
pub fn core_md5(input: &str) -> String {
    let mut hasher = Md5::new();
    hasher.update(input);
    let result = hasher.finalize();
    format!("{:x}", result)
}
/// Calculates the SHA-256 hash of a string.
///
/// Arguments:
/// * `input`: The string to calculate the hash of.
///
/// Returns:
/// A string representing the SHA-256 hash of `input` in hexadecimal format.
#[allow(dead_code)]
#[inline]
pub fn core_sha256(input: &str) -> String {
    let mut hasher = Sha256::new();
    hasher.update(input);
    let result = hasher.finalize();
    format!("{:x}", result)
}
/// Calculates the SHA-512 hash of a string.
///
/// Arguments:
/// * `input`: The string to calculate the hash of.
///
/// Returns:
/// A string representing the SHA-512 hash of `input` in hexadecimal format.
#[allow(dead_code)]
#[inline]
pub fn core_sha512(input: &str) -> String {
    let mut hasher = Sha512::new();
    hasher.update(input);
    let result = hasher.finalize();
    format!("{:x}", result)
}