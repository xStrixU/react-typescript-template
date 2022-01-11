export type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export type ProductID = number;

export interface ProductType {
  id: ProductID;
  name: string;
  description: string;
  price: number;
  rating: number;
  img: string;
}

export interface CartProductType {
  id: ProductID;
  quantity: number;
}
