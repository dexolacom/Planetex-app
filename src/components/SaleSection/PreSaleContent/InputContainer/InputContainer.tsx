import React, { useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { InputContainerProps } from '../../../../constants/types';
import { Input, Select, Wrapper } from './styles';


const InputContainer = ({tokenAmount, tokenName, setTokenAmount, setTokenName}:InputContainerProps) => {
  const { chainId } = useWeb3React()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    if (input.match(/^[0-9]*[.,]?[0-9]*$/)) {
      return setTokenAmount(input);
    }
  };

  useEffect(() => {
    // get initial tokenName
    if (chainId === 97 || chainId === 56 ) setTokenName('BNB')
    if (chainId === 5 || chainId === 1) setTokenName('ETH')
  }, [chainId]);

  return (
    <Wrapper>
      <Input
        value={tokenAmount}
        onChange={(e) => handleInputChange(e)}
        placeholder={'0.0'}
        inputMode="decimal"
        maxLength={10}
      />
      <Select id='tokenSelect' value={tokenName} onChange={(e) => setTokenName(e.target.value)}>
        {(chainId === 97 || chainId === 56 )
          ? <>
            <option value='BNB'>BNB</option>
            <option value='BUSD'>BUSD</option>
          </>
          : <>
            <option value='ETH'>ETH</option>
            <option value='USDT'>USDT</option>
          </>
        }
      </Select>
    </Wrapper>
  );
};

export default InputContainer;