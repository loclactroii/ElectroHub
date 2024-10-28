export interface ICartItem {
  id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

export interface IProduct {
  id: string;
  rate: number;
  image: string;
  title: string;
  price: number;
  rating: number;
  remaining: number;
}

export interface IAccount {
  isLogin: boolean;
}

export interface ICardItemChild {
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  id: string;
  index: number;
}

export interface ICategory {
  icon: JSX.Element;
  name: string;
}

export interface ITitle {
  title: string;
  type: string;
}
