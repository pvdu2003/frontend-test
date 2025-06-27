import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { useAuth } from "../../../contexts/AuthContext";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <aside className={styles.sidebar}>
      <img src="./images/logo.png" alt="Logo" className={styles.logo} />
      <nav>
        <ul className={styles.menu}>
          <li onClick={() => handleNavigation("/")}>
            <img src="./images/home.png" alt="Home" className={styles.icon} />
            <span className={styles.text}>Home</span>
          </li>
          <li onClick={() => handleNavigation("/posts")}>
            <img src="./images/post.png" alt="Posts" className={styles.icon} />
            <span className={styles.text}>Posts</span>
          </li>
          <li onClick={handleLogout}>
            <img
              src="./images/logout.png"
              alt="Logout"
              className={styles.icon}
            />
            <span className={styles.text}>Logout</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
