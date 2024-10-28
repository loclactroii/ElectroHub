import { Link } from "react-router-dom";
import { Button } from "../components/PrimaryButton";

export const NotFound = () => {
  return (
    <div className="m-[5rem_auto] max-w-[73.125rem] pl-8 pr-8">
      <div className="mb-20 mt-20 flex items-center gap-3">
        <span className="text-sm opacity-50">Account</span>
        <span className="text-sm opacity-50">/</span>
        <span>404 Error</span>
      </div>
      <div className="mb-[8.75rem] mt-[8.75rem] flex flex-col items-center">
        <h1 className="font-inter text-[6.875rem] font-medium">
          404 Not Found
        </h1>
        <p className="mt-10">
          Your visited page not found. You may go home page.
        </p>
        <Link to="/" className="mt-20 inline-flex">
          <Button background="red" content="Back to home page" />
        </Link>
      </div>
    </div>
  );
};
