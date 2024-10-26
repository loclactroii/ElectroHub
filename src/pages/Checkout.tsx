import { AddressForm } from "../components/AddressForm";

export const Checkout = () => {
  return (
    <div className="m-[5rem_auto] max-w-[73.125rem] pl-8 pr-8">
      <div className="mb-20 mt-20 flex gap-3">
        <span className="text-sm opacity-50">Account</span>
        <span className="text-sm opacity-50">/</span>
        <span className="text-sm opacity-50">My Account</span>
        <span className="text-sm opacity-50">/</span>
        <span className="text-sm opacity-50">Product</span>
        <span className="text-sm opacity-50">/</span>
        <span className="text-sm opacity-50">View Cart</span>
        <span className="text-sm opacity-50">/</span>
        <span>Cart</span>
      </div>
      <h2 className="font-inter text-4xl font-medium">Billing Details</h2>
      <div className="mt-12">
        {/* Address Inputs  */}
        <AddressForm />
      </div>
    </div>
  );
};
