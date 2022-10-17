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
  InputContainer,
  Input,
  Select,
  Content,
} from './styles';
import { useWeb3React } from '@web3-react/core';
import { checkApprove } from '../../../utils/blockchainUtils';

const PreSaleContent = () => {
  const { chainId, account } = useWeb3React();
  const [tokenAmount, setTokenAmount] = useState('');
  const [tokenName, setTokenName] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    if (input.match(/^[0-9]*[.,]?[0-9]*$/)) {
      return setTokenAmount(input);
    }
  };

  return (
    <Wrapper>
      <Content>
        <TitleContainer>
          <Title>Pre-Sale</Title>
          <Tag>Limited purchase restrictions 10-1000$</Tag>
        </TitleContainer>
        <Text>Stake your SEAN up to 35 days to earn extra SEAN.</Text>
        <InputContainer>
          <Input
            value={tokenAmount}
            onChange={(e) => handleInputChange(e)}
            placeholder={'0.0'}
            inputMode="decimal"
            maxLength={10}
          />
          <Select onChange={(e) => console.log(e.target.value)}>
            {chainId === 97 ? (
              <>
                <option>BNB</option>
                <option>BUSD</option>
              </>
            ) : (
              <>
                <option>ETH</option>
                <option>USDT</option>
              </>
            )}
          </Select>
        </InputContainer>
        <SolidButton
          onClick={() => checkApprove(chainId, account, tokenAmount)}
        >
          Buy Token
        </SolidButton>
      </Content>
    </Wrapper>
  );
};

export default PreSaleContent;
