import { Banner } from "./Banner";
import { RightArrowIcon } from "./Icons";

export const HeroSection = () => {
  return (
    <div className="flex" id="home">
      {/* Left content  */}
      <div className="pt-10 border-r-[1px] min-w-[13.56rem]">
        <ul className="flex flex-col gap-4 font-poppins text-black mr-4 cursor-pointer">
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
      <div className="mt-10 ml-10 grow relative bg-black">
        <Banner />
        <div className="flex items-center gap-3 absolute left-2/4 translate-x-[-50%] bottom-[0.69rem]">
          <div className=" cursor-pointer w-3 h-3 rounded-full opacity-50 bg-white"></div>
          <div className="cursor-pointer w-3 h-3 rounded-full opacity-50 bg-white"></div>
          <div className="cursor-pointer lg:banner-active w-3 h-3 rounded-full opacity-50 bg-white"></div>
          <div className=" cursor-pointer w-3 h-3 rounded-full opacity-50 bg-white"></div>
          <div className=" cursor-pointer w-3 h-3 rounded-full opacity-50 bg-white"></div>
        </div>
      </div>
    </div>
  );
};
