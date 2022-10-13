import styled from 'styled-components';

export const FlexRow = styled.div<{justify?: string, align?: string, gap?: string, margin?: string}>`
  display: flex;
  //justify-content: ${({justify}) => justify ?? 'center'};
  align-items: ${({align}) => align ?? 'center'};
  gap: ${({gap}) => gap ?? 'auto'};
  margin: ${({margin}) => margin ?? '0'};
`

export const SolidButton = styled.button<{padding?: string}>`
  padding: 18px 50px;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #D4E5FF;
  background-color: #933DF6;
  border-radius: 60px;
  cursor: pointer;
  outline: none;
  border: none;
`


export const OutlineButton = styled.button<{padding?: string}>`
  padding: 15px 45px;
  border: 2px solid #9E40B5;
  border-radius: 45px;
  color: #9E40B5;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  background-color: transparent;
  cursor: pointer;
  
  &:hover {
    background-color: #9E40B5;
    color: #D4E5FF;
    border: 2px solid transparent;
  }

  @media screen and (max-width: 880px) {
    font-size: 16px;
    padding: 12px 23px;
  }
  
  @media screen and (max-width: 576px) {
    font-size: 12px;
    padding: 5px 12px;
  }
`

export const Line = styled.div`
  background-color: #423B49;
  height: 1px;
  margin-left: 45px;
  width: calc(100% - 90px);
  margin-bottom: 65px;
`

export const Content = styled.div`
  max-width: 970px;
  margin: 70px 45px 170px 190px;

  @media screen and (max-width: 1200px) {
    margin: 70px 45px 170px 100px
  }

  @media screen and (max-width: 880px) {
    margin: 70px 40px;
  }

  @media screen and (max-width: 576px) {
    margin: 40px 20px;
  }
`