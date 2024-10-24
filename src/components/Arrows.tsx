import { LeftIcon, RightIcon } from "./Icons";

export const Arrows = () => {
  return (
    <div className="absolute bottom-0 right-0 flex gap-2">
      <div className="p-[0.6875rem] bg-secondary rounded-full">
        <LeftIcon />
      </div>
      <div className="p-[0.6875rem] bg-secondary rounded-full">
        <RightIcon />
      </div>
    </div>
  );
};
