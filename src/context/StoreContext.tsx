import { createContext, ReactNode, useState } from "react";
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

  return (
    <StoreContext.Provider value={{ CartItems, Categories, isLogin }}>
      {children}
    </StoreContext.Provider>
  );
};

export default ContextProvider;
