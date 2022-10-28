// @ts-nocheck
import { useState } from 'react';
import SaleNFTContext from '../SaleNFTContext';
import NftSaleContent from './NftSaleContent';
import MyNFTContent from '../MyNFTContent/MyNFTContent';

const SaleNFTSection = () => {
  const [collection, setCollection] = useState([]);
  const [tokens, setTokens] = useState(null);

  return (
    <SaleNFTContext.Provider
      value={{
        collection,
        tokens,
        setCollection,
        setTokens,
      }}
    >
      <NftSaleContent />
      <MyNFTContent />
    </SaleNFTContext.Provider>
  );
};

export default SaleNFTSection;
