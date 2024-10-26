import { useState } from "react";
import { Button } from "../components/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { useStore } from "../hooks/useStore";
import { ICartItem } from "../interfaces/interfaces";
import { CartItem } from "../components/CartItem";

export const Cart = () => {
  const { CartItems } = useStore();
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="m-[5rem_auto] max-w-[73.125rem] pl-8 pr-8">
      <div className="mb-20 mt-20 flex gap-3">
        <span className="text-sm opacity-50">Home</span>
        <span className="text-sm opacity-50">/</span>
        <span>Cart</span>
      </div>
      <div className="flex flex-col gap-10">
        {/* Table head  */}
        <div className="grid grid-cols-4 items-center p-[1.5rem_2.5rem] shadow-lg">
          <span>Product</span>
          <span className="text-center">Price</span>
          <span className="text-center">Quantity</span>
          <span className="text-right">Subtotal</span>
        </div>

        {/* Table body  */}
        {CartItems.map((item: ICartItem, index: number): JSX.Element => {
          return (
            <div key={index}>
              <CartItem index={index} cardItem={item} setTotal={setTotal} />
            </div>
          );
        })}

        {/* Buttons  */}
        <div className="flex justify-between">
          <Button background="white" content="Return To Shop" />
          <Button background="white" content="Update Cart" />
        </div>

        {/* Payment  */}
        <div className="mt-20 flex items-center justify-between">
          <div className="flex h-auto self-start">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border border-black p-[1rem_6.25rem_1rem_1.5rem]"
            />
            <Button background="red" content="Apply Coupon" />
          </div>
          <div className="w-[29.375rem] border-[1.5px] border-black p-[2rem_1.5rem]">
            <h3 className="text-xl font-medium">Cart Total</h3>
            <div className="mt-6 flex flex-col gap-4">
              <div className="flex justify-between">
                <span className="">Subtotal:</span>
                <span>${total}</span>
              </div>
              <hr />
              <div className="flex justify-between">
                <span className="">Shipping:</span>
                <span>Free</span>
              </div>
              <hr />
              <div className="flex justify-between">
                <span className="">Total:</span>
                <span>${total}</span>
              </div>
              <div className="flex justify-center">
                <Button
                  onClick={() => navigate("/checkout")}
                  background="red"
                  content="Process to checkout"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
