import { useEffect, useState } from "react";
import { RemoveIcon } from "./Icons";
import { useStore } from "../hooks/useStore";
import { ICardItemChild } from "../interfaces/interfaces";

export const CartItem = ({ cardItem, setTotal, index }: ICardItemChild) => {
  const { CartItems } = useStore();
  const [data, setData] = useState(cardItem);

  const totalPrice = () => {
    let total = 0;
    CartItems.map((item) => {
      total = total + item.price * item.quantity;
    });
    setTotal(total);
  };

  useEffect(() => {
    totalPrice();
  }, []);

  return (
    <div className="grid grid-cols-4 items-center p-[1.5rem_2.5rem] shadow-lg">
      <div className="relative flex items-center">
        <img src={data.image} alt="" className="h-[3.375rem] w-[3.375rem]" />
        {data.quantity === 1 && (
          <div className="absolute left-[-8px] top-0 cursor-pointer">
            <RemoveIcon />
          </div>
        )}
        <span className="ml-[1.375rem]">{data.name}</span>
      </div>
      <span className="text-center">${data.price}</span>
      <div className="text-center">
        {/* Quantity  */}
        <input
          className="border-[rgba(0, 0, 0, 0.40)] h-[2.75rem] w-[4.5rem] border-[1.5px] p-[0.375rem_0.75rem] [&>quantity-up]:hidden"
          type="number"
          value={data.quantity}
          name="quantity"
          min={1}
          max={99}
          id="quantity"
          onChange={(e) => {
            setData({ ...data, quantity: parseInt(e.target.value) });
            CartItems[index].quantity = parseInt(e.target.value);
            totalPrice();
          }}
        />
      </div>
      {/* Subtotal  */}
      <span className="text-right">${data.price * data.quantity}</span>
    </div>
  );
};
