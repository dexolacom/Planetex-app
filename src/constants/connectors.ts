import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 97, 56]
});

export const walletConnect = new WalletConnectConnector({
  // @ts-ignore
  rpcUrl: `https://mainnet.infura.io/v3/84842078b09946638c03157f83405213`,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true
});

export const walletLink = new WalletLinkConnector({
  url: `https://mainnet.infura.io/v3/84842078b09946638c03157f83405213`,
  appName: "palnetex"
});

export const connectors = {
  injected: injected,
  walletConnect: walletConnect,
  coinbaseWallet: walletLink,
};