import React from "react";
import { EditProfileForm } from "../components/EditProfileForm";

export const MyAccount = () => {
  return (
    <div className="m-[5rem_auto] max-w-[73.125rem] pl-8 pr-8">
      <div className="mb-20 mt-20 flex justify-between">
        <div className="flex gap-3">
          <span className="text-sm opacity-50">Home</span>
          <span className="text-sm opacity-50">/</span>
          <span>My Account</span>
        </div>
        <p>
          Welcome! <span className="text-secondary_2">Tan Loc</span>
        </p>
      </div>
      <div className="mt-20 flex">
        {/* Manage my account/order/wishlist */}
        <div className="flex flex-col gap-6 pr-10">
          <div>
            <h3 className="font-medium">Manage My Account</h3>
            <div className="ml-8 mt-4 flex flex-col gap-2">
              <p className="selected cursor-pointer opacity-50">My Profile</p>
              <p className="cursor-pointer opacity-50">Address Block</p>
              <p className="cursor-pointer opacity-50">My Payment Options</p>
            </div>
          </div>
          <div>
            <h3 className="font-medium">My Orders</h3>
            <div className="ml-8 mt-4 flex flex-col gap-2">
              <p className="cursor-pointer opacity-50">My Returns</p>
              <p className="cursor-pointer opacity-50">My Cancellations</p>
            </div>
          </div>
          <div>
            <h3 className="font-medium">My Wishlist</h3>
          </div>
        </div>

        {/* Edit your profile  */}
        <div className="grow">
          <EditProfileForm />
        </div>
      </div>
    </div>
  );
};
