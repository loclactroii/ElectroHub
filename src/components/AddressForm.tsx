export const AddressForm = () => {
  return (
    <form className="flex flex-col gap-8">
      <div className="flex max-w-[29.375rem] flex-col gap-2">
        <label htmlFor="first-name" className="opacity-40">
          First Name<span className="text-secondary_2">*</span>
        </label>
        <input
          type="text"
          name="first-name"
          id="first-name"
          required
          className="h-[3.125rem] bg-secondary pl-4"
        />
      </div>
      <div className="flex max-w-[29.375rem] flex-col gap-2">
        <label htmlFor="company-name" className="opacity-40">
          Company Name
        </label>
        <input
          type="text"
          name="company-name"
          id="company-name"
          className="h-[3.125rem] bg-secondary pl-4"
        />
      </div>
      <div className="flex max-w-[29.375rem] flex-col gap-2">
        <label htmlFor="company-name" className="opacity-40">
          Street Address<span className="text-secondary_2">*</span>
        </label>
        <input
          type="text"
          name="street-address"
          id="street-address"
          required
          className="h-[3.125rem] bg-secondary pl-4"
        />
      </div>
      <div className="flex max-w-[29.375rem] flex-col gap-2">
        <label htmlFor="company-name" className="opacity-40">
          Apartment, floor, etc. (optional)
        </label>
        <input
          type="text"
          name="apartment"
          id="apartment"
          className="h-[3.125rem] bg-secondary pl-4"
        />
      </div>
      <div className="flex max-w-[29.375rem] flex-col gap-2">
        <label htmlFor="company-name" className="opacity-40">
          Town/City
          <span className="text-secondary_2">*</span>
        </label>
        <input
          type="text"
          name="town-city"
          id="town-city"
          required
          className="h-[3.125rem] bg-secondary pl-4"
        />
      </div>
      <div className="flex max-w-[29.375rem] flex-col gap-2">
        <label htmlFor="company-name" className="opacity-40">
          Phone Number
          <span className="text-secondary_2">*</span>
        </label>
        <input
          type="text"
          name="phone"
          id="phone"
          required
          className="h-[3.125rem] bg-secondary pl-4"
        />
      </div>
      <div className="flex max-w-[29.375rem] flex-col gap-2">
        <label htmlFor="company-name" className="opacity-40">
          Email Address
          <span className="text-secondary_2">*</span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="h-[3.125rem] bg-secondary pl-4"
        />
      </div>
    </form>
  );
};
