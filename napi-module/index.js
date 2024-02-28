"use strict";

const { existsSync } = require('node:fs');
const { join, resolve } = require('node:path');
const pkg = require("./package.json");

/**
 * Attempts to load native bindings for cryptographic functions from a specified file.
 * If successful, it exposes functions for MD5, SHA256, SHA512 hashing, base64 encoding and decoding,
 * generating UUID v4, and generating random bytes.
 *
 * @returns {Object|null} An object containing cryptographic functions if successfully loaded, otherwise null.
 */
const napiImports = () => {
    const localFileExisted = resolve(__dirname, 'lib', 'sb_module_crypto.node');
    try {
        if (existsSync(join(localFileExisted))) {
            const {md5, sha256, sha512, base64Encode, base64Decode, randomUuidv4, randomBytes} = require(localFileExisted);
            return {md5, sha256, sha512, base64Encode, base64Decode, randomUuidv4, randomBytes};
        } else return null;
    } catch (e) {
        console.error(`Failed to load native binding`, e);
        return null;
    }
};

const napi = napiImports();

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
     * @type {string} name - app description
     */
    name: pkg.description.toString(),
    /**
     * @type {string} version - app version
     */
    version: pkg.version.toString(),
    /**
     * Generates an MD5 hash of a string.
     * @function hashMD5
     * @param {string} string - string to encode in md5 hash
     * @return string
     */
    hashMD5: (string) => {
        try {
            if(typeof string === "string") {
                return napi.md5(string);
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
                return napi.sha256(string);
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
                return napi.sha512(string);
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
                return napi.base64Encode(string);
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
                return napi.base64Decode(string);
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
            return napi.randomUuidv4();
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
                return napi.randomBytes(length);
            } else SimplyBuilderCryptoError("The input data must be of type number!");
        } catch (err) {
            console.error(err);
        }
        return undefined;
    }
};
/**
 * Provides a comprehensive cryptographic API by dynamically loading Native Addons API (NAPI) or native bindings.
 * If the specified native binding file exists within the 'lib' directory, it requires and returns an object
 * containing various cryptographic functions. Otherwise, it logs an error and returns null, indicating that
 * the native bindings are not available.
 *
 * This module exports the `SimplyBuilderCrypto` object, which is frozen to prevent modifications,
 * ensuring the integrity and reliability of the cryptographic functions provided.
 *
 * @module SimplyBuilderCrypto
 */
module.exports = Object.freeze(SimplyBuilderCrypto);