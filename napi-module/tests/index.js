const {hashMD5, hash256, hash512, base64Encode, base64Decode, randomUUIDV4, randomBytes} = require("..");
const {equal, ok} = require("node:assert");
const {describe, it} = require("node:test");

describe("hashMD5 tests", () => {
    it("hashMD5('hello')", () => {
        const input = "hello";
        const result = "5d41402abc4b2a76b9719d911017c592";
        equal(hashMD5(input), result);
    });
    it("hashMD5('world')", () => {
        const input = "world";
        const result = "7d793037a0760186574b0282f2f435e7";
        equal(hashMD5(input), result);
    });
});

describe("hash256 tests", () => {
    it("hash256('hello')", () => {
        const input = "hello";
        const result = "2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824";
        equal(hash256(input), result);
    });
    it("hash256('world')", () => {
        const input = "world";
        const result = "486ea46224d1bb4fb680f34f7c9ad96a8f24ec88be73ea8e5a6c65260e9cb8a7";
        equal(hash256(input), result);
    });
});

describe("hash512 tests", () => {
    it("hash512('hello')", () => {
        const input = "hello";
        const result = "9b71d224bd62f3785d96d46ad3ea3d73319bfbc2890caadae2dff72519673ca72323c3d99ba5c11d7c7acc6e14b8c5da0c4663475c2e5c3adef46f73bcdec043";
        equal(hash512(input), result);
    });
    it("hash512('world')", () => {
        const input = "world";
        const result = "11853df40f4b2b919d3815f64792e58d08663767a494bcbb38c0b2389d9140bbb170281b4a847be7757bde12c9cd0054ce3652d0ad3a1a0c92babb69798246ee";
        equal(hash512(input), result);
    });
});

describe("base64Encode tests", () => {
    it("base64Encode('hello')", () => {
        const input = "hello";
        const result = "aGVsbG8=";
        equal(base64Encode(input), result);
    });
    it("base64Encode('world')", () => {
        const input = "world";
        const result = "d29ybGQ=";
        equal(base64Encode(input), result);
    });
});

describe("base64Decode tests", () => {
    it("base64Decode('aGVsbG8=')", () => {
        const input = "aGVsbG8=";
        const result = "hello";
        equal(base64Decode(input), result);
    });
    it("base64Decode('d29ybGQ=')", () => {
        const input = "d29ybGQ=";
        const result = "world";
        equal(base64Decode(input), result);
    });
});

describe("randomUUIDV4 tests", () => {
    it("randomUUIDV4()", () => {
        const result = randomUUIDV4();
        equal(result.length, 36);
        ok(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(result));
    });
});
describe("randomBytes tests", () => {
    it("randomBytes()", () => {
        const result = randomBytes();
        equal(result.length, 32);
    });
    it("randomBytes(16)", () => {
        const result = randomBytes(16);
        equal(result.length, 16);
    });
    it("randomBytes(0)", () => {
        const result = randomBytes(0);
        equal(result.length, 32);
    });
});