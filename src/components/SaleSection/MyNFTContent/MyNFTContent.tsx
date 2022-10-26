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
// import { _NFT } from './_NFT';

// const { log } = console;

const MyNFTContent = () => {
  const [planetexTokenContract, setPlanetexTokenContract] = useState(null);
  const [NFTs, setNFTs] = useState([]);
  const [step, setStep] = useState(null);

  const { chainId, account } = useWeb3React();
  const { isMobile } = useCheckIsMobile();

  useEffect(() => {
    setNFTs([]);
    const contract = chainId && getPlanetexTokenContract(chainId);
    contract && setPlanetexTokenContract(contract);
  }, [chainId, account, injected]);

  console.log('=======================================');

  // let count = 0;
  // const nftInfoArray = [];
  // let ids = null;
  // const ids = [91, 12, 23, 34, 45, 56, 67, 88];

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

      setNFTs(nftInfoArray);
      setStep(count);

      count += 1;

      if (!ids[count]) return;

      getURI();
    };

    getURI();
  };

  injected &&
    account &&
    chainId &&
    NFTs?.length === 0 &&
    planetexTokenContract &&
    getTokens(planetexTokenContract);

  return (
    <NFTCollectionWrapper paddingBottom={NFTs?.length === 0 && true}>
      {NFTs?.length > 0 && (
        <>
          {isMobile ? (
            <NFTCollectionMobile NFTs={step !== null && NFTs} />
          ) : (
            <NFTCollection NFTs={step !== null && NFTs} />
          )}
        </>
      )}
    </NFTCollectionWrapper>
  );
};

export default MyNFTContent;
