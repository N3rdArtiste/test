import { ProductListingItemProps } from "../../types";
import { TypographyVariants } from "../../types/Typography";
import Button from "../../ui/Button/Button";
import Card from "../../ui/Card/Card";
import Typography from "../../ui/Typography/Typography";
import { truncateNumber } from "../../utils/priceUtils";
import styles from "./ProductListingItem.module.css";
const ProductListingItem = ({
  name,
  price,
  onAddToCartClick,
}: ProductListingItemProps): JSX.Element => {
  return (
    <Card
      customStyle={{
        margin: 10,
      }}
    >
      <Typography variant={TypographyVariants.Bold} text={name} />
      <div className={styles.priceTextContainer}>
        <Typography variant={TypographyVariants.SemiBold} text={"Price: $"} />
        <Typography
          variant={TypographyVariants.Regular}
          text={truncateNumber(price, 2).toFixed(2)}
        />
      </div>
      <Button onClick={onAddToCartClick} text="Add to Cart" />
    </Card>
  );
};

export default ProductListingItem;
