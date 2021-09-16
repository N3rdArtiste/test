import { Product } from ".";

export type CartItem = Product & {
  quantity: number;
};

export interface CartProps {
  data: CartItem[];
  onRemoveFromCartClick: (name: string) => void;
}

export interface CartItemProps {
  onRemoveFromCartClick: () => void;
  name: string;
  price: number;
  quantity: number;
}
