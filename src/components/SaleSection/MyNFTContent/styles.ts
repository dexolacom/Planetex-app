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
  width: 281px;
  height: 361px;
  background-color: blue;

  @media screen and (max-width: 576px) {
    display: block;
    margin: 0 auto;
  }
`;

export const NFTContainer = styled.div`
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

export const SkillsWrapper = styled.div``;
export const Skill = styled.div``;
export const SkillContainer = styled.div``;
export const SkillImg = styled.img``;
export const SkillArrow = styled.img``;
export const InfoWrapper = styled.div``;
export const Name = styled.span``;
export const Role = styled.span``;

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
