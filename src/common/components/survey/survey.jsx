import React from "react";
import styles from "./survey.module.scss";
import { Home } from "app/pages/home/home";

export const Survey = () => {
  return (
    <div className={styles.container}>
      <Home />
    </div>
  );
};
