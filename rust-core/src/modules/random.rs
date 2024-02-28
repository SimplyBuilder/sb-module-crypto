use uuid::{Uuid};
use rand::{distributions::Uniform, Rng};

/// Generates a random Universally Unique Identifier (UUID) version 4.
///
/// Returns:
/// A string representing the generated UUIDv4.
#[allow(dead_code)]
#[inline]
pub fn core_random_uuidv4() -> String {
    Uuid::new_v4().to_string()
}
/// Generates a vector of random bytes of specified size.
///
/// Arguments:
/// * `size`: The desired size of the generated random byte vector.
///
/// Returns:
/// A vector containing `size` random bytes.
#[allow(dead_code)]
#[inline]
pub fn core_random_bytes(size: usize) -> Vec<u8> {
    let mut rng = rand::thread_rng();
    let dist = Uniform::new_inclusive(0, u8::MAX);
    (0..size).map(|_| rng.sample(dist)).collect()
}