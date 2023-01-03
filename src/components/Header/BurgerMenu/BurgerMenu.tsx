/* eslint-disable jsx-quotes */
import React, { useState } from 'react';
import { Wrapper, Links, RouterLink, ConnectButton, Link } from './styles';
import { useWeb3React } from '@web3-react/core';
// import { connectors } from '../../../constants/connectors';
// import { connectWallet } from '../../../utils/walletUtils';
import ConnectWalletModal from '../../ConnectWalletModal/ConnectWalletModal';
import ModalBackdrop from '../../ModalBackdrop/ModalBackdrop';

const BurgerMenu = () => {
  const { account } = useWeb3React(); // { .., activate }
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);

  return (
    <Wrapper>
      <Links>
        <RouterLink to="/main-sale">Main Sale</RouterLink>
        <RouterLink to="/nft-sale">NFT Sale</RouterLink>
        <Link href="#">Private Sale</Link>
        {!account && (
          // <ConnectButton onClick={() => connectWallet(activate, connectors.injected, 'injected')}>
          <ConnectButton onClick={() => setIsWalletModalOpen(true)}>
            Connect wallet
          </ConnectButton>
        )}
      </Links>
      {isWalletModalOpen && (
        <ModalBackdrop setIsModalOpen={setIsWalletModalOpen}>
          {/*@ts-ignore*/}
          <ConnectWalletModal setIsModalOpen={setIsWalletModalOpen} />
        </ModalBackdrop>
      )}
    </Wrapper>
  );
};

export default BurgerMenu;
