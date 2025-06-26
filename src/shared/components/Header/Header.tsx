import React, { useState } from "react";
import styles from "./Header.module.css";
import Button from "../Button/Button";
import Popup from "../Popup/Popup";
import LoginForm from "../LoginForm/LoginForm";
import { useAuth } from "../../../contexts/AuthContext";
import { logout } from "../../../services/auth.service";

const Header: React.FC = () => {
  const { isLoggedIn } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="./images/logo.png" alt="Logo" />
      </div>
      {isLoggedIn ? (
        <div className={styles.userActions}>
          <Button text="Profile" />
          <Button text="Logout" onClick={logout} />
        </div>
      ) : (
        <>
          <Button text="Login" onClick={() => setIsOpen(true)} />
          <Popup isOpen={isOpen} onClose={() => setIsOpen(false)} title="Login">
            <LoginForm onClose={() => setIsOpen(false)} />
          </Popup>
        </>
      )}
    </header>
  );
};

export default Header;
