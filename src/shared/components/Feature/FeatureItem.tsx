import React, { useEffect } from "react";
import styles from "./FeatureItem.module.css";
import IconButton from "../IconButton/IconButton";
import { useScrollVisible } from "../../../hooks/useScrollVisible";

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
  const item = useScrollVisible();
  useEffect(() => {
    const el = item.ref.current;
    if (el && backgroundImage) {
      el.style.setProperty("--feature-bg", `url(${backgroundImage})`);
    }
  }, [backgroundImage, item.ref]);

  return (
    <div
      ref={item.ref}
      className={`${styles.card} ${styles.featureItem} animate from-left ${
        item.visible ? "visible" : ""
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
