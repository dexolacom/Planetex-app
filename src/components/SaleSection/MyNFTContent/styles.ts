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
  // background-color: pink;
`;

export const SlideContent = styled.div`
  display: flex;
  justify-content: center;
`;

export const SlideItem = styled.li`
  clip-path: polygon(20% 0, 100% 0, 100% 100%, 0 100%, 0 17.5%);
  display: block;
  padding: 1px 0 0 1px;
  width: 274px;
  height: 362px;
  background: linear-gradient(180deg, #fbe4ff 40%, #811fff 60%);
  border-radius: 0 0 4px 4px;
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
  position: relative;
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
  clip-path: polygon(20% 0, 100% 0, 100% 100%, 0 100%, 0 17.5%);
  margin: 0 15px 44px;
  padding: 1px 0 0 1px;
  width: 282px;
  height: 362px;
  background: linear-gradient(180deg, #fbe4ff 40%, #811fff 60%);
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
  width: 280px;

  @media screen and (max-width: 576px) {
    width: 272px;
  }
`;

export const Thumb = styled.div<MyNFTProps>`
  clip-path: polygon(20% 0, 100% 0, 100% 100%, 0 100%, 0 20.3%);
  height: 311px;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const SkillsWrapper = styled.div<MyNFTProps>`
  padding: 0 1px 0 1px;
  margin: 0 -1px;
  height: 50px;
  background: linear-gradient(180deg, #fbe4ff 10%, #811fff 70%);
  border-radius: 0 0 4px 4px;

  @media screen and (max-width: 576px) {
    padding: 0 1px;
  }
`;

export const SkillsContainer = styled.div<MyNFTProps>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: ${(props) => props.padding};
  height: 49px;
  background-color: #1d1429;
  border-radius: 0 0 3px 3px;

  // @media screen and (max-width: 576px) {
  //   padding: 0 13%;
  // }
`;

export const Skill = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 34px;
  background: linear-gradient(150deg, #d0a5d7 40%, #811fff 60%);
  border-radius: 21px;
`;

export const SkillContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  background-color: #1d1429;
  border-radius: 21px;
`;

export const SkillImg = styled.img`
  width: 22px;
  height: 22px;
`;

export const SkillArrow = styled.img`
  width: 20px;
  height: 20px;
`;

export const InfoWrapper = styled.div`
  position: absolute;
  bottom: 49px;
  padding: 5px 10px 0;
  width: 282px;
  margin: 0 -1px;
  height: 60px;
  color: #ffffff;
  background: rgba(106, 100, 143, 0.41);
  border: 1px solid;
  border-image-source: linear-gradient(#fbe4ff, #811fff);
  border-image-slice: 1;

  @media screen and (max-width: 576px) {
    width: 274px;
  }
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
