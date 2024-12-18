import { AddressForm } from "../components/AddressForm";
import { Button } from "../components/PrimaryButton";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Cart } from "../redux/types";

export const Checkout = () => {
  const CartItems = useSelector((state: RootState) => state.cart.cartList);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);

  return (
    <form>
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
      <div className="mt-12 flex justify-between">
        {/* Address Inputs  */}
        <AddressForm />

        {/* Payment  */}
        <div className="flex w-[32.875rem] flex-col gap-8">
          {CartItems.map((item: Cart, index: number): JSX.Element => {
            return (
              <div
                className="flex max-w-[26.5625rem] items-center justify-between"
                key={index}
              >
                <div className="flex items-center">
                  <img
                    src={item.mainImage}
                    className="h-[3.125rem] w-[3.125rem] object-contain"
                    alt=""
                  />
                  <p className="ml-6">{item.name}</p>
                </div>
                <span className="text-end">${item.total}</span>
              </div>
            );
          })}
          {/* Total  */}
          <div className="max-w-[26.5625rem]">
            <div className="mt-6 flex flex-col gap-4">
              <div className="flex justify-between">
                <span className="">Subtotal:</span>
                <span>${totalAmount}</span>
              </div>
              <hr />
              <div className="flex justify-between">
                <span className="">Shipping:</span>
                <span>Free</span>
              </div>
              <hr />
              <div className="flex justify-between">
                <span className="">Total:</span>
                <span>${totalAmount}</span>
              </div>
            </div>
          </div>

          {/* Payment  */}
          <div className="flex max-w-[26.5625rem] justify-between">
            <div className="flex cursor-pointer gap-4">
              <input
                name="payment"
                id="bank"
                type="radio"
                className="h-6 w-6 cursor-pointer accent-black"
              />
              <label htmlFor="bank">Bank</label>
            </div>
            <div className="flex gap-2">
              <img
                src="/bkash.png"
                className="cursor-pointer object-contain"
                alt=""
              />
              <img
                src="/visa.png"
                className="cursor-pointer object-contain"
                alt=""
              />
              <img
                src="/mastercard.png"
                className="cursor-pointer object-contain"
                alt=""
              />
              <img
                src="/nagad.png"
                className="cursor-pointer object-contain"
                alt=""
              />
            </div>
          </div>
          <div className="flex cursor-pointer gap-4">
            <input
              name="payment"
              id="cash"
              type="radio"
              className="h-6 w-6 cursor-pointer accent-black"
            />
            <label htmlFor="cash">Cash on delivery</label>
          </div>

          {/* Coupon  */}
          <div className="flex gap-4 self-start">
            <input
              type="text"
              placeholder="Coupon Code"
              className="max-w-[17.75rem] border border-black p-[1rem_6.25rem_1rem_1.5rem]"
            />
            <Button background="red" content="Apply Coupon" />
          </div>

          <div className="inline-block">
            <Button type="submit" background="red" content="Place Order" />
          </div>
        </div>
      </div>
    </form>
  );
};
