import React, { ReactNode } from "react";
import styles from "./Card.module.css";

type Props = {
  children: ReactNode;
  customStyle?: React.CSSProperties;
};

function Card({ children, customStyle }: Props) {
  return (
    <div className={styles.card} style={customStyle}>
      {children}
    </div>
  );
}

export default Card;
