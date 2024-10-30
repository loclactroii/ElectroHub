import { Link } from "react-router-dom";
import { IAccount } from "../interfaces/interfaces";
import { GoogleSignUpIcon } from "./Icons";
import { Button } from "./PrimaryButton";

export const AuthForm = ({ isLogin }: IAccount): JSX.Element => {
  return (
    <form className="ml-auto box-content flex min-w-[23.1875rem] flex-col justify-center pl-8 pr-8">
      <h1 className="font-inter text-4xl font-medium">
        {!isLogin ? "Create and account" : "Log in to Exclusive"}
      </h1>
      <p className="mt-6 font-poppins">Enter your details below</p>
      {/* Inputs  */}
      <div className="mt-12 flex flex-col gap-6 font-poppins [&>input]:border-b-[1px] [&>input]:border-[rgba(0,0,0,0.3)] [&>input]:outline-none">
        {!isLogin && <input type="text" placeholder="Name" />}
        <input type="text" placeholder="Email or Phone Number" />
        <input type="text" placeholder="Password" />
      </div>

      <div className="mt-10 w-full [&>button]:w-full">
        <Button
          background="red"
          content={!isLogin ? `Create Account` : "Log in"}
        />
      </div>
      <button className="mt-4 flex items-center justify-center gap-4 rounded border-[1px] border-[rgba(0,0,0.0.5)] pb-4 pt-4">
        <GoogleSignUpIcon />
        <span>{!isLogin ? "Sign up with Google" : "Log in with Google"}</span>
      </button>
      <div className="mt-8 flex justify-center gap-4">
        <p>{!isLogin ? "Already have account?" : "You want to login"}</p>
        <div className="border-b-[1px] border-[rgba(0,0,0,0.3)]">
          <Link
            className="cursor-pointer select-none font-poppins"
            to={!isLogin ? "/login" : "/register"}
          >
            {!isLogin ? "Login" : "Register"}
          </Link>
        </div>
      </div>
    </form>
  );
};
