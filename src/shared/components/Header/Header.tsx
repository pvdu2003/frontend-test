import React from "react";
import styles from "./Header.module.css";
import Button from "../Button/Button";

const Header: React.FC = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <img src="./images/logo.png" alt="Logo" />
    </div>
    <Button text="Login" />
  </header>
);

export default Header;
