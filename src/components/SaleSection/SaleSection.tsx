import { Suspense, lazy } from 'react';
import { SaleSectionProps } from '../../constants/types';
// import PreSaleContent from './PreSaleContent/PreSaleContent';

const PreSaleContent = lazy(() => import('./PreSaleContent/PreSaleContent'));
const MintNFTSection = lazy(() => import('./MintNFTContent/MintNFTSection'));

const SaleSection = ({ title }: SaleSectionProps) => {
  return (
    <div>
      {title === 'Pre-Sale' && (
        <Suspense>
          <PreSaleContent />
        </Suspense>
      )}
      {title === 'NFT-Sale' && (
        <Suspense>
          <MintNFTSection />
        </Suspense>
      )}
    </div>
  );
};

export default SaleSection;
