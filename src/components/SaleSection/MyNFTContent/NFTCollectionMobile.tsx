// @ts-nocheck
/* eslint-disable max-lines-per-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { _NFT } from './_NFT';
import arrowTop from '../../../assets/icons/arrow-top.svg';
import {
  MobileContent,
  MobileTitle,
  SlideContainer,
  SlideContent,
  SlideItem,
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

const settings = {
  dots: false,
  centerMode: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const NFTCollectionMobile = () => {
  return (
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
                        padding={nft.skills?.length === 2 ? '0 30px' : '0 10px'}
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
  );
};

export default NFTCollectionMobile;
