
export const networks = {
  bscT: {
    chainId: `0x${Number(97).toString(16)}`,
    chainName: 'Binance Testnet',
    nativeCurrency: {
      name: 'Binance Testnet',
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
      // 'https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
      // 'https://rpc.goerli.mudit.blog/',
      // 'https://goerli.infura.io/v3/'
    ],
  }
}