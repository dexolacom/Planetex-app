import { web3 } from '../constants/constants';
import buyTokenAbi from '../constants/abis/buyTokenAbi.json';
import tokenAbi from '../constants/abis/tokenAbi.json'
import { AbiItem } from 'web3-utils';

export const getTokenSaleContractAddress = (chainId: number | undefined) => {
  const addresses = {
    1: '',
    5: '0xe3553b423aF5137F24910133b6D0543246A3741d',
    56: '',
    97: '0xe60376b612528ABbAd3dBE9BC511c9f5969b992A',
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
