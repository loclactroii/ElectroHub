import { Avatar } from "./Avatar";
import { CartIcon, HeartIcon, SearchIcon } from "./Icons";

export const Navigation = () => {
  const isLogin: boolean = true;
  return (
    <div>
      <nav className=" pl-8 pr-8 justify-between h-[5.88rem] flex max-w-[73.125rem] m-[0_auto] pb-4 items-end">
        {/* Logo  */}
        <a href="/">
          <h1 className="text-2xl font-bold font-inter">ElectroHub</h1>
        </a>
        {/* Navigation  */}
        <div>
          <ul className="flex gap-12 font-poppins">
            <li className="h-6 flex items-center border-b-[1px] border-black">
              <a href="#home">Home</a>
            </li>
            <li className="h-6 flex items-center border-b-[1px] border-transparent">
              <a href="#contact">Contact</a>
            </li>
            <li className="h-6 flex items-center border-b-[1px] border-transparent">
              <a href="#about">About</a>
            </li>
            <li className="h-6 flex items-center border-b-[1px] border-transparent">
              <a href="#sign-up">Sign Up</a>
            </li>
          </ul>
        </div>

        {/* Navigation right  */}
        <div className="flex items-center">
          <div className="flex items-center justify-between p-[0.4375rem_0.75rem_0.4375rem_1.25rem] bg-secondary">
            <input
              type="text"
              name=""
              id=""
              placeholder="What are you looking for?"
              className="text-xs font-poppins h-6 grow bg-transparent outline-none inline-block w-40"
            />
            <SearchIcon />
          </div>
          <div className="ml-6 flex items-center gap-4">
            <HeartIcon />
            <CartIcon />
            {isLogin && <Avatar />}
          </div>
        </div>
      </nav>
      <hr />
    </div>
  );
};
