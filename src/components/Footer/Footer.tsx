import React from 'react';
import SocialContent from '../SaleSection/SocialContent/SocialContent';
import {
  Wrapper,
  Content,
  Logo,
  Navigation,
  Links,
  RouterLink,
  Link,
} from '../Header/styles';
import { FooterContainer, BackToTopButton, BackToTopImg } from './styles';
// import ArrowToTop from '../../assets/icons/arrowToTop.svg';

const Footer = () => {
  return (
    <>
      <SocialContent />
      <FooterContainer>
        {/* <BackToTopButton>
          <BackToTopImg src={ArrowToTop} />
        </BackToTopButton> */}

        {/* === Attention! Using Header styles === */}
        <Wrapper>
          <Content>
            <Logo />
            <Navigation>
              <Links>
                <RouterLink to="/presale">Pre-Sale</RouterLink>
                <RouterLink to="/nft-sale">NFT Sale</RouterLink>
                <Link href="#">Main Sale</Link>
                <Link href="#">Private Sale</Link>
              </Links>
            </Navigation>
          </Content>
        </Wrapper>
        {/* === Attention! Using Header styles === */}
      </FooterContainer>
    </>
  );
};

export default Footer;
