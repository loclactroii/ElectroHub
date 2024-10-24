import { Title } from "./Title";
import { Arrows } from "./Arrows";
import {
  CameraIcon,
  ComputerIcon,
  GamingIcon,
  HeadphonesIcon,
  PhoneIcon,
  SmartWatchIcon,
} from "./Icons";
import { Hr } from "./Hr";

interface Category {
  icon: JSX.Element;
  name: string;
}

const Categories: Category[] = [
  {
    icon: <PhoneIcon />,
    name: "Phones",
  },
  {
    icon: <ComputerIcon />,
    name: "Computers",
  },
  {
    icon: <SmartWatchIcon />,
    name: "SmartWatch",
  },
  {
    icon: <CameraIcon />,
    name: "Camera",
  },
  {
    icon: <HeadphonesIcon />,
    name: "Headphones",
  },
  {
    icon: <GamingIcon />,
    name: "Gaming",
  },
];

export const Category = () => {
  return (
    <div>
      <div className="flex gap-[5.44rem] relative">
        <Title type="Categories" title="Browse By Category" />
        <Arrows />
      </div>
      {/* Categories  */}
      <div className="mt-[3.75rem] flex justify-between">
        {Categories.map((category: Category, index: number): JSX.Element => {
          return (
            <div
              key={index}
              className="group hover:bg-secondary_2 hover:text-white cursor-pointer w-[170px] h-[146px] inline-flex items-center flex-col gap-4 rounded border-[1px] border-[rgba(0, 0, 0, 0.30)] p-[1.5rem_3.5rem]"
            >
              <div className=" stroke-black group-hover:stroke-white">
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
