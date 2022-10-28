import { AbstractConnector } from '@web3-react/abstract-connector';
import { connectors } from '../constants/connectors';
import { networks } from '../constants/networks';

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

    if (networkName === 'eth') {
      // @ts-ignore
      return await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${Number(1).toString(16)}` }],
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