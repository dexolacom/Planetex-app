// @ts-nocheck
/* eslint-disable no-console */
/* eslint-disable max-lines-per-function */
import { useEffect, useState } from 'react';
import { NFTCollectionWrapper } from './styles';
import useCheckIsMobile from '../../../hooks/useCheckIsMobile';
import NFTCollectionMobile from './NFTCollectionMobile';
import NFTCollection from './NFTCollection';
import { useWeb3React } from '@web3-react/core';
import { getPlanetexTokenContract } from '../../../utils/contracts';
import getNFTInfo from './api';
import { injected } from '../../../constants/connectors';

const MyNFTContent = () => {
  const [planetexTokenContract, setPlanetexTokenContract] = useState(null);
  const [collection, setCollection] = useState([]);
  const [tokens, setTokens] = useState(null);

  const { chainId, account } = useWeb3React();
  const { isMobile } = useCheckIsMobile();

  useEffect(() => {
    setCollection([]);
    const contract = chainId && getPlanetexTokenContract(chainId);
    contract && setPlanetexTokenContract(contract);
  }, [chainId, account, injected]);

  const getTokens = async (contract) => {
    let count = 0;
    const methods = contract.methods;
    const ids = await methods.userTokens(account).call();
    const nftInfoArray = [];

    const getURI = async () => {
      if (!ids[count]) return;
      const tokenURI = await methods.tokenURI(ids[count]).call();
      const response = await getNFTInfo(tokenURI);

      nftInfoArray.push(response.data);

      setCollection(nftInfoArray);
      setTokens(count);

      count += 1;

      if (!ids[count]) return;

      getURI();
    };

    getURI();
  };

  injected &&
    account &&
    chainId &&
    collection?.length === 0 &&
    planetexTokenContract &&
    getTokens(planetexTokenContract);

  return (
    <NFTCollectionWrapper paddingBottom={collection?.length === 0 && true}>
      {collection?.length > 0 && (
        <>
          {isMobile ? (
            <NFTCollectionMobile NFTs={tokens !== null && collection} />
          ) : (
            <NFTCollection NFTs={tokens !== null && collection} />
          )}
        </>
      )}
    </NFTCollectionWrapper>
  );
};

export default MyNFTContent;
