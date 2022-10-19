import React from 'react';
import { SaleSectionProps } from '../../constants/types';
import PreSaleContent from './PreSaleContent/PreSaleContent';
import NftSaleContent from './NftSaleContent/NftSaleContent';
import MyNFTContent from './MyNFTContent/MyNFTContent';

const SaleSection = ({ title }: SaleSectionProps) => {
  return (
    <div>
      {title === 'Pre-Sale' && <PreSaleContent />}
      {title === 'NFT-Sale' && (
        <>
          <NftSaleContent />
          <MyNFTContent />
        </>
      )}
    </div>
  );
};

export default SaleSection;
