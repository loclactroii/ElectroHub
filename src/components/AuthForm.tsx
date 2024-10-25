import { GoogleSignUpIcon } from "./Icons";
import { Button } from "./PrimaryButton";

interface Account {
  isLogin: boolean;
}

export const AuthForm = ({ isLogin }: Account): JSX.Element => {
  return (
    <form className="min-w-[23.1875rem] box-content flex flex-col justify-center ml-auto pr-8 pl-8">
      <h1 className="font-inter text-4xl font-medium">
        {!isLogin ? "Create and account" : "Log in to Exclusive"}
      </h1>
      <p className="font-poppins mt-6">Enter your details below</p>
      {/* Inputs  */}
      <div className="flex flex-col gap-6 mt-12 font-poppins [&>input]:outline-none [&>input]:border-b-[1px] [&>input]:border-[rgba(0,0,0,0.3)]">
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
      <button className="border-[1px] border-[rgba(0,0,0.0.5)] rounded pt-4 pb-4 gap-4 mt-4 flex items-center justify-center">
        <GoogleSignUpIcon />
        <span>{!isLogin ? "Sign up with Google" : "Log in with Google"}</span>
      </button>
      <div className="mt-8 flex justify-center gap-4">
        <p>{!isLogin ? "Already have account?" : "You want to login"}</p>
        <div className="border-b-[1px] border-[rgba(0,0,0,0.3)]">
          <a
            className="font-poppins cursor-pointer"
            href={!isLogin ? "/login" : "/register"}
          >
            {!isLogin ? "Login" : "Register"}
          </a>
        </div>
      </div>
    </form>
  );
};
