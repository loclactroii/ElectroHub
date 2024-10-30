import { createContext, ReactNode, useEffect, useState } from "react";
import { ICartItem, ICategory, IProduct } from "../interfaces/interfaces";
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
  productsData: IProduct[];
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

  const productsData: IProduct[] = [
    {
      id: "1",
      rate: 4,
      mainImage: "/gaming_1.png",
      name: "Havic HV G-92 Gamepad",
      price: 192,
      rating: 4,
      reviews: 150,
      subImage_1: "/gaming_1.png",
      subImage_2: "/gaming_2.png",
      subImage_3: "/gaming_3.png",
      subImage_4: "/gaming_4.png",
      colors: ["white", "red", "green"],
    },
    {
      id: "2",
      rate: 5,
      mainImage: "/product_2_0.png",
      name: "Sony DUALSHOCK 4 Controller White",
      price: 120,
      rating: 5,
      reviews: 91,
      subImage_1: "/product_2_0.jpg",
      subImage_2: "/product_2_1.jpg",
      subImage_3: "/product_2_2.jpg",
      subImage_4: "/product_2_3.jpg",
    },
    {
      id: "3",
      rate: 10,
      mainImage: "/product_3_0.png",
      name: "Asus ROG Raikiri Pro",
      price: 163,
      rating: 4.3,
      reviews: 45,
      subImage_1: "/product_3_0.jpg",
      subImage_2: "/product_3_1.jpg",
      subImage_3: "/product_3_2.jpg",
      subImage_4: "/product_3_3.jpg",
    },
    {
      id: "4",
      rate: 20,
      mainImage: "/product_4_0.png",
      name: "Microsoft Xbox One Elite - Series 2 - Core Blue",
      price: 105,
      rating: 3.5,
      reviews: 213,
      subImage_1: "/product_4_0.jpg",
      subImage_2: "/product_4_1.jpg",
      subImage_3: "/product_4_2.jpg",
      subImage_4: "/product_4_3.jpg",
      colors: ["blue"],
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
        productsData,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default ContextProvider;
