import styled from 'styled-components';
import { SolidButton } from '../../../theme';
import arrow from '../../../assets/icons/selector.svg'

export const Wrapper = styled.div`
  padding: 75px 120px 80px 120px;
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 90px;
  margin-bottom: 35px;
`

export const Title = styled.h1`
  font-weight: 700;
  font-size: 48px;
  line-height: 59px;
  color: #D4E5FF;
`

export const Tag = styled.div`
  background: linear-gradient(90deg, #73248F 0%, rgba(22, 153, 201, 0.53) 64.18%, rgba(9, 21, 89, 0.968648) 92.22%, #040643 100%);
  backdrop-filter: blur(3.5px);
  border-radius: 7px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #D4E5FF;
  padding: 10px 27px;
`

export const Text = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #BDCCEA;
  margin-bottom: 50px;
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 30px;
`

export const Input = styled.input`
  background-color: #06080C;
  border: 1px solid #372458;
  border-radius: 66px;
  color: #BDCCEA;
  padding: 13px 24px;
`

export const Select = styled.select`
  background-color: #06080C;
  border: 1px solid #372458;
  border-radius: 66px;
  padding: 13px 45px 13px 22px;
  color: #762ACE;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: url(${arrow});
  background-repeat: no-repeat, repeat;
  background-position: right .7em top 50%, 0 0;
  background-size: 1.1em auto, 100%;
`
export const Button = styled(SolidButton)``
