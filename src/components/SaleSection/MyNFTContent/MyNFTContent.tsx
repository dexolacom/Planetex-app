// @ts-nocheck
/* eslint-disable no-console */
/* eslint-disable max-lines-per-function */
import { useEffect, useContext } from 'react';
import { useWeb3React } from '@web3-react/core';
import { injected } from '../../../constants/connectors';
import { getPlanetexTokenContract } from '../../../utils/contracts';
import SaleNFTContext from '../SaleNFTContext';
import { NFTCollectionWrapper } from './styles';
import useCheckIsMobile from '../../../hooks/useCheckIsMobile';
import NFTCollectionMobile from './NFTCollectionMobile';
import NFTCollection from './NFTCollection';
import getTokens from './getTokens';
import vars from './vars';

const MyNFTContent = () => {
  const { chainId, account } = useWeb3React();
  const { isMobile } = useCheckIsMobile();
  const contract = chainId && getPlanetexTokenContract(chainId);

  const { collection, tokens, setCollection, setTokens } =
    useContext(SaleNFTContext);

  useEffect(() => {
    setCollection([]);
    setTokens(null);
    vars.acc = account;
    vars.net = chainId;
  }, [chainId, account, injected]);

  injected &&
    account &&
    chainId &&
    collection?.length === 0 &&
    contract &&
    getTokens(contract, chainId, account, setCollection, setTokens, 0);

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
