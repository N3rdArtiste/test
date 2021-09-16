import React from "react";
import styles from "./Button.module.css";

type Props = { text: string; onClick: () => void };

function Button({ text, onClick }: Props): JSX.Element {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
