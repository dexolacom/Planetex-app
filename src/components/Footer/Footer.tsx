// @ts-nocheck
/* eslint-disable jsx-quotes */
/* eslint-disable max-lines-per-function */
import { useWeb3React } from '@web3-react/core';
import Social from '../Social/Social';
import {
  Wrapper,
  Content,
  LogoLink,
  Logo,
  Navigation,
  Links,
  RouterLink,
  Link,
} from '../Header/styles';
import { FooterContainer } from './styles';
import BackToTopButton from '../BackToTopButton/BackToTopButton';
import logoIcon from '../../assets/icons/logo.png';

const Footer = () => {
  const { chainId } = useWeb3React();

  return (
    <>
      <Social />
      <FooterContainer>
        {/* === Attention! Using Header styles === */}
        <Wrapper>
          <Content>
            <LogoLink
              target="_blank"
              href={
                chainId === 1 || chainId === 56
                  ? 'https://token.planetex.io/'
                  : 'https://planetex-app.herokuapp.com'
              }
            >
              <Logo src={logoIcon} />
            </LogoLink>
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
