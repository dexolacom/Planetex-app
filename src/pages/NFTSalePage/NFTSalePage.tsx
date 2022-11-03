import { heroInfo } from '../../constants/constants';
import HeroSection from '../../components/HeroSection/HeroSection';
import SaleSection from '../../components/SaleSection/SaleSection';

const NFTSalePage = () => {
  const { nftSale } = heroInfo;

  return (
    <>
      <HeroSection
        title={nftSale?.title}
        text={nftSale?.text}
        img={nftSale?.img}
      />
      <SaleSection title={nftSale?.title} />
    </>
  );
};

export default NFTSalePage;
