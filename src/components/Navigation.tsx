import { Link, NavLink } from "react-router-dom";
import { Avatar } from "./Avatar";
import { CartIcon, HeartIcon, SearchIcon } from "./Icons";
import { useStore } from "../hooks/useStore";

export const Navigation = () => {
  const { isLogin } = useStore();
  return (
    <div className="sticky left-0 top-0 z-50 w-full bg-white">
      <nav className="m-[0_auto] flex h-[5.88rem] max-w-[73.125rem] items-end justify-between pb-4 pl-8 pr-8">
        {/* Logo  */}
        <a href="/">
          <h1 className="font-inter text-2xl font-bold">ElectroHub</h1>
        </a>
        {/* Navigation  */}
        <div>
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
            <Link to="/cart">
              <CartIcon />
            </Link>
            {isLogin && <Avatar />}
          </div>
        </div>
      </nav>
      <hr />
    </div>
  );
};
