import React from "react";
import styles from "./surveysAdd.module.scss";

export const SurveysAdd = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>anket</h1>
        <div className={styles.survey}>
          <input type="text" name="1" placeholder="1.soru" />
          <input type="text" name="2" placeholder="2.soru" />
          <input type="text" name="3" placeholder="3.soru" />
        </div>
        <button className={styles.button}>bas</button>
      </div>
    </div>
  );
};
