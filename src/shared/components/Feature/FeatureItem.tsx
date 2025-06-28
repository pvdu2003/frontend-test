import React, { useEffect, useRef, useState } from "react";
import styles from "./FeatureItem.module.css";
import IconButton from "../IconButton/IconButton";

interface FeatureItemProps {
  title: string;
  description: string;
  icon: string;
  backgroundImage: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  title,
  description,
  icon,
  backgroundImage,
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = itemRef.current;
    if (el && backgroundImage) {
      el.style.setProperty("--feature-bg", `url(${backgroundImage})`);
    }
  }, [backgroundImage]);

  useEffect(() => {
    const handleScroll = () => {
      const el = itemRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const inView = rect.top <= window.innerHeight - 60 && rect.bottom >= 60;
      setVisible(inView);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={itemRef}
      className={`${styles.card} ${styles.featureItem} ${
        visible ? styles.visible : ""
      }`}
    >
      <img className={styles.featureImage} src={icon} alt={title} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <IconButton text="Learn More" />
      </div>
    </div>
  );
};

export default FeatureItem;
