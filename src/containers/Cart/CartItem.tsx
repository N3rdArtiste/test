import Big from "big.js";
import { CartItemProps } from "../../types";
import { TypographyVariants } from "../../types/Typography";
import Button from "../../ui/Button/Button";
import Card from "../../ui/Card/Card";
import Typography from "../../ui/Typography/Typography";
import { truncateNumber } from "../../utils/priceUtils";

const CartItem = ({
  name,
  price,
  quantity,
  onRemoveFromCartClick,
}: CartItemProps): JSX.Element => {
  const totalPrice = truncateNumber(+new Big(price).mul(quantity), 2).toFixed(
    2
  );
  return (
    <Card customStyle={{ margin: "10px 0px" }}>
      <Typography variant={TypographyVariants.Bold} text={name} />
      <Typography
        variant={TypographyVariants.SemiBold}
        text={`Price: $${truncateNumber(price, 2).toFixed(2)}`}
      />
      <Typography
        variant={TypographyVariants.Regular}
        text={`Quantity: ${quantity}`}
      />
      <Typography
        variant={TypographyVariants.Regular}
        text={`Total: $${totalPrice}`}
      />
      <Button text="Remove from Cart" onClick={onRemoveFromCartClick} />
    </Card>
  );
};

export default CartItem;
