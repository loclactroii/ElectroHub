import { AuthForm } from "../components/AuthForm";

export const Register = () => {
  return (
    <div className="max-w-[82rem] m-[3.75rem_auto_8.75rem_auto] flex ">
      <img src="/image_login.png" className="" alt="" />
      <AuthForm isLogin={false} />
    </div>
  );
};
