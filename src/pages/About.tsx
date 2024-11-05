import {
  DollarIcon,
  HeadPhonesIcon,
  InstagramIcon,
  LinkedInIcon_1,
  MarketIcon,
  MoneyBagIcon,
  ShieldIcon,
  ShoppingBagIcon,
  TruckIcon,
  TwitterIcon,
} from "../components/Icons";

interface Profit {
  amount: number;
  type: string;
  icon: JSX.Element;
}

interface Service {
  service: string;
  benefit: string;
  icon: JSX.Element;
}

const PROFITS: Profit[] = [
  {
    amount: 10.5,
    type: "Sellers active our site",
    icon: <MarketIcon />,
  },
  {
    amount: 33,
    type: "Monthly Product Sale",
    icon: <DollarIcon />,
  },
  {
    amount: 45.5,
    type: "Customer active in our site",
    icon: <ShoppingBagIcon />,
  },
  {
    amount: 25,
    type: "Annual gross sale in our site",
    icon: <MoneyBagIcon />,
  },
];

const SERVICES: Service[] = [
  {
    service: "FREE AND FAST DELIVERY",
    benefit: "Free delivery for all orders over $140",
    icon: <TruckIcon />,
  },
  {
    service: "24/7 CUSTOMER SERVICE",
    benefit: "Friendly 24/7 customer support",
    icon: <HeadPhonesIcon />,
  },
  {
    service: "MONEY BACK GUARANTEE",
    benefit: "We reurn money within 30 days",
    icon: <ShieldIcon />,
  },
];

export const About = () => {
  return (
    <div>
      <div className="mb-20 mt-20 flex gap-3">
        <span className="text-sm opacity-50">Home</span>
        <span className="text-sm opacity-50">/</span>
        <span>My Account</span>
      </div>
      {/* Story  */}
      <div className="relative mb-[8.75rem] flex h-[38.0625rem] justify-between">
        <div className="flex max-w-[32.8125rem] basis-full flex-col justify-center">
          <h1 className="font-inter text-[3.375rem] font-semibold">
            Our Story
          </h1>
          <p className="mt-10">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </p>
          <p className="mt-6">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="flex basis-full items-center">
          <img className="top-0" src="/story.png" alt="" />
        </div>
      </div>

      {/* Profit  */}
      <div className="grid grid-cols-4 gap-[1.875rem] max-lg:grid-cols-2">
        {PROFITS.map((profit: Profit, index: number): JSX.Element => {
          return (
            <div
              key={index}
              className="border-[rgba(0, 0, 0, 0.30)] group inline-flex basis-full cursor-pointer flex-col items-center rounded border p-[1.875rem_0] duration-300 hover:bg-secondary_2 hover:text-white"
            >
              {/* Icon  */}
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#c0c0c0] duration-300 group-hover:bg-[rgba(255,255,255,0.3)]">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black stroke-white opacity-100 duration-300 group-hover:bg-[#FAFAFA] group-hover:stroke-black">
                  {profit.icon}
                </div>
              </div>
              <h2 className="mt-6 font-inter text-[2rem] font-bold">
                {profit.amount}k
              </h2>
              <span>{profit.type}</span>
            </div>
          );
        })}
      </div>

      {/* ??  */}
      <div className="relative mt-[8.75rem] flex justify-between gap-4">
        <div className="inline-flex w-[23.125rem] flex-col">
          <div className="flex items-end justify-center rounded bg-secondary">
            <img src="/tomcruise.png" alt="" />
          </div>
          <h2 className="mt-8 font-inter text-[2rem] font-medium">
            Tom Cruise
          </h2>
          <span className="mt-2">Founder & Chairman</span>
          <div className="mt-4 flex gap-4">
            <TwitterIcon />
            <div className="stroke-black">
              <InstagramIcon />
            </div>
            <div className="fill-black">
              <LinkedInIcon_1 />
            </div>
          </div>
        </div>
        <div className="inline-flex w-[23.125rem] flex-col">
          <div className="flex items-end justify-center rounded bg-secondary">
            <img src="/emmawatson.png" alt="" />
          </div>
          <h2 className="mt-8 font-inter text-[2rem] font-medium">
            Emma Watson
          </h2>
          <span className="mt-2">Managing Director</span>
          <div className="mt-4 flex gap-4">
            <TwitterIcon />
            <div className="stroke-black">
              <InstagramIcon />
            </div>
            <div className="fill-black">
              <LinkedInIcon_1 />
            </div>
          </div>
        </div>
        <div className="inline-flex w-[23.125rem] flex-col">
          <div className="flex items-end justify-center rounded bg-secondary">
            <img src="/willsmith.png" alt="" />
          </div>
          <h2 className="mt-8 font-inter text-[2rem] font-medium">
            Will Smith
          </h2>
          <span className="mt-2">Product Designer</span>
          <div className="mt-4 flex gap-4">
            <TwitterIcon />
            <div className="stroke-black">
              <InstagramIcon />
            </div>
            <div className="fill-black">
              <LinkedInIcon_1 />
            </div>
          </div>
        </div>
        {/* Navigation  */}
        <div className="absolute bottom-[-3rem] left-2/4 flex translate-x-[-50%] items-center gap-3">
          <div className="h-3 w-3 cursor-pointer rounded-full bg-black opacity-30"></div>
          <div className="h-3 w-3 cursor-pointer rounded-full bg-black opacity-30"></div>
          <div className="h-3 w-3 cursor-pointer rounded-full border-2 border-[rgba(0,0,0,0.3)] bg-secondary_2"></div>
          <div className="h-3 w-3 cursor-pointer rounded-full bg-black opacity-30"></div>
          <div className="h-3 w-3 cursor-pointer rounded-full bg-black opacity-30"></div>
        </div>
      </div>

      {/* Service  */}
      <div className="mt-[8.75rem] flex justify-between">
        {SERVICES.map((service: Service, index: number): JSX.Element => {
          return (
            <div
              key={index}
              className="group inline-flex basis-full cursor-pointer flex-col items-center rounded p-[1.875rem_0] duration-300 hover:bg-secondary_2 hover:text-white"
            >
              {/* Icon  */}
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#c0c0c0] duration-300 group-hover:bg-[rgba(255,255,255,0.3)]">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black stroke-white opacity-100 duration-300 group-hover:bg-[#FAFAFA] group-hover:stroke-black">
                  {service.icon}
                </div>
              </div>
              <h2 className="mt-6 text-center font-inter text-xl font-semibold">
                {service.service}
              </h2>
              <span className="mt-2 text-center text-sm">
                {service.benefit}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
