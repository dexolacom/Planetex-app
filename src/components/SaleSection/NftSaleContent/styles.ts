/* eslint-disable max-len */
import styled from 'styled-components';
import arrow from '../../../assets/icons/selector.svg';

export const Wrapper = styled.div`
  clip-path: polygon(8% 0, 100% 0, 100% 100%, 0 100%, 0 12%);
  border: 1px solid #372458;
`;

export const Content = styled.div`
  padding: 75px 120px 80px 120px;
  background: linear-gradient(
    98.66deg,
    rgba(31, 53, 255, 0.29) 2.6%,
    rgba(31, 53, 255, 0) 26.21%,
    rgba(31, 53, 255, 0.0116456) 73.39%,
    rgba(31, 53, 255, 0.24) 100%
  );
  backdrop-filter: blur(3.5px);

  @media screen and (max-width: 880px) {
    padding: 45px 45px 55px 95px;
  }

  @media screen and (max-width: 768px) {
    padding: 45px 55px;
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 576px) {
    padding: 23px 40px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 90px;
  margin-bottom: 35px;

  @media screen and (max-width: 880px) {
    gap: 70px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 48px;
  line-height: 59px;
  color: #d4e5ff;

  @media screen and (max-width: 1100px) {
    font-size: 35px;
    line-height: 35px;
  }

  @media screen and (max-width: 992px) {
    font-size: 30px;
  }
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #bdccea;
  margin-bottom: 50px;

  @media screen and (max-width: 880px) {
    font-size: 16px;
    line-height: 20px;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

// export const Select = styled.select`
//   border: 1px solid #372458;
//   border-radius: 10px;
//   padding: 13px 45px 13px 22px;
//   color: #762ACE;
//   font-weight: 600;
//   font-size: 20px;
//   line-height: 24px;
//   outline: none;

//   -moz-appearance: none;
//   -webkit-appearance: none;
//   appearance: none;
//   background: url(${arrow});
//   background-repeat: no-repeat, repeat;
//   background-position: right .7em top 50%, 0 0;
//   background-size: 1.1em auto, 100%;
//   background-color: #06080C;

//   &:focus {
//     border: 1px solid #AF76FD;
//   }
// `
