// @ts-nocheck
import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import { heroInfo } from '../../constants/constants';
import { OutlineButton } from '../../theme';
import { ButtonsContainer } from './styles';
import SaleSection from '../../components/SaleSection/SaleSection';
import { changeNetwork } from '../../utils/blockchainUtils';

const PreSalePage = () => {
  const { presale } = heroInfo;

  const handleNetworkSwitch = async (networkName: string) => {
    await changeNetwork(networkName);
  };

  return (
    <>
      <HeroSection
        title={presale?.title}
        text={presale?.text}
        img={presale?.img}
      />
      <ButtonsContainer>
        <OutlineButton onClick={() => handleNetworkSwitch('goerli')}>
          Ethereum Network
        </OutlineButton>
        <OutlineButton onClick={() => handleNetworkSwitch('bscT')}>
          BSC Network
        </OutlineButton>
      </ButtonsContainer>
      <SaleSection title={presale?.title} />
    </>
  );
};

export default PreSalePage;
