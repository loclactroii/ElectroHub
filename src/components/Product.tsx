import { SmallHeartIcon, WatchIcon } from "./Icons";

interface Product {
  rate: number;
  image: string;
  title: string;
  price: number;
  rating: number;
  remaining: number;
}

export const Product = ({
  rate,
  image,
  title = "--- --- --- --- ---",
  price = 0,
  rating = 3,
  remaining = 0,
}: Product): JSX.Element => {
  return (
    <div className="cursor-pointer">
      <div className="group overflow-hidden p-3 w-[16.875rem] h-[15.625rem] bg-secondary rounded flex items-center justify-center relative">
        {/* Sale  */}
        <span className="top-3 left-3 p-[0.25rem_0.75rem] text-xs font-poppins bg-secondary_2 rounded text-white absolute">
          -{rate}%
        </span>
        {/* Interact  */}
        <div className="flex flex-col gap-2 absolute right-3 top-3">
          <div className="w-[2.125rem] h-[2.125rem] flex items-center justify-center bg-white rounded-full">
            <SmallHeartIcon />
          </div>
          <div className="w-[2.125rem] h-[2.125rem] flex items-center justify-center bg-white rounded-full">
            <WatchIcon />
          </div>
        </div>
        {/* Product  */}
        <img className="max-w-[10.75rem] max-h-[9.5rem]" src={image} alt="" />
        {/* Add to card  */}
        <button className="duration-200 absolute group-hover:h-[2.5625rem] h-0 trans bottom-0 w-full bg-black font-poppins font-medium text-white">
          Add To Cart
        </button>
      </div>

      {/* Product info  */}
      <div className="mt-4">
        <h2 className="font-poppins font-medium cursor-pointer]">{title}</h2>
        <div className="mt-2 mb-2 flex gap-3 font-poppins">
          <h3 className="text-secondary_2 font-normal">${price}</h3>
          <span className="line-through opacity-50">
            ${rate ? (price * 100) / rate : 0}
          </span>
        </div>
        <div className="flex gap-2 items-center">
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

          <span className="text-sm font-poppins font-medium opacity-50 mb-[-2px]">
            ({remaining})
          </span>
        </div>
      </div>
    </div>
  );
};
