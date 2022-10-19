import { web3 } from '../constants/constants';
import buyTokenAbi from '../constants/abis/saleContractAbi.json';
import tokenAbi from '../constants/abis/tokenContractAbi.json'
import { AbiItem } from 'web3-utils';

export const getTokenSaleContractAddress = (chainId: number | undefined) => {
  const addresses = {
    1: '',
    5: '0x20f5072712D12C4d3c0f796c34dceCd1f1C59d4B',
    56: '',
    97: '0x42D2278483A4794200F207251d4204879A3412dd',
  }
  return addresses[chainId as keyof typeof addresses] ?? console.error('chainId is undefined')
};

export const getTokenSaleContract = async(chainId: number | undefined) => {
  return new web3.eth.Contract(buyTokenAbi as AbiItem[], getTokenSaleContractAddress(chainId))
}

export const getTokenContractAddress = (chainId: number | undefined) => {
  const addresses = {
    1: '',
    5: '0x8245A02D4D2F73c09C583Ef0C3d0E33D99a60520',
    56: '',
    97: '0x912480a6063AF66A306C25370AB32453C10F7919',
  }

  return addresses[chainId as keyof typeof addresses] ?? console.error('chainId is undefined')
}

export const getTokenContract = (chainId: number | undefined) => {
  return new web3.eth.Contract(tokenAbi as AbiItem[], getTokenContractAddress(chainId))
};
