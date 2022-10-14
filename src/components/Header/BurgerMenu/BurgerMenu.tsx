import React from 'react';
import { Wrapper, Links, RouterLink } from './styles';


const BurgerMenu = () => {
  return (
    <Wrapper>
      <Links>
        <RouterLink to='/presale'>Pre-Sale</RouterLink>
        <a href='#'>NFT Sale</a>
        <a href='#'>Main Sale</a>
        <a href='#'>Private Sale</a>
      </Links>
    </Wrapper>
  );
};

export default BurgerMenu;