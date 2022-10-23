/* eslint-disable jsx-quotes */
/* eslint-disable no-console */
/* eslint-disable max-lines-per-function */
import { useState } from 'react';
import { FullScreenTheme } from '../../../theme';
import NFTSaleDamage from '../../../assets/icons/NFTSaleDamage.svg';
import NFTSaleSpeed from '../../../assets/icons/NFTSaleSpeed.svg';
import NFTSaleHealth from '../../../assets/icons/NFTSaleHealth.svg';
import NFTSaleArmor from '../../../assets/icons/NFTSaleArmor.svg';
import NFTSaleHeroGroup from '../../../assets/images/NFTSaleHeroGroup.svg';
import {
  Wrapper,
  Content,
  HeroGroupImg,
  PriceContainer,
  PriceText,
  MainContentWrap,
  Title,
  Text,
  SkillTitle,
  TextContainer,
  SkillsContainer,
  Skills,
  Skill,
  SkillContent,
  SkillImg,
  SkillText,
  ActionContainer,
  Action,
  Select,
} from './styles';
import { SolidButton } from '../../../theme';
import { useWeb3React } from '@web3-react/core';

const NftSaleContent = () => {
  const { chainId } = useWeb3React();
  const [tokenName, setTokenName] = useState('');

  return (
    <FullScreenTheme>
      <Wrapper>
        <Content>
          <HeroGroupImg src={NFTSaleHeroGroup} />
          <PriceContainer>
            <PriceText>49$</PriceText>
          </PriceContainer>
          <MainContentWrap>
            <TextContainer>
              <Title>NFT-Sale</Title>
              <Text>
                Stake your SEAN up to 35 days to earn extra SEAN.ur SEAN up to
                35 days to earn extra SEays to earn extra SEto earn extra
                SEAN.ur SEAN up to 35 days extra SEAN.ur SEAN up to 35 days to
                earn extra SEays to earn extra SEto earn extra SEAN.ur SEA
              </Text>
            </TextContainer>
            <SkillsContainer>
              <SkillTitle>Сharacter skills</SkillTitle>
              <Skills>
                <Skill>
                  <SkillContent>
                    <SkillImg src={NFTSaleDamage} />
                    <SkillText>Damage</SkillText>
                  </SkillContent>
                </Skill>
                <Skill>
                  <SkillContent>
                    <SkillImg src={NFTSaleSpeed} />
                    <SkillText>Speed</SkillText>
                  </SkillContent>
                </Skill>
                <Skill>
                  <SkillContent>
                    <SkillImg src={NFTSaleHealth} />
                    <SkillText>Health</SkillText>
                  </SkillContent>
                </Skill>
                <Skill>
                  <SkillContent>
                    <SkillImg src={NFTSaleArmor} />
                    <SkillText>Armor</SkillText>
                  </SkillContent>
                </Skill>
              </Skills>
            </SkillsContainer>
          </MainContentWrap>
          <ActionContainer>
            <Action>
              <Select
                id="tokenSelect"
                value={tokenName}
                onChange={(e) => setTokenName(e.target.value)}
              >
                {chainId === 97 || chainId === 56 ? (
                  <>
                    <option value="BNB">BNB</option>
                    <option value="BUSD">BUSD</option>
                  </>
                ) : (
                  <>
                    <option value="ETH">ETH</option>
                    <option value="USDT">USDT</option>
                  </>
                )}
              </Select>
            </Action>
            <Action>
              <SolidButton onClick={() => console.log('=> Mint')}>
                Mint
              </SolidButton>
            </Action>
          </ActionContainer>
        </Content>
      </Wrapper>
    </FullScreenTheme>
  );
};

export default NftSaleContent;
