import React from "react";

export const EditProfileForm = () => {
  return (
    <div className="ml-auto max-w-[44.375rem]">
      <h2 className="text-xl text-secondary_2">Edit Your Profile</h2>
      <form action="" className="mt-4 flex flex-col gap-6">
        <div className="flex justify-between gap-[3.125rem]">
          <div className="flex basis-full flex-col gap-2">
            <label htmlFor="firs-name">First Name</label>
            <input
              className="h-[3.125rem] bg-secondary p-[0_1rem]"
              type="text"
              placeholder="Tan"
            />
          </div>
          <div className="flex basis-full flex-col gap-2">
            <label htmlFor="last-name">Last Name</label>
            <input
              className="h-[3.125rem] bg-secondary p-[0_1rem]"
              type="text"
              placeholder="Loc"
            />
          </div>
        </div>
        <div className="flex justify-between gap-[3.125rem]">
          <div className="flex basis-full flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              className="h-[3.125rem] bg-secondary p-[0_1rem]"
              type="email"
              placeholder="tanloc@gmail.com"
            />
          </div>
          <div className="flex basis-full flex-col gap-2">
            <label htmlFor="address">Address</label>
            <input
              className="h-[3.125rem] bg-secondary p-[0_1rem]"
              type="text"
              placeholder="Ho Chi Minh City"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex basis-full flex-col gap-4">
            <label htmlFor="email">Password Changes</label>
            <input
              className="h-[3.125rem] bg-secondary p-[0_1rem]"
              type="text"
              id="cur-password"
              placeholder="Current Password"
            />
            <input
              className="h-[3.125rem] bg-secondary p-[0_1rem]"
              type="text"
              id="new-password"
              placeholder="New Password"
            />
            <input
              className="h-[3.125rem] bg-secondary p-[0_1rem]"
              type="text"
              id="confirm-password"
              placeholder="Confirm New Password"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
