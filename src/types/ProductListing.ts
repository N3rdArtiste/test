import { Product } from ".";

export interface ProductListingProps {
    data: Product[]
    onAddToCartClick: (product:Product) => void
}

export interface ProductListingItemProps {
    onAddToCartClick: () => void
    name:string;
    price:number;
}