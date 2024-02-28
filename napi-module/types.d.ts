declare module "SimplyBuilderCrypto" {
    /**
     * The SimplyBuilderCrypto object, providing a suite of cryptographic functions.
     * These functions include hashing (MD5, SHA256, SHA512), base64 encoding/decoding,
     * UUID v4 generation, and random bytes generation. It leverages dynamically loaded WASM
     * or native bindings for cryptographic operations.
     */
    export const SimplyBuilderCrypto: {
        name: string;
        version: string;
        hashMD5: (input: string) => string | undefined;
        hash256: (input: string) => string | undefined;
        hash512: (input: string) => string | undefined;
        base64Encode: (input: string) => string | undefined;
        base64Decode: (input: string) => string | undefined;
        randomUUIDV4: () => string | undefined;
        randomBytes: (length?: number) => Uint8Array | undefined;
    };

    /**
     * Custom error handler for SimplyBuilderCrypto. Throws a TypeError with a custom message.
     * @param message - Error message to be displayed.
     */
    export function SimplyBuilderCryptoError(message: string): true;
}
