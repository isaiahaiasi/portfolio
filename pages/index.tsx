import type { NextPage } from "next";
import FancyGraphic from "../components/FancyGraphic/FancyGraphic";
import Navbar from "../components/Navbar/Navbar";
import SplitContentContainer from "../components/SplitContentContainer/SplitContentContainer";
import styles from "../styles/Index.module.scss";

const Home: NextPage = () => {
  return (
    <SplitContentContainer navbar={<Navbar />}>
      <FancyGraphic />
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
    </SplitContentContainer>
  );
};

export default Home;
