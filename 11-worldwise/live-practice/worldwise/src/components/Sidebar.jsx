import React from "react";
import styles from "./Sidebar.module.css";
import AppNav from "./AppNav";
import Logo from "./Logo";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <p>Lisit of Cities</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
        </p>
      </footer>
    </div>
  );
};

export default Sidebar;
