import React from 'react';
import { Content, Wrapper, Navigation, Links, RouterLink, Logo } from './styles';
import { ConnectButton } from '../../theme';


const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Logo/>
        <Navigation>
          <Links>
            <RouterLink to='/presale'>Pre-Sale</RouterLink>
            <RouterLink to='/'>NFT Sale</RouterLink>
            <RouterLink to='/'>Main Sale</RouterLink>
            <RouterLink to='/'>Private Sale</RouterLink>
          </Links>
          <ConnectButton>Connect Wallet</ConnectButton>
        </Navigation>
      </Content>
    </Wrapper>
  );
};

export default Header;