import React from 'react';
import { SaleSectionProps } from '../../constants/types';
import PreSaleContent from './PreSaleContent/PreSaleContent';
import SaleNFTSection from './NFTSaleContent/SaleNFTSection';

const SaleSection = ({ title }: SaleSectionProps) => {
  return (
    <div>
      {title === 'Pre-Sale' && <PreSaleContent />}
      {title === 'NFT-Sale' && <SaleNFTSection />}
    </div>
  );
};

export default SaleSection;
