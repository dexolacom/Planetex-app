import {
  Content,
  Wrapper,
  TextContainer,
  Title,
  Text,
  ImgWrapper,
  Img,
  MobileContent,
  MobileContainer,
} from './styles';
import { HeroProps } from '../../constants/types';
import useCheckIsMobile from '../../hooks/useCheckIsMobile';

const HeroSectionSaleNFT = ({ title, text, img }: HeroProps) => {
  const { isMobile } = useCheckIsMobile();

  return (
    <Wrapper>
      {isMobile ? (
        <MobileContent>
          <Title>{title}</Title>
          <MobileContainer>
            <ImgWrapper>
              <Img src={img} alt="nft set" />
            </ImgWrapper>
            <Text>{text}</Text>
          </MobileContainer>
        </MobileContent>
      ) : (
        <Content>
          <ImgWrapper>
            <Img src={img} alt="nft set" />
          </ImgWrapper>
          <TextContainer>
            <Title>{title}</Title>
            <Text>{text}</Text>
          </TextContainer>
        </Content>
      )}
    </Wrapper>
  );
};

export default HeroSectionSaleNFT;
