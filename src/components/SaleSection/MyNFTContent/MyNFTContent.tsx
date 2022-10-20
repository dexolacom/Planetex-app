// @ts-nocheck
/* eslint-disable no-console */
/* eslint-disable max-lines-per-function */
import useCheckIsMobile from '../../../hooks/useCheckIsMobile';
import NFTCollectionMobile from './NFTCollectionMobile';
import NFTCollection from './NFTCollection';

const MyNFTContent = () => {
  const { isMobile } = useCheckIsMobile();

  return <>{isMobile ? <NFTCollectionMobile /> : <NFTCollection />}</>;
};

export default MyNFTContent;
