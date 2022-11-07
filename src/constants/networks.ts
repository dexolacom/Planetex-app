
export const networks = {
  bscT: {
    chainId: `0x${Number(97).toString(16)}`,
    chainName: 'Binance Smart Chain Testnet',
    nativeCurrency: {
      name: 'Binance Chain Native Token',
      symbol: 'tBNB',
      decimals: 18
    },
    rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
  },
  goerli: {
    chainId: `0x${Number(5).toString(16)}`,
    chainName: 'Goerli',
    nativeCurrency: {
      name: 'GoerliETH',
      symbol: 'GoerliETH',
      decimals: 18
    },
    rpcUrls: [
      'https://ethereum-goerli-rpc.allthatnode.com',
    ],
  },
  bsc: {
    chainId: `0x${Number(56).toString(16)}`,
    chainName: 'Binance Smart Chain',
    nativeCurrency: {
      "name": "Binance Chain Native Token",
      "symbol": "BNB",
      "decimals": 18
    },
    rpcUrls: [
      "https://bsc-dataseed1.binance.org",
      "https://bsc-dataseed2.binance.org",
      "https://bsc-dataseed3.binance.org",
      "https://bsc-dataseed4.binance.org",
      "https://bsc-dataseed1.defibit.io",
      "https://bsc-dataseed2.defibit.io",
      "https://bsc-dataseed3.defibit.io",
      "https://bsc-dataseed4.defibit.io",
      "https://bsc-dataseed1.ninicoin.io",
      "https://bsc-dataseed2.ninicoin.io",
      "https://bsc-dataseed3.ninicoin.io",
      "https://bsc-dataseed4.ninicoin.io",
      "wss://bsc-ws-node.nariox.org"
    ],
  },
  eth: {
    chainId: `0x${Number(1).toString(16)}`,
    chainName: 'Ethereum',
    nativeCurrency: {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    rpcUrls: [
      "https://mainnet.infura.io/v3/${INFURA_API_KEY}",
      "wss://mainnet.infura.io/ws/v3/${INFURA_API_KEY}",
      // "https://api.mycryptoapi.com/eth",
      "https://eth-mainnet.public.blastapi.io",
      "https://cloudflare-eth.com"
    ],
  }
}