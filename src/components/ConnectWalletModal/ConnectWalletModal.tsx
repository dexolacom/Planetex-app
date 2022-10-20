import React from 'react';
import { Wrapper, Content, WalletButton, CrossIcon } from './styles';
import { connectors } from '../../constants/connectors';
import { connectWallet } from '../../utils/blockchainUtils';
import { useWeb3React } from '@web3-react/core';


const ConnectWalletModal = ({setIsModalOpen}: {setIsModalOpen: (b: boolean) => string}) => {
  const { activate } = useWeb3React()

  const connectWalletHandler = (connector: string) => {
    connectWallet(activate, connectors[connector as keyof typeof connectors], connector)
    setIsModalOpen(false)
  };

  return (
    <Wrapper onClick={(e) => e.stopPropagation()}>
      <CrossIcon onClick={() => setIsModalOpen(false)}/>
      <Content>
        <WalletButton onClick={() => connectWalletHandler('injected')}>Metamask</WalletButton>
        <WalletButton onClick={() => connectWalletHandler('walletConnect')}>WalletConnect</WalletButton>
        <WalletButton onClick={() => connectWalletHandler('coinbaseWallet')}>CoinBase</WalletButton>
      </Content>
    </Wrapper>
  );
};

export default ConnectWalletModal;