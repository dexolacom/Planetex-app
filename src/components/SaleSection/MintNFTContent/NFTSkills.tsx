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
            <SkillImg src={NFTSaleDamage} alt="Damage skill" />
            <SkillText>Damage</SkillText>
          </SkillContent>
        </Skill>
        <Skill>
          <SkillContent>
            <SkillImg src={NFTSaleSpeed} alt="Speed skill" />
            <SkillText>Speed</SkillText>
          </SkillContent>
        </Skill>
        <Skill>
          <SkillContent>
            <SkillImg src={NFTSaleHealth} alt="Health skill" />
            <SkillText>Health</SkillText>
          </SkillContent>
        </Skill>
        <Skill>
          <SkillContent>
            <SkillImg src={NFTSaleArmor} alt="Armor skill" />
            <SkillText>Armor</SkillText>
          </SkillContent>
        </Skill>
      </Skills>
    </SkillsContainer>
  );
};

export default NFTSkills;
