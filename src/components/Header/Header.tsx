/* eslint-disable max-lines-per-function */
import React, { useEffect, useState } from 'react';
import {
  Content,
  Wrapper,
  Navigation,
  Links,
  RouterLink,
  LogoLink,
  Logo,
  Link,
  BurgerTabletIcon,
  ConnectButton,
  // MobileLogo,
  BurgerTabletCrossIcon,
} from './styles';
import AccountContainer from './AccountContainer/AccountContainer';
// import useCheckIsMobile from '../../hooks/useCheckIsMobile';
import { useWeb3React } from '@web3-react/core';
import { HeaderProps } from '../../constants/types';
import ModalBackdrop from '../ModalBackdrop/ModalBackdrop';
import ConnectWalletModal from '../ConnectWalletModal/ConnectWalletModal';
import { connectWalletOnPageLoad } from '../../utils/walletUtils';
// @ts-ignore
import logoIcon from '../../assets/icons/logo.png';
import logoIconMobile from '../../assets/icons/logoShort.svg';

const Header = ({ isBurgerMenu, setIsBurgerMenu }: HeaderProps) => {
  // const { isMobile } = useCheckIsMobile();
  const { chainId, account, activate } = useWeb3React();
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);

  useEffect(() => {
    connectWalletOnPageLoad(activate);
    // @ts-ignore
    // check for metamask lock
    if (window.ethereum) {
      // @ts-ignore
      window.ethereum.on('accountsChanged', (accounts) => {
        if (!accounts[0]) localStorage.removeItem('provider');
      });
    }
  }, []);

  return (
    <>
      <Wrapper>
        <Content>
          <LogoLink
            target="_blank"
            href={
              chainId === 1 || chainId === 56 || chainId === undefined
                ? 'https://token.planetex.io/'
                : 'https://planetex-app.herokuapp.com'
            }
          >
            <Logo src={window.innerWidth > 428 ? logoIcon : logoIconMobile} alt="Planetex" />
          </LogoLink>
          <Navigation>
            <Links>
              <RouterLink to="/presale">Pre-Sale</RouterLink>
              <RouterLink to="/nft-sale">NFT Sale</RouterLink>
              <Link href="#">Main Sale</Link>
              <Link href="#">Private Sale</Link>
            </Links>
            {account ? (
              <AccountContainer />
            ) : (
              <ConnectButton onClick={() => setIsWalletModalOpen(true)}>
                Connect Wallet
              </ConnectButton>
            )}
            {isBurgerMenu ? (
              <BurgerTabletCrossIcon onClick={() => setIsBurgerMenu(false)} />
            ) : (
              <BurgerTabletIcon onClick={() => setIsBurgerMenu(true)} />
            )}
          </Navigation>
        </Content>
      </Wrapper>
      {isWalletModalOpen && (
        <ModalBackdrop setIsModalOpen={setIsWalletModalOpen}>
          {/*@ts-ignore*/}
          <ConnectWalletModal setIsModalOpen={setIsWalletModalOpen} />
        </ModalBackdrop>
      )}
    </>
  );
};

export default Header;
