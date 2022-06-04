import Head from "next/head";
import { FC } from "react";
import Navbar from "../Navbar/Navbar";
import UnderConstruction from "../UnderConstruction/UnderConstruction";
import styles from "./Layout.module.css";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Portfolio site for isaiahaiasi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.banner}>
          <UnderConstruction />
        </div>
        <div className={styles.splitGroup}>
          <div className={styles.leftGroup}>TODO</div>
          <div className={styles.rightGroup}>
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
