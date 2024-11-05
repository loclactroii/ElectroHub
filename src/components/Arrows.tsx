import { LeftIcon, RightIcon } from "./Icons";

export const Arrows = () => {
  return (
    <div className="absolute bottom-0 right-0 flex gap-2 max-sm:hidden">
      <div className="rounded-full bg-secondary p-[0.6875rem]">
        <LeftIcon />
      </div>
      <div className="rounded-full bg-secondary p-[0.6875rem]">
        <RightIcon />
      </div>
    </div>
  );
};
