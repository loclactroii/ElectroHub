import { useNavigate } from "react-router-dom";
import { Avatar } from "./Avatar";
import { CartIcon, HeartIcon, SearchIcon } from "./Icons";
import { useStore } from "../hooks/useStore";

export const Navigation = () => {
  const { isLogin } = useStore();
  const navigate = useNavigate();
  return (
    <div>
      <nav className="m-[0_auto] flex h-[5.88rem] max-w-[73.125rem] items-end justify-between pb-4 pl-8 pr-8">
        {/* Logo  */}
        <a href="/">
          <h1 className="font-inter text-2xl font-bold">ElectroHub</h1>
        </a>
        {/* Navigation  */}
        <div>
          <ul className="flex gap-12 font-poppins">
            <li className="flex h-6 items-center border-b-[1px] border-black">
              <a href="#home">Home</a>
            </li>
            <li className="flex h-6 items-center border-b-[1px] border-transparent">
              <a href="#contact">Contact</a>
            </li>
            <li className="flex h-6 items-center border-b-[1px] border-transparent">
              <a onClick={() => navigate("/about")} href="">
                About
              </a>
            </li>
            <li className="flex h-6 items-center border-b-[1px] border-transparent">
              <a href="#sign-up">Sign Up</a>
            </li>
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
            <div onClick={() => navigate("/wishlist")}>
              <HeartIcon />
            </div>
            <div onClick={() => navigate("/cart")}>
              <CartIcon />
            </div>
            {isLogin && <Avatar />}
          </div>
        </div>
      </nav>
      <hr />
    </div>
  );
};
