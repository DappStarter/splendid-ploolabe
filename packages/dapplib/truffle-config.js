require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lock bone system educate rare remind assault hunt kiwi blue setup'; 
let testAccounts = [
"0x62fd6df2e98746815321a914e9ffd9e2a7af5fc882a4b16b7eb4017dbf0a5ada",
"0x8287155c038fb99ba2a9ec5d3d0db5d4e1a1e4357ac1b521a90d3001a7f5302d",
"0xbb5fbb74c72945c8ca667500fb4863465ff4b12e21ba30a60d93e3c0c05b8c8e",
"0x8053b7a9b7d173c4e3970bf6bf3b16b26ee27238ba58612ea59c716ce60c5520",
"0xb61ed48198747c9c0b4a0d13889e9d6d7f4e4cf567d9e01e0e4580601f129119",
"0x97e2cc871b693d4566f9684c3c6b27aef2adafafd757900de7e3510ebbe3e747",
"0x1e980e814fc428355fcf661f9a0e447e997a688960fa2a0b8b9dd7f0b5e03e06",
"0x27b2e036d0549cacc2b867984cb341eb2401c16dd8b914218ed53ac3c67c8adc",
"0x9c1fb5c3d18ed119051c675cfe9ba1c9d8c1cc4724d5d0743c8aaf3499ad2074",
"0x2708a2c8338679bccc7cfe8d787f9dd32166c34957bfd870a8ed834bec3df08f"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
