// @ts-nocheck
/* eslint-disable max-lines-per-function */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import NFT_1 from '../../../assets/NFT_624/1.jpg';
import arrowTop from '../../../assets/icons/arrow-top.svg';
import setSkillImg from './setSkillImage';
import { v4 as uuid } from 'uuid';
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

const NFTCollectionMobile = ({ NFTs }) => {
  return (
    <MobileContent>
      <MobileTitle>My NFT</MobileTitle>
      <Slider {...settings}>
        {NFTs.map((nft) => {
          return (
            <SlideContainer key={uuid()}>
              <SlideContent>
                <SlideItem>
                  <NFTContainer>
                    <Thumb url={`https://ipfs.io/${nft.image}`} />
                    {/* <Thumb url={NFT_1} /> */}
                    <SkillsWrapper>
                      <SkillsContainer
                        padding={
                          nft.skills.split(',').length === 2
                            ? '0 30px'
                            : '0 10px'
                        }
                      >
                        {nft.skills.split(',').map((skill) => {
                          return (
                            <Skill key={`${uuid()}q`}>
                              <SkillContainer>
                                <SkillImg src={setSkillImg(skill.trim())} />
                                <SkillArrow src={arrowTop} />
                              </SkillContainer>
                            </Skill>
                          );
                        })}
                      </SkillsContainer>
                    </SkillsWrapper>
                    <InfoWrapper>
                      <Name>{nft.name}</Name>
                      <Role>{nft.profession}</Role>
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
