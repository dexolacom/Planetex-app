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

  return <Wrapper></Wrapper>;
};

export default HeroSectionSaleNFT;
