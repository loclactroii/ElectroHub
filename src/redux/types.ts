export interface Cart {
  id: string;
  mainImage: string;
  name: string;
  price: number;
  quantity: number;
  total: number;
}

export interface AddType {
  id: string;
  name: string;
  mainImage: string;
  price: number;
}

export interface ChangeQuantity {
  id: string;
}
