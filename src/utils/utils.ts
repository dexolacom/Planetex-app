import { getUserBalance } from './blockchainUtils';

export const stringTrim = (string: string | null | undefined, maxLength: number) => {
  if (!string) return string;
  if (maxLength < 1) return string;
  if (string.length <= maxLength) return string;
  if (maxLength === 1) return string.substring(0, 1) + '...';

  const midpoint = Math.ceil(string.length / 2);
  const toRemove = string.length - maxLength;
  const leftStrip = Math.ceil(toRemove / 2);
  const rightStrip = toRemove - leftStrip;
  return `${string.substring(0, midpoint - leftStrip)}...${string.substring(midpoint + rightStrip)}`;
};

export const getDecimals = (tokenName: string) => {
  const decimals = {
    'BNB': 10 ** 18,
    'BUSD': 10 ** 18,
    'ETH': 10 ** 18,
    'USDT': 10 ** 6
  }

  return decimals[tokenName as keyof typeof decimals] ?? console.error('Token name is undefined')
};

export const getUserBalanceSum = async (account: any) => {
  const busdBalance = await getUserBalance(56, account)
  const usdtBalance = await getUserBalance(1, account)

  function findSum(first: string, second: string) {
    let sum = '';
    let carry = 0;
    const diff = second.length - first.length;
    for (let i = first.length - 1; i >= 0; i--) {
      const temp =
        (Number(first.charAt(i)) % 10) +
        (Number(second.charAt(i + diff)) % 10) +
        carry;
      if (temp >= 10) {
        sum = (temp % 10) + sum;
        carry = Math.floor(temp / 10);
      } else {
        sum = temp + sum;
        carry = 0;
      }
    }
    if (carry) {
      sum = carry + sum;
    }
    return sum;
  }

  return (+findSum(busdBalance, usdtBalance) / 10 ** 18).toFixed()

};