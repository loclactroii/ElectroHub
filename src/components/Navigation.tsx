import { Link, NavLink } from "react-router-dom";
import { Avatar } from "./Avatar";
import { CartIcon, HeartIcon, SearchIcon } from "./Icons";
import { useStore } from "../hooks/useStore";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const Navigation = () => {
  const { isLogin } = useStore();
  const CartItems = useSelector((state: RootState) => state.cart.cartList);
  return (
    <div className="sticky left-0 top-0 z-50 w-full bg-white">
      <nav className="m-[0_auto] flex h-[5.88rem] max-w-[73.125rem] items-end justify-between pb-4 pl-8 pr-8">
        {/* Logo  */}
        <Link to="/">
          <h1 className="font-inter text-2xl font-bold">ElectroHub</h1>
        </Link>
        {/* Navigation  */}
        <div className="visible max-[900px]:hidden">
          <ul className="flex gap-12 font-poppins">
            <NavLink
              to="/"
              className="flex h-6 items-center border-b-[1px] border-transparent"
            >
              Home
            </NavLink>
            <NavLink
              to="/contact"
              className="flex h-6 items-center border-b-[1px] border-transparent"
            >
              Contact
            </NavLink>
            <NavLink
              to="/about"
              className="flex h-6 items-center border-b-[1px] border-transparent"
            >
              About
            </NavLink>
            <NavLink
              to="/register"
              className="flex h-6 items-center border-b-[1px] border-transparent"
            >
              Sign up
            </NavLink>
          </ul>
        </div>

        {/* Navigation right  */}
        <div className="flex items-center">
          <div className="flex items-center justify-between bg-secondary p-[0.4375rem_0.75rem_0.4375rem_1.25rem]">
            <input
              type="text"
              name=""
              id=""
              placeholder="What are you looking for?"
              className="inline-block h-6 w-40 grow bg-transparent font-poppins text-xs outline-none"
            />
            <SearchIcon />
          </div>
          <div className="ml-6 flex items-center gap-4">
            <Link to="/wishlist">
              <HeartIcon />
            </Link>
            <Link to="/cart" className="relative">
              <CartIcon />
              {CartItems.length > 0 && (
                <div className="absolute right-[-3px] top-[-2px] z-50 flex h-4 w-4 items-center justify-center rounded-full bg-[red]">
                  <span className="text-[11px] text-text">
                    {CartItems.length}
                  </span>
                </div>
              )}
            </Link>
            {isLogin && <Avatar />}
          </div>
        </div>
      </nav>
      <hr />
    </div>
  );
};
