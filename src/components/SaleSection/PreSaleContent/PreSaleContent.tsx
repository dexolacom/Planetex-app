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


const PreSaleContent = () => {
  return (
    <Wrapper>
      <Content>
        <TitleContainer>
          <Title>Pre-Sale</Title>
          <Tag>Limited purchase restrictions 10-1000$</Tag>
        </TitleContainer>
        <Text>Stake your SEAN up to 35 days to earn extra SEAN.</Text>
        <InputContainer>
          <Input/>
          <Select>
            <option>ETH</option>
            <option>USDT</option>
          </Select>
        </InputContainer>
        <SolidButton>Buy Token</SolidButton>
      </Content>
    </Wrapper>
  );
};

export default PreSaleContent;