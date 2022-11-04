import React, { useState } from 'react';
import { Wrapper, Links, RouterLink, ConnectButton, Link } from './styles';
import { useWeb3React } from '@web3-react/core';
import { connectors } from '../../../constants/connectors';
import { connectWallet } from '../../../utils/walletUtils';
import ConnectWalletModal from '../../ConnectWalletModal/ConnectWalletModal';
import ModalBackdrop from '../../ModalBackdrop/ModalBackdrop';


const BurgerMenu = () => {
  const { account, activate } = useWeb3React();
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);

  return (
    <Wrapper>
      <Links>
        <RouterLink to='/presale'>Pre-Sale</RouterLink>
        <RouterLink to="/nft-sale">NFT Sale</RouterLink>
        <Link href='#'>Main Sale</Link>
        <Link href='#'>Private Sale</Link>
        {!account &&
        // <ConnectButton onClick={() => connectWallet(activate, connectors.injected, 'injected')}>
        <ConnectButton onClick={() => setIsWalletModalOpen(true)}>
          Connect wallet
        </ConnectButton>
        }
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