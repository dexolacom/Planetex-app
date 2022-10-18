import styled from 'styled-components';
import arrow from '../../../../assets/icons/selector.svg';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 576px) {
    flex-direction: column;
    gap: 12px;
    margin-bottom: 36px;
    align-items: flex-end;
    

    > * {
      &:first-child {
        order: 2
      }
    }
  }
`

export const Input = styled.input<{border?: string}>`
  background-color: #06080C;
  border: ${({border}) => border ?? '1px solid #372458'};  
  border-radius: 10px;
  color: #BDCCEA;
  padding: 13px 24px;
  outline: none;
  flex: 0.7;

  &:focus {
    border: 1px solid #AF76FD;
  }
  
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`

export const Select = styled.select`
  border: 1px solid #372458;
  border-radius: 10px;
  padding: 13px 45px 13px 22px;
  color: #762ACE;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  outline: none;

  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: url(${arrow});
  background-repeat: no-repeat, repeat;
  background-position: right .7em top 50%, 0 0;
  background-size: 1.1em auto, 100%;
  background-color: #06080C;

  &:focus {
    border: 1px solid #AF76FD;
  }
`