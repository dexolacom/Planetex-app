// @ts-nocheck
/* eslint-disable max-lines-per-function */
import { injected } from '../../../constants/connectors';
import vars from './vars';
import getNFTInfo from './api';

const getTokens = async (
  contract,
  chainId,
  account,
  setCollection,
  setTokens,
  _count = 0,
  _ids,
  _nftInfoArray = [],
) => {
  let count = _count;
  const ids = _ids || (await contract.methods.userTokens(account).call());
  const nftInfoArray = _nftInfoArray;

  const getURI = async () => {
    if (!ids[count]) return;
    const tokenURI = await contract.methods.tokenURI(ids[count]).call();
    const response = await getNFTInfo(tokenURI);

    nftInfoArray.unshift(response.data);

    if (
      injected._eventsCount === 0 ||
      vars.acc !== account ||
      vars.net !== chainId
    ) {
      setCollection([]);
      setTokens(null);
      return;
    }

    setCollection(nftInfoArray);
    setTokens(nftInfoArray.length);

    count += 1;

    if (!ids[count]) return;

    getURI();
  };

  getURI();
};

export default getTokens;
