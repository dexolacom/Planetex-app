/* eslint-disable indent */
/* eslint-disable max-lines-per-function */
import React, { useEffect, useState } from 'react';

import { SolidButton } from '../../../theme';
import {
  Title,
  Wrapper,
  Text,
  Tag,
  TitleContainer,
  Content,
  InputError,
  InputWarning,
} from './styles';
import { useWeb3React } from '@web3-react/core';
import {
  checkAllowance,
  checkApprove,
  convertToUSD,
  formatToHuman,
  getUserAvailableAmount,
} from '../../../utils/blockchainUtils';
import ModalBackdrop from '../../ModalBackdrop/ModalBackdrop';
import StatusModal from '../../StatusModal/StatusModal';
import InputContainer from './InputContainer/InputContainer';
import Loader from '../../Loader/Loader';
import useDebounce from '../../../hooks/useDebounce';
import {
  getTokenContract,
  getTokenSaleContractAddress,
} from '../../../utils/contracts';
import { useTransactionContext } from '../../../contexts/transactionContext';

const PreSaleContent = () => {
  const { chainId, account } = useWeb3React();
  const { isTransSuccessModal, setIsTransSuccessModal } =
    useTransactionContext();
  const [tokenAmount, setTokenAmount] = useState('');
  const [tokenName, setTokenName] = useState('');
  const [isTransErrorModal, setIsTransErrorModal] = useState(false);

  const [isTransLoading, setIsTransLoading] = useState(false);
  const [isApproveLoading, setIsApproveLoading] = useState(false);
  const [isInputAmountError, setIsInputAmountError] = useState(false);
  const [userAvailableAmount, setUserAvailableAmount] = useState('');
  const [convertedToUSDAmount, setConvertedToUSDAmount] = useState('');
  const [isWalletWarning, setIsWalletWarning] = useState(false);
  const [allowance, setAllowance] = useState('');
  const debouncedValue = useDebounce<string>(tokenAmount, 300);
  const tokenContract = getTokenContract(chainId);
  const spender = getTokenSaleContractAddress(chainId);

  useEffect(() => {
    if (chainId)
      checkAllowance(account, tokenContract, spender).then((res) =>
        setAllowance(res),
      );
  }, [chainId, account, isApproveLoading]);

  useEffect(() => {
    if (tokenName === 'BNB' || tokenName === 'ETH') {
      convertToUSD(chainId, tokenAmount).then((res) =>
        setConvertedToUSDAmount(formatToHuman(chainId, res?.usdtAmount)),
      );
    }
  }, [debouncedValue]);

  useEffect(() => {
    if (chainId)
      getUserAvailableAmount(chainId, account).then((res) =>
        setUserAvailableAmount(formatToHuman(chainId, res?.usdtAmount)),
      );
    setTokenAmount('');
  }, [chainId, isTransSuccessModal]);

  useEffect(() => {
    if (tokenName === 'BNB' || tokenName === 'ETH') {
      if (+convertedToUSDAmount === 0) {
        return setIsInputAmountError(false);
      }
      if (
        +convertedToUSDAmount <= +userAvailableAmount &&
        +convertedToUSDAmount >= 10
      ) {
        setIsInputAmountError(false);
      }
    }
  }, [convertedToUSDAmount]);

  useEffect(() => {
    setConvertedToUSDAmount('');
  }, [tokenName]);

  useEffect(() => {
    if (account) setIsWalletWarning(false);
  }, [account]);

  return (
    <>
      <Wrapper>
        <Content>
          <TitleContainer>
            <Title>Pre-Sale</Title>
            <Tag>Limited purchase restrictions 10-1000$</Tag>
          </TitleContainer>
          <Text>Choose a payment method and receive vested tokens to your wallet.</Text>
          <InputContainer
            tokenAmount={tokenAmount}
            tokenName={tokenName}
            convertedToUSDAmount={convertedToUSDAmount}
            isInputAmountError={isInputAmountError}
            isWalletWarning={isWalletWarning}
            // @ts-ignore
            setTokenAmount={setTokenAmount}
            setTokenName={setTokenName}
            setIsInputAmountError={setIsInputAmountError}
          />
          {isInputAmountError && (
            <InputError>
              {+userAvailableAmount < 10 ? (
                <>You have reached the limit of buying tokens</>
              ) : (
                <>
                  Please, enter an amount from 10$ to{' '}
                  {userAvailableAmount.replace(/(\.0+|0+)$/, '')}$
                </>
              )}
            </InputError>
          )}
          {isWalletWarning && (
            <InputWarning>
              Please connect your wallet for buy tokens
            </InputWarning>
          )}

          {(() => {
            if (!account)
              return (
                <SolidButton onClick={() => setIsWalletWarning(true)}>
                  Buy Token
                </SolidButton>
              );

            if (isApproveLoading)
              return (
                <SolidButton disabled>
                  <>
                    <Loader
                      stroke="#D4E5FF"
                      size="20px"
                      style={{ marginRight: '10px' }}
                    />
                    Approving
                  </>
                </SolidButton>
              );
            if (isTransLoading)
              return (
                <SolidButton disabled>
                  <>
                    <Loader
                      stroke="#D4E5FF"
                      size="20px"
                      style={{ marginRight: '10px' }}
                    />
                    Pending
                  </>
                </SolidButton>
              );
            if (
              allowance === '0' &&
              (tokenName === 'USDT' || tokenName === 'BUSD')
            )
              return (
                <SolidButton
                  disabled={
                    !tokenAmount ||
                    isTransLoading ||
                    isInputAmountError ||
                    +tokenAmount === 0 ||
                    +userAvailableAmount < 10
                  }
                  onClick={() =>
                    checkApprove(
                      chainId,
                      account,
                      tokenAmount,
                      tokenName,
                      setIsTransSuccessModal,
                      setIsTransErrorModal,
                      setIsTransLoading,
                      setIsApproveLoading,
                    )
                  }
                >
                  Approve
                </SolidButton>
              );
            else
              return (
                <SolidButton
                  disabled={
                    !tokenAmount ||
                    isTransLoading ||
                    isInputAmountError ||
                    +tokenAmount === 0 ||
                    +userAvailableAmount < 10
                  }
                  onClick={() =>
                    checkApprove(
                      chainId,
                      account,
                      tokenAmount,
                      tokenName,
                      setIsTransSuccessModal,
                      setIsTransErrorModal,
                      setIsTransLoading,
                      setIsApproveLoading,
                    )
                  }
                >
                  Buy Token
                </SolidButton>
              );
          })()}
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

export default PreSaleContent;
