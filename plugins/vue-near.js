// import { getConfig } from 'vue-near'
import * as nearApi from 'near-api-js'

let options = {
  // Needs the environment for the correct RPC to use
  env: process.env.NODE_ENV || 'development',
  config: {
    appTitle: 'Certify',
    contractName: 'dev-1663093630511-23092692064929t',
    // TODO: Determine the default behavior for succeeding or failing
    successUrl: '',
    failureUrl: ''
  },
}

export default async ({ app }, inject) => {
//   let config = getConfig(options.env, options.config)
    const { keyStores } = nearApi;
    const myKeyStore = new keyStores.BrowserLocalStorageKeyStore();
//   config.keyStore = new nearApi.keyStores.BrowserLocalStorageKeyStore()

const connectionConfig = {
    networkId: "testnet",
    keyStore: myKeyStore, // first create a key store 
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
    helperUrl: "https://helper.testnet.near.org",
    explorerUrl: "https://explorer.testnet.near.org",
  };

  const near = await nearApi.connect(connectionConfig)
  const wallet = new nearApi.WalletConnection(near)

  // make the wallet accessible through the injected near plugin; this.$near.wallet
  near.wallet = wallet

  // Make the near api accessible from all Vue components
  inject('near', near)
}