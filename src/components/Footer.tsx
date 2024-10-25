import {
  AppStoreIcon,
  CopyrightIcon,
  FacebookIcon,
  GGPlayIcon,
  InstagramIcon,
  LinkedInIcon,
  QRIcon,
  SendIcon,
  TwitterIcon,
} from "./Icons";

export const Footer = () => {
  return (
    <footer className="mt-20 pt-20 pb-6 bg-black w-full text-text">
      <div className="flex justify-between ml-32 mr-32 mb-[3.75rem]">
        {/* Exclusive  */}
        <div className="flex flex-col">
          <h2 className="mb-6 font-inter font-bold text-2xl">Exclusive</h2>
          <p className="text-xl font-medium font-poppins mt-6 mb-6">
            Subscribe
          </p>
          <p className="font-poppins mb-4">Get 10% off your first order</p>
          <div className="flex gap-8 items-center p-[0.75rem_1rem] border-[1.5px] border-text">
            <input
              className="bg-transparent outline-none"
              type="text"
              placeholder="Enter your email"
            />
            <SendIcon />
          </div>
        </div>

        {/* Suppport  */}
        <div className="flex flex-col max-w-[11rem]">
          <h2 className="mb-6 font-inter font-bold text-2xl">Support</h2>
          <p>
            123 Vo Van Kiet Street, 8th District, Ho Chi Minh City, Vietnam.
          </p>
          <p className="mt-4 mb-4">electrohub@gmail.com</p>
          <p>+84 123 456 7890 </p>
        </div>

        {/* Account  */}
        <div className="flex flex-col">
          <h2 className="mb-6 font-inter font-bold text-2xl">Account</h2>
          <ul className="flex flex-col gap-4">
            <li>My account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Link  */}
        <div className="flex flex-col">
          <h2 className="mb-6 font-inter font-bold text-2xl">Quick Link</h2>
          <ul className="flex flex-col gap-4">
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Terms Of Use</a>
            </li>
            <li>
              <a href="/">FAQ</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>

        {/* Download App  */}
        <div className="flex flex-col">
          <h2 className="mb-6 font-inter font-bold text-2xl">Download App</h2>
          <p className="font-medium text-xs opacity-70 mb-2">
            Save $3 with App New User Only
          </p>
          <div className="flex gap-2">
            <QRIcon />
            <div className="flex flex-col justify-between">
              <GGPlayIcon />
              <AppStoreIcon />
            </div>
          </div>
          <div className="flex gap-6 mt-6">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </div>
        </div>
      </div>
      {/* Copyright  */}
      <div className="opacity-30">
        <hr className="w-full bg-white h-[1px]" />
        <p className="text-center mt-4">
          <CopyrightIcon />
          Copyright ElectroHub 2022. All right reserved
        </p>
      </div>
    </footer>
  );
};
