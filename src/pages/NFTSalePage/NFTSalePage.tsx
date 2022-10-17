import HeroSection from '../../components/HeroSection/HeroSection';
import { heroInfo } from '../../constants/constants';
import SaleSection from '../../components/SaleSection/SaleSection';

const PreSalePage = () => {
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

export default PreSalePage;
