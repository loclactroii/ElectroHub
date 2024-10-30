import { DownArrowIcon } from "./Icons";

export const TopHeader = () => {
  return (
    <header className="flex items-center justify-between bg-black p-[] pb-[0.75rem] pt-[0.75rem]">
      <div></div>
      <p className="font-poppins text-[0.875rem] text-text">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        <a href="/" className="ml-2 font-semibold underline">
          ShopNow
        </a>
      </p>
      <div className="mr-[8.5rem] flex items-center">
        <span className="text-[0.875rem] text-text">English</span>
        <DownArrowIcon />
      </div>
    </header>
  );
};
