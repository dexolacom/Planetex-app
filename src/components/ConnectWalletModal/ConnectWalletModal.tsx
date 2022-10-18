import React from 'react';
import { OutlineButton } from '../../theme';
import { Wrapper, Content } from './styles';
import { connectors } from '../../constants/connectors';
import { connectWallet } from '../../utils/blockchainUtils';
import { useWeb3React } from '@web3-react/core';


const ConnectWalletModal = () => {
  const { activate } = useWeb3React()

  return (
    <Wrapper onClick={(e) => e.stopPropagation()}>
      <Content>
        <OutlineButton onClick={() => connectWallet(activate, connectors.injected, 'injected')}>Metamask</OutlineButton>
        <OutlineButton onClick={() => connectWallet(activate, connectors.walletConnect, 'walletConnect')}>WalletConnect</OutlineButton>
        <OutlineButton onClick={() => connectWallet(activate, connectors.coinbaseWallet, 'coinbaseWallet')}>CoinBase</OutlineButton>
      </Content>
    </Wrapper>
  );
};

export default ConnectWalletModal;