import { useState } from "react";
import {
  AvatarIcon,
  LogoutIcon,
  MyCancellationsIcon,
  MyOrderIcon,
  MyReviewsIcon,
  UserIcon,
} from "./Icons";

export const Avatar = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <div onClick={() => setShow(!show)}>
        <AvatarIcon />
      </div>

      {/* Drop down user  */}
      <div
        style={{ backdropFilter: "blur(75px)", background: "rgba(0,0,0,0.04)" }}
        className={`absolute right-0 top-[2.5rem] z-10 box-content flex w-[14rem] select-none flex-col gap-[0.8125rem] rounded p-5 text-white duration-300 ${show ? "opacity-100" : "opacity-0"}`}
      >
        <div className="flex cursor-pointer items-center gap-4 duration-300 hover:translate-y-[-0.25rem]">
          <UserIcon />
          <p className="font-poppins text-sm">Manage My Account</p>
        </div>
        <div className="flex cursor-pointer items-center gap-4 duration-300 hover:translate-y-[-0.25rem]">
          <MyOrderIcon />
          <p className="font-poppins text-sm">My Order</p>
        </div>
        <div className="flex cursor-pointer items-center gap-4 duration-300 hover:translate-y-[-0.25rem]">
          <MyCancellationsIcon />
          <p className="font-poppins text-sm">My Cancellations</p>
        </div>
        <div className="flex cursor-pointer items-center gap-4 duration-300 hover:translate-y-[-0.25rem]">
          <MyReviewsIcon />
          <p className="font-poppins text-sm">My Reviews</p>
        </div>
        <div className="flex cursor-pointer items-center gap-4 duration-300 hover:translate-y-[-0.25rem]">
          <LogoutIcon />
          <p className="font-poppins text-sm">Logout</p>
        </div>
      </div>
    </div>
  );
};
