import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import 'dotenv/config'

const config: HardhatUserConfig = {
  solidity: {
    version: "0.6.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
        details: {
          yul: false,
        },
      },
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API,
  },
  networks: {
    hardhat: {
      forking: {
        url: "https://mainnet.infura.io/v3/c0c87d279cb240ff8036c2f999a0ce14",
      },
      allowUnlimitedContractSize: true,
    },
    goerli: {
      url: process.env.GOERLI_URL,
      accounts: [process.env.PRIVATE_KEY || ''],
      allowUnlimitedContractSize: true,
    },
    dogechain: {
      url: "https://rpc-sg.dogechain.dog",
      accounts: [process.env.PRIVATE_KEY || ''],
      allowUnlimitedContractSize: true,
    },
  },
};

export default config;
