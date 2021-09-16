import React from "react";
import { TypographyVariants } from "../../types/Typography";
import styles from "./Typography.module.css";

type Props = { text: string; variant: TypographyVariants };

function Typography({ text, variant }: Props): JSX.Element {
  switch (variant) {
    case TypographyVariants.Bold:
      return <p className={styles.bold}>{text}</p>;
    case TypographyVariants.SemiBold:
      return <p className={styles.semiBold}>{text}</p>;
    case TypographyVariants.Regular:
      return <p className={styles.regular}>{text}</p>;
  }
}

export default Typography;
