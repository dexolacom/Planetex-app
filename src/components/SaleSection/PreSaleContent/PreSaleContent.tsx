/* eslint-disable no-console */
/* eslint-disable jsx-quotes */
/* eslint-disable max-lines-per-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { SolidButton } from '../../../theme';
import {
  Title,
  Wrapper,
  Text,
  Tag,
  TitleContainer,
  Content,
  InputError
} from './styles';
import { useWeb3React } from '@web3-react/core';
import { checkApprove } from '../../../utils/blockchainUtils';
import ModalBackdrop from '../../ModalBackdrop/ModalBackdrop';
import StatusModal from '../../StatusModal/StatusModal';
import InputContainer from './InputContainer/InputContainer';
import Loader from '../../Loader/Loader';

const PreSaleContent = () => {
  const { chainId, account } = useWeb3React();
  const [tokenAmount, setTokenAmount] = useState('');
  const [tokenName, setTokenName] = useState('');
  const [isTransErrorModal, setIsTransErrorModal] = useState(false)
  const [isTransSuccessModal, setIsTransSuccessModal] = useState(false)
  const [isTransLoading, setIsTransLoading] = useState(false)
  const [isInputAmountError, setIsInputAmountError] = useState(false)
  console.log(tokenAmount);

  return (
    <>
      <Wrapper>
        <Content>
          <TitleContainer>
            <Title>Pre-Sale</Title>
            <Tag>Limited purchase restrictions 10-1000$</Tag>
          </TitleContainer>
          <Text>Stake your SEAN up to 35 days to earn extra SEAN.</Text>
          <InputContainer
            tokenAmount={tokenAmount}
            tokenName={tokenName}
            isInputAmountError={isInputAmountError}
            // @ts-ignore
            setTokenAmount={setTokenAmount}
            setTokenName={setTokenName}
            setIsInputAmountError={setIsInputAmountError}
          />
          {isInputAmountError && <InputError>Please, enter an amount from 10$ to 1000$</InputError>}
          <SolidButton disabled={!tokenAmount || isTransLoading || isInputAmountError || +tokenAmount === 0} onClick={
            () => checkApprove(chainId, account, tokenAmount, tokenName, setIsTransSuccessModal, setIsTransErrorModal, setIsTransLoading)}
          >
            {isTransLoading
              ? <>
                <Loader stroke='#D4E5FF' size='20px' style={{marginRight: '10px'}}/>
                Pending
              </>
              : 'Buy Token'
            }
          </SolidButton>
        </Content>
      </Wrapper>

      {isTransErrorModal &&
        <ModalBackdrop setIsModalOpen={setIsTransErrorModal}>
          <StatusModal setIsModalOpen={setIsTransErrorModal} isError/>
        </ModalBackdrop>
      }

      {isTransSuccessModal &&
        <ModalBackdrop setIsModalOpen={setIsTransSuccessModal}>
          <StatusModal setIsModalOpen={setIsTransSuccessModal}/>
        </ModalBackdrop>
      }
    </>
  );
};

export default PreSaleContent;
