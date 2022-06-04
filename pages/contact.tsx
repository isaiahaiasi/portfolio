import { NextPage } from "next";
import styles from "../styles/Contact.module.css";

const Contact: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className="main">
        <h1 className="title">Contact</h1>
        <div>Here is my contact info!</div>
      </main>
    </div>
  );
};

export default Contact;
