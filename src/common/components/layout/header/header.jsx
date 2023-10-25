import React from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className={styles.container}>
      <h2>ANKET</h2>
      <ul>
        <li>
          <Link to="/surveys">anketlerim</Link>
        </li>
        <li>
          <Link to={"/surveysAdd"}>anket oluştur</Link>
        </li>
      </ul>
    </div>
  );
};
