// @ts-nocheck
/* eslint-disable indent */
/* eslint-disable jsx-quotes */
/* eslint-disable no-console */
/* eslint-disable max-lines-per-function */
import { useEffect, useState, useContext } from 'react';
import SaleNFTContext from '../SaleNFTContext';
import { FullScreenTheme } from '../../../theme';
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
import { useWeb3React } from '@web3-react/core';
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
} from '../../../utils/blockchainUtils';
import getTokens from '../MyNFTContent/getTokens';

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

  const mint = async () => {
    await checkApproveNft(
      chainId,
      account,
      tokenName,
      setIsTransSuccessModal,
      setIsTransErrorModal,
      setIsTransLoading,
    );
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
      <FullScreenTheme>
        <Wrapper>
          <Content>
            <HeroGroupImg src={_NFTSaleGroup} />
            <PriceContainer>
              <PriceText>49$</PriceText>
            </PriceContainer>
            <MainContentWrap>
              <TextContainer>
                <Title>NFT-Sale</Title>
                <Text>
                  Stake your SEAN up to 35 days to earn extra SEAN.ur SEAN up to
                  35 days to earn extra SEays to earn extra SEto earn extra
                  SEAN.ur SEAN up to 35 days extra SEAN.ur SEAN up to 35 days to
                  earn extra SEays to earn extra SEto earn extra SEAN.ur SEA
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
                mint={mint}
              />
            </ActionContainer>
          </Content>
        </Wrapper>
      </FullScreenTheme>

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
