// @ts-nocheck
/* eslint-disable max-lines-per-function */
import NFTImagesBase64 from '../../../assets/NFT_Base64/NFTImagesBase64';
import arrowTop from '../../../assets/icons/arrow-top.svg';
import setSkillImg from './setSkillImage';
import { v4 as uuid } from 'uuid';
import {
  Wrapper,
  Content,
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

const setImg = (uri) => {
  const uri_ = uri.split('/')[1];

  if (Object.keys(NFTImagesBase64).includes(uri_)) {
    return NFTImagesBase64[uri_];
  }
};

const NFTCollection = ({ NFTs }) => {
  return (
    <Wrapper>
      <Content>
        <Title>My NFT</Title>
        <List>
          {NFTs.map((nft) => {
            return (
              <Item key={uuid()}>
                <NFTContainer>
                  <Thumb url={setImg(nft.image)} />
                  <SkillsWrapper>
                    <SkillsContainer
                      padding={
                        nft.skills.split(',').length === 2 ? '0 30px' : '0 10px'
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
              </Item>
            );
          })}
        </List>
      </Content>
    </Wrapper>
  );
};

export default NFTCollection;
