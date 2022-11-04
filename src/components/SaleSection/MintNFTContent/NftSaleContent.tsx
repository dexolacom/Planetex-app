// @ts-nocheck
/* eslint-disable indent */
/* eslint-disable jsx-quotes */
/* eslint-disable max-lines-per-function */
import { useEffect, useState, useContext } from 'react';
import { useWeb3React } from '@web3-react/core';
import useCheckIsMobile from '../../../hooks/useCheckIsMobile';
import SaleNFTContext from '../SaleNFTContext';
import _NFTSaleGroup from '../../../assets/images/_NFTSaleGroup.png';
import {
  Wrapper,
  Content,
  HeroGroupImg,
  PriceContainer,
  PriceText,
  MainContentWrap,
  Title,
  Text,
  TextContainer,
  ActionContainer,
} from './styles';
import TokenNameSelect from './TokenNameSelect';
import ActionButton from './ActionButton';
import NFTSkills from './NFTSkills';
import {
  getTokenContract,
  getPlanetexTokenContract,
  getPlanetexTokenContractAddress,
} from '../../../utils/contracts';
import StatusModal from '../../StatusModal/StatusModal';
import ModalBackdrop from '../../ModalBackdrop/ModalBackdrop';
import {
  checkAllowance,
  checkApproveNft,
  approve,
} from '../../../utils/blockchainUtils';
import getTokens from '../MyNFTContent/getTokens';
import { changeNetwork } from '../../../utils/walletUtils';

const NFTSaleContent = () => {
  const { chainId, account } = useWeb3React();
  const [tokenName, setTokenName] = useState('');
  const [isWallet, setIsWallet] = useState(false);
  const [isTransErrorModal, setIsTransErrorModal] = useState(false);
  const [isTransSuccessModal, setIsTransSuccessModal] = useState(false);
  const [isApproveLoading, setIsApproveLoading] = useState(false);
  const [isTransLoading, setIsTransLoading] = useState(false);
  const [allowance, setAllowance] = useState('');

  const tokenContract = chainId && getTokenContract(chainId);
  const spender = chainId && getPlanetexTokenContractAddress(chainId);

  const { isMobile } = useCheckIsMobile();

  const { collection, setCollection, setTokens } = useContext(SaleNFTContext);

  useEffect(() => {
    if (chainId)
      checkAllowance(account, tokenContract, spender).then((res) => {
        setAllowance(res);
      });
  }, [chainId, account, isApproveLoading]);

  useEffect(() => setIsWallet(account ? true : false), [account]);

  useEffect(() => {
    isTransSuccessModal === true && checkNewNFT();
  }, [isTransSuccessModal]);

  const handleNetworkSwitch = async (networkName: string) => {
    if (!localStorage.getItem('provider')) {
      return setIsWalletModalOpen(true);
    }
    await changeNetwork(networkName);
  };

  const approveMint = async () => {
    if (chainId !== 1 || chainId !== 5) {
      await handleNetworkSwitch('eth');
    }

    if (chainId === 1 || chainId === 5) {
      await approve(tokenContract, account, spender, setIsApproveLoading);
    }
  };

  const mint = async () => {
    if (chainId !== 1 || chainId !== 5) {
      await handleNetworkSwitch('eth');
    }

    if (chainId === 1 || chainId === 5) {
      await checkApproveNft(
        chainId,
        account,
        tokenName,
        setIsTransSuccessModal,
        setIsTransErrorModal,
        setIsTransLoading,
      );
    }
  };

  const checkNewNFT = async () => {
    const NFTContract = chainId && getPlanetexTokenContract(chainId);

    let count = 0;
    let ids = [];

    const refreshIntervalId = setInterval(async () => {
      ids = await NFTContract.methods.userTokens(account).call();

      if (count === 10) {
        clearInterval(refreshIntervalId);
        return;
      }

      if (ids.length > collection.length) {
        const _count = 0;
        const _ids = ids.slice(-1);

        getTokens(
          NFTContract,
          chainId,
          account,
          setCollection,
          setTokens,
          _count,
          _ids,
          collection,
        );
        clearInterval(refreshIntervalId);
        return;
      }

      count += 1;
    }, 1000);
  };

  return (
    <>
      <Wrapper>
        <Content mobBg={isMobile}>
          <HeroGroupImg src={_NFTSaleGroup} alt="nft for sale" />
          <PriceContainer>
            <PriceText>49$</PriceText>
          </PriceContainer>
          <MainContentWrap>
            <TextContainer>
              <Title>NFT-Sale</Title>
              <Text>
                12 original characters are waiting for you in our NFT
                collection, which consists of 10,000 tokens. After mint, the
                token will be displayed on this page with information about the
                name, profession and skills of your character. The number of
                characters for one user is not limited.
              </Text>
            </TextContainer>
            <NFTSkills />
          </MainContentWrap>
          <ActionContainer>
            <TokenNameSelect
              tokenName={tokenName}
              setTokenName={setTokenName}
            />
            <ActionButton
              tokenContract={tokenContract}
              account={account}
              spender={spender}
              tokenName={tokenName}
              isWallet={isWallet}
              allowance={allowance}
              isApproveLoading={isApproveLoading}
              isTransLoading={isTransLoading}
              setAllowance={setAllowance}
              setIsApproveLoading={setIsApproveLoading}
              approveMint={approveMint}
              mint={mint}
            />
          </ActionContainer>
        </Content>
      </Wrapper>

      {isTransErrorModal && (
        <ModalBackdrop setIsModalOpen={setIsTransErrorModal}>
          <StatusModal setIsModalOpen={setIsTransErrorModal} isError />
        </ModalBackdrop>
      )}

      {isTransSuccessModal && (
        <ModalBackdrop setIsModalOpen={setIsTransSuccessModal}>
          <StatusModal setIsModalOpen={setIsTransSuccessModal} />
        </ModalBackdrop>
      )}
    </>
  );
};

export default NFTSaleContent;
