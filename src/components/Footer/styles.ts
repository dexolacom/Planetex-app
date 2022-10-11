import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 75%;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`

export const ColumnContainer = styled.div`
  display: flex;
  gap: 160px;
`

export const List = styled.ul`
  color: #D4E5FF;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  
  a {
    color: #D4E5FF;
    text-decoration: none;
    margin-bottom: 8px;
  }
  
  span {
    margin-bottom: 23px;
  }
`

export const Title = styled.h4`
  margin-bottom: 18px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #D4E5FF;
`