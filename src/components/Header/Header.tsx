import React from 'react';
import { Content, Wrapper, Navigation, Links, RouterLink, Logo, Link } from './styles';
import { ConnectButton } from '../../theme';


const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Logo/>
        <Navigation>
          <Links>
            {/*@ts-ignore*/}
            <RouterLink to='/presale'>Pre-Sale</RouterLink>
            <Link href='#'>NFT Sale</Link>
            <Link href='#'>Main Sale</Link>
            <Link href='#'>Private Sale</Link>
          </Links>
          <ConnectButton>Connect Wallet</ConnectButton>
        </Navigation>
      </Content>
    </Wrapper>
  );
};

export default Header;