import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <img src="./images/logo.png" alt="Logo" className={styles.logo} />
      <nav>
        <ul>
          <li>Posts</li>
          <li>Logout</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
