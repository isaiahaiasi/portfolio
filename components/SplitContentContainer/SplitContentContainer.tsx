import { FC } from "react";

import styles from "./SplitContentContainer.module.scss";

interface Props {
  children: React.ReactNode;
  navbar: JSX.Element;
}

const SplitContentContainer: FC<Props> = ({ children, navbar }) => {
  return (
    <div className={styles.splitGroup}>
      {navbar}
      {children}
    </div>
  );
};

export default SplitContentContainer;
