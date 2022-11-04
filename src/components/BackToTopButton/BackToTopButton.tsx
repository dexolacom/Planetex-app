// @ts-nocheck
import { useState, useEffect } from 'react';
import { BackToTopContainer, BackToTopBtn, BackToTopImg } from './styles';
import ArrowToTop from '../../assets/icons/arrowToTop.svg';

const BackToTopButton = () => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    window.scroll({
      top: position.top,
      left: position.left,
      behavior: 'smooth',
    });
  });

  return (
    <>
      <BackToTopContainer>
        <BackToTopBtn
          onClick={() =>
            setPosition({ ...position, position: { top: 0, left: 0 } })
          }
        >
          <BackToTopImg src={ArrowToTop} alt={'arrow top'} />
        </BackToTopBtn>
      </BackToTopContainer>
    </>
  );
};

export default BackToTopButton;
