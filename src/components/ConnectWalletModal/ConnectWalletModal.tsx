import React from 'react';
import { Wrapper, Content, WalletButton, CrossIcon, MetamaskIcon, CoinbaseIcon, WalletConnectIcon } from './styles';
import { connectors } from '../../constants/connectors';
import { useWeb3React } from '@web3-react/core';
import { connectWallet } from '../../utils/walletUtils';


const ConnectWalletModal = ({ setIsModalOpen }: { setIsModalOpen: (b: boolean) => boolean }) => {
  const { activate } = useWeb3React();

  const connectWalletHandler = (connector: string) => {
    connectWallet(activate, connectors[connector as keyof typeof connectors], connector);
    setIsModalOpen(false);
  };

  return (
    <Wrapper onClick={(e) => e.stopPropagation()}>
      <CrossIcon onClick={() => setIsModalOpen(false)} />
      <Content>
        <WalletButton onClick={() => connectWalletHandler('injected')}>
          <MetamaskIcon />
          MetaMask
        </WalletButton>
        <WalletButton onClick={() => connectWalletHandler('coinbaseWallet')}>
          <CoinbaseIcon />
          CoinBase
        </WalletButton>
        <WalletButton onClick={() => connectWalletHandler('walletConnect')}>
          <WalletConnectIcon />
          WalletConnect
        </WalletButton>
      </Content>
    </Wrapper>
  );
};

  export default ConnectWalletModal;