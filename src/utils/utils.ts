import { getUserBalance } from './blockchainUtils';

export const stringTrim = (
  string: string | null | undefined,
  maxLength: number,
) => {
  if (!string) return string;
  if (maxLength < 1) return string;
  if (string.length <= maxLength) return string;
  if (maxLength === 1) return string.substring(0, 1) + '...';

  const midpoint = Math.ceil(string.length / 2);
  const toRemove = string.length - maxLength;
  const leftStrip = Math.ceil(toRemove / 2);
  const rightStrip = toRemove - leftStrip;
  return `${string.substring(0, midpoint - leftStrip)}...${string.substring(
    midpoint + rightStrip,
  )}`;
};

export const getDecimals = (tokenName: string) => {
  const decimals = {
    BNB: 10 ** 18,
    BUSD: 10 ** 18,
    ETH: 10 ** 18,
    USDT: 10 ** 6,
  };

  return (
    decimals[tokenName as keyof typeof decimals] ??
    console.error('Token name is undefined')
  );
};

export const getUserBalanceSum = async (
  // chainId: number | undefined,
  account: any,
) => {
  // const busdBalance = await getUserBalance(chainId, account);
  const busdBalance = await getUserBalance(56, account);

  // const usdtBalance = await getUserBalance(chainId, account);
  const usdtBalance = await getUserBalance(1, account);

  return (Number(usdtBalance) + Number(busdBalance)).toString();
  // const sum = (BigInt(usdtBalance) + BigInt(busdBalance)).toString();
  // return (+sum / 10 ** 18).toFixed();
};
