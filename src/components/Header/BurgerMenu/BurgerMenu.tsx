import React from 'react';
import { Wrapper, Links, RouterLink, ConnectButton, Link } from './styles';
import { useWeb3React } from '@web3-react/core';
import { connectors } from '../../../constants/connectors';
import { connectWallet } from '../../../utils/walletUtils';


const BurgerMenu = () => {
  const { account, activate } = useWeb3React();

  return (
    <Wrapper>
      <Links>
        <RouterLink to='/presale'>Pre-Sale</RouterLink>
        <RouterLink to="/nft-sale">NFT Sale</RouterLink>
        <Link href='#'>Main Sale</Link>
        <Link href='#'>Private Sale</Link>
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