import React from "react";
import styles from "./.serviceWrapper.module.css";

const ServiceWrapper = ({ children }) => {
  return <div className={styles.serviceWrapper}>{children}</div>;
};

export default ServiceWrapper;
