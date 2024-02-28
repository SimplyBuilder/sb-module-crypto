## SimplyBuilderCrypto FrontEnd Version

SimplyBuilderCrypto provides a suite of cryptographic utilities designed for frontend development, offering a range of functionalities including various hash algorithms, UUID generation, random bytes generation and others.

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

- **Hashing**: Supports string conversion to hashes using MD5, SHA-256, and SHA-512 algorithms.
- **UUID v4**: Enables the random generation of UUIDs using version 4.
- **Random Bytes**: Allows the random generation of bytes with customizable length, with a minimum and default value of 32 bytes.

### Installation

This module can be directly included in your project. It supports both direct reference in HTML or importation in JavaScript, depending on your project setup and module system.

### ESM Import Module

#### CDN

You can use the following CDN links to include the module:

```html
<!-- Using jsDelivr -->
<script type="module">
    import SimplyBuilderCrypto from 'https://cdn.jsdelivr.net/npm/@jamilservices/sb-module-crypto-front/index.min.js';
    const {hashMD5, hash256, hash512, base64Encode, base64Decode, randomUUIDV4, randomBytes} = SimplyBuilderCrypto;
</script>

<!-- Using unpkg -->
<script type="module">
    import SimplyBuilderCrypto from 'https://unpkg.com/@jamilservices/sb-module-crypto-front@1.0.1/index.js';
    const {hashMD5, hash256, hash512, base64Encode, base64Decode, randomUUIDV4, randomBytes} = SimplyBuilderCrypto;
</script>
```

#### FrontEnd projects with npm

For projects using npm, you can install the module via npm:

```bash
npm install @jamilservices/sb-module-crypto-front
```

Then, import it in your project:

```javascript
import SimplyBuilderCrypto from '@jamilservices/sb-module-crypto-front';
const {hashMD5, hash256, hash512, base64Encode, base64Decode, randomUUIDV4, randomBytes} = SimplyBuilderCrypto;
```

### Live Demo

- [View Live Demo](https://simplybuildercrypto-simplybuilder-3784b9d9024619e71516d2920cd6b.gitlab.io/)
- [Live Benchmark](https://simplybuildercrypto-simplybuilder-3784b9d9024619e71516d2920cd6b.gitlab.io/benchmark.html)

### Related Projects

For backend projects, consider using the [Backend version](https://www.npmjs.com/package/@jamilservices/sb-module-crypto-back).

### Modules in Rust

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

If you're interested in contributing to `@jamilservices/sb-module-crypto-front`, please see the [contribution guidelines](/CONTRIBUTING.md).

### License

`SimplyBuilderCrypto` is released under the [MIT License](/LICENSE) by [@jamilservicos](https://github.com/jamilservicos).     
* You are free to modify and reuse the code. 
* The original license must be included with copies of this software. 
* Please link back to this repository if you use a significant portion of the source code.

#