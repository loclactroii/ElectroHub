import { Button } from "./PrimaryButton";

export const BannerFull = () => {
  return (
    <div className="flex gap-20 justify-between rounded-2xl w-full h-[31.25rem]  bg-black mt-[8.75rem] mb-20">
      <div className="pt-16 pb-16 pl-24 max-w-[33rem]">
        <h3 className=" font-poppins inline-block font-semibold text-button_1">
          Categories
        </h3>
        <h2 className="w-full mt-8 mb-8 font-inter text-5xl font-semibold text-text">
          Enhance Your Music Experience
        </h2>
        <div className=" gap-6 flex">
          <div className="bg-white rounded-full font-poppins flex-col flex items-center justify-center w-[3.875rem] h-[3.875rem]">
            <span className="leading-4 font-semibold">23</span>
            <span className="leading-3 text-[0.6875rem]">Hours</span>
          </div>
          <div className="bg-white rounded-full font-poppins flex-col flex items-center justify-center w-[3.875rem] h-[3.875rem]">
            <span className="leading-4 font-semibold">5</span>
            <span className="leading-3 text-[0.6875rem]">Days</span>
          </div>
          <div className="bg-white rounded-full font-poppins flex-col flex items-center justify-center w-[3.875rem] h-[3.875rem]">
            <span className="leading-4 font-semibold">59</span>
            <span className="leading-3 text-[0.6875rem]">Minutes</span>
          </div>
          <div className="bg-white rounded-full font-poppins flex-col flex items-center justify-center w-[3.875rem] h-[3.875rem]">
            <span className="leading-4 font-semibold">35</span>
            <span className="leading-3 text-[0.6875rem]">Seconds</span>
          </div>
        </div>
        <div className="mt-10">
          <Button content="Buy Now!" background={"green"} />
        </div>
      </div>
      <div className="grow relative pr-[3.75rem]">
        <div className="w-[30rem] h-[30rem] absolute bg-[#D9D9D9] blur-[100px] opacity-30 z-10 right-[50%] translate-x-[30%] bottom-0"></div>
        <img
          src="/bannerfull.png"
          className="animate-wiggle pb-14 pt-14 h-full object-contain absolute right-4  lg:right-[10%] bottom-0 z-20"
        />
      </div>
    </div>
  );
};
