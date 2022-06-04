import styles from "./UnderConstruction.module.css";

const UnderConstruction = () => {
  return (
    <div className={styles.container}>
      <span className={styles.constructionIcon}>🚧🚧</span>
      <em style={{ padding: "0 10px" }}>
        Site currently under construction! Please be kind.
      </em>
      <span className={styles.constructionIcon}>🚧🚧</span>
    </div>
  );
};

export default UnderConstruction;
