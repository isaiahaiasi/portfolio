import type { NextPage } from "next";
import styles from "../styles/Index.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className="main">
        <div className={styles.introduction}>
          <p className={styles.namePreface}>Hi, I&apos;m</p>
          <h1 className="title">
            <span className={styles.firstName}>Isaiah</span>
            <span className={styles.lastName}>Althouse</span>
          </h1>
          <p className={styles.description}>
            A creative full-stack web developer
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;
