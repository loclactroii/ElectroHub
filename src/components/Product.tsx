import { useDispatch } from "react-redux";
import { IProduct } from "../interfaces/interfaces";
import { SmallHeartIcon, WatchIcon } from "./Icons";
import { addCart, CartActionTypes } from "../redux";

export const Product = ({
  id,
  rate,
  mainImage,
  name = "--- --- --- --- ---",
  price = 0,
  rating = 3,
  reviews = 0,
}: IProduct): JSX.Element => {
  const dispatch: React.Dispatch<CartActionTypes> = useDispatch();
  const addToCart = (
    productId: string,
    price: number,
    name: string,
    image: string,
  ) => {
    dispatch(addCart(productId, price, name, image));
  };

  return (
    <div className="mt-12 max-w-[16.875rem] cursor-pointer" key={id}>
      <div className="group relative flex h-[15.625rem] w-[16.875rem] items-center justify-center overflow-hidden rounded bg-secondary p-3">
        {/* Sale  */}
        <span className="absolute left-3 top-3 rounded bg-secondary_2 p-[0.25rem_0.75rem] font-poppins text-xs text-white">
          -{rate}%
        </span>
        {/* Interact  */}
        <div className="absolute right-3 top-3 flex flex-col gap-2">
          <div className="flex h-[2.125rem] w-[2.125rem] items-center justify-center rounded-full bg-white">
            <SmallHeartIcon />
          </div>
          <div className="flex h-[2.125rem] w-[2.125rem] items-center justify-center rounded-full bg-white">
            <WatchIcon />
          </div>
        </div>
        {/* Product  */}
        <img
          className="max-h-[9.5rem] w-full object-cover"
          src={mainImage}
          alt=""
        />
        {/* Add to card  */}
        <button
          onClick={() => addToCart(id, price, name, mainImage)}
          className="trans absolute bottom-0 h-0 w-full bg-black font-poppins font-medium text-white duration-200 group-hover:h-[2.5625rem]"
        >
          Add To Cart
        </button>
      </div>

      {/* Product info  */}
      <div className="mt-4 inline-block">
        <div className="min-h-12">
          <h2 className="cursor-pointer] font-poppins font-medium">{name}</h2>
        </div>
        <div className="mb-2 mt-2 flex gap-3 font-poppins">
          <h3 className="font-normal text-secondary_2">
            ${rate ? Math.floor((price * (100 - rate)) / 100) : 0}
          </h3>
          <span className="line-through opacity-50">${price}</span>
        </div>
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((num: number, index: number): JSX.Element => {
            return (
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                xmlns="http://www.w3.org/2000/svg"
                key={index}
              >
                <path
                  opacity={rating >= num ? "1" : "0.25"}
                  d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                  fill={rating >= num ? "#FFAD33" : "black"}
                />
              </svg>
            );
          })}

          {/* <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.99981 1.83329C9.7507 1.83145 9.50619 1.90032 9.29466 2.0319C9.08313 2.16348 8.91327 2.35236 8.80481 2.57662L6.95314 6.32995L2.8098 6.93162C2.56336 6.96713 2.33178 7.07094 2.1413 7.23129C1.95081 7.39163 1.80903 7.60212 1.73202 7.83889C1.655 8.07567 1.64582 8.32929 1.70552 8.57101C1.76522 8.81274 1.89141 9.03292 2.0698 9.20662L5.0698 12.1283L4.36147 16.255C4.31934 16.5001 4.34661 16.7521 4.4402 16.9825C4.53379 17.213 4.68997 17.4126 4.89108 17.559C5.0922 17.7053 5.33024 17.7925 5.5783 17.8106C5.82635 17.8287 6.07454 17.7771 6.29481 17.6616L9.99981 15.7133V1.83329Z"
              fill="#FFAD33"
            />
            <path
              opacity="0.25"
              d="M10 1.83595C10.2492 1.83404 10.5001 2.00001 10.5001 2.00001C10.5001 2.00001 11.0866 2.20807 11.1951 2.44195L13.0468 6.35634L17.1902 6.98383C17.4366 7.02086 17.6682 7.12912 17.8587 7.29635C18.0492 7.46358 18.191 7.68309 18.268 7.93003C18.345 8.17697 18.3542 8.44147 18.2945 8.69357C18.2348 8.94567 18.1086 9.1753 17.9302 9.35645L14.9301 12.4035L15.6385 16.7072C15.6806 16.9629 15.6533 17.2257 15.5598 17.466C15.4662 17.7064 15.31 17.9146 15.1089 18.0672C14.9077 18.2198 14.6697 18.3107 14.4216 18.3296C14.1736 18.3486 13.9254 18.2947 13.7051 18.1743L10 16.1423V1.83595Z"
              fill="black"
            />
          </svg> */}

          <span className="mb-[-2px] font-poppins text-sm font-medium opacity-50">
            ({reviews})
          </span>
        </div>
      </div>
    </div>
  );
};
