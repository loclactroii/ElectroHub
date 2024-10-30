// export interface ICartItem {
//   id: string;
//   image: string;
//   name: string;
//   price: number;
//   quantity: number;
// }
export interface IProduct {
  id: string;
  rate: number;
  mainImage: string;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  subImage_1?: string;
  subImage_2?: string;
  subImage_3?: string;
  subImage_4?: string;
  colors?: string[];
  size?: string[];
}

export interface IAccount {
  isLogin: boolean;
}
export interface ICategory {
  icon: JSX.Element;
  name: string;
}

export interface ITitle {
  title: string;
  type: string;
}
