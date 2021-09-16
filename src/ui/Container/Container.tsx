import { ReactNode } from "react";
import styles from "./Container.module.css";

type Props = { children: ReactNode; customStyle?: React.CSSProperties };

const Container = ({ children, customStyle }: Props): JSX.Element => {
  return (
    <div className={styles.container} style={customStyle}>
      {children}
    </div>
  );
};

export default Container;
