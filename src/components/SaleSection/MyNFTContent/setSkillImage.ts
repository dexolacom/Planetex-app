import NFTSaleDamage from '../../../assets/icons/NFTSaleDamage.svg';
import NFTSaleSpeed from '../../../assets/icons/NFTSaleSpeed.svg';
import NFTSaleHealth from '../../../assets/icons/NFTSaleHealth.svg';
import NFTSaleArmor from '../../../assets/icons/NFTSaleArmor.svg';

const setSkillImg = (skill: string) => {
  let _img = null;

  if (skill === 'Damage') _img = NFTSaleDamage;
  if (skill === 'Speed') _img = NFTSaleSpeed;
  if (skill === 'Health') _img = NFTSaleHealth;
  if (skill === 'Armor') _img = NFTSaleArmor;

  return _img;
};

export default setSkillImg;
