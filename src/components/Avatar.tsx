import { useState } from "react";
import {
  AvatarIcon,
  LogoutIcon,
  MyCancellationsIcon,
  MyOrderIcon,
  MyReviewsIcon,
  UserIcon,
} from "./Icons";
import { Link } from "react-router-dom";

export const Avatar = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <div onClick={() => setShow(!show)}>
        <AvatarIcon />
      </div>

      {/* Drop down user  */}
      <div
        className={`absolute right-0 top-[2.5rem] z-10 box-content flex w-[14rem] select-none flex-col gap-[0.8125rem] rounded bg-black p-5 text-white duration-300 ${show ? "visible opacity-100" : "hidden opacity-0"}`}
      >
        <Link
          to="/myaccount"
          className="flex cursor-pointer items-center gap-4 duration-300 hover:translate-y-[-0.25rem]"
        >
          <UserIcon />
          <p className="font-poppins text-sm">Manage My Account</p>
        </Link>
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
