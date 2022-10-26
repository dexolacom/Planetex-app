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
import { _NFT } from './_NFT';

// const { log } = console;

const MyNFTContent = () => {
  const [planetexTokenContract, setPlanetexTokenContract] = useState(null);
  const [NFTs, setNFTs] = useState([]);

  const { chainId, account } = useWeb3React();
  const { isMobile } = useCheckIsMobile();

  useEffect(() => {
    const initialSettings = () => {
      // setNFTs([]);
      const contract = chainId && getPlanetexTokenContract(chainId);
      contract && setPlanetexTokenContract(contract);
    };
    chainId && account && injected && initialSettings();
  }, [chainId, account, injected]);

  // const methods = contract && (await contract.methods);

  let count = 0;
  const nftInfoArray = [];
  const ids = [91, 12, 23, 34, 45, 56, 67, 88];
  // const ids = await methods.userTokens(account).call();

  const getTokens = async (contract) => {
    if (!ids[count]) return;

    // const tokenURI = await methods.tokenURI(ids[count]).call();
    const tokenURI = `tokenURI${count + 1}`;

    // const response = await getNFTInfo(tokenURI);
    const response = _NFT[count];

    await getNFTInfo(tokenURI);

    // response && nftInfoArray.push(response.data);
    nftInfoArray.push(response);

    if (ids.length >= count) {
      console.log('ids:', ids.length);
      console.log('count:', count);
      console.log('ids[count]', ids[count]);
      console.log('nftInfoArray:', nftInfoArray);
      setNFTs(nftInfoArray);
    }

    count += 1;

    if (!ids[count]) return;

    getTokens();

    // if (!ids) return;

    // if (tokenURIs.length === 0) {
    //   for (let i = 0; i < ids.length; i += 1) {
    //     // const tokenURI = await methods.tokenURI(ids[i]).call();

    //     const tokenURI = `tokenURI${[i]}`;

    //     console.log('1111', tokenURI);

    //     tokenURI && tokenURIs.push(tokenURI);
    //   }
    // }

    // console.log('tokenURIs', tokenURIs);

    // if (nftInfoArray.length === 0) {
    //   for (let i = 0; i < idArray.length; i += 1) {
    //     const response = await getNFTInfo(idArray[i]);
    //     response && nftInfoArray.push(response.data);
    //   }
    // }

    // ===============================

    /*
    const idArray = [];
    const nftInfoArray = [];
    const methods = contract && (await contract.methods);
    const ids = await methods.userTokens(account).call();

    if (!ids) return;

    if (idArray.length === 0) {
      for (let i = 0; i < ids.length; i += 1) {
        const character = await methods.tokenURI(ids[i]).call();
        character && idArray.push(character);
      }
    }

    if (nftInfoArray.length === 0) {
      for (let i = 0; i < idArray.length; i += 1) {
        const response = await getNFTInfo(idArray[i]);
        response && nftInfoArray.push(response.data);
      }
    }
    */

    // return nftInfoArray;
  };

  chainId && account && injected && NFTs.length === 0 && getTokens();

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

/*

  const idArray = [];
  const nftInfoArray = [];
  const methods = contract && (await contract.methods);
  const ids = await methods.userTokens(account).call();

  if (!ids) return;

  if (idArray.length === 0) {
    for (let i = 0; i < ids.length; i += 1) {
      const character = await methods.tokenURI(ids[i]).call();
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

NFTs.length === 0 && getTokens();

console.log('!!! nftInfoArray:', nftInfoArray);

planetexTokenContract &&
  NFTs.length === 0 &&
  getTokens(planetexTokenContract).then((data) => {
    Array.isArray(data) && setNFTs(data);
});

*/
