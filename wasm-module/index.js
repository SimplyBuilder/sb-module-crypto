"use strict";

import init, * as wasm from './lib/sb_module_crypto.js';
await init();

/**
 * Custom error handler for SimplyBuilderCrypto. Throws a TypeError with a custom message.
 *
 * @param {string} message - Error message to be displayed.
 * @throws {TypeError} Throws a custom TypeError with the provided message.
 */
const SimplyBuilderCryptoError = (message) => {
    if(message) throw new TypeError('SimplyBuilderCryptoError: '+ message);
    return true;
};
/**
 * The SimplyBuilderCrypto object, providing a suite of cryptographic functions.
 * These functions include hashing (MD5, SHA256, SHA512), base64 encoding/decoding,
 * UUID v4 generation, and random bytes generation. It leverages dynamically loaded WASM
 * or native bindings for cryptographic operations.
 *
 * @name SimplyBuilderCrypto
 * @type {object}
 * @property {Function} hashMD5 - Generates an MD5 hash of a string.
 * @property {Function} hash256 - Generates a SHA256 hash of a string.
 * @property {Function} hash512 - Generates a SHA512 hash of a string.
 * @property {Function} base64Encode - Encodes a string to base64 format.
 * @property {Function} base64Decode - Decodes a base64 encoded string.
 * @property {Function} randomUUIDV4 - Generates a random UUID version 4 string.
 * @property {Function} randomBytes - Generates an array of random bytes.
 */
const SimplyBuilderCrypto = {
    /**
     * Generates an MD5 hash of a string.
     * @function hashMD5
     * @param {string} string - string to encode in md5 hash
     * @return string
     */
    hashMD5: (string) => {
        try {
            if(typeof string === "string") {
                return wasm.md5(string);
            } else SimplyBuilderCryptoError("The input data must be of type string!");
        } catch (err) {
            console.error(err);
        }
        return undefined;
    },
    /**
     * Generates a SHA256 hash of a string.
     * @function hash256
     * @param {string} string - string to encode in hash256 hash
     * @return string
     */
    hash256: (string) => {
        try {
            if(typeof string === "string") {
                return wasm.sha256(string);
            } else SimplyBuilderCryptoError("The input data must be of type string!");
        } catch (err) {
            console.error(err);
        }
        return undefined;
    },
    /**
     * Generates a SHA512 hash of a string.
     * @function hash512
     * @param {string} string - string to encode in hash512 hash
     * @return string - lowercase string in hex
     */
    hash512: (string) => {
        try {
            if(typeof string === "string") {
                return wasm.sha512(string);
            } else SimplyBuilderCryptoError("The input data must be of type string!");
        } catch (err) {
            console.error(err);
        }
        return undefined;
    },
    /**
     * Encodes a string to base64 format.
     * @function base64Encode
     * @param {string} string - string to encode(utf8) in base64
     * @return {string|undefined}
     */
    base64Encode: (string) => {
        try {
            if(typeof string === "string") {
                return wasm.base64_encode(string);
            } else SimplyBuilderCryptoError("The input data must be of type string!");
        } catch (err) {
            console.error(err);
        }
        return undefined;
    },
    /**
     * Decodes a base64 encoded string.
     * @function base64Decode
     * @param {string} string - string encoded(utf8) in base64 to decode
     * @return {string|undefined}
     */
    base64Decode: (string) => {
        try {
            if(typeof string === "string") {
                return wasm.base64_decode(string);
            } else SimplyBuilderCryptoError("The input data must be of type string!");
        } catch (err) {
            console.error(err);
        }
        return undefined;
    },
    /**
     * Generates a random UUID version 4 string.
     * @function randomUUIDV4
     * @return {string|undefined}
     */
    randomUUIDV4: () => {
        try {
            return wasm.random_uuidv4();
        } catch (err) {
            console.error(err);
        }
        return undefined;
    },
    /**
     * Generates an array of random bytes.
     * @function randomBytes
     * @param {number} [length=32] - default value: 32
     * @return {Uint8Array|undefined}
     */
    randomBytes: (length = 32) => {
        try {
            if(typeof length === "number") {
                return wasm.random_bytes(length);
            } else SimplyBuilderCryptoError("The input data must be of type number!");
        } catch (err) {
            console.error(err);
        }
        return undefined;
    }
};
/**
 * Provides a comprehensive cryptographic API by dynamically loading WebAssembly (WASM) or native bindings.
 *
 * This module exports the `SimplyBuilderCrypto` object, which is frozen to prevent modifications,
 * ensuring the integrity and reliability of the cryptographic functions provided.
 *
 * @module SimplyBuilderCrypto
 */
export default Object.freeze(SimplyBuilderCrypto);