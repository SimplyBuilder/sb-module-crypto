use sb_utils_cripto:: {
    base64:: {core_base64_encode, core_base64_decode},
    random:: {core_random_bytes, core_random_uuidv4},
    hash:: {core_sha256, core_sha512, core_md5}
};

#[test]
fn test_core_md5() {
    let input = "hello";
    let expected_output = "5d41402abc4b2a76b9719d911017c592";
    assert_eq!(core_md5(input), expected_output);
    let input = "world";
    let expected_output = "7d793037a0760186574b0282f2f435e7";
    assert_eq!(core_md5(input), expected_output);
}
#[test]
fn test_core_sha256() {
    let input = "hello";
    let expected_output = "2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824";
    assert_eq!(core_sha256(input), expected_output);
    let input = "world";
    let expected_output = "486ea46224d1bb4fb680f34f7c9ad96a8f24ec88be73ea8e5a6c65260e9cb8a7";
    assert_eq!(core_sha256(input), expected_output);
}
#[test]
fn test_core_sha512() {
    let input = "hello";
    let expected_output = "9b71d224bd62f3785d96d46ad3ea3d73319bfbc2890caadae2dff72519673ca7\
                            2323c3d99ba5c11d7c7acc6e14b8c5da0c4663475c2e5c3adef46f73bcdec043";
    assert_eq!(core_sha512(input), expected_output);
    let input = "world";
    let expected_output = "11853df40f4b2b919d3815f64792e58d08663767a494bcbb38c0b2389d9140bbb1\
                            70281b4a847be7757bde12c9cd0054ce3652d0ad3a1a0c92babb69798246ee";
    assert_eq!(core_sha512(input), expected_output);
}
#[test]
fn test_core_base64_encode_empty_input() {
    let input = "";
    let encoded = core_base64_encode(input);
    assert_eq!(encoded, "");
}
#[test]
fn test_core_base64_encode_single_character() {
    let input = "A";
    let encoded = core_base64_encode(input);
    assert_eq!(encoded, "QQ==");
}
#[test]
fn test_core_base64_encode_multiple_characters() {
    let input = "Hello, world!";
    let encoded = core_base64_encode(input);
    assert_eq!(encoded, "SGVsbG8sIHdvcmxkIQ==");
}
#[test]
fn test_core_base64_decode_empty_input() {
    let input = "";
    let decoded = core_base64_decode(input);
    assert_eq!(decoded, "");
}
#[test]
fn test_base64_decode_single_character() {
    let input = "QQ==";
    let decoded = core_base64_decode(input);
    assert_eq!(decoded, "A");
}
#[test]
fn test_core_base64_decode_multiple_characters() {
    let input = "SGVsbG8sIHdvcmxkIQ==";
    let decoded = core_base64_decode(input);
    assert_eq!(decoded, "Hello, world!");
}
#[test]
fn test_core_random_uuidv4_format() {
    let uuid = core_random_uuidv4();
        assert_eq!(uuid.len(), 36, "The string must be 36 bytes.");
        assert!(uuid.contains('-'));
}
#[test]
fn test_core_random_bytes_default_size() {
    let bytes = core_random_bytes(32);
    assert_eq!(bytes.len(), 32, "The vector must be 32 bytes.");
}
#[test]
fn test_core_random_bytes_max_size() {
    let bytes = core_random_bytes(4096);
    assert_eq!(bytes.len(), 4096, "The vector must be 4096 bytes.");
}
#[test]
fn test_core_random_bytes_zero_size() {
    let bytes = core_random_bytes(0);
    assert_eq!(bytes.len(), 0, "The vector must be 0 bytes.");
}
#[test]
fn test_core_random_bytes_custom_size() {
    let bytes = core_random_bytes(16);
    assert_eq!(bytes.len(), 16, "The vector must be 16 bytes.");
}