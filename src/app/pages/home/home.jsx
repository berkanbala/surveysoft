import React from "react";
import styles from "./home.module.scss";
import { Header } from "common/components/layout/header/header";
import { Footer } from "common/components/layout/footer/footer";

export const Home = () => {
  return (
    <div className={styles.container}>
      <Header />

      <Footer />
    </div>
  );
};
