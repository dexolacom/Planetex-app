// @ts-nocheck
/* eslint-disable max-len */
import styled from 'styled-components';
import arrow from '../../../assets/icons/selector.svg';
import _NFTSaleBg from '../../../assets/images/_NFTSaleBg.jpg';
import _NFTSaleBgMobile from '../../../assets/images/_NFTSaleBgMobile.jpg';
import { NFTSaleProps } from '../../../constants/types';

export const Wrapper = styled.div`
  clip-path: polygon(9% 0, 100% 0, 100% 100%, 0 100%, 0 15%);
  padding: 1px;
  width: 100%;
  max-width: 970px;
  background: linear-gradient(130deg, #e2b2ff 30%, #3c2188 70%);

  @media screen and (max-width: 880px) {
    clip-path: polygon(7% 0, 100% 0, 100% 100%, 0 100%, 0 14%);
    margin: 0 auto;
  }

  @media screen and (max-width: 576px) {
    clip-path: polygon(23% 0, 100% 0, 100% 100%, 0 100%, 0 13%);
    margin: 0 auto;
  }
`;

export const Content = styled.div<NFTSaleProps>`
  clip-path: polygon(9% 0, 100% 0, 100% 100%, 0 100%, 0 15%);
  position: relative;
  padding: 50px 70px 60px 80px;
  background-image: url(${(props) =>
    props.mobBg ? _NFTSaleBgMobile : _NFTSaleBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 959px) {
    padding: 50px 40px 60px 60px;
  }

  @media screen and (max-width: 880px) {
    clip-path: polygon(7% 0, 100% 0, 100% 100%, 0 100%, 0 14%);
    padding: 40px 50px 40px 60px;
  }

  @media screen and (max-width: 576px) {
    clip-path: polygon(23% 0, 100% 0, 100% 100%, 0 100%, 0 13%);
    padding: 30px 20px 40px;
    text-align: center;
  }
`;

export const HeroGroupImg = styled.img`
  position: absolute;
  top: 5px;
  left: 310px;
  width: 170px;

  @media screen and (max-width: 880px) {
    width: 145px;
    top: -10px;
    left: 193px;
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

  @media screen and (max-width: 576px) {
    display: block;
  }
`;

export const TextContainer = styled.div`
  margin-right: 20px;
  width: 100%;
  max-width: 282px;

  @media screen and (max-width: 880px) {
    margin-right: 20px;
    max-width: 300px;
  }

  @media screen and (max-width: 576px) {
    margin-bottom: 10px;
    max-width: 100%;
  }
`;

export const Title = styled.h1`
  margin-bottom: 25px;
  font-size: 36px;
  line-height: 59px;
  letter-spacing: 0.015em;
  color: #d4e5ff;

  @media screen and (max-width: 880px) {
    font-size: 22px;
    line-height: 34px;
    margin-bottom: 12px;
  }

  @media screen and (max-width: 576px) {
    font-size: 26px;
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
    padding-bottom: 10px;
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

  @media screen and (max-width: 880px) {
    padding-top: 40px;
    padding-bottom: 30px;
    max-width: 320px;
  }

  @media screen and (max-width: 576px) {
    padding-top: 0;
    padding-bottom: 0px;

    width: 100%;
    max-width: 100%;
  }
`;

export const SkillTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 26px;
  line-height: 39px;
  letter-spacing: 0.015em;
  color: #d4e5ff;

  @media screen and (max-width: 880px) {
    margin-bottom: 15px;
    font-size: 18px;
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

  @media screen and (max-width: 576px) {
    justify-content: center;
  }
`;

export const Skill = styled.div`
  display: flex;
  margin-bottom: 13px;
  width: 48.5%;
  height: 60px;
  font-size: 20px;
  color: #d4e5ff;
  border: 1px solid #fbe4ff;
  border-radius: 60px;

  &:nth-child(odd) {
    margin-right: 3%;
  }

  @media screen and (max-width: 880px) {
    width: 48.5%;
    height: 34px;
  }

  @media screen and (max-width: 576px) {
    width: 48.5%;
    height: 36px;
    background: rgba(17, 7, 20, 0.86);
  }
`;

export const SkillContent = styled.div`
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 20px;
  width: 100%;

  display: flex;

  @media screen and (max-width: 880px) {
    padding: 0 10px;
  }

  @media screen and (max-width: 576px) {
    padding: 0 15px;
  }
`;

export const SkillImg = styled.img<NFTSaleProps>`
  width: 38px;
  height: 38px;

  @media screen and (max-width: 880px) {
    width: 22px;
    height: 22px;
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

  @media screen and (max-width: 576px) {
    display: block;
  }
`;

export const Action = styled.div`
  display: flex;
  justify-content: end;
  font-size: 20px;
  color: #d4e5ff;

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
      margin-right: 0;
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

export const ButtonContent = styled.div`
  display: flex;
  align-items: center;
`;
