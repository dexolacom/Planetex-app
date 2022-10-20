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
import NFT_5 from '../../../assets/NFT_624/12.jpg';
import NFT_6 from '../../../assets/NFT_624/9.jpg';
import NFT_7 from '../../../assets/NFT_624/7.jpg';
import NFT_8 from '../../../assets/NFT_624/8.jpg';
import NFT_9 from '../../../assets/NFT_624/6.jpg';
import NFT_10 from '../../../assets/NFT_624/10.jpg';
import NFT_11 from '../../../assets/NFT_624/11.jpg';
import NFT_12 from '../../../assets/NFT_624/5.jpg';
import NFTSaleDamage from '../../../assets/icons/NFTSaleDamage.svg';
import NFTSaleSpeed from '../../../assets/icons/NFTSaleSpeed.svg';
import NFTSaleHealth from '../../../assets/icons/NFTSaleHealth.svg';
import NFTSaleArmor from '../../../assets/icons/NFTSaleArmor.svg';
import arrowTop from '../../../assets/icons/arrow-top.svg';
import {
  Wrapper,
  Content,
  MobileContent,
  MobileTitle,
  SlideContainer,
  SlideContent,
  SlideItem,
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
  SkillsContainer,
} from './styles';

const _NFT = [
  {
    id: 1,
    name: 'Hector Hernandez',
    role: 'Contrabandist',
    url: NFT_1,
    skills: [
      { name: 'demage', url: NFTSaleDamage },
      { name: 'speed', url: NFTSaleSpeed },
    ],
  },
  {
    id: 2,
    name: 'ZoJo',
    role: 'Space Wrestler ',
    url: NFT_2,
    skills: [
      { name: 'armor', url: NFTSaleArmor },
      { name: 'speed', url: NFTSaleSpeed },
    ],
  },
  {
    id: 3,
    name: 'Major Kroton',
    role: 'Retired Soldier',
    url: NFT_3,
    skills: [
      { name: 'demage', url: NFTSaleDamage },
      { name: 'health', url: NFTSaleHealth },
    ],
  },
  {
    id: 4,
    name: 'Object No. 113',
    role: 'None',
    url: NFT_4,
    skills: [
      { name: 'health', url: NFTSaleHealth },
      { name: 'speed', url: NFTSaleSpeed },
    ],
  },
  {
    id: 5,
    name: 'Christopher McKnill',
    role: 'Legendary Astronaut',
    url: NFT_5,
    skills: [
      { name: 'health', url: NFTSaleHealth },
      { name: 'armor', url: NFTSaleArmor },
      { name: 'demage', url: NFTSaleDamage },
    ],
  },
  {
    id: 6,
    name: 'Nitrine Spark',
    role: 'Traveler',
    url: NFT_6,
    skills: [
      { name: 'health', url: NFTSaleHealth },
      { name: 'speed', url: NFTSaleSpeed },
    ],
  },
  {
    id: 7,
    name: 'Tony Masfant',
    role: 'Spaceship Commander',
    url: NFT_7,
    skills: [
      { name: 'armor', url: NFTSaleArmor },
      { name: 'speed', url: NFTSaleSpeed },
    ],
  },
  {
    id: 8,
    name: 'Jesse Сannibal',
    role: 'Doctor ',
    url: NFT_8,
    skills: [
      { name: 'health', url: NFTSaleHealth },
      { name: 'speed', url: NFTSaleSpeed },
    ],
  },
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
                  <SlideContent>
                    <SlideItem>
                      <NFTContainer>
                        <Thumb url={nft.url} />
                        <SkillsWrapper>
                          <SkillsContainer
                            padding={
                              nft.skills?.length === 2 ? '0 30px' : '0 10px'
                            }
                          >
                            {nft.skills.map((skill) => {
                              return (
                                <Skill key={skill.name}>
                                  <SkillContainer>
                                    <SkillImg src={skill.url} />
                                    <SkillArrow src={arrowTop} />
                                  </SkillContainer>
                                </Skill>
                              );
                            })}
                            {/* <Skill>
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
                            </Skill> */}
                          </SkillsContainer>
                        </SkillsWrapper>
                        <InfoWrapper>
                          <Name>{nft.name}</Name>
                          <Role>{nft.role}</Role>
                        </InfoWrapper>
                      </NFTContainer>
                    </SlideItem>
                  </SlideContent>
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
                          <SkillsContainer
                            padding={
                              nft.skills?.length === 2 ? '0 30px' : '0 10px'
                            }
                          >
                            {nft.skills.map((skill) => {
                              return (
                                <Skill key={skill.name}>
                                  <SkillContainer>
                                    <SkillImg src={skill.url} />
                                    <SkillArrow src={arrowTop} />
                                  </SkillContainer>
                                </Skill>
                              );
                            })}
                            {/* <Skill>
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
                            </Skill> */}
                          </SkillsContainer>
                        </SkillsWrapper>
                        <InfoWrapper>
                          <Name>{nft.name}</Name>
                          <Role>{nft.role}</Role>
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
