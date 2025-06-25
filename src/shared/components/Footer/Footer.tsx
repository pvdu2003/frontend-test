import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.topSection}>
      <div className={styles.column}>
        <div className={styles.logo}>
          <img
            className={styles.logoImage}
            src="./images/logo.png"
            alt="DataWarehouse Logo"
          />
          <span>DataWarehouse</span>
        </div>
        <p>Warehouse Society, 234</p>
        <p>Bahagia Ave Street PRBW 29281</p>
        <p>info@warehouse.project</p>
        <p>1-232-3434 (Main)</p>
      </div>

      <div className={styles.column}>
        <h4>About</h4>
        <ul>
          <li>Profile</li>
          <li>Features</li>
          <li>Careers</li>
          <li>DW News</li>
        </ul>
      </div>

      <div className={styles.column}>
        <h4>Help</h4>
        <ul>
          <li>Support</li>
          <li>Sign up</li>
          <li>Guide</li>
          <li>Reports</li>
          <li>Q&A</li>
        </ul>
      </div>

      <div className={styles.column}>
        <h4>Social Media</h4>
        <div className={styles.socialIcons}>
          <a href="#" className={styles.socialCircle} title="Social">
            <img src="./images/chat.png" alt="" />
          </a>
          <a href="#" className={styles.socialCircle} title="Social">
            <img src="./images/chat.png" alt="" />
          </a>
          <a href="#" className={styles.socialCircle} title="Social">
            <img src="./images/chat.png" alt="" />
          </a>
        </div>
      </div>
    </div>

    <div className={styles.bottomSection}>
      <p>© Datawarehouse™, 2020. All rights reserved.</p>
      <p>Company Registration Number: 21479524.</p>
    </div>
  </footer>
);

export default Footer;
