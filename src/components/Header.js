import React from "react";
import styles from "./Header.module.css";

const Header = ({ onClick }) => {
  return (
    <header className={styles.Header}>
      <button className={styles.DrawerToggle} onClick={onClick}>
        &#9776;
      </button>
    </header>
  );
};

export default Header;
