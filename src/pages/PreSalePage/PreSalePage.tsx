import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import { heroInfo } from '../../constants/constants'
import { OutlineButton } from '../../theme';
import { ButtonsContainer } from './styles';
import SaleSection from '../../components/SaleSection/SaleSection';

const PreSalePage = () => {
  const { presale } = heroInfo
  return (
    <>
      <HeroSection title={presale?.title} text={presale?.text} img={presale?.img}/>
      <ButtonsContainer>
        <OutlineButton>Ethereum Network</OutlineButton>
        <OutlineButton>BSC Network</OutlineButton>
      </ButtonsContainer>
      <SaleSection/>
    </>
  );
};

export default PreSalePage;