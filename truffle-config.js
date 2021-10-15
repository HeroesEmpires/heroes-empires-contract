require('babel-register');
require('babel-polyfill');
require('dotenv').config();
var HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {  
  networks: {
    development: {
       host: "127.0.0.1",
       port: 7545,
      network_id: "*"
    },
    bsc: {
      provider: () => new HDWalletProvider(mnemonic, `https://bsc-dataseed1.binance.org`),
      network_id: 56,
      confirmations: 5,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: "0.8.0",
      optimizer: {
        enabled: true,
        runs: 200
      },
    }
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: process.env.API_KEY
  }
}
