## SimplyBuilderCrypto  [![Node.js Package](https://github.com/SimplyBuilder/sb-module-crypto/actions/workflows/npm-publish.yml/badge.svg?event=workflow_dispatch)](https://github.com/SimplyBuilder/sb-module-crypto/actions/workflows/npm-publish.yml)

SimplyBuilderCrypto offers a comprehensive suite of cryptographic utilities tailored for backend/frontend development. It provides a variety of functionalities, including multiple hashing algorithms, UUID generation, random bytes generation, and more, making it a versatile choice for developers.

[![SimplyBuilder](https://img.shields.io/badge/Author-Gerv%C3%A1sio_J%C3%BAnior-brightgreen?style=flat-square&color=%23fedcba)](https://github.com/jamilservicos)
[![SimplyBuilder](https://img.shields.io/badge/SimplyBuilder-Module-brightgreen?style=flat-square&label=SimplyBuilder&color=%23fedcba)](https://simplybuilder.github.io)
![Maintained](https://img.shields.io/badge/Maintained%3F-yes-green.svg)
[![SimplyBuilder - sb-module-crypto](https://img.shields.io/static/v1?label=SimplyBuilder&message=sb-module-crypto&color=blue&logo=github)](https://github.com/SimplyBuilder/sb-module-crypto)
[![GitHub License](https://img.shields.io/github/license/SimplyBuilder/sb-module-crypto)](https://github.com/SimplyBuilder/sb-module-crypto/blob/main/LICENSE)

[![GitHub package.json front](https://img.shields.io/github/package-json/v/SimplyBuilder/sb-module-crypto?filename=wasm-module%2Fpackage.json&label=frontend%20version)](https://github.com/SimplyBuilder/sb-module-crypto/blob/main/napi-module/package.json#L5)
[![GitHub package.json back](https://img.shields.io/github/package-json/v/SimplyBuilder/sb-module-crypto?filename=napi-module%2Fpackage.json&label=backend%20version)](https://github.com/SimplyBuilder/sb-module-crypto/blob/main/wasm-module/package.json#L5)
[![GitHub Release](https://img.shields.io/github/v/release/SimplyBuilder/sb-module-crypto)](https://github.com/SimplyBuilder/sb-module-crypto/releases)
![GitHub top language](https://img.shields.io/github/languages/top/SimplyBuilder/sb-module-crypto)

[![npm - @jamilservices/sb-module-crypto-front](https://img.shields.io/badge/npm-%40jamilservices%2Fsb--module--crypto--front-blue?logo=npm&logoColor=white)](https://www.npmjs.com/package/@jamilservices/sb-module-crypto-front)
[![yarn - @jamilservices/sb-module-crypto-front](https://img.shields.io/badge/yarn-%40jamilservices%2Fsb--module--crypto--front-blue?logo=yarn&logoColor=white)](https://yarnpkg.com/package/@jamilservices/sb-module-crypto-front)     

[![npm - @jamilservices/sb-module-crypto-back](https://img.shields.io/badge/npm-%40jamilservices%2Fsb--module--crypto--back-blue?logo=npm&logoColor=white)](https://www.npmjs.com/package/@jamilservices/sb-module-crypto-back)
[![yarn - @jamilservices/sb-module-crypto-back](https://img.shields.io/badge/yarn-%40jamilservices%2Fsb--module--crypto--back-blue?logo=yarn&logoColor=white)](https://yarnpkg.com/package/@jamilservices/sb-module-crypto-back)


![IDE](https://img.shields.io/badge/WebStorm-000000?logo=WebStorm&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-100000?logo=github&logoColor=white)     

![Linux](https://img.shields.io/badge/Ubuntu-E95420?logo=ubuntu&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=white)

![Rust](https://img.shields.io/badge/Rust-000000?logo=rust&logoColor=white)
![MarkDown](https://img.shields.io/badge/Markdown-000000?logo=markdown&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?logo=javascript&logoColor=F7DF1E)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)
![C](https://img.shields.io/badge/C-00599C?logo=c&logoColor=white)    

![Brave](https://img.shields.io/badge/Brave-FF1B2D?logo=Brave&logoColor=white)
![Chrome](https://img.shields.io/badge/Chrome-4285F4?logo=Google-chrome&logoColor=white)
![Firefox](https://img.shields.io/badge/Firefox-FF7139?logo=Firefox-Browser&logoColor=white)
![Vivaldi](https://img.shields.io/badge/Vivaldi-EF3939?logo=Vivaldi&logoColor=white)
![Safari](https://img.shields.io/badge/Safari-FF1B2D?logo=Safari&logoColor=white)
![Opera](https://img.shields.io/badge/Opera-FF1B2D?logo=Opera&logoColor=white)    


#         
### 🤖 Documented by Artificial Intelligence

This project takes a leap into the future of code documentation and maintenance. 🚀            
All text commits and Doc comments were created automatically by the advanced AI of **ChatGPT**, showcasing a seamless integration between human creativity and artificial intelligence.

By leveraging ChatGPT's capabilities, we've ensured that the documentation is not only comprehensive but also up-to-date with the latest standards. This collaboration marks a step forward in our pursuit of innovative solutions, making our codebase more accessible and easier to understand for developers worldwide.

Embrace the future of coding with us. 🌟

# 
### Features

- **Hashing**: Conversion of strings into hashes using MD5, SHA-256, and SHA-512 algorithms.
- **UUID v4**: Random generation of version 4 UUIDs.
- **Random Bytes**: Generation of random bytes with a customizable length, having a minimum and default value of 32 bytes.
- **Box**: Coming Soon...
- **Keys**: Coming Soon...
- **Sign**: Coming Soon...

### Core

- [Rust Code](/rust-core/README.md)

### Versions

- [Backend Version](/napi-module/README.md)
- [Frontend Version](/wasm-module/README.md)

### Rust Modules

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

Interested in contributing? We value your contributions and would love to see your input. Please follow our guidelines for contributing to ensure a smooth collaboration process.

- For contributing to Rust Core, please see the [Rust Guidelines](/rust-core/CONTRIBUTING.md).
- For contributing to `@jamilservices/sb-module-crypto-back`, please see the [Backend Guidelines](/napi-module/CONTRIBUTING.md).
- For contributing to `@jamilservices/sb-module-crypto-front`, please see the [Frontend Guidelines](/wasm-module/CONTRIBUTING.md).

### License

`SimplyBuilderCrypto` is made available under the [MIT License](/LICENSE) by [@jamilservicos](https://github.com/jamilservicos).

- You are free to modify and reuse the code.
- The original license must be included with copies of this software.
- Please link back to this repository if you use a significant portion of the source code.
