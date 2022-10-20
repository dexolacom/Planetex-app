// @ts-nocheck
/* eslint-disable max-len */
import styled from 'styled-components';
import { MyNFTProps } from '../../../constants/types';

export const Wrapper = styled.div`
  position: relative;
  padding: 60px 0 75px 0;
  width: 100%;

  @media screen and (max-width: 880px) {
    padding: 50px 0 0 0;
    margin: 0 auto;
    max-width: 640px;
  }

  @media screen and (max-width: 576px) {
    padding: 45px 0 0 0;
    margin: 0 auto;
    max-width: 350px;
  }
`;

export const MobileContent = styled.div`
  padding: 0 0 35px;
`;

export const MobileTitle = styled.h2`
  padding: 50px 0;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
  color: #d4e5ff;
`;

export const SlideContainer = styled.div`
  clip-path: polygon(24% 0, 100% 0, 100% 100%, 0 100%, 0 22%);
  padding: 0 15px 0 15px;
  width: 281px;
  min-widht: 281px;
  max-widht: 281px;
  height: 361px;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  // background-color: skyblue;
`;

export const Title = styled.h2`
  padding-left: 30px;
  margin-bottom: 60px;
  font-size: 36px;
  line-height: 44px;
  font-weight: 700;
  color: #d4e5ff;

  @media screen and (max-width: 880px) {
    padding-left: 0;
    margin-bottom: 50px;
    text-align: center;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 880px) {
    justify-content: center;
  }

  @media screen and (max-width: 576px) {
    display: block;
  }
`;

export const Item = styled.li`
  clip-path: polygon(20% 0, 100% 0, 100% 100%, 0 100%, 0 16%);
  margin: 0 15.5px 44px;
  width: 281px;
  height: 362px;
  border: 1px solid #d0a5d7;
  border-radius: 0 0 4px 4px;

  @media screen and (max-width: 880px) {
    margin: 0 19px 44px;
  }

  @media screen and (max-width: 576px) {
    display: block;
    margin: 0 auto;
  }
`;

export const NFTContainer = styled.div`
  position: relative;
`;

export const Thumb = styled.div<MyNFTProps>`
  height: 311px;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const SkillsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 45px;
  height: 50px;
  background-color: #1d1429;
  border: 1px solid #811fff;
  border-radius: 0 0 4px 4px;

  @media screen and (max-width: 576px) {
    padding: 0 13%;
  }
`;

export const Skill = styled.div`
  display: flex;
  align-items: center;
  width: 80px;
  height: 34px;
  border-radius: 21px;
  border: 2px solid #d0a5d7;
`;

export const SkillContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  width: 100%;
`;

export const SkillImg = styled.img`
  width: 24px;
  height: 24px;
`;

export const SkillArrow = styled.img`
  width: 20px;
  height: 19px;
`;

export const InfoWrapper = styled.div`
  position: absolute;
  bottom: 50px;
  padding: 5px 10px 0;
  width: 100%;
  height: 60px;
  color: #ffffff;
  border: 1px solid #fbe4ff;
  border-radius: 4px 4px 0 0;
  background: rgba(106, 100, 143, 0.41);
`;

export const Name = styled.span`
  display: inline-block;
  padding: 0 13px;
  margin-bottom: 2px;
  font-weight: 700;
  height: 28px;
  border: 1px solid #ffffff;
  border-radius: 23.9167px;
`;
export const Role = styled.span`
  display: block;
  padding: 0 15px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;
