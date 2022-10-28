/* eslint-disable max-lines-per-function */
import { AbstractConnector } from '@web3-react/abstract-connector';
import buyTokenAbi from '../constants/abis/saleContractAbi.json';
import { connectors } from '../constants/connectors';
import { networks } from '../constants/networks';
import {
  getTokenContract,
  getTokenSaleContract,
  getTokenSaleContractAddress,
  getPlanetexTokenContractAddress,
} from './contracts';
import { buyToken, buyNftToken } from './buyToken';
import { maxApproveAmount } from '../constants/constants';
import { AbiItem } from 'web3-utils';
import Web3 from 'web3';

export const connectWallet = async (
  activate: any,
  connector: AbstractConnector,
  type: string,
) => {
  try {
    await activate(connector);
    localStorage.setItem('provider', type);
  } catch (e) {
    console.error(e);
  }
};

export const connectWalletOnPageLoad = (activate: any) => {
  const provider = localStorage.getItem('provider');

  if (provider) {
    try {
      // @ts-ignore
      activate(connectors[provider]);
    } catch (e) {
      console.error(e);
    }
  }
};

export const disconnectWallet = (deactivate: any) => {
  localStorage.removeItem('provider');
  deactivate();
};

export const changeNetwork = async (networkName: string) => {
  try {
    // @ts-ignore
    if (!window.ethereum) throw new Error('No crypto wallet found');

    if (networkName === 'goerli') {
      // @ts-ignore
      return await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${Number(5).toString(16)}` }],
      });
    }
    // @ts-ignore
    await window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          ...networks[networkName as keyof typeof networks],
        },
      ],
    });
  } catch (e) {
    console.error(e);
  }
};

export const checkAllowance = async (
  account: string | null | undefined,
  contract: any,
  spender: string,
) => {
  return await contract.methods.allowance(account, spender).call();
};

export const checkApprove = async (
  chainId: number | undefined,
  account: string | null | undefined,
  tokenAmount: number | string,
  tokenName: string,
  setIsTransSuccessModal: (b: boolean) => void,
  setIsTransErrorModal: (b: boolean) => void,
  setIsTransLoading: (b: boolean) => void,
  setIsApproveLoading: (b: boolean) => void,
) => {
  if (tokenName === 'USDT' || tokenName === 'BUSD') {
    const tokenContract = getTokenContract(chainId);
    const spender = getTokenSaleContractAddress(chainId);
    const allowance = await checkAllowance(account, tokenContract, spender);

    if (allowance === '0') {
      await approve(tokenContract, account, spender, setIsApproveLoading);
    }
    return await buyToken(
      chainId,
      tokenAmount,
      account,
      tokenName,
      setIsTransSuccessModal,
      setIsTransErrorModal,
      setIsTransLoading,
    );
  } else {
    return await buyToken(
      chainId,
      tokenAmount,
      account,
      tokenName,
      setIsTransSuccessModal,
      setIsTransErrorModal,
      setIsTransLoading,
    );
  }
};

export const checkApproveNft = async (
  chainId: number | undefined,
  account: string | null | undefined,
  tokenName: string,
  setIsTransSuccessModal: (b: boolean) => void,
  setIsTransErrorModal: (b: boolean) => void,
  setIsTransLoading: (b: boolean) => void,
) => {
  if (tokenName === 'USDT') {
    const tokenContract = getTokenContract(chainId);
    const spender = getPlanetexTokenContractAddress(chainId);

    const allowance = await checkAllowance(account, tokenContract, spender);

    if (allowance === '0') {
      await approve(tokenContract, account, spender).then(() =>
        buyNftToken(
          chainId,
          account,
          tokenName,
          setIsTransSuccessModal,
          setIsTransErrorModal,
          setIsTransLoading,
        ),
      );
    } else {
      return await buyNftToken(
        chainId,
        account,
        tokenName,
        setIsTransSuccessModal,
        setIsTransErrorModal,
        setIsTransLoading,
      );
    }
  } else {
    return await buyNftToken(
      chainId,
      account,
      tokenName,
      setIsTransSuccessModal,
      setIsTransErrorModal,
      setIsTransLoading,
    );
  }
};

export const approve = async (
  contract: any,
  account: string | null | undefined,
  spender: string,
  setIsApproveLoading?: (b: boolean) => void,
) => {
  setIsApproveLoading && setIsApproveLoading(true);
  return await contract.methods
    .approve(spender, maxApproveAmount)
    .send({ from: account })
    .on('receipt', function () {
      setIsApproveLoading && setIsApproveLoading(false);
    })
    .on('error', function (error: any) {
      console.error(error);
      setIsApproveLoading && setIsApproveLoading(false);
    });
};

export const convertToUSD = async (
  chainId: number | undefined,
  tokenAmount: number | string,
) => {
  const contract = await getTokenSaleContract(chainId);
  const formattedAmount = (+tokenAmount * 10 ** 18).toLocaleString('fullwide', {
    useGrouping: false,
  });
  const res = await contract.methods.convertToStable(formattedAmount, 0).call();
  return res;
};

export const getUserAvailableAmount = async (
  chainId: number | undefined,
  account: any,
) => {
  const contract = await getTokenSaleContract(chainId);
  return await contract.methods.getUserAvailableAmount(account, 0).call();
};

export const formatToHuman = (chainId: number | undefined, amount: string) => {
  if (chainId === 56 || chainId === 97) return (+amount / 10 ** 18).toFixed(2);
  return (+amount / 10 ** 6).toFixed(2);
};

export const getProviders = (chainId: number | undefined) => {
  const providers = {
    5: 'https://eth-goerli.nodereal.io/v1/8a4432e42df94dcca2814fde8aea2a2e',
    97: 'https://bsc-testnet.nodereal.io/v1/e9a36765eb8a40b9bd12e680a1fd2bc5'
  }
  return providers[chainId as keyof typeof providers] ?? console.error('chainId is undefined')
}

export const getUserBalance = async (chainId: number | undefined, account: any) => {
  // logic without metamask provider binding
  const web3 = new Web3(new Web3.providers.HttpProvider(getProviders(chainId)))
  const contract = new web3.eth.Contract(buyTokenAbi as AbiItem[], getTokenSaleContractAddress(chainId))
  return await contract.methods.userBalance(account, 0).call()
};
