import { Banner } from "./Banner";
import { RightArrowIcon } from "./Icons";

export const HeroSection = () => {
  return (
    <div className="flex max-sm:flex-col" id="home">
      {/* Left content  */}
      <div className="min-w-[13.56rem] border-r-[1px] pt-10">
        <ul className="mr-4 flex cursor-pointer flex-col gap-4 font-poppins text-black">
          <li className="flex items-center justify-between">
            Woman's Fashion <RightArrowIcon />
          </li>
          <li className="flex items-center justify-between">
            Men's Fashion <RightArrowIcon />
          </li>
          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Baby's & Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
      </div>

      {/* Right content  */}
      <div className="relative ml-10 mt-10 grow bg-black max-sm:ml-0">
        <Banner />
        <div className="absolute bottom-[0.69rem] left-2/4 flex translate-x-[-50%] items-center gap-3">
          <div className="h-3 w-3 cursor-pointer rounded-full bg-white opacity-50"></div>
          <div className="h-3 w-3 cursor-pointer rounded-full bg-white opacity-50"></div>
          <div className="lg:banner-active h-3 w-3 cursor-pointer rounded-full bg-white opacity-50"></div>
          <div className="h-3 w-3 cursor-pointer rounded-full bg-white opacity-50"></div>
          <div className="h-3 w-3 cursor-pointer rounded-full bg-white opacity-50"></div>
        </div>
      </div>
    </div>
  );
};
