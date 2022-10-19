import { AbstractConnector } from '@web3-react/abstract-connector';
import { connectors } from '../constants/connectors';
import { networks } from '../constants/networks';
import { getTokenContract, getTokenSaleContract, getTokenSaleContractAddress } from './contracts';
import { buyToken } from './buyToken';
import { maxApproveAmount } from '../constants/constants';

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

export const checkAllowance = async (account: string | null | undefined, contract: any, spender: string) => {
  return await contract.methods.allowance(account, spender).call()
}

export const checkApprove = async (
  chainId: number | undefined,
  account: string | null | undefined,
  tokenAmount: number | string,
  tokenName:string,
  setIsTransSuccessModal: (b: boolean) => void,
  setIsTransErrorModal: (b: boolean) => void,
  setIsTransLoading: (b: boolean) => void
) => {
  const tokenContract = getTokenContract(chainId)
  const spender = getTokenSaleContractAddress(chainId)

  const allowance = await checkAllowance(account, tokenContract, spender)

  if (allowance === '0') {
    await approve(tokenContract, account, spender)
      .then(() => buyToken(chainId, tokenAmount, account, tokenName, setIsTransSuccessModal, setIsTransErrorModal, setIsTransLoading))
  }

  return await buyToken(chainId, tokenAmount, account, tokenName, setIsTransSuccessModal, setIsTransErrorModal, setIsTransLoading)
}

export const approve = async (contract: any, account: string | null | undefined, spender: string) => {
  return await contract.methods
    .approve(spender, maxApproveAmount)
    .send({ from: account })
    // .on('transactionHash', function(hash) {})
    // .on('receipt', function(receipt) {
    //   setIsApprovePending(false)
    // })
    // .on('error', function(error, receipt) {
    //   setIsApprovePending(false)
    // })
}

export const convertToUSD = async (chainId: number | undefined, tokenAmount: number | string) => {
  const contract = await getTokenSaleContract(chainId)
  const formattedAmount = (+tokenAmount * 10 ** 18).toLocaleString('fullwide', { useGrouping: false })
  return await contract.methods.convertToStable(formattedAmount, 0).call()
};

export const formatToHuman = (chainId: number | undefined, amount: string) => {
  if (chainId === 56 || chainId === 97) return (+amount / 10 ** 18).toFixed(2)
  return (+amount / 10 ** 6).toFixed(2)
};