import { AuthForm } from "../components/AuthForm";

export const Login = () => {
  return (
    <div className="m-[3.75rem_auto_8.75rem_auto] flex max-w-[82rem]">
      <img src="/image_login.png" className="" alt="" />
      <AuthForm isLogin={true} />
    </div>
  );
};
