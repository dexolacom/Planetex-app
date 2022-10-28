// @ts-nocheck
/* eslint-disable indent */
/* eslint-disable jsx-quotes */
/* eslint-disable no-console */
/* eslint-disable max-lines-per-function */
import { useEffect, useState, useContext } from 'react';
import SaleNFTContext from '../SaleNFTContext';
import { FullScreenTheme } from '../../../theme';
import NFTSaleDamage from '../../../assets/icons/NFTSaleDamage.svg';
import NFTSaleSpeed from '../../../assets/icons/NFTSaleSpeed.svg';
import NFTSaleHealth from '../../../assets/icons/NFTSaleHealth.svg';
import NFTSaleArmor from '../../../assets/icons/NFTSaleArmor.svg';
import NFTSaleGroup from '../../../assets/images/NFTSaleGroup.svg';
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
import { getPlanetexTokenContract } from '../../../utils/contracts';
import Loader from '../../Loader/Loader';
import StatusModal from '../../StatusModal/StatusModal';
import ModalBackdrop from '../../ModalBackdrop/ModalBackdrop';
import { checkApproveNft } from '../../../utils/blockchainUtils';
import getTokens from '../MyNFTContent/getTokens';

const NftSaleContent = () => {
  const { chainId, account } = useWeb3React();
  const [tokenName, setTokenName] = useState('');
  const [isTransErrorModal, setIsTransErrorModal] = useState(false);
  const [isTransSuccessModal, setIsTransSuccessModal] = useState(false);
  const [isTransLoading, setIsTransLoading] = useState(false);

  const { collection, setCollection, setTokens } = useContext(SaleNFTContext);

  useEffect(() => {
    if (isTransSuccessModal === true) checkNewNFT();
  }, [isTransSuccessModal]);

  const mint = async () => {
    await checkApproveNft(
      chainId,
      account,
      tokenName,
      setIsTransSuccessModal,
      setIsTransErrorModal,
      setIsTransLoading,
    );

    setIsTransSuccessModal(true);
  };

  const checkNewNFT = async () => {
    const contract = chainId && getPlanetexTokenContract(chainId);

    let count = 0;
    let ids = [];

    const refreshIntervalId = setInterval(async () => {
      ids = await contract.methods.userTokens(account).call();

      if (ids.length > collection.length || count === 10) {
        const _count = 0;
        const _ids = ids.slice(-1);

        getTokens(
          contract,
          chainId,
          account,
          setCollection,
          setTokens,
          _count,
          _ids,
          collection,
        );
        clearInterval(refreshIntervalId);
      }

      count += 1;
    }, 1000);
  };

  return (
    <>
      <FullScreenTheme>
        <Wrapper>
          <Content>
            <HeroGroupImg src={NFTSaleGroup} />
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
                  <>
                    <option value="ETH">ETH</option>
                    <option value="USDT">USDT</option>
                  </>
                </Select>
              </Action>
              <Action>
                <SolidButton disabled={isTransLoading} onClick={() => mint()}>
                  {isTransLoading ? (
                    <>
                      <Loader
                        stroke="#D4E5FF"
                        size="20px"
                        style={{ marginRight: '10px' }}
                      />
                      Pending
                    </>
                  ) : (
                    'Mint'
                  )}
                </SolidButton>
              </Action>
            </ActionContainer>
          </Content>
        </Wrapper>
      </FullScreenTheme>

      {isTransErrorModal && (
        <ModalBackdrop setIsModalOpen={setIsTransErrorModal}>
          <StatusModal setIsModalOpen={setIsTransErrorModal} isError />
        </ModalBackdrop>
      )}

      {isTransSuccessModal && (
        <ModalBackdrop setIsModalOpen={setIsTransSuccessModal}>
          <StatusModal setIsModalOpen={setIsTransSuccessModal} />
        </ModalBackdrop>
      )}
    </>
  );
};

export default NftSaleContent;
