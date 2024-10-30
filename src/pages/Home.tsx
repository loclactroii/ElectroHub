import { BannerFull } from "../components/BannerFull";
import { BestSelling } from "../components/BestSelling";
import { Category } from "../components/Category";
import { Featured } from "../components/Featured";
import { FlashSales } from "../components/FlashSales";
import { HeroSection } from "../components/HeroSection";
import { OurProducts } from "../components/OurProducts";

export const Home = () => {
  return (
    <div>
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
