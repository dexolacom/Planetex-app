import React, { useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { InputContainerProps } from '../../../../constants/types';
import { Input, InputBlock, InputInfo, Select, Wrapper } from './styles';

const InputContainer = ({
  tokenAmount,
  tokenName,
  convertedToUSDAmount,
  isInputAmountError,
  setTokenAmount,
  setTokenName,
  setIsInputAmountError
}:InputContainerProps) => {

  const { account, chainId } = useWeb3React()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = (e.target.value).replace(/^0\d{1}$/, '');

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

  return (
    <Wrapper marginBottom={(isInputAmountError || !account) ? '5px' : '30px'}>
      {/*@ts-ignore*/}
      <InputBlock border={isInputAmountError ? '1px solid #582424' : '1px solid #372458'} filter={!account && 'grayscale(1)'}>
        <Input
          disabled={!account}
          type='number'
          value={tokenAmount}
          onChange={(e) => handleInputChange(e)}
          placeholder={'0.0'}
          inputMode="decimal"
          maxLength={10}
        />
        <InputInfo>{convertedToUSDAmount || '0.00'} $</InputInfo>
      </InputBlock>
      {/*@ts-ignore*/}
      <Select disabled={!account} filter={!account && 'grayscale(1)'} id='tokenSelect' value={tokenName} onChange={(e) => setTokenName(e.target.value)}>
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