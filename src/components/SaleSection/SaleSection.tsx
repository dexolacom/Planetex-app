import React from 'react';
import { SaleSectionProps } from '../../constants/types';
import PreSaleContent from './PreSaleContent/PreSaleContent';
import MintNFTSection from './NftSaleContent/MintNFTSection';

const SaleSection = ({ title }: SaleSectionProps) => {
  return (
    <div>
      {title === 'Pre-Sale' && <PreSaleContent />}
      {title === 'NFT-Sale' && <MintNFTSection />}
    </div>
  );
};

export default SaleSection;
