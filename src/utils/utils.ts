import { AbstractConnector } from '@web3-react/abstract-connector';
import { connectors } from '../constants/connectors';

export const stringTrim = (string: string | null | undefined, maxLength: number) => {
  if (!string) return string;
  if (maxLength < 1) return string;
  if (string.length <= maxLength) return string;
  if (maxLength === 1) return string.substring(0, 1) + '...';

  const midpoint = Math.ceil(string.length / 2);
  const toRemove = string.length - maxLength;
  const leftStrip = Math.ceil(toRemove / 2);
  const rightStrip = toRemove - leftStrip;
  return `${string.substring(0, midpoint - leftStrip)}...${string.substring(midpoint + rightStrip)}`;
};

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