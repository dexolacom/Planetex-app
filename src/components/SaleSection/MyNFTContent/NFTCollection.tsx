// @ts-nocheck
/* eslint-disable max-lines-per-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { _NFT } from './_NFT';
import arrowTop from '../../../assets/icons/arrow-top.svg';
import { FullScreenTheme } from '../../../theme';
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

const NFTCollection = () => {
  return (
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
