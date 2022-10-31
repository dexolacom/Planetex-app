/* eslint-disable jsx-quotes */
import { Action, Select } from './styles';
import { TokenNameSelectProps } from '../../../constants/types';

const TokenNameSelect = ({ tokenName, setTokenName }: TokenNameSelectProps) => {
  return (
    <Action>
      <Select
        id="tokenSelect"
        value={tokenName}
        onChange={(e) => setTokenName(e.target.value)}
      >
        <>
          <option value="ETH">ETH</option>
          <option value="USDT">USDT</option>
        </>
      </Select>
    </Action>
  );
};

export default TokenNameSelect;
