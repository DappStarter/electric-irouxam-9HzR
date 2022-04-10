require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flee trophy charge ranch remember comic hunt profit blue surge'; 
let testAccounts = [
"0x829c0044af20562173d6b71f2215707303c8cee596652ac423956b864c588153",
"0xa9279e5a0d6eb04dc9d9eaa96bcc404810089c9b5a412432f9d143e149e01c14",
"0x97b49d26ffb350cd7a8dac04f64f665526b4bd8d808b5869be9c08968c8b41fd",
"0x130e6b8d219c0c23353397c5d2848b54f61aa96bd645b7322f78d3f5f1d3b42a",
"0x3ad9c95fb9c127ca90a5698c3278a8e8ffd54f052d008e1c301dfd4a5e657d96",
"0x2364ee188b0852bede4cf49dd4c1056601c3cebce630cfc6248a518f94cdb181",
"0x1a75ad6edd36c7c9667d414214bec633909723f31c9aa31c20cb5fcf4e0b2987",
"0x6a989c611e6ca8156ac0d45f666f9d73ea42da906c9c2170bcee991238f6604b",
"0x84d8cfe8896467c25877030b9c5640c923c066fb55d33ceee2d2cdc0f4800b7f",
"0x0bc331f7922236caf3c07fc7165a51e08fb6a66371d9765a68a97e2edfd235da"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


