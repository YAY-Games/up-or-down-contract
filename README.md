# Smart contract of "Up or down" game

[![hardhatBuild](https://github.com/YAY-Games/up-or-down-contracts/actions/workflows/hardhatBuild.yaml/badge.svg)](https://github.com/YAY-Games/up-or-down-contracts/actions/workflows/hardhatBuild.yaml)

- Language: Solidity v0.6.12

- Project framework: hardhat + truffle / web3

- Nodejs: v14.17.0

## Overview

### Deployed

- Binance Smart Chain Mainnet: ```0x95e0ad62072b5a9d35e79f6c9f777a5e0a7a96d0``` ([link](https://bscscan.com/address/0x95e0ad62072b5a9d35e79f6c9f777a5e0a7a96d0))

## Installation & Usage

1. Install packages
```
npm i --save-dev
```

2. Build project
```
npm run build
```

### Testing

```
npm test
```

### Run linter

```
npm run lint
```

### Deploy

1. Edit network in ```hardhat.config.js``` ([docs](https://hardhat.org/config/))

2. Run command:
```
npx hardhat run scripts/deploy-script.js --network <network name>
```

## License

[MIT License](./LICENSE)
