import { Product } from ".";

export type CartItem = Product & {quantity:number}

export interface CartProps {
    data: CartItem[],
    onRemoveFromCartClick: (productName:string) => void
}

export interface CartItemProps extends CartItem {
    onRemoveFromCartClick: () => void
}