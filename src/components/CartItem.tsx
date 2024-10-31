import { decreaseItem, increaseItem, removeItem } from "../redux/cart.reducer";
import { Cart } from "../redux/types";
import { RemoveIcon } from "./Icons";
import { useDispatch } from "react-redux";

interface CartItem {
  item: Cart;
}

export const CartItem = ({ item }: CartItem) => {
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    if (parseInt(e.target.value) > item.quantity) {
      dispatch(increaseItem({ id }));
    } else {
      dispatch(decreaseItem({ id }));
    }
  };

  return (
    <div className="grid grid-cols-4 items-center p-[1.5rem_2.5rem] shadow-lg">
      <div className="relative flex items-center">
        <img
          src={item.mainImage}
          alt=""
          className="h-[3.375rem] w-[3.375rem] object-contain"
        />
        {item.quantity === 1 && (
          <div
            className="absolute left-[-8px] top-0 cursor-pointer"
            onClick={() => dispatch(removeItem({ id: item.id }))}
          >
            <RemoveIcon />
          </div>
        )}
        <span className="ml-[1.375rem]">{item.name}</span>
      </div>
      <span className="text-center">${item.price}</span>
      <div className="text-center">
        {/* Quantity  */}
        <input
          className="border-[rgba(0, 0, 0, 0.40)] h-[2.75rem] w-[4.5rem] border-[1.5px] p-[0.375rem_0.75rem] [&>quantity-up]:hidden"
          type="number"
          value={item.quantity}
          name="quantity"
          min={1}
          max={99}
          id="quantity"
          onChange={(e) => handleChange(e, item.id)}
        />
      </div>
      {/* Subtotal  */}
      <span className="text-right">${item.total}</span>
    </div>
  );
};
