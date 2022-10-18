import React from 'react';
import {
  Content,
  Wrapper,
  TextContainer,
  Title,
  Text,
  Img,
  MobileContent,
  MobileContainer,
} from './styles';
import { HeroProps } from '../../constants/types';
import useCheckIsMobile from '../../hooks/useCheckIsMobile';

const HeroSection = ({ title, text, img }: HeroProps) => {
  const { isMobile } = useCheckIsMobile();

  return (
    <Wrapper>
      {isMobile ? (
        <MobileContent>
          <Title>{title}</Title>
          <MobileContainer>
            <Img
              width={'140px'}
              marginRight={'25px'}
              paddingRight={title === 'Pre-Sale' ? '35px' : '0'}
              src={img}
            />
            <Text>{text}</Text>
          </MobileContainer>
        </MobileContent>
      ) : (
        <Content>
          <Img
            width={'140px'}
            paddingRight={title === 'Pre-Sale' ? '35px' : '0'}
            marginTop={title === 'Pre-Sale' ? '-20px' : '0'}
            src={img}
          />
          <TextContainer>
            <Title>{title}</Title>
            <Text>{text}</Text>
          </TextContainer>
        </Content>
      )}
    </Wrapper>
  );
};

export default HeroSection;
