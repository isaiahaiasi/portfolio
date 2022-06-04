import Head from "next/head";
import { FC } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import UnderConstruction from "../UnderConstruction/UnderConstruction";
import styles from "./Layout.module.css";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Portfolio site for isaiahaiasi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <UnderConstruction />
        <ThemeSwitcher />
        <Navbar />
      </div>
      <div className={styles.contentGroup}>{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
