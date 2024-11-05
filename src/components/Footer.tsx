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
    <footer className="relative mt-20 w-full bg-black pb-6 pt-20 text-text">
      <div className="mb-[3.75rem] ml-auto mr-auto flex max-w-[73.125rem] flex-wrap justify-between gap-12 pl-8 pr-8">
        {/* Exclusive  */}
        <div className="flex flex-col">
          <h2 className="mb-6 font-inter text-2xl font-bold">Exclusive</h2>
          <p className="mb-6 mt-6 font-poppins text-xl font-medium">
            Subscribe
          </p>
          <p className="mb-4 font-poppins">Get 10% off your first order</p>
          <div className="flex items-center gap-8 border-[1.5px] border-text p-[0.75rem_1rem]">
            <input
              className="bg-transparent outline-none"
              type="text"
              placeholder="Enter your email"
            />
            <SendIcon />
          </div>
        </div>

        {/* Suppport  */}
        <div className="flex max-w-[11rem] flex-col">
          <h2 className="mb-6 font-inter text-2xl font-bold">Support</h2>
          <p>
            123 Vo Van Kiet Street, 8th District, Ho Chi Minh City, Vietnam.
          </p>
          <p className="mb-4 mt-4">electrohub@gmail.com</p>
          <p>+84 123 456 7890 </p>
        </div>

        {/* Account  */}
        <div className="flex flex-col">
          <h2 className="mb-6 font-inter text-2xl font-bold">Account</h2>
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
          <h2 className="mb-6 font-inter text-2xl font-bold">Quick Link</h2>
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
        <div className="bottom-[40px] flex flex-col">
          <h2 className="mb-6 font-inter text-2xl font-bold">Download App</h2>
          <p className="mb-2 text-xs font-medium opacity-70">
            Save $3 with App New User Only
          </p>
          <div className="flex gap-2">
            <QRIcon />
            <div className="flex flex-col justify-between">
              <GGPlayIcon />
              <AppStoreIcon />
            </div>
          </div>
          <div className="mt-6 flex gap-6">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </div>
        </div>
      </div>
      {/* Copyright  */}
      <div className="opacity-30">
        <hr className="h-[1px] w-full bg-white" />
        <p className="mt-4 text-center">
          <CopyrightIcon />
          Copyright ElectroHub 2022. All right reserved
        </p>
      </div>
    </footer>
  );
};
