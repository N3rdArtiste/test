import { Product } from ".";

export interface ProductListingProps {
    data: Product[]
    onAddToCartClick: (product:Product) => void
}

export interface ProductListingItemProps extends Product {
    onAddToCartClick: () => void
}