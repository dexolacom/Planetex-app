// @ts-nocheck
/* eslint-disable max-len */
import styled from 'styled-components';
import arrow from '../../../assets/icons/selector.svg';
import NFTSaleBg from '../../../assets/images/NFTSaleBg.jpg';
import { NFTSaleProps } from '../../../constants/types';

const setSkillImgSize = (props) => {
  let _height = '30px';

  if (Object.keys(props).indexOf('height') !== -1) {
    const img_ = props.src?.split('/')[3].split('.')[0].slice(7);
    _height =
      img_ === 'Health'
        ? `${Number(props.height.slice(0, 2)) * 1.5}px`
        : `${Number(props.height.slice(0, 2)) * 1.7}px`;
  }

  return _height;
};

export const Wrapper = styled.div`
  clip-path: polygon(8% 0, 100% 0, 100% 100%, 0 100%, 0 12%);
  border: 1px solid #372458;
  width: 100%;
  max-width: 970px;

  @media screen and (max-width: 880px) {
    margin: 0 auto;
    max-width: 640px;
  }

  @media screen and (max-width: 576px) {
    clip-path: polygon(23% 0, 100% 0, 100% 100%, 0 100%, 0 14%);
    margin: 0 auto;
    max-width: 350px;
  }
`;

export const Content = styled.div`
  position: relative;
  padding: 50px 70px 60px 80px;
  background-image: url(${NFTSaleBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 880px) {
    padding: 40px 50px 40px 60px;
  }

  @media screen and (max-width: 576px) {
    padding: 30px 20px 40px;
    text-align: center;
  }
`;

export const HeroGroupImg = styled.img`
  position: absolute;
  width: 170px;
  top: 20px;
  left: 310px;

  @media screen and (max-width: 880px) {
    width: 115px;
    top: 20px;
    left: 195px;
  }

  @media screen and (max-width: 576px) {
    display: none;
  }
`;

export const PriceContainer = styled.div`
  position: absolute;
  width: 78px;
  height: 78px;
  top: 25px;
  right: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #811fff;
  border-radius: 1px;

  @media screen and (max-width: 880px) {
    top: 20px;
    right: 25px;
    width: 59px;
    height: 59px;
    border: 2px solid #811fff;
    border-radius: 1px;
  }

  @media screen and (max-width: 576px) {
    top: 17px;
    right: 15px;
    width: 44px;
    height: 44px;
    border: 1.12821px solid #811fff;
    border-radius: 0.564103px;
  }
`;

export const PriceText = styled.span`
  color: red;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: 0.015em;
  color: #d4e5ff;

  @media screen and (max-width: 880px) {
    font-size: 24px;
    line-height: 29px;
  }

  @media screen and (max-width: 576px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const MainContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  // background-color: yellow;

  @media screen and (max-width: 576px) {
    display: block;
  }
`;

export const TextContainer = styled.div`
  margin-right: 20px;
  width: 100%;
  max-width: 282px;
  // background-color: gray;

  @media screen and (max-width: 880px) {
    margin-right: 10px;
    max-width: 234px;
  }

  @media screen and (max-width: 576px) {
    margin-bottom: 10px;
    max-width: 100%;
  }
`;

export const Title = styled.h1`
  margin-bottom: 25px;
  font-weight: 700;
  font-size: 48px;
  line-height: 59px;
  letter-spacing: 0.015em;
  color: #d4e5ff;

  @media screen and (max-width: 880px) {
    font-size: 28px;
    line-height: 34px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 576px) {
    font-size: 32px;
    line-height: 39px;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0.015em;
  color: #f9f9f9;

  @media screen and (max-width: 880px) {
    font-size: 14px;
    line-height: 17px;
  }

  @media screen and (max-width: 576px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const SkillsContainer = styled.div`
  padding-top: 80px;
  width: 445px;
  // background-color: palevioletred;

  @media screen and (max-width: 880px) {
    padding-top: 40px;
    max-width: 260px;
  }

  @media screen and (max-width: 576px) {
    padding-top: 0;
    margin-bottom: 15px;
    max-width: 100%;
  }
`;

export const SkillTitle = styled.h1`
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: 0.015em;
  color: #d4e5ff;

  @media screen and (max-width: 880px) {
    margin-bottom: 15px;
    font-size: 24px;
    line-height: 29px;
  }

  @media screen and (max-width: 576px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  // background-color: yellowgreen;

  @media screen and (max-width: 576px) {
    justify-content: center;
  }
`;

export const Skill = styled.div`
  display: flex;
  margin-bottom: 13px;
  width: 210px;
  height: 60px;
  font-size: 20px;
  color: #d4e5ff;
  // background: rgba(17, 7, 20, 0.86);
  border: 1px solid #fbe4ff;
  border-radius: 60px;

  &:nth-child(odd) {
    margin-right: 18px;
  }

  @media screen and (max-width: 880px) {
    margin-bottom: 8px;
    width: 122px;
    height: 34px;

    &:nth-child(odd) {
      margin-right: 10px;
    }
  }

  @media screen and (max-width: 576px) {
    margin: 0 6px 10px;
    width: 130px;
    height: 36px;
  }
`;

export const SkillContent = styled.div`
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 20px;
  width: 100%;
  // background-color: teal;

  display: flex;

  @media screen and (max-width: 880px) {
    padding: 0 10px;
  }

  @media screen and (max-width: 576px) {
    padding: 0 15px;
  }
`;

export const SkillImg = styled.img<NFTSaleProps>`
  height: ${(props) => setSkillImgSize(props)};

  @media screen and (max-width: 880px) {
    height: ${(props) => (props.height !== undefined ? props.height : '20px')};
  }
`;

export const SkillText = styled.span`
  ont-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #f9f9f9;

  @media screen and (max-width: 880px) {
    font-size: 12px;
    line-height: 15px;
  }

  @media screen and (max-width: 880px) {
    font-size: 13px;
    line-height: 16px;
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  justify-content: end;
  // background-color: green;

  @media screen and (max-width: 576px) {
    display: block;
  }
`;

export const Action = styled.div`
  display: flex;
  justify-content: end;
  font-size: 20px;
  color: #d4e5ff;
  // background-color: blue;

  > select {
    margin-right: 20px;
  }

  > button {
    width: 217px;
  }

  @media screen and (max-width: 880px) {
    margin-right: 0;

    > select {
      margin-right: 25px;
    }
  }

  @media screen and (max-width: 576px) {
    margin-right: 0;

    > select {
      margin-bottom: 12px;
    }

    > button {
      width: 100%;
    }
  }
`;

export const Select = styled.select`
  border: 1px solid #372458;
  border-radius: 10px;
  padding: 13px 45px 13px 22px;
  color: #762ace;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  outline: none;

  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: url(${arrow});
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 1.1em auto, 100%;
  background-color: #06080c;

  &:focus {
    border: 1px solid #af76fd;
  }
`;
