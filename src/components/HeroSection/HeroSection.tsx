import React from 'react';
import { Content, Wrapper, TextContainer, Title, Text } from './styles';
import { HeroProps } from '../../constants/types';


const HeroSection = ({title, text, img}:HeroProps) => {
  return (
    <Wrapper>
      <Content>
        <img src={img}/>
        <TextContainer>
          <Title>{title}</Title>
          <Text>{text}</Text>
        </TextContainer>
      </Content>
    </Wrapper>
  );
};

export default HeroSection;