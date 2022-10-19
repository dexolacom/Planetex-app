// @ts-nocheck
/* eslint-disable max-len */
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 60px 0 55px;
  // background-color: pink;

  @media screen and (max-width: 880px) {
  }

  @media screen and (max-width: 576px) {
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  // width: 100%;
  height: 32px;
  // background-color: skyblue;
`;

export const SocialList = styled.ul`
  display: flex;
`;

export const SocialItem = styled.li`
  // display: flex;
  // justify-content: center;
  margin-right: 16px;
  width: 32px;
  height: 32px;
  // background-color: pink;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  &:hover img {
    fill: #af6aff;
  }
`;
