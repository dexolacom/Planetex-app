import React, { useEffect } from 'react';
import { Content, Wrapper, Navigation, Links, RouterLink, Logo, Link, BurgerTabletIcon, ConnectButton, MobileLogo, BurgerTabletCrossIcon } from './styles';
import AccountContainer from './AccountContainer/AccountContainer';
import useCheckIsMobile from '../../hooks/useCheckIsMobile';
import { useWeb3React } from '@web3-react/core';
import { connectors } from '../../constants/connectors';
import { HeaderProps } from '../../constants/types';
import { connectWallet, connectWalletOnPageLoad } from '../../utils/blockchainUtils';


const Header = ({ isBurgerMenu, setIsBurgerMenu }:HeaderProps) => {
  const { isMobile } = useCheckIsMobile();
  const { account, activate } = useWeb3React();

  useEffect(() => {
    connectWalletOnPageLoad(activate)
    // @ts-ignore
    // check for metamask lock
    if (window.ethereum) {
      // @ts-ignore
      window.ethereum.on('accountsChanged', (accounts) => {
        if (!accounts[0]) localStorage.removeItem('provider')
      });
    }
  }, []);

  return (
    <Wrapper>
      <Content>
        {isMobile ? <MobileLogo/> : <Logo/>}
        <Navigation>
          <Links>
            <RouterLink to='/presale'>Pre-Sale</RouterLink>
            <Link href='#'>NFT Sale</Link>
            <Link href='#'>Main Sale</Link>
            <Link href='#'>Private Sale</Link>
          </Links>
          {account
            ? <AccountContainer/>
            : <ConnectButton onClick={() => connectWallet(activate, connectors.injected, 'injected')}>
               Connect Wallet
              </ConnectButton>
          }
          {isBurgerMenu
            ? <BurgerTabletCrossIcon onClick={() => setIsBurgerMenu(false)}/>
            : <BurgerTabletIcon onClick={() => setIsBurgerMenu(true)}/>
          }
        </Navigation>
      </Content>
    </Wrapper>
  );
};

export default Header;