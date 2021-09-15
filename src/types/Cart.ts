import { Product } from ".";

export type CartItem = Product & {
    quantity:number;
}

export interface CartProps {
    data: CartItem[];
    onRemoveFromCartClick: (id:number) => void;
}

export interface CartItemProps {
    onRemoveFromCartClick: () => void;
    name:string;
    price:number;
    quantity:number;
}