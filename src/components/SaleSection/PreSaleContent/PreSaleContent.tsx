import React, { useEffect, useState } from 'react';
import { SolidButton } from '../../../theme';
import {
  Title,
  Wrapper,
  Text,
  Tag,
  TitleContainer,
  InputContainer,
  Input,
  Select,
  Content,
} from './styles';
import { useWeb3React } from '@web3-react/core';
import { checkApprove } from '../../../utils/blockchainUtils';


const PreSaleContent = () => {
  const { chainId, account } = useWeb3React()
  const [tokenAmount, setTokenAmount] = useState('')
  const [tokenName, setTokenName] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value

    if (input.match(/^[0-9]*[.,]?[0-9]*$/)) {
      return setTokenAmount(input)
    }
  };

  useEffect(() => {
    // get initial tokenName
    if (chainId === 97 || chainId === 56 ) setTokenName('BNB')
    if (chainId === 5 || chainId === 1) setTokenName('ETH')
  }, [chainId]);

  return (
    <Wrapper>
      <Content>
        <TitleContainer>
          <Title>Pre-Sale</Title>
          <Tag>Limited purchase restrictions 10-1000$</Tag>
        </TitleContainer>
        <Text>Stake your SEAN up to 35 days to earn extra SEAN.</Text>
        <InputContainer>
          <Input
            value={tokenAmount}
            onChange={(e) => handleInputChange(e)}
            placeholder={'0.0'}
            inputMode="decimal"
            maxLength={10}
          />
          <Select id='tokenSelect' value={tokenName} onChange={(e) => setTokenName(e.target.value)}>
            {(chainId === 97 || chainId === 56 ) &&
              <>
                <option value='BNB'>BNB</option>
                <option value='BUSD'>BUSD</option>
              </>
            }
            {(chainId === 5 || chainId === 1) &&
              <>
                <option value='ETH'>ETH</option>
                <option value='USDT'>USDT</option>
              </>
            }
          </Select>
        </InputContainer>
        <SolidButton disabled={!tokenAmount} onClick={() => checkApprove(chainId, account, tokenAmount, tokenName)}>
          Buy Token
        </SolidButton>
      </Content>
    </Wrapper>
  );
};

export default PreSaleContent;