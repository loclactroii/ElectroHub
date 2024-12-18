import { Button } from "../components/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { CartItem } from "../components/CartItem";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Cart as CartType } from "../redux/types";

export const Cart = () => {
  const navigate = useNavigate();
  const CartItems = useSelector((state: RootState) => state.cart.cartList);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);

  return (
    <div>
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
        {CartItems.map((item: CartType, index: number): JSX.Element => {
          return <CartItem item={item} key={index} />;
        })}

        {/* Buttons  */}
        <div className="flex justify-between">
          <Button background="white" content="Return To Shop" />
          <Button background="white" content="Update Cart" />
        </div>

        {/* Payment  */}
        <div className="mt-20 flex items-center justify-between max-sm:flex-col">
          <div className="flex gap-4 self-start">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border border-black p-[1rem_6.25rem_1rem_1.5rem]"
            />
            <Button background="red" content="Apply Coupon" />
          </div>
          <div className="flex max-sm:self-start">
            <div className="w-[29.375rem] self-end border-[1.5px] border-black p-[2rem_1.5rem] max-sm:mt-8 sm:ml-8">
              <h3 className="text-xl font-medium">Cart Total</h3>
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
    </div>
  );
};
