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
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.364 12.95L17.314 8L18.728 9.414L12.364 15.778L6.00003 9.414L7.41403 8L12.364 12.95Z"
            fill="white"
          />
        </svg>
      </div>
    </header>
  );
};
