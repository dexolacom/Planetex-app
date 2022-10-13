import React from 'react';
import {
  Title,
  Wrapper,
  Text,
  Tag,
  TitleContainer,
  Form,
  Input,
  Select,
  Button,
  Content
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
        <Form>
          <Input/>
          <Select>
            <option>ETH</option>
            <option>USDT</option>
          </Select>
        </Form>
        <Button>
          Buy Token
        </Button>
      </Content>
    </Wrapper>
  );
};

export default PreSaleContent;