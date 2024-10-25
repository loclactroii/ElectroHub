import { BannerFull } from "../components/BannerFull";
import { BestSelling } from "../components/BestSelling";
import { Category } from "../components/Category";
import { Featured } from "../components/Featured";
import { FlashSales } from "../components/FlashSales";
import { HeroSection } from "../components/HeroSection";
import { OurProducts } from "../components/OurProducts";

export const Home = () => {
  return (
    <div className="m-[0_auto] max-w-[73.125rem] pl-8 pr-8">
      <HeroSection />
      <FlashSales />
      <Category />
      <BestSelling />
      <BannerFull />
      <OurProducts />
      <Featured />
    </div>
  );
};
