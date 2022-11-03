import React from 'react';
import {
  Content,
  Wrapper,
  TextContainer,
  Title,
  Text,
  Thumb,
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
            <Thumb title={title}>
              <Img src={img} title={title} />
            </Thumb>
            <Text>{text}</Text>
          </MobileContainer>
        </MobileContent>
      ) : (
        <Content>
          <Thumb>
            <Img
              src={img}
              // style={{ height: `${title === 'Pre-Sale' ? '122px' : '105x'}` }}
              title={title}
            />
          </Thumb>
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
