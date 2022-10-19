import React, { useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { InputContainerProps } from '../../../../constants/types';
import { Input, Select, Wrapper } from './styles';
import useDebounce from '../../../../hooks/useDebounce';


const InputContainer = ({
  tokenAmount,
  tokenName,
  isInputAmountError,
  setTokenAmount,
  setTokenName,
  setIsInputAmountError
}:InputContainerProps) => {
  const { chainId } = useWeb3React()
  const debouncedValue = useDebounce<string>(tokenAmount, 500)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value.match(/^[0-9]*[.,]?[0-9]*$/)) {
      if ((+value >= 10 && +value <= 1000) || +value === 0) {
        setIsInputAmountError(false)
        return setTokenAmount(value);
      }
      setIsInputAmountError(true)
      return setTokenAmount(value);
    }
  };

  useEffect(() => {
    // get initial tokenName
    if (chainId === 97 || chainId === 56 ) setTokenName('BNB')
    if (chainId === 5 || chainId === 1) setTokenName('ETH')
  }, [chainId]);

  // Fetch API (optional)
  useEffect(() => {
    // Do fetch here...
    // Triggers when "debouncedValue" changes
  }, [debouncedValue])

  return (
    <Wrapper>
      <Input
        value={tokenAmount}
        onChange={(e) => handleInputChange(e)}
        placeholder={'0.0'}
        inputMode="decimal"
        maxLength={10}
        // @ts-ignore
        border={isInputAmountError ? '1px solid #582424' : '1px solid #372458'}
      />
      {/*@ts-ignore*/}
      {/*<hr width="1" size="30" color={'red'}/>*/}
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