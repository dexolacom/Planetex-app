import React from 'react';
import { Wrapper, Links, RouterLink, ConnectButton } from './styles';
import { useWeb3React } from '@web3-react/core';
import { connectors } from '../../../constants/connectors';
import { connectWallet } from '../../../utils/blockchainUtils';


const BurgerMenu = () => {
  const { account, activate } = useWeb3React();

  return (
    <Wrapper>
      <Links>
        <RouterLink to='/presale'>Pre-Sale</RouterLink>
        <a href='#'>NFT Sale</a>
        <a href='#'>Main Sale</a>
        <a href='#'>Private Sale</a>
        {!account &&
        <ConnectButton onClick={() => connectWallet(activate, connectors.injected, 'injected')}>
          Connect wallet
        </ConnectButton>
        }
      </Links>
    </Wrapper>
  );
};

export default BurgerMenu;