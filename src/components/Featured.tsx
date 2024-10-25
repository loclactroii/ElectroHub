import { Title } from "./Title";

export const Featured = () => {
  return (
    <div>
      {/* Head  */}
      <div className="flex gap-[5.44rem] relative">
        <Title type="Featured" title="New Arrival" />
      </div>

      {/* Content  */}
      <div className="flex mt-[3.75rem] min-h-[37.5rem] justify-between gap-[1.875rem]">
        {/* Left  */}
        <div className="group basis-full bg-black rounded relative flex items-center justify-center">
          <div className="duration-200 group-hover:opacity-5 flex gap-4 flex-col absolute left-[1.81rem] bottom-8 text-text">
            <h2 className="text-2xl font-inter font-semibold">PlayStation 5</h2>
            <p className="text-sm font-poppins">
              Black and White version of the PS5 coming out on sale.
            </p>
            <a
              href="/"
              className="font-poppins font-medium underline cursor-pointer"
            >
              Shop Now
            </a>
          </div>
          <img
            src="/playstation2.png"
            className="group-hover:scale-[1.42] duration-200 cursor-pointer"
            alt=""
          />
        </div>
        {/* Right  */}
        <div className="basis-full flex flex-col gap-8 justify-between">
          {/* Right Top  */}
          <div className="cursor-pointer group relative h-[50%] pl-6 rounded bg-[#0D0D0D] flex items-center">
            <div className="group-hover:opacity-0 duration-300 flex gap-4 flex-col text-text absolute bg-[#0D0D0D] z-10 bottom-6 left-6">
              <h2 className="text-2xl font-inter font-semibold">
                Women's Collections
              </h2>
              <p className="text-sm font-poppins">
                Featured woman collections <br /> that give you another vibe.
              </p>
              <a
                href="/"
                className="font-poppins font-medium underline cursor-pointer"
              >
                Shop Now
              </a>
            </div>
            <img
              src="/woman.png"
              className="absolute h-full right-0 bottom-0"
              alt=""
            />
          </div>
          {/* Right Bottom  */}
          <div className="flex gap-8 h-[50%]">
            <div className="cursor-pointer group relative basis-full rounded bg-[#0D0D0D] flex items-center justify-center">
              <div className="group-hover:opacity-0 duration-300 flex gap-2 flex-col text-text left-[1.81rem] bottom-8 absolute">
                <h2 className="text-2xl font-inter font-semibold">Speakers</h2>
                <p className="text-sm font-.poppins">
                  Amazon wireless speakers
                </p>
                <a
                  href="/"
                  className="font-poppins font-medium underline cursor-pointer"
                >
                  Shop Now
                </a>
              </div>
              <img
                src="/speaker.png"
                className="group-hover:scale-125 duration-200"
                alt=""
              />
            </div>
            <div className="group relative basis-full grow rounded bg-[#0D0D0D] flex items-center justify-center">
              <div className="cursor-pointer group-hover:opacity-0 duration-300 flex gap-2 flex-col text-text left-[1.81rem] bottom-8 absolute">
                <h2 className="text-2xl font-inter font-semibold">Perfume</h2>
                <p className="text-sm font-.poppins">GUCCI INTENSE OUD EDP</p>
                <a
                  href="/"
                  className="font-poppins font-medium underline cursor-pointer"
                >
                  Shop Now
                </a>
              </div>
              <img
                src="/perfume.png"
                className="group-hover:scale-[1.25] duration-300"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
