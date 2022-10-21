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

const { log } = console;

const MyNFTContent = () => {
  const [planetexTokenContract, setPlanetexTokenContract] = useState(null);
  const [NFTs, setNFTs] = useState([]);

  const { chainId, account } = useWeb3React();
  const { isMobile } = useCheckIsMobile();

  useEffect(() => {
    // chainId && account && log('--------', chainId, account);
    const contract = chainId && getPlanetexTokenContract(chainId);
    setPlanetexTokenContract(contract);
  }, [chainId, account]);

  const getTokens = async (contract) => {
    const idArray = [];
    const nftInfoArray = [];
    const methods = contract && (await contract.methods);
    const ids = await methods.userTokens(account).call();

    if (!ids) return;

    if (idArray.length === 0) {
      for (let i = 0; i < ids.length; i += 1) {
        const character = await methods.characters(ids[i]).call();
        character && idArray.push(character);
      }
    }

    if (nftInfoArray.length === 0) {
      for (let i = 0; i < idArray.length; i += 1) {
        const response = await getNFTInfo(idArray[i]);
        response && nftInfoArray.push(response.data);
      }
    }

    return nftInfoArray;
  };

  planetexTokenContract &&
    NFTs.length === 0 &&
    getTokens(planetexTokenContract).then((data) => {
      Array.isArray(data) && setNFTs(data);
    });

  return (
    <NFTCollectionWrapper paddingBottom={NFTs.length === 0 && true}>
      {NFTs.length > 0 && (
        <>
          {isMobile ? (
            <NFTCollectionMobile NFTs={NFTs} />
          ) : (
            <NFTCollection NFTs={NFTs} />
          )}
        </>
      )}
    </NFTCollectionWrapper>
  );
};

export default MyNFTContent;
