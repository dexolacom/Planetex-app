// @ts-nocheck
/* eslint-disable no-console */
/* eslint-disable max-lines-per-function */
import { FullScreenTheme } from '../../../theme';
import NFT_1 from '../../../assets/NFT_624/1.jpg';
import NFT_2 from '../../../assets/NFT_624/2.jpg';
import NFT_3 from '../../../assets/NFT_624/3.jpg';
import NFT_4 from '../../../assets/NFT_624/4.jpg';
import NFTSaleDamage from '../../../assets/icons/NFTSaleDamage.svg';
import NFTSaleSpeed from '../../../assets/icons/NFTSaleSpeed.svg';
import NFTSaleHealth from '../../../assets/icons/NFTSaleHealth.svg';
import NFTSaleArmor from '../../../assets/icons/NFTSaleArmor.svg';
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
} from './styles';

const _NFT = [
  { id: 1, name: 'Nitrine Spark', role: 'Traveler', url: NFT_1 },
  { id: 2, name: 'Nitrine Spark', role: 'Traveler', url: NFT_2 },
  { id: 3, name: 'Nitrine Spark', role: 'Traveler', url: NFT_3 },
  { id: 4, name: 'Nitrine Spark', role: 'Traveler', url: NFT_4 },
  { id: 5, name: 'Nitrine Spark', role: 'Traveler', url: NFT_1 },
  { id: 6, name: 'Nitrine Spark', role: 'Traveler', url: NFT_2 },
  { id: 7, name: 'Nitrine Spark', role: 'Traveler', url: NFT_3 },
  { id: 8, name: 'Nitrine Spark', role: 'Traveler', url: NFT_4 },
];

const MyNFTContent = () => {
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
                      <Skill>
                        <SkillContainer>
                          <SkillImg src={NFTSaleHealth} />
                          <SkillArrow />
                        </SkillContainer>
                      </Skill>
                      <Skill>
                        <SkillContainer>
                          <SkillImg src={NFTSaleDamage} />
                          <SkillArrow />
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
  );
};

export default MyNFTContent;
