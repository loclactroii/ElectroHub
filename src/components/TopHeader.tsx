import { DownArrowIcon } from "./Icons";

export const TopHeader = () => {
  return (
    <header className="pt-[0.75rem] pb-[0.75rem] p-[] bg-black flex items-center justify-between">
      <div></div>
      <p className="text-text text-[0.875rem] font-poppins">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        <a href="/" className="ml-2 underline font-semibold">
          ShopNow
        </a>
      </p>
      <div className="flex items-center mr-[8.5rem]">
        <span className="text-text text-[0.875rem]">English</span>
        <DownArrowIcon />
      </div>
    </header>
  );
};
