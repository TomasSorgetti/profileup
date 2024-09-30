// Crucial
import React from "react";

// Component CSS
import styles from "./Maintitle.module.css";

const Maintitle = ({ markedtext, title, description }) => {
  return (
    <div className={styles.main_title_container}>
      <span>{markedtext}</span>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
  );
};

export default Maintitle;
