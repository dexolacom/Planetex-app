import styled from 'styled-components';
import arrow from '../../../../assets/icons/selector.svg';

export const Wrapper = styled.div<{marginBottom?: string}>`
  display: flex;
  width: 65%;
  flex-direction: column;
  gap: 15px;
  
  margin-bottom: ${({marginBottom}) => marginBottom ?? '30px'};

  @media screen and (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  }

  @media screen and (max-width: 707px) {
    > * {
      &:first-child {
        order: 2
      }
    }
  }
`

export const InputBlock = styled.div<{border?: string, filter?: string}>`
  flex: 2;
  background-color: #06080C;
  border: ${({border}) => border ?? '1px solid #372458'};
  border-radius: 10px;
  outline: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  filter: ${({filter}) => filter};

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus-within {
    border: 1px solid #AF76FD;
  }
  
  @media screen and (max-width: 707px) {
    width: 100%;
  }
`

export const Input = styled.input<{placeholder?: string}>`
  color: #BDCCEA;
  padding: 13px 24px;
  background: transparent;
  outline: none;
  border: none;
  min-width: 0;

  &::placeholder {
    color: #494848;
  }
`

export const InputInfo = styled.span<{color?: string, border?: string}>`
  border-left: ${({border}) => border};
  color: ${({color}) => color};
  padding: 0 15px;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media screen and (max-width: 480px) {
    width: 100%;
    max-width: 110px;
  }
`

export const SelectBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  @media screen and (max-width: 576px) {
    gap: 10px;
  }
`

export const Select = styled.select<{filter?: string}>`
  flex: 0.7;
  border: 1px solid #372458;
  border-radius: 10px;
  padding: 13px 45px 13px 22px;
  color: #762ACE;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  outline: none;
  text-align: center;

  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: url(${arrow});
  background-repeat: no-repeat, repeat;
  background-position: right .7em top 50%, 0 0;
  background-size: 1.1em auto, 100%;
  background-color: #06080C;

  filter: ${({filter}) => filter};

  &:focus {
    border: 1px solid #AF76FD;
  }
`
