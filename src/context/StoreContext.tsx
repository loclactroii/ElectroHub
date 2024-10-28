import { createContext, ReactNode, useEffect, useState } from "react";
import { ICartItem, ICategory } from "../interfaces/interfaces";
import {
  CameraIcon,
  ComputerIcon,
  GamingIcon,
  HeadphonesIcon,
  PhoneIcon,
  SmartWatchIcon,
} from "../components/Icons";

type StoreContextType = {
  CartItems: ICartItem[];
  Categories: ICategory[];
  isLogin: boolean;
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  totalPrice: () => void;
  data: ICartItem[];
  setData: React.Dispatch<React.SetStateAction<ICartItem[]>>;
};

interface StoreProviderProps {
  children: ReactNode;
}

export const StoreContext = createContext<StoreContextType | undefined>(
  undefined,
);

const ContextProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const CartItems: ICartItem[] = [
    {
      id: "1",
      image: "/item.png",
      name: "LCD Monitor",
      price: 650,
      quantity: 1,
    },
    {
      id: "2",
      image: "/product.png",
      name: "H1 Gamepad",
      price: 550,
      quantity: 2,
    },
  ];

  const Categories: ICategory[] = [
    {
      icon: <PhoneIcon />,
      name: "Phones",
    },
    {
      icon: <ComputerIcon />,
      name: "Computers",
    },
    {
      icon: <SmartWatchIcon />,
      name: "SmartWatch",
    },
    {
      icon: <CameraIcon />,
      name: "Camera",
    },
    {
      icon: <HeadphonesIcon />,
      name: "Headphones",
    },
    {
      icon: <GamingIcon />,
      name: "Gaming",
    },
  ];

  const [total, setTotal] = useState<number>(0);

  const [data, setData] = useState(CartItems);
  console.log(data);

  const totalPrice = () => {
    let total = 0;
    CartItems.map((item) => {
      total = total + item.price * item.quantity;
    });
    setTotal(total);
  };

  console.log("store render");

  useEffect(() => {
    totalPrice();
  }, []);

  return (
    <StoreContext.Provider
      value={{
        CartItems,
        Categories,
        isLogin,
        total,
        setTotal,
        totalPrice,
        data,
        setData,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default ContextProvider;
