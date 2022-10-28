import React, { useState } from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import { heroInfo } from '../../constants/constants';
import { OutlineButton } from '../../theme';
import { ButtonsContainer } from './styles';
import SaleSection from '../../components/SaleSection/SaleSection';
import { useWeb3React } from '@web3-react/core';
import ModalBackdrop from '../../components/ModalBackdrop/ModalBackdrop';
import ConnectWalletModal from '../../components/ConnectWalletModal/ConnectWalletModal';
import UserBalance from '../../components/UserBalance/UserBalance';
import { changeNetwork } from '../../utils/walletUtils';
import { TransactionContext } from '../../contexts/transactionContext';

const PreSalePage = () => {
  const { chainId, account } = useWeb3React()
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false)
  const [isTransSuccessModal, setIsTransSuccessModal] = useState(false)
  const { presale } = heroInfo;

  const handleNetworkSwitch = async (networkName: string) => {
    if (!localStorage.getItem('provider')) {
      return setIsWalletModalOpen(true)
    }
    await changeNetwork(networkName);
  };

  return (
    <>
      <TransactionContext.Provider value={{isTransSuccessModal, setIsTransSuccessModal}}>
        <HeroSection
          title={presale?.title}
          text={presale?.text}
          img={presale?.img}
        />
        {account && <UserBalance/>}
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
      </TransactionContext.Provider>
    </>
  );
};

export default PreSalePage;
