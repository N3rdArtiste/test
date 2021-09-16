import Big from "big.js";
import { CartProps } from "../../types";
import { TypographyVariants } from "../../types/Typography";
import Container from "../../ui/Container/Container";
import Typography from "../../ui/Typography/Typography";
import { truncateNumber } from "../../utils/priceUtils";
import CartItem from "./CartItem";

export const Cart = ({
  data,
  onRemoveFromCartClick,
}: CartProps): JSX.Element => {
  const total = data
    .reduce((acc, cv) => {
      const a = new Big(acc);
      const price = new Big(cv.price);
      return +truncateNumber(+a.add(price.mul(cv.quantity)), 2);
    }, 0)
    .toFixed(2);
  return (
    <Container
      customStyle={{
        height: "100%",
        flexDirection: "column",
        flexWrap: "nowrap",
      }}
    >
      <h2>Cart</h2>
      <div style={{ flexGrow: 1, overflow: "scroll" }}>
        {data.map((item, index) => (
          <Container key={item.name + index} customStyle={{ padding: 0 }}>
            <CartItem
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              onRemoveFromCartClick={() => onRemoveFromCartClick(item.name)}
            />
          </Container>
        ))}
      </div>
      <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
        <Typography variant={TypographyVariants.SemiBold} text={"Total: $"} />
        <Typography variant={TypographyVariants.Regular} text={total} />
      </div>
    </Container>
  );
};
