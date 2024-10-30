import {
  CartActionTypes,
  decreaseItem,
  ICartItem,
  increaseItem,
} from "../redux";
import { RemoveIcon } from "./Icons";
import { useDispatch } from "react-redux";

interface CartItem {
  data: ICartItem;
}

export const CartItem = (item: CartItem) => {
  const dispatch: React.Dispatch<CartActionTypes> = useDispatch();

  const handleChange = (e, id: string) => {
    if (e.target.value > item.data.quantity) {
      dispatch(increaseItem(id));
    } else {
      dispatch(decreaseItem(id));
    }
  };

  return (
    <div className="grid grid-cols-4 items-center p-[1.5rem_2.5rem] shadow-lg">
      <div className="relative flex items-center">
        <img
          src={item.data.image}
          alt=""
          className="h-[3.375rem] w-[3.375rem]"
        />
        {item.data.quantity === 1 && (
          <div className="absolute left-[-8px] top-0 cursor-pointer">
            <RemoveIcon />
          </div>
        )}
        <span className="ml-[1.375rem]">{item.data.name}</span>
      </div>
      <span className="text-center">${item.data.price}</span>
      <div className="text-center">
        {/* Quantity  */}
        <input
          className="border-[rgba(0, 0, 0, 0.40)] h-[2.75rem] w-[4.5rem] border-[1.5px] p-[0.375rem_0.75rem] [&>quantity-up]:hidden"
          type="number"
          value={item.data.quantity}
          name="quantity"
          min={1}
          max={99}
          id="quantity"
          onChange={(e) => handleChange(e, item.data.id)}
        />
      </div>
      {/* Subtotal  */}
      <span className="text-right">${item.data.total}</span>
    </div>
  );
};
