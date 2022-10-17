import React from 'react';
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
import { buyToken } from '../../../utils/buyToken';

const PreSaleContent = () => {
  const { chainId } = useWeb3React();

  return (
    <Wrapper>
      <Content>
        <TitleContainer>
          <Title>Pre-Sale</Title>
          <Tag>Limited purchase restrictions 10-1000$</Tag>
        </TitleContainer>
        <Text>Stake your SEAN up to 35 days to earn extra SEAN.</Text>
        <InputContainer>
          <Input />
          <Select>
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
        <SolidButton onClick={() => buyToken(chainId)}>Buy Token</SolidButton>
      </Content>
    </Wrapper>
  );
};

export default PreSaleContent;
