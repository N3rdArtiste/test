import { ProductListingProps } from "../../types";
import Container from "../../ui/Container/Container";
import ProductListingItem from "./ProductListingItem";

export const ProductListing = ({
  data,
  onAddToCartClick,
}: ProductListingProps): JSX.Element => {
  return (
    <Container>
      {data.map((product, index) => (
        <Container
          key={product.name + index}
          customStyle={{ flexBasis: "33.33%", padding: 0 }}
        >
          <ProductListingItem
            name={product.name}
            price={product.price}
            onAddToCartClick={() => onAddToCartClick(product)}
          />
        </Container>
      ))}
    </Container>
  );
};
