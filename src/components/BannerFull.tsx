import { Button } from "./PrimaryButton";

export const BannerFull = () => {
  return (
    <div className="relative mb-20 mt-[8.75rem] flex h-[31.25rem] w-full justify-between gap-20 rounded-2xl bg-black">
      <div className="absolute z-30 max-w-[33rem] pb-16 pl-24 pt-16 max-lg:max-w-[28rem] max-lg:pl-16">
        <h3 className="inline-block font-poppins font-semibold text-button_1">
          Categories
        </h3>
        <h2 className="mb-8 mt-8 w-full font-inter text-5xl font-semibold text-text max-lg:text-3xl">
          Enhance Your Music Experience
        </h2>
        <div className="flex gap-6">
          <div className="flex h-[3.875rem] w-[3.875rem] flex-col items-center justify-center rounded-full bg-white font-poppins">
            <span className="font-semibold leading-4">23</span>
            <span className="text-[0.6875rem] leading-3">Hours</span>
          </div>
          <div className="flex h-[3.875rem] w-[3.875rem] flex-col items-center justify-center rounded-full bg-white font-poppins">
            <span className="font-semibold leading-4">5</span>
            <span className="text-[0.6875rem] leading-3">Days</span>
          </div>
          <div className="flex h-[3.875rem] w-[3.875rem] flex-col items-center justify-center rounded-full bg-white font-poppins">
            <span className="font-semibold leading-4">59</span>
            <span className="text-[0.6875rem] leading-3">Minutes</span>
          </div>
          <div className="flex h-[3.875rem] w-[3.875rem] flex-col items-center justify-center rounded-full bg-white font-poppins">
            <span className="font-semibold leading-4">35</span>
            <span className="text-[0.6875rem] leading-3">Seconds</span>
          </div>
        </div>
        <div className="mt-10">
          <Button content="Buy Now!" background={"green"} />
        </div>
      </div>
      <div className="absolute right-0 z-20 grow pr-[3.75rem]">
        <div className="bottom-0 z-10 h-[30rem] w-[30rem] bg-[#D9D9D9] opacity-30 blur-[100px]"></div>
        <img
          src="/bannerfull.png"
          className="absolute bottom-0 right-4 z-20 h-full scale-150 animate-wiggle object-contain lg:right-[10%]"
        />
      </div>
    </div>
  );
};
