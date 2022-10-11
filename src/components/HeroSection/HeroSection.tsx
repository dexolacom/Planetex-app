import React from 'react';
import { Content, Wrapper, TextContainer, Title, Text, Img } from './styles';
import { HeroProps } from '../../constants/types';


const HeroSection = ({title, text, img}:HeroProps) => {
  return (
    <Wrapper>
      <Content>
        <Img src={img}/>
        <TextContainer>
          <Title>{title}</Title>
          <Text>{text}</Text>
        </TextContainer>
      </Content>
    </Wrapper>
  );
};

export default HeroSection;