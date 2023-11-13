import { useState, useContext } from "react";
import styles from "@/styles/components/Hero.module.scss";

export default function Index() {
  return (
    <>
      <section className={`${styles.hero} ${styles.hero__home}`}>
        <div className="container">
          <h1>🐴 Pony</h1>
          <h2>
            Pony is an extensible email client for the 21st century, built on
            Electron, and based on everything we love about our favorite email
            clients.
          </h2>
        </div>
      </section>
    </>
  );
}
