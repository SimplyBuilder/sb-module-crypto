## SimplyBuilderCrypto BackEnd Version

SimplyBuilderCrypto offers a suite of cryptographic utilities tailored for backend development. It includes a variety of functionalities such as various hashing algorithms, UUID generation, and random bytes generation, among others.

[![SimplyBuilder](https://img.shields.io/badge/Author-Gerv%C3%A1sio_J%C3%BAnior-brightgreen?style=flat-square&color=%23fedcba)](https://github.com/jamilservicos)
[![SimplyBuilder](https://img.shields.io/badge/SimplyBuilder-Module-brightgreen?style=flat-square&label=SimplyBuilder&color=%23fedcba)](https://simplybuilder.github.io)
[![SimplyBuilder - sb-module-crypto](https://img.shields.io/static/v1?label=SimplyBuilder&message=sb-module-crypto&color=blue&logo=github)](https://github.com/SimplyBuilder/sb-module-crypto)
[![GitHub License](https://img.shields.io/github/license/SimplyBuilder/sb-module-crypto)](https://github.com/SimplyBuilder/sb-module-crypto/blob/main/LICENSE)

#         
### 🤖 Documented by Artificial Intelligence

This project takes a leap into the future of code documentation and maintenance. 🚀            
All text commits and **[JSDoc](https://jsdoc.app/)** comments were created automatically by the advanced AI of **ChatGPT**, showcasing a seamless integration between human creativity and artificial intelligence.

By leveraging ChatGPT's capabilities, we've ensured that the documentation is not only comprehensive but also up-to-date with the latest standards. This collaboration marks a step forward in our pursuit of innovative solutions, making our codebase more accessible and easier to understand for developers worldwide.

Embrace the future of coding with us. 🌟

# 
### Features

- **Hashing**: Conversion of strings into hashes using MD5, SHA-256, and SHA-512 algorithms.
- **UUID v4**: Generation of version 4 UUIDs.
- **Random Bytes**: Generation of random bytes with customizable length, with a minimum and default value of 32 bytes.

### Installation

This module is designed for direct inclusion in backend projects. It can be installed using npm or other package managers:

#### Using npm

```bash
npm install @jamilservices/sb-module-crypto-back
```

#### Using pnpm

```bash
pnpm add @jamilservices/sb-module-crypto-back
```

#### Using yarn

```bash
yarn add @jamilservices/sb-module-crypto-back
```

Then, you can import it into your backend project:

```javascript
const SimplyBuilderCrypto = require('@jamilservices/sb-module-crypto-back');
const { hashMD5, hash256, hash512, base64Encode, base64Decode, randomUUIDV4, randomBytes } = SimplyBuilderCrypto;
```

Or using object destructuring:

```javascript
const { hashMD5, hash256, hash512, base64Encode, base64Decode, randomUUIDV4, randomBytes } = require('@jamilservices/sb-module-crypto-back');
```

### Related Projects

For frontend projects, please consider using the [Frontend Version](https://www.npmjs.com/package/@jamilservices/sb-module-crypto-front).

### Rust Modules

The core functionalities are implemented in Rust, ensuring high performance and reliability:

- [x] ~~hash md5~~
- [x] ~~hash sha256~~
- [x] ~~hash sha512~~
- [x] ~~encode base64~~
- [x] ~~decode base64~~
- [x] ~~random bytes~~
- [x] ~~random uuid v4~~
- [ ] signs
- [ ] keys
- [ ] box create
- [ ] box open
- [ ] box secret

### Contribution Guidelines

Interested in contributing? We welcome your contributions to enhance the backend capabilities of `@jamilservices/sb-module-crypto-back`. Please check our [Contribution Guidelines](/CONTRIBUTING.md) for more details.

### License

`SimplyBuilderCrypto` is available under the [MIT License](/LICENSE) by [@jamilservicos](https://github.com/jamilservicos).

- You are free to modify and reuse the code.
- The original license must be included with copies of this software.
- We encourage linking back to this repository if you use a significant portion of the source code.
