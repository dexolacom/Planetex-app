/* eslint-disable jsx-quotes */
// @ts-nocheck
/* eslint-disable max-lines-per-function */
import Social from '../Social/Social';
import {
  Wrapper,
  Content,
  Logo,
  Navigation,
  Links,
  RouterLink,
  Link,
} from '../Header/styles';
import { FooterContainer } from './styles';
import BackToTopButton from '../BackToTopButton/BackToTopButton';

const Footer = () => {
  return (
    <>
      <Social />
      <FooterContainer>
        {/* === Attention! Using Header styles === */}
        <Wrapper>
          <Content>
            <Logo />
            <Navigation>
              <Links>
                <RouterLink to="/presale">Pre-Sale</RouterLink>
                <RouterLink to="/nft-sale">NFT Sale</RouterLink>
                <Link href="#0">Main Sale</Link>
                <Link href="#0">Private Sale</Link>
              </Links>
            </Navigation>
          </Content>
        </Wrapper>
        {/* === Attention! Using Header styles === */}
      </FooterContainer>
      <BackToTopButton />
    </>
  );
};

export default Footer;
