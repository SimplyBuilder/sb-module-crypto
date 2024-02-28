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
const wasmImports = () => {
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

const wasm = wasmImports();

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
 * @type {{base64Encode: ((function(string): (string|undefined))|*), hashMD5: ((function(string): string)|*), base64Decode: ((function(string): (string|undefined))|*), hash256: ((function(string): string)|*), name: string, hash512: ((function(string): string)|*), version: string, randomUUIDV4: ((function(): (string|undefined))|*), randomBytes: ((function(number=): (Uint8Array|undefined))|*)}}
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
     * @name hashMD5
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
     * @name hash256
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
     * @name hash512
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
     * @name base64Encode
     * @param {string} string - string to encode(utf8) in base64
     * @return {string|undefined}
     */
    base64Encode: (string) => {
        try {
            if(typeof string === "string") {
                return wasm.base64Encode(string);
            } else SimplyBuilderCryptoError("The input data must be of type string!");
        } catch (err) {
            console.error(err);
        }
        return undefined;
    },
    /**
     * @name base64Decode
     * @param {string} string - string encoded(utf8) in base64 to decode
     * @return {string|undefined}
     */
    base64Decode: (string) => {
        try {
            if(typeof string === "string") {
                return wasm.base64Decode(string);
            } else SimplyBuilderCryptoError("The input data must be of type string!");
        } catch (err) {
            console.error(err);
        }
        return undefined;
    },
    /**
     * @name randomUUIDV4
     * @return {string|undefined}
     */
    randomUUIDV4: () => {
        try {
            return wasm.randomUuidv4();
        } catch (err) {
            console.error(err);
        }
        return undefined;
    },
    /**
     * @name randomBytes
     * @param {number} [length=32] - default value: 32
     * @return {Uint8Array|undefined}
     */
    randomBytes: (length = 32) => {
        try {
            if(typeof length === "number") {
                return wasm.randomBytes(length);
            } else SimplyBuilderCryptoError("The input data must be of type number!");
        } catch (err) {
            console.error(err);
        }
        return undefined;
    }
};
/**
 * Provides a comprehensive cryptographic API by dynamically loading WebAssembly (WASM) or native bindings.
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