// @ts-nocheck
import React, { useEffect, useState } from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import { heroInfo } from '../../constants/constants';
import { OutlineButton } from '../../theme';
import { ButtonsContainer, TokenContainer } from './styles';
import SaleSection from '../../components/SaleSection/SaleSection';
import { changeNetwork } from '../../utils/blockchainUtils';
import { useWeb3React } from '@web3-react/core';
import ModalBackdrop from '../../components/ModalBackdrop/ModalBackdrop';
import ConnectWalletModal from '../../components/ConnectWalletModal/ConnectWalletModal';
import { getUserBalanceSum } from '../../utils/utils';

const PreSalePage = () => {
  const { chainId, account } = useWeb3React()
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false)
  const [userBalance, setUserBalance] = useState(false)
  const { presale } = heroInfo;

  const handleNetworkSwitch = async (networkName: string) => {
    if (!localStorage.getItem('provider')) {
      return setIsWalletModalOpen(true)
    }
    await changeNetwork(networkName);
  };

  useEffect(() => {
    if (account) {
      getUserBalanceSum(account).then(res => setUserBalance(res))
    }
  }, [account]);

  return (
    <>
      <HeroSection
        title={presale?.title}
        text={presale?.text}
        img={presale?.img}
      />
      {account &&
        <TokenContainer>
          PLTEX = {userBalance}
        </TokenContainer>
      }
      <ButtonsContainer>
        <OutlineButton isActive={chainId === 5 || chainId === 1} onClick={() => handleNetworkSwitch('goerli')}>
          Ethereum Network
        </OutlineButton>
        <OutlineButton isActive={chainId === 97 || chainId === 56} onClick={() => handleNetworkSwitch('bscT')}>
          BSC Network
        </OutlineButton>
      </ButtonsContainer>
      <SaleSection title={presale?.title} />
      {isWalletModalOpen &&
        <ModalBackdrop setIsModalOpen={setIsWalletModalOpen}>
          {/*@ts-ignore*/}
          <ConnectWalletModal setIsModalOpen={setIsWalletModalOpen}/>
        </ModalBackdrop>
      }
    </>
  );
};

export default PreSalePage;
