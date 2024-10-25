import { Products } from "../components/Products";
import { Title } from "../components/Title";

export const Wishlist = () => {
  return (
    <div className="m-[5rem_auto] max-w-[73.125rem] pl-8 pr-8">
      {/* Head  */}
      <div className="flex justify-between">
        <span className="text-xl">Wishlist(4)</span>
        <button className="cursor-pointer rounded border border-[rgba(0,0,0,0.4)] p-[1rem_3rem] font-medium">
          Move All To Bag
        </button>
      </div>
      <div className="flex flex-col gap-40">
        <Products />
        <div>
          <div className="relative flex gap-[5.44rem]">
            <Title type="Just For You" title="" />
            <div className="absolute bottom-0 right-0">
              <button className="cursor-pointer rounded border border-[rgba(0,0,0,0.4)] p-[1rem_3rem] font-medium">
                See All
              </button>
            </div>
          </div>
          <Products />
        </div>
      </div>
    </div>
  );
};
