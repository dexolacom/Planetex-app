/* eslint-disable no-console */
/* eslint-disable max-lines-per-function */
import {
  Wrapper,
  Content,
  Title,
  List,
  Item,
  NFTContainer,
  Thumb,
  Img,
  SkillsWrapper,
  Skill,
  SkillContainer,
  SkillImg,
  SkillArrow,
  InfoWrapper,
  Name,
  Role,
} from './styles';
// import { useWeb3React } from '@web3-react/core';

const MyNFTContent = () => {
  return (
    <Wrapper>
      <Content>
        <Title>My NFT</Title>
        <List>
          <Item>
            <NFTContainer>
              <Thumb>
                <Img />
              </Thumb>
              <SkillsWrapper>
                <Skill>
                  <SkillContainer>
                    <SkillImg />
                    <SkillArrow />
                  </SkillContainer>
                </Skill>
                <Skill>
                  <SkillContainer>
                    <SkillImg />
                    <SkillArrow />
                  </SkillContainer>
                </Skill>
              </SkillsWrapper>
              <InfoWrapper>
                <Name></Name>
                <Role></Role>
              </InfoWrapper>
            </NFTContainer>
          </Item>
        </List>
      </Content>
    </Wrapper>
  );
};

export default MyNFTContent;
