// @ts-nocheck
/* eslint-disable max-len */
import styled from 'styled-components';
import { MyNFTProps } from '../../../constants/types';
// import NFT_1 from '../../../assets/NFT_624/1.jpg';

export const Wrapper = styled.div`
  position: relative;
  padding: 60px 0 0 0;
  width: 100%;
  // height: 500px;
  background-color: pink;

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

export const Content = styled.div`
  background-color: skyblue;
`;

export const Title = styled.h2`
  padding-left: 30px;
  margin-bottom: 60px;
  font-size: 36px;
  line-height: 44px;
  font-weight: 700;
  color: #d4e5ff;
  background-color: yellow;

  @media screen and (max-width: 880px) {
    padding-left: 0;
    margin-bottom: 50px;
    text-align: center;
  }

  @media screen and (max-width: 576px) {
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: green;

  @media screen and (max-width: 576px) {
    display: block;
  }
`;

export const Item = styled.li`
  clip-path: polygon(20% 0, 100% 0, 100% 100%, 0 100%, 0 16%);
  border: 1px solid #d0a5d7;
  width: 281px;
  height: 361px;
  background-color: blue;

  @media screen and (max-width: 576px) {
    display: block;
    margin: 0 auto;
  }
`;

export const NFTContainer = styled.div`
  position: relative;
  background-color: yellow;
`;

export const Thumb = styled.div<MyNFTProps>`
  height: 311px;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: black;
`;

export const SkillsWrapper = styled.div`
  display: flex;
  // justify-content: center;
  justify-content: space-between;
  align-items: center;
  padding: 0 45px;
  height: 50px;
  background-color: #1d1429;
  border: 1px solid #fbe4ff;
  border-radius: 4px;
`;

export const Skill = styled.div`
  display: flex;
  align-items: center;
  width: 80px;
  height: 34px;
  border-radius: 21px;
  border: 2px solid #d0a5d7;
  background-color: red;
`;

export const SkillContainer = styled.div`
  display: flex;
  justify-content: space-between;
  // align-items: center;
  padding: 0 10px;
  width: 100%;
  background-color: green;
`;

export const SkillImg = styled.img`
  width: 24px;
  height: 24px;
`;

export const SkillArrow = styled.img`
  width: 24px;
  height: 24px;
`;

export const InfoWrapper = styled.div`
  position: absolute;
  bottom: 50px;
  padding: 5px 10px 0;
  width: 100%;
  height: 60px;
  color: #ffffff;
  font-weight: 500;
  border: 1px solid #fbe4ff;
  border-radius: 4px;
  background: rgba(106, 100, 143, 0.41);
`;

export const Name = styled.span`
  display: inline-block;
  padding: 0 13px;
  margin-bottom: 2px;
  height: 28px;
  border: 1px solid #ffffff;
  border-radius: 23.9167px;
`;
export const Role = styled.span`
  display: block;
  padding: 0 13px;
  font-size: 16px;
  line-height: 20px;
`;

// export const Wrapper = styled.div`
//   width: 500px;
//   height: 500px;
//   clip-path: polygon(8% 0, 100% 0, 100% 100%, 0 100%, 0 12%);
//   border: 1px solid #372458;

//   @media screen and (max-width: 880px) {
//     margin: 0 auto;
//     max-width: 640px;
//   }

//   @media screen and (max-width: 576px) {
//     margin: 0 auto;
//     max-width: 350px;
//   }
// `;
