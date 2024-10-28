import { RemoveIcon } from "./Icons";
import { useStore } from "../hooks/useStore";
import { ICardItemChild, ICartItem } from "../interfaces/interfaces";
import { useEffect, useState } from "react";

export const CartItem = ({ setTotal, id, index }: ICardItemChild) => {
  const { CartItems, totalPrice, data, setData } = useStore();
  const [dat, setDat] = useState<ICartItem>(CartItems[index]);
  // const [data, setData] = useState(cardItem);
  // console.log(data === CartItems[index]);

  // const totalPrice = () => {
  //   let total = 0;
  //   CartItems.map((item) => {
  //     total = total + item.price * item.quantity;
  //   });
  //   setTotal(total);
  // };

  // useEffect(() => {
  //   totalPrice();
  // }, []);

  console.log("render");

  const handleChange = (e) => {
    const newData = data;
    newData.map((item: ICartItem) => {
      if (item.id === id) {
        newData[index] = { ...newData[index], quantity: e.target.value };
      }
      setData(newData);
      console.log(newData);

      setDat(newData[index]);
    });

    totalPrice();
  };

  useEffect(() => {
    console.log("render");
  }, [data]);

  return (
    <div className="grid grid-cols-4 items-center p-[1.5rem_2.5rem] shadow-lg">
      <div className="relative flex items-center">
        <img src={dat.image} alt="" className="h-[3.375rem] w-[3.375rem]" />
        {dat.quantity === 1 && (
          <div className="absolute left-[-8px] top-0 cursor-pointer">
            <RemoveIcon />
          </div>
        )}
        <span className="ml-[1.375rem]">{dat.name}</span>
      </div>
      <span className="text-center">${dat.price}</span>
      <div className="text-center">
        {/* Quantity  */}
        <input
          className="border-[rgba(0, 0, 0, 0.40)] h-[2.75rem] w-[4.5rem] border-[1.5px] p-[0.375rem_0.75rem] [&>quantity-up]:hidden"
          type="number"
          value={dat.quantity}
          name="quantity"
          min={1}
          max={99}
          id="quantity"
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
      {/* Subtotal  */}
      <span className="text-right">${dat.price * dat.quantity}</span>
    </div>
  );
};
