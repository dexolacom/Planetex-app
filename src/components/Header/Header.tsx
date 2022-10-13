import React from 'react';
import { Content, Wrapper, Navigation, Links, RouterLink, Logo, Link, BurgerTabletIcon, ConnectButton } from './styles';
import AccountContainer from '../AccountContainer/AccountContainer';


const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Logo/>
        <Navigation>
          <Links>
            <RouterLink to='/presale'>Pre-Sale</RouterLink>
            <Link href='#'>NFT Sale</Link>
            <Link href='#'>Main Sale</Link>
            <Link href='#'>Private Sale</Link>
          </Links>
          {/*<AccountContainer/>*/}
          <ConnectButton>Connect Wallet</ConnectButton>
          <BurgerTabletIcon/>
        </Navigation>
      </Content>
    </Wrapper>
  );
};

export default Header;