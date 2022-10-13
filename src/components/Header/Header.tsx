import React from 'react';
import { Content, Wrapper, Navigation, Links, RouterLink, Logo, Link, BurgerTabletIcon, ConnectButton, MobileLogo } from './styles';
import AccountContainer from '../AccountContainer/AccountContainer';
import useCheckIsMobile from '../../hooks/useCheckIsMobile';


const Header = () => {
  const { isMobile } = useCheckIsMobile()

  return (
    <Wrapper>
      <Content>
        {isMobile
          ? <MobileLogo/>
          : <Logo/>
        }
        <Navigation>
          <Links>
            <RouterLink to='/presale'>Pre-Sale</RouterLink>
            <Link href='#'>NFT Sale</Link>
            <Link href='#'>Main Sale</Link>
            <Link href='#'>Private Sale</Link>
          </Links>
          <AccountContainer/>
          {/*<ConnectButton>Connect Wallet</ConnectButton>*/}
          <BurgerTabletIcon/>
        </Navigation>
      </Content>
    </Wrapper>
  );
};

export default Header;