import React from "react";
import Link from "next/link";
import styles from "@/styles/components/Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Link href="/">🐴</Link>
      </div>
      <ul className={styles.header__list}>
        <li className={`${styles.header__item} hidden md:block`}>
          <Link href="/docs" className={styles.header__link}>
            Docs
          </Link>
        </li>
        <li className={styles.header__item}>
          <Link className={styles.header__button} href="/developer-jobs/new">
            Join Waitlist
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
