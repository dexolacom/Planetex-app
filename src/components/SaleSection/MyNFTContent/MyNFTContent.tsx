// @ts-nocheck
/* eslint-disable no-console */
/* eslint-disable max-lines-per-function */
import { FullScreenTheme } from '../../../theme';
import useCheckIsMobile from '../../../hooks/useCheckIsMobile';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NFT_1 from '../../../assets/NFT_624/1.jpg';
import NFT_2 from '../../../assets/NFT_624/2.jpg';
import NFT_3 from '../../../assets/NFT_624/3.jpg';
import NFT_4 from '../../../assets/NFT_624/4.jpg';
import NFT_5 from '../../../assets/NFT_624/5.jpg';
import NFT_6 from '../../../assets/NFT_624/6.jpg';
import NFT_7 from '../../../assets/NFT_624/7.jpg';
import NFT_8 from '../../../assets/NFT_624/8.jpg';
import NFTSaleDamage from '../../../assets/icons/NFTSaleDamage.svg';
// import NFTSaleSpeed from '../../../assets/icons/NFTSaleSpeed.svg';
import NFTSaleHealth from '../../../assets/icons/NFTSaleHealth.svg';
// import NFTSaleArmor from '../../../assets/icons/NFTSaleArmor.svg';
import arrowTop from '../../../assets/icons/arrow-top.svg';
import {
  Wrapper,
  Content,
  MobileContent,
  MobileTitle,
  SlideContainer,
  Title,
  List,
  Item,
  NFTContainer,
  Thumb,
  SkillsWrapper,
  Skill,
  SkillContainer,
  SkillImg,
  SkillArrow,
  InfoWrapper,
  Name,
  Role,
} from './styles';

const _NFT = [
  { id: 1, name: 'Hector Hernandez', role: 'Contrabandist', url: NFT_1 },
  { id: 2, name: 'ZoJo', role: 'Space Wrestler ', url: NFT_2 },
  { id: 3, name: 'Major Kroton', role: 'Retired Soldier', url: NFT_3 },
  { id: 4, name: 'Object No. 113', role: 'None', url: NFT_4 },
  { id: 5, name: 'Christopher McKnill', role: 'Astronaut', url: NFT_5 },
  { id: 6, name: 'Nitrine Spark', role: 'Traveler', url: NFT_6 },
  { id: 7, name: 'Tony Masfant', role: 'Spaceship Commander', url: NFT_7 },
  { id: 8, name: 'Jesse Сannibal', role: 'Doctor ', url: NFT_8 },
];

const settings = {
  dots: false,
  centerMode: true,
  infinite: true,
  // centerPadding: '30px',
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const MyNFTContent = () => {
  const { isMobile } = useCheckIsMobile();

  return (
    <>
      {isMobile ? (
        <MobileContent>
          <MobileTitle>My NFT</MobileTitle>
          <Slider {...settings}>
            {_NFT.map((nft) => {
              return (
                <SlideContainer key={nft.id}>
                  <NFTContainer>
                    <Thumb url={nft.url} />
                    <SkillsWrapper>
                      <Skill>
                        <SkillContainer>
                          <SkillImg src={NFTSaleHealth} />
                          <SkillArrow src={arrowTop} />
                        </SkillContainer>
                      </Skill>
                      <Skill>
                        <SkillContainer>
                          <SkillImg src={NFTSaleDamage} />
                          <SkillArrow src={arrowTop} />
                        </SkillContainer>
                      </Skill>
                    </SkillsWrapper>
                    <InfoWrapper>
                      <Name>{nft.name}</Name>
                      <Role>{nft.role}</Role>
                    </InfoWrapper>
                  </NFTContainer>
                </SlideContainer>
              );
            })}
          </Slider>
        </MobileContent>
      ) : (
        <FullScreenTheme>
          <Wrapper>
            <Content>
              <Title>My NFT</Title>
              <List>
                {_NFT.map((nft) => {
                  return (
                    <Item key={nft.id}>
                      <NFTContainer>
                        <Thumb url={nft.url} />
                        <SkillsWrapper>
                          <Skill>
                            <SkillContainer>
                              <SkillImg src={NFTSaleHealth} />
                              <SkillArrow src={arrowTop} />
                            </SkillContainer>
                          </Skill>
                          <Skill>
                            <SkillContainer>
                              <SkillImg src={NFTSaleDamage} />
                              <SkillArrow src={arrowTop} />
                            </SkillContainer>
                          </Skill>
                        </SkillsWrapper>
                        <InfoWrapper>
                          <Name>Nitrine Spark</Name>
                          <Role>Traveler</Role>
                        </InfoWrapper>
                      </NFTContainer>
                    </Item>
                  );
                })}
              </List>
            </Content>
          </Wrapper>
        </FullScreenTheme>
      )}
    </>
  );
};

export default MyNFTContent;
