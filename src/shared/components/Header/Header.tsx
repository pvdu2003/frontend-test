import React, { useState } from "react";
import styles from "./Header.module.css";
import Button from "../Button/Button";
import Popup from "../Popup/Popup";
import LoginForm from "../LoginForm/LoginForm";
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const { isLoggedIn, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const navigateToProfile = () => {
    navigate("/profile");
  };
  const handleLogout = async () => {
    await logout();
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={() => navigate("/")}>
        <img src="./images/logo.png" alt="Logo" />
      </div>
      {isLoggedIn ? (
        <div className={styles.userActions}>
          <Button text="Profile" onClick={navigateToProfile} />
          <Button text="Logout" onClick={handleLogout} />
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
