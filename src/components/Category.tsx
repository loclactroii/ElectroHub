import { Title } from "./Title";
import { Arrows } from "./Arrows";
import { Hr } from "./Hr";
import { useStore } from "../hooks/useStore";
import { ICategory } from "../interfaces/interfaces";

export const Category = () => {
  const { Categories } = useStore();
  return (
    <div>
      <div className="relative flex gap-[5.44rem]">
        <Title type="Categories" title="Browse By Category" />
        <Arrows />
      </div>
      {/* Categories  */}
      <div className="mt-[3.75rem] flex justify-between">
        {Categories.map((category: ICategory, index: number): JSX.Element => {
          return (
            <div
              key={index}
              className="border-[rgba(0, 0, 0, 0.30)] group inline-flex h-[146px] w-[170px] cursor-pointer flex-col items-center gap-4 rounded border-[1px] p-[1.5rem_3.5rem] hover:bg-secondary_2 hover:text-white"
            >
              <div className="stroke-black group-hover:stroke-white">
                {category.icon}
              </div>
              <span>{category.name}</span>
            </div>
          );
        })}
      </div>
      <Hr />
    </div>
  );
};
