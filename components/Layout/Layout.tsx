import Head from "next/head";
import { FC } from "react";
import Navbar from "../Navbar/Navbar";
import UnderConstruction from "../UnderConstruction/UnderConstruction";
import styles from "./Layout.module.scss";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Isaiah Althouse</title>
        <meta name="description" content="Portfolio site for isaiahaiasi" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png?v=01"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png?v=01"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png?v=01"
        />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg?v=01"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/favicon.ico?v=01" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/browserconfig.xml?v=01" />
        <meta name="theme-color" content="#ffffff" />
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
