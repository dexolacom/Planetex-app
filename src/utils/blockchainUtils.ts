import { AbstractConnector } from '@web3-react/abstract-connector';
import { connectors } from '../constants/connectors';
import { networks } from '../constants/networks';
import { web3 } from '../constants/constants';
import { AbiItem } from 'web3-utils';
import buyTokenAbi from '../constants/abis/buyTokenAbi.json'

export const connectWallet = async (activate: any, connector: AbstractConnector, type: string) => {
  try {
    await activate(connector)
    localStorage.setItem('provider', type);
  } catch (e) {
    console.error(e)
  }
};

export const connectWalletOnPageLoad = (activate: any) => {
  const provider = localStorage.getItem('provider');

  if (provider) {
    try {
      // @ts-ignore
      activate(connectors[provider])
    } catch (e) {
      console.error(e)
    }
  }
};

export const disconnectWallet = (deactivate: any) => {
  localStorage.removeItem('provider');
  deactivate();
};

export const changeNetwork = async(networkName: string) => {
  try {
    // @ts-ignore
    if (!window.ethereum) throw new Error('No crypto wallet found')

    if (networkName === 'goerli') {
      // @ts-ignore
      return await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [
          {chainId: `0x${Number(5).toString(16)}`}
        ]
      })
    }
    // @ts-ignore
    await window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          ...networks[networkName as keyof typeof networks]
        }
      ]
    })
  } catch (e) {
    console.error(e)
  }
}

export const getContractAddress = (chainId: number | undefined) => {
  const addresses = {
    1: '',
    5: '',
    56: '',
    97: '0xe68bdD7302E8A9b8e1B51BC2949E89Eec4Da9568',
  }

  return addresses[chainId as keyof typeof addresses] ?? console.error('chainId is undefined')
};

export const getContract = (chainId: number | undefined) => {
  return new web3.eth.Contract(buyTokenAbi as AbiItem[], getContractAddress(chainId))
};