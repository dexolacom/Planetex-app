/* eslint-disable jsx-quotes */
import {
  SkillTitle,
  SkillsContainer,
  Skills,
  Skill,
  SkillContent,
  SkillImg,
  SkillText,
} from './styles';
import NFTSaleDamage from '../../../assets/icons/NFTSaleDamage.svg';
import NFTSaleSpeed from '../../../assets/icons/NFTSaleSpeed.svg';
import NFTSaleHealth from '../../../assets/icons/NFTSaleHealth.svg';
import NFTSaleArmor from '../../../assets/icons/NFTSaleArmor.svg';

const NFTSkills = () => {
  return (
    <SkillsContainer>
      <SkillTitle>Character skills</SkillTitle>
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
  );
};

export default NFTSkills;
