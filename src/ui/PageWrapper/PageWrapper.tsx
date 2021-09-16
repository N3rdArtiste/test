import React, { ReactNode } from "react";
import styles from "./PageWrapper.module.css";

type Props = { children: ReactNode };
function PageWrapper({ children }: Props): JSX.Element {
  return <div className={styles.wrapper}>{children}</div>;
}

export default PageWrapper;
