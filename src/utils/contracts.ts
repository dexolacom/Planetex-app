import { web3 } from '../constants/constants';
import buyTokenAbi from '../constants/abis/buyTokenAbi.json';
import tokenAbi from '../constants/abis/tokenAbi.json'
import { AbiItem } from 'web3-utils';

export const getTokenSaleContract = (chainId: number | undefined) => {
  const addresses = {
    1: '',
    5: '',
    56: '',
    97: '0xe68bdD7302E8A9b8e1B51BC2949E89Eec4Da9568',
  }

  const address = addresses[chainId as keyof typeof addresses] ?? console.error('chainId is undefined')
  return new web3.eth.Contract(buyTokenAbi as AbiItem[], address)
};

export const getTokenContractAddress = (chainId: number | undefined) => {
  const addresses = {
    1: '',
    5: '',
    56: '',
    97: '0x912480a6063AF66A306C25370AB32453C10F7919',
  }

  return addresses[chainId as keyof typeof addresses] ?? console.error('chainId is undefined')
}

export const getTokenContract = (chainId: number | undefined) => {
  return new web3.eth.Contract(tokenAbi as AbiItem[], getTokenContractAddress(chainId))
};
