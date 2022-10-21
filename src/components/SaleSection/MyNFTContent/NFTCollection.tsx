// @ts-nocheck
/* eslint-disable max-lines-per-function */
// import NFT_1 from '../../../assets/NFT_624/1.jpg';
import { FullScreenTheme } from '../../../theme';
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

const NFTCollection = ({ NFTs }) => {
  console.log('--->', NFTs);

  return (
    <FullScreenTheme>
      <Wrapper>
        <Content>
          <Title>My NFT</Title>
          <List>
            {NFTs.map((nft) => {
              return (
                <Item key={uuid()}>
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
                </Item>
              );
            })}
          </List>
        </Content>
      </Wrapper>
    </FullScreenTheme>
  );
};

export default NFTCollection;
