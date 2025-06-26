import React, { useState } from "react";
import styles from "./Header.module.css";
import Button from "../Button/Button";
import Popup from "../Popup/Popup";
import LoginForm from "../LoginForm/LoginForm";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="./images/logo.png" alt="Logo" />
      </div>
      <Button text="Login" onClick={() => setIsOpen(true)} />
      <Popup isOpen={isOpen} onClose={() => setIsOpen(false)} title="My Popup">
        <LoginForm onClose={() => setIsOpen(false)} />
      </Popup>
    </header>
  );
};

export default Header;
