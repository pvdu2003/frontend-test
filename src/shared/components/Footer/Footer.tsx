import React from "react";
import styles from "./Footer.module.css";
import { useScrollVisible } from "../../../hooks/useScrollVisible";

const Footer: React.FC = () => {
  const footer = useScrollVisible();

  return (
    <footer
      ref={footer.ref}
      className={`${styles.footer} ${styles.featureItem} animate from-bottom ${
        footer.visible ? "visible" : ""
      }`}
    >
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
          <p>
            <a href="mailto:info@warehouse.project">info@warehouse.project</a>
          </p>
          <p>
            <a href="tel:+12323434">1-232-3434 (Main)</a>
          </p>
        </div>

        <div className={styles.column}>
          <h4>About</h4>
          <ul>
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">DW News</a>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Help</h4>
          <ul>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Sign up</a>
            </li>
            <li>
              <a href="#">Guide</a>
            </li>
            <li>
              <a href="#">Reports</a>
            </li>
            <li>
              <a href="#">Q&A</a>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Social Media</h4>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialCircle} title="Facebook">
              <img src="./images/facebook.png" alt="Facebook" />
            </a>
            <a href="#" className={styles.socialCircle} title="YouTube">
              <img src="./images/youtube.png" alt="YouTube" />
            </a>
            <a href="#" className={styles.socialCircle} title="Chat">
              <img src="./images/chat.png" alt="Chat" />
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
};

export default Footer;
