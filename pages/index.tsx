import type { NextPage } from "next";
import styles from "../styles/Index.module.scss";

const Home: NextPage = () => {
  return (
    <main className="main">
      <div className={styles.heroTextGroup}>
        <p className={styles.namePreface}>Hi, I&apos;m</p>
        <h1 className={styles.header}>
          <span className={styles.firstName}>Isaiah</span>
          <span className={styles.lastName}>Althouse</span>
        </h1>
        <p className={styles.description}>
          A creative full-stack web developer
        </p>
      </div>
    </main>
  );
};

export default Home;
