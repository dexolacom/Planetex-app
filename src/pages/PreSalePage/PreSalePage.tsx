import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import { heroInfo } from '../../constants/constants'
import { FlexRow, OutlineButton } from '../../theme';
import { ButtonsContainer } from './styles';
import SaleSection from '../../components/SaleSection/SaleSection';

const PreSalePage = () => {
  const { presale } = heroInfo
  return (
    <>
      <FlexRow margin='0 0 45px 0'>
        <HeroSection title={presale?.title} text={presale?.text} img={presale?.img}/>
      </FlexRow>
      <ButtonsContainer>
        <OutlineButton>Ethereum Network</OutlineButton>
        <OutlineButton>BSC Network</OutlineButton>
      </ButtonsContainer>
      <SaleSection/>
    </>
  );
};

export default PreSalePage;