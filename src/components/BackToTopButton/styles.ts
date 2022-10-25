import styled from 'styled-components';

export const BackToTopContainer = styled.div`
  position: relative;
  background-color: red;
  width: 100%;
  display: none;

  @media screen and (max-width: 880px) {
    display: block;
  }
`;

export const BackToTopBtn = styled.div`
  position: absolute;
  bottom: 126px;
  right: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border: 2.07692px solid #933df6;
  border-radius: 1.03846px;

  @media screen and (max-width: 576px) {
    bottom: 130px;
    right: 25px;
  }
`;

export const BackToTopImg = styled.img`
  width: 52px;
  height: 32px;
`;
