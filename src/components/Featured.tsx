import { Title } from "./Title";

export const Featured = () => {
  return (
    <div>
      {/* Head  */}
      <div className="relative flex gap-[5.44rem]">
        <Title type="Featured" title="New Arrival" />
      </div>

      {/* Content  */}
      <div className="mt-[3.75rem] flex min-h-[37.5rem] justify-between gap-[1.875rem] max-[900px]:flex-col">
        {/* Left  */}
        <div className="group relative flex basis-full items-center justify-center rounded bg-black">
          <div className="absolute bottom-8 left-[1.81rem] flex flex-col gap-4 text-text duration-200 group-hover:opacity-5">
            <h2 className="font-inter text-2xl font-semibold">PlayStation 5</h2>
            <p className="font-poppins text-sm">
              Black and White version of the PS5 coming out on sale.
            </p>
            <a
              href="/"
              className="cursor-pointer font-poppins font-medium underline"
            >
              Shop Now
            </a>
          </div>
          <img
            src="/playstation2.png"
            className="cursor-pointer duration-200 group-hover:scale-[1.42]"
            alt=""
          />
        </div>
        {/* Right  */}
        <div className="flex basis-full flex-col justify-between gap-8">
          {/* Right Top  */}
          <div className="group relative flex basis-full cursor-pointer items-center overflow-hidden rounded bg-[#0D0D0D] pl-6">
            <div className="absolute bottom-6 left-6 z-10 flex flex-col gap-4 text-text duration-300 group-hover:opacity-0">
              <h2 className="font-inter text-2xl font-semibold">
                Women's Collections
              </h2>
              <p className="font-poppins text-sm">
                Featured woman collections <br /> that give you another vibe.
              </p>
              <a
                href="/"
                className="cursor-pointer font-poppins font-medium underline"
              >
                Shop Now
              </a>
            </div>
            <img
              src="/woman.png"
              className="bottom-0 right-0 h-full min-[900px]:absolute"
              alt=""
            />
          </div>
          {/* Right Bottom  */}
          <div className="flex basis-full gap-8">
            <div className="group relative flex basis-full cursor-pointer items-center justify-center rounded bg-[#0D0D0D]">
              <div className="absolute bottom-8 left-[1.81rem] flex flex-col gap-2 text-text duration-300 group-hover:opacity-0">
                <h2 className="font-inter text-2xl font-semibold">Speakers</h2>
                <p className="font-.poppins text-sm">
                  Amazon wireless speakers
                </p>
                <a
                  href="/"
                  className="cursor-pointer font-poppins font-medium underline"
                >
                  Shop Now
                </a>
              </div>
              <img
                src="/speaker.png"
                className="duration-200 group-hover:scale-125"
                alt=""
              />
            </div>
            <div className="group relative flex grow basis-full items-center justify-center rounded bg-[#0D0D0D]">
              <div className="absolute bottom-8 left-[1.81rem] flex cursor-pointer flex-col gap-2 text-text duration-300 group-hover:opacity-0">
                <h2 className="font-inter text-2xl font-semibold">Perfume</h2>
                <p className="font-.poppins text-sm">GUCCI INTENSE OUD EDP</p>
                <a
                  href="/"
                  className="cursor-pointer font-poppins font-medium underline"
                >
                  Shop Now
                </a>
              </div>
              <img
                src="/perfume.png"
                className="h-1/2 duration-300 group-hover:scale-[1.25]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
