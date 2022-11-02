import styled from 'styled-components';

export const Wrapper = styled.div<{filter?: string, color?: string}>`
  border: 1px solid #372458;
  border-radius: 10px;
  padding: 13px 22px;
  color: ${({color}) => color};
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  background-color: #06080C;
  align-items: center;
  justify-content: center;
  filter: ${({filter}) => filter};
  flex: 1;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
`