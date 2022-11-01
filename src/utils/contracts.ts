import { web3 } from '../constants/constants';
import buyTokenAbi from '../constants/abis/saleContractAbi.json';
import tokenAbi from '../constants/abis/tokenContractAbi.json';
import planetexTokenContractAbi from '../constants/abis/planetexTokenContractAbi.json';
import { AbiItem } from 'web3-utils';

export const getTokenSaleContractAddress = (chainId: number | undefined) => {
  const addresses = {
    1: '0x003b3012ea7DEC7A539fD1617D7BF3138928dF19',
    5: '0x37D8cbf1a75967361e12A904d5efDC50716EA094 ',
    56: '0xAF69c3f90EF58c47d43B645b20c8625Ae9426fd7',
    97: '0xC4F3b78036b92AFaC1684b719d8184655978c098',
  };
  return addresses[chainId as keyof typeof addresses];
};

export const getTokenSaleContract = async (chainId: number | undefined) => {
  return new web3.eth.Contract(
    buyTokenAbi as AbiItem[],
    getTokenSaleContractAddress(chainId),
  );
};

export const getTokenContractAddress = (chainId: number | undefined) => {
  const addresses = {
    1: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    5: '0x8245A02D4D2F73c09C583Ef0C3d0E33D99a60520',
    56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    97: '0x912480a6063AF66A306C25370AB32453C10F7919',
  };

  return addresses[chainId as keyof typeof addresses];
};

export const getTokenContract = (chainId: number | undefined) => {
  return new web3.eth.Contract(
    tokenAbi as AbiItem[],
    getTokenContractAddress(chainId),
  );
};

export const getPlanetexTokenContractAddress = (
  chainId: number | undefined,
) => {
  const addresses = {
    1: '0x118254B030bBfDa5910bbFC857DB41488C7B1D22',
    5: '0x710bf88E1F46f7e8383Ce844251f1475e0BEB252',
    56: '',
    97: '',
  };

  return (
    addresses[chainId as keyof typeof addresses] ??
    console.error('chainId is undefined')
  );
};

export const getPlanetexTokenContract = (chainId: number | undefined) => {
  return new web3.eth.Contract(
    planetexTokenContractAbi as AbiItem[],
    getPlanetexTokenContractAddress(chainId),
  );
};
